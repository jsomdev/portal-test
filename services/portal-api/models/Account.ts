/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountStatus } from './AccountStatus';
import type { AccountType } from './AccountType';
import type { Order } from './Order';
import { PaymentMethod } from './PaymentMethod';
import type { TracedEntity } from './TracedEntity';
import type { User } from './User';

export type Account = TracedEntity & {
  name?: string | null;
  number?: string | null;
  status?: AccountStatus;
  type?: AccountType;
  orders?: Array<Order>;
  users?: Array<User>;
  paymentMethod?: PaymentMethod | null;
};
