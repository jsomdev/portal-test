import { UserAddress } from '@services/portal-api/base/types';

export interface AddressBookSettingValue {
  addresses: UserAddress[];
  defaultBillingAddressId: string | undefined;
  defaultShippingAddressId: string | undefined;
}
