import { QueryClient, UseQueryOptions } from 'react-query';

export const ENABLE_REACT_QUERY_DEVTOOLS = true;

const DEFAULT_QUERY_OPTIONS: UseQueryOptions | undefined = {
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  retry: false
};

export const STATIC_DATA_QUERY_CACHE_OPTIONS: Pick<
  UseQueryOptions,
  'cacheTime' | 'staleTime'
> = {
  cacheTime: Infinity,
  staleTime: Infinity
};

export const NO_CACHE_QUERY_CACHE_OPTIONS: Pick<
  UseQueryOptions,
  'cacheTime' | 'staleTime'
> = {
  cacheTime: 0
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: DEFAULT_QUERY_OPTIONS
  }
});
