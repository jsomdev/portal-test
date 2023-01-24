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
      return shippingMethod;
  }
};
