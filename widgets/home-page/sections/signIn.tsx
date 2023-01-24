import React, { CSSProperties } from 'react';

import {
  FormattedMessage,
  MessageDescriptor,
  defineMessages,
  useIntl
} from 'react-intl';

import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import {
  IButtonStyles,
  IStackItemStyles,
  ITextStyles,
  PrimaryButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { customerLoginRequest } from '@services/authentication/authenticationConfiguration';
import { messageIds } from '@services/i18n';
import { TabletAndDesktop, mediaQueryFrom } from '@widgets/media-queries';

interface SignUpStyles {
  stepsContainer: IStackItemStyles;
  title: ITextStyles;
  stepContainer: IStackItemStyles;
  step: IStackItemStyles;
  stepIndex: ITextStyles;
  stepTitle: ITextStyles;
  stepDescription: ITextStyles;
  callToAction: IButtonStyles;
  dottedLine: (index: number) => CSSProperties;
}

const messages = defineMessages({
  signUpTitle: {
    id: messageIds.pages.home.sections.signUp.title,
    description: 'Header text for the sign up section',
    defaultMessage: 'Sign up for the best shopping experience'
  },
  signUpCallToAction: {
    id: messageIds.pages.home.sections.signUp.callToAction,
    description: 'Call to action text for the sign up section',
    defaultMessage: 'Create your account or sign in'
  }
});

const signUpSteps: {
  title: MessageDescriptor;
  description: MessageDescriptor;
}[] = [
  {
    title: {
      id: messageIds.pages.home.sections.signUp.steps.first.title,
      description: 'Title for the first step in the signup'
    },
    description: {
      id: messageIds.pages.home.sections.signUp.steps.first.description,
      description: 'Description for the first step in the signup'
    }
  },
  {
    title: {
      id: messageIds.pages.home.sections.signUp.steps.second.title,
      description: 'Title for the second step in the signup'
    },
    description: {
      id: messageIds.pages.home.sections.signUp.steps.second.description,
      description: 'Description for second step in the signup'
    }
  },
  {
    title: {
      id: messageIds.pages.home.sections.signUp.steps.third.title,
      description: 'Title for the third step in the signup'
    },
    description: {
      id: messageIds.pages.home.sections.signUp.steps.third.description,
      description: 'Description for the third step in the signup'
    }
  }
];

export const SignIn: React.FC = () => {
  const { palette, spacing, fonts } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  const { formatMessage } = useIntl();
  const { instance } = useMsal();
  const STEP_WIDTH = 324;
  const STEP_INDEX_WIDTH = 64;
  const STEP_PADDING = 32;

  const styles: SignUpStyles = {
    stepsContainer: { root: { minWidth: '50%', padding: 24 } },
    stepContainer: {
      root: {
        position: 'relative',
        width: STEP_WIDTH,
        padding: STEP_PADDING
      }
    },
    title: {
      root: {
        textAlign: 'center'
      }
    },
    step: {
      root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: STEP_INDEX_WIDTH,
        width: STEP_INDEX_WIDTH,
        borderRadius: STEP_INDEX_WIDTH / 2,
        background: palette.neutralQuaternary
      }
    },
    stepIndex: {
      root: {
        color: palette.white,
        fontWeight: 500
      }
    },
    stepDescription: { root: { textAlign: 'center' } },
    stepTitle: {
      root: {
        textAlign: 'center',
        color: palette.neutralPrimary
      }
    },
    callToAction: {
      root: {
        height: 48,
        marginTop: spacing.l2,
        ...mediaQueryFrom('tablet', {
          marginTop: 0
        })
      },
      label: {
        fontSize: fonts.mediumPlus.fontSize
      }
    },
    dottedLine: (index: number) => ({
      borderTop: '3px dashed #DDD',
      position: 'absolute',
      width:
        index < signUpSteps.length - 1
          ? STEP_WIDTH - STEP_INDEX_WIDTH - STEP_PADDING
          : 0,
      left: (STEP_WIDTH + STEP_INDEX_WIDTH + STEP_PADDING) / 2,
      top: STEP_INDEX_WIDTH / 2 + STEP_PADDING
    })
  };

  if (isAuthenticated) {
    return null;
  }
  return (
    <Stack horizontalAlign="center" tokens={{ padding: spacing.l2 }}>
      <Text as="h2" variant="xxLargePlus" styles={styles.title}>
        <FormattedMessage {...messages.signUpTitle} />
      </Text>
      <TabletAndDesktop>
        <Stack.Item styles={styles.stepsContainer}>
          <Stack horizontal horizontalAlign="center">
            {signUpSteps.map((item, index) => (
              <Stack.Item
                verticalFill
                key={formatMessage(item.title)}
                styles={styles.stepContainer}
              >
                <div style={styles.dottedLine(index)} />
                <Stack
                  horizontalAlign="center"
                  tokens={{ childrenGap: spacing.m }}
                >
                  <Stack.Item styles={styles.step}>
                    <Text variant="xLargePlus" styles={styles.stepIndex}>
                      {index + 1}
                    </Text>
                  </Stack.Item>
                  <Text as="h3" variant="xLarge" styles={styles.stepTitle}>
                    <FormattedMessage {...item.title} />
                  </Text>
                  <Text as="p" styles={styles.stepDescription}>
                    <FormattedMessage {...item.description} />
                  </Text>
                </Stack>
              </Stack.Item>
            ))}
          </Stack>
        </Stack.Item>
      </TabletAndDesktop>
      <Stack.Item>
        <PrimaryButton
          styles={styles.callToAction}
          onClick={() => instance.loginRedirect(customerLoginRequest)}
        >
          {formatMessage(messages.signUpCallToAction)}
        </PrimaryButton>
      </Stack.Item>
    </Stack>
  );
};
