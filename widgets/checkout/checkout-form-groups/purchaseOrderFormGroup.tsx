import React from 'react';

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

import { checkoutFormFields } from '../checkout-form/checkoutFormHelper';

const messages = {
  info: 'All Pay by Invoice purchases are reviewed and subject to the status and credit available to the account.'
};

interface PurchaseOrderFormGroupStyles {
  textField: Partial<ITextFieldStyles>;
  container: IStackStyles;
}

export const PurchaseOrderFormGroup: React.FC<{
  props: IChoiceGroupOption | IChoiceGroupOptionProps | undefined;
  render: IRenderFunction<
    IChoiceGroupOption | IChoiceGroupOptionProps | undefined
  >;
}> = ({ props, render }) => {
  const { spacing } = useTheme();

  const styles: PurchaseOrderFormGroupStyles = {
    container: {
      root: {
        paddingLeft: '26px',
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
            {messages.info}
          </MessageBar>
          <FormikTextField
            {...checkoutFormFields.referenceNumber}
            required={true}
            styles={styles.textField}
          />
        </Stack>
      )}
    </Stack>
  );
};
