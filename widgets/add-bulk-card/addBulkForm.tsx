import React, { useMemo, useState } from 'react';

import { FieldArray, Form, useFormikContext } from 'formik';
import { defineMessages, useIntl } from 'react-intl';
import { useMutation } from 'react-query';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import {
  ActionButton,
  DefaultButton,
  IconButton,
  MessageBar,
  MessageBarType,
  Stack
} from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';
import { BaseCartItem } from '@providers/cart/cartModels';
import { messageIds } from '@services/i18n';

import { AddBulkFormStyles } from './addBulkForm.types';
import {
  mergeProductsWithBulkFormValues,
  validateProductNumbers
} from './addBulkFormHelpers';

const messages = defineMessages({
  quantityPrefix: {
    id: messageIds.pages.cart.addBulkCard.quantityPrefix,
    description: 'Prefix for quantity field on cart bulk insert card',
    defaultMessage: 'Qty'
  },
  entryButton: {
    id: messageIds.pages.cart.addBulkCard.entryButton,
    description: 'Button to add another entry on cart bulk insert card',
    defaultMessage: 'Entry'
  },
  resetButton: {
    id: messageIds.pages.cart.addBulkCard.resetButton,
    description: 'Button to reset form on cart bulk insert card',
    defaultMessage: 'Reset'
  },
  addToCartButton: {
    id: messageIds.pages.cart.addBulkCard.addToCartButton,
    description: 'Button to add to cart on cart bulk insert card',
    defaultMessage: 'Add to cart'
  },
  addToCartButtonInProgress: {
    id: messageIds.pages.cart.addBulkCard.addToCartButtonInProgress,
    description:
      'Button to add to cart on cart bulk insert card when in progress',
    defaultMessage: 'Adding...'
  },
  productNumberPlaceholder: {
    id: messageIds.pages.cart.addBulkCard.productNumberPlaceholder,
    description:
      'Placeholder for product number field on cart bulk insert card',
    defaultMessage: 'Product Number'
  },
  bulkAllCompleteMessage: {
    id: messageIds.pages.cart.addBulkCard.bulkAllCompleteMessage,
    description:
      'Message to show when all products have been added on cart bulk insert card',
    defaultMessage: 'All products have been added to the cart.'
  },
  bulkPartialCompleteMessage: {
    id: messageIds.pages.cart.addBulkCard.bulkPartialCompleteMessage,
    description:
      'Message to show when some products have been added on cart bulk insert card',
    defaultMessage: 'Some products were added to the cart: {productNumbers}.'
  },
  bulkFailMessage: {
    id: messageIds.pages.cart.addBulkCard.bulkFailMessage,
    description:
      'Message to show when products have failed to add on cart bulk insert card',
    defaultMessage:
      'Following products could not be added to the cart: {productNumbers}'
  },
  warningDialogTitle: {
    id: messageIds.pages.cart.addBulkCard.warningDialogTitle,
    description: 'Title for warning dialog on cart bulk insert card',
    defaultMessage: 'Some items have not been added'
  }
});

