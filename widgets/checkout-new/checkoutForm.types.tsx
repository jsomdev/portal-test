import React from 'react';

import { IIconProps } from '@fluentui/react';
import step1Details, {
  Step1DetailsProps,
  Step1FormData
} from '@widgets/checkout-new/steps/step-1-details/step-1-details';
import step2ShippingMethod, {
  Step2FormData,
  Step2ShippingMethodProps
} from '@widgets/checkout-new/steps/step-2-shipping-method/step-2-shipping-method';

export type StepKey = 'details' | 'shippingMethod';

export type CheckoutFormValues = {
  [key in StepKey]: key extends 'details'
    ? Step1FormData
    : key extends 'shippingMethod'
    ? Step2FormData
    : never;
};

export type CheckoutSteps = {
  [key in StepKey]: {
    index: number;
    label: string;
    iconProps: IIconProps;
    defaultValues: CheckoutFormValues[key];
    Component: key extends 'details'
      ? React.FC<Step1DetailsProps>
      : key extends 'shippingMethod'
      ? React.FC<Step2ShippingMethodProps>
      : never;
    validation: key extends 'details'
      ? typeof step1Details.validation
      : key extends 'shippingMethod'
      ? typeof step2ShippingMethod.validation
      : never;
  };
};
