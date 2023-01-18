import React, { CSSProperties } from 'react';

import { Field, useFormikContext } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { PortalMessageBar } from '@components/messages/portalMessageBar';
import {
  DefaultButton,
  FontWeights,
  IButtonStyles,
  IChoiceGroupOption,
  IChoiceGroupOptionProps,
  ILabelStyles,
  IRenderFunction,
  IStackStyles,
  ITextFieldStyles,
  Icon,
  Label,
  MessageBarType,
  Stack,
  Text,
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
      'All Pay by Invoice purchases are reviewed and subject to the status and credit available to the account. Uploading a document is not required, but it will help us process your order faster.'
  }
});

interface PurchaseOrderFormGroupStyles {
  textField: Partial<ITextFieldStyles>;
  container: IStackStyles;
  inputField: CSSProperties;
  removeButton: IButtonStyles;
  uploadLabel: ILabelStyles;
}

type PurchaseOrderFormGroupProps = {
  props: (IChoiceGroupOption & IChoiceGroupOptionProps) | undefined;
  render: IRenderFunction<
    (IChoiceGroupOption & IChoiceGroupOptionProps) | undefined
  >;
  fields: Pick<
    StepFields<Step3FormData>,
    'referenceNumber' | 'referenceDocument' | 'referenceDocumentFile'
  >;
};

export const PurchaseOrderFormGroup: React.FC<PurchaseOrderFormGroupProps> = ({
  props,
  render,
  fields
}) => {
  const { formatMessage } = useIntl();
  const { spacing, palette } = useTheme();
  const { values, setFieldValue } = useFormikContext<Step3FormData>();

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
          <PortalMessageBar messageBarType={MessageBarType.info}>
            {formatMessage(messages.info)}
          </PortalMessageBar>
          <FormikTextField
            {...fields.referenceNumber}
            styles={styles.textField}
            required
          />
          <Stack>
            <Label>{fields.referenceDocumentFile.label}</Label>
            <Field
              {...fields.referenceDocument}
              type="file"
              id="purchaseOrderFileUpload"
              onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue(
                  fields.referenceDocumentFile.name,
                  event?.currentTarget?.files?.[0]
                );
              }}
              style={styles.inputField}
            />
            <Stack
              horizontal
              verticalAlign="center"
              styles={{ root: { maxWidth: 350 } }}
            >
              <Label
                styles={styles.uploadLabel}
                htmlFor="purchaseOrderFileUpload"
              >
                <Stack
                  horizontal
                  tokens={{ childrenGap: spacing.s1 }}
                  verticalAlign="center"
                  horizontalAlign="center"
                >
                  <Icon
                    iconName={
                      values.referenceDocumentFile?.name
                        ? 'FolderHorizontal'
                        : 'CloudUpload'
                    }
                    styles={{
                      root: {
                        fontSize: 18
                      }
                    }}
                  />
                  <Text styles={{ root: { fontWeight: FontWeights.regular } }}>
                    {values.referenceDocumentFile?.name ||
                      'Upload a PO document'}
                  </Text>
                </Stack>
              </Label>
              {values.referenceDocumentFile?.name && (
                <DefaultButton
                  iconProps={{ iconName: 'Cancel' }}
                  styles={styles.removeButton}
                  onClick={() => {
                    setFieldValue(fields.referenceDocumentFile.name, undefined);
                  }}
                />
              )}
            </Stack>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
