import { PostalAddress } from '@services/portal-api';
import { UserAddress } from '@services/portal-api/base/types';
import {
  allCountryOptions,
  supportedProvinceOptions,
  supportedStateOptions
} from '@utilities/places';

export interface AddressViewModel {
  country: string | undefined;
  countryCode: string;
  postalCode: string | undefined;
  city: string | undefined;
  address: (string | undefined)[] | undefined;
  region: string | undefined;
  name: string | undefined;
}

/**
 * This function maps an address a Postal or User address to an AddressViewModel
 * @param address a valid PostalAddress or UserAddress
 * @returns an AddressViewModel
 */
export function mapPostalAddressToAddressViewModel(
  address: PostalAddress | UserAddress | undefined | null
): AddressViewModel | undefined {
  if (!address) {
    return undefined;
  }
  // Function that accepts a full US state name and return the US state code
  function getUsStateCode(name: string | undefined | null): string | undefined {
    return (
      (supportedStateOptions.find(state => {
        return state.text.toLowerCase() === name?.toLocaleLowerCase();
      })?.key as string) ||
      name ||
      undefined
    );
  }

  // Function that accepts a full CA province name and return the CA province code
  function getCaProvinceCode(
    name: string | undefined | null
  ): string | undefined {
    return (
      (supportedProvinceOptions.find(province => {
        return province.text.toLowerCase() === name?.toLocaleLowerCase();
      })?.key as string) ||
      name ||
      undefined
    );
  }

  function getRegionText(
    region: string | undefined | null,
    country: string | undefined | null
  ): string | undefined {
    if (country === 'US') {
      return getUsStateCode(region);
    }
    if (country === 'CA') {
      return getCaProvinceCode(region);
    }
    if (region?.length) {
      return region;
    }
    return undefined;
  }

  // Function that accepts a country code and returns the full country name
  function getCountryText(code: string | undefined | null): string | undefined {
    return (
      (allCountryOptions.find(country => {
        return (
          country.key.toLocaleString().toLocaleLowerCase() ===
          code?.toLocaleLowerCase()
        );
      })?.text as string) ||
      code ||
      undefined
    );
  }

  /**
   * This function checks if the address lines are valid and not empty, otherwise a fallback value is used
   * @param lines an array of strings
   * @returns an array of address line strings
   */
  function getAddressLines(
    lines: (string | null)[] | undefined
  ): (string | undefined)[] {
    if (!lines || !lines?.length) {
      return [undefined];
    }
    return lines?.map(line => {
      if (line?.length && line !== undefined) {
        return line;
      }
      return undefined;
    });
  }

  return {
    country: getCountryText(address?.country),
    postalCode: address?.postalCode || undefined,
    city: address?.city || undefined,
    address: getAddressLines(address?.lines),
    region: getRegionText(address?.region, address?.country),
    countryCode: address?.country || 'US',
    name: address?.name || undefined
  };
}
