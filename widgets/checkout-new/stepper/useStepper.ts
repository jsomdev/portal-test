//TODO move out of checkout folder for re-use when working on quote checkout
// and/or when old checkout can be removed, as this is actually a different stepper from the old one
import { useState } from 'react';

import { IIconProps } from '@fluentui/react';

export interface StepModel {
  label: string;
  iconProps?: IIconProps;
}

type UseStepper = (settings: {
  steps: StepModel[];
  initialIndex: number;
  onExit?: () => void;
}) => {
  currentIndex: number;
  currentStep: StepModel;
  next: () => void;
  previous: () => void;
  navigateToStep: (index: number) => void;
};

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
    currentIndex
  };
};

export default useStepper;
