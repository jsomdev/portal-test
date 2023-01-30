import React, { useMemo } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { ErrorMessage } from '@components/errors/errorMessage';
import { PortalMessageBar } from '@components/messages/portalMessageBar';
import { LoadingSpinner } from '@components/spinners/loadingSpinner';
import { MessageBarType, Stack, Text, useTheme } from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { useClaims } from '@services/authentication/claims';
import { messageIds } from '@services/i18n';
import { fetchMyQuoteRequests } from '@services/portal-api/quoteRequests';
import { QUERYKEYS } from '@services/react-query/constants';
import { scrollToTop } from '@utilities/scrollToTop';
import { ResultViewPagination } from '@widgets/finder/result-view/product-result-view-pagination/resultViewPagination';

import { QuoteRequestOverviewCard } from './quoteRequestCard';

const messages = defineMessages({
  error: {
    id: messageIds.pages.account.quoteRequests.overviewError,
    description: 'Error message when quote request overview page fails to load',
    defaultMessage: 'Something went wrong'
  },
  noData: {
    id: messageIds.pages.account.quoteRequests.overviewEmpty,
    description: 'Message when there are no quote requests',
    defaultMessage: 'You do not have any quote requests'
  }
});

export const QuoteRequestsOverview: React.FC = () => {
  const PAGE_SIZE = 10;
  const { spacing } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  const { accountId } = useClaims();
  const { formatMessage } = useIntl();
  const { isQuoteRequestHistoryEnabled } = useMe();
  const router = useRouter();

  const page: number | undefined = useMemo(() => {
    const pageParam = router.query.page;
    if (!pageParam || isNaN(Number(pageParam))) {
      return 1;
    }
    return Number(pageParam);
  }, [router.query.page]);

  const {
    data: quoteRequests,
    status: quoteRequestsStatus,
    error: quoteRequestsError
  } = useQuery(
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
    router.push(
      { query: { page: newPage >= 1 ? newPage.toString() : '1' } },
      undefined,
      { shallow: true }
    );
  }

  if (quoteRequestsStatus === 'error') {
    return (
      <ErrorMessage
        error={quoteRequestsError as Error | undefined}
        logError
        message={formatMessage(messages.error)}
      />
    );
  }

  if (quoteRequestsStatus === 'loading') {
    return <LoadingSpinner />;
  }

  if (quoteRequestsStatus === 'success' && !quoteRequests?.value.length) {
    return (
      <PortalMessageBar messageBarType={MessageBarType.warning}>
        <Text>{formatMessage(messages.noData)}</Text>
      </PortalMessageBar>
    );
  }
  if (!quoteRequests?.value.length) {
    return null;
  }

  return (
    <Stack>
      <Stack tokens={{ childrenGap: spacing.m }}>
        <Stack.Item>
          <Stack horizontal wrap tokens={{ childrenGap: spacing.l2 }}>
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
    </Stack>
  );
};
