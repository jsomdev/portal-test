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
import { StepFields } from '@widgets/checkout-new/checkout.types';
import { Step3FormData } from '@widgets/checkout-new/steps/step-3-payment/step-3-payment';
import { CheckoutFormRowContainer } from '@widgets/checkout/shared/checkoutFormRowContainer';

export const BillingAddressFormGroup: React.FC<{
  props: IChoiceGroupOption | IChoiceGroupOptionProps | undefined;
  render: IRenderFunction<
    IChoiceGroupOption | IChoiceGroupOptionProps | undefined
  >;
  fields: Pick<
    StepFields<Step3FormData>,
    | 'billingCountry'
    | 'billingAddress'
    | 'billingCity'
    | 'billingState'
    | 'billingPostalCode'
  >;
}> = ({ props, render, fields }) => {
  const { spacing } = useTheme();
  const { values }: FormikContextType<Step3FormData> = useFormikContext();
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
              {...fields.billingCountry}
              options={allCountryOptions}
              required={true}
              defaultSelectedKey="US"
              useComboBoxAsMenuWidth
            />
          </CheckoutFormRowContainer>
          <CheckoutFormRowContainer>
            <FormikTextField {...fields.billingAddress} required={true} />
            <FormikTextField {...fields.billingCity} required={true} />
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
                {...fields.billingState}
                required={true}
                useComboBoxAsMenuWidth
              />
            ) : (
              <FormikTextField {...fields.billingState} required={true} />
            )}
            <FormikTextField {...fields.billingPostalCode} required={true} />
          </CheckoutFormRowContainer>
        </Stack>
      )}
    </Stack>
  );
};
