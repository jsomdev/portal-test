import { useState } from 'react';

import { FieldArray, useFormikContext } from 'formik';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import {
  ActionButton,
  IconButton,
  IImageStyles,
  Image,
  ITextFieldStyles,
  ITextStyles,
  Label,
  Modal,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';

import { CompleteSignUpFormValues } from './completeSignUp.types';
import { customerDetailsFormFields } from './constants';
import { CustomerDetailsLabel } from './customerDetailsLabel';

// TODO: i18n
const messages = {
  title: 'Already with Spraying Systems Co.?',
  addInvoiceNumber: 'Add another invoice number',
  moreInfo: 'Where can I find this?',
  customerNumberTitle: 'Customer Number',
  invoiceNumberTitle: 'Invoice Number',
  customerNumberModalText:
    "Your customer number can be found on the left side of any Spraying Systems Co. invoice. It's a 7-digit number shown as 'CUST NO'.",
  invoiceNumberModalText:
    "An invoice number can be found in the upper right hand corner of any Spraying Systems Co. invoice. It's a 7-character string shown as 'INVOICE NO' (Two letters followed by five digits)."
};

interface CustomerInformationStepStyles {
  title: ITextStyles;
  description: ITextStyles;
  textField: Partial<ITextFieldStyles>;
  modalImage: Partial<IImageStyles>;
}

export const CustomerInformationStep: React.FC = () => {
  const { values } = useFormikContext<CompleteSignUpFormValues>();
  const [showModal, setShowModal] = useState<'invoice' | 'both' | false>(false);

  const { spacing } = useTheme();
  // TODO: Styling conventions
  const styles: CustomerInformationStepStyles = {
    title: { root: {} },

    description: {
      root: {}
    },
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
    <Stack horizontalAlign="stretch">
      <Stack tokens={{ childrenGap: spacing.m, padding: `${spacing.m} 0` }}>
        <Text variant="xLarge" styles={styles.title}>
          {messages.title}
        </Text>
      </Stack>
      <CustomerDetailsLabel
        modalTitle={messages.customerNumberTitle}
        modalText={messages.customerNumberModalText}
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
                                  {messages.moreInfo}
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
                                              {messages.invoiceNumberTitle}
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
                                          {messages.invoiceNumberModalText}
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
                      onClick={ev => remove(index)}
                    />
                  )}
                </Stack>
              ))}

            <ActionButton
              iconProps={{ iconName: 'Add' }}
              text={messages.addInvoiceNumber}
              onClick={ev => push('')}
            />
          </Stack>
        )}
      </FieldArray>
    </Stack>
  );
};
