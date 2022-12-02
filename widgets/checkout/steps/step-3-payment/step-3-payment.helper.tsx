import valid from 'card-validator';
import { defineMessages } from 'react-intl';
import { IntlShape } from 'react-intl/src/types';
import * as yup from 'yup';

import { messageIds } from '@services/i18n';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';
import setYupLocalisation from '@utilities/yup/setYupLocalisation';
import { StepFields } from '@widgets/checkout/shared/types';
import { Step3FormData } from '@widgets/checkout/steps/step-3-payment/step-3-payment';

export type YesNo = 'yes' | 'no';

setYupLocalisation();

export const validation = yup.object({
  paymentMethod: yup.string(),
  shippingAddressAsBillingAddress: yup.mixed<YesNo>(),
  shippingContactAsBillingContact: yup.mixed<YesNo>(),
  creditCardNumber: yup.string().when('paymentMethod', {
    is: PaymentMethod.CREDIT_CARD,
    then: yup
      .string()
      .label(messageIds.pages.checkout.payment.fields.creditCardNumber)
      .required()
      .test(
        'creditCardNumber',
        {
          messageId:
            messageIds.pages.checkout.payment.fields
              .creditCardNumberInvalidFormatError
        },
        value => valid.number(value).isValid
      )
  }),
  creditCardName: yup
    .string()
    .label(messageIds.pages.checkout.payment.fields.creditCardName)
    .when('paymentMethod', {
      is: PaymentMethod.CREDIT_CARD,
      then: yup
        .string()
        .required()
        .test(
          'creditCardName',
          {
            messageId:
              messageIds.pages.checkout.payment.fields
                .creditCardNameInvalidFormatError
          },
          value => valid.cardholderName(value).isPotentiallyValid
        )
    }),
  creditCardExpiration: yup
    .string()
    .label(messageIds.pages.checkout.payment.fields.creditCardExpiration)
    .when('paymentMethod', {
      is: PaymentMethod.CREDIT_CARD,
      then: yup
        .string()
        .required()
        .test(
          'creditCardExpiration',
          {
            messageId:
              messageIds.pages.checkout.payment.fields
                .creditCardExpirationInvalidError
          },
          value => valid.expirationDate(value, 19).isValid
        )
    }),
  creditCardCVV: yup
    .string()
    .label(messageIds.pages.checkout.payment.fields.creditCardCVV)
    .when('paymentMethod', {
      is: PaymentMethod.CREDIT_CARD,
      then: yup
        .string()
        .matches(/^[0-9]*$/)
        .required()
        .min(3)
        .max(4)
    }),
  billingFirstName: yup
    .string()
    .label(messageIds.pages.checkout.payment.fields.billingFirstName)
    .max(40)
    .when('shippingContactAsBillingContact', {
      is: 'no',
      then: yup.string().required()
    }),
  billingLastName: yup
    .string()
    .label(messageIds.pages.checkout.payment.fields.billingLastName)
    .max(40)
    .when('shippingContactAsBillingContact', {
      is: 'no',
      then: yup.string().required()
    }),
  billingCompany: yup
    .string()
    .label(messageIds.pages.checkout.payment.fields.billingCompany)
    .when('shippingContactAsBillingContact', {
      is: 'no',
      then: yup.string().required()
    }),
  billingPhone: yup
    .string()
    .label(messageIds.pages.checkout.payment.fields.billingPhone)
    .matches(/^[+]*[(]?[0-9]{1,3}[)]?[-\s./0-9]*$/g)
    .when('shippingContactAsBillingContact', {
      is: 'no',
      then: yup.string().required()
    }),
  billingAddress: yup
    .string()
    .label(messageIds.pages.checkout.payment.fields.billingAddress)
    .when('shippingAddressAsBillingAddress', {
      is: 'no',
      then: yup.string().required()
    }),
  billingCity: yup
    .string()
    .label(messageIds.pages.checkout.payment.fields.billingCity)
    .when('shippingAddressAsBillingAddress', {
      is: 'no',
      then: yup.string().required()
    }),
  billingState: yup
    .string()
    .label(messageIds.pages.checkout.payment.fields.billingState)
    .when('shippingAddressAsBillingAddress', {
      is: 'no',
      then: yup.string().required()
    }),
  billingCountry: yup
    .string()
    .label(messageIds.pages.checkout.payment.fields.billingCountry)
    .when('shippingAddressAsBillingAddress', {
      is: 'no',
      then: yup.string().required()
    }),
  billingPostalCode: yup
    .string()
    .label(messageIds.pages.checkout.payment.fields.billingPostalCode)
    .when('shippingAddressAsBillingAddress', {
      is: 'no',
      then: yup.string().required()
    }),
  referenceNumber: yup.string()
});

