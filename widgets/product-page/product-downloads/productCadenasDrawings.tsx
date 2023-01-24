import React, { useState } from 'react';

import { useIntl } from 'react-intl';

import {
  DefaultButton,
  FontWeights,
  IButtonStyles,
  IContextualMenuItem,
  IIconProps,
  IProgressIndicatorStyles,
  IStackItemStyles,
  ProgressIndicator,
  Stack,
  TooltipHost,
  useTheme
} from '@fluentui/react';
import { defineMessages } from '@formatjs/intl';
import { messageIds } from '@services/i18n';

import { ProductCadenasDrawingDownloadStatus } from './productCadenasDrawings.types';
import {
  drawings2d,
  drawings3d,
  drawingsCadenas,
  mapDrawingsToContextualMenuItems
} from './productCadenasDrawingsHelper';

export interface ProductCadenasDrawingsProps {
  cadenasId: string;
}

const messages = defineMessages({
  cadenasButton: {
    id: messageIds.pages.product.sections.downloads.actions.dataSheets,
    defaultMessage: 'Datasheets',
    description: 'Button text for the datasheets'
  },
  drawings2dButton: {
    id: messageIds.pages.product.sections.downloads.actions.drawings2d,
    defaultMessage: 'Drawings 2D',
    description: 'Button text for the 2d drawings'
  },
  drawings3dButton: {
    id: messageIds.pages.product.sections.downloads.actions.drawings3d,
    defaultMessage: 'Drawings 3D',
    description: 'Button text for the 3d drawings'
  },
  downloadError: {
    id: messageIds.pages.product.sections.downloads.downloadError,
    defaultMessage: 'There was an error downloading your file',
    description:
      'Error message to be displayed to the user if file did not download correctly'
  }
});

export const ProductCadenasDrawings: React.FC<ProductCadenasDrawingsProps> = ({
  cadenasId
}) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  const [cadenasStatus, setCadenasStatus] =
    useState<ProductCadenasDrawingDownloadStatus>('initial');

  const [drawing2dStatus, setDrawing2dStatus] =
    useState<ProductCadenasDrawingDownloadStatus>('initial');

  const [drawing3dStatus, setDrawing3dStatus] =
    useState<ProductCadenasDrawingDownloadStatus>('initial');

  const {
    productResourceCadenas,
    productResourceDrawings2d,
    productResourceDrawings3d
  } = React.useMemo(() => {
    return {
      productResourceCadenas: mapDrawingsToContextualMenuItems(
        cadenasId,
        setCadenasStatus,
        drawingsCadenas
      ),
      productResourceDrawings2d: mapDrawingsToContextualMenuItems(
        cadenasId,
        setDrawing2dStatus,
        drawings2d
      ),
      productResourceDrawings3d: mapDrawingsToContextualMenuItems(
        cadenasId,
        setDrawing3dStatus,
        drawings3d
      )
    };
  }, [cadenasId]);

  return (
    <Stack tokens={{ childrenGap: spacing.m }}>
      <ProductResourceDrawingsButton
        downloadStatus={cadenasStatus}
        resources={productResourceCadenas}
        buttonLabel={formatMessage(messages.cadenasButton)}
        iconProps={{ iconName: 'DocumentManagement' }}
      />
      <ProductResourceDrawingsButton
        downloadStatus={drawing2dStatus}
        resources={productResourceDrawings2d}
        buttonLabel={formatMessage(messages.drawings2dButton)}
        iconProps={{ iconName: 'ReportDocument' }}
      />
      <ProductResourceDrawingsButton
        downloadStatus={drawing3dStatus}
        resources={productResourceDrawings3d}
        buttonLabel={formatMessage(messages.drawings3dButton)}
        iconProps={{ iconName: 'ReportDocument' }}
      />
    </Stack>
  );
};

interface ProductResourceDrawingsStyles {
  downloadWrapper: IStackItemStyles;
  button: IButtonStyles;
  progress: Partial<IProgressIndicatorStyles>;
}

export interface ProductResourceDrawingsButtonProps {
  downloadStatus: ProductCadenasDrawingDownloadStatus;
  resources: IContextualMenuItem[];
  buttonLabel: string;
  iconProps?: IIconProps;
}

const ProductResourceDrawingsButton: React.FC<
  ProductResourceDrawingsButtonProps
> = ({ resources, downloadStatus, buttonLabel, iconProps }) => {
  const { spacing, semanticColors } = useTheme();
  const { formatMessage } = useIntl();
  const styles: ProductResourceDrawingsStyles = {
    downloadWrapper: {
      root: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
      }
    },
    progress: { itemProgress: { padding: 0 } },
    button: {
      root: {
        textAlign: 'left',
        border: 'none',
        width: '100%',
        padding: `${spacing.l1} ${spacing.s1}`,
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      },
      rootPressed: {
        backgroundColor: 'transparent'
      },
      label: {
        textAlign: 'left',
        fontWeight: FontWeights.regular
      },
      rootHovered: {
        backgroundColor: 'transparent'
      },
      rootExpanded: {
        backgroundColor: 'transparent',
        padding: `${spacing.l1} ${spacing.s1}`,
        selectors: {
          '.ms-Button-textContainer + .ms-Icon': {
            transform: 'rotate(180deg)'
          }
        }
      },
      rootDisabled: {
        backgroundColor: 'transparent'
      }
    }
  };
  return (
    <Stack styles={{ root: { position: 'relative' } }}>
      <Stack.Item>
        <TooltipHost
          content={formatMessage(messages.downloadError)}
          id={'cadenasDownloadTooltip'}
          calloutProps={{ gapSpace: 14, hidden: downloadStatus !== 'error' }}
        >
          <Stack>
            <Stack.Item>
              <DefaultButton
                text={`${buttonLabel} (${resources.length})`}
                iconProps={iconProps}
                styles={styles.button}
                disabled={resources.length < 1}
                menuProps={{
                  useTargetAsMinWidth: true,
                  items: resources
                }}
              />
            </Stack.Item>
          </Stack>
        </TooltipHost>
      </Stack.Item>
      {downloadStatus === 'loading' && (
        <Stack.Item styles={styles.downloadWrapper}>
          <ProgressIndicator styles={styles.progress} />
        </Stack.Item>
      )}
    </Stack>
  );
};
