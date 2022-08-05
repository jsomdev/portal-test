import React from 'react';

import { getTheme, Stack } from '@fluentui/react';
import { rem } from '@utilities/rem';

import { Step } from './step';
import { StepsStyles } from './stepper.types';
import { Step as StepModel, useStepper } from './stepperContext';

export const Steps: React.FC<{ stepState?: 'error' | 'default' }> = ({
  stepState
}) => {
  const { palette } = getTheme();
  const { currentIndex, steps } = useStepper();

  const progressWidth: number = React.useMemo(() => {
    return (100 / (steps.length - 1)) * currentIndex;
  }, [currentIndex, steps.length]);

  const styles: StepsStyles = {
    activeLine: {
      root: {
        width: `calc(${progressWidth}%) - ${rem('30px')})`,
        height: rem(4),
        top: rem(19),
        background: palette.themeSecondary,
        position: 'absolute',
        left: rem(10),
        transition: 'width 0.5s ease'
      }
    },
    guideLine: {
      root: {
        width: `calc(100% - ${rem(40)})`,
        height: rem(4),
        top: rem(19),
        backgroundColor: palette.neutralLight,
        position: 'absolute',
        left: rem(10),
        transition: 'background 2.5s ease'
      }
    },
    root: { root: { position: 'relative' } },
    label: {
      root: {
        maxWidth: `${100 / steps.length}%`,
        textAlign: 'center'
      }
    }
  };

  return (
    <Stack styles={styles.root}>
      <Stack.Item styles={styles.guideLine}>
        <div></div>
      </Stack.Item>
      <Stack.Item styles={styles.activeLine}>
        <div></div>
      </Stack.Item>
      <Stack.Item>
        <Stack horizontal horizontalAlign="space-between">
          {steps?.map((step: StepModel, i: number) => {
            const isActive = i === currentIndex;
            const isCompleted = i <= currentIndex;
            return (
              <Stack.Item key={`${step.label}_${i}`} styles={styles.label}>
                <Step
                  step={step}
                  isActive={isActive}
                  isError={stepState === 'error'}
                  index={i}
                  isCompleted={isCompleted}
                />
              </Stack.Item>
            );
          })}
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
