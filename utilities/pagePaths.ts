import { Url } from 'url';

const pagePaths = {
  home: '/',
  search: (query?: string): string =>
    query ? `/search?query=${query}` : '/search',
  compare: '/compare',
  categories: '/categories',
  models: (slug: string): string => `/models/${slug}`,
  products: (slug: string): string => `/products/${slug}`,
  category: (slug: string): string => `/categories/${slug}`,
  cart: '/cart',
  checkout: '/cart/checkout',
  requestForQuote: '/cart/request-for-quote',
  infoAndPreferences: '/account/info-and-preferences',
  orders: (
    id?: string | undefined,
    showConfirmation = false
  ): Partial<Url> | string => {
    if (showConfirmation && id) {
      return {
        pathname: '/account/orders',
        query: {
          id: id,
          confirmation: 'true'
        }
      };
    }
    if (id) {
      return {
        pathname: '/account/orders',
        query: {
          id: id
        }
      };
    }
    return '/account/orders';
  },
  accountOverview: '/account',
  quoteRequests: (
    id?: string | undefined,
    showConfirmation: boolean = false
  ): Partial<Url> | string => {
    if (showConfirmation && id) {
      return {
        pathname: '/account/quote-requests',
        query: {
          id: id,
          confirmation: 'true'
        }
      };
    }
    if (id) {
      return {
        pathname: '/account/quote-requests',
        query: {
          id: id
        }
      };
    }
    return '/account/quote-requests';
  },
  quotes: (id?: string | undefined): Partial<Url> | string => {
    if (id) {
      return {
        pathname: '/account/quotes',
        query: {
          id: id
        }
      };
    }
    return '/account/quotes';
  },
  addressBook: (id?: string | undefined): Partial<Url> | string => {
    if (id) {
      return {
        pathname: '/account/info-and-preferences/address-book',
        query: {
          id: id
        }
      };
    }
    return ' /account/info-and-preferences/address-book';
  },
  profileInfo: '/account/info-and-preferences/profile-information',
  preferences: '/account/info-and-preferences/preferences'
};

export default pagePaths;
