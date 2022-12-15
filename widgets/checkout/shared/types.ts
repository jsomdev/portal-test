import { IIconProps } from '@fluentui/react';
import step1Details, {
  Step1DetailsProps,
  Step1FormData
} from '@widgets/checkout/steps/step-1-details/step-1-details';
import step2ShippingMethod, {
  Step2FormData,
  Step2ShippingMethodProps
} from '@widgets/checkout/steps/step-2-shipping-method/step-2-shipping-method';
import step3Payment, {
  Step3FormData,
  Step3Props
} from '@widgets/checkout/steps/step-3-payment/step-3-payment';
import step4Overview, {
  Step4FormData,
  Step4Props
} from '@widgets/checkout/steps/step-4-overview/step-4-overview';

export type StepKey = 'details' | 'shippingMethod' | 'payment' | 'overview';

export type CheckoutFormValues = {
  [key in StepKey]: key extends 'details'
    ? Step1FormData
    : key extends 'shippingMethod'
    ? Step2FormData
    : key extends 'payment'
    ? Step3FormData
    : key extends 'overview'
    ? Step4FormData
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
      : key extends 'payment'
      ? React.FC<Step3Props>
      : key extends 'overview'
      ? React.FC<Step4Props>
      : never;
    validation: key extends 'details'
      ? typeof step1Details.validation
      : key extends 'shippingMethod'
      ? typeof step2ShippingMethod.validation
      : key extends 'payment'
      ? typeof step3Payment.validation
      : key extends 'overview'
      ? typeof step4Overview.validation
      : never;
  };
};

export type StepFields<T> = {
  [Property in keyof T]: {
    readonly name: Property;
    readonly label: string;
    readonly placeholder?: string;
  };
};
