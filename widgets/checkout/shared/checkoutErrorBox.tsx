import React, { useMemo } from 'react';

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
import {
  CreateOrderError,
  CreateOrderErrorName
} from '@widgets/checkout/create-order/CreateOrderError';

interface CheckoutErrorBoxStyles {
  title: ITextStyles;
  actionButton: IButtonStyles;
  actions: IStackStyles;
  messageBarContainer: IStackStyles;
}

interface CheckoutErrorBoxProps {
  error: CreateOrderError | unknown;
}

interface CheckoutErrorBoxText {
  title: string;
  description: string;
  subText?: string;
}

const messages = defineMessages({
  chatWithUs: {
    id: messageIds.pages.checkout.errors.chatWithUs,
    defaultMessage: 'Chat with us'
  },
  mailTo: {
    id: messageIds.pages.checkout.errors.mailTo,
    defaultMessage:
      'mailto:webteam@spray.com?subject=I Could not find any results for ...'
  },
  send: {
    id: messageIds.pages.checkout.errors.send,
    defaultMessage: 'Send us your feedback'
  },
  default: {
    id: messageIds.pages.checkout.errors.default.title,
    defaultMessage:
      'Something unexpected happened! Please contact customer support.'
  },
  subText: {
    id: messageIds.pages.checkout.errors.subText,
    defaultMessage:
      'Feel free to contact customer support if you have any questions. A customer service representative is standing by at 1-800-9577729.'
  },
  cardDeclined: {
    id: messageIds.pages.checkout.errors.cardDeclined.title,
    defaultMessage: 'Your credit card was declined.'
  },
  cardInfoIncorrect: {
    id: messageIds.pages.checkout.errors.cardInfoIncorrect.title,
    defaultMessage: 'Your credit card information is incorrect.'
  },
  cartHasNoPricedItems: {
    id: messageIds.pages.checkout.errors.cartHasNoPricedItems.title,
    defaultMessage: 'Your cart has no items with available pricing.'
  },
  cartHasNoPricedItemsDescription: {
    id: messageIds.pages.checkout.errors.cartHasNoPricedItems.description,
    defaultMessage: 'Please refresh the page to load current prices.'
  },
  cartIsEmpty: {
    id: messageIds.pages.checkout.errors.cartIsEmpty.title,
    defaultMessage: 'Please refresh the page to reload your cart.'
  },
  cartIsEmptyDescription: {
    id: messageIds.pages.checkout.errors.cartIsEmpty.description,
    defaultMessage: 'Please refresh the page to reload your cart.'
  },
  contentTypeHeaderMissing: {
    id: messageIds.pages.checkout.errors.contentTypeHeaderMissing.title,
    defaultMessage: 'There was an unexpected error while placing your order.'
  },
  contentTypeHeaderMissingDescription: {
    id: messageIds.pages.checkout.errors.contentTypeHeaderMissing.description,
    defaultMessage: 'The content type header is missing.'
  },
  givenAmountAndCalculatedAmountDoNotMatch: {
    id: messageIds.pages.checkout.errors
      .givenAmountAndCalculatedAmountDoNotMatch.title,
    defaultMessage: 'A pricing discrepancy has occurred.'
  },
  givenAmountAndCalculatedAmountDoNotMatchDescription: {
    id: messageIds.pages.checkout.errors
      .givenAmountAndCalculatedAmountDoNotMatch.description,
    defaultMessage:
      'The price calculated by the cart does not match the expected amount.'
  },
  invalidPaymentMethod: {
    id: messageIds.pages.checkout.errors.invalidPaymentMethod.title,
    defaultMessage: 'The selected payment method is invalid for this account.'
  },
  invalidPaymentMethodDescription: {
    id: messageIds.pages.checkout.errors.invalidPaymentMethod.description,
    defaultMessage:
      'Orders with their payment method set to purchase order require a reference number.'
  },
  userDoesNotHaveAccount: {
    id: messageIds.pages.checkout.errors.userDoesNotHaveAccount.title,
    defaultMessage:
      'You are not currently logged in or your session has expired.'
  },
  userDoesNotHaveAccountDescription: {
    id: messageIds.pages.checkout.errors.userDoesNotHaveAccount.description,
    defaultMessage:
      'Please reload the page and log back in using your user account.'
  },
  todo: {
    id: messageIds.pages.checkout.errors.todo.title,
    defaultMessage: 'An unexpected error occurred.'
  },
  todoDescription: {
    id: messageIds.pages.checkout.errors.todo.description,
    defaultMessage:
      'Please check if your credit card information was entered correctly.'
  }
});

