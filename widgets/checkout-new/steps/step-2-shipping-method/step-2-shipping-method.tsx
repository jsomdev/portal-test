import React from 'react';

import * as yup from 'yup';
import { InferType } from 'yup';

import { StepFields } from '@widgets/checkout-new/checkout.types';

type ShippingMethod =
  | 'FreeShipping'
  | 'FlatRate'
  | 'UpsGround'
  | 'UpsSecondDayAir'
  | 'UpsNextDayAir'
  | 'UpsNextDayAirSaver'
  | 'UpsStandard'
  | 'UpsWorldwideExpedited';

const validation = yup.object({
  shippingMethod: yup.mixed<ShippingMethod>().required()
});

export type Step2FormData = Partial<InferType<typeof validation>>;

const defaultValues: Step2FormData = {
  shippingMethod: undefined
};

const step2ShippingMethodFields: StepFields<Step2FormData> = {
  shippingMethod: {
    name: 'shippingMethod',
    label: 'Shipping method',
    placeholder: 'Shipping method'
  }
};

export const Step2ShippingMethod: React.FC<{ values: Step2FormData }> = () => {
  return <div>Step 2 Content</div>;
};

export default {
  key: 'step-2',
  Component: Step2ShippingMethod,
  defaultValues,
  validation
};
