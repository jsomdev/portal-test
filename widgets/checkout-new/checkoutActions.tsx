import React from 'react';

import { useStepper } from '@components/stepper/stepperContext';
import {
  DefaultButton,
  IButtonStyles,
  IIconStyles,
  Icon,
  Stack,
  useTheme
} from '@fluentui/react';

interface SecondaryFormStepActionsStyles {
  buttons: IButtonStyles;
  nextIcon: IIconStyles;
  backIcon: IIconStyles;
}

const messages = {
  nextButtonText: 'Next',
  backButtonText: 'Back',
  submitForm: 'Submit'
};

export const CheckoutActions: React.FC<{
  onProceedClick: () => void;
  onPreviousClick: () => void;
  disableSubmit?: boolean;
  isLastStep?: boolean;
}> = ({ onProceedClick, onPreviousClick, disableSubmit, isLastStep }) => {
  const { spacing } = useTheme();

  const styles: SecondaryFormStepActionsStyles = {
    buttons: {
      flexContainer: {
        lineHeight: 14
      }
    },

    backIcon: {
      root: {
        paddingRight: spacing.s1
      }
    },
    nextIcon: {
      root: {
        paddingLeft: spacing.s1
      }
    }
  };

  return (
    <Stack
      horizontal={true}
      tokens={{ childrenGap: spacing.m }}
      horizontalAlign="space-between"
    >
      <DefaultButton onClick={onPreviousClick} styles={styles.buttons}>
        <Icon iconName="chevronLeft" styles={styles.backIcon} />
        {messages.backButtonText}
      </DefaultButton>
      {isLastStep ? (
        <DefaultButton
          key="SecondaryActionsSubmit"
          disabled={disableSubmit}
          styles={styles.buttons}
          type="submit"
        >
          {messages.submitForm}
          <Icon iconName="chevronRight" styles={styles.nextIcon} />
        </DefaultButton>
      ) : (
        <DefaultButton styles={styles.buttons} onClick={onProceedClick}>
          {messages.nextButtonText}
          <Icon iconName="chevronRight" styles={styles.nextIcon} />
        </DefaultButton>
      )}
    </Stack>
  );
};
