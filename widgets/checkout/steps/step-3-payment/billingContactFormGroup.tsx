import React from 'react';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import {
  IChoiceGroupOption,
  IChoiceGroupOptionProps,
  IRenderFunction,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { CheckoutFormRowContainer } from '@widgets/checkout/shared/checkoutFormRowContainer';
import { StepFields } from '@widgets/checkout/shared/types';
import { Step3FormData } from '@widgets/checkout/steps/step-3-payment/step-3-payment';
import { mediaQueryFrom } from '@widgets/media-queries';

export const BillingContactFormGroup: React.FC<{
  props: (IChoiceGroupOption & IChoiceGroupOptionProps) | undefined;
  render: IRenderFunction<
    (IChoiceGroupOption & IChoiceGroupOptionProps) | undefined
  >;
  fields: Pick<
    StepFields<Step3FormData>,
    'billingFirstName' | 'billingLastName' | 'billingPhone' | 'billingCompany'
  >;
}> = ({ props, render, fields }) => {
  const { spacing } = useTheme();

  const styles: IStackStyles = {
    root: {
      ...mediaQueryFrom('tablet', {
        paddingLeft: '26px'
      })
    }
  };

  const isChecked =
    props === undefined || !('checked' in props) ? false : props.checked;

  return (
    <Stack tokens={{ childrenGap: spacing.m }}>
      <Stack horizontal wrap={false} horizontalAlign="space-between">
        <Stack.Item>{render && render(props)}</Stack.Item>
      </Stack>
      {isChecked && (
        <Stack
          styles={styles}
          tokens={{ childrenGap: spacing.s1, padding: `0 0 ${spacing.l1}` }}
        >
          <CheckoutFormRowContainer>
            <FormikTextField {...fields.billingFirstName} required={true} />
            <FormikTextField {...fields.billingLastName} required={true} />
          </CheckoutFormRowContainer>
          <CheckoutFormRowContainer>
            <FormikTextField {...fields.billingCompany} required={true} />
            <FormikTextField {...fields.billingPhone} required={true} />
          </CheckoutFormRowContainer>
        </Stack>
      )}
    </Stack>
  );
};
