import { defineMessages } from 'react-intl';
import { IntlShape } from 'react-intl/src/types';
import * as yup from 'yup';

import { messageIds } from '@services/i18n';
import { StepFields } from '@widgets/checkout-new/shared/types';
import { Step2FormData } from '@widgets/checkout-new/steps/step-2-shipping-method/step-2-shipping-method';

export type ShippingMethod =
  | ''
  | 'FreeShipping'
  | 'FlatRate'
  | 'UpsGround'
  | 'UpsSecondDayAir'
  | 'UpsNextDayAir'
  | 'UpsNextDayAirSaver'
  | 'UpsStandard'
  | 'UpsWorldwideExpedited';

export const validation = yup.object({
  shippingMethod: yup
    .mixed<ShippingMethod>()
    .oneOf([
      'FreeShipping',
      'FlatRate',
      'UpsGround',
      'UpsSecondDayAir',
      'UpsNextDayAir',
      'UpsNextDayAirSaver',
      'UpsStandard',
      'UpsWorldwideExpedited'
    ])
    .required()
});

export const messages = defineMessages({
  shippingMethod: {
    id: messageIds.pages.checkout.shippingMethods.shippingMethodLabel,
    defaultMessage: 'Email'
  }
});

export const getFields = (intl: IntlShape): StepFields<Step2FormData> => {
  const { formatMessage } = intl;
  return {
    shippingMethod: {
      label: formatMessage(messages.shippingMethod),
      placeholder: formatMessage(messages.shippingMethod),
      name: 'shippingMethod'
    }
  };
};
