import React from 'react';

import { Stack, Text, useTheme } from '@fluentui/react';

import { AddressViewModel } from './accountAddress.helper';

interface AddressProps {
  address: AddressViewModel;
  contentSpacing: string;
}

export const AccountAddress: React.FC<AddressProps> = ({
  address,
  contentSpacing
}) => {
  const { spacing } = useTheme();

  // US and CA addresses are formatted differently
  if (address.countryCode && ['US', 'CA'].includes(address.countryCode)) {
    return (
      <Stack tokens={{ childrenGap: contentSpacing }}>
        {address.address?.map?.(line => (
          <Stack key={line} className="account-address-line">
            <Text>{line}</Text>
          </Stack>
        ))}
        <Stack
          className="account-address-city"
          horizontal
          tokens={{ childrenGap: spacing.s2 }}
        >
          <Text>{`${address.city},`}</Text>
          <Text>{address.region}</Text>
          <Text>{address.postalCode}</Text>
        </Stack>
        <Stack className="account-address-country">
          <Text>{address.country}</Text>
        </Stack>
      </Stack>
    );
  }

  // Default format
  return (
    <Stack tokens={{ childrenGap: contentSpacing }}>
      {address.address?.map?.(line => (
        <Stack key={line} className="account-address-line">
          <Text>{line}</Text>
        </Stack>
      ))}
      <Stack
        className="account-address-city"
        horizontal
        tokens={{ childrenGap: spacing.s2 }}
      >
        <Text>{address.postalCode}</Text>
        <Text>{address.city}</Text>
      </Stack>
      <Stack>
        <Text>{address.region}</Text>
      </Stack>
      <Stack className="account-address-country">
        <Text>{address.country}</Text>
      </Stack>
    </Stack>
  );
};
