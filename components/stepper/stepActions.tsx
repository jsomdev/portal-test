import React from 'react';

import { useIntl } from 'react-intl';

import {
  DefaultButton,
  IButtonStyles,
  PrimaryButton,
  Stack,
  useTheme
} from '@fluentui/react';
import { defineMessages } from '@formatjs/intl';
import { messageIds } from '@services/i18n';

import { useStepper } from './stepperContext';

const messages = defineMessages({
  proceed: {
    id: messageIds.steps.actions.proceed,
    description: 'Button text for the next step',
    defaultMessage: 'Proceed'
  },
  previous: {
    id: messageIds.steps.actions.previous,
    description: 'Button text for the previous step',
    defaultMessage: 'Previous step'
  }
});

export const StepActions: React.FC<{
  onProceedClick?: () => void;
}> = ({ onProceedClick }) => {
  const { previous, currentIndex, steps, next } = useStepper();
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();

  const styles: IButtonStyles = {
    root: {
      padding: `${spacing.l1} ${spacing.m}`
    }
  };

  return (
    <Stack.Item>
      <Stack tokens={{ childrenGap: spacing.m }}>
        {currentIndex !== steps.length - 1 ? (
          <PrimaryButton
            text={formatMessage(messages.proceed)}
            onClick={onProceedClick ? onProceedClick : next}
            styles={styles}
          />
        ) : null}

        <DefaultButton
          onClick={previous}
          text={formatMessage(messages.previous)}
          disabled={currentIndex === 0}
        />
      </Stack>
    </Stack.Item>
  );
};
