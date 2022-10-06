import React from 'react';

import { Formik } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

import { FontWeights, Stack, Text, useTheme } from '@fluentui/react';
import { BaseCartItem } from '@providers/cart/cartModels';

import { AddBulkCardStyles } from './addBulkCard.types';
import { AddBulkToCartForm } from './addBulkForm';
import { initialAddBulkFormValues } from './addBulkFormHelpers';
import { addBulkFormValidation } from './addBulkValidation';

const messages = defineMessages({
  title: {
    id: 'pages.cart.addBulkCard.title',
    description: 'Title for add bulk card',
    defaultMessage: 'Add multiple products at once'
  },
  description: {
    id: 'pages.cart.addBulkCard.description',
    description: 'Description for add bulk card',
    defaultMessage:
      'Enter the number and the quantity of the products you wish to add to your cart.'
  }
});

export const AddBulkCard: React.FC = () => {
  const { spacing, palette } = useTheme();
  const { formatMessage } = useIntl();
  const styles: AddBulkCardStyles = {
    title: {
      root: {
        fontWeight: FontWeights.semibold
      }
    },
    description: {
      root: {
        color: palette.neutralPrimary
      }
    }
  };
  return (
    <Formik<{ items: BaseCartItem[] }>
      initialValues={initialAddBulkFormValues}
      validationSchema={addBulkFormValidation}
      onSubmit={(items, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      <Stack>
        <Text variant="mediumPlus" styles={styles.title}>
          {formatMessage(messages.title)}
        </Text>
        <Text styles={styles.description}>
          {formatMessage(messages.description)}
        </Text>
        <Stack.Item tokens={{ padding: `${spacing.s1} 0 0 0` }}>
          <AddBulkToCartForm />
        </Stack.Item>
      </Stack>
    </Formik>
  );
};
