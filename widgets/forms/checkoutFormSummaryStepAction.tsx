import React from 'react';

import { FormikContextType, useFormikContext } from 'formik';

import { useStepper } from '@components/stepper/stepperContext';
import {
  DefaultButton,
  IButtonStyles,
  PrimaryButton,
  Stack,
  useTheme
} from '@fluentui/react';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';
import { CheckoutFormValues } from '@widgets/checkout-old/checkout-form/checkoutForm.types';

const messages = {
  nextButtonText: 'Proceed',
  backButtonText: 'Previous Step',
  completePayment: 'Confirm and pay',
  completePurchaseOrder: 'Confirm and submit'
};

export const CheckoutFormSummaryStepActions: React.FC<{
  onProceedClick: () => void;
  onPreviousClick: () => void;
  disableSubmit?: boolean;
}> = ({ onProceedClick, onPreviousClick, disableSubmit }) => {
  const { currentIndex, steps } = useStepper();
  const { spacing } = useTheme();

  const { values }: FormikContextType<CheckoutFormValues> = useFormikContext();

  const styles: IButtonStyles = {
    root: {
      padding: `${spacing.l1} ${spacing.m}`
    }
  };

  return (
    <Stack.Item>
      <Stack tokens={{ childrenGap: spacing.m }}>
        {currentIndex === steps.length - 1 ? (
          <PrimaryButton
            styles={styles}
            type="submit"
            disabled={disableSubmit}
            key="MainActionsSubmit"
            text={
              values.paymentMethod === PaymentMethod.CREDIT_CARD
                ? messages.completePayment
                : messages.completePurchaseOrder
            }
          />
        ) : (
          <PrimaryButton
            text={messages.nextButtonText}
            onClick={onProceedClick}
            styles={styles}
          />
        )}
        <DefaultButton
          onClick={onPreviousClick}
          text={messages.backButtonText}
          disabled={currentIndex === 0}
        />
      </Stack>
    </Stack.Item>
  );
};
