import React, { useMemo } from 'react';

import { FormikContextType, useFormikContext } from 'formik';

import { FormikChoiceGroup } from '@components/formik-wrappers/formikChoiceGroup';
import { IChoiceGroupOption, IChoiceGroupStyles, Stack } from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';

import { CheckoutFormValues } from '../checkout-form/checkoutForm.types';
import { checkoutFormPaymentMethodFields } from '../checkout-form/checkoutFormHelper';
import { CheckoutFormGroupTitle } from '../shared/checkoutFormGroupTitle';
import { getPaymentMethodOptions } from './paymentMethodChoiceGroupHelper';

const messages = {
  paymentMethod: 'Payment Method'
};

export const PaymentMethodChoiceGroup: React.FC = () => {
  const { setFieldValue, values }: FormikContextType<CheckoutFormValues> =
    useFormikContext();
  const { me } = useMe();

  const paymentMethodOptions: IChoiceGroupOption[] = useMemo(() => {
    return getPaymentMethodOptions(me?.account?.paymentMethod);
  }, [me?.account?.paymentMethod]);

  const defaultOptionKey = React.useMemo(() => {
    if (me?.account?.paymentMethod === PaymentMethod.PURCHASE_ORDER) {
      setFieldValue(
        checkoutFormPaymentMethodFields.paymentMethod.name,
        PaymentMethod.PURCHASE_ORDER
      );
      return PaymentMethod.PURCHASE_ORDER;
    }
    setFieldValue(
      checkoutFormPaymentMethodFields.paymentMethod.name,
      PaymentMethod.CREDIT_CARD
    );
    return PaymentMethod.CREDIT_CARD;
  }, [me?.account?.paymentMethod, setFieldValue]);

  const paymentMethodOptionValue: PaymentMethod | undefined = useMemo(() => {
    return values.paymentMethod;
  }, [values]);

  const paymentMethodOptionKey: string | undefined = useMemo(() => {
    return paymentMethodOptions
      .find(option => option.value === paymentMethodOptionValue)
      ?.key.toString();
  }, [paymentMethodOptionValue, paymentMethodOptions]);

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
        <CheckoutFormGroupTitle title={messages.paymentMethod} />
      </Stack.Item>
      <Stack.Item>
        <FormikChoiceGroup
          name={checkoutFormPaymentMethodFields.paymentMethod.name}
          options={paymentMethodOptions}
          styles={styles}
          selectedKey={paymentMethodOptionKey}
          defaultValue={defaultOptionKey}
          defaultSelectedKey={defaultOptionKey}
        />
      </Stack.Item>
    </Stack>
  );
};
