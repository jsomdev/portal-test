import React, { useCallback, useState } from 'react';

import { useMutation, useQuery, useQueryClient } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { Setting } from '@services/portal-api';
import {
  addAddressToAddressBookSetting,
  fetchAddressBookSetting,
  removeAddressFromAddressBookSetting,
  setAddressDefaultInAddressBookSetting
} from '@services/portal-api/addressSettings';
import { UserAddress } from '@services/portal-api/base/types';
import { QUERYKEYS } from '@services/react-query/constants';

import { AddressBookSettingValue } from './addressBook.types';
import { AddressBookContext } from './addressBookContext';
import {
  mergeAddressBookAddress,
  removeUserAddressFromArray,
  sortAddressBook
} from './addressBookHelper';

export const AddressBookProvider: React.FC = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const queryClient = useQueryClient();
  const [addresses, setAddresses] = useState<UserAddress[]>([]);
  const [billingAddress, setBillingAddress] = useState<
    UserAddress | undefined
  >();
  const [shippingAddress, setShippingAddress] = useState<
    UserAddress | undefined
  >();

  const {
    data: addressBookSetting,
    status: addressBookStatus,
    error: addressBookError
  } = useQuery(
    [QUERYKEYS.addressBookSetting, isAuthenticated],
    () => fetchAddressBookSetting(isAuthenticated),
    {
      enabled: isAuthenticated,
      onSuccess(data) {
        const value = data?.value as AddressBookSettingValue;
        if (value) {
          const dataBillingAddress: UserAddress | undefined =
            value?.addresses?.find(address => {
              return address.id === value.defaultBillingAddressId;
            });
          const dataShippingAddress: UserAddress | undefined =
            value?.addresses?.find(address => {
              return address.id === value.defaultShippingAddressId;
            });
          setBillingAddress(dataBillingAddress);
          setShippingAddress(dataShippingAddress);
          if (value?.addresses.length > 0) {
            setAddresses(
              sortAddressBook(
                value?.addresses,
                dataBillingAddress,
                dataShippingAddress
              )
            );
          }
        }
      }
    }
  );

  const getAddress = useCallback(
    (id: string) => {
      return addresses?.find((address: UserAddress) => {
        return address.id === id;
      });
    },
    [addresses]
  );

  const createOrUpdateAddress = useCallback(
    async (input: {
      address: UserAddress;
      setAsDefaultBilling: boolean;
      setAsDefaultShipping: boolean;
    }): Promise<UserAddress> => {
      try {
        const { address, setAsDefaultBilling, setAsDefaultShipping } = input;
        const data: Setting | undefined = await addAddressToAddressBookSetting(
          address,
          isAuthenticated,
          setAsDefaultBilling,
          setAsDefaultShipping,
          addressBookSetting
        );

        const userAddress: UserAddress | undefined = (
          data?.value as AddressBookSettingValue | undefined
        )?.addresses?.find(settingAddress => {
          return settingAddress.id === address.id;
        });

        if (userAddress === undefined) {
          throw new Error('The address setting was not found');
        }

        return userAddress;
      } catch (error) {
        throw new Error('Something went wrong. Please try again');
      }
    },
    [addressBookSetting, isAuthenticated]
  );

  const createOrUpdateAddressMutation = useMutation(createOrUpdateAddress, {
    onMutate: async (input: {
      address: UserAddress;
      setAsDefaultBilling: boolean;
      setAsDefaultShipping: boolean;
    }) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries([
        QUERYKEYS.addressBookSetting,
        isAuthenticated
      ]);

      // Get the previous value so that it can be restored in case an error occurs.
      const previousValue: Setting | undefined = queryClient.getQueryData([
        QUERYKEYS.addressBookSetting,
        isAuthenticated
      ]) as Setting | undefined;

      // The new setting that will be written away and updated optimistically
      const newSetting: Setting | undefined = previousValue
        ? {
            ...previousValue,
            value: {
              addresses: mergeAddressBookAddress(
                input.address,
                previousValue.value?.addresses
              ),
              defaultBillingAddressId: input.setAsDefaultBilling
                ? input.address.id
                : previousValue?.value?.defaultBillingAddressId,
              defaultShippingAddressId: input.setAsDefaultShipping
                ? input.address.id
                : previousValue?.value?.defaultShippingAddressId
            }
          }
        : undefined;

      // Set the expected data inside the queryCache
      queryClient.setQueryData(
        [QUERYKEYS.addressBookSetting, isAuthenticated],
        newSetting
      );
      // return the 'previous' value
      return previousValue;
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries([
        QUERYKEYS.addressBookSetting,
        isAuthenticated
      ]);
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (error, setting, context) => {
      queryClient.setQueriesData(
        [QUERYKEYS.addressBookSetting, isAuthenticated],
        context?.value
      );
    }
  });

  const removeAddressMutation = useMutation(
    (addressId: string) =>
      removeAddressFromAddressBookSetting(
        addressId,
        isAuthenticated,
        addressBookSetting
      ),
    {
      onMutate: async (addressId: string) => {
        // Cancel any outgoing refetches
        await queryClient.cancelQueries([
          QUERYKEYS.addressBookSetting,
          isAuthenticated
        ]);

        // Get the previous value so that it can be restored in case an error occurs.
        const previousValue: Setting | undefined = queryClient.getQueryData([
          QUERYKEYS.addressBookSetting,
          isAuthenticated
        ]) as Setting | undefined;

        // Create the expected data
        const newSetting: Setting | undefined = previousValue
          ? {
              ...previousValue,
              value: {
                addresses: removeUserAddressFromArray(
                  addressId,
                  previousValue?.value?.addresses || []
                ),
                defaultBillingAddressId:
                  previousValue?.value?.defaultBillingAddressId,
                defaultShippingAddressId:
                  previousValue?.value?.defaultShippingAddressId
              }
            }
          : undefined;

        // Set the expected data inside the queryCache
        queryClient.setQueryData(
          [QUERYKEYS.addressBookSetting, isAuthenticated],
          newSetting
        );
        // return the 'previous' value
        return previousValue;
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries([
          QUERYKEYS.addressBookSetting,
          isAuthenticated
        ]);
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (error, setting, context) => {
        queryClient.setQueriesData(
          [QUERYKEYS.addressBookSetting, isAuthenticated],
          context?.value
        );
      }
    }
  );

  const setDefaultAddressMutation = useMutation(
    (input: { billingAddressId: string; shippingAddressId: string }) =>
      setAddressDefaultInAddressBookSetting(
        input.billingAddressId,
        input.shippingAddressId,
        isAuthenticated,
        addressBookSetting
      ),
    {
      onMutate: async (input: {
        billingAddressId: string;
        shippingAddressId: string;
      }) => {
        // Cancel any outgoing refetches
        await queryClient.cancelQueries([
          QUERYKEYS.addressBookSetting,
          isAuthenticated
        ]);
        // Get the previous value so that it can be restored in case an error occurs.
        const previousValue: Setting | undefined = queryClient.getQueryData([
          QUERYKEYS.addressBookSetting,
          isAuthenticated
        ]) as Setting | undefined;
        // Create the expected data
        const newSetting: Setting | undefined = previousValue
          ? {
              ...previousValue,
              value: {
                addresses: [...(previousValue?.value?.addresses || [])],
                defaultBillingAddressId: input.billingAddressId,
                defaultShippingAddressId: input.shippingAddressId
              }
            }
          : undefined;
        // Set the expected data inside the queryCache
        queryClient.setQueryData(
          [QUERYKEYS.addressBookSetting, isAuthenticated],
          newSetting
        );
        // return the 'previous' value
        return previousValue;
      },
      //Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries([
          QUERYKEYS.addressBookSetting,
          isAuthenticated
        ]);
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (error, setting, context) => {
        queryClient.setQueriesData(
          [QUERYKEYS.addressBookSetting, isAuthenticated],
          context?.value
        );
      }
    }
  );

  const updateDefaultShippingAddress: (
    id: string
  ) => Promise<Setting | undefined> = useCallback(
    (id: string): Promise<Setting | undefined> => {
      return setDefaultAddressMutation.mutateAsync({
        billingAddressId: billingAddress?.id || '',
        shippingAddressId: id
      });
    },
    [billingAddress?.id, setDefaultAddressMutation]
  );

  const updateDefaultBillingAddress: (
    id: string
  ) => Promise<Setting | undefined> = useCallback(
    (id: string): Promise<Setting | undefined> => {
      return setDefaultAddressMutation.mutateAsync({
        billingAddressId: id,
        shippingAddressId: shippingAddress?.id || ''
      });
    },
    [setDefaultAddressMutation, shippingAddress?.id]
  );

  return (
    <AddressBookContext.Provider
      value={{
        createOrUpdateAddress: createOrUpdateAddressMutation.mutateAsync,
        createOrUpdateAddressStatus: createOrUpdateAddressMutation.status,
        createOrUpdateAddressError:
          createOrUpdateAddressMutation.error as Error,
        removeAddress: removeAddressMutation.mutateAsync,
        removeAddressStatus: removeAddressMutation.status,
        removeAddressError: removeAddressMutation.error as Error,
        updateDefaultBillingAddress,
        updateDefaultShippingAddress,
        setDefaultAddressStatus: setDefaultAddressMutation.status,
        setDefaultAddressError: setDefaultAddressMutation.error as Error,
        getAddress,
        addresses,
        addressBookStatus,
        addressBookError: (addressBookError || null) as Error | null,
        billingAddress,
        shippingAddress
      }}
    >
      {children}
    </AddressBookContext.Provider>
  );
};
