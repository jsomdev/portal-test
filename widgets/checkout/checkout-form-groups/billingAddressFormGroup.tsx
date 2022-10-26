import React from 'react';

import { FormikContextType, useFormikContext } from 'formik';

import { FormikComboBox } from '@components/formik-wrappers/formikComboBox';
import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import {
  IChoiceGroupOption,
  IChoiceGroupOptionProps,
  IDropdownOption,
  IRenderFunction,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import {
  allCountryOptions,
  supportedProvinceOptions,
  supportedStateOptions
} from '@utilities/places';

import { CheckoutFormValues } from '../checkout-form/checkoutForm.types';
import { checkoutFormFields } from '../checkout-form/checkoutFormHelper';
import { CheckoutFormRowContainer } from '../shared/checkoutFormRowContainer';

export const BillingAddressFormGroup: React.FC<{
  props: IChoiceGroupOption | IChoiceGroupOptionProps | undefined;
  render: IRenderFunction<
    IChoiceGroupOption | IChoiceGroupOptionProps | undefined
  >;
}> = ({ props, render }) => {
  const { spacing } = useTheme();
  const { values }: FormikContextType<CheckoutFormValues> = useFormikContext();
  function getSelectedKey(
    value: string,
    options: IDropdownOption[]
  ): string | undefined {
    return options.find(option => option.key === value)?.key.toString();
  }

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
            <FormikComboBox
              getSelectedKey={getSelectedKey}
              {...checkoutFormFields.billingCountry}
              options={allCountryOptions}
              required={true}
              defaultSelectedKey="US"
              useComboBoxAsMenuWidth
            />
          </CheckoutFormRowContainer>
          <CheckoutFormRowContainer>
            <FormikTextField
              {...checkoutFormFields.billingAddress}
              required={true}
            />
            <FormikTextField
              {...checkoutFormFields.billingCity}
              required={true}
            />
          </CheckoutFormRowContainer>
          <CheckoutFormRowContainer>
            {values.billingCountry === 'US' ||
            values?.billingCountry === 'CA' ? (
              <FormikComboBox
                options={
                  values?.billingCountry === 'US'
                    ? supportedStateOptions
                    : supportedProvinceOptions
                }
                getSelectedKey={getSelectedKey}
                {...checkoutFormFields.billingState}
                required={true}
                useComboBoxAsMenuWidth
              />
            ) : (
              <FormikTextField
                {...checkoutFormFields.billingState}
                required={true}
              />
            )}

            <FormikTextField
              {...checkoutFormFields.billingZipCode}
              required={true}
            />
          </CheckoutFormRowContainer>
        </Stack>
      )}
    </Stack>
  );
};
