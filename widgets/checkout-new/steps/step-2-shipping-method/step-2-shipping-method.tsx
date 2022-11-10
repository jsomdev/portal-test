import React from 'react';

import { FormikProps } from 'formik';
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

export type Step2ShippingMethodProps = {
  values: Step2FormData;
  formRef: React.RefObject<FormikProps<Step2FormData>> | undefined;
};

export const Step2ShippingMethod: React.FC<Step2ShippingMethodProps> = () => {
  const step2ShippingMethodFields: StepFields<Step2FormData> = {
    shippingMethod: {
      name: 'shippingMethod',
      label: 'Shipping Method',
      placeholder: 'Shipping method'
    }
  };
  return <div>Step 2 Content</div>;
};

export default {
  Component: Step2ShippingMethod,
  defaultValues,
  validation
};
