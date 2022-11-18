import { createContext } from 'react';

import { PostalAddress } from '@services/portal-api';
import { ShippingCostAmount, TaxAmount } from '@services/portal-api/base/types';
import { ReactQueryStatus } from '@services/react-query/types';
import {
  CheckoutFormValues,
  CheckoutSteps
} from '@widgets/checkout-new/shared/types';
import { Stepper } from '@widgets/checkout-new/stepper/useStepper';

export interface CheckoutContextProps {
  totalCost: number;
  subTotalCost: number;
  setSubTotalCost: (subTotalCost: number) => void;
  selectedShippingOption: ShippingCostAmount | undefined;
  setSelectedShippingOption: (
    shippingOption: ShippingCostAmount | undefined
  ) => void;
  currencyCode: string;
  shippingOptions: ShippingCostAmount[];
  setShippingOptions: (options: ShippingCostAmount[]) => void;
  shippingAddress: PostalAddress | undefined;
  setShippingAddress: (address: PostalAddress) => void;
  orderTaxAmount: TaxAmount | undefined;
  orderTaxAmountStatus: ReactQueryStatus;
  shippingCostData: ShippingCostAmount[] | undefined;
  shippingCostDataStatus: ReactQueryStatus;
  creditCardIssuer: string | undefined;
  setCreditCardIssuer: (cardIssuer: string) => void;
  formValues: CheckoutFormValues | undefined;
  setFormValues: (values: CheckoutFormValues) => void;
  stepper: Stepper;
  steps: CheckoutSteps | undefined;
}

const initialContextProps: CheckoutContextProps = {
  totalCost: 0,
  subTotalCost: 0,
  setSubTotalCost: (subTotalCost: number) => {
    throw new Error('Not implemented');
  },
  selectedShippingOption: undefined,
  setSelectedShippingOption: (
    shippingOption: ShippingCostAmount | undefined
  ) => {
    throw new Error('Not implemented');
  },
  currencyCode: 'USD',
  shippingOptions: [],
  setShippingOptions: (options: ShippingCostAmount[]) => {
    throw new Error('Not implemented');
  },
  shippingAddress: undefined,
  setShippingAddress: (address: PostalAddress) => {
    throw new Error('Not implemented');
  },
  orderTaxAmount: undefined,
  orderTaxAmountStatus: 'idle',
  shippingCostData: undefined,
  shippingCostDataStatus: 'idle',
  creditCardIssuer: undefined,
  setCreditCardIssuer: (cardIssuer: string) => {
    throw new Error('Not implemented');
  },
  formValues: undefined,
  setFormValues: (values: CheckoutFormValues) => {
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
export const CheckoutContext =
  createContext<CheckoutContextProps>(initialContextProps);
