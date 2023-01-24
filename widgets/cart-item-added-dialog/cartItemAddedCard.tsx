import React from 'react';

import { useMe } from '@providers/user/userContext';
import { CartItemCard } from '@widgets/cart-list/cartItemCard';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';

type CartItemAddedCardProps = {
  item: CartItemViewModel;
};

const CartItemAddedCard: React.FC<CartItemAddedCardProps> = ({ item }) => {
  const { hasPricing } = useMe();
  const showPricing =
    (hasPricing === 'Customer' || hasPricing === 'Standard') &&
    item.quantity > 1;

  return <CartItemCard item={item} showPricing={showPricing} readOnly={true} />;
};

export default CartItemAddedCard;
