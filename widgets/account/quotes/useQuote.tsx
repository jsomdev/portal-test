import { useMemo } from 'react';

import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { useMe } from '@providers/user/userContext';
import { Quote } from '@services/portal-api/models/Quote';
import { fetchMyQuote } from '@services/portal-api/quotes';
import { QUERYKEYS } from '@services/react-query/constants';
import { ReactQueryStatus } from '@services/react-query/types';

import { QuoteViewModel } from './quote.types';
import { mapQuoteToQuoteViewModel } from './quoteHelper';

interface QuoteHookProps {
  quote: QuoteViewModel | undefined;
  quoteData: Quote | undefined;
  quoteStatus: ReactQueryStatus;
}

export const useQuote = (id: string): QuoteHookProps => {
  const { isQuoteHistoryEnabled } = useMe();
  const isAuthenticated = useIsAuthenticated();
  const intl = useIntl();

  const { data: quoteData, status: quoteStatus } = useQuery(
    [QUERYKEYS.quoteDetail, id, isAuthenticated],
    () => fetchMyQuote(id, isAuthenticated, isQuoteHistoryEnabled),
    {
      enabled: !!isAuthenticated,
      retry: 3,
      retryDelay: () => 500
    }
  );

  const quote: QuoteViewModel | undefined = useMemo(() => {
    return mapQuoteToQuoteViewModel(quoteData, intl);
  }, [intl, quoteData]);

  return {
    quote,
    quoteData,
    quoteStatus
  };
};
