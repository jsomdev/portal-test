import React from 'react';

import { defineMessages, useIntl } from 'react-intl';
import { useQueryClient } from 'react-query';

import {
  IMessageBarStyles,
  IStackItemStyles,
  MessageBar,
  MessageBarButton,
  MessageBarType,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { QUERYKEYS } from '@services/react-query/constants';
import { useCheckout } from '@widgets/checkout/checkoutProvider/checkoutProvider';

const messages = defineMessages({
  vatError: {
    id: messageIds.pages.checkout.formErrors.vatError,
    defaultMessage: 'Error loading tax'
  },
  noShippingOptions: {
    id: messageIds.pages.checkout.formErrors.noShippingOptions,
    defaultMessage:
      'No shipping options found. Please check if your shipping address is entered correctly.'
  },
  retryButton: {
    id: messageIds.pages.checkout.formErrors.retryButton,
    defaultMessage: 'Retry'
  },
  editAddress: {
    id: messageIds.pages.checkout.formErrors.editAddress,
    defaultMessage: 'Edit'
  }
});

export interface CheckoutFormErrorBoxStyles {
  messageBarWrapper: IStackItemStyles;
  messageBar: IMessageBarStyles;
}

export const CheckoutFormErrorBox: React.FC = () => {
  const {
    orderTaxAmount,
    orderTaxAmountStatus,
    shippingCostData,
    shippingCostDataStatus,
    shippingAddress,
    selectedShippingOption,
    stepper,
    steps
  } = useCheckout();
  const { spacing } = useTheme();
  const queryClient = useQueryClient();
  const { formatMessage } = useIntl();

  const styles: CheckoutFormErrorBoxStyles = {
    messageBarWrapper: {
      root: {
        width: '100%'
      }
    },
    messageBar: {
      icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      text: {
        width: '100%',
        display: 'block'
      }
    }
  };

  return (
    <Stack tokens={{ childrenGap: spacing.m }}>
      {/* When there is an error submitting the form */}
      {(orderTaxAmountStatus === 'success' && orderTaxAmount === undefined) ||
      orderTaxAmountStatus === 'error' ? (
        <Stack.Item styles={styles.messageBarWrapper}>
          <MessageBar
            styles={styles.messageBar}
            messageBarType={MessageBarType.error}
          >
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="center"
              tokens={{ childrenGap: spacing.m }}
            >
              <Stack.Item>
                <Text>{formatMessage(messages.vatError)}</Text>
              </Stack.Item>
              <Stack.Item>
                <MessageBarButton
                  onClick={() => {
                    queryClient.refetchQueries([
                      QUERYKEYS.checkoutOrderTaxAmount,
                      selectedShippingOption?.shippingMethod,
                      shippingAddress
                    ]);
                  }}
                >
                  {formatMessage(messages.retryButton)}
                </MessageBarButton>
              </Stack.Item>
            </Stack>
          </MessageBar>
        </Stack.Item>
      ) : null}
      {(shippingCostData?.length === 0 &&
        shippingCostDataStatus === 'success') ||
      shippingCostDataStatus === 'error' ? (
        <Stack.Item styles={styles.messageBarWrapper}>
          <MessageBar
            styles={styles.messageBar}
            messageBarType={MessageBarType.error}
          >
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="center"
              tokens={{ childrenGap: spacing.m }}
            >
              <Stack.Item>
                <Text>{formatMessage(messages.noShippingOptions)}</Text>
              </Stack.Item>
              <Stack.Item>
                <MessageBarButton
                  onClick={() => {
                    if (steps) {
                      stepper.navigateToStep(steps.details.index);
                    }
                  }}
                >
                  {formatMessage(messages.editAddress)}
                </MessageBarButton>
              </Stack.Item>
            </Stack>
          </MessageBar>
        </Stack.Item>
      ) : null}
    </Stack>
  );
};
