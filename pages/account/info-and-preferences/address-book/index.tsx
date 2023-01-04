import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { defineMessages, useIntl } from 'react-intl';

import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { getAudience, messageIds } from '@services/i18n';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import pagePaths from '@utilities/pagePaths';
import { AccountPage } from '@widgets/account/accountPage';
import { AddressBook } from '@widgets/account/address-book/addressBook';
import { getLocalePaths } from '@widgets/page/page.helper';

const messages = defineMessages({
  title: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.title,
    description: 'Address book page title',
    defaultMessage: 'Address book'
  },
  returnLink: {
    id: messageIds.pages.account.sections.infoAndPreferences.overviewLink,
    description: 'Address book page return link',
    defaultMessage: 'Return to Info & Preferences'
  }
});

const AddressBookPage: NextPage<
  Partial<Pick<GlobalDataContextProps, 'mainMenuItems' | 'siteMenuItems'>>
> = ({ siteMenuItems, mainMenuItems }) => {
  const { formatMessage } = useIntl();

  return (
    <AccountPage
      mainMenuItems={mainMenuItems}
      siteMenuItems={siteMenuItems}
      pageTitle={formatMessage(messages.title)}
      localePaths={getLocalePaths(pagePaths.addressBook)}
      breadCrumbItem={{
        link: pagePaths.infoAndPreferences,
        text: formatMessage(messages.returnLink)
      }}
    >
      <AddressBook />
    </AccountPage>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<
  GetStaticPropsResult<
    Partial<Pick<GlobalDataContextProps, 'mainMenuItems' | 'siteMenuItems'>>
  >
> => {
  const { locale } = context;
  const [siteMenuData, mainMenuData] = await Promise.all([
    fetchMenuItemsForSiteHeader(getAudience(locale)),
    fetchMenuItemsForMainHeader(getAudience(locale))
  ]);

  return {
    props: {
      siteMenuItems: siteMenuData || [],
      mainMenuItems: mainMenuData || []
    }
  };
};

export default AddressBookPage;
