import React from 'react';

import {
  ActionButton,
  FontSizes,
  FontWeights,
  IButtonStyles,
  IStackStyles,
  ITextProps,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';

const messages = {
  edit: 'Edit'
};

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
  const { spacing, effects, semanticColors } = useTheme();
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
      icon: { marginLeft: 0, color: 'inherit', fontSize: FontSizes.size12 },
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
              text={messages.edit}
              styles={styles.editButton}
            />
          )}
        </Stack>
      </Stack.Item>
      <Stack.Item>{children}</Stack.Item>
    </Stack>
  );
};
