import { ContactInfo } from '@services/portal-api';

import { OrderLineViewModel } from '../orders/orders.types';
import { AddressViewModel } from '../shared/accountAddress.helper';

export interface QuoteViewModel {
  date: string | undefined;
  emailAddress: string | undefined;
  lines: OrderLineViewModel[];
  billingAddress: AddressViewModel | undefined;
  billingContactInfo: ContactInfo | undefined;
  number: string | undefined;
}
