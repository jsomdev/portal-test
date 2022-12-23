import { ContactInfo } from '@services/portal-api';

import { OrderLineViewModel } from '../orders/orders.types';
import { AddressViewModel } from '../shared/accountAddress.helper';

export interface QuoteRequestViewModel {
  comment: string | undefined;
  date: string | undefined;
  emailAddress: string | undefined;
  lines: OrderLineViewModel[];
  billingAddress: AddressViewModel | undefined;
  billingContactInfo: ContactInfo | undefined;
}
