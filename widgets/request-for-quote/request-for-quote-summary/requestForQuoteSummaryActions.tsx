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
    description: 'Proceed button text on rfq summary'
  },
  backButtonText: {
    id: messageIds.pages.checkout.actions.backButton,
    defaultMessage: 'Previous Step',
    description: 'Previous step button text on rfq summary'
  },
  completeQuoteRequest: {
    id: messageIds.pages.checkout.actions.completePurchaseOrder,
    defaultMessage: 'Complete and submit',
    description: 'Complete button text on rfq summary'
  }
});

type RequestForQuoteSummaryActionsProps = {
  onProceedClick: () => void;
  onPreviousClick: () => void;
  disableSubmit?: boolean;
  showSubmitButton: boolean;
  submitButtonText: string;
};

export const RequestForQuoteSummaryActions: React.FC<
  RequestForQuoteSummaryActionsProps
> = ({
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
            disabled={disableSubmit}
            key="MainActionsSubmit"
            text={submitButtonText}
            onClick={onProceedClick}
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
