/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { AccountStatus } from './AccountStatus';
import type { AccountType } from './AccountType';
import type { Location } from './Location';
import type { Order } from './Order';
import type { PaymentMethod } from './PaymentMethod';
import type { QuoteRequest } from './QuoteRequest';
import type { TracedEntity } from './TracedEntity';
import type { User } from './User';

export type Account = TracedEntity & {
  name?: string | null;
  number?: string | null;
  paymentMethod?: PaymentMethod | null;
  status?: AccountStatus;
  type?: AccountType;
  orders?: Array<Order>;
  quoteRequests?: Array<QuoteRequest>;
  users?: Array<User>;
  locations?: Array<Location>;
};
