/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { Account } from './Account';
import type { ContactInfo } from './ContactInfo';
import { Note } from './Note';
import type { PostalAddress } from './PostalAddress';
import { QuoteLine } from './QuoteLine';
import type { TracedEntity } from './TracedEntity';
import type { User } from './User';

export type Quote = TracedEntity & {
  accountId?: string | null;
  account?: Account | null;
  addressId?: string | null;
  address?: PostalAddress | null;
  contactInfoId?: string | null;
  contactInfo?: ContactInfo | null;
  currencyCode?: string;
  totalAmount?: number;
  emailAddresses?: Array<string | null>;
  number?: string | null;
  name?: string | null;
  notes?: Array<Note> | null;
  lines?: Array<QuoteLine>;
  userId?: string | null;
  submittedOn?: string | null;
  user?: User | null;
};
