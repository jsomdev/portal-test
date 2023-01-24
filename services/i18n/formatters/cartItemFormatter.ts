import { CartItem } from '@providers/cart/cartContext';

import { ResourceFormatter } from './entity-formatters/resourceFormatter';
import { MultilingualStringFormatter } from './multilingual-string-formatter/multilingualStringFormatter';

export class CartItemFormatter {
  private cartItem: CartItem;
  private resourceFormatter: ResourceFormatter;
  private multilingualStringFormatter: MultilingualStringFormatter;

  constructor(cartItem: CartItem, locale?: string) {
    this.cartItem = cartItem;
    this.resourceFormatter = new ResourceFormatter(cartItem.image || undefined);
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
  }

  public formatName(): string {
    const name = this.multilingualStringFormatter.format(this.cartItem.name);
    if (name) {
      return name;
    }
    const productName = this.multilingualStringFormatter.format(
      this.cartItem.productName
    );
    if (productName) {
      return productName;
    }
    return '';
  }

  public formatDisplayValue(): string {
    return (
      this.cartItem.productNumber ||
      this.multilingualStringFormatter.format(this.cartItem.productName) ||
      ''
    );
  }
}
