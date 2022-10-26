import React, { useMemo } from 'react';

import { FormikContextType, useFormikContext } from 'formik';

import { Stack } from '@fluentui/react';
import { ContactInfo } from '@services/portal-api';
import { OrderSummaryContact } from '@widgets/checkout-old/temp/orderSummaryContact';

import { CheckoutFormValues } from '../checkout-form/checkoutForm.types';
import { CheckoutFormOverviewGroupContainer } from '../shared/checkoutFormOverviewGroupContainer';

const messages = {
  billingContact: 'Billing Contact'
};

export const CheckoutFormOverviewBillingContact: React.FC = () => {
  const { values }: FormikContextType<CheckoutFormValues> = useFormikContext();

  const billingContactInfo: ContactInfo = useMemo(() => {
    return values.shippingContactAsBillingContact === 'no'
      ? {
          company: values.billingCompany,
          emailAddresses: [],
          firstName: values.billingFirstName,
          lastName: values.billingLastName,
          phoneNumber: values.billingPhone,
          urls: []
        }
      : {
          company: values.company,
          emailAddresses: [],
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phone,
          urls: []
        };
  }, [values]);

  return (
    <Stack>
      <CheckoutFormOverviewGroupContainer text="Billing Contact" stepIndex={2}>
        <OrderSummaryContact
          contactInfo={billingContactInfo}
          title={messages.billingContact}
          displayTitle={false}
        />
      </CheckoutFormOverviewGroupContainer>
    </Stack>
  );
};
