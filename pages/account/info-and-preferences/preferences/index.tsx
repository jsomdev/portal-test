import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { defineMessages, useIntl } from 'react-intl';

import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { messageIds, supportedLocales } from '@services/i18n';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';
import pagePaths from '@utilities/pagePaths';
import { AccountPage } from '@widgets/account/accountPage';
import { Preferences } from '@widgets/account/preferences/preferences';
import { getLocalePaths } from '@widgets/page/page.helper';

const messages = defineMessages({
  title: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .preferences.title,
    description: 'Preferences page title',
    defaultMessage: 'Preferences'
  },
  returnLink: {
    id: messageIds.pages.account.sections.infoAndPreferences.overviewLink,
    description: 'Address book page return link',
    defaultMessage: 'Return to Info & Preferences'
  }
});

const PreferencesPage: NextPage<
  Partial<Pick<GlobalDataContextProps, 'mainMenuItems' | 'siteMenuItems'>>
> = ({ siteMenuItems, mainMenuItems }) => {
  const { formatMessage } = useIntl();

  return (
    <AccountPage
      mainMenuItems={mainMenuItems}
      siteMenuItems={siteMenuItems}
      pageTitle={formatMessage(messages.title)}
      localePaths={getLocalePaths(pagePaths.preferences)}
      breadCrumbItem={{
        link: pagePaths.infoAndPreferences,
        text: formatMessage(messages.returnLink)
      }}
    >
      <Preferences />
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
  const { locale: contextLocale } = context;
  let locale = contextLocale;
  if (locale === ENVIRONMENT_VARIABLES.defaultLocale || locale === 'default') {
    locale = 'en-us';
  }
  const [siteMenuData, mainMenuData] = await Promise.all([
    fetchMenuItemsForSiteHeader(locale),
    fetchMenuItemsForMainHeader(locale)
  ]);

  return {
    props: {
      siteMenuItems: siteMenuData || [],
      mainMenuItems: mainMenuData || []
    }
  };
};

export default PreferencesPage;
