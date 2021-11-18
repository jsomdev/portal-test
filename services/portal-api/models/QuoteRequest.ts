import { ContactInfo, PostalAddress } from '..';
import { QuoteRequestLine } from './QuoteRequestLine';

export interface QuoteRequest {
  lines: QuoteRequestLine[];
  emailAddresses: string[];
  address: PostalAddress;
  contactInfo: ContactInfo;
  comment: string;
}
