import React, { useContext, useRef, useState } from 'react';

import { FormikProps } from 'formik';
import { useRouter } from 'next/router';

import { Stack, getTheme } from '@fluentui/react';
import pagePaths from '@utilities/pagePaths';
import { scrollToTop } from '@utilities/scrollToTop';
import { CheckoutActions } from '@widgets/checkout-new/checkoutActions';
import { Steps } from '@widgets/checkout-new/stepper/steps';
import useStepper, {
  StepModel
} from '@widgets/checkout-new/stepper/useStepper';
import step1 from '@widgets/checkout-new/steps/step-1-details/step-1-details';
import step2 from '@widgets/checkout-new/steps/step-2-shipping-method/step-2-shipping-method';
import { CheckoutFormContext } from '@widgets/checkout/shared/checkoutFormContext';
import { Environment } from '@widgets/environment/environment';
import { ClientEnvironment } from '@widgets/environment/environment.types';

const steps = {
  [step1.key]: {
    index: 0,
    ...step1
  },
  [step2.key]: {
    index: 1,
    ...step2
  }
};

const defaultValues = {
  [step1.key]: step1.defaultValues,
  [step2.key]: step2.defaultValues
};

type CheckoutFormValues = typeof defaultValues;

const getCurrentStep = (currentIndex: number) => {
  const stepValues = Object.values(steps);
  return stepValues.find(step => {
    return step.index == currentIndex;
  });
};

const CheckoutFormNew: React.FC = () => {
  const formRef = useRef<FormikProps<any>>(null);
  const { spacing } = getTheme();

  const { push } = useRouter();

  const { orderTaxAmountStatus } = useContext(CheckoutFormContext);

  const [formValues, setFormValues] =
    useState<CheckoutFormValues>(defaultValues);

  const stepperSteps: StepModel[] = [
    {
      label: 'Details',
      iconProps: { iconName: 'ContactInfo' }
      //isValid: steps[step1.key].validation.isValidSync(formValues.step1)
    },
    {
      label: 'Shipping Method',
      iconProps: { iconName: 'Product' }
      //isValid: steps[step2.key].validation.isValidSync(formValues.step2)
    }
  ];

  const stepper = useStepper({
    steps: stepperSteps,
    initialIndex: 0,
    onExit: () => push(pagePaths.cart)
  });

  const currentStep = getCurrentStep(stepper.currentIndex);

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
          key={currentStep.key}
          formRef={formRef}
          values={formValues[currentStep.key] as any}
        />
      )}

      <CheckoutActions
        isLastStep={stepper.currentIndex === stepperSteps.length - 1}
        onProceedClick={async () => {
          console.log('currentStep', currentStep);
          if (formRef.current && currentStep) {
            await formRef.current.validateForm();
            const isValid = formRef.current.isValid;

            if (isValid) {
              setFormValues({
                ...formValues,
                [currentStep.key]: formRef.current.values
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
