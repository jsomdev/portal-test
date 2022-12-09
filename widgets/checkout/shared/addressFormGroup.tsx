import React from 'react';

import { FormikContextType, useFormikContext } from 'formik';

import { FormikComboBox } from '@components/formik-wrappers/formikComboBox';
import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { allCountryOptions } from '@utilities/places';
import {
  AddressFormGroupFields,
  AddressFormGroupValues,
  useAddressFormGroup
} from '@widgets/account/address-book/useAddressFormGroup';
import { CheckoutFormRowContainer } from '@widgets/checkout/shared/checkoutFormRowContainer';

export const AddressFormGroup: React.FC<{
  fields: AddressFormGroupFields;
}> = ({ fields }) => {
  const { values }: FormikContextType<AddressFormGroupValues> =
    useFormikContext();

  const {
    defaultSelectedCountryKey,
    onCountryChange,
    regionLabel,
    regionOptions,
    regionPlaceholder
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useAddressFormGroup((values as any)[fields.country.name], fields);

  return (
    <>
      <CheckoutFormRowContainer>
        <FormikComboBox
          {...fields.country}
          options={allCountryOptions}
          required={true}
          onChange={onCountryChange}
          useComboBoxAsMenuWidth
          defaultSelectedKey={defaultSelectedCountryKey}
        />
      </CheckoutFormRowContainer>
      <CheckoutFormRowContainer>
        <FormikTextField {...fields.address} required={true} />
        <FormikTextField {...fields.city} required={true} />
      </CheckoutFormRowContainer>
      <CheckoutFormRowContainer>
        {['US', 'CA'].includes(defaultSelectedCountryKey) && regionOptions ? (
          <FormikComboBox
            {...fields.state}
            options={regionOptions}
            label={regionLabel}
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
