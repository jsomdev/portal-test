import React, { useMemo } from 'react';

import { FormikContextType, useFormikContext } from 'formik';
import { useIntl } from 'react-intl';

import { FormikCheckbox } from '@components/formik-wrappers/formikCheckbox';
import { FormikComboBox } from '@components/formik-wrappers/formikComboBox';
import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { Stack, Text, useTheme } from '@fluentui/react';
import { allCountryOptions } from '@utilities/places';
import { Fields } from '@widgets/checkout/shared/types';

import { AddressBookFormData, getFields } from './addressBookForm.helper';
import { useAddressFormGroup } from './useAddressFormGroup';

export const AddressBookFormGroup: React.FC<{
  isDefaultBilling: boolean;
  isDefaultShipping: boolean;
}> = ({ isDefaultBilling, isDefaultShipping }) => {
  const { spacing } = useTheme();
  const intl = useIntl();
  const { values }: FormikContextType<AddressBookFormData> = useFormikContext();

  const fields: Fields<AddressBookFormData> = useMemo(
    () => getFields(intl),
    [intl]
  );

  const {
    defaultSelectedCountryKey,
    regionLabel,
    regionOptions,
    regionPlaceholder,
    onCountryChange
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useAddressFormGroup((values as any)[fields.country.name], fields);

  return (
    <Stack tokens={{ childrenGap: spacing.l1 }} grow>
      <FormikTextField {...fields.name} required={true} />
      <FormikComboBox
        {...fields.country}
        options={allCountryOptions}
        required={true}
        onChange={onCountryChange}
        useComboBoxAsMenuWidth
        defaultSelectedKey={defaultSelectedCountryKey}
      />

      <FormikTextField {...fields.address} required={true} />
      <FormikTextField {...fields.city} required={true} />

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
          label={regionLabel}
        />
      )}
      <FormikTextField {...fields.postalCode} required={true} />

      <Stack tokens={{ childrenGap: spacing.s1 }}>
        <FormikCheckbox
          {...fields.setAsBilling}
          onRenderLabel={() => <Text>{fields.setAsBilling.label}</Text>}
          disabled={isDefaultBilling}
        />
        <FormikCheckbox
          {...fields.setAsShipping}
          onRenderLabel={() => <Text>{fields.setAsShipping.label}</Text>}
          disabled={isDefaultShipping}
        />
      </Stack>
    </Stack>
  );
};
