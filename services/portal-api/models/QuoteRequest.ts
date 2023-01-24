/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { Account } from './Account';
import type { ContactInfo } from './ContactInfo';
import type { PostalAddress } from './PostalAddress';
import type { QuoteRequestLine } from './QuoteRequestLine';
import type { TracedEntity } from './TracedEntity';
import type { User } from './User';

export type QuoteRequest = TracedEntity & {
  comment?: string | null;
  name?: string | null;
  number?: string | null;
  accountId?: string | null;
  userId?: string | null;
  emailAddresses?: Array<string | null>;
  addressId?: string | null;
  address?: PostalAddress | null;
  contactInfoId?: string | null;
  contactInfo?: ContactInfo | null;
  submittedOn?: string | null;
  lines?: Array<QuoteRequestLine>;
  account?: Account | null;
  user?: User | null;
};
