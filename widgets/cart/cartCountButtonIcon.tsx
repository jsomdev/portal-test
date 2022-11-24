import React, { useMemo } from 'react';

import { PillCount } from '@components/pill-count/pillCount';
import { ITextStyles } from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';

const CartCountButtonIcon: React.FC = () => {
  const { baseItems } = useCart();

  const pillCountStyles: Partial<ITextStyles> = {
    root: { position: 'absolute', top: '-1px', right: '-4px' }
  };

  const count = useMemo(
    () => baseItems.reduce((acc, item) => acc + item.quantity, 0),
    [baseItems]
  );

  if (count === 0) {
    return null;
  }

  return <PillCount value={count} styles={pillCountStyles} />;
};

export default CartCountButtonIcon;
