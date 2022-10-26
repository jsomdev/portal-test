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
import { billingAddressOptions } from './billingChoiceGroupHelper';

export const BillingAddressChoiceGroup: React.FC = () => {
  const messages = {
    billingAddress: 'Billing Address'
  };
  const { values } = useFormikContext<CheckoutFormValues>();

  const billingAddressOptionValue: 'yes' | 'no' = useMemo(() => {
    return values.shippingAddressAsBillingAddress;
  }, [values]);

  const billingAddressOptionKey: string | undefined = useMemo(() => {
    return billingAddressOptions
      .find(option => option.value === billingAddressOptionValue)
      ?.key.toString();
  }, [billingAddressOptionValue]);

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
        <CheckoutFormGroupTitle title={messages.billingAddress} />
      </Stack.Item>
      <Stack.Item>
        <FormikChoiceGroup
          name={checkoutFormFields.shippingAddressAsBillingAddress.name}
          options={billingAddressOptions}
          styles={styles}
          selectedKey={billingAddressOptionKey}
          defaultValue={checkoutFormValues.shippingAddressAsBillingAddress}
          defaultSelectedKey={
            checkoutFormValues.shippingAddressAsBillingAddress
          }
        />
      </Stack.Item>
    </Stack>
  );
};
