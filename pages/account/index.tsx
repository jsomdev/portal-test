import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';

import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { AppLayoutProps } from '@widgets/layouts/appLayout';

const Account: NextPage<AppLayoutProps> = () => {
  return <div>TODO</div>;
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<AppLayoutProps>
> => {
  try {
    const [siteMenuData, mainMenuData] = await Promise.all([
      fetchMenuItemsForSiteHeader(),
      fetchMenuItemsForMainHeader()
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
