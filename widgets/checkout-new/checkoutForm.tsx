import React, { useContext, useRef, useState } from 'react';

import { FormikProps } from 'formik';
import { useRouter } from 'next/router';

import { Stack, getTheme } from '@fluentui/react';
import pagePaths from '@utilities/pagePaths';
import { scrollToTop } from '@utilities/scrollToTop';
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
import { CheckoutFormContext } from '@widgets/checkout/shared/checkoutFormContext';
import { Environment } from '@widgets/environment/environment';
import { ClientEnvironment } from '@widgets/environment/environment.types';

const defaultValues: CheckoutFormValues = {
  details: step1Details.defaultValues,
  shippingMethod: step2ShippingMethod.defaultValues
};

const CheckoutFormNew: React.FC = () => {
  //allows us the access the Formik methods of the form of the current step
  //not possible to use a specific type here, because the type of the form depends on the current step
  const formRef = useRef<FormikProps<any>>(null);
  const { spacing } = getTheme();

  const { push } = useRouter();

  const { orderTaxAmountStatus } = useContext(CheckoutFormContext);

  const [formValues, setFormValues] =
    useState<CheckoutFormValues>(defaultValues);

  const steps: CheckoutSteps = {
    details: {
      index: 0,
      label: 'Details',
      iconProps: { iconName: 'ContactInfo' },
      defaultValues: step1Details.defaultValues,
      Component: step1Details.Component,
      validation: step1Details.validation
    },
    shippingMethod: {
      index: 1,
      label: 'Shipping Method',
      iconProps: { iconName: 'Product' },
      defaultValues: step2ShippingMethod.defaultValues,
      Component: step2ShippingMethod.Component,
      validation: step2ShippingMethod.validation
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

  return (
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
        isLastStep={stepper.currentIndex === stepperSteps.length - 1}
        onProceedClick={async () => {
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
        }}
        onPreviousClick={() => {
          stepper.previous();
          scrollToTop('body');
        }}
        disableSubmit={orderTaxAmountStatus === 'loading'}
      />
    </Stack>
  );
};

export default CheckoutFormNew;
