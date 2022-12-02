import React, { useCallback, useMemo } from 'react';

import { useFormikContext } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

import { FormikComboBox } from '@components/formik-wrappers/formikComboBox';
import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { IComboBox, IComboBoxOption, IDropdownOption } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import {
  allCountryOptions,
  supportedProvinceOptions,
  supportedStateOptions
} from '@utilities/places';
import { CheckoutFormRowContainer } from '@widgets/checkout/shared/checkoutFormRowContainer';
import { Fields } from '@widgets/checkout/shared/types';

const messages = defineMessages({
  stateFieldPlaceholderUS: {
    id: messageIds.pages.checkout.details.fields.statePlaceholder.US,
    defaultMessage: 'Please select a state'
  },
  stateFieldPlaceholderCA: {
    id: messageIds.pages.checkout.details.fields.statePlaceholder.CA,
    defaultMessage: 'Please select a province'
  }
});

type AddressFormGroupValues = {
  country: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
};

export type AddressFormGroupFields = Fields<AddressFormGroupValues>;

export const AddressFormGroup: React.FC<{
  fields: AddressFormGroupFields;
}> = ({ fields }) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext();

  const { formatMessage } = useIntl();

  /* we have to use any here, unless we could declare some computed type that looks something like this:
  type FormValues = {
    [fields.country.name]: string,
    ...etc...
  }
  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentCountry = (values as any)[fields.country.name];

  const regionOptions: IDropdownOption[] = useMemo(() => {
    if (currentCountry === 'US') {
      return supportedStateOptions;
    }
    if (currentCountry === 'CA') {
      return supportedProvinceOptions;
    }
    return [];
  }, [currentCountry]);

  const regionPlaceholder: string = useMemo((): string => {
    if (currentCountry === 'US') {
      return formatMessage(messages.stateFieldPlaceholderUS);
    }
    if (currentCountry === 'CA') {
      return formatMessage(messages.stateFieldPlaceholderCA);
    }
    return '';
  }, [currentCountry, formatMessage]);

  const getSelectedKey = useCallback(
    (value: string, options: IDropdownOption[]): string | undefined =>
      options.find(option => option.key === value)?.key.toString(),
    []
  );

  const resetFieldsOnCountryChange = useCallback(
    function resetFieldsOnCountryChange(fields: string[]): void[] {
      function resetValueAndValidation(key: string) {
        setFieldValue(key, '', false);
        setFieldTouched(key, false);
      }
      return fields.map(key => {
        return resetValueAndValidation(key);
      });
    },
    [setFieldTouched, setFieldValue]
  );

  const onCountryChange: (
    event: React.FormEvent<IComboBox>,
    option?: IComboBoxOption,
    index?: number,
    value?: string
  ) => void = useCallback(
    async (ev, option) => {
      if (option) {
        await setFieldValue(fields.country.name, option.key, true);
        resetFieldsOnCountryChange([
          fields.address.name,
          fields.city.name,
          fields.postalCode.name,
          fields.state.name
        ]);
      }
    },
    [
      fields.address.name,
      fields.city.name,
      fields.postalCode.name,
      fields.state.name,
      resetFieldsOnCountryChange
    ]
  );

  return (
    <>
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
        {['US', 'CA'].includes(currentCountry) ? (
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
        <FormikTextField {...fields.postalCode} required={true} />
      </CheckoutFormRowContainer>
    </>
  );
};
