import React, { useMemo } from 'react';

import { FormikContextType, useFormikContext } from 'formik';
import { useIntl } from 'react-intl';

import { FormikChoiceGroup } from '@components/formik-wrappers/formikChoiceGroup';
import { IChoiceGroupOption, IChoiceGroupStyles, Stack } from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';
import { StepFields } from '@widgets/checkout-new/checkout.types';
import { getPaymentMethodOptions } from '@widgets/checkout-new/steps/step-3-payment/paymentMethodChoiceGroup.helper';
import { Step3FormData } from '@widgets/checkout-new/steps/step-3-payment/step-3-payment';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';

type PaymentMethodChoiceGroupProps = {
  fields: Pick<
    StepFields<Step3FormData>,
    | 'paymentMethod'
    | 'creditCardNumber'
    | 'creditCardName'
    | 'creditCardCVV'
    | 'creditCardExpiration'
  >;
};

export const PaymentMethodChoiceGroup: React.FC<
  PaymentMethodChoiceGroupProps
> = ({ fields }) => {
  const { setFieldValue, values }: FormikContextType<Step3FormData> =
    useFormikContext();
  const { me } = useMe();
  const intl = useIntl();

  const paymentMethodOptions: IChoiceGroupOption[] = useMemo(() => {
    return getPaymentMethodOptions(me?.account?.paymentMethod, fields, intl);
  }, [fields, me?.account?.paymentMethod]);

  const defaultOptionKey = React.useMemo(() => {
    if (me?.account?.paymentMethod === PaymentMethod.PURCHASE_ORDER) {
      setFieldValue(fields.paymentMethod.name, PaymentMethod.PURCHASE_ORDER);
      return PaymentMethod.PURCHASE_ORDER;
    }
    setFieldValue(fields.paymentMethod.name, PaymentMethod.CREDIT_CARD);
    return PaymentMethod.CREDIT_CARD;
  }, [fields.paymentMethod.name, me?.account?.paymentMethod, setFieldValue]);

  const paymentMethodOptionKey: string | undefined = useMemo(() => {
    return paymentMethodOptions
      .find(option => option.value === values.paymentMethod)
      ?.key.toString();
  }, [paymentMethodOptions, values.paymentMethod]);

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
        <CheckoutFormGroupTitle title={fields.paymentMethod.label} />
      </Stack.Item>
      <Stack.Item>
        <FormikChoiceGroup
          name={fields.paymentMethod.name}
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