export const CheckoutErrorBox: React.FC<CheckoutErrorBoxProps> = ({
  error
}) => {
  const { palette, spacing } = useTheme();
  const { formatMessage } = useIntl();

  const styles: CheckoutErrorBoxStyles = {
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
    },
    messageBarContainer: {
      root: { marginTop: spacing.l2 }
    }
  };

  const { title, description, subText }: CheckoutErrorBoxText = useMemo(() => {
    if (error instanceof CreateOrderError) {
      switch (error.name as CreateOrderErrorName) {
        case CreateOrderErrorName.CardIsDeclined:
          return {
            title: formatMessage(messages.cardDeclined),
            description: error.message,
            subText: formatMessage(messages.subText)
          };
        case CreateOrderErrorName.CardNumberIsInvalid:
          return {
            title: formatMessage(messages.cardInfoIncorrect),
            description: error.message,
            subText: formatMessage(messages.subText)
          };
        case CreateOrderErrorName.CartHasNoPricedItems:
          return {
            title: formatMessage(messages.cartHasNoPricedItems),
            description: formatMessage(
              messages.cartHasNoPricedItemsDescription
            ),
            subText: formatMessage(messages.subText)
          };
        case CreateOrderErrorName.CartIsEmpty:
          return {
            title: formatMessage(messages.cartIsEmpty),
            description: formatMessage(messages.cartIsEmptyDescription),
            subText: formatMessage(messages.subText)
          };
        case CreateOrderErrorName.ContentTypeHeaderMissing:
          return {
            title: formatMessage(messages.contentTypeHeaderMissing),
            description: formatMessage(
              messages.contentTypeHeaderMissingDescription
            ),
            subText: formatMessage(messages.subText)
          };
        case CreateOrderErrorName.GivenAmountAndCalculatedAmountDoNotMatch:
          return {
            title: formatMessage(
              messages.givenAmountAndCalculatedAmountDoNotMatch
            ),
            description: formatMessage(
              messages.givenAmountAndCalculatedAmountDoNotMatchDescription
            ),
            subText: formatMessage(messages.subText)
          };
        case CreateOrderErrorName.InvalidPaymentMethod:
          return {
            title: formatMessage(messages.invalidPaymentMethod),
            description: formatMessage(
              messages.invalidPaymentMethodDescription
            ),
            subText: formatMessage(messages.subText)
          };
        case CreateOrderErrorName.UserDoesNotHaveAccount:
          return {
            title: formatMessage(messages.userDoesNotHaveAccount),
            description: formatMessage(
              messages.userDoesNotHaveAccountDescription
            ),
            subText: formatMessage(messages.subText)
          };
        case CreateOrderErrorName.TODO:
          return {
            title: formatMessage(messages.todo),
            description: formatMessage(messages.todoDescription),
            subText: formatMessage(messages.subText)
          };
      }
    }

    return {
      title: formatMessage(messages.default),
      description: formatMessage(messages.subText)
    };
  }, [error, formatMessage]);

  return (
    <Stack styles={styles.messageBarContainer}>
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
                  dangerouslySetInnerHTML={
                    {
                      __html: `<a onclick="SnapEngage.startLink()">${props?.text}</>`
                    } /*TODO handle chat function*/
                  }
                ></div>
              )}
            />
            <ActionButton
              iconProps={{ iconName: 'EditMail' }}
              styles={styles.actionButton}
              href={formatMessage(messages.mailTo)}
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
              {title}
            </Text>
          </Stack.Item>
          <Stack.Item>
            <Text>{description}</Text>
          </Stack.Item>
          {!!subText && (
            <Stack.Item>
              <Text>{subText}</Text>
            </Stack.Item>
          )}
        </Stack>
      </PortalMessageBar>
    </Stack>
  );
};
