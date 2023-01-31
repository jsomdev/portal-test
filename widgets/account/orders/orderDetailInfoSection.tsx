import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  ActionButton,
  FontWeights,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';

import { AccountAddress } from '../shared/accountAddress';
import { OrderViewModel } from './orders.types';

const messages = defineMessages({
  detailsHeader: {
    id: messageIds.pages.account.orders.detailsHeader,
    description: 'Detail & info header text',
    defaultMessage: 'Address and payment information'
  },
  overviewHeader: {
    id: messageIds.pages.account.orders.overviewHeader,
    description: 'Overview header text',
    defaultMessage: 'Overview'
  },
  subTotal: {
    id: messageIds.pages.account.orders.subTotal,
    description: 'Subtotal header text',
    defaultMessage: 'Subtotal'
  },
  shippingCosts: {
    id: messageIds.pages.account.orders.shippingCosts,
    description: 'Shipping costs header text',
    defaultMessage: 'Shipping costs'
  },
  totalHeader: {
    id: messageIds.pages.account.orders.totalHeader,
    description: 'Total price header text',
    defaultMessage: 'Total price'
  },
  taxHeader: {
    id: messageIds.pages.account.orders.taxHeader,
    description: 'Tax price header text',
    defaultMessage: 'Tax price'
  },
  commentsHeader: {
    id: messageIds.pages.account.orders.commentsHeader,
    description: 'order card comments header',
    defaultMessage: 'Comments'
  },
  paymentMethodHeader: {
    id: messageIds.pages.account.orders.paymentMethodHeader,
    description: 'Payment method header text',
    defaultMessage: 'Payment method'
  },
  shippingMethodHeader: {
    id: messageIds.pages.account.orders.shippingMethodHeader,
    description: 'Shipping method header text',
    defaultMessage: 'Shipping method'
  },
  deliveryAddress: {
    id: messageIds.pages.account.orders.shippingAddressHeader,
    description: 'Header for shipping address',
    defaultMessage: 'Shipping address'
  },
  billingAddress: {
    id: messageIds.pages.account.orders.billingAddressHeader,
    description: 'Header for billing address',
    defaultMessage: 'Billing address'
  },
  reorderAll: {
    id: messageIds.pages.account.orders.reorderAll,
    description: 'Reorder all products button',
    defaultMessage: 'Reorder'
  }
});

interface OrderDetailInfoSectionStyles {
  subSectionContainer: IStackStyles;
  subSectionTitle: ITextStyles;
  sectionTitle: ITextStyles;
  overviewContainer: IStackStyles;
  lightText: ITextStyles;
  boldText: ITextStyles;
}

interface OrderDetailInfoSectionProps {
  order: OrderViewModel;
  reorder: (() => void) | undefined;
}

