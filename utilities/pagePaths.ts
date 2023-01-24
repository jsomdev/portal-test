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
  orders: '/account/orders',
  orderDetail: (id: string, showConfirmation = false): UrlObject => {
    const pathname: string = '/account/orders';
    if (showConfirmation) {
      return {
        pathname,
        query: {
          id: id,
          confirmation: 'true'
        }
      };
    }
    return {
      pathname,
      query: {
        id: id
      }
    };
  },
  accountOverview: '/account/overview',
  quoteRequests: '/account/quote-requests',
  quoteRequestDetail: (
    id: string,
    showConfirmation: boolean = false
  ): UrlObject => {
    const pathname: string = '/account/quote-requests';
    if (showConfirmation) {
      return {
        pathname,
        query: {
          id: id,
          confirmation: 'true'
        }
      };
    }
    return {
      pathname,
      query: {
        id: id
      }
    };
  },
  quotes: '/account/quotes',
  quoteDetail: (id: string): UrlObject => {
    const pathname: string = '/account/quotes';
    return {
      pathname,
      query: {
        id: id
      }
    };
  },
  addressBook: '/account/info-and-preferences/address-book',
  preferences: '/account/info-and-preferences/preferences'
};

export default pagePaths;
