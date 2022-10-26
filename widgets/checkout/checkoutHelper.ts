import { Card, ContactInfo, PostalAddress } from '@services/portal-api';
import { OrderPost } from '@services/portal-api/base/types';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';

import { CheckoutFormValues } from './checkout-form/checkoutForm.types';

interface PurchaseOrderPaymentMethod {
  referenceNumber: string;
}
interface CreditCardPaymentMethod {
  card: Card;
  cvv: string;
}

type CheckoutPaymentMethod =
  | PurchaseOrderPaymentMethod
  | CreditCardPaymentMethod
  | undefined;

export function mapFormFieldsToOrderPost(
  formValues: CheckoutFormValues,
  expectedAmount: number,
  creditCardIssuer?: string
): OrderPost {
  const billingInformation: ContactInfo =
    formValues.shippingContactAsBillingContact === 'no'
      ? {
          company: formValues.billingCompany,
          emailAddresses: [],
          firstName: formValues.billingFirstName,
          lastName: formValues.billingLastName,
          phoneNumber: formValues.billingPhone,
          urls: []
        }
      : {
          company: formValues.company,
          emailAddresses: [],
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          phoneNumber: formValues.phone,
          urls: []
        };

  const billingAddress: PostalAddress =
    formValues.shippingAddressAsBillingAddress === 'no'
      ? {
          city: formValues.billingCity,
          country: formValues.billingCountry,
          postalCode: formValues.billingZipCode,
          region: formValues.billingState,
          lines: [formValues.billingAddress]
        }
      : {
          city: formValues.city,
          country: formValues.country,
          postalCode: formValues.zipCode,
          region: formValues.state,
          lines: [formValues.address]
        };

  function getPaymentInfo(): CheckoutPaymentMethod {
    switch (formValues.paymentMethod) {
      case PaymentMethod.PURCHASE_ORDER:
        return {
          referenceNumber: formValues.referenceNumber
        };
      case PaymentMethod.CREDIT_CARD:
        return {
          card: {
            firstName:
              formValues.creditCardName.substr(
                0,
                formValues.creditCardName.indexOf(' ')
              ) || '-',
            lastName:
              formValues.creditCardName.substr(
                formValues.creditCardName.indexOf(' ') + 1
              ) || '-',
            number: formValues.creditCardNumber.replace(/\s/g, ''),
            validThru: formValues.creditCardExpiration.replace('/', ''),
            issuer: creditCardIssuer || ''
          },
          cvv: formValues.creditCardCVV
        };
      default:
        return;
    }
  }

  return {
    shippingAddress: {
      city: formValues.city,
      country: formValues.country,
      postalCode: formValues.zipCode,
      region: formValues.state,
      lines: [formValues.address]
    },
    billingAddress: {
      ...billingAddress
    },
    shippingMethod: formValues.shippingMethod || '',
    expectedAmount: Number(expectedAmount.toFixed(2)),
    comment: formValues.additionalInformation,
    billingContactInfo: {
      ...billingInformation
    },
    shippingContactInfo: {
      company: formValues.company,
      emailAddresses: [],
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      phoneNumber: formValues.phone,
      urls: []
    },
    emailAddresses: [formValues.email],
    paymentMethod: formValues.paymentMethod || '',
    ...getPaymentInfo()
  };
}
