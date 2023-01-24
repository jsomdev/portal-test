import React, { CSSProperties, useContext, useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { FormikFileField } from '@components/formik-wrappers/formikFileField';
import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { PortalMessageBar } from '@components/messages/portalMessageBar';
import {
  IButtonStyles,
  IChoiceGroupOption,
  IChoiceGroupOptionProps,
  IIconStyles,
  ILabelStyles,
  IRenderFunction,
  IStackStyles,
  ITextFieldStyles,
  MessageBarType,
  Stack,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { CheckoutContext } from '@widgets/checkout/checkoutProvider/checkoutContext';
import { StepFields } from '@widgets/checkout/shared/types';
import { Step3FormData } from '@widgets/checkout/steps/step-3-payment/step-3-payment';
import { mediaQueryFrom } from '@widgets/media-queries';

const messages = defineMessages({
  info: {
    id: messageIds.pages.checkout.payment.purchaseOrderInfo,
    defaultMessage:
      'All Pay by Invoice purchases are reviewed and subject to the status and credit available to the account. Uploading a document is not required, but it will help us process your order faster.'
  },
  fileUpload: {
    id: messageIds.pages.checkout.payment.fileUpload,
    defaultMessage: 'Upload a PO document',
    description: 'Label for file upload input'
  },
  referenceDocument: {
    id: messageIds.pages.checkout.payment.fields.referenceDocument,
    defaultMessage: 'Upload PO Document'
  }
});

interface PurchaseOrderFormGroupStyles {
  textField: Partial<ITextFieldStyles>;
  container: IStackStyles;
  inputField: CSSProperties;
  removeButton: IButtonStyles;
  uploadLabel: ILabelStyles;
  fileUploadIcon: IIconStyles;
  fileUploadContainer: IStackStyles;
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
  const { spacing, palette, fonts } = useTheme();
  const { setPurchaseOrderFile } = useContext(CheckoutContext);
  const isChecked =
    props === undefined || !('checked' in props) ? false : props.checked;

  const fileField = useMemo(() => {
    return {
      label: formatMessage(messages.referenceDocument),
      name: 'referenceDocument'
    };
  }, [formatMessage]);

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
    },
    inputField: {
      display: 'none'
    },
    removeButton: {
      root: {
        width: 20,
        height: 36,
        borderLeft: 'none',
        borderRadius: 0,
        padding: 0,
        minWidth: 40
      }
    },
    uploadLabel: {
      root: {
        border: `1px solid ${palette.neutralSecondaryAlt}`,
        padding: `${spacing.s1} ${spacing.m}`,
        width: '100%',
        height: 36,
        cursor: 'pointer',
        textAlign: 'center'
      }
    },
    fileUploadIcon: {
      root: {
        fontSize: fonts.large.fontSize
      }
    },
    fileUploadContainer: {
      root: {
        width: '100%',
        maxWidth: 350
      }
    }
  };

  return (
    <Stack tokens={{ childrenGap: spacing.m }}>
      <Stack.Item>{render && render(props)}</Stack.Item>

      {isChecked && (
        <Stack
          tokens={{ childrenGap: spacing.m, padding: `0 0 ${spacing.l1}` }}
          verticalAlign="center"
          styles={styles.container}
        >
          <PortalMessageBar messageBarType={MessageBarType.info}>
            {formatMessage(messages.info)}
          </PortalMessageBar>
          <FormikTextField
            {...fields.referenceNumber}
            styles={styles.textField}
            required
          />
          <FormikFileField
            fieldProps={fileField}
            onChange={setPurchaseOrderFile}
          />
        </Stack>
      )}
    </Stack>
  );
};