export const AddBulkToCartForm: React.FC = () => {
  const { formatMessage } = useIntl();
  const [validProductNumbers, setValidProductNumbers] = useState<string[]>([]);
  const [invalidProductNumbers, setInvalidProductNumbers] = useState<string[]>(
    []
  );
  const { values, resetForm } = useFormikContext<{
    items: BaseCartItem[];
  }>();
  const { merge } = useCart();

  const validateBulk = useMutation(validateProductNumbers, {
    onSuccess: ({
      validProducts,
      validProductNumbers,
      invalidProductNumbers
    }) => {
      const mappedItems = mergeProductsWithBulkFormValues(
        validProducts,
        values.items
      );
      merge(mappedItems);
      setValidProductNumbers(validProductNumbers);
      setInvalidProductNumbers(invalidProductNumbers);
      resetForm();
    },
    onError: error => {
      console.error(error);
    },
    onSettled: () => {
      setTimeout(() => validateBulk.reset(), 5000);
    }
  });
  /**
   * Validation for the submit button.
   * Optimally, we want the validation to be completely based of the 'yup' validation schema.
   * TODO: Look into complex / mapped yup validation
   */
  const isSubmitEnabled = useMemo(() => {
    const validItems: BaseCartItem[] = values.items.filter(
      item =>
        item.productNumber &&
        item.productNumber.length > 0 &&
        Number(item.quantity) > 0
    );

    return !!validItems.length && validateBulk.status !== 'loading';
  }, [validateBulk.status, values.items]);
  /**
   * Function that will be called when the form needs to be submitted.
   * It will map the productNumbers from the form values and pass them to the mutate function.
   * Note: Since we still need to validate and retrieve the fields (productId, productName)asynchronously, the formik handleSubmit won't be used.
   * TODO: Will try to achieve this using the default Formik behaviour.
   */
  function onSubmit(): void {
    validateBulk.mutateAsync(
      values.items.map(items => items.productNumber?.toString() || '')
    );
  }

  const styles: AddBulkFormStyles = {
    lineContainer: {
      root: {
        width: '100%'
      }
    },
    productNumberFieldWrapper: {
      root: {
        flexShrink: 1
      }
    },
    quantityField: {
      root: {
        width: 88
      },
      fieldGroup: {
        width: 88
      }
    }
  };
  return (
    <Form>
      <FieldArray name={'items'}>
        {({ remove, push }) => (
          <Stack tokens={{ childrenGap: 4 }}>
            {values.items.length > 0 &&
              values.items.map((item, index) => (
                <Stack.Item key={index}>
                  <Stack
                    horizontal
                    styles={styles.lineContainer}
                    verticalAlign="center"
                    tokens={{ childrenGap: 8 }}
                  >
                    <Stack.Item styles={styles.productNumberFieldWrapper}>
                      <FormikTextField
                        autoComplete="off"
                        name={`items.${index}.productNumber`}
                        placeholder={formatMessage(
                          messages.productNumberPlaceholder
                        )}
                        validationProps={{ disabled: true }}
                      />
                    </Stack.Item>
                    <FormikTextField
                      autoComplete="off"
                      name={`items.${index}.quantity`}
                      prefix={formatMessage(messages.quantityPrefix)}
                      styles={styles.quantityField}
                      type="tel"
                      validationProps={{ disabled: true }}
                    />
                    <IconButton
                      size={14}
                      iconProps={{ iconName: 'Delete' }}
                      onClick={() => remove(index)}
                    />
                  </Stack>
                </Stack.Item>
              ))}

            <Stack.Item>
              <Stack
                horizontal
                horizontalAlign="space-between"
                verticalAlign="center"
              >
                <DefaultButton
                  text={
                    validateBulk.status === 'loading'
                      ? formatMessage(messages.addToCartButtonInProgress)
                      : formatMessage(messages.addToCartButton)
                  }
                  type="submit"
                  disabled={!isSubmitEnabled}
                  onClick={() => {
                    onSubmit();
                  }}
                />
                <ActionButton
                  iconProps={{ iconName: 'Add' }}
                  text={formatMessage(messages.entryButton)}
                  onClick={() => push({ id: '', quantity: 1 })}
                />
              </Stack>
            </Stack.Item>
            {validateBulk.status === 'success' &&
              validProductNumbers.length &&
              invalidProductNumbers.length === 0 && (
                <Stack.Item>
                  <MessageBar messageBarType={MessageBarType.success}>
                    {formatMessage(messages.bulkAllCompleteMessage)}
                  </MessageBar>
                </Stack.Item>
              )}
            {validateBulk.status === 'success' &&
              validProductNumbers.length &&
              invalidProductNumbers.length > 0 && (
                <Stack.Item>
                  <MessageBar messageBarType={MessageBarType.success}>
                    {formatMessage(messages.bulkPartialCompleteMessage, {
                      productNumbers: validProductNumbers.join(', ')
                    })}
                  </MessageBar>
                </Stack.Item>
              )}
            {validateBulk.status === 'success' && invalidProductNumbers.length && (
              <Stack.Item>
                <MessageBar messageBarType={MessageBarType.error}>
                  {formatMessage(messages.bulkFailMessage, {
                    productNumbers: invalidProductNumbers.join(', ')
                  })}
                </MessageBar>
              </Stack.Item>
            )}
          </Stack>
        )}
      </FieldArray>
    </Form>
  );
};
