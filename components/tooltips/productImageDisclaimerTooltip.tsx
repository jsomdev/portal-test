import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  DirectionalHint,
  FontWeights,
  Icon,
  Stack,
  Text,
  TooltipHost,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';

import {
  ProductImageDisclaimerStyles,
  ProductImageDisclaimerTooltipProps
} from './productImageDisclaimerTooltip.types';

const messages = defineMessages({
  tooltipText: {
    id: messageIds.product.imageDisclaimer,
    defaultMessage:
      'Images are representative. Products may differ in material or configuration.',
    description: 'Tooltip text for product image disclaimer'
  }
});

export const ProductImageDisclaimerTooltip: React.FC<
  ProductImageDisclaimerTooltipProps
> = ({ messageText }) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  const styles: ProductImageDisclaimerStyles = {
    disclaimerText: {
      root: {
        fontWeight: FontWeights.semilight
      }
    },
    tooltipHost: {
      root: { display: 'flex', opacity: 0.8 }
    }
  };
  return (
    <Stack
      horizontal
      verticalAlign="center"
      tokens={{ childrenGap: spacing.s2 }}
    >
      <Stack.Item>
        <TooltipHost
          styles={styles.tooltipHost}
          calloutProps={{ gapSpace: 8 }}
          directionalHint={DirectionalHint.topLeftEdge}
          content={<Text>{formatMessage(messages.tooltipText)}</Text>}
        >
          <Icon iconName="Info" />
        </TooltipHost>
      </Stack.Item>
      <Stack.Item>
        <Text styles={styles.disclaimerText}>{messageText}</Text>
      </Stack.Item>
    </Stack>
  );
};
