import React, { useMemo } from 'react';

import { Stack } from '@fluentui/react';
import { ContactInfo } from '@services/portal-api';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout-new/shared/overviewGroupContainer';
import { OrderSummaryContact } from '@widgets/checkout/temp/orderSummaryContact';

const messages = {
  billingContact: 'Billing Contact'
};

export const BillingContactSummary: React.FC = () => {
  const { formValues, steps } = useCheckout();

  //TODO refactor
  const billingContactInfo: ContactInfo = useMemo(() => {
    return formValues?.payment.shippingContactAsBillingContact === 'no'
      ? {
          company: formValues?.payment.billingCompany,
          emailAddresses: [],
          firstName: formValues?.payment.billingFirstName,
          lastName: formValues?.payment.billingLastName,
          phoneNumber: formValues?.payment.billingPhone,
          urls: []
        }
      : {
          company: formValues?.details.company,
          emailAddresses: [],
          firstName: formValues?.details.firstName,
          lastName: formValues?.details.name,
          phoneNumber: formValues?.details.phone,
          urls: []
        };
  }, [formValues]);

  //TODO i18n
  return (
    <Stack>
      <OverviewGroupContainer
        text="Billing Contact"
        stepIndex={steps?.payment.index}
      >
        <OrderSummaryContact
          contactInfo={billingContactInfo}
          title={messages.billingContact}
          displayTitle={false}
        />
      </OverviewGroupContainer>
    </Stack>
  );
};
