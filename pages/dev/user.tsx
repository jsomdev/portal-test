import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { useRouter } from 'next/dist/client/router';
import JsonFormatter from 'react-json-formatter';

import { useMe } from '@providers/user/userContext';
import { useClaims } from '@services/authentication/claims';
import { getAudience } from '@services/i18n';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { AppLayout, AppLayoutProps } from '@widgets/layouts/appLayout';
import { Head } from '@widgets/metadata/head';

const User: NextPage<AppLayoutProps> = ({ siteMenuItems, mainMenuItems }) => {
  const { pathname } = useRouter();
  const userContext = useMe();
  const claims = useClaims();
  return (
    <AppLayout siteMenuItems={siteMenuItems} mainMenuItems={mainMenuItems}>
      <Head pathname={pathname} title={''} description={''} />
      <div className="wrapper">
        <h1>User Context</h1>
        <JsonFormatter json={JSON.stringify(userContext)} />
      </div>
      <div className="wrapper">
        <h1>Claims</h1>
        <JsonFormatter json={JSON.stringify(claims)} />
      </div>
      {/* TODO */}
      <style jsx>{`
        .wrapper {
          border: 2px solid #fafafa;
          word-break: break-all;
          overflow-wrap: break-word;

          border-radius: 8px;
          max-width: 60%;
          margin: 24px;
          padding: 16px;
        }
      `}</style>
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<AppLayoutProps>> => {
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

export default User;
