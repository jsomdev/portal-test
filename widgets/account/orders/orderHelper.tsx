import { IntlShape, defineMessages } from 'react-intl';

import { IPalette } from '@fluentui/react';
import { CartItem } from '@providers/cart/cartContext';
import { STATIC_IMAGES } from '@public/media/images';
import { messageIds } from '@services/i18n';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import {
  Order,
  OrderLine,
  OrderStatus,
  Product,
  ShippingMethod
} from '@services/portal-api';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';
import { ReactQueryStatus } from '@services/react-query/types';

import { mapAddressToAddressViewModel } from '../shared/accountAddress.helper';
import {
  OrderCardViewModel,
  OrderLineViewModel,
  OrderViewModel
} from './orders.types';

const messages = defineMessages({
  orderStatusNew: {
    id: messageIds.data.orders.status.new,
    description: 'new order status',
    defaultMessage: 'New'
  },
  orderStatusCanceled: {
    id: messageIds.data.orders.status.canceled,
    description: 'canceled order status',
    defaultMessage: 'Canceled'
  },
  orderStatusInProcess: {
    id: messageIds.data.orders.status.inProcess,
    description: 'in process order status',
    defaultMessage: 'In process'
  },
  orderStatusShipped: {
    id: messageIds.data.orders.status.shipped,
    description: 'shipped order status',
    defaultMessage: 'Shipped'
  },
  creditCard: {
    id: messageIds.data.payments.creditCard,
    description: 'Credit card payment string',
    defaultMessage: 'Creditcard'
  },
  purchaseOrder: {
    id: messageIds.data.payments.purchaseOrder,
    description: 'Purchase order payment string',
    defaultMessage: 'Purchase order'
  },
  freeShipping: {
    id: messageIds.data.shippingMethods.freeShipping,
    description: 'Free shipping label',
    defaultMessage: 'Free shipping Default'
  },
  flatRate: {
    id: messageIds.data.shippingMethods.flatRate,
    description: 'Flat rate label',
    defaultMessage: 'Flat rate Default'
  },
  upsGround: {
    id: messageIds.data.shippingMethods.upsGround,
    description: 'UPS Ground label',
    defaultMessage: 'UPS Ground Default'
  },
  upsSecondDayAir: {
    id: messageIds.data.shippingMethods.upsSecondDayAir,
    description: 'UPS second day air label',
    defaultMessage: 'UPS second day air Default'
  },
  upsNextDayAir: {
    id: messageIds.data.shippingMethods.upsNextDayAir,
    description: 'UPS Next day air label',
    defaultMessage: 'UPS Next day air Default'
  },
  upsNextDayAirSaver: {
    id: messageIds.data.shippingMethods.upsNextDayAirSaver,
    description: 'UPS next day air saver label',
    defaultMessage: 'UPS next day air saver Default'
  },
  upsStandard: {
    id: messageIds.data.shippingMethods.upsStandard,
    description: 'UPS standard label',
    defaultMessage: 'UPS standard Default'
  },
  upsWorldwideExpedited: {
    id: messageIds.data.shippingMethods.upsWorldwideExpedited,
    description: 'UPS worldwide expedited label',
    defaultMessage: 'UPS worldwide expedited Default'
  }
});

interface ValidationData {
  validProducts: Pick<Product, 'number' | 'id' | 'name'>[];
  validProductNumbers: string[];
  invalidProductNumbers: string[];
}

/**
 * Maps an order line to an order line view model
 * @param orderLine A line from an order
 * @param currency The currency of the order
 * @param intl The intl object containing the formatNumber function
 * @returns View model props for an order line
 */
export function mapOrderLineToOrderLineViewModel(
  orderLine: OrderLine,
  currency: string,
  intl: IntlShape
): OrderLineViewModel {
  const productFormatter = new ProductFormatter(orderLine.product || undefined);

  const unitAmount: string | undefined =
    (orderLine?.unitAmount &&
      intl.formatNumber(orderLine?.unitAmount, {
        currency,
        currencyDisplay: 'narrowSymbol',
        style: 'currency'
      })) ||
    undefined;

  const totalAmount: string | undefined =
    (orderLine?.totalAmount &&
      intl.formatNumber(orderLine?.totalAmount, {
        currency,
        currencyDisplay: 'narrowSymbol',
        style: 'currency'
      })) ||
    undefined;

  return {
    imageAlt: productFormatter.formatImageCaption(),
    imageUrl:
      orderLine?.product?.image?.url || STATIC_IMAGES.cart.defaultItem.src,
    name: productFormatter.formatName(),
    number: orderLine.productNumber || undefined,
    quantity: orderLine.quantity ? `x${orderLine.quantity}` : undefined,
    totalAmount,
    unitAmount,
    url: productFormatter.formatUrl()
  };
}

/**
 * Maps order lines BaseCartItems
 * @param orderLines lines from an order from the portal api
 * @returns An array of BaseCartItems
 */
