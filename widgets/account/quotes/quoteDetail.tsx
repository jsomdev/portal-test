import React, { useEffect } from 'react';

import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { LoadingSpinner } from '@components/spinners/loadingSpinner';
import { Stack } from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { useClaims } from '@services/authentication/claims';
import { fetchMyQuote } from '@services/portal-api/quotes';
import { QUERYKEYS } from '@services/react-query/constants';

interface QuoteDetailProps {
  id: string;
}

// interface QuoteDetailStyles {
//   container: IStackStyles;
// }

// NOTE: BASE IMPLEMENTION

export const QuoteDetail: React.FC<QuoteDetailProps> = ({ id }) => {
  const isAuthenticated = useIsAuthenticated();
  const { accountId } = useClaims();
  const { isQuoteHistoryEnabled } = useMe();

  const { data: quote, status: quoteDataStatus } = useQuery(
    [
      QUERYKEYS.quoteDetail,
      id,
      isAuthenticated,
      accountId,
      isQuoteHistoryEnabled
    ],
    () => fetchMyQuote(id, isAuthenticated, isQuoteHistoryEnabled),
    {
      retry: 3,
      retryDelay: () => 500
    }
  );

  if (quoteDataStatus === 'loading') {
    return <LoadingSpinner />;
  }

  return <Stack>{id}</Stack>;
};
