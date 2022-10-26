import React from 'react';

import { useStepper } from '@components/stepper/stepperContext';
import {
  ActionButton,
  FontSizes,
  FontWeights,
  ITextProps,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';

import { CheckoutFormOverviewGroupContainerStyles } from './checkoutFormOverviewGroupContainer.types';

const messages = {
  edit: 'Edit'
};

export const CheckoutFormOverviewGroupContainer: React.FC<
  ITextProps & { text: string; stepIndex?: number }
> = ({ text, children, stepIndex, ...props }) => {
  const { navigateToStep } = useStepper();
  const { spacing, effects, semanticColors } = useTheme();

  const styles: CheckoutFormOverviewGroupContainerStyles = {
    container: {
      root: {
        padding: spacing.l1,
        //backgroundColor: palette.themeLighterAlt,
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
                navigateToStep(stepIndex);
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
