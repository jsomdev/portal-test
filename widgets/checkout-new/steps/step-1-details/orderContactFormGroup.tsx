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
  generalTitle: {
    id: messageIds.pages.checkout.details.generalTitle,
    defaultMessage: 'General',
    description: 'Checkout step 1: title for general information'
  }
});

export const OrderContactFormGroup: React.FC<{
  fields: Pick<StepFields<Step1FormData>, 'email'>;
}> = ({ fields }) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  return (
    <Stack tokens={{ childrenGap: spacing.s1 }}>
      <Stack.Item>
        <CheckoutFormGroupTitle title={formatMessage(messages.generalTitle)} />
      </Stack.Item>
      <Stack.Item>
        <Stack>
          <CheckoutFormRowContainer>
            <FormikTextField {...fields.email} required={true} />
          </CheckoutFormRowContainer>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
