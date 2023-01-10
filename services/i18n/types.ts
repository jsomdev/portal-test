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
  noResults: string;
  suggestedProducts: string;
  recentSearches: string;
  placeholder: string;
};

type IAccountNavigationMessages = {
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
  overview: {
    browseAll: string;
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
  resourceType: {
    interactiveModel: string | undefined;
    image: string;
    flowImage: string;
    video: string;
    catalog: string;
    catalogDetail: string;
    productBulletin: string;
    caseStudy: string;
    whitePaper: string;
    technicalManual: string;
    default: string;
  };
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
  shippingMethods: {
    freeShipping: string;
    flatRate: string;
    upsGround: string;
    upsSecondDayAir: string;
    upsNextDayAir: string;
    upsNextDayAirSaver: string;
    upsStandard: string;
    upsWorldwideExpedited: string;
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
  priceBreakQuantityInfo: string;
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
    account: {
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
    addressBook: {
      title: string;
      shippingAddress: string;
      billingAddress: string;
      viewAllText: string;
      setAsDefaultBilling: string;
      setAsDefaultShipping: string;
      editAddress: string;
      deleteConfirmation: string;
      deleteButtonText: string;
      cancelButtonText: string;
      addAddressButtonText: string;
    };
  };
  orders: {
    statusHeader: string;
    orderDateHeader: string;
    totalHeader: string;
    numberHeader: string;
    viewOrder: string;
    reorderAll: string;
    reorderSingle: string;
    viewAllLines: string;
    detailsHeader: string;
    shippingAddressHeader: string;
    billingAddressHeader: string;
    overviewHeader: string;
    shippingMethodHeader: string;
    paymentMethodHeader: string;
    totalProducts: string;
    shippingCosts: string;
    taxHeader: string;
    commentsHeader: string;
    confirmationTitle: string;
    confirmationText: string;
  };
  quoteRequests: {
    requestDateHeader: string;
    viewQuoteRequest: string;
    title: string;
    linesHeader: string;
    viewAll: string;
    viewAllLines: string;
    confirmationTitle: string;
    confirmationText: string;
    detailsHeader: string;
    commentsHeader: string;
    addressHeader: string;
  };
  quotes: {
    quoteDateHeader: string;
    viewQuote: string;
    totalHeader: string;
    numberHeader: string;
  };
  sections: {
    orders: {
      title: string;
    };
    order: {
      title: string;
    };
    quotes: {
      title: string;
    };
    quote: {
      title: string;
    };
    quoteRequests: {
      title: string;
    };
    quoteRequest: {
      title: string;
    };
    infoAndPreferences: {
      title: string;
      overviewLink: string;
      sections: {
        profileInformation: {
          title: string;
          description: string;
          viewInfoLink: string;
          changePasswordLink: string;
          panel: {
            title: string;
            ariaClose: string;
            cancel: string;
            save: string;
          };
        };
        addressBook: {
          title: string;
          description: string;
          viewAddressBookLink: string;
          panel: {
            title: string;
            ariaClose: string;
            cancel: string;
            save: string;
          };
          formFields: {
            name: {
              label: string;
            };
            country: {
              label: string;
              placeholder: string;
            };
            address: {
              label: string;
            };
            city: {
              label: string;
            };
            region: {
              label: {
                us: string;
                ca: string;
                default: string;
              };
              placeholder: {
                us: string;
                ca: string;
                default: string;
              };
              required: {
                us: string;
                ca: string;
                default: string;
              };
            };
            postalCode: {
              label: string;
            };
            setAsBilling: {
              label: string;
            };
            setAsShipping: {
              label: string;
            };
          };
        };
        companyInformation: {
          title: string;
          description: string;
        };
        preferences: {
          title: string;
          description: string;
          privacySettingsLink: string;
          settingsLink: string;
        };
        measurementSettings: {
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
    support: {
      title: string;
      searchToolTitle: string;
      searchToolDescription: string;
      searchToolAction: string;
      localRepTitle: string;
      localRepDescription: string;
      localRepAction: string;
      onlineChatTitle: string;
      onlineChatDescription: string;
      onlineChatAction: string;
    };
    hero: {
      imageAlt: string;
      title: string;
      description: string;
      callToAction: string;
    };
    catalog: {
      items: {
        viewAll: string;
      };
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
  titleWithoutSearchOrCategory: string;
  title: string;
  titleWithSearchAndCategory: string;
  titleWithOnlySearch: string;
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
    quantityItemsReadOnlyText: string;
  };
  addedToCart: string;
  limitReached: string;
  goToCart: string;
  continueShopping: string;
};

type IRequestForQuoteMessages = {
  summary: {
    details: string;
    numberOfProducts: string;
    numberOfItems: string;
  };
  actions: {
    submit: string;
  };
  details: {
    generalTitle: string;
    billingContactTitle: string;
    billingAddressTitle: string;
  };
  submitting: string;
  requestFailed: string;
  requestSuccess: string;
  creatingRequest: string;
  needSignIn: string;
  signInText: string;
  redirectingLogin: string;
  noItems: string;
  title: string;
};

type INotFoundMessages = {
  title: string;
  header: string;
  explanation: string;
  redirection: string;
  homepageLink: string;
  pageTypes: {
    product: string;
    model: string;
    category: string;
    defaultPage: string;
  };
};

type ICheckoutMessages = {
  title: string;
  orderSuccess: string;
  creatingOrder: string;
  loadingCart: string;
  loadingCartFailed: string;
  loadingProductInfo: string;
  loadingProductInfoFailed: string;
  noItems: string;
  noItemsLink: string;
  needsSignIn: string;
  signInText: string;
  unauthorized: string;
  steps: {
    details: string;
    shippingMethod: string;
    paymentDetails: string;
    overview: string;
  };
  actions: {
    nextButton: string;
    backButton: string;
    submitButton: string;
    completePayment: string;
    completePurchaseOrder: string;
  };
  details: {
    generalTitle: string;
    shippingContactTitle: string;
    shippingAddressTitle: string;
    fields: {
      email: string;
      emailPlaceholder: string;
      firstName: string;
      name: string;
      company: string;
      companyPlaceholder: string;
      country: string;
      countryPlaceholder: string;
      address: string;
      addressPlaceholder: string;
      city: string;
      state: string;
      statePlaceholder: {
        default: string;
        BE: string;
        US: string;
        CA: string;
      };
      postalCode: string;
      phone: string;
    };
  };
  shippingMethods: {
    shippingMethodLabel: string;
    loadingShippingMethods: string;
  };
  payment: {
    billingContact: string;
    billingAddress: string;
    creditCard: string;
    purchaseOrder: string;
    purchaseOrderInfo: string;
    fields: {
      paymentMethod: string;
      shippingAddressAsBillingAddress: string;
      shippingContactAsBillingContact: string;
      billingAddressChoice: {
        sameAsShipping: string;
        differentFromShipping: string;
      };
      billingContactChoice: {
        sameAsShipping: string;
        differentFromShipping: string;
      };
      creditCardNumber: string;
      creditCardNumberInvalidFormatError: string;
      creditCardName: string;
      creditCardNameInvalidFormatError: string;
      creditCardExpiration: string;
      creditCardExpirationPlaceholder: string;
      creditCardExpirationInvalidError: string;
      creditCardCVV: string;

      billingFirstName: string;
      billingLastName: string;
      billingCompany: string;
      billingCompanyPlaceholder: string;
      billingPhone: string;

      billingAddress: string;
      billingCity: string;
      billingState: string;
      billingCountry: string;
      billingPostalCode: string;
      referenceNumber: string;
    };
  };
  summary: {
    details: string;
    subTotal: string;
    shippingCost: string;
    tax: string;
    total: string;
  };
  overview: {
    reviewTitle: string;
    termsAndConditions: string;
    privacyPolicy: string;
    editGroup: string;
    totalCost: string;
    invoiceAmount: string;
    fields: {
      acceptedTerms: string;
      acceptedTermsRequired: string;
      additionalInformation: string;
      additionalInformationPlaceholder: string;
    };
  };
  discounts: {
    apply: string;
    discountCode: string;
  };
  usps: {
    qualityServices: string;
    secureTransactions: string;
    expertSupport: string;
  };
  formErrors: {
    vatError: string;
    noShippingOptions: string;
    retryButton: string;
    editAddress: string;
  };
  errors: {
    chatWithUs: string;
    mailTo: string;
    send: string;
    subText: string;
    default: {
      title: string;
    };
    cardDeclined: {
      title: string;
    };
    cardInfoIncorrect: {
      title: string;
    };
    cartHasNoPricedItems: {
      title: string;
      description: string;
    };
    cartIsEmpty: {
      title: string;
      description: string;
    };
    contentTypeHeaderMissing: {
      title: string;
      description: string;
    };
    givenAmountAndCalculatedAmountDoNotMatch: {
      title: string;
      description: string;
    };
    invalidPaymentMethod: {
      title: string;
      description: string;
    };
    userDoesNotHaveAccount: {
      title: string;
      description: string;
    };
    todo: {
      title: string;
      description: string;
    };
  };
};

type ISearchMessages = INextHeadMessages & {
  title: string;
};

type ICompareMessages = {
  differencesView: string;
  publicView: string;
  internalView: string;
  setBaseline: string;
  currentBaseline: string;
  noResults: string;
  loading: string;
  generalTitle: string;
  title: string;
};
type IProductMessages = {
  imageDisclaimer: string;
  sections: {
    top: {
      configurations: {
        title: string;
      };
      display: {
        pdf: {
          loading: string;
          error: string;
          noData: string;
          zoomIn: string;
          zoomOut: string;
          openNew: string;
          scaleToWidth: string;
          fitToWidth: string;
          fitToPage: string;
        };
      };
    };
    generalInformation: {
      descriptionTitle: string;
      keySpecificationsTitle: string;
      keySpecificationsDescription: string;
      flowTitle: string;
      title: string;
    };
    performance: {
      noData: string;
      title: string;
      multiChart: {
        seriesLabel: string;
      };
    };
    specifications: {
      actions: {
        openLink: string;
      };
      title: string;
    };
    accessories: {
      title: string;
    };
    downloads: {
      downloadError: string;
      actions: {
        dataSheets: string;
        drawings2d: string;
        drawings3d: string;
      };
      documentsTitle: string;
      otherTitle: string;
      title: string;
    };
    alternativeModels: {
      title: string;
    };
  };
};

type IModelMessages = INextHeadMessages & {
  browseAll: string;
};
type ISeriesMessages = INextHeadMessages;
/**
 * Tree structure that represents all messages used throughout the application.
 * The messagesIds object can be used to reference their ids used when formatting messages using react-intl.
 */
export type Messages = {
  bookmarks: {
    actions: {
      bookmark: string;
    };
  };
  comparisonPopup: {
    compare: string;
    clearAll: string;
    title: string;
  };
  steps: IStepsMessages;
  finder: IFinderMessages;
  data: IDataMessages;
  navigation: {
    site: ISiteNavigationMessages;
    main: IMainNavigationMessages;
    account: IAccountNavigationMessages;
    locale: ILocaleMessages;
    footer: FooterMessages;
  };
  searchBar: ISiteSearchBarMessages;
  loading: {
    default: string;
    user: ILoadingUserMessages;
  };
  pricing: IPricingMessages;
  pages: {
    compare: ICompareMessages;
    product: IProductMessages;
    search: ISearchMessages;
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
    checkout: ICheckoutMessages;
    requestForQuote: IRequestForQuoteMessages;
    notFound: INotFoundMessages;
  };
  summary: {
    details: string;
  };
  validation: ValidationMessages;
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

export interface ValidationMessages {
  mixed: {
    required: string;
  };
  string: {
    email: string;
    matches: string;
    min: string;
    max: string;
  };
}

export interface ShippingMethods {
  freeShipping: string;
  flatRate: string;
  upsGround: string;
  upsSecondDayAir: string;
  upsNextDayAir: string;
  upsNextDayAirSaver: string;
  upsStandard: string;
  upsWorldwideExpedited: string;
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

export interface FooterMessages {
  siteLinks: {
    items: {
      siteMap: string;
      legalInformation: string;
      privacyStatement: string;
      isoSystemAndPolicyStatement: string;
      REACH: string;
    };
  };
  productCategories: {
    title: string;
    items: {
      productsOverview: string;
      nozzles: string;
      sprayGuns: string;
      tankCleaning: string;
      sprayControlOptions: string;
      automatedSpraySystems: string;
      disinfectionSystems: string;
      sprayLancesAndHeaders: string;
      accessories: string;
      brands: string;
    };
  };
  industries: {
    title: string;
    items: {
      industriesOverview: string;
      automotive: string;
      buildingMaterials: string;
      energy: string;
      foodAndBeverage: string;
      pharmaceuticalManufacturing: string;
      steelAndMetals: string;
      pulpPaperAndTissue: string;
      chemicalProcessing: string;
      otherIndustries: string;
    };
  };
  applications: {
    title: string;
    items: {
      applicationOverview: string;
      cleaningAndWashing: string;
      chestCleaning: string;
      coolingSolids: string;
      gasCoolingAndConditioning: string;
      coating: string;
      dryingAndBlowOff: string;
      dustControl: string;
      fireProtection: string;
      humidification: string;
      lubrication: string;
      tankCleaning: string;
      sprayDrying: string;
      noxControl: string;
      sulfurBurning: string;
    };
  };
  services: {
    title: string;
    items: {
      servicesOverview: string;
      buySprayProducts: string;
      requestADemo: string;
      freeFacilityEvaluation: string;
      sustainabilityAssessment: string;
      needHelpWithADesign: string;
      advancedTestingAndModeling: string;
      servicesForOEMs: string;
      techSupport: string;
    };
  };
  resources: {
    title: string;
    items: {
      resourcesOverview: string;
      catalogs: string;
      technicalLibrary: string;
      sprayWareCalculatorsAndTools: string;
      '3dCADModels': string;
      sprayBasics: string;
      sprayPatterns: string;
      sprayOptimization: string;
      productSupport: string;
    };
  };
  company: {
    title: string;
    items: {
      about: string;
      sustainability: string;
      events: string;
      careers: string;
      globalWebsites: string;
      regionalSprayTechnologyCenters: string;
    };
  };
  contact: {
    title: string;
    items: {
      contactUs: string;
      findALocalRep: string;
      subscribeToOurNewsletter: string;
      manageSubscriptions: string;
    };
  };
}