const fieldMessages = messageIds.pages.checkout.payment.fields;

export const messages = defineMessages({
  paymentMethod: {
    id: fieldMessages.paymentMethod,
    defaultMessage: 'Payment Method'
  },
  shippingAddressAsBillingAddress: {
    id: fieldMessages.shippingAddressAsBillingAddress,
    defaultMessage: 'Shipping as Billing'
  },
  shippingContactAsBillingContact: {
    id: fieldMessages.shippingContactAsBillingContact,
    defaultMessage: 'Shipping Contact as Billing Contact'
  },
  creditCardNumber: {
    id: fieldMessages.creditCardNumber,
    defaultMessage: 'Card Number'
  },
  creditCardName: {
    id: fieldMessages.creditCardName,
    defaultMessage: 'Name on Card'
  },
  creditCardExpiration: {
    id: fieldMessages.creditCardExpiration,
    defaultMessage: 'Valid Thru'
  },
  creditCardCVV: {
    id: fieldMessages.creditCardCVV,
    defaultMessage: 'CVV / CVC Code'
  },
  billingFirstName: {
    id: fieldMessages.billingFirstName,
    defaultMessage: 'First Name'
  },
  billingLastName: {
    id: fieldMessages.billingLastName,
    defaultMessage: 'Last Name'
  },
  billingCompany: {
    id: fieldMessages.billingCompany,
    defaultMessage: 'Company'
  },
  billingCompanyPlaceholder: {
    id: fieldMessages.billingCompanyPlaceholder,
    defaultMessage: 'Name of organization'
  },
  billingPhone: {
    id: fieldMessages.billingPhone,
    defaultMessage: 'Phone number'
  },
  billingAddress: {
    id: fieldMessages.billingAddress,
    defaultMessage: 'Address'
  },
  billingCity: {
    id: fieldMessages.billingCity,
    defaultMessage: 'City'
  },
  billingState: {
    id: fieldMessages.billingState,
    defaultMessage: 'State'
  },
  billingCountry: {
    id: fieldMessages.billingCountry,
    defaultMessage: 'Country'
  },
  billingPostalCode: {
    id: fieldMessages.billingPostalCode,
    defaultMessage: 'Postal Code'
  },
  referenceNumber: {
    id: fieldMessages.referenceNumber,
    defaultMessage: 'Reference Number'
  }
});

export const getFields = (intl: IntlShape): StepFields<Step3FormData> => {
  const { formatMessage } = intl;

  return {
    paymentMethod: {
      label: formatMessage(messages.paymentMethod),
      name: 'paymentMethod'
    },
    shippingAddressAsBillingAddress: {
      label: formatMessage(messages.shippingAddressAsBillingAddress),
      name: 'shippingAddressAsBillingAddress'
    },
    shippingContactAsBillingContact: {
      label: formatMessage(messages.paymentMethod),
      name: 'shippingContactAsBillingContact'
    },
    creditCardNumber: {
      label: formatMessage(messages.creditCardNumber),
      name: 'creditCardNumber'
    },
    creditCardName: {
      label: formatMessage(messages.creditCardName),
      name: 'creditCardName'
    },
    creditCardExpiration: {
      label: formatMessage(messages.creditCardExpiration),
      name: 'creditCardExpiration'
    },
    creditCardCVV: {
      label: formatMessage(messages.creditCardCVV),
      name: 'creditCardCVV'
    },
    billingFirstName: {
      label: formatMessage(messages.billingFirstName),
      name: 'billingFirstName'
    },
    billingLastName: {
      label: formatMessage(messages.billingLastName),
      name: 'billingLastName'
    },
    billingCompany: {
      label: formatMessage(messages.billingCompany),
      name: 'billingCompany',
      placeholder: formatMessage(messages.billingCompanyPlaceholder)
    },
    billingPhone: {
      label: formatMessage(messages.billingPhone),
      name: 'billingPhone'
    },
    billingAddress: {
      label: formatMessage(messages.billingAddress),
      name: 'billingAddress'
    },
    billingCity: {
      label: formatMessage(messages.billingCity),
      name: 'billingCity'
    },
    billingState: {
      label: formatMessage(messages.billingState),
      name: 'billingState'
    },
    billingCountry: {
      label: formatMessage(messages.billingCountry),
      name: 'billingCountry'
    },
    billingPostalCode: {
      label: formatMessage(messages.billingPostalCode),
      name: 'billingPostalCode'
    },
    referenceNumber: {
      label: formatMessage(messages.referenceNumber),
      name: 'referenceNumber'
    }
  };
};
