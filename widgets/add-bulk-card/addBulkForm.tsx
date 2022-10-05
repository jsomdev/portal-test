import React, { useMemo, useState } from 'react';

import { FieldArray, Form, useFormikContext } from 'formik';
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
import { ReactQueryStatus } from '@services/react-query/types';

import { AddBulkFormStyles } from './addBulkForm.types';
import {
  mergeProductsWithBulkFormValues,
  validateProductNumbers
} from './addBulkFormHelpers';

const messages = {
  quantityPrefix: 'Qty',
  entryButton: 'Entry',
  resetButton: 'Reset',
  addToCartButton: (status: ReactQueryStatus) =>
    (status === 'loading' && 'Adding...') || 'Add to cart',
  productNumberPlaceholder: `Product Number`,
  bulkAllCompleteMessage: () => `All products have been added to the cart.`,
  bulkPartialCompleteMessage: (productNumbers: string[]) =>
    `Some products were added to the cart: ${productNumbers.join(', ')}.`,
  bulkFailMessage: (productNumbers: string[]) =>
    `Following products could not be added to the cart: ${productNumbers.join(
      ', '
    )}.`,
  warningDialogTitle: 'Some items have not been added',
  warningDialogSubText: (productNumbers: string[]) =>
    `Sorry, following product numbers were not found in the catalog: ${productNumbers.join(
      ', '
    )}.`
};

export const AddBulkToCartForm: React.FC = () => {
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
                        placeholder={messages.productNumberPlaceholder}
                        validationProps={{ disabled: true }}
                      />
                    </Stack.Item>
                    <FormikTextField
                      autoComplete="off"
                      name={`items.${index}.quantity`}
                      prefix={messages.quantityPrefix}
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
                  text={messages.addToCartButton(validateBulk.status)}
                  type="submit"
                  disabled={!isSubmitEnabled}
                  onClick={() => {
                    onSubmit();
                  }}
                />
                <ActionButton
                  iconProps={{ iconName: 'Add' }}
                  text={messages.entryButton}
                  onClick={() => push({ id: '', quantity: 1 })}
                />
              </Stack>
            </Stack.Item>
            {validateBulk.status === 'success' &&
              validProductNumbers.length &&
              invalidProductNumbers.length === 0 && (
                <Stack.Item>
                  <MessageBar messageBarType={MessageBarType.success}>
                    {messages.bulkAllCompleteMessage()}
                  </MessageBar>
                </Stack.Item>
              )}
            {validateBulk.status === 'success' &&
              validProductNumbers.length &&
              invalidProductNumbers.length > 0 && (
                <Stack.Item>
                  <MessageBar messageBarType={MessageBarType.success}>
                    {messages.bulkPartialCompleteMessage(validProductNumbers)}
                  </MessageBar>
                </Stack.Item>
              )}
            {validateBulk.status === 'success' && invalidProductNumbers.length && (
              <Stack.Item>
                <MessageBar messageBarType={MessageBarType.error}>
                  {messages.bulkFailMessage(invalidProductNumbers)}
                </MessageBar>
              </Stack.Item>
            )}
          </Stack>
        )}
      </FieldArray>
    </Form>
  );
};
