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
  infoAndPreferences: '/account/info-and-preferences',
  orders: (id?: string | undefined): string => {
    return id ? '/account/orders?id=' + id : '/account/orders';
  },
  accountOverview: '/account',
  quoteRequests: (id?: string | undefined): string => {
    return id ? '/account/quote-requests?id=' + id : '/account/quote-requests';
  },
  quotes: (id?: string | undefined): string => {
    return id ? '/account/quotes?id=' + id : '/account/quotes';
  },
  addressBook: '/account/info-and-preferences/address-book',
  profileInfo: '/account/info-and-preferences/profile-information',
  preferences: '/account/info-and-preferences/preferences'
};

export default pagePaths;
