import React, { useContext, useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import { Stepper } from '@components/stepper/stepper';
import { Step, useStepper } from '@components/stepper/stepperContext';
import { Steps } from '@components/stepper/steps';
import { AddressBookContext } from '@providers/address-book/addressBookContext';
import { getValidPostalAddressFromUserAddress } from '@providers/address-book/addressBookHelper';
import { useMe } from '@providers/user/userContext';
import { PostalAddress } from '@services/portal-api';
import pagePaths from '@utilities/pagePaths';
import { scrollToTop } from '@utilities/scrollToTop';
import step1, {
  Step1
} from '@widgets/checkout-new/steps/step-1-details/step-1-details';
import step2, {
  Step2
} from '@widgets/checkout-new/steps/step-2-shipping-method/step-2-shipping-method';
import { CheckoutDetailsFormValues } from '@widgets/checkout/checkout-form/checkoutForm.types';
import { CheckoutFormContext } from '@widgets/checkout/shared/checkoutFormContext';
import { Environment } from '@widgets/environment/environment';
import { ClientEnvironment } from '@widgets/environment/environment.types';
import { CheckoutFormFooterStepActions } from '@widgets/forms/checkoutFormFooterStepActions';

export const StepContent: React.FC<{
  children: (currentIndex: number) => React.ReactNode;
}> = ({ children }) => {
  const { currentIndex } = useStepper();
  return <React.Fragment>{children(currentIndex)}</React.Fragment>;
};

export const FormActions: React.FC<{
  children: (onProceed: () => void, onPrevious: () => void) => React.ReactNode;
}> = ({ children }) => {
  const { next, previous } = useStepper();
  const onProceed = () => {
    next();
  };
  const onPrevious = () => {
    previous();
  };
  return <React.Fragment>{children(onProceed, onPrevious)}</React.Fragment>;
};

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

const CheckoutFormNew: React.FC = () => {
  const { push } = useRouter();

  const { orderTaxAmountStatus } = useContext(CheckoutFormContext);

  const [formValues] = useState<CheckoutFormValues>(defaultValues);

  const stepperSteps: Step[] = [
    {
      label: 'Details',
      iconProps: { iconName: 'ContactInfo' },
      isValid: steps[step1.key].validation.isValidSync(formValues.step1)
    },
    {
      label: 'Shipping Method',
      iconProps: { iconName: 'Product' },
      isValid: steps[step2.key].validation.isValidSync(formValues.step2)
    }
  ];
  return (
    <div>
      <Stepper
        onUnload={() => push(pagePaths.cart)}
        steps={stepperSteps}
        initialIndex={0}
      >
        <Steps />
        <StepContent>
          {currentIndex => {
            //TODO refactor and memoize
            const stepValues = Object.values(steps);
            const step = stepValues.find(step => {
              return step.index == currentIndex;
            });
            if (!step) {
              return (
                <Environment target={ClientEnvironment.Develop}>
                  Step is missing Component in default export
                </Environment>
              );
            }
            const Component = step.Component;
            const values = formValues[step.key] as any;
            return <Component values={values} />;
          }}
        </StepContent>
        <FormActions>
          {(onProceed, onPrevious) => (
            <CheckoutFormFooterStepActions
              onProceedClick={() => {
                onProceed();
                scrollToTop('body');
              }}
              onPreviousClick={() => {
                onPrevious();
                scrollToTop('body');
              }}
              disableSubmit={orderTaxAmountStatus === 'loading'}
            />
          )}
        </FormActions>
      </Stepper>
    </div>
  );
};

export default CheckoutFormNew;
