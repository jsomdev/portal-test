import React, { useMemo } from 'react';

import { FormikContextType, useFormikContext } from 'formik';

import { Stack } from '@fluentui/react';
import { ContactInfo } from '@services/portal-api';
import { OrderSummaryContact } from '@widgets/checkout/temp/orderSummaryContact';

import { CheckoutFormValues } from '../checkout-form/checkoutForm.types';
import { CheckoutFormOverviewGroupContainer } from '../shared/checkoutFormOverviewGroupContainer';

const messages = {
  shippingContact: 'Shipping Contact'
};

export const CheckoutFormOverviewShippingContact: React.FC = () => {
  const { values }: FormikContextType<CheckoutFormValues> = useFormikContext();

  const shippingContactInfo: ContactInfo = useMemo(() => {
    return {
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
      <CheckoutFormOverviewGroupContainer
        text={messages.shippingContact}
        stepIndex={0}
      >
        <OrderSummaryContact
          contactInfo={shippingContactInfo}
          title={messages.shippingContact}
          displayTitle={false}
        />
      </CheckoutFormOverviewGroupContainer>
    </Stack>
  );
};
