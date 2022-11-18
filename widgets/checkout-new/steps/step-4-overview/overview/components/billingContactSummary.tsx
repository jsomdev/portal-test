import React, { useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { ContactInfo } from '@services/portal-api';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout-new/shared/overviewGroupContainer';
import { OrderSummaryContact } from '@widgets/checkout/temp/orderSummaryContact';

const messages = defineMessages({
  billingContact: {
    id: messageIds.pages.checkout.payment.billingContact,
    defaultMessage: 'Billing Contact'
  }
});

export const BillingContactSummary: React.FC = () => {
  const { formatMessage } = useIntl();
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

  return (
    <Stack>
      <OverviewGroupContainer
        text={formatMessage(messages.billingContact)}
        stepIndex={steps?.payment.index}
      >
        <OrderSummaryContact contactInfo={billingContactInfo} />
      </OverviewGroupContainer>
    </Stack>
  );
};
