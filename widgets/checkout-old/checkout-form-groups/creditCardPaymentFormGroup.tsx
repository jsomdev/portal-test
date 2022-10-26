import React, { useContext, useState } from 'react';

import { FormikContextType, useFormikContext } from 'formik';

import { FormikMaskedTextField } from '@components/formik-wrappers/formikMaskedTextField';
import { FormikTextField } from '@components/formik-wrappers/formikTextField';
//TODO ward import Cards, { CallbackArgument } from 'react-credit-cards';
import {
  IChoiceGroupOptionProps,
  IRenderFunction,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { IChoiceGroupOption } from '@fluentui/react/lib/components/ChoiceGroup/ChoiceGroup.types';
import { PaymentIcons } from '@widgets/payment-icons/paymentIcons';

import { CheckoutFormValues } from '../checkout-form/checkoutForm.types';
import { checkoutFormFields } from '../checkout-form/checkoutFormHelper';
import { CheckoutFormContext } from '../shared/checkoutFormContext';

//TODO ward: handle this...
//import './creditCard.scss';

export const CreditCardPaymentFormGroup: React.FC<{
  props: IChoiceGroupOption | IChoiceGroupOptionProps | undefined;
  render: IRenderFunction<
    IChoiceGroupOption | IChoiceGroupOptionProps | undefined
  >;
}> = ({ props, render }) => {
  const { spacing } = useTheme();
  const { values }: FormikContextType<CheckoutFormValues> = useFormikContext();
  const [activeField, setActiveField] = useState<string>('');
  const { setCreditCardIssuer } = useContext(CheckoutFormContext);

  function handleFocus(field: string) {
    setActiveField(field);
  }

  const styles: IStackStyles = {
    root: {
      paddingLeft: '26px'
    }
  };
  //TODO ward: check why I have to do this...
  if (props === undefined || !('checked' in props)) {
    return <div>This should not happen</div>;
  }

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
      {props?.checked && (
        <Stack.Item>
          <Stack
            tokens={{ childrenGap: spacing.m, padding: `0 0 ${spacing.l1}` }}
            horizontal
            verticalAlign="center"
            styles={styles}
          >
            <Stack>
              {/* TODO ward <Cards
                cvc={values.creditCardCVV}
                expiry={values.creditCardExpiration}
                focused={
                  activeField === checkoutFormFields.creditCardCVV.name
                    ? 'cvc'
                    : 'name'
                }
                name={values.creditCardName}
                number={values.creditCardNumber}
                callback={(type: CallbackArgument) => {
                  setCreditCardIssuer(type.issuer);
                }}
              />*/}
            </Stack>
            <Stack tokens={{ childrenGap: spacing.s1 }}>
              <FormikTextField
                {...checkoutFormFields.creditCardNumber}
                required={true}
                iconProps={{ iconName: 'lock' }}
                onFocus={e => {
                  handleFocus(e.target.name);
                }}
                maxLength={23}
                type="tel"
                inputMode="numeric"
              />
              <FormikTextField
                {...checkoutFormFields.creditCardName}
                required={true}
                onFocus={e => {
                  handleFocus(e.target.name);
                }}
              />
              <Stack.Item>
                <Stack horizontal tokens={{ childrenGap: spacing.s1 }}>
                  <FormikMaskedTextField
                    {...checkoutFormFields.creditCardExpiration}
                    mask={'99/99'}
                    required={true}
                    maskChar=""
                    maxLength={5}
                    onFocus={e => {
                      handleFocus(e.target.name);
                    }}
                  />
                  <FormikTextField
                    {...checkoutFormFields.creditCardCVV}
                    iconProps={{ iconName: 'statusCircleQuestionMark' }}
                    required={true}
                    inputMode="numeric"
                    maxLength={4}
                    onFocus={e => {
                      handleFocus(e.target.name);
                    }}
                  />
                </Stack>
              </Stack.Item>
            </Stack>
          </Stack>
        </Stack.Item>
      )}
    </Stack>
  );
};
