import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import JsonFormatter from 'react-json-formatter';

import { useMe } from '@providers/user/userContext';
import { useClaims } from '@services/authentication/claims';
import { getAudience } from '@services/i18n';
import { MenuItem } from '@services/portal-api';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { AppLayout } from '@widgets/layouts/appLayout';

const User: NextPage = () => {
  const userContext = useMe();
  const claims = useClaims();
  return (
    <AppLayout>
      <div className="wrapper">
        <h1>User Context</h1>
        <JsonFormatter json={JSON.stringify(userContext)} />
      </div>
      <div className="wrapper">
        <h1>Claims</h1>
        <JsonFormatter json={JSON.stringify(claims)} />
      </div>
      {/* <style jsx>{`
        .wrapper {
          border: 2px solid #fafafa;
          word-break: break-all;
          overflow-wrap: break-word;

          border-radius: 8px;
          max-width: 60%;
          margin: 24px;
          padding: 16px;
        }
      `}</style> */}
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<
  GetStaticPropsResult<{ siteMenuItems: MenuItem[]; mainMenuItems: MenuItem[] }>
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

export default User;
