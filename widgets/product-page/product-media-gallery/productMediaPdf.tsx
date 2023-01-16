import React from 'react';

import { useIntl } from 'react-intl';
import { Document } from 'react-pdf';

import { PortalMessageBar } from '@components/messages/portalMessageBar';
import {
  ISpinnerStyles,
  IStackStyles,
  IconButton,
  MessageBarType,
  Spinner,
  SpinnerSize,
  Stack,
  TooltipHost,
  useTheme
} from '@fluentui/react';
import { defineMessages } from '@formatjs/intl';
import { messageIds } from '@services/i18n';
import initializeReactPdf from '@services/react-pdf/configuration';

import { ProductMediaGalleryItem } from './productMediaGallery.types';
import { ProductDisplayPdfPage } from './productMediaPdfPage';

// Initialization of react-pdf global worker
initializeReactPdf();

const messages = defineMessages({
  loading: {
    id: messageIds.pages.product.sections.top.display.pdf.loading,
    defaultMessage: 'Loading document...',
    description: 'Text to display when document is loading'
  },
  error: {
    id: messageIds.pages.product.sections.top.display.pdf.error,
    defaultMessage: 'Something went wrong',
    description: 'Text to display when document encountered an error'
  },
  noData: {
    id: messageIds.pages.product.sections.top.display.pdf.noData,
    defaultMessage: 'Something went missing',
    description: 'Text to display when document with no data was encountered'
  },
  zoomIn: {
    id: messageIds.pages.product.sections.top.display.pdf.zoomIn,
    defaultMessage: 'Zoom in',
    description: 'Button alt for zoom in button'
  },
  zoomOut: {
    id: messageIds.pages.product.sections.top.display.pdf.zoomOut,
    defaultMessage: 'Zoom out',
    description: 'Button alt for zoom out button'
  },
  openNew: {
    id: messageIds.pages.product.sections.top.display.pdf.openNew,
    defaultMessage: 'Open in new tab',
    description: 'Button alt for open in new tab button'
  },
  scaleToWidth: {
    id: messageIds.pages.product.sections.top.display.pdf.scaleToWidth,
    defaultMessage: 'Scale to width',
    description: 'Button alt for scale to width button'
  },
  fitToWidth: {
    id: messageIds.pages.product.sections.top.display.pdf.fitToWidth,
    defaultMessage: 'Fit to width',
    description: 'Button alt for fit to width button'
  },
  fitToPage: {
    id: messageIds.pages.product.sections.top.display.pdf.fitToPage,
    defaultMessage: 'Fit to page',
    description: 'Button alt for fit to page button'
  }
});

enum ProductDisplayPdfDocumentState {
  Initial = 'initial',
  NoData = 'noData',
  Error = 'error',
  Ready = 'ready'
}

interface ProductMediaPdfProps {
  item: ProductMediaGalleryItem;
  modal: boolean | undefined;
  onDocumentClick?: () => void;
}
interface ProductDisplayPdfDocumentStyles {
  pdfDocumentWrapper: IStackStyles;
  pdfActionsWrapper: IStackStyles;
  spinnerWrapper: IStackStyles;
  errorMessage: IStackStyles;
  spinner: ISpinnerStyles;
  documentWrapper: IStackStyles;
}

