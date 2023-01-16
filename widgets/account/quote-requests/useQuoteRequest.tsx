import { useMemo } from 'react';

import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { QuoteRequest } from '@services/portal-api/models/QuoteRequest';
import { fetchMyQuoteRequest } from '@services/portal-api/quoteRequests';
import { QUERYKEYS } from '@services/react-query/constants';
import { ReactQueryStatus } from '@services/react-query/types';

import { mapQuoteRequestToQuoteRequestViewModel } from './quoteRequestHelper';
import { QuoteRequestViewModel } from './quoteRequests.types';

interface QuoteRequestHookProps {
  quoteRequest: QuoteRequestViewModel | undefined;
  quoteRequestData: QuoteRequest | undefined;
  quoteRequestStatus: ReactQueryStatus;
}

export const useQuoteRequest = (id: string): QuoteRequestHookProps => {
  const isAuthenticated = useIsAuthenticated();
  const intl = useIntl();

  const { data: quoteRequestData, status: quoteRequestStatus } = useQuery(
    [QUERYKEYS.quoteRequestDetail, id, isAuthenticated],
    () => fetchMyQuoteRequest(id, isAuthenticated),
    {
      enabled: !!isAuthenticated,
      retry: 3,
      retryDelay: () => 500
    }
  );

  const quoteRequest: QuoteRequestViewModel | undefined = useMemo(() => {
    return mapQuoteRequestToQuoteRequestViewModel(quoteRequestData, intl);
  }, [intl, quoteRequestData]);

  return {
    quoteRequest,
    quoteRequestData,
    quoteRequestStatus
  };
};