export function mapOrderLinesToCartItems(
  orderLines: OrderLine[] | undefined
): CartItem[] {
  const cartItems: CartItem[] =
    orderLines?.map((orderLine): CartItem => {
      return {
        ...orderLine.product,
        productName: orderLine.productName || undefined,
        productNumber: orderLine.productNumber || null,
        productId: orderLine.productId,
        quantity: orderLine.quantity || 0
      };
    }) || [];
  return cartItems;
}

/**
 * Get the the readable, translated payment method from the payment method type linked to an account
 * @param intl The intl object containing the formatMessage function
 * @param paymentMethod The payment method type of the order
 * @returns The payment method as a readable string
 */
export function getPaymentMethodText(
  intl: IntlShape,
  paymentMethod: PaymentMethod | null | undefined
): string {
  if (paymentMethod === PaymentMethod.PURCHASE_ORDER) {
    return intl.formatMessage(messages.purchaseOrder);
  }
  return intl.formatMessage(messages.creditCard);
}

/**
 * Format a credit card number to hide all but the last 4 digits
 * @param cardNumber The credit card number linked to an order
 * @returns The last 4 digits of the credit card number prefixed by placeholder characters
 */
export const formatCreditCardNumber = (
  cardNumber: string | undefined | null
): string | undefined => {
  if (!cardNumber) {
    return undefined;
  }
  return `${cardNumber
    .substring(0, cardNumber.length - 4)
    .replace(/[0-9]/g, '●')
    .replace(/X/g, '●')}${cardNumber.substring(cardNumber.length - 4)}`;
};

/**
 * Format a credit card issuer
 * @param issuer The card issuer of the credit card linked to an order
 * @returns The card issuer as a readable string
 */
export const formatCreditCardIssuer = (
  issuer: string | null | undefined
): string | undefined => {
  if (!issuer) {
    return undefined;
  }
  return issuer.replace(/^\w/, c => c.toUpperCase());
};

/**
 * Get the color of the status text for an order
 * @param status The status of the order (enum type)
 * @param palette The fluentUI palette object containing the color values
 * @returns A color string usable in a styles object linked to the status of the order
 */
export function getOrderStatusColor(
  status: OrderStatus | undefined,
  palette: IPalette
): string {
  switch (status) {
    case OrderStatus.NEW:
      return palette.themePrimary;
    case OrderStatus.IN_PROCESS:
      return palette.neutralDark;
    case OrderStatus.SHIPPED:
      return palette.green;
    case OrderStatus.CANCELLED:
      return palette.red;
    default:
      return palette.neutralDark;
  }
}

/**
 * Get the translated text of the status for an order
 * @param status The status of the order (enum type)
 * @param intl The intl object containing the formatMessage function
 * @returns The status of the order as a readable, translated string
 */
export function getOrderStatusText(
  status: OrderStatus | undefined,
  intl: IntlShape
): string {
  switch (status) {
    case OrderStatus.NEW:
      return intl.formatMessage(messages.orderStatusNew);
    case OrderStatus.IN_PROCESS:
      return intl.formatMessage(messages.orderStatusInProcess);
    case OrderStatus.SHIPPED:
      return intl.formatMessage(messages.orderStatusShipped);
    case OrderStatus.CANCELLED:
      return intl.formatMessage(messages.orderStatusCanceled);
    default:
      return '';
  }
}

/**
 * Get the translated text of the shipping method chosen for an order
 * @param method The shipping method type of the order
 * @param intl The intl object containing the formatMessage function
 * @returns The shipping method as a readable string
 */
export function getShippingMethodText(
  method: ShippingMethod | null | undefined,
  intl: IntlShape
): string | undefined {
  switch (method) {
    case ShippingMethod.FREE_SHIPPING:
      return intl.formatMessage(messages.freeShipping);
    case ShippingMethod.FLAT_RATE:
      return intl.formatMessage(messages.flatRate);
    case ShippingMethod.UPS_GROUND:
      return intl.formatMessage(messages.upsGround);
    case ShippingMethod.UPS_SECOND_DAY_AIR:
      return intl.formatMessage(messages.upsSecondDayAir);
    case ShippingMethod.UPS_NEXT_DAY_AIR:
      return intl.formatMessage(messages.upsNextDayAir);
    case ShippingMethod.UPS_NEXT_DAY_AIR_SAVER:
      return intl.formatMessage(messages.upsNextDayAirSaver);
    case ShippingMethod.UPS_STANDARD:
      return intl.formatMessage(messages.upsStandard);
    case ShippingMethod.UPS_WORLDWIDE_EXPEDITED:
      return intl.formatMessage(messages.upsWorldwideExpedited);
    default:
      return undefined;
  }
}

/**
 * A helper function to format the currency amounts of an order
 * @param value The value to be formatted
 * @param currency The currency of value
 * @param intl The intl object containing the formatNumber function
 * @returns The value formatted as a given currency
 */
function formatCurrencyValue(
  value: number | undefined,
  currency: string,
  intl: IntlShape
): string | undefined {
  if (!value) {
    return undefined;
  }
  return intl.formatNumber(value, {
    currency,
    currencyDisplay: 'narrowSymbol',
    style: 'currency'
  });
}

