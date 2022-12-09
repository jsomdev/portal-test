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
    account: {
      title: 'navigation.account.title',
      collapseLabel: 'navigation.account.collapseLabel',
      expandLabel: 'navigation.account.expandLabel',
      signIn: 'navigation.account.signIn',
      myProfile: 'navigation.account.myProfile'
    },
    locale: {
      title: 'navigation.locale.title'
    }
  },
  searchBar: {
    noResults: 'searchBar.noResults',
    recentSearches: 'searchBar.recentSearches',
    suggestedProducts: 'searchBar.suggestedProducts',
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

  bookmarks: {
    actions: {
      bookmark: 'bookmarks.actions.bookmark'
    }
  },
  finder: {
    compare: 'finder.compare',
    seeComparison: 'finder.seeComparison',
    filters: {
      clearAll: 'finder.filters.clearAll',
      search: 'finder.filters.search'
    },
    overview: {
      browseAll: 'finder.overview.browseAll'
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
    search: {
      title: 'pages.search.title',
      headDescription: 'pages.search.headTitle',
      headTitle: 'pages.search.headDescription'
    },
    product: {
      imageDisclaimer: 'pages.product.imageDisclaimer',
      sections: {
        top: {
          configurations: {
            title: 'pages.product.sections.top.configurations.title'
          },
          display: {
            pdf: {
              loading: 'pages.product.sections.top.display.pdf.loading',
              error: 'pages.product.sections.top.display.pdf.error',
              noData: 'pages.product.sections.top.display.pdf.noData',
              zoomIn: 'pages.product.sections.top.display.pdf.zoomIn',
              zoomOut: 'pages.product.sections.top.display.pdf.zoomOut',
              openNew: 'pages.product.sections.top.display.pdf.openNew',
              scaleToWidth:
                'pages.product.sections.top.display.pdf.scaleToWidth',
              fitToWidth: 'pages.product.sections.top.display.pdf.fitToWidth',
              fitToPage: 'pages.product.sections.top.display.pdf.fitToPage'
            }
          }
        },
        accessories: {
          title: 'pages.product.sections.accessories.title'
        },
        downloads: {
          title: 'pages.product.sections.downloads.title',
          actions: {
            dataSheets: 'pages.product.sections.downloads.actions.dataSheets',
            drawings2d: 'pages.product.sections.downloads.actions.drawings2d',
            drawings3d: 'pages.product.sections.downloads.actions.drawings3d'
          },
          documentsTitle: 'pages.product.sections.downloads.documentsTitle',
          downloadError: 'pages.product.sections.downloads.downloadError',
          otherTitle: 'pages.product.sections.downloads.otherTitle'
        },
        performance: {
          title: 'pages.product.sections.performance.title',
          multiChart: {
            seriesLabel:
              'pages.product.sections.performance.multiChart.seriesLabel'
          }
        },
        generalInformation: {
          title: 'pages.product.sections.generalInformation.title',
          flowTitle: 'pages.product.sections.generalInformation.flowTitle',
          descriptionTitle:
            'pages.product.sections.generalInformation.descriptionTitle',
          keySpecificationsDescription:
            'pages.product.sections.generalInformation.keySpecificationsDescription',
          keySpecificationsTitle:
            'pages.product.sections.generalInformation.keySpecificationsTitle'
        },
        specifications: {
          actions: {
            openLink: 'pages.product.sections.specifications.actions.openLink'
          },
          title: 'pages.product.sections.specifications.title'
        },
        alternativeModels: {
          title: 'pages.product.sections.alternativeModels.title'
        }
      }
    },
    home: {
      headTitle: 'pages.home.headTitle',
      headDescription: 'pages.home.headDescription',
      sections: {
        support: {
          title: 'pages.home.sections.support.title',
          searchToolTitle: 'pages.home.sections.support.searchToolTitle',
          searchToolDescription:
            'pages.home.sections.support.searchToolDescription',
          searchToolAction: 'pages.home.sections.support.searchToolAction',
          localRepTitle: 'pages.home.sections.support.localRepTitle',
          localRepDescription:
            'pages.home.sections.support.localRepDescription',
          localRepAction: 'pages.home.sections.support.localRepAction',
          onlineChatTitle: 'pages.home.sections.support.onlineChatTitle',
          onlineChatDescription:
            'pages.home.sections.support.onlineChatDescription',
          onlineChatAction: 'pages.home.sections.support.onlineChatAction'
        },
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
      browseAll: 'pages.model.browseAll',
      headTitle: 'pages.model.headTitle',
      headDescription: 'pages.model.headDescription'
    },
    category: {
      title: 'pages.category.title',
      titleWithoutSearchOrCategory:
        'pages.category.titleWithoutSearchOrCategory',
      titleWithSearchAndCategory: 'pages.category.titleWithSearchAndCategory',
      titleWithOnlySearch: 'pages.category.titleWithOnlySearch'
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
        account: {
          status: {
            manager: 'pages.account.overview.account.status.manager',
            admin: 'pages.account.overview.account.status.admin',
            employee: 'pages.account.overview.account.status.employee',
            customer: 'pages.account.overview.account.status.customer',
            verified: 'pages.account.overview.account.status.verified'
          }
        },
        addressBook: {
          title: 'pages.account.overview.addressBook.title',
          billingAddress: 'pages.account.overview.addressBook.billingAddress',
          shippingAddress: 'pages.account.overview.addressBook.shippingAddress',
          viewAllText: 'pages.account.overview.addressBook.viewAllText'
        }
      },
      orders: {
        statusHeader: 'pages.account.orders.statusHeader',
        orderDateHeader: 'pages.account.orders.orderDateHeader',
        totalHeader: 'pages.account.orders.totalHeader',
        viewOrder: 'pages.account.orders.viewOrder',
        numberHeader: 'pages.account.orders.numberHeader',
        reorderAll: 'pages.account.orders.reorderAll',
        reorderSingle: 'pages.account.orders.reorderSingle',
        viewAllLines: 'pages.account.orders.viewAllLines',
        detailsHeader: 'pages.account.orders.detailsHeader',
        shippingAddressHeader: 'pages.account.orders.shippingAddressHeader',
        billingAddressHeader: 'pages.account.orders.billingAddressHeader',
        overviewHeader: 'pages.account.orders.overviewHeader',
        shippingMethodHeader: 'pages.account.orders.shippingMethodHeader',
        paymentMethodHeader: 'pages.account.orders.paymentMethodHeader',
        totalProducts: 'pages.account.orders.totalProducts',
        shippingCosts: 'pages.account.orders.shippingCosts',
        taxHeader: 'pages.account.orders.taxHeader',
        commentsHeader: 'pages.account.orders.commentsHeader'
      },
      quoteRequests: {
        requestDateHeader: 'pages.account.quoteRequests.requestDateHeader',
        viewQuoteRequest: 'pages.account.quoteRequests.viewQuoteRequest'
      },
      quotes: {
        numberHeader: 'pages.account.quotes.numberHeader',
        quoteDateHeader: 'pages.account.quotes.quoteDateHeader',
        totalHeader: 'pages.account.quotes.totalHeader',
        viewQuote: 'pages.account.quotes.viewQuote'
      },
      sections: {
        orders: {
          title: 'pages.account.sections.orders.title'
        },
        order: {
          title: 'pages.account.sections.order.title'
        },
        quotes: {
          title: 'pages.account.sections.quotes.title'
        },
        quoteRequests: {
          title: 'pages.account.sections.quoteRequests.title'
        },
        quote: {
          title: 'pages.account.sections.quote.title'
        },
        quoteRequest: {
          title: 'pages.account.sections.quoteRequest.title'
        },
        infoAndPreferences: {
          title: 'pages.account.sections.infoAndPreferences.title',
          sections: {
            profileInformation: {
              title:
                'pages.account.sections.infoAndPreferences.sections.profileInformation.title',
              description:
                'pages.account.sections.infoAndPreferences.sections.profileInformation.description',
              changePasswordLink:
                'pages.account.sections.infoAndPreferences.sections.profileInformation.changePasswordLink',
              viewInfoLink:
                'pages.account.sections.infoAndPreferences.sections.profileInformation.viewInfoLink'
            },
            addressBook: {
              title:
                'pages.account.sections.infoAndPreferences.sections.addressBook.title',
              description:
                'pages.account.sections.infoAndPreferences.sections.addressBook.description',
              viewAddressBookLink:
                'pages.account.sections.infoAndPreferences.sections.addressBook.viewAddressBookLink'
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
                'pages.account.sections.infoAndPreferences.sections.preferences.description',
              privacySettingsLink:
                'pages.account.sections.infoAndPreferences.sections.preferences.privacySettingsLink',
              settingsLink:
                'pages.account.sections.infoAndPreferences.sections.preferences.settingsLink'
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
      orderSuccess: 'pages.checkout.orderSuccess',
      creatingOrder: 'pages.checkout.creatingOrder',
      loadingCart: 'pages.checkout.loadingCart',
      loadingCartFailed: 'pages.checkout.loadingCartFailed',
      loadingProductInfo: 'pages.checkout.loadingProductInfo',
      loadingProductInfoFailed: 'pages.checkout.loadingProductInfoFailed',
      noItems: 'pages.checkout.noItems',
      noItemsLink: 'pages.checkout.noItemsLink',
      needsSignIn: 'pages.checkout.needsSignIn',
      signInText: 'pages.checkout.signInText',
      unauthorized: 'pages.checkout.unauthorized',
      steps: {
        details: 'pages.checkout.steps.details',
        shippingMethod: 'pages.checkout.steps.shippingMethod',
        paymentDetails: 'pages.checkout.steps.paymentDetails',
        overview: 'pages.checkout.steps.overview'
      },
      actions: {
        nextButton: 'pages.checkout.actions.nextButton',
        backButton: 'pages.checkout.actions.backButton',
        submitButton: 'pages.checkout.actions.submitButton',
        completePayment: 'pages.checkout.actions.completePayment',
        completePurchaseOrder: 'pages.checkout.actions.completePurchaseOrder'
      },
      details: {
        generalTitle: 'pages.checkout.details.generalTitle',
        shippingContactTitle: 'pages.checkout.details.shippingContactTitle',
        shippingAddressTitle: 'pages.checkout.details.shippingAddressTitle',
        fields: {
          email: 'pages.checkout.details.fields.email',
          emailPlaceholder: 'pages.checkout.details.fields.emailPlaceholder',
          firstName: 'pages.checkout.details.fields.firstName',
          name: 'pages.checkout.details.fields.name',
          company: 'pages.checkout.details.fields.company',
          companyPlaceholder:
            'pages.checkout.details.fields.companyPlaceholder',
          country: 'pages.checkout.details.fields.country',
          countryPlaceholder:
            'pages.checkout.details.fields.countryPlaceholder',
          address: 'pages.checkout.details.fields.address',
          addressPlaceholder:
            'pages.checkout.details.fields.addressPlaceholder',
          city: 'pages.checkout.details.fields.city',
          state: 'pages.checkout.details.fields.state',
          statePlaceholder: {
            default: 'pages.checkout.details.fields.statePlaceholder.default',
            BE: 'pages.checkout.details.fields.statePlaceholder.BE',
            US: 'pages.checkout.details.fields.statePlaceholder.US',
            CA: 'pages.checkout.details.fields.statePlaceholder.CA'
          },
          postalCode: 'pages.checkout.details.fields.postalCode',
          phone: 'pages.checkout.details.fields.phone'
        }
      },
      shippingMethods: {
        shippingMethodLabel:
          'pages.checkout.shippingMethods.shippingMethodLabel',
        loadingShippingMethods:
          'pages.checkout.shippingMethods.loadingShippingMethods'
      },
      payment: {
        billingContact: 'pages.checkout.payment.billingContact',
        billingAddress: 'pages.checkout.payment.billingAddress',
        creditCard: 'pages.checkout.payment.creditCard',
        purchaseOrder: 'pages.checkout.payment.purchaseOrder',
        purchaseOrderInfo: 'pages.checkout.payment.purchaseOrderInfo',
        fields: {
          paymentMethod: 'pages.checkout.payment.fields.paymentMethod',
          shippingAddressAsBillingAddress:
            'pages.checkout.payment.fields.shippingAddressAsBillingAddress',
          shippingContactAsBillingContact:
            'pages.checkout.payment.fields.shippingContactAsBillingContact',
          billingAddressChoice: {
            sameAsShipping:
              'pages.checkout.payment.fields.billingAddressChoice.sameAsShipping',
            differentFromShipping:
              'pages.checkout.payment.fields.billingAddressChoice.differentFromShipping'
          },
          billingContactChoice: {
            sameAsShipping:
              'pages.checkout.payment.fields.billingContactChoice.sameAsShipping',
            differentFromShipping:
              'pages.checkout.payment.fields.billingContactChoice.differentFromShipping'
          },
          creditCardNumber: 'pages.checkout.payment.fields.creditCardNumber',
          creditCardNumberInvalidFormatError:
            'pages.checkout.payment.fields.creditCardNumberInvalidFormatError',

          creditCardName: 'pages.checkout.payment.fields.creditCardName',
          creditCardNameInvalidFormatError:
            'pages.checkout.payment.fields.creditCardNameInvalidFormatError',
          creditCardExpiration:
            'pages.checkout.payment.fields.creditCardExpiration',
          creditCardExpirationPlaceholder:
            'pages.checkout.payment.fields.creditCardExpirationPlaceholder',
          creditCardExpirationInvalidError:
            'pages.checkout.payment.fields.creditCardExpirationInvalidError',
          creditCardCVV: 'pages.checkout.payment.fields.creditCardCVV',

          billingFirstName: 'pages.checkout.payment.fields.billingFirstName',
          billingLastName: 'pages.checkout.payment.fields.billingLastName',
          billingCompany: 'pages.checkout.payment.fields.billingCompany',
          billingCompanyPlaceholder:
            'pages.checkout.payment.fields.billingCompanyPlaceholder',
          billingPhone: 'pages.checkout.payment.fields.billingPhone',

          billingAddress: 'pages.checkout.payment.fields.billingAddress',
          billingCity: 'pages.checkout.payment.fields.billingCity',
          billingState: 'pages.checkout.payment.fields.billingState',
          billingCountry: 'pages.checkout.payment.fields.billingCountry',
          billingPostalCode: 'pages.checkout.payment.fields.billingPostalCode',
          referenceNumber: 'pages.checkout.payment.fields.referenceNumber'
        }
      },
      summary: {
        details: 'pages.checkout.summary.details',
        subTotal: 'pages.checkout.summary.subTotal',
        shippingCost: 'pages.checkout.summary.shippingCost',
        total: 'pages.checkout.summary.total',
        tax: 'pages.checkout.summary.tax'
      },
      overview: {
        reviewTitle: 'pages.checkout.overview.reviewTitle',
        termsAndConditions: 'pages.checkout.overview.termsAndConditions',
        privacyPolicy: 'pages.checkout.overview.privacyPolicy',
        editGroup: 'pages.checkout.overview.editGroup',
        totalCost: 'pages.checkout.overview.totalCost',
        invoiceAmount: 'pages.checkout.overview.invoiceAmount',
        fields: {
          acceptedTerms: 'pages.checkout.overview.fields.acceptedTerms',
          acceptedTermsRequired:
            'pages.checkout.overview.fields.acceptedTermsRequired',
          additionalInformation:
            'pages.checkout.overview.fields.additionalInformation',
          additionalInformationPlaceholder:
            'pages.checkout.overview.fields.additionalInformationPlaceholder'
        }
      },
      discounts: {
        apply: 'pages.checkout.discounts.apply',
        discountCode: 'pages.checkout.discounts.discountCode'
      },
      usps: {
        qualityServices: 'pages.checkout.usps.qualityServices',
        secureTransactions: 'pages.checkout.usps.secureTransactions',
        expertSupport: 'pages.checkout.usps.expertSupport'
      },
      formErrors: {
        vatError: 'pages.checkout.formErrors.vatError',
        noShippingOptions: 'pages.checkout.formErrors.noShippingOptions',
        retryButton: 'pages.checkout.formErrors.retryButton',
        editAddress: 'pages.checkout.formErrors.editAddress'
      },
      errors: {
        chatWithUs: 'pages.checkout.errors.chatWithUs',
        mailTo: 'pages.checkout.errors.mailTo',
        send: 'pages.checkout.errors.send',
        subText: 'pages.checkout.errors.default.description',
        default: {
          title: 'pages.checkout.errors.default.title'
        },
        cardDeclined: {
          title: 'pages.checkout.errors.cardDeclined.title'
        },
        cardInfoIncorrect: {
          title: 'pages.checkout.errors.cardInfoIncorrect.title'
        },
        cartHasNoPricedItems: {
          title: 'pages.checkout.errors.cartHasNoPricedItems.title',
          description: 'pages.checkout.errors.cartHasNoPricedItems.description'
        },
        cartIsEmpty: {
          title: 'pages.checkout.errors.cartIsEmpty.title',
          description: 'pages.checkout.errors.cartIsEmpty.description'
        },
        contentTypeHeaderMissing: {
          title: 'pages.checkout.errors.contentTypeHeaderMissing.title',
          description:
            'pages.checkout.errors.contentTypeHeaderMissing.description'
        },
        givenAmountAndCalculatedAmountDoNotMatch: {
          title:
            'pages.checkout.errors.givenAmountAndCalculatedAmountDoNotMatch.title',
          description:
            'pages.checkout.errors.givenAmountAndCalculatedAmountDoNotMatch.description'
        },
        invalidPaymentMethod: {
          title: 'pages.checkout.errors.invalidPaymentMethod.title',
          description: 'pages.checkout.errors.invalidPaymentMethod.description'
        },
        userDoesNotHaveAccount: {
          title: 'pages.checkout.errors.userDoesNotHaveAccount.title',
          description:
            'pages.checkout.errors.userDoesNotHaveAccount.description'
        },
        todo: {
          title: 'pages.checkout.errors.todo.title',
          description: 'pages.checkout.errors.todo.description'
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
    resourceType: {
      image: 'data.resourceType.image',
      caseStudy: 'data.resourceType.caseStudy',
      catalog: 'data.resourceType.catalog',
      flowImage: 'data.resourceType.flowImage',
      catalogDetail: 'data.resourceType.catalogDetail',
      default: 'data.resourceType.default',
      interactiveModel: 'data.resourceType.interactiveModel',
      productBulletin: 'data.resourceType.productBulletin',
      technicalManual: 'data.resourceType.technicalManual',
      video: 'data.resourceType.video',
      whitePaper: 'data.resourceType.whitePaper'
    },
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
    },
    shippingMethods: {
      freeShipping: 'data.shippingMethods.freeShipping',
      flatRate: 'data.shippingMethods.flatRate',
      upsGround: 'data.shippingMethods.upsGround',
      upsSecondDayAir: 'data.shippingMethods.upsSecondDayAir',
      upsNextDayAir: 'data.shippingMethods.upsNextDayAir',
      upsNextDayAirSaver: 'data.shippingMethods.upsNextDayAirSaver',
      upsStandard: 'data.shippingMethods.upsStandard',
      upsWorldwideExpedited: 'data.shippingMethods.upsWorldwideExpedited'
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
