import React from 'react';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { Stack, useTheme } from '@fluentui/react';
import { StepFields } from '@widgets/checkout-new/checkout.types';
import { Step4FormData } from '@widgets/checkout-new/steps/step-4-overview/step-4-overview';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';

type AdditionalInformationFormGroupProps = {
  fields: Pick<StepFields<Step4FormData>, 'additionalInformation'>;
};

export const AdditionalInformationFormGroup: React.FC<
  AdditionalInformationFormGroupProps
> = ({ fields }) => {
  const { spacing } = useTheme();
  return (
    <Stack tokens={{ childrenGap: spacing.m }}>
      <Stack.Item>
        <CheckoutFormGroupTitle title={fields.additionalInformation.label} />
      </Stack.Item>
      <Stack.Item>
        <FormikTextField
          name={fields.additionalInformation.name}
          placeholder={fields.additionalInformation.placeholder}
          multiline
          rows={3}
          validationProps={{ disabled: true }}
        />
      </Stack.Item>
    </Stack>
  );
};
