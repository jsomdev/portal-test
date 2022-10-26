import React from 'react';

import { useQueryClient } from 'react-query';

import { useStepper } from '@components/stepper/stepperContext';
import {
  MessageBar,
  MessageBarButton,
  MessageBarType,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { QUERYKEYS } from '@services/react-query/constants';

import { CheckoutFormContext } from './checkoutFormContext';
import { CheckoutFormErrorBoxStyles } from './checkoutFormErrorBox.types';

const messages = {
  vatError: 'Error loading tax',
  noShippingOptions:
    'No shipping options found. Please check if your shipping address is entered correctly.',
  retryButton: 'Retry',
  editAddress: 'Edit'
};

export const CheckoutFormErrorBox: React.FC = () => {
  const {
    orderTaxAmount,
    orderTaxAmountStatus,
    shippingCostData,
    shippingCostDataStatus,
    shippingAddress,
    selectedShippingOption
  } = React.useContext(CheckoutFormContext);
  const { spacing } = useTheme();
  const { navigateToStep } = useStepper();
  const queryClient = useQueryClient();

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
                <Text>{messages.vatError}</Text>
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
                  {messages.retryButton}
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
                <Text>{messages.noShippingOptions}</Text>
              </Stack.Item>
              <Stack.Item>
                <MessageBarButton
                  onClick={() => {
                    navigateToStep(0);
                  }}
                >
                  {messages.editAddress}
                </MessageBarButton>
              </Stack.Item>
            </Stack>
          </MessageBar>
        </Stack.Item>
      ) : null}
    </Stack>
  );
};
