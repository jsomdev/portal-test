import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';

import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { getAudience } from '@services/i18n';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';

const Account: NextPage<
  Partial<Pick<GlobalDataContextProps, 'mainMenuItems' | 'siteMenuItems'>>
> = () => {
  return <div>TODO</div>;
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<
  GetStaticPropsResult<
    Partial<Pick<GlobalDataContextProps, 'mainMenuItems' | 'siteMenuItems'>>
  >
> => {
  try {
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
  } catch (e) {
    return { notFound: true };
  }
};

export default Account;
