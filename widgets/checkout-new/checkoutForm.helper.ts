import {
  CheckoutSteps,
  StepKey
} from '@widgets/checkout-new/checkoutForm.types';

export const getCurrentStep = (steps: CheckoutSteps, currentIndex: number) => {
  const stepKeys = Object.keys(steps) as StepKey[];
  const currentStepKey = stepKeys.find(
    key => steps[key].index === currentIndex
  );
  if (!currentStepKey) {
    return { currentStep: null, currentStepKey: null };
  }
  const currentStep = steps[currentStepKey];
  return { currentStep, currentStepKey };
};
