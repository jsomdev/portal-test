import React, { useCallback, useMemo } from 'react';

import { FormikContextType, useFormikContext } from 'formik';

import { FormikComboBox } from '@components/formik-wrappers/formikComboBox';
import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import {
  IComboBox,
  IComboBoxOption,
  IDropdownOption,
  Stack,
  useTheme
} from '@fluentui/react';
import {
  allCountryOptions,
  supportedProvinceOptions,
  supportedStateOptions
} from '@utilities/places';
import { StepFields } from '@widgets/checkout-new/checkout.types';
import { Step1 } from '@widgets/checkout-new/steps/step-1-details/step-1-details';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';
import { CheckoutFormRowContainer } from '@widgets/checkout/shared/checkoutFormRowContainer';

const messages = {
  shippingAddress: 'Shipping Address',
  usPlaceholder: 'Please select a state',
  caPlaceholder: 'Please select a province',
  defaultPlaceholder: 'State / Region'
};

export const ShippingAddressFormGroup: React.FC<{
  title?: string;
  fields: Pick<
    StepFields<Step1>,
    'country' | 'address' | 'city' | 'state' | 'zipCode'
  >;
}> = ({ title, fields }) => {
  const { values, setFieldValue }: FormikContextType<Step1> =
    useFormikContext();

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

  const onCountryChange = useCallback(
    (event: React.FormEvent<IComboBox>, option?: IComboBoxOption) => {
      if (!option || option.key !== values.country) {
        setFieldValue(fields.state.name, '');
      }
    },
    [fields.state.name, setFieldValue, values.country]
  );

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
              {...fields.country}
              options={allCountryOptions}
              required={true}
              defaultSelectedKey={undefined}
              useComboBoxAsMenuWidth
              onChange={onCountryChange}
            />
          </CheckoutFormRowContainer>
          <CheckoutFormRowContainer>
            <FormikTextField {...fields.address} required={true} />
            <FormikTextField {...fields.city} required={true} />
          </CheckoutFormRowContainer>
          <CheckoutFormRowContainer>
            {['US', 'CA'].includes(values.country) ? (
              <FormikComboBox
                options={regionOptions}
                getSelectedKey={getSelectedKey}
                {...fields.state}
                required={true}
                useComboBoxAsMenuWidth
                placeholder={regionPlaceholder}
              />
            ) : (
              <FormikTextField
                {...fields.state}
                required={true}
                placeholder={regionPlaceholder}
              />
            )}
            <FormikTextField {...fields.zipCode} required={true} />
          </CheckoutFormRowContainer>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
