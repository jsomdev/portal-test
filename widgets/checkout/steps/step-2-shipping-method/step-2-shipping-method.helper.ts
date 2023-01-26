import { defineMessages } from 'react-intl';
import { IntlShape } from 'react-intl/src/types';
import * as yup from 'yup';

import { messageIds } from '@services/i18n';
import { ShippingMethod } from '@services/portal-api';
import setYupLocalisation from '@utilities/yup/setYupLocalisation';
import { StepFields } from '@widgets/checkout/shared/types';
import { Step2FormData } from '@widgets/checkout/steps/step-2-shipping-method/step-2-shipping-method';

setYupLocalisation();
export const validation = yup.object({
  shippingMethod: yup
    .mixed<ShippingMethod | ''>()
    .oneOf([
      ShippingMethod.FreeShipping,
      ShippingMethod.FlatRate,
      ShippingMethod.UpsGround,
      ShippingMethod.UpsSecondDayAir,
      ShippingMethod.UpsNextDayAir,
      ShippingMethod.UpsNextDayAirSaver,
      ShippingMethod.UpsStandard,
      ShippingMethod.UpsWorldWideExpedited,
      ''
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
