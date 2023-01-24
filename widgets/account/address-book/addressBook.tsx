import React, { useContext, useMemo, useState } from 'react';

import { useIntl } from 'react-intl';

import { ErrorMessage } from '@components/errors/errorMessage';
import { PortalMessageBar } from '@components/messages/portalMessageBar';
import { LoadingSpinner } from '@components/spinners/loadingSpinner';
import {
  DefaultButton,
  MessageBarType,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { defineMessages } from '@formatjs/intl';
import { AddressBookContext } from '@providers/address-book/addressBookContext';
import { sortAddressBook } from '@providers/address-book/addressBookHelper';
import { messageIds } from '@services/i18n';
import { UserAddress } from '@services/portal-api/base/types';

import {
  AddressViewModel,
  mapAddressToAddressViewModel
} from '../shared/accountAddress.helper';
import { AddressBookAddress } from './addressBookAddress';
import { AddressBookForm } from './addressBookForm';

// use links for the edit buttons on overview and detail page?

const messages = defineMessages({
  addressBookSubtext: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.description,
    defaultMessage: 'Manage your saved addresses',
    description: 'Address book subtext'
  },
  addAddress: {
    id: messageIds.pages.account.overview.addressBook.addAddressButtonText,
    defaultMessage: 'Add address',
    description: 'Add address button text'
  },
  noAddresses: {
    id: messageIds.pages.account.overview.addressBook.noAddresses,
    defaultMessage: 'No addresses found.',
    description: 'No addresses found warning text'
  },
  updateAddressError: {
    id: messageIds.pages.account.overview.addressBook.updateAddressError,
    defaultMessage: 'An error occurred while updating the address.',
    description: 'Error message when updating an address fails'
  },
  removeAddressError: {
    id: messageIds.pages.account.overview.addressBook.removeAddressError,
    defaultMessage: 'An error occurred while removing the address.',
    description: 'Error message when removing an address fails'
  },
  addressSuccess: {
    id: messageIds.pages.account.overview.addressBook.addAddressSuccess,
    defaultMessage: 'Address successfully updated.',
    description: 'Success message when updating an address'
  }
});

export const AddressBook: React.FC = () => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  const [editAddress, setEditAddress] = useState<string | 'new' | undefined>(
    undefined
  );

  const {
    addresses,
    updateDefaultBillingAddress,
    updateDefaultShippingAddress,
    removeAddress,
    billingAddress,
    shippingAddress,
    addressBookStatus,
    addressBookError,
    removeAddressError,
    setDefaultAddressError
  } = useContext(AddressBookContext);

  const mappedAddresses: AddressViewModel[] | undefined = useMemo(() => {
    if (addresses === undefined || !addresses?.length) {
      return undefined;
    }
    // Filter the addresses to remove the shipping and billing address and map to the view model
    const returnAddresses: AddressViewModel[] = sortAddressBook(
      addresses,
      billingAddress,
      shippingAddress
    ).map((address: UserAddress) => mapAddressToAddressViewModel(address));

    return returnAddresses;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addresses]);

  if (addressBookStatus === 'loading') {
    return <LoadingSpinner />;
  }

  if (addressBookStatus === 'error') {
    return <ErrorMessage error={addressBookError} logError={true} />;
  }

  return (
    <Stack>
      <Stack tokens={{ childrenGap: spacing.m }}>
        <Text>{formatMessage(messages.addressBookSubtext)}</Text>
        <Stack.Item>
          <DefaultButton
            iconProps={{ iconName: 'Add' }}
            text={formatMessage(messages.addAddress)}
            onClick={() => setEditAddress('new')}
          />
        </Stack.Item>

        {!mappedAddresses?.length && addressBookStatus === 'success' && (
          <PortalMessageBar messageBarType={MessageBarType.warning}>
            <Text>{formatMessage(messages.noAddresses)}</Text>
          </PortalMessageBar>
        )}

        {removeAddressError && (
          <PortalMessageBar messageBarType={MessageBarType.error}>
            <Text>{formatMessage(messages.removeAddressError)}</Text>
          </PortalMessageBar>
        )}

        {setDefaultAddressError && (
          <PortalMessageBar messageBarType={MessageBarType.error}>
            <Text>{formatMessage(messages.updateAddressError)}</Text>
          </PortalMessageBar>
        )}

        {mappedAddresses?.map(address => (
          <AddressBookAddress
            key={address.name}
            address={address}
            isDefaultBilling={address.id === billingAddress?.id}
            isDefaultShipping={address.id === shippingAddress?.id}
            onEditClick={() => {
              setEditAddress(address.id);
            }}
            onSetAsBillingClick={() => {
              updateDefaultBillingAddress(address.id);
            }}
            onSetAsShippingClick={() => {
              updateDefaultShippingAddress(address.id);
            }}
            onDeleteClick={() => {
              removeAddress(address.id);
            }}
          />
        ))}
      </Stack>
      <AddressBookForm
        editAddress={editAddress}
        setEditAddress={setEditAddress}
      />
    </Stack>
  );
};
