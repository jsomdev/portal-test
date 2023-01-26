import { useEffect } from 'react';

import { useFormikContext } from 'formik';
import { useIntl } from 'react-intl';

import {
  ISpinnerStyles,
  ITextStyles,
  Icon,
  Spinner,
  SpinnerSize,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { defineMessages } from '@formatjs/intl';
import { messageIds } from '@services/i18n';

import { useMe } from '../../providers/user/userContext';

const messages = defineMessages({
  submittingDescription: {
    id: messageIds.signupFlow.submittingDescription,
    defaultMessage: 'We are setting things up for you....'
  },
  completionTitle: {
    id: messageIds.signupFlow.completionTitle,
    defaultMessage: ' All done!'
  },
  completionDescription: {
    id: messageIds.signupFlow.completionDescription,
    defaultMessage: 'Thank you for completing your sign up.'
  },
  startBrowsingTitle: {
    id: messageIds.signupFlow.startBrowsingTitle,
    defaultMessage: 'You are all set to start browsing!'
  },
  submittingTitle: {
    id: messageIds.signupFlow.submittingTitle,
    defaultMessage: 'Please wait!'
  },
  submittingErrorTitle: {
    id: messageIds.signupFlow.submittingErrorTitle,
    defaultMessage: 'An error occurred!'
  },
  submittingErrorDescription: {
    id: messageIds.signupFlow.submittingErrorDescription,
    defaultMessage:
      'Your request could not be completed. Please try again or contact customer support.'
  }
});

interface SubmitStepStyles {
  spinner: Partial<ISpinnerStyles>;
  paragraph: ITextStyles;
  highlightedParagraph: ITextStyles;
  title: ITextStyles;
}

export const SubmitStep: React.FC = () => {
  const { submitForm } = useFormikContext();
  const { formatMessage } = useIntl();

  const { createVerificationRequestStatus } = useMe();
  const { spacing } = useTheme();
  useEffect(() => {
    submitForm();
  }, [submitForm]);

  // TODO: Styling conventions
  const styles: SubmitStepStyles = {
    spinner: {
      root: {
        margin: spacing.l1
      },
      label: {
        fontSize: 17
      },
      circle: {
        width: 40,
        height: 40,
        borderWidth: spacing.s2
      }
    },
    title: {
      root: {
        fontSize: 40,
        color: 'green',
        fontWeight: 500
      }
    },
    highlightedParagraph: {
      root: {
        fontWeight: 500,
        textAlign: 'center'
      }
    },

    paragraph: {
      root: {
        textAlign: 'center'
      }
    }
  };

  return (
    <Stack horizontalAlign="stretch" tokens={{ childrenGap: 16 }}>
      {createVerificationRequestStatus === 'error' && (
        <Stack
          verticalFill
          horizontalAlign="center"
          tokens={{ childrenGap: spacing.m, padding: `${spacing.m} 0` }}
        >
          <Text variant="xLarge">
            {formatMessage(messages.submittingErrorTitle)}
          </Text>
          <Text variant="mediumPlus">
            {formatMessage(messages.submittingErrorDescription)}
          </Text>
        </Stack>
      )}
      {createVerificationRequestStatus === 'loading' && (
        <Stack
          verticalFill
          horizontalAlign="center"
          tokens={{ childrenGap: spacing.m, padding: `${spacing.m} 0` }}
        >
          <Text variant="xLarge">
            {formatMessage(messages.submittingTitle)}
          </Text>
          <Spinner
            styles={styles.spinner}
            size={SpinnerSize.large}
            label={formatMessage(messages.submittingDescription)}
          />
        </Stack>
      )}
      {createVerificationRequestStatus === 'success' && (
        <Stack
          verticalFill
          horizontalAlign="center"
          tokens={{ childrenGap: spacing.m, padding: `${spacing.m} 0` }}
        >
          <Text variant="xLarge">
            {formatMessage(messages.completionTitle)}
          </Text>
          <Icon styles={styles.title} iconName="Completed" />
          <Stack tokens={{ childrenGap: 4 }}>
            <Text styles={styles.paragraph} variant="large">
              {formatMessage(messages.completionDescription)}
            </Text>
          </Stack>
          <Stack>
            <Text styles={styles.highlightedParagraph} variant="large">
              {formatMessage(messages.startBrowsingTitle)}
            </Text>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
