import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { AddressFormGroup } from '@widgets/checkout/shared/addressFormGroup';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';
import { StepFields } from '@widgets/checkout/shared/types';

import { Step1FormData } from './step-1-details';

const messages = defineMessages({
  shippingAddressTitle: {
    id: messageIds.pages.requestForQuote.details.billingAddressTitle,
    defaultMessage: 'Billing Address'
  }
});
export const BillingAddressFormGroup: React.FC<{
  title?: string;
  fields: Pick<
    StepFields<Step1FormData>,
    'country' | 'address' | 'city' | 'state' | 'postalCode'
  >;
}> = ({ fields }) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  return (
    <Stack tokens={{ childrenGap: spacing.s1 }}>
      <Stack.Item>
        <CheckoutFormGroupTitle
          title={formatMessage(messages.shippingAddressTitle)}
        />
      </Stack.Item>
      <Stack.Item>
        <Stack tokens={{ childrenGap: spacing.s1 }}>
          <AddressFormGroup fields={fields} />
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
