/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Card } from './Card';
import type { LinkedEntity } from './LinkedEntity';
import type { TransactionType } from './TransactionType';

export type Transaction = LinkedEntity & {
  type?: TransactionType;
  amount?: number;
  card?: Card | null;
  identifier?: string | null;
  processedOn?: string;
};
