import React, { useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { ContactInfo } from '@services/portal-api';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout-new/shared/overviewGroupContainer';
import { OrderSummaryContact } from '@widgets/checkout-new/shared/temp/orderSummaryContact';

const messages = defineMessages({
  shippingContact: {
    id: messageIds.pages.checkout.details.shippingContactTitle,
    defaultMessage: 'Shipping Contact'
  }
});

export const ShippingContactSummary: React.FC = () => {
  const { formatMessage } = useIntl();
  const { formValues, steps } = useCheckout();

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
      <OverviewGroupContainer
        text={formatMessage(messages.shippingContact)}
        stepIndex={steps?.details.index}
      >
        <OrderSummaryContact contactInfo={shippingContactInfo} />
      </OverviewGroupContainer>
    </Stack>
  );
};
