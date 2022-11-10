import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  DefaultButton,
  IButtonStyles,
  IIconStyles,
  Icon,
  Stack,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';

interface SecondaryFormStepActionsStyles {
  buttons: IButtonStyles;
  nextIcon: IIconStyles;
  backIcon: IIconStyles;
}

const messages = defineMessages({
  nextButtonText: {
    id: messageIds.pages.checkout.actions.nextButton,
    defaultMessage: 'Next'
  },
  backButtonText: {
    id: messageIds.pages.checkout.actions.backButton,
    defaultMessage: 'Back'
  },
  submitForm: {
    id: messageIds.pages.checkout.actions.submitButton,
    defaultMessage: 'Submit'
  }
});

export const CheckoutActions: React.FC<{
  onProceedClick: () => void;
  onPreviousClick: () => void;
  disableSubmit?: boolean;
  isLastStep?: boolean;
}> = ({ onProceedClick, onPreviousClick, disableSubmit, isLastStep }) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
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
        {formatMessage(messages.backButtonText)}
      </DefaultButton>
      {isLastStep ? (
        <DefaultButton
          key="SecondaryActionsSubmit"
          disabled={disableSubmit}
          styles={styles.buttons}
          type="submit"
        >
          {formatMessage(messages.submitForm)}
          <Icon iconName="chevronRight" styles={styles.nextIcon} />
        </DefaultButton>
      ) : (
        <DefaultButton styles={styles.buttons} onClick={onProceedClick}>
          {formatMessage(messages.nextButtonText)}
          <Icon iconName="chevronRight" styles={styles.nextIcon} />
        </DefaultButton>
      )}
    </Stack>
  );
};
