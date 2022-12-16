import { CartItem } from '@providers/cart/cartContext';
import { QuoteRequest } from '@services/portal-api/models/QuoteRequest';

import {
  RequestForQuoteFormValues,
  RequestForQuoteStep,
  RequestForQuoteSteps,
  StepKey
} from './shared/types';

export function mapRequestForQuoteFormValuesToQuoteRequest(
  values: RequestForQuoteFormValues,
  items: CartItem[]
): QuoteRequest {
  const request: QuoteRequest = {
    emailAddresses: [values.details.email],
    lines: items.map(item => ({
      quantity: item.quantity,
      productId: item.productId,
      productName: item.productName,
      productNumber: item.productNumber || ''
    })),
    comment: values.overview.additionalInformation,
    contactInfo: {
      company: values.details.company,
      emailAddresses: [values.details.email],
      firstName: values.details.firstName,
      lastName: values.details.name,
      phoneNumber: values.details.phone,
      urls: []
    },
    address: {
      city: values.details.city,
      country: values.details.country,
      lines: [values.details.address],
      postalCode: values.details.postalCode,
      region: values.details.state
    }
  };
  return request;
}

export const getCurrentStep = (
  steps: RequestForQuoteSteps | undefined,
  currentIndex: number
): {
  currentStep: RequestForQuoteStep<StepKey> | null;
  currentStepKey: StepKey | null;
  isLastStep: boolean;
} => {
  if (!steps) {
    return { currentStep: null, currentStepKey: null, isLastStep: false };
  }
  const stepKeys = Object.keys(steps) as StepKey[];
  const currentStepKey = stepKeys.find(
    key => steps[key].index === currentIndex
  );
  if (!currentStepKey) {
    return { currentStep: null, currentStepKey: null, isLastStep: false };
  }
  const currentStep = steps[currentStepKey];
  const isLastStep = currentStep.index === stepKeys.length - 1;
  return { currentStep, currentStepKey, isLastStep };
};
