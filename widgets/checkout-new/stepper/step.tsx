//TODO move out of checkout folder for re-use when working on quote checkout
// and/or when old checkout can be removed, as this is actually a different stepper from the old one
import React, { useCallback } from 'react';

import { StepStyles } from '@components/stepper/stepper.types';
import {
  FontWeights,
  Icon,
  Label,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';
import { StepModel } from '@widgets/checkout-new/stepper/useStepper';

type StepProps = {
  index: number;
  step: StepModel;
  isError?: boolean;
  isActive: boolean;
  isCompleted: boolean;
  navigateToStep: (index: number) => void;
};
export const Step: React.FC<StepProps> = ({
  isActive,
  step,
  index,
  isError,
  isCompleted,
  navigateToStep
}) => {
  const { palette } = useTheme();

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
    isCompleted && !isActive && navigateToStep(index);
  }, [index, isActive, isCompleted, navigateToStep]);

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
