import React from 'react';

import {
  IStackItemStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { rem } from '@utilities/rem';
import { CartItemCard } from '@widgets/cart-list/cartItemCard';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';
import ProductCard from '@widgets/product-card-parts/productCard';
import ProductCardImage from '@widgets/product-card-parts/productCardImage';
import ProductCardTitleLink from '@widgets/product-card-parts/productCardTitleLink';

type CartItemAddedCardStyles = {
  leftContainer: IStackStyles;
  mobilePrice: IStackItemStyles;
};

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
