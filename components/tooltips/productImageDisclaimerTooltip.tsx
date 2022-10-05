import React from 'react';

import {
  DirectionalHint,
  FontWeights,
  Icon,
  Stack,
  Text,
  TooltipHost,
  useTheme
} from '@fluentui/react';

import {
  ProductImageDisclaimerStyles,
  ProductImageDisclaimerTooltipProps
} from './productImageDisclaimerTooltip.types';

// eslint-disable-next-line max-len
export const ProductImageDisclaimerTooltip: React.FC<
  ProductImageDisclaimerTooltipProps
> = ({ messageText }) => {
  const messages = {
    tooltipText:
      'Images are representative. Products may differ in material or configuration.'
  };

  const { spacing } = useTheme();

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
          content={<Text>{messages.tooltipText}</Text>}
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
