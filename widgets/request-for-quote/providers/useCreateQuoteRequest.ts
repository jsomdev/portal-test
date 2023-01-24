import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { useCart } from '@providers/cart/cartContext';
import { QuoteRequest } from '@services/portal-api/models/QuoteRequest';
import { createQuoteRequest } from '@services/portal-api/quoteRequests';
import { ReactQueryStatus } from '@services/react-query/types';
import pagePaths from '@utilities/pagePaths';
import { scrollToTop } from '@utilities/scrollToTop';

export interface CreateQuoteRequestHook {
  create: (request: QuoteRequest) => Promise<QuoteRequest>;
  createdRequest: QuoteRequest | undefined;
  status: ReactQueryStatus;
  error: Error | null | undefined;
}

export const useCreateQuoteRequest = (
  productNumbers: string[]
): CreateQuoteRequestHook => {
  const { clear } = useCart();
  const { push } = useRouter();
  const createMutation = useMutation(createQuoteRequest, {
    onSuccess: (data: QuoteRequest) => {
      clear(productNumbers);
      handleRedirect(data);
    },
    onSettled: () => {
      scrollToTop();
    }
  });

  function handleRedirect(quoteRequest: QuoteRequest) {
    if (quoteRequest.id) {
      push(pagePaths.quoteRequestDetail(quoteRequest.id, true));
    }
  }

  return {
    create: createMutation.mutateAsync,
    createdRequest: createMutation.data,
    status: createMutation.status,
    error: createMutation.error as Error | null | undefined
  };
};
