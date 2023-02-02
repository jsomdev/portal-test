import React, { useEffect } from 'react';

import valid from 'card-validator';
import { FormikContextType, useFormikContext } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

import { FormikMaskedTextField } from '@components/formik-wrappers/formikMaskedTextField';
import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import {
  Callout,
  FontWeights,
  IButtonStyles,
  IChoiceGroupOption,
  IChoiceGroupOptionProps,
  IRenderFunction,
  IStackStyles,
  ITextFieldProps,
  ITextStyles,
  IconButton,
  Label,
  Stack,
  useTheme
} from '@fluentui/react';
import { useBoolean, useId } from '@fluentui/react-hooks';
import { messageIds } from '@services/i18n';
import { useCheckout } from '@widgets/checkout/checkoutProvider/checkoutProvider';
import { StepFields } from '@widgets/checkout/shared/types';
import { Step3FormData } from '@widgets/checkout/steps/step-3-payment/step-3-payment';
import { mediaQueryFrom } from '@widgets/media-queries';
import { PaymentIcons } from '@widgets/payment-icons/paymentIcons';

const messages = defineMessages({
  cvvInfo: {
    id: messageIds.pages.checkout.payment.fields.creditCardCVVInfo,
    defaultMessage: `The verification code (also known as CVC/CVV) is a 3-digit code, located on the back of your credit card, at the end of the signature field.`
  }
});

type LabelWithInfoStyles = {
  iconButtonStyles: Partial<IButtonStyles>;
  labelCalloutStackStyles: Partial<IStackStyles>;
  label: ITextStyles;
};

const LabelWithInfo = (
  props: ITextFieldProps & {
    info: string;
  }
): JSX.Element => {
  const { spacing } = useTheme();
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] =
    useBoolean(false);
  const descriptionId: string = useId('description');
  const iconButtonId: string = useId('iconButton');
  const styles: LabelWithInfoStyles = {
    iconButtonStyles: {
      root: {
        height: '20px'
      }
    },
    labelCalloutStackStyles: {
      root: { padding: 20 }
    },
    label: {
      root: { fontWeight: FontWeights.semibold }
    }
  };

  return (
    <>
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{
          childrenGap: spacing.s1,
          maxWidth: 300
        }}
      >
        <Label>{props.label}</Label>
        <IconButton
          id={iconButtonId}
          iconProps={{ iconName: 'Info' }}
          title="Info"
          ariaLabel="Info"
          onClick={toggleIsCalloutVisible}
          styles={styles.iconButtonStyles}
        />
      </Stack>
      {isCalloutVisible && (
        <Callout
          target={'#' + iconButtonId}
          setInitialFocus
          onDismiss={toggleIsCalloutVisible}
          ariaDescribedBy={descriptionId}
          role="alertdialog"
        >
          <Stack
            tokens={{
              childrenGap: 4,
              maxWidth: 300
            }}
            horizontalAlign="start"
            styles={styles.labelCalloutStackStyles}
          >
            <span id={descriptionId}>{props.info}</span>
          </Stack>
        </Callout>
      )}
    </>
  );
};

export const CreditCardPaymentFormGroup: React.FC<{
  fields: Pick<
    StepFields<Step3FormData>,
    | 'creditCardNumber'
    | 'creditCardName'
    | 'creditCardCVV'
    | 'creditCardExpiration'
  >;
  props: (IChoiceGroupOption & IChoiceGroupOptionProps) | undefined;
  render: IRenderFunction<
    (IChoiceGroupOption & IChoiceGroupOptionProps) | undefined
  >;
}> = ({ fields, props, render }) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  const { values }: FormikContextType<Step3FormData> = useFormikContext();

  const { setCreditCardIssuer } = useCheckout();

  const labelId: string = useId('label');
  const onRenderCVVLabel = (props: ITextFieldProps | undefined) => (
    <LabelWithInfo
      id={labelId}
      info={formatMessage(messages.cvvInfo)}
      {...props}
    />
  );

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
      ...mediaQueryFrom('tablet', {
        paddingLeft: '26px'
      })
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
                      onRenderLabel={onRenderCVVLabel}
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
