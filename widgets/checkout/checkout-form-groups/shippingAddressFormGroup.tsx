import React, { useMemo } from 'react';

import { FormikContextType, useFormikContext } from 'formik';

import { FormikComboBox } from '@components/formik-wrappers/formikComboBox';
import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { IDropdownOption, Stack, useTheme } from '@fluentui/react';
import {
  allCountryOptions,
  supportedProvinceOptions,
  supportedStateOptions
} from '@utilities/places';

import { CheckoutFormValues } from '../checkout-form/checkoutForm.types';
import { checkoutFormFields } from '../checkout-form/checkoutFormHelper';
import { CheckoutFormGroupTitle } from '../shared/checkoutFormGroupTitle';
import { CheckoutFormRowContainer } from '../shared/checkoutFormRowContainer';

const messages = {
  shippingAddress: 'Shipping Address',
  usPlaceholder: 'Please select a state',
  caPlaceholder: 'Please select a province',
  defaultPlaceholder: 'State / Region'
};

export const ShippingAddressFormGroup: React.FC<{
  title?: string;
}> = ({ title }) => {
  const { values }: FormikContextType<CheckoutFormValues> = useFormikContext();

  const { spacing } = useTheme();

  const regionOptions: IDropdownOption[] = useMemo(() => {
    if (values.country === 'US') {
      return supportedStateOptions;
    }
    if (values.country === 'CA') {
      return supportedProvinceOptions;
    }
    return [];
  }, [values.country]);

  const regionPlaceholder: string = useMemo((): string => {
    if (values.country === 'US') {
      return messages.usPlaceholder;
    }
    if (values.country === 'CA') {
      return messages.caPlaceholder;
    }
    return messages.defaultPlaceholder;
  }, [values.country]);

  function getSelectedKey(
    value: string,
    options: IDropdownOption[]
  ): string | undefined {
    return options.find(option => option.key === value)?.key.toString();
  }

  return (
    <Stack tokens={{ childrenGap: spacing.s1 }}>
      <Stack.Item>
        <CheckoutFormGroupTitle title={title || messages.shippingAddress} />
      </Stack.Item>
      <Stack.Item>
        <Stack tokens={{ childrenGap: spacing.s1 }}>
          <CheckoutFormRowContainer>
            <FormikComboBox
              getSelectedKey={getSelectedKey}
              {...checkoutFormFields.country}
              options={allCountryOptions}
              required={true}
              defaultSelectedKey={undefined}
              useComboBoxAsMenuWidth
            />
          </CheckoutFormRowContainer>
          <CheckoutFormRowContainer>
            <FormikTextField {...checkoutFormFields.address} required={true} />
            <FormikTextField {...checkoutFormFields.city} required={true} />
          </CheckoutFormRowContainer>
          <CheckoutFormRowContainer>
            {['US', 'CA'].includes(values.country) ? (
              <FormikComboBox
                options={regionOptions}
                getSelectedKey={getSelectedKey}
                {...checkoutFormFields.state}
                required={true}
                useComboBoxAsMenuWidth
                placeholder={regionPlaceholder}
              />
            ) : (
              <FormikTextField
                {...checkoutFormFields.state}
                required={true}
                placeholder={regionPlaceholder}
              />
            )}
            <FormikTextField {...checkoutFormFields.zipCode} required={true} />
          </CheckoutFormRowContainer>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
