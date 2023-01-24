import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { defineMessages, useIntl } from 'react-intl';

import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { getAudienceLocale, messageIds } from '@services/i18n';
import { fetchAllAttributeGroups } from '@services/portal-api/attributeGroups';
import { fetchAllAttributeTypes } from '@services/portal-api/attributeTypes';
import { fetchAllConditionTypes } from '@services/portal-api/conditionTypes';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import pagePaths from '@utilities/pagePaths';
import { DetailedCompare } from '@widgets/compare/detailed-comparison/detailedCompare';
import { AppLayout } from '@widgets/layouts/appLayout';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';
import Page from '@widgets/page/page';
import { getLocalePaths } from '@widgets/page/page.helper';

const messages = defineMessages({
  title: {
    id: messageIds.pages.compare.title,
    description: 'Title for the compare page',
    defaultMessage: 'Compare Products'
  }
});

const Compare: NextPage<
  Partial<
    Pick<
      GlobalDataContextProps,
      | 'attributeGroups'
      | 'attributeTypes'
      | 'conditionTypes'
      | 'mainMenuItems'
      | 'siteMenuItems'
    >
  >
> = ({
  siteMenuItems,
  mainMenuItems,
  attributeGroups,
  attributeTypes,
  conditionTypes
}) => {
  const { formatMessage } = useIntl();

  return (
    <Page
      metaProps={{
        title: formatMessage(messages.title),
        noIndex: true
      }}
      i18nProps={{
        localePaths: getLocalePaths(pagePaths.compare)
      }}
    >
      <GlobalDataProvider
        attributeGroups={attributeGroups}
        attributeTypes={attributeTypes}
        conditionTypes={conditionTypes}
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <ContentContainerStack>
            <DetailedCompare />
          </ContentContainerStack>
        </AppLayout>
      </GlobalDataProvider>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<
  GetStaticPropsResult<
    Partial<
      Pick<
        GlobalDataContextProps,
        | 'attributeGroups'
        | 'attributeTypes'
        | 'mainMenuItems'
        | 'siteMenuItems'
        | 'conditionTypes'
      >
    >
  >
> => {
  const locale = getAudienceLocale(context.locale);
  const [
    siteMenuData,
    mainMenuData,
    attributeGroupsData,
    attributeTypesData,
    conditionTypesData
  ] = await Promise.all([
    fetchMenuItemsForSiteHeader(locale),
    fetchMenuItemsForMainHeader(locale),
    fetchAllAttributeGroups(locale),
    fetchAllAttributeTypes(locale),
    fetchAllConditionTypes(locale)
  ]);

  return {
    props: {
      siteMenuItems: siteMenuData || [],
      mainMenuItems: mainMenuData || [],
      conditionTypes: conditionTypesData || [],
      attributeGroups: attributeGroupsData,
      attributeTypes: attributeTypesData
    }
  };
};

export default Compare;
