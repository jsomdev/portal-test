const pagePaths = {
  home: '/',
  compare: '/compare',
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
