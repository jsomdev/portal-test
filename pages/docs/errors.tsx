import React, { useEffect, useState } from 'react';

import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage
} from 'next';
import { useRouter } from 'next/router';

import { AppErrorBoundary } from '@components/errors/appErrorBoundary';
import { ErrorMessage } from '@components/errors/errorMessage';
import { Stack, useTheme } from '@fluentui/react';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { AppLayout, AppLayoutProps } from '@widgets/layouts/appLayout';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';
import Page from '@widgets/page/page';

const SilentError = () => {
  const [hasError, setError] = useState(false);
  useEffect(() => {
    if (hasError) {
      throw new Error('Something went wrong');
    }
  }, [hasError]);
  return <button onClick={() => setError(true)}>Client Silent Error</button>;
};

const PageContentClientSideError = () => {
  const [hasError, setError] = useState(false);
  useEffect(() => {
    if (hasError) {
      throw new Error('Something went wrong');
    }
  }, [hasError]);

  return (
    <button onClick={() => setError(true)}>
      Page Content ClientSide Error
    </button>
  );
};

const ErrorsTestPage: NextPage<AppLayoutProps> = ({
  siteMenuItems,
  mainMenuItems
}) => {
  const { spacing } = useTheme();
  const router = useRouter();
  return (
    <Page
      metaProps={{
        title: 'Errors Test Page',
        noIndex: true
      }}
      i18nProps={{}}
    >
      <GlobalDataProvider
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <ContentContainerStack
            innerStackProps={{
              horizontalAlign: 'center',
              tokens: { childrenGap: spacing.l2 },
              styles: {
                root: {
                  margin: spacing.l1
                }
              }
            }}
          >
            <Stack.Item>
              <AppErrorBoundary silent>
                <SilentError />
              </AppErrorBoundary>
            </Stack.Item>
            <Stack.Item>
              <PageContentClientSideError />
            </Stack.Item>
            <Stack.Item>
              <button onClick={() => router.push('?appError=true')}>
                Client Application Level Error
              </button>
            </Stack.Item>
            <Stack.Item>
              <button onClick={() => router.push('?serverError=true')}>
                Server Error
              </button>
            </Stack.Item>
            <ErrorMessage
              logError={false}
              message={'This is an example error with an error message'}
            />
          </ContentContainerStack>
        </AppLayout>
      </GlobalDataProvider>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<GetServerSidePropsResult<AppLayoutProps>> => {
  const { locale, query } = context;
  const [siteMenuData, mainMenuData] = await Promise.all([
    fetchMenuItemsForSiteHeader(locale),
    fetchMenuItemsForMainHeader(locale)
  ]);

  if (query['serverError']) {
    throw new Error('Server Error');
  }
  return {
    props: {
      siteMenuItems: siteMenuData,
      mainMenuItems: mainMenuData
    }
  };
};

export default ErrorsTestPage;
