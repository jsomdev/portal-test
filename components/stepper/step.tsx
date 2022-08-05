import React, { useCallback } from 'react';

import {
  FontWeights,
  Icon,
  Label,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';

import { StepStyles } from './stepper.types';
import { Step as StepModel, useStepper } from './stepperContext';

export const Step: React.FC<{
  index: number;
  step: StepModel;
  isError?: boolean;
  isActive: boolean;
  isCompleted: boolean;
}> = ({ isActive, step, index, isError, isCompleted }) => {
  const { palette } = useTheme();
  const { navigateToStep, steps } = useStepper();

  const getBackgroundColor = useCallback(() => {
    if (isActive && isError) {
      return palette.redDark;
    }
    if (isActive || isCompleted) {
      return palette.themeSecondary;
    }
    return palette.neutralLight;
  }, [isError, isActive, isCompleted, palette]);

  const onStepClick: () => void = useCallback(() => {
    steps[index].isValid === true &&
      isCompleted &&
      !isActive &&
      navigateToStep(index);
  }, [index, isActive, isCompleted, navigateToStep, steps]);

  const styles: StepStyles = {
    stepContainer: (isActive: boolean, isCompleted: boolean) => ({
      root: {
        transition: 'background-color .3s ease-in, color .3s ease-in',
        backgroundColor: getBackgroundColor(),
        height: rem(40),
        width: rem(40),
        textAlign: 'center',
        borderRadius: '50%',
        position: 'relative',
        fontSize: rem(24),
        color:
          isActive || isCompleted ? palette.white : palette.neutralTertiary,
        cursor: isCompleted && !isActive ? 'pointer' : 'default'
      }
    }),
    stepLine: {
      root: {}
    },
    stepText: {
      root: {
        color:
          isActive || isCompleted ? palette.white : palette.neutralTertiary,
        transition: 'color .3s ease-in'
      }
    },
    labelContainer: {
      root: {}
    },
    labelText: (isActive: boolean, isCompleted: boolean) => ({
      root: {
        fontWeight: FontWeights.regular,
        color:
          isActive || isCompleted ? palette.black : palette.neutralTertiary,
        maxWidth: 60
      }
    })
  };

  return (
    <Stack horizontalAlign="center" onClick={onStepClick}>
      <Stack.Item>
        <Stack
          styles={styles.stepContainer(isActive, isCompleted)}
          verticalAlign="center"
        >
          {step.iconProps ? (
            <Icon {...step.iconProps} />
          ) : (
            <Text styles={styles.stepText}>{index + 1}</Text>
          )}
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <Stack>
          <Label styles={styles.labelText(isActive, isCompleted)}>
            {step.label}
          </Label>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