/**
 * A mapping function used to map and Order to an OrderViewModel
 * @param order The order to be mapped to an OrderViewModel
 * @param intl The intl object containing the formatMessage and formatNumber functions
 * @param palette The fluentUI palette object containing the color values
 * @param validationData The data for the order lines used for reorder validation
 * @param validationStatus The status of the validation data used for reorder calculation
 * @returns An OrderViewModel object containing the data needed to render an order in a component
 */
export function mapOrderToOrderViewModel(
  order: Order | undefined,
  intl: IntlShape,
  palette: IPalette,
  validationData?: ValidationData | undefined,
  validationStatus?: ReactQueryStatus
): OrderViewModel {
  // Currency code is from the order, but if it is not present, USD is used as fallback
  const currencyCode: string = order?.currencyCode || 'USD';

  const date: string | undefined =
    (order?.submittedOn &&
      intl.formatDate(new Date(order?.submittedOn), { dateStyle: 'full' })) ||
    undefined;

  function canReorder(): boolean {
    if (
      validationData?.invalidProductNumbers.length === 0 &&
      validationData.validProductNumbers.length > 0 &&
      validationStatus === 'success'
    ) {
      return true;
    }
    return false;
  }

  function getSubTotalPrice(): string | undefined {
    return (
      (order?.currencyCode &&
        order.lines?.length &&
        intl.formatNumber(
          order.lines.reduce((previousValue, orderLine) => {
            return previousValue + (orderLine?.totalAmount || 0);
          }, 0),
          {
            currency: order.currencyCode,
            currencyDisplay: 'narrowSymbol',
            style: 'currency'
          }
        )) ||
      undefined
    );
  }

  function getOrderLines(): OrderLineViewModel[] {
    if (!order?.lines?.length) {
      return [];
    }
    return order?.lines?.map(orderLine => {
      return mapOrderLineToOrderLineViewModel(
        orderLine,
        order.currencyCode || 'USD',
        intl
      );
    });
  }

  return {
    billingAddress:
      (order?.billingAddress &&
        mapAddressToAddressViewModel(order.billingAddress)) ||
      undefined,
    billingContactInfo: order?.billingContactInfo || undefined,
    canReorder: canReorder(),
    comment: order?.comment || undefined,
    creditCardNumber: formatCreditCardNumber(
      order?.transactions?.[0]?.card?.number
    ),
    date: date,
    emailAddresses: order?.emailAddresses?.[0] || undefined,
    lines: getOrderLines(),
    number: order?.number || undefined,
    paymentMethodType: order?.paymentMethod || undefined,
    paymentMethodReadable: getPaymentMethodText(intl, order?.paymentMethod),
    shippingAddress:
      (order?.shippingAddress &&
        mapAddressToAddressViewModel(order.shippingAddress)) ||
      undefined,
    shippingAmount: formatCurrencyValue(
      order?.shippingCostAmount,
      currencyCode,
      intl
    ),
    shippingContactInfo: order?.shippingContactInfo || undefined,
    shippingMethod: getShippingMethodText(order?.shippingMethod, intl),
    status: {
      text: getOrderStatusText(order?.status, intl),
      color: getOrderStatusColor(order?.status, palette)
    },
    subTotal: getSubTotalPrice(),
    taxAmount: formatCurrencyValue(order?.taxAmount, currencyCode, intl),
    totalAmount: formatCurrencyValue(order?.totalAmount, currencyCode, intl),
    transactionIssuer: formatCreditCardIssuer(
      order?.transactions?.[0]?.card?.issuer
    )
  };
}

// TODO implement mapOrderToOrderCardViewModel in orderCard.tsx

/**
 * A mapping function used to map and Order to an OrderCardViewModel
 * @param order The order to be mapped to an OrderCardViewModel
 * @param intl The intl object containing the formatMessage and formatNumber functions
 * @param palette The fluentUI palette object containing the color values
 * @returns An OrderCardViewModel object containing the data needed to render an order in a component
 */
export function mapOrderToOrderCardViewModel(
  order: Order | undefined,
  intl: IntlShape,
  palette: IPalette
): OrderCardViewModel {
  // Currency code is from the order, but if it is not present, USD is used as fallback
  const currencyCode: string = order?.currencyCode || 'USD';

  const date: string | undefined =
    (order?.submittedOn &&
      intl.formatDate(new Date(order?.submittedOn), { dateStyle: 'full' })) ||
    undefined;

  function getOrderLines(): OrderLineViewModel[] {
    if (!order?.lines?.length) {
      return [];
    }
    return order?.lines?.map(orderLine => {
      return mapOrderLineToOrderLineViewModel(
        orderLine,
        order.currencyCode || 'USD',
        intl
      );
    });
  }
  return {
    date,
    lines: getOrderLines(),
    number: order?.number || undefined,
    status: {
      text: getOrderStatusText(order?.status, intl),
      color: getOrderStatusColor(order?.status, palette)
    },
    totalAmount: formatCurrencyValue(order?.totalAmount, currencyCode, intl)
  };
}
