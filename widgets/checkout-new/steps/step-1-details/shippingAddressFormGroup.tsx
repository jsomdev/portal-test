import React, { useCallback, useMemo } from 'react';

import { FormikContextType, useFormikContext } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

import { FormikComboBox } from '@components/formik-wrappers/formikComboBox';
import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import {
  IComboBox,
  IComboBoxOption,
  IDropdownOption,
  Stack,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import {
  allCountryOptions,
  supportedProvinceOptions,
  supportedStateOptions
} from '@utilities/places';
import { StepFields } from '@widgets/checkout-new/checkout.types';
import { Step1FormData } from '@widgets/checkout-new/steps/step-1-details/step-1-details';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';
import { CheckoutFormRowContainer } from '@widgets/checkout/shared/checkoutFormRowContainer';

const messages = defineMessages({
  shippingAddressTitle: {
    id: messageIds.pages.checkout.details.shippingAddressTitle,
    defaultMessage: 'Shipping Address'
  },
  stateFieldPlaceholderUS: {
    id: messageIds.pages.checkout.details.fields.statePlaceholder.US,
    defaultMessage: 'Please select a state'
  },
  stateFieldPlaceholderCA: {
    id: messageIds.pages.checkout.details.fields.statePlaceholder.CA,
    defaultMessage: 'Please select a province'
  },
  stateFieldPlaceholderDefault: {
    id: messageIds.pages.checkout.details.fields.statePlaceholder.default,
    defaultMessage: 'State / Region / Province'
  }
});

export const ShippingAddressFormGroup: React.FC<{
  title?: string;
  fields: Pick<
    StepFields<Step1FormData>,
    'country' | 'address' | 'city' | 'state' | 'postalCode'
  >;
}> = ({ title, fields }) => {
  const {
    values,
    setFieldValue,
    setFieldTouched
  }: FormikContextType<Step1FormData> = useFormikContext();
  const { formatMessage } = useIntl();

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
      return formatMessage(messages.stateFieldPlaceholderUS);
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
    const selectedKey = options
      .find(option => option.key === value)
      ?.key.toString();
    return selectedKey;
  }

  const onCountryChange = useCallback(
    async (event: React.FormEvent<IComboBox>, option?: IComboBoxOption) => {
      if (!option || option.key !== values.country) {
        const setFieldsPromise = Promise.all([
          setFieldValue('address', '', true),
          setFieldValue('city', '', true),
          setFieldValue('postalCode', '', true),
          setFieldValue('state', '', true)
        ]);
        setFieldsPromise.then(result => {
          result.forEach((field: any) => {
            setFieldTouched(Object.keys(field)[0], false);
          });
        });
      }
    },
    [fields.state.name, setFieldValue, values.country]
  );
  //TODO when switching US and Canada, clear selected state
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
            <FormikTextField {...fields.postalCode} required={true} />
          </CheckoutFormRowContainer>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
