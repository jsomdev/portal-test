import { useState } from 'react';

import { IIconProps } from '@fluentui/react';

export interface StepModel {
  label: string;
  iconProps?: IIconProps;
}

export type Stepper = {
  currentIndex: number;
  currentStep: StepModel | undefined;
  next: () => void;
  previous: () => void;
  navigateToStep: (index: number) => void;
  steps: StepModel[];
};

export type StepperSettings = {
  steps: StepModel[];
  initialIndex: number;
  onExit?: () => void;
};
type UseStepper = (settings: StepperSettings) => Stepper;

const useStepper: UseStepper = ({ steps, initialIndex, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const currentStep = steps[currentIndex];

  function next(): void {
    setCurrentIndex(currentState => {
      if (currentState < steps.length - 1) {
        return currentState + 1;
      }
      return steps.length - 1;
    });
  }
  function previous(): void {
    if (currentIndex === 0 && onExit) {
      onExit();
    }
    setCurrentIndex(currentState => {
      if (currentState > 0) {
        return currentState - 1;
      }
      return 0;
    });
  }

  function navigateToStep(index: number) {
    setCurrentIndex(index);
  }

  return {
    next,
    previous,
    navigateToStep,
    currentStep,
    currentIndex,
    steps
  };
};

export default useStepper;
