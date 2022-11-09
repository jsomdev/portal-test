import React from 'react';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { Stack, useTheme } from '@fluentui/react';
import { StepFields } from '@widgets/checkout-new/checkout.types';
import { Step1FormData } from '@widgets/checkout-new/steps/step-1-details/step-1-details';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';
import { CheckoutFormRowContainer } from '@widgets/checkout/shared/checkoutFormRowContainer';

const messages = {
  contact: 'General'
};

export const OrderContactFormGroup: React.FC<{
  fields: Pick<StepFields<Step1FormData>, 'email'>;
}> = ({ fields }) => {
  const { spacing } = useTheme();

  return (
    <Stack tokens={{ childrenGap: spacing.s1 }}>
      <Stack.Item>
        <CheckoutFormGroupTitle title={messages.contact} />
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
