import React from 'react';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { FormikTextFieldProps } from '@components/formik-wrappers/formikWrappers.types';
import { Stack, useTheme } from '@fluentui/react';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';
import { CheckoutFormRowContainer } from '@widgets/checkout/shared/checkoutFormRowContainer';

const messages = {
  contact: 'General'
};

export const OrderContactFormGroup: React.FC<{
  email: FormikTextFieldProps;
}> = ({ email }) => {
  const { spacing } = useTheme();

  return (
    <Stack tokens={{ childrenGap: spacing.s1 }}>
      <Stack.Item>
        <CheckoutFormGroupTitle title={messages.contact} />
      </Stack.Item>
      <Stack.Item>
        <Stack>
          <CheckoutFormRowContainer>
            <FormikTextField {...email} required={true} />
          </CheckoutFormRowContainer>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
