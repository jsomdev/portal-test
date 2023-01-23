import React, { useContext, useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import { AccountInfo } from '@azure/msal-browser';
import { useIsAuthenticated } from '@azure/msal-react';
import { ErrorMessage } from '@components/errors/errorMessage';
import { NextLink } from '@components/link/nextLink';
import {
  ActionButton,
  FontWeights,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { AddressBookContext } from '@providers/address-book/addressBookContext';
import { useMe } from '@providers/user/userContext';
import { getMsalInstance } from '@services/authentication/authenticationConfiguration';
import { useClaims } from '@services/authentication/claims';
import { messageIds } from '@services/i18n';
import { UserFormatter } from '@services/i18n/formatters/entity-formatters/userFormatter';
import { fetchMyOrders } from '@services/portal-api/orders';
import { QUERYKEYS } from '@services/react-query/constants';
import pagePaths from '@utilities/pagePaths';

import { AddressBookAddress } from '../address-book/addressBookAddress';
import { OrderCard } from '../orders/orderCard';
import {
  AddressViewModel,
  mapAddressToAddressViewModel
} from '../shared/accountAddress.helper';
import { AccountOverviewTags } from '../shared/accountOverviewTags';
import { OverviewCompanyInfo } from './overviewCompanyInfo';
import { OverviewProfileInfo } from './overviewProfileInfo';

const messages = defineMessages({
  welcome: {
    id: messageIds.pages.account.overview.welcome,
    description: 'Text to welcome user',
    defaultMessage: 'Welcome'
  },
  subTitle: {
    id: messageIds.pages.account.overview.subTitle,
    description: 'Account page sub title',
    defaultMessage: 'Subtitle default text'
  },
  recentOrders: {
    id: messageIds.pages.account.overview.orders.title,
    description: 'Recent orders title',
    defaultMessage: 'Your recent orders'
  },
  viewAllRecentOrders: {
    id: messageIds.pages.account.overview.orders.viewAllText,
    description: 'View all previous orders link text',
    defaultMessage: 'View all previous orders'
  },
  viewAllAddresses: {
    id: messageIds.pages.account.overview.addressBook.viewAllText,
    description: 'View all addresses link text',
    defaultMessage: 'View all addresses'
  },
  profileInformation: {
    id: messageIds.pages.account.overview.profileInformation.title,
    description: 'Profile sub section title',
    defaultMessage: 'Profile information'
  },
  addressBookTitle: {
    id: messageIds.pages.account.overview.addressBook.title,
    description: 'Address book sub section title',
    defaultMessage: 'Address book'
  }
});

interface OverviewStyles {
  welcomeSection: IStackStyles;
  subHeader: ITextStyles;
  header: ITextStyles;
}

export const Overview: React.FC = () => {
  const { spacing, effects, palette } = useTheme();
  const intl = useIntl();
  const { formatMessage } = intl;
  const account: AccountInfo | undefined =
    getMsalInstance()?.getAllAccounts()[0];
  const isAuthenticated = useIsAuthenticated();
  const { accountId } = useClaims();
  const claims = useClaims();
  const { me, isOrderHistoryEnabled, showCustomerDetails } = useMe();

  const {
    billingAddress,
    shippingAddress,
    addressBookError,
    addressBookStatus
  } = useContext(AddressBookContext);

  // Write a yup object to validate the address

  const { data: orders, status: ordersStatus } = useQuery(
    [QUERYKEYS.recentOrders, isAuthenticated, accountId, isOrderHistoryEnabled],
    () =>
      fetchMyOrders(2, 0, isAuthenticated, isOrderHistoryEnabled, accountId),
    {
      keepPreviousData: true,
      enabled: !!isAuthenticated && isOrderHistoryEnabled && !!accountId,
      refetchOnMount: true,
      refetchOnWindowFocus: true
    }
  );

  const formattedBillingAddress: AddressViewModel | undefined = useMemo(() => {
    return (
      (billingAddress && mapAddressToAddressViewModel(billingAddress)) ||
      undefined
    );
  }, [billingAddress]);

  const formattedShippingAddress: AddressViewModel | undefined = useMemo(() => {
    return (
      (shippingAddress && mapAddressToAddressViewModel(shippingAddress)) ||
      undefined
    );
  }, [shippingAddress]);

  const name = useMemo(() => {
    const userFormatter = new UserFormatter(me, account);
    const name = userFormatter.formatDisplayName(
      `${claims.firstName} ${claims.lastName}`
    );
    return name;
  }, [account, claims, me]);

  const styles: OverviewStyles = {
    welcomeSection: {
      root: {
        backgroundColor: palette.neutralLight,
        padding: spacing.l1,
        borderRadius: effects.roundedCorner4
      }
    },
    header: {
      root: {
        fontWeight: FontWeights.semibold
      }
    },
    subHeader: {
      root: {
        color: palette.neutralDark
      }
    }
  };

  return (
    <Stack tokens={{ childrenGap: spacing.l2 }}>
      <Stack styles={styles.welcomeSection} tokens={{ childrenGap: spacing.m }}>
        <Stack tokens={{ childrenGap: spacing.s1 }}>
          <Stack.Item>
            <Text styles={styles.header} variant="large">
              {formatMessage(messages.welcome, {
                name
              })}
            </Text>
          </Stack.Item>
          {me?.contactInfo?.jobTitle && me?.account?.name && (
            <Stack.Item>
              <Text styles={styles.subHeader}>
                {`${me.contactInfo.jobTitle}, ${me.account.name}`}
              </Text>
            </Stack.Item>
          )}
        </Stack>
        <Stack tokens={{ childrenGap: spacing.m }}>
          <AccountOverviewTags />
          <Stack.Item>
            <Text variant="medium">{formatMessage(messages.subTitle)}</Text>
          </Stack.Item>
        </Stack>
      </Stack>
      {ordersStatus === 'success' && orders?.value.length && (
        <Stack tokens={{ childrenGap: spacing.m }}>
          <Stack.Item>
            <Text variant="large" as={'h2'}>
              {formatMessage(messages.recentOrders)}
            </Text>
          </Stack.Item>
          <Stack.Item>
            <Stack horizontal wrap tokens={{ childrenGap: spacing.m }}>
              {orders.value.map(order => {
                return (
                  <OrderCard compactView={true} key={order.id} order={order} />
                );
              })}
            </Stack>
          </Stack.Item>
          <Stack>
            <NextLink href={pagePaths.orders} passHref>
              <a>
                <ActionButton
                  iconProps={{ iconName: 'ChevronRight' }}
                  text={formatMessage(messages.viewAllRecentOrders)}
                />
              </a>
            </NextLink>
          </Stack>
        </Stack>
      )}
      <Stack tokens={{ childrenGap: spacing.m }}>
        <Stack.Item>
          <Text variant="large" as={'h2'}>
            {formatMessage(messages.profileInformation)}
          </Text>
        </Stack.Item>
        <Stack.Item>
          <Stack horizontal wrap tokens={{ childrenGap: spacing.m }}>
            <OverviewProfileInfo me={me} formattedName={name} />
            {showCustomerDetails && <OverviewCompanyInfo me={me} />}
          </Stack>
        </Stack.Item>
      </Stack>
      <Stack tokens={{ childrenGap: spacing.m }}>
        <Stack.Item>
          <Text variant="large" as={'h2'}>
            {formatMessage(messages.addressBookTitle)}
          </Text>
        </Stack.Item>
        {addressBookStatus === 'error' && (
          <ErrorMessage error={addressBookError} logError={true} />
        )}
        <Stack.Item>
          <Stack horizontal wrap tokens={{ childrenGap: spacing.m }}>
            {formattedBillingAddress && (
              <AddressBookAddress
                address={formattedBillingAddress}
                isDefaultBilling={true}
                isDefaultShipping={shippingAddress?.id === billingAddress?.id}
              />
            )}
            {formattedShippingAddress &&
              shippingAddress?.id !== billingAddress?.id && (
                <AddressBookAddress
                  address={formattedShippingAddress}
                  isDefaultShipping={true}
                />
              )}
          </Stack>
        </Stack.Item>

        <Stack>
          <NextLink href={pagePaths.addressBook} passHref>
            <a>
              <ActionButton
                iconProps={{ iconName: 'ChevronRight' }}
                text={formatMessage(messages.viewAllAddresses)}
              />
            </a>
          </NextLink>
        </Stack>
      </Stack>
    </Stack>
  );
};
