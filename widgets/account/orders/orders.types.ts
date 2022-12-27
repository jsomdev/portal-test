import { ContactInfo } from '@services/portal-api';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';

import { AddressViewModel } from '../shared/accountAddress.helper';

export interface OrderLineViewModel {
  imageUrl: string;
  imageAlt: string;
  name: string;
  number?: string | undefined;
  quantity?: string | undefined;
  unitAmount?: string | undefined;
  totalAmount?: string | undefined;
  url?: string | null;
}

export interface OrderViewModel {
  billingAddress: AddressViewModel | undefined;
  billingContactInfo?: ContactInfo | undefined;
  canReorder: boolean;
  comment?: string | undefined;
  creditCardNumber?: string | undefined;
  date?: string | undefined;
  emailAddresses?: string | undefined;
  lines: OrderLineViewModel[];
  number?: string | undefined;
  paymentMethodType: PaymentMethod | undefined;
  paymentMethodReadable: string;
  shippingAddress: AddressViewModel | undefined;
  shippingAmount?: string | undefined;
  shippingContactInfo?: ContactInfo | undefined;
  shippingMethod?: string | undefined;
  status: { text: string; color: string };
  subTotal?: string | undefined;
  taxAmount?: string | undefined;
  totalAmount?: string | undefined;
  transactionIssuer?: string | undefined;
}

export type OrderCardViewModel = Pick<
  OrderViewModel,
  'date' | 'status' | 'totalAmount' | 'number' | 'lines'
>;
