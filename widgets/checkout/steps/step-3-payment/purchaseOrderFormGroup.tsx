import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import {
  IChoiceGroupOption,
  IChoiceGroupOptionProps,
  IRenderFunction,
  IStackStyles,
  ITextFieldStyles,
  MessageBar,
  MessageBarType,
  Stack,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { StepFields } from '@widgets/checkout/shared/types';
import { Step3FormData } from '@widgets/checkout/steps/step-3-payment/step-3-payment';
import { mediaQueryFrom } from '@widgets/media-queries';

const messages = defineMessages({
  info: {
    id: messageIds.pages.checkout.payment.purchaseOrderInfo,
    defaultMessage:
      'All Pay by Invoice purchases are reviewed and subject to the status and credit available to the account.'
  }
});

interface PurchaseOrderFormGroupStyles {
  textField: Partial<ITextFieldStyles>;
  container: IStackStyles;
}

type PurchaseOrderFormGroupProps = {
  props: (IChoiceGroupOption & IChoiceGroupOptionProps) | undefined;
  render: IRenderFunction<
    (IChoiceGroupOption & IChoiceGroupOptionProps) | undefined
  >;
  fields: Pick<StepFields<Step3FormData>, 'referenceNumber'>;
};

export const PurchaseOrderFormGroup: React.FC<PurchaseOrderFormGroupProps> = ({
  props,
  render,
  fields
}) => {
  const { formatMessage } = useIntl();
  const { spacing } = useTheme();

  const styles: PurchaseOrderFormGroupStyles = {
    container: {
      root: {
        ...mediaQueryFrom('tablet', {
          paddingLeft: '26px'
        }),
        width: '100%'
      }
    },
    textField: {
      root: {
        width: '100%',
        maxWidth: 350
      }
    }
  };

  const isChecked =
    props === undefined || !('checked' in props) ? false : props.checked;

  return (
    <Stack tokens={{ childrenGap: spacing.m }}>
      <Stack.Item>{render && render(props)}</Stack.Item>
      {isChecked && (
        <Stack
          tokens={{ childrenGap: spacing.m, padding: `0 0 ${spacing.l1}` }}
          verticalAlign="center"
          styles={styles.container}
        >
          <MessageBar messageBarType={MessageBarType.info}>
            {formatMessage(messages.info)}
          </MessageBar>
          <FormikTextField
            {...fields.referenceNumber}
            required={true}
            styles={styles.textField}
          />
        </Stack>
      )}
    </Stack>
  );
};
