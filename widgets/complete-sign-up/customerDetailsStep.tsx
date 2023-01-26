import { useMemo, useState } from 'react';

import { FieldArray, useFormikContext } from 'formik';
import { useIntl } from 'react-intl';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import {
  ActionButton,
  IImageStyles,
  ITextFieldStyles,
  IconButton,
  Image,
  Label,
  Modal,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { defineMessages } from '@formatjs/intl';
import { STATIC_IMAGES } from '@public/media/images';
import { messageIds } from '@services/i18n';

import { CompleteSignUpFormValues } from './completeSignUp.types';
import { getCustomerDetailsFormFields } from './constants';
import { CustomerDetailsLabel } from './customerDetailsLabel';

const messages = defineMessages({
  existingCustomerTitle: {
    id: messageIds.signupFlow.existingCustomerTitle,
    defaultMessage: 'Already with Spraying Systems Co.?'
  },
  addInvoiceButton: {
    id: messageIds.signupFlow.addInvoiceButton,
    defaultMessage: 'Add another invoice number'
  },
  tooltipLabel: {
    id: messageIds.signupFlow.tooltipLabel,
    defaultMessage: 'Where can I find this?'
  },
  customerNumberTitle: {
    id: messageIds.signupFlow.customerNumberTitle,
    defaultMessage: 'Customer Number'
  },
  invoiceNumberTitle: {
    id: messageIds.signupFlow.invoiceNumberTitle,
    defaultMessage: 'Invoice Number'
  },
  customerNumberDescription: {
    id: messageIds.signupFlow.customerNumberDescription,
    defaultMessage:
      "Your customer number can be found on the left side of any Spraying Systems Co. invoice. It's a 7-digit number shown as 'CUST NO'."
  },
  invoiceNumberDescription: {
    id: messageIds.signupFlow.invoiceNumberDescription,
    defaultMessage:
      "An invoice number can be found in the upper right hand corner of any Spraying Systems Co. invoice. It's a 7-character string shown as 'INVOICE NO' (Two letters followed by five digits)."
  }
});

interface CustomerInformationStepStyles {
  textField: Partial<ITextFieldStyles>;
  modalImage: Partial<IImageStyles>;
}

export const CustomerInformationStep: React.FC = () => {
  const { values } = useFormikContext<CompleteSignUpFormValues>();
  const [showModal, setShowModal] = useState<'invoice' | 'both' | false>(false);
  const { formatMessage } = useIntl();
  const { spacing } = useTheme();

  const customerDetailsFormFields = useMemo(() => {
    return getCustomerDetailsFormFields(formatMessage);
  }, [formatMessage]);

  const styles: CustomerInformationStepStyles = {
    textField: {
      root: {
        width: '100%'
      },
      fieldGroup: {
        height: 40
      },
      icon: {
        position: 'relative',
        top: 'unset',
        bottom: 'unset',
        alignSelf: 'center'
      },
      field: { fontSize: '16px' }
    },
    modalImage: {
      root: {
        maxWidth: '100%'
      },
      image: {
        maxWidth: '100%'
      }
    }
  };

  return (
    <Stack horizontalAlign="stretch" tokens={{ childrenGap: spacing.s1 }}>
      <Stack tokens={{ childrenGap: spacing.m, padding: `${spacing.m} 0` }}>
        <Text variant="xLarge">
          {formatMessage(messages.existingCustomerTitle)}
        </Text>
      </Stack>
      <CustomerDetailsLabel
        modalTitle={formatMessage(messages.customerNumberTitle)}
        modalText={formatMessage(messages.customerNumberDescription)}
        labelText={customerDetailsFormFields.customerNumber.label}
        modalImage={STATIC_IMAGES.profile.invoices.customerNumber.src}
      />

      <FormikTextField
        styles={styles.textField}
        {...customerDetailsFormFields.customerNumber}
        onRenderLabel={() => {
          return null;
        }}
      />
      <FieldArray name={customerDetailsFormFields.invoiceNumbers.name}>
        {({ remove, push }) => (
          <Stack tokens={{ childrenGap: spacing.s2 }} horizontalAlign="stretch">
            {!!values.invoiceNumbers?.length &&
              values.invoiceNumbers.map((item, index) => (
                <Stack
                  horizontal
                  key={index}
                  verticalAlign="center"
                  tokens={{ childrenGap: spacing.s1 }}
                >
                  <FormikTextField
                    {...customerDetailsFormFields.invoiceNumbers}
                    name={`${customerDetailsFormFields.invoiceNumbers.name}.${index}`}
                    onRenderLabel={() => {
                      if (index === 0) {
                        return (
                          <Stack>
                            <Stack.Item>
                              <Stack
                                horizontal
                                verticalAlign="center"
                                tokens={{ childrenGap: spacing.s1 }}
                              >
                                <Label>
                                  {
                                    customerDetailsFormFields.invoiceNumbers
                                      .label
                                  }
                                </Label>
                                <ActionButton
                                  onClick={() => {
                                    setShowModal('invoice');
                                  }}
                                >
                                  {formatMessage(messages.tooltipLabel)}
                                  <Modal
                                    isOpen={!!showModal}
                                    onDismiss={() => {
                                      setShowModal(false);
                                    }}
                                    isBlocking={false}
                                  >
                                    <Stack
                                      tokens={{
                                        childrenGap: spacing.l1,
                                        padding: spacing.l1,
                                        maxWidth: 660
                                      }}
                                    >
                                      <Stack.Item>
                                        <Stack
                                          horizontal
                                          horizontalAlign="space-between"
                                        >
                                          <Stack.Item>
                                            <Text variant="xLarge">
                                              {formatMessage(
                                                messages.invoiceNumberTitle
                                              )}
                                            </Text>
                                          </Stack.Item>
                                          <Stack.Item>
                                            <IconButton
                                              iconProps={{
                                                iconName: 'ChromeClose'
                                              }}
                                              onClick={() =>
                                                setShowModal(false)
                                              }
                                            />
                                          </Stack.Item>
                                        </Stack>
                                      </Stack.Item>
                                      <Stack.Item>
                                        <Text>
                                          {formatMessage(
                                            messages.invoiceNumberDescription
                                          )}
                                        </Text>
                                      </Stack.Item>
                                      <Stack.Item>
                                        <Image
                                          styles={styles.modalImage}
                                          src={
                                            STATIC_IMAGES.profile.invoices
                                              .invoiceNumber.src
                                          }
                                        />
                                      </Stack.Item>
                                    </Stack>
                                  </Modal>
                                </ActionButton>
                              </Stack>
                            </Stack.Item>
                          </Stack>
                        );
                      }
                      return null;
                    }}
                    styles={styles.textField}
                  />
                  {index > 0 && (
                    <IconButton
                      size={14}
                      iconProps={{ iconName: 'Delete' }}
                      onClick={() => remove(index)}
                    />
                  )}
                </Stack>
              ))}

            <ActionButton
              iconProps={{ iconName: 'Add' }}
              text={formatMessage(messages.addInvoiceButton)}
              onClick={() => push('')}
            />
          </Stack>
        )}
      </FieldArray>
    </Stack>
  );
};
