import { CartItem } from '@providers/cart/cartContext';
import { BaseCartItem } from '@providers/cart/cartModels';
import { defaultLanguage } from '@services/i18n';
import { OrderLine } from '@services/portal-api';

export class TextFormatter {
  public formatCamelCase(text: string): string {
    return text
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '')
      .replace('-', '');
  }

  public formatText(
    text: string,
    maxCharacters: number,
    trailingSuffix: string
  ): string {
    if (text.length <= maxCharacters) {
      return text;
    }
    return text.substring(0, maxCharacters - 1).concat(trailingSuffix);
  }
}
//TODO ward: move to formatter
export const formatCreditCardNumber = (cardNumber: string): string => {
  return `${cardNumber
    .substring(0, cardNumber.length - 4)
    .replace(/[0-9]/g, '●')
    .replace(/X/g, '●')}${cardNumber.substring(cardNumber.length - 4)}`;
};

//TODO ward: move to formatter
export const formatCreditCardIssuer = (issuer: string): string => {
  return issuer.replace(/^\w/, c => c.toUpperCase());
};
