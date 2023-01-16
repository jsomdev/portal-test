import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { PortalMessageBar } from '@components/messages/portalMessageBar';
import {
  ActionButton,
  FontWeights,
  IButtonStyles,
  IStackStyles,
  ITextStyles,
  MessageBarType,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';

export interface RequestForQuoteErrorMessageStyles {
  title: ITextStyles;
  actionButton: IButtonStyles;
  actions: IStackStyles;
}

const messages = defineMessages({
  title: {
    id: messageIds.pages.checkout.errors.default.title,
    description: 'Title of the error message on a request for quote page',
    defaultMessage:
      'Something unexpected happened! Please contact customer support.'
  },
  chatWithUs: {
    id: messageIds.pages.checkout.errors.chatWithUs,
    description: 'Link text for the chat with us',
    defaultMessage: 'Chat with us'
  },
  mailTo: {
    id: messageIds.pages.checkout.errors.mailTo,
    description: 'Mail to action',
    defaultMessage: 'mailto:webteam@spray.com?subject=Request for quote failed'
  },
  send: {
    id: messageIds.pages.checkout.errors.send,
    description: 'Link text for the email button',
    defaultMessage: 'Send us your feedback'
  },
  description: {
    id: messageIds.pages.checkout.errors.subText,
    description: 'Description of the error message on a request for quote page',
    defaultMessage:
      'Feel free to contact customer support if you have any questions. A customer service representative is standing by at 1-800-9577729.'
  }
});

export const RequestForQuoteErrorMessage: React.FC = () => {
  const { palette, spacing } = useTheme();
  const { formatMessage } = useIntl();
  const styles: RequestForQuoteErrorMessageStyles = {
    title: {
      root: {
        fontWeight: FontWeights.semibold
      }
    },
    actionButton: {
      root: { height: 28, padding: 0, '& a': { color: palette.black } },
      icon: { marginLeft: 0 },
      label: { margin: 0 }
    },
    actions: {
      root: {
        borderTop: `1px solid ${palette.neutralLight}`
      }
    }
  };

  return (
    <PortalMessageBar
      actions={
        <Stack
          styles={styles.actions}
          horizontalAlign="space-between"
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: spacing.m }}
        >
          <ActionButton
            iconProps={{ iconName: 'ChatInviteFriend' }}
            text={formatMessage(messages.chatWithUs)}
            styles={styles.actionButton}
            onRenderText={props => (
              <div
                dangerouslySetInnerHTML={{
                  __html: `<a onclick="SnapEngage.startLink()">${props?.text}</>`
                }}
              ></div>
            )}
          />
          <ActionButton
            iconProps={{ iconName: 'EditMail' }}
            styles={styles.actionButton}
            href={formatMessage(messages.chatWithUs)}
          >
            {formatMessage(messages.send)}
          </ActionButton>
        </Stack>
      }
      messageBarType={MessageBarType.error}
    >
      <Stack tokens={{ childrenGap: spacing.s1 }}>
        <Stack.Item>
          <Text styles={styles.title} variant="mediumPlus">
            {formatMessage(messages.title)}
          </Text>
        </Stack.Item>
        <Stack.Item>
          <Text>{formatMessage(messages.description)}</Text>
        </Stack.Item>
      </Stack>
    </PortalMessageBar>
  );
};
