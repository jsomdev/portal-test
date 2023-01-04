import { UrlObject } from 'url';

const pagePaths = {
  home: '/',
  search: (query?: string): UrlObject | string => {
    const pathname: string = '/search';
    if (query) {
      return {
        pathname,
        query: {
          query
        }
      };
    }
    return pathname;
  },
  compare: '/compare',
  categories: '/categories',
  models: (slug: string): string => `/models/${slug}`,
  products: (slug: string): string => `/products/${slug}`,
  category: (slug: string): string => `/categories/${slug}`,
  cart: '/cart',
  checkout: '/cart/checkout',
  profileInformation: '/account/info-and-preferences/profile-information',
  infoAndPreferences: '/account/info-and-preferences',
  requestForQuote: '/cart/request-for-quote',
  orders: (
    id?: string | undefined,
    showConfirmation = false
  ): UrlObject | string => {
    const pathname: string = '/account/orders';
    if (showConfirmation && id) {
      return {
        pathname,
        query: {
          id: id,
          confirmation: 'true'
        }
      };
    }
    if (id) {
      return {
        pathname,
        query: {
          id: id
        }
      };
    }
    return pathname;
  },
  accountOverview: '/account',
  quoteRequests: (
    id?: string | undefined,
    showConfirmation: boolean = false
  ): UrlObject | string => {
    const pathname: string = '/account/quote-requests';
    if (showConfirmation && id) {
      return {
        pathname,
        query: {
          id: id,
          confirmation: 'true'
        }
      };
    }
    if (id) {
      return {
        pathname,
        query: {
          id: id
        }
      };
    }
    return pathname;
  },
  quotes: (id?: string | undefined): UrlObject | string => {
    const pathname: string = '/account/quotes';
    if (id) {
      return {
        pathname,
        query: {
          id: id
        }
      };
    }
    return pathname;
  },
  addressBook: (id?: string | undefined): UrlObject | string => {
    const pathname: string = '/account/info-and-preferences/address-book';
    if (id) {
      return {
        pathname,
        query: {
          id: id
        }
      };
    }
    return pathname;
  },
  preferences: '/account/info-and-preferences/preferences'
};

export default pagePaths;
