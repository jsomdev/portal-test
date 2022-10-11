import React, { useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import {
  Dialog,
  ISpinnerStyles,
  Spinner,
  SpinnerSize,
  Stack,
  useTheme
} from '@fluentui/react';
import { CartItem } from '@providers/cart/cartContext';
import { combineCartItemsInformation } from '@providers/cart/cartHelper';
import { BaseCartItem } from '@providers/cart/cartModels';
import { messageIds } from '@services/i18n';
import { Product } from '@services/portal-api';
import { OdataCollection } from '@services/portal-api/o-data';
import { fetchBaseDesignsByIds } from '@services/portal-api/products';
import { QUERYKEYS } from '@services/react-query/constants';
import { CartList } from '@widgets/cart-list/cartList';

const messages = defineMessages({
  loading: {
    id: messageIds.pages.cart.productsAddedWhileLoggedOutDialog.loading,
    defaultMessage: 'Products loading...',
    description: 'Loading message for products added while logged out dialog'
  },
  title: {
    id: messageIds.pages.cart.productsAddedWhileLoggedOutDialog.title,
    defaultMessage: 'Products added while logged out',
    description: 'Title for products added while logged out dialog'
  }
});

interface CartItemsDialogStyles {
  spinner: ISpinnerStyles;
}

interface CartItemsDialogProps {
  items: BaseCartItem[];
  hidden: boolean;
  onDismiss: () => void;
}

export const CartMergeDialog: React.FC<CartItemsDialogProps> = ({
  items,
  hidden,
  onDismiss
}) => {
  const { spacing, fonts, palette } = useTheme();
  const { formatMessage } = useIntl();
  const productIds: string[] = useMemo(() => {
    const productIds = items.map(item => {
      if (item.productId) {
        return item.productId;
      }
      return '';
    });
    return productIds;
  }, [items]);

  const { data: products, status: productsStatus } = useQuery(
    [QUERYKEYS.cartMergeProducts, productIds],
    (): Promise<OdataCollection<Product>> =>
      fetchBaseDesignsByIds(productIds || [])
  );

  const cartItems: CartItem[] = useMemo((): CartItem[] => {
    const cartItems = combineCartItemsInformation(items, products?.value, []);
    return cartItems;
  }, [products, items]);

  const styles: CartItemsDialogStyles = {
    spinner: {
      label: {
        ...fonts.mediumPlus,
        color: palette.themeDark
      },
      root: {
        height: 180 //height of a cart list item
      }
    }
  };

  return (
    <Dialog
      hidden={hidden}
      onDismiss={onDismiss}
      maxWidth={'90vw'}
      minWidth={'35vw'}
      dialogContentProps={{
        title: formatMessage(messages.title),
        showCloseButton: true
      }}
    >
      <Stack tokens={{ childrenGap: spacing.m }}>
        {productsStatus === 'loading' ? (
          <Stack verticalAlign="center" horizontalAlign="center">
            <Spinner
              styles={styles.spinner}
              size={SpinnerSize.large}
              label={formatMessage(messages.loading)}
            />
          </Stack>
        ) : (
          <CartList
            items={cartItems}
            readOnly={true}
            showPricingColumns={false}
          />
        )}
      </Stack>
    </Dialog>
  );
};