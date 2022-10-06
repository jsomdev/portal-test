import { Messages } from './';

/**
 * Messages Object used for referencing the ids of the messages when formatting.
 */
export const messageIds: Messages = {
  navigation: {
    main: {
      title: 'navigation.main.title',
      collapseLabel: 'navigation.main.collapseLabel',
      expandLabel: 'navigation.main.expandLabel',
      cartAriaLabel: 'navigation.main.cartAriaLabel',
      accessPadAriaLabel: 'navigation.main.accessPadAriaLabel',
      userAriaLabel: 'navigation.main.userAriaLabel',
      viewAllCategories: 'navigation.main.viewAllCategories',
      viewAllCategory: 'navigation.main.viewAllCategory'
    },
    site: {
      navigationAriaLabel: 'navigation.site.navigationAriaLabel',
      title: 'navigation.site.title',
      logoAlt: 'navigation.site.logoAlt',
      collapseLabel: 'navigation.site.collapseLabel',
      expandLabel: 'navigation.site.expandLabel'
    },
    user: {
      title: 'navigation.user.title',
      collapseLabel: 'navigation.user.collapseLabel',
      expandLabel: 'navigation.user.expandLabel',
      signIn: 'navigation.user.signIn',
      myProfile: 'navigation.user.myProfile'
    },
    locale: {
      title: 'navigation.locale.title'
    }
  },
  searchBar: {
    placeholder: 'searchBar.placeholder'
  },
  finder: {
    filters: {
      clearAll: 'finder.filters.clearAll',
      search: 'finder.filters.search'
    },
    resultsHeader: {
      count: 'finder.resultsHeader.count',
      actions: {
        filter: 'finder.resultsHeader.actions.filter'
      }
    },
    panel: {
      mobile: {
        title: 'finder.panel.mobile.title',
        ariaClose: 'finder.panel.mobile.ariaClose',
        ariaCollapse: 'finder.panel.mobile.ariaCollapse',
        ariaExpand: 'finder.panel.mobile.ariaExpand',
        showResults: 'finder.panel.mobile.showResults'
      }
    },
    operatingConditions: {
      actions: {
        apply: 'finder.operatingConditions.actions.apply'
      },
      validation: {
        title: 'finder.operatingConditions.validation.title',
        greaterThanZero:
          'finder.operatingConditions.validation.greaterThanZero',
        requiredFlowRate:
          'finder.operatingConditions.validation.requiredFlowRate',
        requiredFlowRatePressure:
          'finder.operatingConditions.validation.requiredFlowRatePressure',
        requiredFlowRateGravity:
          'finder.operatingConditions.validation.requiredFlowRateGravity'
      },
      liquidType: {
        customValue: {
          title: 'finder.operatingConditions.customValue.title',
          placeholder: 'finder.operatingConditions.customValue.placeholder',
          suffix: 'finder.operatingConditions.customValue.suffix'
        }
      }
    },
    categoryFacet: {
      title: 'finder.categoryFacet.title'
    },
    checkboxFacet: {
      actions: {
        more: 'finder.checkboxFacet.actions.more',
        less: 'finder.checkboxFacet.actions.less'
      },
      panel: {
        placeholder: 'finder.checkboxFacet.panel.placeholder'
      }
    }
  },
  pages: {
    default: {
      headTitle: 'pages.default.headTitle'
    },
    home: {
      headTitle: 'pages.home.headTitle',
      headDescription: 'pages.home.headDescription',
      sections: {
        signUp: {
          callToAction: 'pages.home.sections.signUp.callToAction',
          title: 'pages.home.sections.signUp.title',
          steps: {
            first: {
              title: 'pages.home.sections.signUp.steps.first.title',
              description: 'pages.home.sections.signUp.steps.first.description'
            },
            second: {
              title: 'pages.home.sections.signUp.steps.second.title',
              description: 'pages.home.sections.signUp.steps.second.description'
            },
            third: {
              title: 'pages.home.sections.signUp.steps.third.title',
              description: 'pages.home.sections.signUp.steps.third.description'
            }
          }
        },
        hero: {
          imageAlt: 'pages.home.sections.hero.imageAlt',
          title: 'pages.home.sections.hero.title',
          description: 'pages.home.sections.hero.description',
          callToAction: 'pages.home.sections.hero.callToAction'
        },
        catalog: {
          title: 'pages.home.sections.catalog.title'
        },
        brands: {
          title: 'pages.home.sections.brands.title'
        },
        applications: {
          title: 'pages.home.sections.applications.title'
        }
      }
    },
    model: {
      headTitle: 'pages.model.headTitle',
      headDescription: 'pages.model.headDescription'
    },
    category: {
      title: 'pages.category.title',
      titleWithSearch: 'pages.category.titleWithSearch'
    },
    series: {
      headTitle: 'pages.series.headTitle',
      headDescription: 'pages.series.headDescription'
    },
    account: {
      welcome: 'pages.account.welcome',
      overview: 'pages.account.overview',
      orders: 'pages.account.orders',
      quoteRequests: 'pages.account.quoteRequests',
      infoAndPreferences: 'pages.account.infoAndPreferences',
      signOut: 'pages.account.signOut',
      addressBook: 'pages.account.addressBook',
      companyInformation: 'pages.account.companyInformation',
      preferences: 'pages.account.preferences',
      profileInformation: 'pages.account.profileInformation',
      accountPage: 'pages.account.accountPage'
    },
    docs: {
      i18n: {
        title: 'pages.docs.i18n.title',
        description: 'pages.docs.i18n.description'
      },
      userInterfaces: {
        title: 'pages.docs.userInterfaces.title',
        description: 'pages.docs.userInterfaces.description'
      },
      testing: {
        title: 'pages.docs.testing.title',
        description: 'pages.docs.testing.description'
      },
      projectSetup: {
        title: 'pages.docs.projectSetup.title',
        description: 'pages.docs.projectSetup.description'
      }
    },
    cart: {
      title: 'pages.cart.title',
      loading: 'pages.cart.loading',
      merge: {
        message: 'pages.cart.merge.message',
        viewProducts: 'pages.cart.merge.viewProducts'
      },
      addBulkCard: {
        title: 'pages.cart.addBulkCard.title',
        description: 'pages.cart.addBulkCard.description',
        quantityPrefix: 'pages.cart.addBulkCard.quantityPrefix',
        entryButton: 'pages.cart.addBulkCard.entryButton',
        resetButton: 'pages.cart.addBulkCard.resetButton',
        addToCartButton: 'pages.cart.addBulkCard.addToCartButton',
        addToCartButtonInProgress:
          'pages.cart.addBulkCard.addToCartButtonInProgress',
        productNumberPlaceholder:
          'pages.cart.addBulkCard.productNumberPlaceholder',
        bulkAllCompleteMessage: 'pages.cart.addBulkCard.bulkAllCompleteMessage',
        bulkPartialCompleteMessage:
          'pages.cart.addBulkCard.bulkPartialCompleteMessage',
        bulkFailMessage: 'pages.cart.addBulkCard.bulkFailMessage',
        warningDialogTitle: 'pages.cart.addBulkCard.warningDialogTitle'
      },
      productsAddedWhileLoggedOutDialog: {
        title: 'pages.cart.productsAddedWhileLoggedOutDialog.title',
        loading: 'pages.cart.productsAddedWhileLoggedOutDialog.loading'
      }
    }
  },
  loading: {
    default: 'loading.default',
    user: {
      signingIn: 'loading.user.signingIn',
      signingOut: 'loading.user.signingIn',
      redirecting: 'loading.user.redirecting'
    }
  },
  steps: {
    actions: {
      proceed: 'steps.actions.proceed',
      previous: 'steps.actions.previous'
    }
  },
  data: {
    boolean: {
      true: 'data.boolean.true',
      false: 'data.boolean.false'
    }
  },
  summary: {
    details: 'summary.details'
  },
  product: {
    imageDisclaimer: 'product.imageDisclaimer'
  }
};
