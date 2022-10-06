import React from 'react';

import { IColumn } from '@fluentui/react';
import { CartItem } from '@providers/cart/cartContext';

import { CartItemsListProduct } from './cartListProduct';
import { CartListQuantity } from './cartListQuantity';
import { CartListTotalPrice } from './cartListTotalPrice';
import { CartListUnitPrice } from './cartListUnitPrice';
import { CartRemoveButton } from './cartRemoveButton';

const defaultColumn: Partial<IColumn> & Pick<IColumn, 'minWidth' | 'maxWidth'> =
  {
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

//TODO i18n
export function getCartListColumns(
  readOnly: boolean,
  showPricingColumns: boolean
): IColumn[] {
  const columns = [
    {
      ...defaultColumn,
      isCollapsable: false,
      fieldName: 'product',
      minWidth: 240,
      key: 'product',
      name: 'Product',
      onRender: (item: CartItem) => {
        return <CartItemsListProduct item={item} readOnly={readOnly} />;
      }
    },
    {
      ...defaultColumn,
      fieldName: 'qty',
      key: 'qty',
      name: 'Quantity',
      maxWidth: 100,
      isCollapsable: false,
      onRender: (item: CartItem) => {
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
        onRender: (item: CartItem) => {
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
        onRender: (item: CartItem) => {
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
      onRender: (item: CartItem) => {
        return <CartRemoveButton item={item} readOnly={readOnly} />;
      }
    });
  }

  return columns;
}
