import { createContext } from 'react';

import { Stepper } from '@widgets/checkout/stepper/useStepper';

import {
  RequestForQuoteFormValues,
  RequestForQuoteSteps
} from '../shared/types';

export interface RequestForQuoteContextProps {
  formValues: RequestForQuoteFormValues | undefined;
  setFormValues: (values: RequestForQuoteFormValues) => void;
  stepper: Stepper;
  steps: RequestForQuoteSteps | undefined;
}

const initialContextProps: RequestForQuoteContextProps = {
  formValues: undefined,
  setFormValues: () => {
    throw new Error('Not implemented');
  },
  steps: undefined,
  stepper: {
    currentIndex: 0,
    currentStep: undefined,
    next: () => {
      throw new Error('Not implemented');
    },
    previous: () => {
      throw new Error('Not implemented');
    },
    navigateToStep: () => {
      throw new Error('Not implemented');
    },
    steps: []
  }
};
export const RequestForQuoteContext =
  createContext<RequestForQuoteContextProps>(initialContextProps);
