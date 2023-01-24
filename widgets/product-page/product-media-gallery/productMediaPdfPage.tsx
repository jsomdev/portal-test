import React from 'react';

import { Page } from 'react-pdf';

import {
  IStackItemStyles,
  IStackStyles,
  IconButton,
  Stack,
  Text,
  mergeStyleSets,
  useTheme
} from '@fluentui/react';

/**
 * A function that will calculate the width of the page each time it's loaded
 * calculated on initial render, on scale & scaleToWidth changes
 * Most conditions will return the same value but it's easier to make changes to
 * if needed if all conditions that are taken into account are printed
 *
 */
function calculatePageWidth(
  availableContentWidth: number,
  pdfDefaultPageWidth: number,
  scaleToWidth: boolean
): number {
  let pageWidth = pdfDefaultPageWidth;
  if (availableContentWidth > pdfDefaultPageWidth && !scaleToWidth) {
    pageWidth = pdfDefaultPageWidth;
  }
  if (availableContentWidth > pdfDefaultPageWidth && scaleToWidth) {
    pageWidth = availableContentWidth;
  }
  if (availableContentWidth < pdfDefaultPageWidth && !scaleToWidth) {
    pageWidth = availableContentWidth;
  }
  if (availableContentWidth < pdfDefaultPageWidth && scaleToWidth) {
    pageWidth = availableContentWidth;
  }
  return pageWidth;
}

interface ProductDisplayPdfPageProps {
  pageNumber: number;
  scale?: number;
  scaleToWidth?: boolean;
  modal?: boolean;
  renderSpinner: (value: string) => JSX.Element;
  numberOfPages: number;
  setActivePageNumber?: (
    e: React.MouseEvent<HTMLElement>,
    value: number
  ) => void;
  onPageClick?: () => void;
}

export interface ProductDisplayPdfDefaultPageStyles {
  pageWrapper: IStackStyles;
  pdfPaginationWrapper: IStackStyles;
  paginationNumber: IStackItemStyles;
}

export interface ProductDisplayPdfModalPageStyles {
  modalStyles: IStackItemStyles;
}

enum ProductDisplayPdfPageState {
  Initial = 'initial',
  NoData = 'noData',
  Error = 'error',
  Loading = 'loading',
  Rendering = 'rendering',
  Ready = 'ready'
}

/**
 * A wrapper for react-pdf <Page> component that will render a pdf document page
 * @param pageNumber the page number of the pdf document that is rendered by this component
 * @param scale Defines the scale in which PDF file should be rendered. @default 1.0
 * @param scaleToWidth a boolean that determines if the page will take the available modal width. @default false
 * @param modal set to true if the page will be rendered in our modal view. @default false
 * @param numberOfPages the number of pages that are contained in the pdf document
 */
