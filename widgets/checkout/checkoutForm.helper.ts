import { Card, ContactInfo, PostalAddress } from '@services/portal-api';
import { OrderPost } from '@services/portal-api/base/types';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';
import {
  CheckoutFormValues,
  CheckoutSteps,
  StepKey
} from '@widgets/checkout/shared/types';

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

function getPaymentInfo(
  formValues: CheckoutFormValues,
  creditCardIssuer: string
): CheckoutPaymentMethod {
  switch (formValues.payment.paymentMethod) {
    case PaymentMethod.PURCHASE_ORDER:
      return {
        referenceNumber: formValues.payment.referenceNumber || ''
      };
    case PaymentMethod.CREDIT_CARD: {
      const firstName =
        (formValues.payment.creditCardName &&
          formValues.payment.creditCardName.substr(
            0,
            formValues.payment.creditCardName.indexOf(' ')
          )) ||
        '-';

      const lastName =
        (formValues.payment.creditCardName &&
          formValues.payment.creditCardName.substr(
            formValues.payment.creditCardName.indexOf(' ') + 1
          )) ||
        '-';

      return {
        card: {
          firstName,
          lastName,
          number: (formValues.payment.creditCardNumber || '').replace(
            /\s/g,
            ''
          ),
          validThru: (formValues.payment.creditCardExpiration || '').replace(
            '/',
            ''
          ),
          issuer: creditCardIssuer || ''
        },
        cvv: formValues.payment.creditCardCVV || ''
      };
    }
    default:
      return;
  }
}

export function mapFormFieldsToOrderPost(
  formValues: CheckoutFormValues,
  expectedAmount: number,
  creditCardIssuer?: string
): OrderPost {
  const billingInformation: ContactInfo =
    formValues.payment.shippingContactAsBillingContact === 'no'
      ? {
          company: formValues.payment.billingCompany,
          emailAddresses: [],
          firstName: formValues.payment.billingFirstName,
          lastName: formValues.payment.billingLastName,
          phoneNumber: formValues.payment.billingPhone,
          urls: []
        }
      : {
          company: formValues.details.company,
          emailAddresses: [],
          firstName: formValues.details.firstName,
          lastName: formValues.details.name,
          phoneNumber: formValues.details.phone,
          urls: []
        };

  const billingAddress: PostalAddress =
    formValues.payment.shippingAddressAsBillingAddress === 'no'
      ? {
          city: formValues.payment.billingCity,
          country: formValues.payment.billingCountry,
          postalCode: formValues.payment.billingPostalCode,
          region: formValues.payment.billingState,
          lines: formValues.payment.billingAddress
            ? [formValues.payment.billingAddress]
            : []
        }
      : {
          city: formValues.details.city,
          country: formValues.details.country,
          postalCode: formValues.details.postalCode,
          region: formValues.details.state,
          lines: formValues.details.address ? [formValues.details.address] : []
        };

  return {
    shippingAddress: {
      city: formValues.details.city,
      country: formValues.details.country,
      postalCode: formValues.details.postalCode,
      region: formValues.details.state,
      lines: [formValues.details.address]
    },
    billingAddress: {
      ...billingAddress
    },
    shippingMethod: formValues.shippingMethod.shippingMethod || '',
    expectedAmount: Number(expectedAmount.toFixed(2)),
    comment: formValues.overview.additionalInformation || '',
    billingContactInfo: {
      ...billingInformation
    },
    shippingContactInfo: {
      company: formValues.details.company,
      emailAddresses: [],
      firstName: formValues.details.firstName,
      lastName: formValues.details.name,
      phoneNumber: formValues.details.phone,
      urls: []
    },
    emailAddresses: [formValues.details.email],
    paymentMethod: formValues.payment.paymentMethod || '',
    ...getPaymentInfo(formValues, creditCardIssuer || '')
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getCurrentStep = (
  steps: CheckoutSteps | undefined,
  currentIndex: number
) => {
  if (!steps) {
    return { currentStep: null, currentStepKey: null, isLastStep: false };
  }
  const stepKeys = Object.keys(steps) as StepKey[];
  const currentStepKey = stepKeys.find(
    key => steps[key].index === currentIndex
  );
  if (!currentStepKey) {
    return { currentStep: null, currentStepKey: null, isLastStep: false };
  }
  const currentStep = steps[currentStepKey];
  const isLastStep = currentStep.index === stepKeys.length - 1;
  return { currentStep, currentStepKey, isLastStep };
};
