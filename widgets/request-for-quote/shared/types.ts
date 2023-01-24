import { IIconProps } from '@fluentui/react';

import step1Details, {
  Step1DetailsProps,
  Step1FormData
} from '../steps/step-1-details/step-1-details';
import step2Overview, {
  Step2OverviewProps
} from '../steps/step-2-overview/step-2-overview';
import { Step2FormData } from '../steps/step-2-overview/step-2-overview.helper';

export type StepKey = 'details' | 'overview';

export type RequestForQuoteFormValues = {
  [key in StepKey]: key extends 'details'
    ? Step1FormData
    : key extends 'overview'
    ? Step2FormData
    : never;
};

export type RequestForQuoteSteps = {
  [key in StepKey]: RequestForQuoteStep<key>;
};

export interface RequestForQuoteStep<key extends StepKey> {
  index: number;
  label: string;
  iconProps: IIconProps;
  defaultValues: RequestForQuoteFormValues[key];
  Component: key extends 'details'
    ? React.FC<Step1DetailsProps>
    : key extends 'overview'
    ? React.FC<Step2OverviewProps>
    : never;
  validation: key extends 'details'
    ? typeof step1Details.validation
    : key extends 'overview'
    ? typeof step2Overview.validation
    : never;
}
