import React, { useContext } from 'react';

import { IIconProps } from '@fluentui/react';

export interface Step {
  label: string;
  isValid: boolean;
  iconProps?: IIconProps;
}
export type StepperContextProps = Pick<
  StepperContextModel,
  'initialIndex' | 'steps' | 'submitText'
> & {
  // Event handler that will be fired when previous is called when the index is 0
  // Do not passed the handler to disable the unload
  onUnload?: (
    event?:
      | React.MouseEvent<unknown, MouseEvent>
      | React.KeyboardEvent<unknown>
      | undefined
  ) => void;
};

export interface StepperContextModel {
  steps: Step[];
  currentIndex: number;
  initialIndex?: number;
  submitText?: string;
  next: () => void;
  previous: () => void;
  getStep: (index: number) => Step | undefined;
  // e.g if we need to change label of a step
  updateStep: (index: number, step: Step) => void;
  navigateToStep: (index: number) => void;
}

const initialStepperContext: StepperContextModel = {
  steps: [],
  currentIndex: -1,
  next: () => {
    throw new Error('Not implemented yet');
  },
  previous: () => {
    throw new Error('Not implemented yet');
  },
  getStep: () => {
    throw new Error('Not implemented yet');
  },
  updateStep: () => {
    throw new Error('Not implemented yet');
  },
  navigateToStep: () => {
    throw new Error('Not implemented yet');
  }
};

export const StepperContext: React.Context<StepperContextModel> =
  React.createContext<StepperContextModel>(initialStepperContext);

export const useStepper = (): StepperContextModel => useContext(StepperContext);
