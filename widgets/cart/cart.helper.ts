import { CartItem } from '@providers/cart/cartContext';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';

export const mapCartItemsToCartItemViewModels = (
  cartItems: CartItem[],
  locale: string | undefined
): CartItemViewModel[] => {
  return cartItems.map(cartItem => {
    const productFormatter = new ProductFormatter(cartItem, locale);
    const { productNumber } = cartItem;
    if (!productNumber) {
      throw new Error('Product in cart must have a product number.');
    }
    const viewModel: CartItemViewModel = {
      id: cartItem.id as string,
      quantity: cartItem.quantity,
      priceBreaks: cartItem.priceBreaks,
      product: {
        id: cartItem.productId || undefined,
        number: productNumber,
        name: productFormatter.formatName(),
        url: productFormatter.formatUrl() || undefined,
        imageUrl: cartItem.image?.url || undefined
      }
    };
    return viewModel;
  });
};
