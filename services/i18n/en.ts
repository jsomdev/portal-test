import { Messages } from './types';

/**
 * The English translations
 */
export const en: Messages = {
  navigation: {
    main: {
      title: 'Menu',
      collapseLabel: 'navigation.main.collapseLabel',
      expandLabel: 'navigation.main.expandLabel',
      cartAriaLabel: 'Shopping Cart',
      accessPadAriaLabel: 'Quick Access Pad',
      userAriaLabel: 'User Menu',
      viewAllCategories: 'Go to all categories',
      viewAllCategory: 'Go to all {category}'
    },
    site: {
      navigationAriaLabel: 'Navigation Menu',
      title: 'Organization',
      collapseLabel: 'navigation.site.collapseLabel',
      expandLabel: 'navigation.site.expandLabel',
      logoAlt: 'Spraying Systems Company Logo'
    },
    account: {
      title: 'My Account',
      collapseLabel: 'navigation.account.collapseLabel',
      expandLabel: 'navigation.account.expandLabel',
      signIn: 'Sign in',
      myProfile: 'My Profile'
    },
    locale: {
      title: 'Selected Country/Region'
    }
  },
  searchBar: {
    placeholder: 'Search by part number...'
  },
  pricing: {
    quantityLabel: 'Quantity',
    priceLabel: 'Price',
    error: 'Error loading pricing',
    signInForDetails: 'Sign in for pricing details',
    tooltips: {
      notAuthenticated:
        'Please sign in into your account or contact your sales account manager to know your pricing.',
      quotedPrice:
        'Please add this product to your cart and request a quotation to get your price.'
    },
    stockInfo: {
      stockNotAvailable: 'Stock information is not available'
    },
    discounts: {
      bulkAvailable: 'Quantity discount available',
      bulkApplied: 'Quantity discount applied'
    },
    quotedPrice: 'Quoted Price',
    addToCart: 'Add to cart',
    unitPriceSuffix: '/ each'
  },
  finder: {
    compare: 'Compare',
    seeComparison: 'See Comparison',
    filters: {
      clearAll: 'Clear all filters',
      search: 'Search: {query}'
    },
    overview: {
      browseAll: 'Browse all {category}'
    },
    checkboxFacet: {
      actions: {
        more: 'More',
        less: 'Minder'
      },
      panel: {
        placeholder: 'Search'
      }
    },
    categoryFacet: {
      title: 'Category'
    },
    pagination: {
      next: 'Next',
      previous: 'Previous'
    },
    operatingConditions: {
      validation: {
        title: 'Incorrect input values',
        greaterThanZero: 'Value must be greater than 0',
        requiredFlowRate: 'Liquid Flow Rate is required',
        requiredFlowRatePressure: 'When you specific Liquid Pressure',
        requiredFlowRateGravity: 'When you change Specific Gravity'
      },
      actions: {
        apply: 'Apply'
      },
      liquidType: {
        customValue: {
          title: 'Enter value',
          placeholder: 'Custom ({minimum} to {maximum})',
          suffix: 'sg'
        }
      }
    },
    panel: {
      mobile: {
        title: 'Filters',
        ariaClose: 'Close',
        ariaCollapse: 'Collapse Filter',
        ariaExpand: 'Expand Filter',
        showResults:
          '{productCount, plural,=0 {No products to show} one {Show 1 product} other {Show {productCount} products}}'
      }
    },
    resultsHeader: {
      count:
        '{productCount, plural,=0 {No products found} one {Found 1 product} other {Found {productCount} products across {modelCount, plural,=0 {0 models} one {1 model} other {{modelCount} models}}}}',
      actions: {
        filter:
          '{productCount, plural,=0 {No products to filter} one {Filter 1 product} other {Filter {productCount} products}}'
      }
    }
  },
  pages: {
    default: {
      headTitle: '{title} | Spraying Systems Co.'
    },
    product: {
      imageDisclaimer: 'pages.product.imageDisclaimer',
      sections: {
        top: {
          configurations: {
            title: 'Product Configuration'
          },
          display: {
            pdf: {
              loading: 'Loading document...',
              error: 'Something went wrong',
              noData: 'Something went missing',
              zoomIn: 'Zoom in',
              zoomOut: 'Zoom out',
              openNew: 'Open in new tab',
              scaleToWidth: 'Scale to width',
              fitToWidth: 'Fit to width',
              fitToPage: 'Fit to page'
            }
          }
        },
        accessories: {
          title: 'Accessories'
        },
        downloads: {
          title: 'Product Downloads',
          actions: {
            dataSheets: 'Data Sheets',
            drawings2d: 'Drawings 2D',
            drawings3d: 'Drawings 3D'
          },
          documentsTitle: 'Documents',
          downloadError: 'There was an error downloading your file',
          otherTitle: 'Other'
        },
        performance: {
          title: 'Product Performance',
          multiChart: {
            seriesLabel: 'for {value} ({type})'
          }
        },
        generalInformation: {
          title: 'General Information',
          flowTitle: 'Flow',
          descriptionTitle: 'Description',
          keySpecificationsDescription: 'The key specifications of the product',
          keySpecificationsTitle: 'Specification Summary'
        },
        specifications: {
          title: 'Specifications',
          actions: {
            openLink: 'Open link ({index})'
          }
        }
      }
    },
    home: {
      headTitle: 'Welcome',
      headDescription: 'Experts in Spray Technology',
      sections: {
        hero: {
          imageAlt: 'Hero image',
          title: 'Choose Quality Nozzles',
          description: `Paired with excellent customer service, Spraying Systems Co.'s digital catalog helps you find, compare and purchase the products your company needs.`,
          callToAction: `Get started`
        },
        signUp: {
          title: 'Sign in for the best experience',
          callToAction: 'Sign in',
          steps: {
            first: {
              title: 'New user?',
              description:
                'You can create an account linked to your company and complete your contact details'
            },
            second: {
              title: 'Start shopping',
              description:
                'Browse our products and add the ones you need to your cart. Your cart will be linked to your customer account'
            },
            third: {
              title: 'Order products',
              description:
                'Checkout your cart or send us a quote request. Our team is ready to help you!'
            }
          }
        },
        catalog: {
          title: 'Browse our Catalog',
          items: {
            viewAll: 'Browse all'
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
      headTitle: 'Model',
      headDescription: '{name}'
    },
    category: {
      title: '{name}',
      titleWithSearch: '{searchQuery} in {name}'
    },
    series: {
      headTitle: 'Series',
      headDescription: '{name}'
    },
    docs: {
      i18n: {
        title: 'Internationalization',
        description: 'Documentation about i18n in the project'
      },
      testing: {
        title: 'Testing',
        description: 'Documentation about testing in the project'
      },
      userInterfaces: {
        title: 'User Interfaces, Layout and Design',
        description:
          'Documentation about user interfaces, layout and design in the project'
      },
      projectSetup: {
        title: 'Project Setup',
        description:
          'Documentation about project setup and configuration in the project'
      }
    },
    account: {
      signOut: 'Sign out',
      signInPrompt: 'Please sign in to view your account page',
      overview: {
        title: 'Account Overview',
        subTitle: 'Here you will find all information relevant to your account',
        link: 'My Account',
        welcome: 'Welcome {name}',
        orders: {
          title: 'Your Recent Orders',
          viewAllText: 'View all previous orders'
        },
        profileInformation: {
          title: 'Profile Information',
          nameHeader: 'This is you:',
          jobHeader: 'Job title:',
          phoneHeader: 'Phone number:',
          emailHeader: 'Email address:'
        },
        companyInformation: {
          companyHeader: 'This is your company:',
          customerHeader: 'Customer number:',
          paymentHeader: 'Payment method:'
        },
        account: {
          status: {
            manager: 'Manager',
            admin: 'Admin',
            employee: 'Employee',
            customer: 'Customer',
            verified: 'Verified'
          }
        },
        addressBook: {
          title: 'Address Book',
          billingAddress: 'Billing Address',
          shippingAddress: 'Shipping Address',
          viewAllText: 'View all addresses'
        }
      },
      orders: {
        statusHeader: 'Status:',
        orderDateHeader: 'Ordered on:',
        totalHeader: 'Total price:',
        viewOrder: 'View order',
        numberHeader: 'Order number:',
        reorderAll: 'Reorder all products',
        reorderSingle: 'Reorder product',
        viewAllLines:
          '{number, plural,=0 {No additional products} one {Show 1 more product} other {Show {number} more products}}',
        detailsHeader: 'Address and payment information',
        shippingAddressHeader: 'Delivery address',
        billingAddressHeader: 'Invoice address',
        overviewHeader: 'Overview',
        shippingMethodHeader: 'Shipping method',
        paymentMethodHeader: 'Payment method',
        totalProducts: 'Total products',
        shippingCosts: 'Shipping costs',
        taxHeader: 'Tax',
        commentsHeader: 'Comments'
      },
      quoteRequests: {
        requestDateHeader: 'Requested on:',
        viewQuoteRequest: 'View quote request'
      },
      quotes: {
        numberHeader: 'Quote number:',
        quoteDateHeader: 'Quote created on:',
        totalHeader: 'Total price:',
        viewQuote: 'View quote'
      },
      sections: {
        orders: {
          title: 'Orders'
        },
        order: {
          title: 'Order'
        },
        quotes: {
          title: 'Quotes'
        },
        quoteRequests: {
          title: 'Quote Requests'
        },
        quoteRequest: {
          title: 'Quote Request'
        },
        quote: {
          title: 'Quote'
        },
        infoAndPreferences: {
          title: 'Info & Preferences',
          sections: {
            profileInformation: {
              title: 'Profile Information',
              description:
                'Change your login details or personal information, such as your phone number.',
              changePasswordLink: 'Change password',
              viewInfoLink: 'View personal information'
            },
            addressBook: {
              title: 'Address Book',
              description:
                'You can add and change addresses on this page. When ordering you can quickly select the right address.',
              viewAddressBookLink: 'View address book'
            },
            companyInformation: {
              title: 'Company Information',
              description:
                'Change your company information, invoice address and verify your account.'
            },
            preferences: {
              title: 'Preferences',
              description:
                'Find and manage your preferences. Choose your application settings and privacy settings',
              privacySettingsLink: 'Privacy settings',
              settingsLink: 'Measurement settings'
            }
          }
        }
      }
    },
    cart: {
      title: 'Cart',
      loading: 'Loading cart...',
      merge: {
        message:
          'You have added products to your cart while you were logged out. Do you want us to add them to your cart? ',
        viewProducts: 'View products'
      },
      addBulkCard: {
        title: 'Add multiple products at once',
        description:
          'Enter the number and the quantity of the products you wish to add to your cart.',
        quantityPrefix: 'Qty',
        entryButton: 'Entry',
        resetButton: 'Reset',
        addToCartButton: 'Add to cart',
        addToCartButtonInProgress: 'Adding...',
        productNumberPlaceholder: 'Product Number',
        bulkAllCompleteMessage: 'All products have been added to the cart.',
        bulkPartialCompleteMessage:
          'Some products were added to the cart: {productNumbers}.',
        bulkFailMessage:
          'Following products could not be added to the cart: {productNumbers}',
        warningDialogTitle: 'Some items have not been added'
      },
      productsAddedWhileLoggedOutDialog: {
        title: 'Products added while logged out',
        loading: 'Loading products...'
      },
      actions: {
        continue: 'Continue shopping',
        clear: 'Clear cart'
      },
      summary: {
        header: 'Summary',
        numberOfProducts: 'Number of Products',
        numberOfItems: 'Number of Items',
        subtotal: 'Sub Total',
        actions: {
          continue: 'Continue',
          request: 'Request for quotation',
          proceed: 'Proceed to checkout',
          signIn: 'Sign in to continue',
          quotedPriceWarning: 'Your cart contains items with quoted prices.',
          completeProfile: 'Complete your profile for pricing details.',
          quotedPriceWarningTooltip:
            'Items that have a quoted price will be excluded from the checkout process when you proceed to place your order. They will remain in your shopping cart for future use until you send them in for quotation.'
        }
      },
      list: {
        emptyCart: 'Your cart is empty.',
        loading: 'Loading product information...',
        cartError: 'There was an error loading your cart.'
      },
      addedToCart: 'Added to cart',
      limitReached: `Your cart has reached its limit for Product ''{productNumber}''. {quantityAdded} {quantityAdded, plural, one {item} other {items}} have been added to your cart`,
      goToCart: 'Go to cart',
      continueShopping: 'Continue shopping'
    },
    checkout: {
      title: 'Checkout'
    }
  },
  loading: {
    default: 'Loading...',
    user: {
      signingIn: 'Signing in...',
      signingOut: 'Signing out...',
      redirecting: 'Redirecting...'
    }
  },
  bookmarks: {
    actions: {
      bookmark: 'Bookmark'
    }
  },
  steps: {
    actions: {
      proceed: 'Proceed',
      previous: 'Previous step'
    }
  },
  data: {
    resourceType: {
      caseStudy: 'Case Study',
      catalog: 'Catalog',
      catalogDetail: ' Catalog Detail',
      default: 'Download',
      flowImage: 'Flow Image',
      image: 'Image',
      interactiveModel: 'Interactive Model',
      productBulletin: 'Product Bulletin',
      technicalManual: 'Technical Manual',
      video: 'Video',
      whitePaper: 'White Paper'
    },
    boolean: {
      true: 'Yes',
      false: 'No'
    },
    systemOfMeasurement: {
      metric: 'Metric',
      us: 'US',
      controls: {
        units: '{system} units'
      }
    },
    payments: {
      creditCard: 'Credit card',
      purchaseOrder: 'Purchase order'
    },
    orders: {
      status: {
        canceled: 'Canceled',
        inProcess: 'In Process',
        new: 'New',
        shipped: 'Shipped'
      }
    },
    shippingMethods: {
      freeShipping: 'Free Shipping',
      flatRate: 'Flat Rate',
      upsGround: 'UPS Ground',
      upsSecondDayAir: 'UPS Second Day Air',
      upsNextDayAir: 'UPS Next Day Air',
      upsNextDayAirSaver: 'UPS Next Day Air Saver',
      upsStandard: 'UPS Standard',
      upsWorldwideExpedited: 'UPS Worldwide Expedited'
    }
  },
  summary: {
    details: 'Details'
  }
};
