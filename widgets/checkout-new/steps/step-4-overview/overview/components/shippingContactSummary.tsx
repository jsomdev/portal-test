import React, { useMemo } from 'react';

import { Stack } from '@fluentui/react';
import { ContactInfo } from '@services/portal-api';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout-new/shared/overviewGroupContainer';
import { OrderSummaryContact } from '@widgets/checkout/temp/orderSummaryContact';

const messages = {
  shippingContact: 'Shipping Contact'
};

export const ShippingContactSummary: React.FC = () => {
  const { formValues } = useCheckout();

  const shippingContactInfo: ContactInfo = useMemo(() => {
    return {
      company: formValues?.details.company,
      emailAddresses: [],
      firstName: formValues?.details.firstName,
      lastName: formValues?.details.name,
      phoneNumber: formValues?.details.phone,
      urls: []
    };
  }, [formValues?.details]);

  return (
    <Stack>
      <OverviewGroupContainer text={messages.shippingContact} stepIndex={0}>
        <OrderSummaryContact
          contactInfo={shippingContactInfo}
          title={messages.shippingContact}
          displayTitle={false}
        />
      </OverviewGroupContainer>
    </Stack>
  );
};
