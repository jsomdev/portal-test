import { useMemo } from 'react';

import { useFormikContext } from 'formik';
import { useIntl } from 'react-intl';

import { FormikComboBox } from '@components/formik-wrappers/formikComboBox';
import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import {
  IComboBoxStyles,
  ITextFieldStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { defineMessages } from '@formatjs/intl';
import { messageIds } from '@services/i18n';
import { MatchedCustomer } from '@services/portal-api/models/MatchCustomerResponse';
import { allCountryOptions } from '@utilities/places';
import {
  AddressFormGroupValues,
  useAddressFormGroup
} from '@widgets/account/address-book/useAddressFormGroup';
import { StepFields } from '@widgets/checkout/shared/types';

import {
  CompleteSignUpFormFields,
  CompleteSignUpFormValues
} from './completeSignUp.types';
import { getCompanyDetailsFormFields } from './constants';
import { CustomerSuggestions } from './customerSuggestions';

interface CompanyDetailsStepStyles {
  textField: Partial<ITextFieldStyles>;
  comboBox: Partial<IComboBoxStyles>;
}
interface CompanyDetailsStepProps {
  matchedCustomers: MatchedCustomer[];
  selectedCustomer: MatchedCustomer | undefined;
  onSelectCustomer: (customer: MatchedCustomer) => void;
}

const messages = defineMessages({
  billingAddressTitle: {
    id: messageIds.signupFlow.billingAddressTitle,
    defaultMessage: 'Billing Address'
  }
});

export const CompanyBillingAddressStep: React.FC<CompanyDetailsStepProps> = ({
  matchedCustomers,
  selectedCustomer,
  onSelectCustomer
}) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  const { values } = useFormikContext<CompleteSignUpFormValues>();

  const companyDetailsFormFields: CompleteSignUpFormFields = useMemo(() => {
    return getCompanyDetailsFormFields(formatMessage);
  }, [formatMessage]);

  const {
    defaultSelectedCountryKey,
    regionLabel,
    regionOptions,
    regionPlaceholder,
    onCountryChange
  } = useAddressFormGroup(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (values as any)[companyDetailsFormFields.country.name],
    companyDetailsFormFields as StepFields<AddressFormGroupValues>
  );

  const styles: CompanyDetailsStepStyles = {
    comboBox: {
      container: {
        '& .ms-ComboBox.is-required': {
          height: 40
        }
      },
      input: {
        fontSize: '16px'
      }
    },
    textField: {
      fieldGroup: {
        height: 40
      },
      icon: {
        position: 'relative',
        top: 'unset',
        bottom: 'unset',
        alignSelf: 'center'
      },
      field: { fontSize: '16px' }
    }
  };

  if (matchedCustomers.length > 0) {
    return (
      <CustomerSuggestions
        customers={matchedCustomers}
        onSelect={onSelectCustomer}
        selectedCustomer={selectedCustomer}
      />
    );
  }

  return (
    <Stack horizontalAlign="stretch" tokens={{ childrenGap: spacing.s1 }}>
      <Stack tokens={{ childrenGap: 16, padding: `16px 0` }}>
        <Text variant="xLarge">
          {formatMessage(messages.billingAddressTitle)}
        </Text>
      </Stack>
      <FormikTextField
        {...companyDetailsFormFields.customerCompany}
        required={true}
        styles={styles.textField}
      />
      <FormikComboBox
        {...companyDetailsFormFields.country}
        options={allCountryOptions}
        required={true}
        onChange={onCountryChange}
        useComboBoxAsMenuWidth
        defaultSelectedKey={defaultSelectedCountryKey}
      />
      <FormikTextField
        styles={styles.textField}
        {...companyDetailsFormFields.address}
        required={true}
      />
      <FormikTextField
        styles={styles.textField}
        {...companyDetailsFormFields.city}
        required={true}
      />
      {['US', 'CA'].includes(defaultSelectedCountryKey) && regionOptions ? (
        <FormikComboBox
          {...companyDetailsFormFields.state}
          options={regionOptions}
          label={regionLabel}
          required={true}
          useComboBoxAsMenuWidth
          placeholder={regionPlaceholder}
        />
      ) : (
        <FormikTextField
          {...companyDetailsFormFields.state}
          required={true}
          placeholder={regionPlaceholder}
          label={regionLabel}
        />
      )}
      <FormikTextField
        {...companyDetailsFormFields.postalCode}
        required={true}
      />
    </Stack>
  );
};
