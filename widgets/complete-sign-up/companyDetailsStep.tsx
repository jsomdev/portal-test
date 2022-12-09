import { FormikComboBox } from '@components/formik-wrappers/formikComboBox';
import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import {
  IComboBoxStyles,
  IDropdownOption,
  ITextFieldStyles,
  ITextStyles,
  Stack,
  Text
} from '@fluentui/react';
import { MatchedCustomer } from '@services/portal-api/models/MatchCustomerResponse';
import { allCountryOptions } from '@utilities/places';

import { companyDetailsFormFields } from './constants';
import { CustomerSuggestions } from './customerSuggestions';

interface CompanyDetailsStepStyles {
  title: ITextStyles;
  description: ITextStyles;
  textField: Partial<ITextFieldStyles>;
  comboBox: Partial<IComboBoxStyles>;
}
interface CompanyDetailsStepProps {
  matchedCustomers: MatchedCustomer[];
  selectedCustomer: MatchedCustomer | undefined;
  onSelectCustomer: (customer: MatchedCustomer) => void;
}
// TODO: i18n
const messages = {
  title: 'Billing Address',
  description: 'Please provide the name and billing address of your company.',
  titleBillingAddress: 'Company Billing Address'
};

export const CompanyBillingAddressStep: React.FC<CompanyDetailsStepProps> = ({
  matchedCustomers,
  selectedCustomer,
  onSelectCustomer
}) => {
  // TODO: Conventions to Styling
  const styles: CompanyDetailsStepStyles = {
    title: { root: {} },
    description: {
      root: {}
    },
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
    <Stack horizontalAlign="stretch">
      <Stack tokens={{ childrenGap: 16, padding: `16px 0` }}>
        <Text variant="xLarge" styles={styles.title}>
          {messages.title}
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
        styles={styles.comboBox}
        defaultSelectedKey="US"
        useComboBoxAsMenuWidth
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
      <FormikTextField
        styles={styles.textField}
        {...companyDetailsFormFields.state}
        required={true}
      />

      <FormikTextField
        styles={styles.textField}
        {...companyDetailsFormFields.zipCode}
        required={true}
      />
    </Stack>
  );
};