export const ProductDisplayPdfPage: React.FC<ProductDisplayPdfPageProps> = ({
  pageNumber,
  scale = 1,
  scaleToWidth = false,
  modal = false,
  renderSpinner,
  numberOfPages,
  setActivePageNumber,
  onPageClick
}) => {
  const messages = {
    rendering: 'Visualizing page...',
    pagination: 'of'
  };
  const { effects, palette, spacing } = useTheme();
  const [pdfDefaultPageWidth, setPdfDefaultPageWidth] = React.useState(0);
  const [pageState, setPageState] = React.useState<ProductDisplayPdfPageState>(
    ProductDisplayPdfPageState.Initial
  );

  React.useEffect(() => {
    setPageState(ProductDisplayPdfPageState.Rendering);
  }, [scale, scaleToWidth]);

  /**
   * Instead of using a window event listener for window size changes, we will
   * calculate the available width each time the user clicks one of the pdf action buttons
   * 90 viewport width - 32px (for padding) - 8px (for scrollbar)
   */
  const availableContentWidth = React.useMemo(() => {
    const windowWidth = window.innerWidth;
    const contentWidth = windowWidth * 0.9 - 32 - 8;
    return contentWidth;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scaleToWidth, scale]);

  const styles: ProductDisplayPdfDefaultPageStyles = {
    pdfPaginationWrapper: {
      root: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: 10,
        backgroundColor: palette.white,
        borderRadius: effects.roundedCorner2,
        boxShadow: effects.elevation4
      }
    },
    pageWrapper: {
      root: {
        height: '100%',
        position: 'relative',
        selectors: {
          '.react-pdf__Page': {
            height: '100%',

            width: 'auto',
            position: 'relative'
          },
          '.react-pdf__Page__canvas': {
            width: 'auto !important',
            height: '90% !important',
            margin: 'auto',
            marginTop: '5% !important',
            boxShadow: effects.elevation4,
            cursor: 'zoom-in'
          }
        }
      }
    },
    paginationNumber: {
      root: {
        width: 60,
        textAlign: 'center',
        cursor: 'default'
      }
    }
  };

  // Modal specific pdf view styles
  const modalStyles: ProductDisplayPdfModalPageStyles = {
    modalStyles: {
      root: {
        height: 'auto',
        width: '100%',
        selectors: {
          '.react-pdf__Page': {
            height: 'auto',
            width: '100%',
            margin: `${spacing.m} 0`
          },
          '.react-pdf__Page__canvas': {
            width: 'auto !important',
            height: 'auto !important',
            maxWidth: 'none !important',
            marginLeft: 'auto !important',
            marginRight: 'auto !important',
            marginTop: '0 !important',
            boxShadow: effects.elevation8,
            cursor: 'default'
          }
        }
      }
    }
  };

  // We merge the default styles.pageWRapper styles with modalStyles
  // to avoid having to use a condition in each css property
  const mergedModalStyles = mergeStyleSets(
    styles.pageWrapper,
    modalStyles.modalStyles
  );

  return (
    <Stack
      styles={modal ? mergedModalStyles : styles.pageWrapper}
      onClick={onPageClick}
    >
      <Page
        onLoadSuccess={page => {
          setPdfDefaultPageWidth(page.originalWidth);
          // the rendering process starts after page load
          setPageState(ProductDisplayPdfPageState.Rendering);
        }}
        onRenderSuccess={() => {
          setTimeout(() => {
            setPageState(ProductDisplayPdfPageState.Ready);
          }, 50);
        }}
        // the loading of a page happens so fast that it looks glitchy if we show a loader,
        // rendering starts almost instantaneously so we pass an empty string
        loading={''}
        pageNumber={pageNumber}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        scale={scale}
        width={
          calculatePageWidth(
            availableContentWidth,
            pdfDefaultPageWidth,
            scaleToWidth
          ) || 0
        }
      />
      {pageState !== ProductDisplayPdfPageState.Ready &&
        pageState === ProductDisplayPdfPageState.Rendering &&
        renderSpinner(messages.rendering)}
      {!modal && (
        <Stack
          horizontal
          styles={styles.pdfPaginationWrapper}
          verticalAlign="center"
          horizontalAlign="center"
          onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            event.stopPropagation();
          }}
        >
          <Stack.Item>
            <IconButton
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                setActivePageNumber && setActivePageNumber(e, pageNumber - 1)
              }
              iconProps={{ iconName: 'PageLeft' }}
              disabled={pageNumber === 1}
            />
          </Stack.Item>
          <Stack.Item styles={styles.paginationNumber}>
            <Text variant="mediumPlus">{pageNumber}</Text>
            <Text>{` ${messages.pagination} `}</Text>
            <Text variant="mediumPlus">{numberOfPages}</Text>
          </Stack.Item>
          <Stack.Item>
            <IconButton
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                setActivePageNumber && setActivePageNumber(e, pageNumber + 1)
              }
              iconProps={{ iconName: 'PageRight' }}
              disabled={pageNumber + 1 > numberOfPages}
            />
          </Stack.Item>
        </Stack>
      )}
    </Stack>
  );
};
