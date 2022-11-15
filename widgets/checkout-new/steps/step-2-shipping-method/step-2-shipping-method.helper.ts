import { defineMessages } from 'react-intl';
import * as yup from 'yup';

import { messageIds } from '@services/i18n';
import { StepFields } from '@widgets/checkout-new/checkout.types';
import { FormatMessage } from '@widgets/checkout-new/shared/types';
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

export const getFields = (
  formatMessage: FormatMessage
): StepFields<Step2FormData> => {
  return {
    shippingMethod: {
      label: formatMessage(messages.shippingMethod),
      placeholder: formatMessage(messages.shippingMethod),
      name: 'shippingMethod'
    }
  };
};
