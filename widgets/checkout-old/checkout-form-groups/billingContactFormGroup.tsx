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

import { checkoutFormFields } from '../checkout-form/checkoutFormHelper';
import { CheckoutFormRowContainer } from '../shared/checkoutFormRowContainer';

export const BillingContactFormGroup: React.FC<{
  props: IChoiceGroupOption | IChoiceGroupOptionProps | undefined;
  render: IRenderFunction<
    IChoiceGroupOption | IChoiceGroupOptionProps | undefined
  >;
}> = ({ props, render }) => {
  const { spacing } = useTheme();

  const styles: IStackStyles = {
    root: {
      paddingLeft: '26px'
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
            <FormikTextField
              {...checkoutFormFields.billingFirstName}
              required={true}
            />
            <FormikTextField
              {...checkoutFormFields.billingLastName}
              required={true}
            />
          </CheckoutFormRowContainer>
          <CheckoutFormRowContainer>
            <FormikTextField
              {...checkoutFormFields.billingCompany}
              required={true}
            />
            <FormikTextField
              {...checkoutFormFields.billingPhone}
              required={true}
            />
          </CheckoutFormRowContainer>
        </Stack>
      )}
    </Stack>
  );
};
