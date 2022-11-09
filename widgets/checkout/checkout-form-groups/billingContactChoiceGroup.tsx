import React, { useMemo } from 'react';

import { useFormikContext } from 'formik';

import { FormikChoiceGroup } from '@components/formik-wrappers/formikChoiceGroup';
import { IChoiceGroupStyles, Stack } from '@fluentui/react';

import { CheckoutFormValues } from '../checkout-form/checkoutForm.types';
import {
  checkoutFormFields,
  checkoutFormValues
} from '../checkout-form/checkoutFormHelper';
import { CheckoutFormGroupTitle } from '../shared/checkoutFormGroupTitle';
import {
  billingAddressOptions,
  billingContactOptions
} from './billingChoiceGroupHelper';

const messages = {
  billingContact: 'Billing Contact'
};

export const BillingContactChoiceGroup: React.FC = () => {
  const { values } = useFormikContext<CheckoutFormValues>();

  const billingContactOptionValue: 'yes' | 'no' = useMemo(() => {
    return values.shippingContactAsBillingContact;
  }, [values]);

  const billingContactOptionKey: string | undefined = useMemo(() => {
    return billingAddressOptions
      .find(option => option.value === billingContactOptionValue)
      ?.key.toString();
  }, [billingContactOptionValue]);

  const styles: IChoiceGroupStyles = {
    root: {
      selectors: {
        '.ms-ChoiceField-wrapper': {
          width: '100%'
        },
        '.ms-ChoiceField-input': {
          cursor: 'pointer'
        }
      }
    }
  };

  return (
    <Stack>
      <Stack.Item>
        <CheckoutFormGroupTitle title={messages.billingContact} />
      </Stack.Item>
      <Stack.Item>
        <FormikChoiceGroup
          name={checkoutFormFields.shippingContactAsBillingContact.name}
          options={billingContactOptions}
          styles={styles}
          selectedKey={billingContactOptionKey}
          defaultValue={checkoutFormValues.shippingContactAsBillingContact}
          defaultSelectedKey={
            checkoutFormValues.shippingContactAsBillingContact
          }
        />
      </Stack.Item>
    </Stack>
  );
};
