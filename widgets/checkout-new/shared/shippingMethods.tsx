import { IntlShape } from 'react-intl';

import { ShippingMethod } from '@services/portal-api';

//TODO i18n
export const formatShippingMethod = (
  shippingMethod: ShippingMethod,
  intl: IntlShape
): string => {
  switch (shippingMethod) {
    case ShippingMethod.FREE_SHIPPING:
      return 'Free Shipping';
    case ShippingMethod.FLAT_RATE:
      return 'Flat Rate';
    case ShippingMethod.UPS_GROUND:
      return 'UPS Ground';
    case ShippingMethod.UPS_SECOND_DAY_AIR:
      return 'UPS Second Day Air';
    case ShippingMethod.UPS_NEXT_DAY_AIR:
      return 'UPS Next Day Air';
    case ShippingMethod.UPS_NEXT_DAY_AIR_SAVER:
      return 'UPS Next Day Air Saver';
    case ShippingMethod.UPS_STANDARD:
      return 'UPS Standard';
    case ShippingMethod.UPS_WORLDWIDE_EXPEDITED:
      return 'UPS Worldwide Expedited';
    default:
      return '';
  }
};
