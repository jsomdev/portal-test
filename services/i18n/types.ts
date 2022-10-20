import { Audience } from '@services/portal-api/models/AudienceFlags';

type I18NMessages = {
  title: string;
  description: string;
};
type IUserInterfacesMessages = {
  title: string;
  description: string;
};
type ITestingMessages = {
  title: string;
  description: string;
};
type IProjectSetupMessages = {
  title: string;
  description: string;
};

type ISiteNavigationMessages = {
  title: string;
  logoAlt: string;
  expandLabel: string;
  collapseLabel: string;
  navigationAriaLabel: string;
};
type IMainNavigationMessages = {
  title: string;
  expandLabel: string;
  collapseLabel: string;
  cartAriaLabel: string;
  accessPadAriaLabel: string;
  userAriaLabel: string;
  viewAllCategories: string;
  viewAllCategory: string;
};
type ISiteSearchBarMessages = {
  placeholder: string;
};

type IUserNavigationMessages = {
  title: string;
  expandLabel: string;
  collapseLabel: string;
  signIn: string;
  myProfile: string;
};

type IStepsMessages = {
  actions: {
    proceed: string;
    previous: string;
  };
};

type IFinderMessages = {
  filters: {
    clearAll: string;
    search: string;
  };
  // TODO move to better place
  compare: string;
  // TODO move to better place
  seeComparison: string;
  operatingConditions: {
    actions: {
      apply: string;
    };
    validation: {
      title: string;
      greaterThanZero: string;
      requiredFlowRate: string;
      requiredFlowRatePressure: string;
      requiredFlowRateGravity: string;
    };
    liquidType: {
      customValue: {
        title: string;
        placeholder: string;
        suffix: string;
      };
    };
  };
  resultsHeader: {
    actions: {
      filter: string;
    };
    count: string;
  };
  pagination: {
    next: string;
    previous: string;
  };
  panel: {
    mobile: {
      title: string;
      ariaClose: string;
      ariaCollapse: string;
      ariaExpand: string;
      showResults: string;
    };
  };
  categoryFacet: {
    title: string;
  };
  checkboxFacet: {
    actions: {
      more: string;
      less: string;
    };
    panel: {
      placeholder: string;
    };
  };
};

type IDataMessages = {
  boolean: {
    true: string;
    false: string;
  };
  systemOfMeasurement: {
    metric: string;
    us: string;
    controls: {
      units: string;
    };
  };
  orders: {
    status: {
      new: string;
      inProcess: string;
      shipped: string;
      canceled: string;
    };
  };
  payments: {
    creditCard: string;
    purchaseOrder: string;
  };
};

type IPricingMessages = {
  quantityLabel: string;
  priceLabel: string;
  error: string;
  signInForDetails: string;
  tooltips: {
    notAuthenticated: string;
    quotedPrice: string;
  };
  stockInfo: {
    stockNotAvailable: string;
  };
  discounts: {
    bulkAvailable: string;
    bulkApplied: string;
  };
  quotedPrice: string;
  unitPriceSuffix: string;
  // TODO: move to cart;
  addToCart: string;
};

type ILoadingUserMessages = {
  signingIn: string;
  signingOut: string;
  redirecting: string;
};

type INextHeadMessages = {
  headTitle: string;
  headDescription: string;
};

type IAccountMessages = {
  signOut: string;
  signInPrompt: string;
  overview: {
    title: string;
    subTitle: string;
    welcome: string;
    link: string;
    orders: {
      title: string;
      viewAllText: string;
    };
    user: {
      status: {
        manager: string;
        admin: string;
        employee: string;
        customer: string;
        verified: string;
      };
    };
    profileInformation: {
      title: string;
      nameHeader: string;
      jobHeader: string;
      phoneHeader: string;
      emailHeader: string;
    };
    companyInformation: {
      companyHeader: string;
      customerHeader: string;
      paymentHeader: string;
    };
  };
  orders: {
    statusHeader: string;
    orderDateHeader: string;
    totalHeader: string;
    numberHeader: string;
    viewOrder: string;
  };
  sections: {
    orders: {
      title: string;
    };
    quoteRequests: {
      title: string;
    };
    infoAndPreferences: {
      title: string;
      sections: {
        profileInformation: {
          title: string;
          description: string;
        };
        addressBook: {
          title: string;
          description: string;
        };
        companyInformation: {
          title: string;
          description: string;
        };
        preferences: {
          title: string;
          description: string;
        };
      };
    };
  };
};

