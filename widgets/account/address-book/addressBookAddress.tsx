import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  IButtonStyles,
  IStackStyles,
  ITextStyles,
  Icon,
  IconButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';

import { AccountAddress } from '../shared/accountAddress';
import { AddressViewModel } from '../shared/accountAddress.helper';

interface AddressBookAddressProps {
  address: AddressViewModel;
  isDefaultShipping?: boolean;
  isDefaultBilling?: boolean;
}

interface AddressBookAddressStyles {
  container: IStackStyles;
  tagContainer: IStackStyles;
  editButton: IButtonStyles;
  lightText: ITextStyles;
  name: ITextStyles;
}

const messages = defineMessages({
  defaultBilling: {
    id: messageIds.pages.account.overview.addressBook.billingAddress,
    description: 'Default billing address tag',
    defaultMessage: 'Default billing address'
  },
  defaultShipping: {
    id: messageIds.pages.account.overview.addressBook.shippingAddress,
    description: 'Default shipping address tag',
    defaultMessage: 'Default shipping address'
  }
});

export const AddressBookAddress: React.FC<AddressBookAddressProps> = ({
  address,
  isDefaultBilling,
  isDefaultShipping
}) => {
  const { spacing, effects, palette, semanticColors, fonts } = useTheme();
  const { formatMessage } = useIntl();

  const styles: AddressBookAddressStyles = {
    container: {
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner4,
        flex: '1 1 0',
        minWidth: rem(300)
      }
    },
    tagContainer: {
      root: {
        borderTop: `1px solid ${semanticColors.variantBorder}`,
        marginTop: 'auto !important'
      }
    },
    editButton: {
      icon: {
        ...fonts.large
      }
    },
    lightText: {
      root: {
        color: palette.neutralDark
      }
    },
    name: {
      root: {
        ...fonts.mediumPlus
      }
    }
  };

  return (
    <Stack styles={styles.container}>
      {address.name && (
        <Stack
          tokens={{ padding: spacing.m }}
          horizontal
          horizontalAlign="space-between"
          verticalAlign="center"
        >
          <Stack>
            <Text styles={styles.name}>{address.name}</Text>
          </Stack>
          <Stack>
            <IconButton
              styles={styles.editButton}
              iconProps={{ iconName: 'Edit' }}
            />
          </Stack>
        </Stack>
      )}
      <Stack tokens={{ padding: `0 ${spacing.m} ${spacing.m}` }}>
        <AccountAddress address={address} contentSpacing={spacing.s2} />
      </Stack>
      <Stack styles={styles.tagContainer} tokens={{ padding: `${spacing.m}` }}>
        {isDefaultBilling && (
          <Stack
            horizontal
            verticalAlign="center"
            tokens={{ childrenGap: spacing.s1 }}
          >
            <Icon iconName="CheckMark" />
            <Text styles={styles.lightText}>
              {formatMessage(messages.defaultBilling)}
            </Text>
          </Stack>
        )}
        {isDefaultShipping && (
          <Stack
            horizontal
            verticalAlign="center"
            tokens={{ childrenGap: spacing.s1 }}
          >
            <Icon iconName="CheckMark" />
            <Text styles={styles.lightText}>
              {formatMessage(messages.defaultShipping)}
            </Text>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
