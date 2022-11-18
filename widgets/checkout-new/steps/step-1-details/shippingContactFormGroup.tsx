import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { Stack, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { CheckoutFormGroupTitle } from '@widgets/checkout-new/shared/checkoutFormGroupTitle';
import { CheckoutFormRowContainer } from '@widgets/checkout-new/shared/checkoutFormRowContainer';
import { StepFields } from '@widgets/checkout-new/shared/types';
import { Step1FormData } from '@widgets/checkout-new/steps/step-1-details/step-1-details';

const messages = defineMessages({
  shippingContactTitle: {
    id: messageIds.pages.checkout.details.shippingContactTitle,
    defaultMessage: 'Shipping Contact',
    description: 'Checkout step 1: title for shipping contact information'
  }
});

export const ShippingContactFormGroup: React.FC<{
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
