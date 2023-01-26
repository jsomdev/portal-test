import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { useStepper } from '@components/stepper/stepperContext';
import {
  DefaultButton,
  IButtonStyles,
  PrimaryButton,
  Stack,
  useTheme
} from '@fluentui/react';
import { useClaims } from '@services/authentication/claims';
import { messageIds } from '@services/i18n';
import { FormStepActions } from '@widgets/forms/formStepActions';

import { useMe } from '../../providers/user/userContext';
import { getCompleteSignUpFieldNames } from './completeSignUpFormHelper';

export interface CompleteSignUpStepActionsStyles {
  primaryButton: IButtonStyles;
  defaultButton: IButtonStyles;
}

export interface CompleteSignUpStepActionsProps {
  isMatchedCustomerSelected: boolean;
  matchedCustomersCount: number;
  onSelectManualEntry: () => void;
  clearSelectedMatchedCustomer: () => void;
}

const messages = defineMessages({
  backButton: {
    id: messageIds.signupFlow.backButton,
    defaultMessage: 'Back'
  },
  nextButton: {
    id: messageIds.signupFlow.nextButton,
    defaultMessage: 'Next'
  },
  startBrowsingButton: {
    id: messageIds.signupFlow.startBrowsingButton,
    defaultMessage: 'Start Browsing'
  },
  companyDetailsConfirmationButton: {
    id: messageIds.signupFlow.companyDetailsConfirmationButton,
    defaultMessage: 'Yes, link me to this company'
  },
  companyNotFoundButton: {
    id: messageIds.signupFlow.companyNotFoundButton,
    defaultMessage: 'My company is not in the list'
  },
  companyDetailsDeclineButton: {
    id: messageIds.signupFlow.companyDetailsDeclineButton,
    defaultMessage: 'No, enter details manually'
  }
});

export const CompleteSignUpStepActions: React.FC<
  CompleteSignUpStepActionsProps
> = ({
  isMatchedCustomerSelected,
  matchedCustomersCount,
  onSelectManualEntry,
  clearSelectedMatchedCustomer
}) => {
  const { currentIndex, navigateToStep } = useStepper();
  const { createVerificationRequestStatus } = useMe();
  const { forceRefreshToken } = useClaims();
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();

  const buttonStyles: IButtonStyles = {
    root: {
      height: 40
    },
    label: {
      fontSize: '14px',
      fontWeight: 400
    }
  };

  const styles: CompleteSignUpStepActionsStyles = {
    defaultButton: buttonStyles,
    primaryButton: buttonStyles
  };

  return (
    <FormStepActions getFieldNames={getCompleteSignUpFieldNames}>
      {(onProceed: () => void, onPrevious: () => void) => (
        <Stack tokens={{ padding: `${spacing.l1} 0`, childrenGap: spacing.l1 }}>
          {currentIndex === 0 && (
            <PrimaryButton onClick={onProceed} styles={styles.primaryButton}>
              {formatMessage(messages.nextButton)}
            </PrimaryButton>
          )}

          {currentIndex === 1 && matchedCustomersCount > 0 && (
            <React.Fragment>
              {!!isMatchedCustomerSelected && (
                <PrimaryButton
                  onClick={() => {
                    navigateToStep(3);
                  }}
                  styles={styles.primaryButton}
                >
                  {formatMessage(messages.companyDetailsConfirmationButton)}
                </PrimaryButton>
              )}
              {!!isMatchedCustomerSelected && (
                <DefaultButton
                  onClick={onSelectManualEntry}
                  styles={styles.defaultButton}
                >
                  {formatMessage(messages.companyDetailsDeclineButton)}
                </DefaultButton>
              )}
              {!isMatchedCustomerSelected && (
                <DefaultButton
                  onClick={onSelectManualEntry}
                  styles={styles.defaultButton}
                >
                  {formatMessage(messages.companyNotFoundButton)}
                </DefaultButton>
              )}
              {!!isMatchedCustomerSelected && matchedCustomersCount > 1 && (
                <DefaultButton
                  onClick={clearSelectedMatchedCustomer}
                  styles={styles.defaultButton}
                >
                  {formatMessage(messages.backButton)}
                </DefaultButton>
              )}
              {!!isMatchedCustomerSelected && matchedCustomersCount === 1 && (
                <DefaultButton
                  onClick={onPrevious}
                  styles={styles.defaultButton}
                >
                  {formatMessage(messages.backButton)}
                </DefaultButton>
              )}
            </React.Fragment>
          )}

          {currentIndex === 1 && matchedCustomersCount === 0 && (
            <React.Fragment>
              <PrimaryButton onClick={onProceed} styles={styles.primaryButton}>
                {formatMessage(messages.nextButton)}
              </PrimaryButton>
              <DefaultButton
                onClick={() => {
                  onPrevious();
                }}
                styles={styles.defaultButton}
              >
                {formatMessage(messages.backButton)}
              </DefaultButton>
            </React.Fragment>
          )}

          {currentIndex === 2 && (
            <React.Fragment>
              <PrimaryButton onClick={onProceed} styles={styles.primaryButton}>
                {formatMessage(messages.nextButton)}
              </PrimaryButton>
              <DefaultButton onClick={onPrevious} styles={styles.defaultButton}>
                {formatMessage(messages.backButton)}
              </DefaultButton>
            </React.Fragment>
          )}
          {currentIndex === 3 && (
            <React.Fragment>
              {createVerificationRequestStatus === 'success' && (
                <PrimaryButton
                  onClick={forceRefreshToken}
                  styles={styles.primaryButton}
                >
                  {formatMessage(messages.startBrowsingButton)}
                </PrimaryButton>
              )}
              {createVerificationRequestStatus === 'error' && (
                <DefaultButton
                  onClick={onPrevious}
                  styles={styles.defaultButton}
                >
                  {formatMessage(messages.backButton)}
                </DefaultButton>
              )}
            </React.Fragment>
          )}
        </Stack>
      )}
    </FormStepActions>
  );
};
