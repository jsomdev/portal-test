import { useMemo } from 'react';

import {
  ActionButton,
  FontWeights,
  MessageBar,
  MessageBarType,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import {
  CreateOrderError,
  CreateOrderErrorName
} from '@widgets/checkout-old/create-order/CreateOrderError';

import {
  CheckoutErrorBoxProps,
  CheckoutErrorBoxStyles,
  CheckoutErrorBoxText
} from './checkoutErrorBox.types';

const messages = {
  chatWithUs: 'Chat with us',
  mailTo:
    'mailto:webteam@spray.com?subject=I Could not find any results for ...',
  send: 'Send us your feedback'
};

const errorTitleMessages = {
  default: 'Something unexpected happened! Please contact customer support.',
  cardDeclined: 'Your credit card was declined.',
  cardInfoIncorrect: 'Your credit card information is incorrect.',
  cartHasNoPricedItems: 'Your cart has no items with available pricing.',
  cartIsEmpty: 'Your cart is empty.',
  contentTypeHeaderMissing:
    'There was an unexpected error while placing your order.',
  givenAmountAndCalculatedAmountDoNotMatch:
    'A pricing discrepancy has occurred.',
  invalidPaymentMethod:
    'The selected payment method is invalid for this account.',
  userDoesNotHaveAccount:
    'You are not currently logged in or your session has expired.',
  todo: 'An unexpected error occurred.'
};

const errorDescriptionMessages = {
  default:
    'Feel free to contact customer support if you have any questions. A customer service representative is standing by at 1-800-9577729.',
  cartHasNoPricedItems: 'Please refresh the page to load current prices.',
  cartIsEmpty: 'Please refresh the page to reload your cart.',
  contentTypeHeaderMissing: 'The content type header is missing.',
  givenAmountAndCalculatedAmountDoNotMatch:
    'The price calculated by the cart does not match the expected amount.',
  invalidPaymentMethod:
    'Orders with their payment method set to purchase order require a reference number.',
  userDoesNotHaveAccount:
    'Please reload the page and log back in using your user account.',
  todo: 'Please check if your credit card information was entered correctly.'
};

export const CheckoutErrorBox: React.FC<CheckoutErrorBoxProps> = ({
  error
}) => {
  const { palette, spacing } = useTheme();

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
    messageBar: {
      root: { marginTop: spacing.l2 }
    }
  };

  const { title, description, subText }: CheckoutErrorBoxText = useMemo(() => {
    if (error instanceof CreateOrderError) {
      switch (error.name as CreateOrderErrorName) {
        case CreateOrderErrorName.CardIsDeclined:
          return {
            title: errorTitleMessages.cardDeclined,
            description: error.message,
            subText: errorDescriptionMessages.default
          };
        case CreateOrderErrorName.CardNumberIsInvalid:
          return {
            title: errorTitleMessages.cardInfoIncorrect,
            description: error.message,
            subText: errorDescriptionMessages.default
          };
        case CreateOrderErrorName.CartHasNoPricedItems:
          return {
            title: errorTitleMessages.cartHasNoPricedItems,
            description: errorDescriptionMessages.cartHasNoPricedItems,
            subText: errorDescriptionMessages.default
          };
        case CreateOrderErrorName.CartIsEmpty:
          return {
            title: errorTitleMessages.cartIsEmpty,
            description: errorDescriptionMessages.cartIsEmpty,
            subText: errorDescriptionMessages.default
          };
        case CreateOrderErrorName.ContentTypeHeaderMissing:
          return {
            title: errorTitleMessages.contentTypeHeaderMissing,
            description: errorDescriptionMessages.contentTypeHeaderMissing,
            subText: errorDescriptionMessages.default
          };
        case CreateOrderErrorName.GivenAmountAndCalculatedAmountDoNotMatch:
          return {
            title: errorTitleMessages.givenAmountAndCalculatedAmountDoNotMatch,
            description:
              errorDescriptionMessages.givenAmountAndCalculatedAmountDoNotMatch,
            subText: errorDescriptionMessages.default
          };
        case CreateOrderErrorName.InvalidPaymentMethod:
          return {
            title: errorTitleMessages.invalidPaymentMethod,
            description: errorDescriptionMessages.invalidPaymentMethod,
            subText: errorDescriptionMessages.default
          };
        case CreateOrderErrorName.UserDoesNotHaveAccount:
          return {
            title: errorTitleMessages.userDoesNotHaveAccount,
            description: errorDescriptionMessages.userDoesNotHaveAccount,
            subText: errorDescriptionMessages.default
          };
        case CreateOrderErrorName.TODO:
          return {
            title: errorTitleMessages.todo,
            description: errorDescriptionMessages.todo,
            subText: errorDescriptionMessages.default
          };
      }
    }

    return {
      title: errorTitleMessages.default,
      description: errorDescriptionMessages.default
    };
  }, [error]);

  return (
    <MessageBar
      styles={styles.messageBar}
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
            text={messages.chatWithUs}
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
            href={messages.mailTo}
          >
            {messages.send}
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
    </MessageBar>
  );
};
