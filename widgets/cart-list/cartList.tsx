import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  CheckboxVisibility,
  DetailsList,
  DetailsListLayoutMode,
  MessageBar,
  MessageBarType,
  SelectionMode,
  Spinner,
  SpinnerSize,
  Stack,
  useTheme
} from '@fluentui/react';
import { CartItem } from '@providers/cart/cartContext';
import { messageIds } from '@services/i18n';
import { sortCartItemsByProductNumber } from '@utilities/sortBy';

import { CartListProps, CartListStyles } from './cartList.types';
import { getCartListColumns } from './cartListColumns';

const messages = defineMessages({
  emptyCart: {
    id: messageIds.pages.cart.list.emptyCart,
    description: 'Message to display when cart is empty',
    defaultMessage: 'Your cart is empty.'
  },
  loading: {
    id: messageIds.pages.cart.list.loading,
    description: 'Message to display when cart is loading',
    defaultMessage: 'Loading product information...'
  },
  cartError: {
    id: messageIds.pages.cart.list.cartError,
    description: 'Message to display when cart has an error',
    defaultMessage: 'There was an error loading your cart.'
  }
});

/**
 * A component that will render a DetailsList of all cart items passed to it.
 * It will display the products in rows with a ProductItem, Quantity, TotalPrice, UnitPrice and a RemoveButton columns.
 * @param items The items that will be used to render a DetailsList of all cart items
 * @param readOnly If true, the user will NOT be able to adjust the quantity of the item or remove the item from their cart within the DetailsList row
 * @param status The React Query status of the products that will rendered
 */
export const CartList: React.FC<CartListProps> = ({
  items,
  readOnly,
  status,
  showPricingColumns
}) => {
  const { spacing, semanticColors, fonts, palette } = useTheme();
  const { formatMessage } = useIntl();
  const styles: CartListStyles = {
    messageBar: {
      root: {
        marginTop: spacing.m
      }
    },
    detailsList: {
      contentWrapper: {
        selectors: {
          '.ms-DetailsRow': {
            borderBottom: `1px solid ${semanticColors.variantBorder}`
          },
          '.ms-DetailsRow:hover': {
            backgroundColor: 'transparent !important'
          },
          '.ms-DetailsRow-cell': {
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }
        }
      },
      headerWrapper: {
        selectors: {
          '.ms-DetailsHeader-cell:hover': {
            backgroundColor: 'transparent'
          }
        }
      }
    },
    spinner: {
      label: {
        ...fonts.mediumPlus,
        color: palette.themeDark
      }
    }
  };

  if (status === 'error') {
    return (
      <MessageBar messageBarType={MessageBarType.error}>
        {messages.cartError}
      </MessageBar>
    );
  }

  if (status === 'loading') {
    return (
      <Stack
        verticalAlign="center"
        horizontalAlign="center"
        tokens={{ childrenGap: spacing.l1, padding: `${spacing.l1} 0 ` }}
      >
        <Spinner
          styles={styles.spinner}
          size={SpinnerSize.large}
          label={formatMessage(messages.loading)}
        />
      </Stack>
    );
  }

  if (items?.length === 0) {
    return (
      <MessageBar styles={styles.messageBar}>
        {formatMessage(messages.emptyCart)}
      </MessageBar>
    );
  }

  if (items === undefined) {
    return (
      <MessageBar
        styles={styles.messageBar}
        messageBarType={MessageBarType.error}
      >
        {formatMessage(messages.cartError)}
      </MessageBar>
    );
  }

  return (
    <DetailsList
      onShouldVirtualize={() => false}
      getKey={(item: CartItem) => `${item.productNumber}`}
      checkboxVisibility={CheckboxVisibility.hidden}
      layoutMode={DetailsListLayoutMode.justified}
      compact={true}
      styles={styles.detailsList}
      items={items.sort(sortCartItemsByProductNumber)}
      columns={getCartListColumns(readOnly, showPricingColumns)}
      selectionMode={SelectionMode.none}
    />
  );
};
