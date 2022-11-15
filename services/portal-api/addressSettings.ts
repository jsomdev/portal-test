import { AddressBookSettingValue } from '@providers/address-book/addressBook.types';
import {
  mergeAddressBookAddress,
  removeUserAddressFromArray
} from '@providers/address-book/addressBookHelper';

import { Json } from './';
import { BaseResource } from './base/baseResource';
import { UserAddress } from './base/types';
import { SETTINGKEYS } from './constants';
import { Setting } from './models/Setting';
import { QueryOptions } from './o-data/queryOptions';

/**
 * Function that fetches all the settings that match the addresses key, UserId and ApplicationId.
 */
export const fetchAddressBookSetting = async (
  isAuthenticated: boolean
): Promise<Setting | undefined> => {
  if (!isAuthenticated) {
    return undefined;
  }
  const settingsResource: BaseResource<Setting> = new BaseResource<Setting>(
    '/me/settings'
  );
  const queryOptions: Partial<QueryOptions> = {
    filterQuery: `key eq '${SETTINGKEYS.addressBook}'`
  };
  const settings = await settingsResource.getEntities(queryOptions);

  if (settings.value.length > 1) {
    console.warn('Unexpectedly found more than 1 address book setting.');
  }
  return settings.value[0];
};

export const addAddressToAddressBookSetting = async (
  address: UserAddress,
  isAuthenticated: boolean,
  setDefault: boolean,
  setDefaultShipping: boolean,
  setting?: Setting
): Promise<Setting | undefined> => {
  if (!isAuthenticated) {
    return undefined;
  }

  const settingsResource: BaseResource<Setting> = new BaseResource<Setting>(
    '/me/settings'
  );

  if (!setting) {
    setting = await fetchAddressBookSetting(isAuthenticated);
  }

  if (setting?.id) {
    return settingsResource.putEntity(
      setting.id,
      JSON.stringify({
        ...setting,
        value: {
          addresses: mergeAddressBookAddress(
            address,
            setting?.value?.addresses
          ),
          defaultBillingAddressId: setDefault
            ? address.id
            : setting?.value?.defaultBillingAddressId,
          defaultShippingAddressId: setDefaultShipping
            ? address.id
            : setting?.value?.defaultShippingAddressId
        } as AddressBookSettingValue
      })
    );
  } else {
    setting = {
      key: SETTINGKEYS.addressBook,
      value: {
        addresses: [address],
        defaultBillingAddressId: setDefault
          ? address.id
          : setting?.value?.defaultBillingAddressId,
        defaultShippingAddressId: setDefaultShipping
          ? address.id
          : setting?.value?.defaultShippingAddressId
      } as Json
    } as Setting;
    return settingsResource.postEntity(
      JSON.stringify({
        ...setting
      })
    );
  }
};

export const setAddressDefaultInAddressBookSetting = async (
  billingAddressId: string,
  shippingAddressId: string,
  isAuthenticated: boolean,
  setting?: Setting
): Promise<Setting | undefined> => {
  if (!isAuthenticated) {
    return undefined;
  }

  const settingsResource: BaseResource<Setting> = new BaseResource<Setting>(
    '/me/settings'
  );

  if (!setting) {
    setting = await fetchAddressBookSetting(isAuthenticated);
  }

  if (setting?.id) {
    return settingsResource.putEntity(
      setting.id,
      JSON.stringify({
        ...setting,
        value: {
          addresses: [...(setting?.value?.addresses || [])],
          defaultBillingAddressId: billingAddressId,
          defaultShippingAddressId: shippingAddressId
        }
      })
    );
  }
  return undefined;
};

/**
 * Async function that attempts to remove an address from the setting.
 * @param addressId address ID that identifies the address that needs to be removed
 * @param isAuthenticated boolean that indicates if the user is authenticated
 * @param setting current setting
 */
export const removeAddressFromAddressBookSetting = async (
  addressId: string,
  isAuthenticated: boolean,
  setting?: Setting
): Promise<Setting | undefined> => {
  if (!isAuthenticated) {
    return undefined;
  }

  const settingsResource: BaseResource<Setting> = new BaseResource<Setting>(
    '/me/settings'
  );

  if (!setting) {
    setting = await fetchAddressBookSetting(isAuthenticated);
  }

  if (setting?.id) {
    return settingsResource.putEntity(
      setting.id,
      JSON.stringify({
        ...setting,
        value: {
          addresses: removeUserAddressFromArray(
            addressId,
            setting?.value?.addresses || []
          ),
          defaultBillingAddressId: setting?.value?.defaultBillingAddressId,
          defaultShippingAddressId: setting?.value?.defaultShippingAddressId
        }
      })
    );
  }
  return undefined;
};
