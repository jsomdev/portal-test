import React, { useCallback, useContext, useRef, useState } from 'react';

import { FormikProps } from 'formik';
import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { ResponsiveStack } from '@components/stacks/responsiveStack';
import { Stack, getTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import pagePaths from '@utilities/pagePaths';
import { scrollToTop } from '@utilities/scrollToTop';
import { CheckoutSummary } from '@widgets/checkout-new/checkout-summary/checkoutSummary';
import { CheckoutActions } from '@widgets/checkout-new/checkoutActions';
import { getCurrentStep } from '@widgets/checkout-new/checkoutForm.helper';
import {
  CheckoutFormValues,
  CheckoutSteps
} from '@widgets/checkout-new/checkoutForm.types';
import { Steps } from '@widgets/checkout-new/stepper/steps';
import useStepper from '@widgets/checkout-new/stepper/useStepper';
import step1Details from '@widgets/checkout-new/steps/step-1-details/step-1-details';
import step2ShippingMethod from '@widgets/checkout-new/steps/step-2-shipping-method/step-2-shipping-method';
import step3Payment from '@widgets/checkout-new/steps/step-3-payment/step-3-payment';
import step4Overview from '@widgets/checkout-new/steps/step-4-overview/step-4-overview';
import { CheckoutFormStyles } from '@widgets/checkout/checkout-form/checkoutForm.types';
import { CheckoutFormContext } from '@widgets/checkout/shared/checkoutFormContext';
import { Environment } from '@widgets/environment/environment';
import { ClientEnvironment } from '@widgets/environment/environment.types';
import { mediaQueryFrom } from '@widgets/media-queries';

const defaultValues: CheckoutFormValues = {
  details: step1Details.defaultValues,
  shippingMethod: step2ShippingMethod.defaultValues,
  payment: step3Payment.defaultValues,
  overview: step4Overview.defaultValues
};

const messages = defineMessages({
  completePayment: {
    id: messageIds.pages.checkout.actions.completePayment,
    defaultMessage: 'Confirm and pay'
  },
  completePurchaseOrder: {
    id: messageIds.pages.checkout.actions.completePurchaseOrder,
    defaultMessage: 'Confirm and submit'
  },
  details: {
    id: messageIds.pages.checkout.steps.details,
    defaultMessage: 'Details'
  },
  shippingMethod: {
    id: messageIds.pages.checkout.steps.shippingMethod,
    defaultMessage: 'Shipping Method'
  },
  paymentDetails: {
    id: messageIds.pages.checkout.steps.paymentDetails,
    defaultMessage: 'Payment Method'
  },
  overview: {
    id: messageIds.pages.checkout.steps.overview,
    defaultMessage: 'Overview'
  }
});

const CheckoutFormNew: React.FC = () => {
  //allows us the access the Formik methods of the form of the current step
  //not possible to use a specific type here, because the type of the form depends on the current step
  const formRef = useRef<FormikProps<any>>(null);
  const { formatMessage } = useIntl();
  const { spacing } = getTheme();

  const { push } = useRouter();

  const { orderTaxAmountStatus } = useContext(CheckoutFormContext);

  const [formValues, setFormValues] =
    useState<CheckoutFormValues>(defaultValues);

  const steps: CheckoutSteps = {
    details: {
      index: 0,
      label: formatMessage(messages.details),
      iconProps: { iconName: 'ContactInfo' },
      ...step1Details
    },
    shippingMethod: {
      index: 1,
      label: formatMessage(messages.shippingMethod),
      iconProps: { iconName: 'Product' },
      ...step2ShippingMethod
    },
    payment: {
      index: 2,
      label: formatMessage(messages.paymentDetails),
      iconProps: { iconName: 'PaymentCard' },
      ...step3Payment
    },
    overview: {
      index: 3,
      label: formatMessage(messages.overview),
      iconProps: { iconName: 'WaitlistConfirm' },
      ...step4Overview
    }
  };

  const stepperSteps = Object.values(steps);
  const stepper = useStepper({
    steps: stepperSteps,
    initialIndex: 0,
    onExit: () => push(pagePaths.cart)
  });

  const { currentStep, currentStepKey } = getCurrentStep(
    steps,
    stepper.currentIndex
  );

  const styles: CheckoutFormStyles = {
    leftColumn: {
      root: { flex: 5 }
    },
    rightColumn: {
      root: {
        flex: 2,
        paddingTop: spacing.l2,
        ...mediaQueryFrom('tablet', {
          paddingTop: 0,
          paddingLeft: spacing.l2
        })
      }
    }
  };

  const onProceed = useCallback(async () => {
    if (formRef.current && currentStep) {
      await formRef.current.validateForm();
      const isValid = formRef.current.isValid;

      if (isValid) {
        setFormValues({
          ...formValues,
          [currentStepKey]: formRef.current.values
        });
        stepper.next();
        scrollToTop('body');
      } else {
        formRef.current.submitForm();
      }
    }
  }, [currentStep, currentStepKey, formValues, stepper]);

  const onPrevious = useCallback(() => {
    stepper.previous();
    scrollToTop('body');
  }, [stepper]);

  const isLastStep = stepper.currentIndex === stepperSteps.length - 1;
  return (
    <ResponsiveStack horizontalAlign="space-between">
      <Stack.Item styles={styles.leftColumn}>
        <Stack tokens={{ childrenGap: spacing.l1 }}>
          <Steps
            currentIndex={stepper.currentIndex}
            steps={stepperSteps}
            navigateToStep={stepper.navigateToStep}
          />
          {!currentStep ? (
            <Environment target={ClientEnvironment.Develop}>
              Step is missing Component in default export
            </Environment>
          ) : (
            <currentStep.Component
              key={currentStep.index}
              formRef={formRef}
              values={formValues[currentStepKey] as any}
            />
          )}
          <CheckoutActions
            isLastStep={isLastStep}
            onProceedClick={onProceed}
            onPreviousClick={onPrevious}
            disableSubmit={orderTaxAmountStatus === 'loading'}
          />
        </Stack>
      </Stack.Item>
      <Stack.Item styles={styles.rightColumn}>
        <CheckoutSummary
          onPrevious={onPrevious}
          onProceed={onProceed}
          showSubmitButton={isLastStep}
          submitButtonText={
            //TODO when working on step 3: formValues.payment.paymentMethod === PaymentMethod.CREDIT_CARD? messages.completePayment : messages.completePurchaseOrder
            formatMessage(messages.completePayment)
          }
        />
      </Stack.Item>
    </ResponsiveStack>
  );
};

export default CheckoutFormNew;
