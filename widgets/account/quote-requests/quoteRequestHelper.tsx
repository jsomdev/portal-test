import { IntlShape } from 'react-intl';

import { QuoteRequest } from '@services/portal-api/models/QuoteRequest';

import { mapOrderLineToOrderLineViewModel } from '../orders/orderHelper';
import { OrderLineViewModel } from '../orders/orders.types';
import { mapAddressToAddressViewModel } from '../shared/accountAddress.helper';
import { QuoteRequestViewModel } from './quoteRequests.types';

export function mapQuoteRequestToQuoteRequestViewModel(
  quoteRequest: QuoteRequest | undefined,
  intl: IntlShape
): QuoteRequestViewModel | undefined {
  if (quoteRequest === undefined) {
    return undefined;
  }
  const date: string | undefined =
    (quoteRequest?.submittedOn &&
      intl.formatDate(new Date(quoteRequest?.submittedOn), {
        dateStyle: 'full'
      })) ||
    undefined;

  function getOrderLines(): OrderLineViewModel[] {
    if (!quoteRequest?.lines?.length) {
      return [];
    }
    return quoteRequest?.lines?.map(quoteRequestLine => {
      return mapOrderLineToOrderLineViewModel(quoteRequestLine, 'USD', intl);
    });
  }

  return {
    comment: quoteRequest?.comment || undefined,
    date: date,
    emailAddress: quoteRequest?.emailAddresses?.[0] || undefined,
    lines: getOrderLines(),
    billingAddress:
      (quoteRequest?.address &&
        mapAddressToAddressViewModel(quoteRequest.address)) ||
      undefined,
    billingContactInfo: quoteRequest?.contactInfo || undefined
  };
}
