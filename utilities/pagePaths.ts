const pagePaths = {
  home: '/',
  search: (query?: string): string =>
    query ? `/search?query=${query}` : '/search',
  compare: '/compare',
  categories: '/categories',
  models: (slug: string): string => `/models/${slug}`,
  products: (slug: string): string => `/products/${slug}`,
  category: (slug: string): string => `/categories/${slug}`,
  quoteRequest: '/cart/create-quote-request',
  cart: '/cart',
  checkout: '/cart/checkout',
  profileInformation: (edit?: boolean): string => {
    if (edit) {
      return '/account/info-and-preferences/profile-information?edit=true';
    }
    return '/account/info-and-preferences/profile-information';
  },
  infoAndPreferences: '/account/info-and-preferences',
  orders: (
    id?: string | undefined,
    showConfirmation?: boolean | undefined
  ): string => {
    if (showConfirmation && id) {
      return '/account/orders?id=' + id + '&confirmation=true';
    }
    if (id) {
      return '/account/orders?id=' + id;
    }
    return '/account/orders';
  },
  accountOverview: '/account',
  quoteRequests: (id?: string | undefined): string => {
    return id ? '/account/quote-requests?id=' + id : '/account/quote-requests';
  },
  quotes: (id?: string | undefined): string => {
    return id ? '/account/quotes?id=' + id : '/account/quotes';
  },
  addressBook: (id?: string | undefined): string => {
    return id
      ? '/account/info-and-preferences/address-book?id=' + id
      : '/account/info-and-preferences/address-book';
  },
  preferences: '/account/info-and-preferences/preferences'
};

export default pagePaths;
