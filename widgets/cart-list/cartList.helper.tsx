import { IColumn } from '@fluentui/react';
import { BaseCartItem } from '@providers/cart/cartModels';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';
import { CartItemProduct } from '@widgets/cart-list/cartListProduct';
import { CartListQuantity } from '@widgets/cart-list/cartListQuantity';
import { CartListTotalPrice } from '@widgets/cart-list/cartListTotalPrice';
import { CartListUnitPrice } from '@widgets/cart-list/cartListUnitPrice';
import { CartRemoveButton } from '@widgets/cart-list/cartRemoveButton';

export function getCartListColumns(
  readOnly: boolean,
  showPricingColumns: boolean
): IColumn[] {
  const defaultColumn: Partial<IColumn> &
    Pick<IColumn, 'minWidth' | 'maxWidth'> = {
    isResizable: false,
    minWidth: 100,
    isPadded: false,
    isMultiline: true,
    isCollapsible: false,
    styles: {
      cellTitle: {
        paddingTop: 4
      },
      cellName: {
        textOverflow: 'unset',
        whiteSpace: 'normal'
      }
    }
  };
  const columns = [
    {
      ...defaultColumn,
      fieldName: 'product',
      key: 'product',
      name: 'Product',
      minWidth: 240,
      isCollapsable: false,
      onRender: (item: CartItemViewModel) => {
        return <CartItemProduct product={item.product} />;
      }
    },
    {
      ...defaultColumn,
      fieldName: 'qty',
      key: 'qty',
      name: 'Quantity',
      maxWidth: 100,
      isCollapsable: false,
      onRender: (item: CartItemViewModel) => {
        return <CartListQuantity item={item} readOnly={readOnly} />;
      }
    }
  ];

  if (showPricingColumns) {
    columns.push(
      {
        ...defaultColumn,
        fieldName: 'unitPrice',
        key: 'unitPrice',
        name: 'Unit Price',
        minWidth: 120,
        maxWidth: 220,
        isCollapsable: false,
        onRender: (item: CartItemViewModel) => {
          return <CartListUnitPrice item={item} readOnly={readOnly} />;
        }
      },
      {
        ...defaultColumn,
        fieldName: 'totalPrice',
        key: 'totalPrice',
        name: 'Total Price',
        minWidth: 140,
        maxWidth: 220,
        isCollapsable: false,
        onRender: (item: CartItemViewModel) => {
          return <CartListTotalPrice item={item} readOnly={readOnly} />;
        }
      }
    );
  }

  if (!readOnly) {
    columns.push({
      ...defaultColumn,
      fieldName: 'remove',
      key: 'remove',
      name: '',
      maxWidth: 15,
      minWidth: 15,
      iconClassName: 'delete',
      isCollapsable: false,
      iconName: 'delete',
      onRender: (item: CartItemViewModel) => {
        return item.product.number ? (
          <CartRemoveButton productNumber={item.product.number} />
        ) : (
          <div />
        );
      }
    });
  }
  return columns;
}

export function sortCartItemsByProductNumber(
  a: BaseCartItem,
  b: BaseCartItem
): number {
  return (
    a.productNumber
      ?.toLowerCase()
      .localeCompare(b.productNumber?.toLowerCase() || '') || -1
  );
}