// eslint-disable-next-line max-len
export const ProductMediaPdf: React.FC<ProductMediaPdfProps> = ({
  item,
  modal,
  onDocumentClick
}) => {
  const { effects, palette, spacing, fonts } = useTheme();
  const { formatMessage } = useIntl();
  const [numberOfPages, setNumberOfPages] = React.useState(0);

  const [activePageNumber, setActivePageNumber] = React.useState(1);
  const [documentState, setDocumentState] =
    React.useState<ProductDisplayPdfDocumentState>(
      ProductDisplayPdfDocumentState.Initial
    );

  const [pageScale, setPageScale] = React.useState(1);
  const [scaleToWidth, setScaleToWidth] = React.useState(false);

  const handleSetActivePageNumber = (
    e: React.MouseEvent<HTMLElement>,
    value: number
  ) => {
    e.stopPropagation();
    setActivePageNumber(value);
  };

  const styles: ProductDisplayPdfDocumentStyles = {
    pdfActionsWrapper: {
      root: {
        position: 'absolute',
        bottom: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: palette.white,
        borderRadius: effects.roundedCorner4,
        boxShadow: effects.elevation8,
        zIndex: 1
      }
    },
    pdfDocumentWrapper: {
      root: {
        height: '100%',
        position: 'relative',
        selectors: {
          '.react-pdf__Document': {
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            flexFlow: 'row wrap'
          }
        },
        cursor: 'grabbing',
        justifyContent: 'center'
      }
    },
    documentWrapper: {
      root: {
        overflow: 'auto',
        height: '100%',
        width: 'auto'
      }
    },
    spinnerWrapper: {
      root: {
        height: '80%',
        width: '80%',
        margin: 'auto',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    },
    errorMessage: {
      root: {
        width: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    },
    spinner: {
      label: {
        ...fonts.mediumPlus,
        color: palette.themeDark
      }
    }
  };

  function renderSpinner(text: string): JSX.Element {
    return (
      <Stack
        verticalAlign="center"
        horizontalAlign="center"
        styles={styles.spinnerWrapper}
        tokens={{ childrenGap: spacing.l1 }}
      >
        <Spinner
          styles={styles.spinner}
          size={SpinnerSize.large}
          label={text}
        />
      </Stack>
    );
  }

  function renderErrorMessage(text: string): JSX.Element {
    return (
      <Stack styles={styles.errorMessage}>
        <PortalMessageBar messageBarType={MessageBarType.error}>
          {text}
        </PortalMessageBar>
      </Stack>
    );
  }

  return (
    <Stack key={item.id} styles={styles.pdfDocumentWrapper}>
      {modal && (
        <Stack styles={styles.pdfActionsWrapper} horizontal>
          <Stack.Item>
            <TooltipHost
              content={formatMessage(messages.zoomOut)}
              calloutProps={{ gapSpace: 14 }}
            >
              <IconButton
                iconProps={{ iconName: 'ZoomOut' }}
                disabled={pageScale < 0.3}
                onClick={() => {
                  setPageScale(pageScale - 0.2);
                }}
              />
            </TooltipHost>
          </Stack.Item>
          <Stack.Item>
            <TooltipHost
              content={formatMessage(messages.zoomIn)}
              calloutProps={{ gapSpace: 14 }}
            >
              <IconButton
                iconProps={{ iconName: 'ZoomIn' }}
                onClick={() => {
                  setPageScale(pageScale + 0.2);
                }}
              />
            </TooltipHost>
          </Stack.Item>
          <Stack.Item>
            <TooltipHost
              content={
                scaleToWidth
                  ? formatMessage(messages.fitToPage)
                  : formatMessage(messages.fitToWidth)
              }
              calloutProps={{ gapSpace: 14 }}
            >
              <IconButton
                iconProps={{ iconName: scaleToWidth ? 'FitPage' : 'FitWidth' }}
                onClick={() => {
                  setScaleToWidth(!scaleToWidth);
                  setPageScale(1);
                }}
              />
            </TooltipHost>
          </Stack.Item>
          {/* TODO: add open in new tab */}
        </Stack>
      )}
      <Stack className="list-scroll" styles={styles.documentWrapper}>
        <Document
          file={item.src}
          onLoadSuccess={({ numPages }) => {
            setNumberOfPages(numPages);
            setDocumentState(ProductDisplayPdfDocumentState.Ready);
          }}
          options={{
            cMapUrl: '/_next/cmaps/',
            cMapPacked: true,
            disableStream: true,
            disableAutoFetch: true
          }}
          onLoadError={error => {
            //TODO send error message to application insights
            setDocumentState(ProductDisplayPdfDocumentState.Error);
            console.error(error);
          }}
          onSourceError={error => {
            //TODO send error message to application insights
            setDocumentState(ProductDisplayPdfDocumentState.NoData);
            console.error(error);
          }}
          loading={renderSpinner(formatMessage(messages.loading))}
          error={renderErrorMessage(formatMessage(messages.error))}
          noData={renderErrorMessage(formatMessage(messages.noData))}
        >
          {documentState === ProductDisplayPdfDocumentState.Ready &&
            modal &&
            [...Array(numberOfPages)]
              .map((x, i) => i + 1)
              .map(page => {
                return (
                  <ProductDisplayPdfPage
                    key={`${page}-${scaleToWidth}`}
                    pageNumber={page}
                    renderSpinner={renderSpinner}
                    scale={pageScale}
                    modal={true}
                    scaleToWidth={scaleToWidth}
                    numberOfPages={numberOfPages}
                  />
                );
              })}
          {documentState === ProductDisplayPdfDocumentState.Ready && !modal && (
            <ProductDisplayPdfPage
              pageNumber={activePageNumber}
              renderSpinner={renderSpinner}
              numberOfPages={numberOfPages}
              setActivePageNumber={handleSetActivePageNumber}
              onPageClick={onDocumentClick}
            />
          )}
        </Document>
      </Stack>
    </Stack>
  );
};
