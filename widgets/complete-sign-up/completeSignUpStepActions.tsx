import { useStepper } from '@components/stepper/stepperContext';
import {
  DefaultButton,
  IButtonStyles,
  PrimaryButton,
  Stack,
  useTheme
} from '@fluentui/react';
import { useClaims } from '@services/authentication/claims';
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
// TODO: i18n
const messages = {
  continue: 'Next',
  back: 'Back',
  getStarted: 'Get Started',
  existingCustomer: 'Yes',
  newCustomer: 'No (Skip)',
  continueWith: 'Yes, link me to this company',
  companyNotInLIst: 'My company is not in the list',
  manualEntry: 'No, enter details manually'
};

export const CompleteSignUpStepActions: React.FC<CompleteSignUpStepActionsProps> =
  ({
    isMatchedCustomerSelected,
    matchedCustomersCount,
    onSelectManualEntry,
    clearSelectedMatchedCustomer
  }) => {
    const { currentIndex, navigateToStep } = useStepper();
    const { createVerificationRequestStatus } = useMe();
    const { forceRefreshToken } = useClaims();
    const { spacing } = useTheme();
    // TODO: Styling conventions
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
          <Stack
            tokens={{ padding: `${spacing.l1} 0`, childrenGap: spacing.l1 }}
          >
            {currentIndex === 0 && (
              <PrimaryButton onClick={onProceed} styles={styles.primaryButton}>
                {messages.continue}
              </PrimaryButton>
            )}

            {currentIndex === 1 && matchedCustomersCount > 0 && (
              <>
                {!!isMatchedCustomerSelected && (
                  <PrimaryButton
                    onClick={() => {
                      navigateToStep(3);
                    }}
                    styles={styles.primaryButton}
                  >
                    {messages.continueWith}
                  </PrimaryButton>
                )}
                {!!isMatchedCustomerSelected && (
                  <DefaultButton
                    onClick={onSelectManualEntry}
                    styles={styles.defaultButton}
                  >
                    {messages.manualEntry}
                  </DefaultButton>
                )}
                {!isMatchedCustomerSelected && (
                  <DefaultButton
                    onClick={onSelectManualEntry}
                    styles={styles.defaultButton}
                  >
                    {messages.companyNotInLIst}
                  </DefaultButton>
                )}
                {!!isMatchedCustomerSelected && matchedCustomersCount > 1 && (
                  <DefaultButton
                    onClick={clearSelectedMatchedCustomer}
                    styles={styles.defaultButton}
                  >
                    {messages.back}
                  </DefaultButton>
                )}
                {!!isMatchedCustomerSelected && matchedCustomersCount === 1 && (
                  <DefaultButton
                    onClick={onPrevious}
                    styles={styles.defaultButton}
                  >
                    {messages.back}
                  </DefaultButton>
                )}
              </>
            )}

            {currentIndex === 1 && matchedCustomersCount === 0 && (
              <>
                <PrimaryButton
                  onClick={onProceed}
                  styles={styles.primaryButton}
                >
                  {messages.continue}
                </PrimaryButton>
                <DefaultButton
                  onClick={() => {
                    onPrevious();
                  }}
                  styles={styles.defaultButton}
                >
                  {messages.back}
                </DefaultButton>
              </>
            )}

            {currentIndex === 2 && (
              <>
                <PrimaryButton
                  onClick={onProceed}
                  styles={styles.primaryButton}
                >
                  {messages.continue}
                </PrimaryButton>
                <DefaultButton
                  onClick={onPrevious}
                  styles={styles.defaultButton}
                >
                  {messages.back}
                </DefaultButton>
              </>
            )}
            {currentIndex === 3 && (
              <>
                {createVerificationRequestStatus === 'success' && (
                  <PrimaryButton
                    onClick={forceRefreshToken}
                    styles={styles.primaryButton}
                  >
                    {messages.getStarted}
                  </PrimaryButton>
                )}
                {createVerificationRequestStatus === 'error' && (
                  <DefaultButton
                    onClick={onPrevious}
                    styles={styles.defaultButton}
                  >
                    {messages.back}
                  </DefaultButton>
                )}
              </>
            )}
          </Stack>
        )}
      </FormStepActions>
    );
  };
