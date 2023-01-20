import { createContext } from 'react';

import { MutationStatus } from 'react-query';

import { Setting } from '@services/portal-api';
import { UserAddress } from '@services/portal-api/base/types';
import { ReactQueryStatus } from '@services/react-query/types';

export interface AddressBookContextProps {
  // Add or update an address in the address book setting
  createOrUpdateAddress: (input: {
    address: UserAddress;
    setAsDefaultBilling: boolean;
    setAsDefaultShipping: boolean;
  }) => Promise<UserAddress>;
  createOrUpdateAddressStatus: MutationStatus;
  createOrUpdateAddressError: Error | null;
  // Removes an address from the existing address book setting
  removeAddress: (addressId: string) => Promise<Setting | undefined>;
  removeAddressStatus: MutationStatus;
  removeAddressError: Error | null;
  // Update default billing or shipping address id in the address book setting
  updateDefaultBillingAddress: (
    addressId: string
  ) => Promise<Setting | undefined>;
  updateDefaultShippingAddress: (
    addressId: string
  ) => Promise<Setting | undefined>;
  setDefaultAddressStatus: MutationStatus;
  setDefaultAddressError: Error | null;
  // Utility function that retuns an individual address from the address book setting by id
  getAddress: (addressId: string) => UserAddress | undefined;
  // The addressbook setting value
  addresses: UserAddress[] | undefined;
  addressBookStatus: ReactQueryStatus;
  // Default billing and shipping addresses
  billingAddress: UserAddress | undefined;
  shippingAddress: UserAddress | undefined;
  addressBookError: Error | null;
}

const initialContextProps: AddressBookContextProps = {
  createOrUpdateAddress: () => {
    throw new Error('Not implemented');
  },
  createOrUpdateAddressStatus: 'idle',
  createOrUpdateAddressError: null,
  removeAddress: () => {
    throw new Error('Not implemented');
  },
  removeAddressStatus: 'idle',
  removeAddressError: null,
  updateDefaultBillingAddress: () => {
    throw new Error('Not implemented');
  },
  updateDefaultShippingAddress: () => {
    throw new Error('Not implemented');
  },
  setDefaultAddressStatus: 'idle',
  setDefaultAddressError: null,
  getAddress: () => {
    throw new Error('Not implemented');
  },
  addresses: undefined,
  addressBookStatus: 'idle',
  billingAddress: undefined,
  shippingAddress: undefined,
  addressBookError: null
};

export const AddressBookContext =
  createContext<AddressBookContextProps>(initialContextProps);
