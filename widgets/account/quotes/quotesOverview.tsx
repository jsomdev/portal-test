import React, { useMemo } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { PortalMessageBar } from '@components/messages/portalMessageBar';
import { LoadingSpinner } from '@components/spinners/loadingSpinner';
import { MessageBarType, Stack, Text, useTheme } from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { messageIds } from '@services/i18n';
import { fetchMyQuotes } from '@services/portal-api/quotes';
import { QUERYKEYS } from '@services/react-query/constants';
import { scrollToTop } from '@utilities/scrollToTop';
import { ResultViewPagination } from '@widgets/finder/result-view/product-result-view-pagination/resultViewPagination';

import { QuoteCard } from './quoteCard';

const messages = defineMessages({
  error: {
    id: messageIds.pages.account.quotes.overviewError,
    description: 'Error message when quote overview page fails to load',
    defaultMessage: 'Something went wrong'
  },
  noData: {
    id: messageIds.pages.account.quotes.overviewEmpty,
    description: 'Message when there are no quotes',
    defaultMessage: 'You do not have any quotes'
  }
});

export const QuotesOverview: React.FC = () => {
  const PAGE_SIZE = 10;
  const { spacing } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  const { formatMessage } = useIntl();
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

  if (quotesStatus === 'error') {
    return (
      <PortalMessageBar messageBarType={MessageBarType.error}>
        <Text>{formatMessage(messages.error)}</Text>
      </PortalMessageBar>
    );
  }

  if (quotesStatus === 'loading') {
    return <LoadingSpinner />;
  }

  if (!quotes || !quotes?.value || quotes?.value.length === 0) {
    return (
      <PortalMessageBar messageBarType={MessageBarType.warning}>
        <Text>{formatMessage(messages.noData)}</Text>
      </PortalMessageBar>
    );
  }

  return (
    <Stack>
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
    </Stack>
  );
};
