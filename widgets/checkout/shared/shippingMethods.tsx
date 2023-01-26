import { IntlShape, defineMessages } from 'react-intl';

import { messageIds } from '@services/i18n';
import { ShippingMethod } from '@services/portal-api';

const messages = defineMessages({
  freeShipping: {
    id: messageIds.data.shippingMethods.freeShipping,
    defaultMessage: 'Free Shipping'
  },
  flatRate: {
    id: messageIds.data.shippingMethods.flatRate,
    defaultMessage: 'Flat Rate'
  },
  upsGround: {
    id: messageIds.data.shippingMethods.upsGround,
    defaultMessage: 'UPS Ground'
  },
  upsSecondDayAir: {
    id: messageIds.data.shippingMethods.upsSecondDayAir,
    defaultMessage: 'UPS 2nd Day Air'
  },
  upsNextDayAir: {
    id: messageIds.data.shippingMethods.upsNextDayAir,
    defaultMessage: 'UPS Next Day Air'
  },
  upsNextDayAirSaver: {
    id: messageIds.data.shippingMethods.upsNextDayAirSaver,
    defaultMessage: 'UPS Next Day Air Saver'
  },
  upsStandard: {
    id: messageIds.data.shippingMethods.upsStandard,
    defaultMessage: 'UPS Standard'
  },
  upsWorldwideExpedited: {
    id: messageIds.data.shippingMethods.upsWorldwideExpedited,
    defaultMessage: 'UPS Worldwide Expedited'
  }
});

export const formatShippingMethod = (
  shippingMethod: ShippingMethod,
  intl: IntlShape
): string => {
  switch (shippingMethod) {
    case ShippingMethod.FreeShipping:
      return intl.formatMessage(messages.freeShipping);
    case ShippingMethod.FlatRate:
      return intl.formatMessage(messages.flatRate);
    case ShippingMethod.UpsGround:
      return intl.formatMessage(messages.upsGround);
    case ShippingMethod.UpsSecondDayAir:
      return intl.formatMessage(messages.upsSecondDayAir);
    case ShippingMethod.UpsNextDayAir:
      return intl.formatMessage(messages.upsNextDayAir);
    case ShippingMethod.UpsNextDayAirSaver:
      return intl.formatMessage(messages.upsNextDayAirSaver);
    case ShippingMethod.UpsStandard:
      return intl.formatMessage(messages.upsStandard);
    case ShippingMethod.UpsWorldWideExpedited:
      return intl.formatMessage(messages.upsWorldwideExpedited);
    default:
      return shippingMethod;
  }
};
