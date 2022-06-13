/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Card } from './Card';
import type { LinkedEntity } from './LinkedEntity';
import type { TransactionGateway } from './TransactionGateway';
import type { TransactionType } from './TransactionType';

export type Transaction = LinkedEntity & {
  amount?: number;
  card?: Card | null;
  gateway?: TransactionGateway | null;
  identifier?: string | null;
  processedOn?: string;
  type?: TransactionType;
};
