import React, { useEffect } from 'react';

import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { LoadingSpinner } from '@components/spinners/loadingSpinner';
import { IStackStyles, Stack, useTheme } from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { useClaims } from '@services/authentication/claims';
import { fetchMyQuoteRequest } from '@services/portal-api/quoteRequests';
import { QUERYKEYS } from '@services/react-query/constants';

interface QuoteRequestDetailProps {
  id: string;
}

interface QuoteRequestDetailStyles {
  container: IStackStyles;
}

// NOTE: BASE IMPLEMENTION

export const QuoteRequestDetail: React.FC<QuoteRequestDetailProps> = ({
  id
}) => {
  const { spacing, fonts, palette } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  const { accountId } = useClaims();
  const { isQuoteRequestHistoryEnabled } = useMe();

  const { data: quoteRequest, status: quoteRequestDataStatus } = useQuery(
    [
      QUERYKEYS.quoteRequestDetail,
      id,
      isAuthenticated,
      accountId,
      isQuoteRequestHistoryEnabled
    ],
    () => fetchMyQuoteRequest(id, isAuthenticated),
    {
      retry: 3,
      retryDelay: () => 500
    }
  );

  useEffect(() => {
    console.log(quoteRequest);
  }, [quoteRequest]);

  const styles: QuoteRequestDetailStyles = {
    container: {}
  };

  if (quoteRequestDataStatus === 'loading') {
    return <LoadingSpinner />;
  }

  return <Stack>{id}</Stack>;
};
