import { useEffect } from 'react';

import { useFormikContext } from 'formik';

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

import { useMe } from '../../providers/user/userContext';

const messages = {
  loading: 'We are setting things up for you....',
  successTitle: ' All done!',
  successDescriptionP1: 'Thank you for completing your sign up.',
  successDescriptionP2:
    'You will be notified by email once your information has been reviewed.',
  successDescriptionP3: 'You are all set to start browsing!',
  loadingTitle: 'Please wait!',
  success: '',
  errorTitle: 'An error occurred!',
  errorDescription:
    'Your request could not be completed. Please try again or contact customer support.'
};

interface SubmitStepStyles {
  spinner: Partial<ISpinnerStyles>;
  paragraph: ITextStyles;
  highlightedParagraph: ITextStyles;
  title: ITextStyles;
}

export const SubmitStep: React.FC = () => {
  const { submitForm } = useFormikContext();

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
          <Text variant="xLarge">{messages.errorTitle}</Text>
          <Text variant="mediumPlus">{messages.errorDescription}</Text>
        </Stack>
      )}
      {createVerificationRequestStatus === 'loading' && (
        <Stack
          verticalFill
          horizontalAlign="center"
          tokens={{ childrenGap: spacing.m, padding: `${spacing.m} 0` }}
        >
          <Text variant="xLarge">{messages.loadingTitle}</Text>
          <Spinner
            styles={styles.spinner}
            size={SpinnerSize.large}
            label={messages.loading}
          />
        </Stack>
      )}
      {createVerificationRequestStatus === 'success' && (
        <Stack
          verticalFill
          horizontalAlign="center"
          tokens={{ childrenGap: spacing.m, padding: `${spacing.m} 0` }}
        >
          <Text variant="xLarge">{messages.successTitle}</Text>
          <Icon styles={styles.title} iconName="Completed" />
          <Stack tokens={{ childrenGap: 4 }}>
            <Text styles={styles.paragraph} variant="large">
              {messages.successDescriptionP1}
            </Text>
            <Text styles={styles.paragraph} variant="large">
              {messages.successDescriptionP2}
            </Text>
          </Stack>
          <Stack>
            <Text styles={styles.highlightedParagraph} variant="large">
              {messages.successDescriptionP3}
            </Text>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
