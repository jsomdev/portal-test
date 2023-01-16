import { IntlShape } from 'react-intl';

import { Quote } from '@services/portal-api/models/Quote';

import { mapOrderLineToOrderLineViewModel } from '../orders/orderHelper';
import { OrderLineViewModel } from '../orders/orders.types';
import { mapAddressToAddressViewModel } from '../shared/accountAddress.helper';
import { QuoteViewModel } from './quote.types';

export function mapQuoteToQuoteViewModel(
  quote: Quote | undefined,
  intl: IntlShape
): QuoteViewModel | undefined {
  if (quote === undefined) {
    return undefined;
  }
  const date: string | undefined =
    (quote?.submittedOn &&
      intl.formatDate(new Date(quote?.submittedOn), {
        dateStyle: 'full'
      })) ||
    undefined;

  function getOrderLines(): OrderLineViewModel[] {
    if (!quote?.lines?.length) {
      return [];
    }
    return quote?.lines?.map(quoteLine => {
      return mapOrderLineToOrderLineViewModel(quoteLine, 'USD', intl);
    });
  }

  return {
    date: date,
    emailAddress: quote?.emailAddresses?.[0] || undefined,
    lines: getOrderLines(),
    billingAddress:
      (quote?.address && mapAddressToAddressViewModel(quote.address)) ||
      undefined,
    billingContactInfo: quote?.contactInfo || undefined,
    number: quote?.number || undefined
  };
}
