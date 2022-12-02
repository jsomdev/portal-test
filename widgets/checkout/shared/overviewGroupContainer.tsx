import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  ActionButton,
  FontWeights,
  IButtonStyles,
  IStackStyles,
  ITextProps,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { useCheckout } from '@widgets/checkout/checkoutProvider/checkoutProvider';

const messages = defineMessages({
  edit: {
    id: messageIds.pages.checkout.overview.editGroup
  }
});

export interface OverviewGroupContainerStyles {
  label: ITextStyles;
  editButton: IButtonStyles;
  container: IStackStyles;
}

export const OverviewGroupContainer: React.FC<
  ITextProps & {
    text: string;
    stepIndex?: number;
  }
> = ({ text, children, stepIndex, ...props }) => {
  const { formatMessage } = useIntl();
  const { spacing, effects, semanticColors, fonts } = useTheme();
  const { stepper } = useCheckout();
  const styles: OverviewGroupContainerStyles = {
    container: {
      root: {
        padding: spacing.l1,
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner2
      }
    },
    label: {
      root: {
        fontWeight: FontWeights.semibold
      }
    },
    editButton: {
      root: { height: 'auto', padding: 0 },
      icon: {
        ...fonts.small,
        marginLeft: 0,
        color: 'inherit'
      },
      label: { margin: 0 }
    }
  };

  return (
    <Stack tokens={{ childrenGap: spacing.s1 }} styles={styles.container}>
      <Stack.Item>
        <Stack
          horizontal
          horizontalAlign="space-between"
          verticalAlign="center"
        >
          <Stack.Item>
            <Text variant="mediumPlus" styles={styles.label} {...props}>
              {text}
            </Text>
          </Stack.Item>
          {stepIndex !== undefined && (
            <ActionButton
              onClick={() => {
                stepper.navigateToStep(stepIndex);
              }}
              iconProps={{ iconName: 'Edit' }}
              text={formatMessage(messages.edit)}
              styles={styles.editButton}
            />
          )}
        </Stack>
      </Stack.Item>
      <Stack.Item>{children}</Stack.Item>
    </Stack>
  );
};
