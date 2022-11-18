import React, { useContext, useEffect } from 'react';

import valid from 'card-validator';
import { FormikContextType, useFormikContext } from 'formik';

import { FormikMaskedTextField } from '@components/formik-wrappers/formikMaskedTextField';
import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import {
  IChoiceGroupOption,
  IChoiceGroupOptionProps,
  IRenderFunction,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { StepFields } from '@widgets/checkout-new/checkout.types';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';
import { Step3FormData } from '@widgets/checkout-new/steps/step-3-payment/step-3-payment';
import { PaymentIcons } from '@widgets/payment-icons/paymentIcons';

export const CreditCardPaymentFormGroup: React.FC<{
  fields: Pick<
    StepFields<Step3FormData>,
    | 'creditCardNumber'
    | 'creditCardName'
    | 'creditCardCVV'
    | 'creditCardExpiration'
  >;
  props: IChoiceGroupOption | IChoiceGroupOptionProps | undefined;
  render: IRenderFunction<
    IChoiceGroupOption | IChoiceGroupOptionProps | undefined
  >;
}> = ({ fields, props, render }) => {
  const { spacing } = useTheme();
  const { values }: FormikContextType<Step3FormData> = useFormikContext();

  const { setCreditCardIssuer } = useCheckout();

  useEffect(() => {
    const result = valid.number(values.creditCardNumber);
    if (result.isValid && result.card?.type) {
      setCreditCardIssuer(result.card?.type);
    } else {
      setCreditCardIssuer('');
    }
  }, [setCreditCardIssuer, values.creditCardNumber]);

  const styles: IStackStyles = {
    root: {
      paddingLeft: '26px'
    }
  };

  const isChecked =
    props === undefined || !('checked' in props) ? false : props.checked;

  return (
    <Stack tokens={{ childrenGap: spacing.m }}>
      <Stack.Item>
        <Stack horizontal wrap={false} horizontalAlign="space-between">
          <Stack.Item>{render && render(props)}</Stack.Item>
          <Stack.Item>
            <PaymentIcons />
          </Stack.Item>
        </Stack>
      </Stack.Item>
      {isChecked && (
        <Stack.Item>
          <Stack
            tokens={{ childrenGap: spacing.m, padding: `0 0 ${spacing.l1}` }}
            horizontal
            verticalAlign="center"
            styles={styles}
          >
            <Stack tokens={{ childrenGap: spacing.s1 }}>
              <FormikTextField
                {...fields.creditCardNumber}
                required={true}
                iconProps={{ iconName: 'lock' }}
                maxLength={23}
                type="tel"
                inputMode="numeric"
              />
              <FormikTextField {...fields.creditCardName} required={true} />
              <Stack.Item>
                <Stack horizontal tokens={{ childrenGap: spacing.s1 }}>
                  <Stack.Item>
                    <FormikMaskedTextField
                      {...fields.creditCardExpiration}
                      mask={'99/99'}
                      required={true}
                      maskChar=""
                      maxLength={5}
                    />
                  </Stack.Item>
                  <Stack.Item>
                    <FormikTextField
                      {...fields.creditCardCVV}
                      iconProps={{ iconName: 'statusCircleQuestionMark' }}
                      required={true}
                      inputMode="numeric"
                      maxLength={4}
                    />
                  </Stack.Item>
                </Stack>
              </Stack.Item>
            </Stack>
          </Stack>
        </Stack.Item>
      )}
    </Stack>
  );
};
