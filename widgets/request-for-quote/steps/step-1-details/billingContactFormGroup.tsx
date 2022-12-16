import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { Stack, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';
import { CheckoutFormRowContainer } from '@widgets/checkout/shared/checkoutFormRowContainer';
import { StepFields } from '@widgets/checkout/shared/types';

import { Step1FormData } from './step-1-details';

const messages = defineMessages({
  shippingContactTitle: {
    id: messageIds.pages.requestForQuote.details.billingContactTitle,
    defaultMessage: 'Billing Contact',
    description:
      'Request for Quote step 1: title for billing contact information'
  }
});

export const BillingContactFormGroup: React.FC<{
  fields: Pick<
    StepFields<Step1FormData>,
    'firstName' | 'name' | 'company' | 'phone'
  >;
}> = ({ fields }) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  return (
    <Stack tokens={{ childrenGap: spacing.s1 }}>
      <Stack.Item>
        <CheckoutFormGroupTitle
          title={formatMessage(messages.shippingContactTitle)}
        />
      </Stack.Item>
      <Stack.Item>
        <Stack tokens={{ childrenGap: spacing.s1 }}>
          <CheckoutFormRowContainer>
            <FormikTextField {...fields.firstName} required={true} />
            <FormikTextField {...fields.name} required={true} />
          </CheckoutFormRowContainer>
          <CheckoutFormRowContainer>
            <FormikTextField {...fields.company} required={true} />
            <FormikTextField {...fields.phone} required={true} />
          </CheckoutFormRowContainer>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};