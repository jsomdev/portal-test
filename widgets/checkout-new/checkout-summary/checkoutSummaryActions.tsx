import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  DefaultButton,
  IButtonStyles,
  PrimaryButton,
  Stack,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';

const messages = defineMessages({
  nextButtonText: {
    id: messageIds.pages.checkout.actions.nextButton,
    defaultMessage: 'Proceed',
    description: 'Proceed button text on checkout summary'
  },
  backButtonText: {
    id: messageIds.pages.checkout.actions.backButton,
    defaultMessage: 'Previous Step',
    description: 'Previous step button text on checkout summary'
  },
  completePayment: {
    id: messageIds.pages.checkout.actions.completePayment,
    defaultMessage: 'Complete and pay',
    description:
      'Complete button text on checkout summary when direct payment is required'
  },
  completePurchaseOrder: {
    id: messageIds.pages.checkout.actions.completePurchaseOrder,
    defaultMessage: 'Complete and submit',
    description:
      'Complete button text on checkout summary when direct payment is not required'
  }
});

type CheckoutSummaryActionsProps = {
  onProceedClick: () => void;
  onPreviousClick: () => void;
  disableSubmit?: boolean;
  showSubmitButton: boolean;
  submitButtonText: string;
};

export const CheckoutSummaryActions: React.FC<CheckoutSummaryActionsProps> = ({
  onProceedClick,
  onPreviousClick,
  disableSubmit,
  showSubmitButton,
  submitButtonText
}) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();

  const styles: IButtonStyles = {
    root: {
      padding: `${spacing.l1} ${spacing.m}`
    }
  };

  return (
    <Stack.Item>
      <Stack tokens={{ childrenGap: spacing.m }}>
        {showSubmitButton ? (
          <PrimaryButton
            styles={styles}
            type="submit"
            disabled={disableSubmit}
            key="MainActionsSubmit"
            text={submitButtonText}
          />
        ) : (
          <PrimaryButton
            text={formatMessage(messages.nextButtonText)}
            onClick={onProceedClick}
            styles={styles}
          />
        )}
        <DefaultButton
          onClick={onPreviousClick}
          text={formatMessage(messages.backButtonText)}
        />
      </Stack>
    </Stack.Item>
  );
};
