import React, { useCallback, useState } from 'react';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';

import { Step, StepperContext, StepperContextProps } from './stepperContext';

export const StepperProvider: React.FC<StepperContextProps> = ({
  initialIndex,
  steps: initialSteps,
  submitText,
  onUnload,
  children
}) => {
  const [steps, setSteps] = useState<Step[]>(initialSteps);
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex || 0);
  const { spacing } = useTheme();

  function next(): void {
    setCurrentIndex(currentState => {
      if (currentState < steps.length - 1) {
        return currentState + 1;
      }
      return steps.length - 1;
    });
  }
  function previous(): void {
    if (currentIndex === 0 && onUnload) {
      onUnload();
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

  function getStep(index: number): Step | undefined {
    return steps.find((step, currentIndex) => index === currentIndex);
  }

  const updateStep = useCallback(
    (index: number, step: Step) => {
      if (index < steps.length - 1) {
        const updatedSteps = [...steps];
        updatedSteps[index] = step;
        setSteps(updatedSteps);
      }
    },
    [steps]
  );

  const styles: IStackStyles = {
    root: {
      position: 'relative'
    }
  };

  return (
    <StepperContext.Provider
      value={{
        currentIndex,
        submitText,
        getStep,
        initialIndex,
        steps,
        next,
        previous,
        updateStep,
        navigateToStep
      }}
    >
      <Stack tokens={{ childrenGap: spacing.l1 }} styles={styles}>
        {children}
      </Stack>
    </StepperContext.Provider>
  );
};
