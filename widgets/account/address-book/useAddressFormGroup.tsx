import { useMemo } from 'react';

import { FormikContextType, useFormikContext } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

import { IComboBox, IComboBoxOption, IDropdownOption } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import {
  supportedProvinceOptions,
  supportedStateOptions
} from '@utilities/places';
import { StepFields } from '@widgets/checkout/shared/types';

import { AddressBookFormData } from './addressBookForm.helper';

export type AddressFormGroupValues = {
  country: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
};

export type AddressFormGroupFields = StepFields<AddressFormGroupValues>;

interface AddressFormGroupProps {
  defaultSelectedCountryKey: string;
  regionLabel: string;
  regionPlaceholder: string;
  regionOptions: IDropdownOption[] | null;
  onCountryChange: (
    event: React.FormEvent<IComboBox>,
    option: IComboBoxOption | undefined
  ) => Promise<void>;
}

const messages = defineMessages({
  stateFieldPlaceholderUS: {
    id: messageIds.pages.checkout.details.fields.statePlaceholder.US,
    defaultMessage: 'Please select a state default'
  },
  stateFieldPlaceholderCA: {
    id: messageIds.pages.checkout.details.fields.statePlaceholder.CA,
    defaultMessage: 'Please select a province default'
  },
  stateFieldLabel: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.formFields.region.label.default,
    defaultMessage: 'State / Province default',
    description: 'State / Province field label'
  },
  stateFieldLabelCa: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.formFields.region.label.ca,
    defaultMessage: 'Province',
    description: 'Province field label'
  },
  stateFieldLabelUs: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.formFields.region.label.us,
    defaultMessage: 'State',
    description: 'State field label'
  }
});

export const useAddressFormGroup = (
  countryValue: string,
  fields: StepFields<AddressFormGroupValues>
): AddressFormGroupProps => {
  const { formatMessage } = useIntl();
  const {
    setFieldTouched,
    setFieldValue
  }: FormikContextType<AddressBookFormData> = useFormikContext();

  const defaultSelectedCountryKey = useMemo(() => {
    return countryValue || 'US';
  }, [countryValue]);

  const regionOptions: IDropdownOption[] | null = useMemo(() => {
    if (defaultSelectedCountryKey === 'US') {
      return supportedStateOptions;
    }
    if (defaultSelectedCountryKey === 'CA') {
      return supportedProvinceOptions;
    }
    return null;
  }, [defaultSelectedCountryKey]);

  const regionLabel: string = useMemo(() => {
    if (defaultSelectedCountryKey === 'US') {
      return formatMessage(messages.stateFieldLabelUs);
    }
    if (defaultSelectedCountryKey === 'CA') {
      return formatMessage(messages.stateFieldLabelCa);
    }
    return formatMessage(messages.stateFieldLabel);
  }, [defaultSelectedCountryKey, formatMessage]);

  const regionPlaceholder: string = useMemo((): string => {
    if (defaultSelectedCountryKey === 'US') {
      return formatMessage(messages.stateFieldPlaceholderUS);
    }
    if (defaultSelectedCountryKey === 'CA') {
      return formatMessage(messages.stateFieldPlaceholderCA);
    }
    return '';
  }, [defaultSelectedCountryKey, formatMessage]);

  function resetFieldsOnCountryChange(
    setFieldTouched: (
      field: string,
      isTouched?: boolean | undefined,
      shouldValidate?: boolean | undefined
    ) => void,
    setFieldValue: (
      field: string,
      value: string,
      shouldValidate?: boolean | undefined
    ) => void,
    fields: string[]
  ): void[] {
    function resetValueAndValidation(key: string) {
      setFieldValue(key, '', false);
      setFieldTouched(key, false);
    }
    return fields.map(key => {
      return resetValueAndValidation(key);
    });
  }

  async function onCountryChange(
    event: React.FormEvent<IComboBox>,
    option: IComboBoxOption | undefined
  ) {
    if (option) {
      await setFieldValue(fields.country.name, option.key, true);
      resetFieldsOnCountryChange(setFieldTouched, setFieldValue, [
        fields.address.name,
        fields.city.name,
        fields.postalCode.name,
        fields.state.name
      ]);
    }
  }

  return {
    defaultSelectedCountryKey,
    regionLabel,
    regionPlaceholder,
    regionOptions,
    onCountryChange
  };
};