type ILocaleMessages = {
  title: string;
};

type IHomeMessages = INextHeadMessages & {
  sections: {
    hero: {
      imageAlt: string;
      title: string;
      description: string;
      callToAction: string;
    };
    catalog: {
      title: string;
    };
    brands: {
      title: string;
    };
    signUp: {
      title: string;
      callToAction: string;
      steps: {
        first: {
          title: string;
          description: string;
        };
        second: {
          title: string;
          description: string;
        };
        third: {
          title: string;
          description: string;
        };
      };
    };
    applications: {
      title: string;
    };
  };
};

type ICategoryMessages = {
  title: string;
  titleWithSearch: string;
};

type ICartMessages = {
  title: string;
  loading: string;
  merge: {
    message: string;
    viewProducts: string;
  };
  addBulkCard: {
    title: string;
    description: string;
    quantityPrefix: string;
    entryButton: string;
    resetButton: string;
    addToCartButton: string;
    addToCartButtonInProgress: string;
    productNumberPlaceholder: string;
    bulkAllCompleteMessage: string;
    bulkPartialCompleteMessage: string;
    bulkFailMessage: string;
    warningDialogTitle: string;
  };
  productsAddedWhileLoggedOutDialog: {
    title: string;
    loading: string;
  };
  actions: {
    continue: string;
    clear: string;
  };
  summary: {
    header: string;
    numberOfProducts: string;
    numberOfItems: string;
    subtotal: string;
    actions: {
      continue: string;
      request: string;
      proceed: string;
      signIn: string;
      quotedPriceWarning: string;
      completeProfile: string;
      quotedPriceWarningTooltip: string;
    };
  };
  list: {
    emptyCart: string;
    loading: string;
    cartError: string;
  };
};

type IProductMessages = {
  imageDisclaimer: string;
};

type IModelMessages = INextHeadMessages;
type ISeriesMessages = INextHeadMessages;
/**
 * Tree structure that represents all messages used throughout the application.
 * The messagesIds object can be used to reference their ids used when formatting messages using react-intl.
 */
export type Messages = {
  steps: IStepsMessages;
  finder: IFinderMessages;
  data: IDataMessages;
  navigation: {
    site: ISiteNavigationMessages;
    main: IMainNavigationMessages;
    user: IUserNavigationMessages;
    locale: ILocaleMessages;
  };
  searchBar: ISiteSearchBarMessages;
  loading: {
    default: string;
    user: ILoadingUserMessages;
  };
  pricing: IPricingMessages;
  pages: {
    default: {
      headTitle: string;
    };
    home: IHomeMessages;
    category: ICategoryMessages;
    model: IModelMessages;
    series: ISeriesMessages;
    docs: {
      i18n: I18NMessages;
      userInterfaces: IUserInterfacesMessages;
      testing: ITestingMessages;
      projectSetup: IProjectSetupMessages;
    };
    account: IAccountMessages;
    cart: ICartMessages;
  };
  summary: {
    details: string;
  };
  product: IProductMessages;
};

export interface Language {
  name: string;
  code: LanguageCode;
}

export interface Country {
  name: string;
  languages: Language[];
  code: string;
}

export interface Region {
  audience: Audience;
  name: string;
  countries: Country[];
}

export type LanguageCode =
  | 'bg'
  | 'nl'
  | 'en'
  | 'et'
  | 'fi'
  | 'fr'
  | 'de'
  | 'el'
  | 'hu'
  | 'it'
  | 'lv'
  | 'lt'
  | 'pl'
  | 'sk'
  | 'sl'
  | 'es'
  | 'tr';
