import React, { useMemo } from 'react';

import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import {
  ISpinnerStyles,
  Spinner,
  SpinnerSize,
  Stack,
  useTheme
} from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { useClaims } from '@services/authentication/claims';
import { fetchMyQuoteRequests } from '@services/portal-api/quoteRequests';
import { QUERYKEYS } from '@services/react-query/constants';
import { scrollToTop } from '@utilities/scrollToTop';
import { ResultViewPagination } from '@widgets/finder/result-view/product-result-view-pagination/resultViewPagination';

import { QuoteRequestOverviewCard } from './quoteRequestCard';

interface QuoteRequestsOverviewStyles {
  spinner: ISpinnerStyles;
}

export const QuoteRequestsOverview: React.FC = () => {
  const PAGE_SIZE = 10;
  const { spacing, fonts, palette } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  const { accountId } = useClaims();
  const { isQuoteRequestHistoryEnabled } = useMe();
  const router = useRouter();

  const page: number | undefined = useMemo(() => {
    const pageParam = router.query.page;
    if (!pageParam || isNaN(Number(pageParam))) {
      return 1;
    }
    return Number(pageParam);
  }, [router.query.page]);

  const { data: quoteRequests, status: quoteRequestsStatus } = useQuery(
    [
      QUERYKEYS.quoteRequests,
      page,
      isAuthenticated,
      accountId,
      isQuoteRequestHistoryEnabled
    ],
    () =>
      fetchMyQuoteRequests(PAGE_SIZE, (page - 1) * PAGE_SIZE, isAuthenticated),
    {
      keepPreviousData: true,
      enabled: !!isAuthenticated && isQuoteRequestHistoryEnabled && !!accountId,
      refetchOnMount: true,
      refetchOnWindowFocus: true
    }
  );

  const quoteRequestsCount: number = useMemo(() => {
    return quoteRequests?.['@odata.count'] || 0;
  }, [quoteRequests]);

  function updatePage(newPage: number): void {
    router.query.page = newPage >= 1 ? newPage.toString() : '1';
    router.push(router, undefined, { shallow: true });
  }

  const styles: QuoteRequestsOverviewStyles = {
    spinner: {
      label: {
        ...fonts.mediumPlus,
        color: palette.themeDark
      }
    }
  };

  if (quoteRequestsStatus === 'loading') {
    return (
      <Stack
        verticalAlign="center"
        horizontalAlign="center"
        tokens={{ childrenGap: spacing.l1, padding: `${spacing.l1} 0 ` }}
      >
        <Spinner styles={styles.spinner} size={SpinnerSize.large} />
      </Stack>
    );
  }

  return (
    <Stack>
      {quoteRequestsStatus === 'success' && quoteRequests?.value.length && (
        <Stack tokens={{ childrenGap: spacing.m }}>
          <Stack.Item>
            <Stack horizontal wrap tokens={{ childrenGap: spacing.m }}>
              {quoteRequests.value.map(quote => {
                return (
                  <QuoteRequestOverviewCard
                    compactView={false}
                    key={quote.id}
                    quoteRequest={quote}
                  />
                );
              })}
            </Stack>
          </Stack.Item>
          <ResultViewPagination
            totalItems={quoteRequestsCount}
            currentPage={page}
            pageSize={PAGE_SIZE}
            onPageChange={newPage => {
              scrollToTop('body');
              updatePage(newPage);
            }}
          />
        </Stack>
      )}
    </Stack>
  );
};
