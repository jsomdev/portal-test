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
import { fetchMyQuotes } from '@services/portal-api/quotes';
import { QUERYKEYS } from '@services/react-query/constants';
import { scrollToTop } from '@utilities/scrollToTop';
import { ResultViewPagination } from '@widgets/finder/result-view/product-result-view-pagination/resultViewPagination';

import { QuoteCard } from './quoteCard';

interface QuotesOverviewStyles {
  spinner: ISpinnerStyles;
}

export const QuotesOverview: React.FC = () => {
  const PAGE_SIZE = 10;
  const { spacing, fonts, palette } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  const { isQuoteHistoryEnabled } = useMe();
  const router = useRouter();

  const page: number | undefined = useMemo(() => {
    const pageParam = router.query.page;
    if (!pageParam || isNaN(Number(pageParam))) {
      return 1;
    }
    return Number(pageParam);
  }, [router.query.page]);

  const { data: quotes, status: quotesStatus } = useQuery(
    [QUERYKEYS.quotes, page, isAuthenticated],
    () =>
      fetchMyQuotes(
        PAGE_SIZE,
        (page - 1) * PAGE_SIZE,
        isAuthenticated,
        isQuoteHistoryEnabled
      ),
    {
      keepPreviousData: true,
      enabled: isAuthenticated,
      refetchOnMount: true,
      refetchOnWindowFocus: true
    }
  );

  const quotesCount: number = useMemo(() => {
    return quotes?.['@odata.count'] || 0;
  }, [quotes]);

  function updatePage(newPage: number): void {
    router.push(
      { query: { page: newPage >= 1 ? newPage.toString() : '1' } },
      undefined,
      { shallow: true }
    );
  }

  const styles: QuotesOverviewStyles = {
    spinner: {
      label: {
        ...fonts.mediumPlus,
        color: palette.themeDark
      }
    }
  };

  if (quotesStatus === 'loading') {
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
      {quotesStatus === 'success' && quotes?.value.length && (
        <Stack tokens={{ childrenGap: spacing.m }}>
          <Stack.Item>
            <Stack horizontal wrap tokens={{ childrenGap: spacing.l2 }}>
              {quotes.value.map(quote => {
                return (
                  <QuoteCard compactView={false} key={quote.id} quote={quote} />
                );
              })}
            </Stack>
          </Stack.Item>
          <ResultViewPagination
            totalItems={quotesCount}
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