export const OrderDetailInfoSection: React.FC<OrderDetailInfoSectionProps> = ({
  order,
  reorder
}) => {
  const { spacing, semanticColors, palette, effects, fonts } = useTheme();
  const { formatMessage } = useIntl();

  const styles: OrderDetailInfoSectionStyles = {
    sectionTitle: {
      root: {
        ...fonts.large
      }
    },
    subSectionContainer: {
      root: {
        flex: `1 1 calc(33% - ${32}px)`,
        minWidth: 310,
        border: `1px solid ${semanticColors.variantBorder}`,
        padding: spacing.m,
        borderRadius: effects.roundedCorner4
      }
    },
    subSectionTitle: {
      root: {
        fontWeight: FontWeights.semibold,
        ...fonts.mediumPlus
      }
    },
    overviewContainer: {
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        padding: spacing.m,
        borderRadius: effects.roundedCorner4
      }
    },
    lightText: {
      root: {
        color: palette.neutralSecondary
      }
    },
    boldText: {
      root: {
        fontWeight: FontWeights.semibold
      }
    }
  };

  return (
    <Stack tokens={{ childrenGap: spacing.l2 }}>
      <Stack tokens={{ padding: `${spacing.l1} 0 0` }}>
        <Text styles={styles.sectionTitle} as="h2">
          {formatMessage(messages.detailsHeader)}
        </Text>
      </Stack>
      <Stack horizontal wrap tokens={{ childrenGap: spacing.l2 }}>
        {/* Shipping Address */}
        <Stack
          styles={styles.subSectionContainer}
          tokens={{ childrenGap: spacing.m }}
        >
          <Stack>
            <Text styles={styles.subSectionTitle}>
              {formatMessage(messages.deliveryAddress)}
            </Text>
          </Stack>
          <Stack tokens={{ childrenGap: spacing.m }}>
            {order.shippingContactInfo && (
              <Text>{`${order.shippingContactInfo?.firstName} ${order.shippingContactInfo?.lastName}`}</Text>
            )}
            {order.shippingAddress && (
              <AccountAddress
                address={order.shippingAddress}
                contentSpacing={spacing.s2}
              />
            )}
            {order.shippingContactInfo?.phoneNumber && (
              <Text>{order.shippingContactInfo?.phoneNumber}</Text>
            )}
            {order.emailAddresses && <Text>{order.emailAddresses}</Text>}
          </Stack>
        </Stack>
        {/* Billing Address */}
        <Stack
          styles={styles.subSectionContainer}
          tokens={{ childrenGap: spacing.m }}
        >
          <Stack>
            <Text styles={styles.subSectionTitle}>
              {formatMessage(messages.billingAddress)}
            </Text>
          </Stack>
          <Stack tokens={{ childrenGap: spacing.m }}>
            {order.billingContactInfo && (
              <Text>{`${order.billingContactInfo?.firstName} ${order.billingContactInfo?.lastName}`}</Text>
            )}
            {order.billingAddress && (
              <AccountAddress
                contentSpacing={spacing.s2}
                address={order.billingAddress}
              />
            )}
            {order.billingContactInfo?.phoneNumber && (
              <Text>{order.billingContactInfo?.phoneNumber}</Text>
            )}
            {order.emailAddresses && <Text>{order.emailAddresses}</Text>}
          </Stack>
        </Stack>
        {/* Shipping Method */}
        {order.shippingMethod && (
          <Stack
            styles={styles.subSectionContainer}
            tokens={{ childrenGap: spacing.m }}
          >
            <Stack>
              <Text styles={styles.subSectionTitle}>
                {formatMessage(messages.shippingMethodHeader)}
              </Text>
            </Stack>
            <Stack>
              <Text>{order.shippingMethod}</Text>
            </Stack>
          </Stack>
        )}
        {/* Payment Method */}
        {order.paymentMethodType && (
          <Stack
            styles={styles.subSectionContainer}
            tokens={{ childrenGap: spacing.m }}
          >
            <Stack>
              <Text styles={styles.subSectionTitle}>
                {formatMessage(messages.paymentMethodHeader)}
              </Text>
            </Stack>
            {order.paymentMethodType === PaymentMethod.CREDIT_CARD && (
              <Stack tokens={{ childrenGap: spacing.s1 }}>
                <Text>{`${order.transactionIssuer} ${order.paymentMethodReadable}`}</Text>
                <Text>{order.creditCardNumber}</Text>
              </Stack>
            )}
            {order.paymentMethodType === PaymentMethod.PURCHASE_ORDER && (
              <Stack>
                <Text>{order.paymentMethodReadable}</Text>
              </Stack>
            )}
          </Stack>
        )}
        {/* Comments */}
        {order.comment && (
          <Stack
            styles={styles.subSectionContainer}
            tokens={{ childrenGap: spacing.m }}
          >
            <Stack>
              <Text styles={styles.subSectionTitle}>
                {formatMessage(messages.commentsHeader)}
              </Text>
            </Stack>
            <Stack>
              <Text>{order.comment}</Text>
            </Stack>
          </Stack>
        )}
        {/* Overview */}
        <Stack
          styles={styles.subSectionContainer}
          tokens={{ childrenGap: spacing.m }}
        >
          <Stack>
            <Text styles={styles.subSectionTitle}>
              {formatMessage(messages.overviewHeader)}
            </Text>
          </Stack>
          <Stack tokens={{ childrenGap: spacing.m }}>
            <Stack tokens={{ childrenGap: spacing.s1 }}>
              {order.subTotal && (
                <Stack horizontal horizontalAlign="space-between">
                  <Text styles={styles.lightText}>
                    {`${formatMessage(messages.subTotal)}:`}
                  </Text>
                  <Text styles={styles.lightText}>{order.subTotal}</Text>
                </Stack>
              )}

              {order.shippingAmount && (
                <Stack horizontal horizontalAlign="space-between">
                  <Text styles={styles.lightText}>{`${formatMessage(
                    messages.shippingCosts
                  )}:`}</Text>
                  <Text styles={styles.lightText}>{order.shippingAmount}</Text>
                </Stack>
              )}
              {order.taxAmount && (
                <Stack horizontal horizontalAlign="space-between">
                  <Text styles={styles.lightText}>{`${formatMessage(
                    messages.taxHeader
                  )}:`}</Text>
                  <Text styles={styles.lightText}>{order.taxAmount}</Text>
                </Stack>
              )}
            </Stack>
            {order.totalAmount && (
              <Stack horizontal horizontalAlign="space-between">
                <Text styles={styles.boldText}>{`${formatMessage(
                  messages.totalHeader
                )}`}</Text>
                <Text styles={styles.boldText}>{order.totalAmount}</Text>
              </Stack>
            )}
          </Stack>
          {reorder && (
            <ActionButton
              text={formatMessage(messages.reorderAll)}
              iconProps={{ iconName: 'chevronRight' }}
              onClick={reorder}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
