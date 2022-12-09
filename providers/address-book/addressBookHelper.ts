import { PostalAddress } from '@services/portal-api';
import { UserAddress } from '@services/portal-api/base/types';
import {
  allCountryOptions,
  supportedProvinceOptions,
  supportedStateOptions
} from '@utilities/places';

export function removeUserAddressFromArray(
  id: string,
  currentAddresses: UserAddress[]
): UserAddress[] {
  return currentAddresses.filter(address => {
    return address.id !== id;
  });
}

export function mergeAddressBookAddress(
  updatedAddress: UserAddress,
  currentAddresses: UserAddress[]
): UserAddress[] {
  const filteredAddresses: UserAddress[] = removeUserAddressFromArray(
    updatedAddress.id,
    currentAddresses
  );

  return [...filteredAddresses, updatedAddress];
}

export function sortAddressBook(
  addresses: UserAddress[],
  billingAddress: UserAddress | undefined,
  shippingAddress: UserAddress | undefined
): UserAddress[] {
  const sortedAddresses: UserAddress[] = addresses.sort((a, b) => {
    const aIsDefaultBilling = a.id === billingAddress?.id;
    const bIsDefaultBilling = b.id === billingAddress?.id;
    const aIsDefaultShipping = a.id === shippingAddress?.id;
    const bIsDefaultShipping = b.id === shippingAddress?.id;
    return (
      Number(bIsDefaultBilling) - Number(aIsDefaultBilling) ||
      Number(bIsDefaultShipping) - Number(aIsDefaultShipping) ||
      a.name.localeCompare(b.name)
    );
  });

  return sortedAddresses;
}

export function getValidPostalAddressFromUserAddress(
  address: UserAddress | undefined
): PostalAddress {
  // check if the address region is valid
  function validateRegion(): boolean {
    if (address?.country && ['US', 'CA'].includes(address.country)) {
      return !![...supportedStateOptions, ...supportedProvinceOptions].find(
        region => region.key === address?.region
      )?.text?.length;
    }
    // if the country is neither, validate the length of the region text
    return !!address?.region?.trim().length;
  }

  // check if the country ISO code is provided and valid
  const country: boolean = !!allCountryOptions.find(
    country => country.key === address?.country
  )?.text?.length;

  // check if the address lines are not empty
  const addressLines: boolean = !!address?.lines?.[0]?.trim().length;

  // check if the state is valid
  const state: boolean = validateRegion();

  // if all of the 3 values above are true, return the address 1:1
  if (address && country && state && addressLines) {
    return {
      lines: address.lines,
      postalCode: address.postalCode || '',
      city: address.city || '',
      region: address.region || '',
      country: address.country || ''
    };
  }

  // else, return empty address if country and / or state is invalid
  return {
    city: '',
    country: 'US',
    lines: [],
    postalCode: '',
    region: ''
  };
}
