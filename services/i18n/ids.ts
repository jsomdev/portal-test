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
  pricing: {
    quantityLabel: 'pricing.quantityLabel',
    priceLabel: 'pricing.priceLabel',
    error: 'pricing.error',
    signInForDetails: 'pricing.signInForDetails',
    tooltips: {
      notAuthenticated: 'pricing.tooltips.notAuthenticated',
      quotedPrice: 'pricing.tooltips.quotedPrice'
    },
    stockInfo: {
      stockNotAvailable: 'pricing.stockInfo.stockNotAvailable'
    },
    discounts: {
      bulkAvailable: 'pricing.discounts.bulkAvailable',
      bulkApplied: 'pricing.discounts.bulkApplied'
    },
    quotedPrice: 'pricing.quotedPrice',
    addToCart: 'pricing.addToCart',
    unitPriceSuffix: 'pricing.unitPriceSuffix'
  },

  finder: {
    compare: 'finder.compare',
    seeComparison: 'finder.seeComparison',
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
    pagination: {
      next: 'finder.pagination.next',
      previous: 'finder.pagination.previous'
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
    product: {
      imageDisclaimer: 'pages.product.imageDisclaimer',
      sections: {
        accessories: {
          title: 'pages.product.sections.accessories.title'
        },
        downloadsSection: {
          title: 'pages.product.sections.downloadsSection.title'
        },
        performance: {
          title: 'pages.product.sections.performance.title'
        },
        generalInformation: {
          title: 'pages.product.sections.generalInformation.title'
        },
        specifications: {
          title: 'pages.product.sections.specifications.title'
        }
      }
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
          title: 'pages.home.sections.catalog.title',
          items: {
            viewAll: 'pages.home.sections.catalog.items.viewAll'
          }
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
      signOut: 'pages.account.signOut',
      signInPrompt: 'pages.account.signInPrompt',
      overview: {
        title: 'pages.account.overview.title',
        subTitle: 'pages.account.overview.subTitle',
        link: 'pages.account.overview.link',
        welcome: 'pages.account.overview.welcome',
        orders: {
          title: 'pages.account.overview.orders.title',
          viewAllText: 'pages.account.overview.orders.viewAllText'
        },
        profileInformation: {
          title: 'pages.account.overview.profileInformation.title',
          nameHeader: 'pages.account.overview.profileInformation.nameHeader',
          jobHeader: 'pages.account.overview.profileInformation.jobHeader',
          phoneHeader: 'pages.account.overview.profileInformation.phoneHeader',
          emailHeader: 'pages.account.overview.profileInformation.emailHeader'
        },
        companyInformation: {
          companyHeader:
            'pages.account.overview.companyInformation.companyHeader',
          customerHeader:
            'pages.account.overview.companyInformation.customerHeader',
          paymentHeader:
            'pages.account.overview.companyInformation.paymentHeader'
        },
        user: {
          status: {
            manager: 'pages.account.overview.user.status.manager',
            admin: 'pages.account.overview.user.status.admin',
            employee: 'pages.account.overview.user.status.employee',
            customer: 'pages.account.overview.user.status.customer',
            verified: 'pages.account.overview.user.status.verified'
          }
        }
      },
      orders: {
        statusHeader: 'pages.account.orders.statusHeader',
        orderDateHeader: 'pages.account.orders.orderDateHeader',
        totalHeader: 'pages.account.orders.totalHeader',
        viewOrder: 'pages.account.orders.viewOrder',
        numberHeader: 'pages.account.orders.numberHeader'
      },
      sections: {
        orders: {
          title: 'pages.account.sections.orders.title'
        },
        quoteRequests: {
          title: 'pages.account.sections.quoteRequests.title'
        },
        infoAndPreferences: {
          title: 'pages.account.sections.infoAndPreferences.title',
          sections: {
            profileInformation: {
              title:
                'pages.account.sections.infoAndPreferences.sections.profileInformation.title',
              description:
                'pages.account.sections.infoAndPreferences.sections.profileInformation.description'
            },
            addressBook: {
              title:
                'pages.account.sections.infoAndPreferences.sections.addressBook.title',
              description:
                'pages.account.sections.infoAndPreferences.sections.addressBook.description'
            },
            companyInformation: {
              title:
                'pages.account.sections.infoAndPreferences.sections.companyInformation.title',
              description:
                'pages.account.sections.infoAndPreferences.sections.companyInformation.description'
            },
            preferences: {
              title:
                'pages.account.sections.infoAndPreferences.sections.preferences.title',
              description:
                'pages.account.sections.infoAndPreferences.sections.preferences.description'
            }
          }
        }
      }
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
      },
      actions: {
        continue: 'pages.cart.actions.continue',
        clear: 'pages.cart.actions.clear'
      },
      summary: {
        header: 'pages.cart.summary.header',
        numberOfProducts: 'pages.cart.summary.numberOfProducts',
        numberOfItems: 'pages.cart.summary.numberOfItems',
        subtotal: 'pages.cart.summary.subtotal',
        actions: {
          continue: 'pages.cart.summary.actions.continue',
          request: 'pages.cart.summary.actions.request',
          proceed: 'pages.cart.summary.actions.proceed',
          signIn: 'pages.cart.summary.actions.signIn',
          quotedPriceWarning: 'pages.cart.summary.actions.quotedPriceWarning',
          completeProfile: 'pages.cart.summary.actions.completeProfile',
          quotedPriceWarningTooltip:
            'pages.cart.summary.actions.quotedPriceWarningTooltip'
        }
      },
      list: {
        emptyCart: 'pages.cart.list.emptyCart',
        loading: 'pages.cart.list.loading',
        cartError: 'pages.cart.list.cartError'
      },
      addedToCart: 'pages.cart.addedToCart',
      limitReached: 'pages.cart.limitReached',
      goToCart: 'pages.cart.goToCart',
      continueShopping: 'pages.cart.continueShopping'
    },
    checkout: {
      title: 'pages.checkout.title',
      details: {
        generalTitle: 'pages.checkout.details.generalTitle',
        fields: {
          email: 'pages.checkout.details.fields.email',
          firstName: 'pages.checkout.details.fields.firstName',
          name: 'pages.checkout.details.fields.name',
          company: 'pages.checkout.details.fields.company',
          country: 'pages.checkout.details.fields.country',
          address: 'pages.checkout.details.fields.address',
          addressLineTwo: 'pages.checkout.details.fields.addressLineTwo',
          city: 'pages.checkout.details.fields.city',
          state: 'pages.checkout.details.fields.state',
          postalCode: 'pages.checkout.details.fields.postalCode',
          phone: 'pages.checkout.details.fields.phone'
        }
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
    },
    systemOfMeasurement: {
      metric: 'data.systemOfMeasurement.metric',
      us: 'data.systemOfMeasurement.us',
      controls: {
        units: 'data.systemOfMeasurement.controls.units'
      }
    },
    orders: {
      status: {
        canceled: 'data.orders.status.canceled',
        inProcess: 'data.orders.status.inProcess',
        new: 'data.orders.status.new',
        shipped: 'data.orders.status.shipped'
      }
    },
    payments: {
      creditCard: 'data.payments.creditCard',
      purchaseOrder: 'data.payments.purchaseOrder'
    }
  },
  summary: {
    details: 'summary.details'
  },
  validation: {
    mixed: {
      required: 'validation.mixed.required'
    },
    string: {
      email: 'validation.string.email',
      matches: 'validation.string.matches',
      min: 'validation.string.min',
      max: 'validation.string.max'
    }
  }
};
