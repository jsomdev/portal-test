import React from 'react';

import { PillCount } from '@components/pill-count/pillCount';
import { ITextStyles } from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';

const CartCountButtonIcon: React.FC = () => {
  const { baseItems } = useCart();
  const pillCountStyles: Partial<ITextStyles> = {
    root: { position: 'absolute', top: '-1px', right: '-4px' }
  };
  if (baseItems.length === 0) {
    return null;
  }

  return <PillCount value={baseItems.length} styles={pillCountStyles} />;
};

export default CartCountButtonIcon;
