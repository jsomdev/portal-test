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
        accessories: {
          title: 'Accessories'
        },
        downloadsSection: {
          title: 'Product Downloads'
        },
        performance: {
          title: 'Product Performance'
        },
        generalInformation: {
          title: 'General Information'
        },
        specifications: {
          title: 'Product Specifications'
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
        }
      },
      orders: {
        statusHeader: 'Status:',
        orderDateHeader: 'Ordered on:',
        totalHeader: 'Total price:',
        viewOrder: 'View order',
        numberHeader: 'Order number:'
      },
      sections: {
        orders: {
          title: 'Orders'
        },
        quoteRequests: {
          title: 'Quote Requests'
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
      title: 'Checkout',
      orderSuccess: 'Your order has been created. Redirecting...',
      creatingOrder: 'Creating your order...',
      loadingCart: 'Loading cart...',
      loadingCartFailed: 'Loading cart failed!',
      loadingProductInfo: 'Loading product information...',
      loadingProductInfoFailed: 'Loading product information failed!',
      noItems: 'There were no items found in your cart with available pricing.',
      noItemsLink: 'Please return to the cart page and request a quote.',
      needsSignIn:
        'You need to be signed in to checkout your cart. Please {signInText}',
      signInText: 'sign in here.',
      unauthorized: 'You are not authorized to view this page.',
      steps: {
        details: 'Details',
        shippingMethod: 'Shipping Method',
        paymentDetails: 'Payment Method',
        overview: 'Overview'
      },
      actions: {
        nextButton: 'Proceed',
        backButton: 'Previous Step',
        submitButton: 'Submit',
        completePayment: 'Confirm and pay',
        completePurchaseOrder: 'Confirm and submit'
      },
      details: {
        generalTitle: 'General',
        shippingContactTitle: 'Shipping Contact',
        shippingAddressTitle: 'Shipping Address',
        fields: {
          email: 'Email',
          emailPlaceholder: 'example@domain.com',
          firstName: 'First Name',
          name: 'Last Name',
          company: 'Company Name',
          companyPlaceholder: 'Name of organization',
          country: 'Country',
          countryPlaceholder: 'Select an option',
          address: 'Address',
          addressPlaceholder: 'Street and number',
          city: 'City',
          state: 'State / Province',
          statePlaceholder: {
            default: 'State / Region / Province',
            BE: 'Please select a province',
            US: 'Please select a state',
            CA: 'Please select a province'
          },
          postalCode: 'Postal Code',
          phone: 'Phone Number'
        }
      },
      summary: {
        details: 'Details',
        subTotal: 'Sub Total',
        shippingCost: 'Shipping',
        total: 'Order Total',
        tax: 'Tax'
      },
      discounts: {
        apply: 'Apply',
        discountCode: 'Discount code'
      },
      usps: {
        qualityServices: 'Quality Services',
        secureTransactions: 'Secure Transactions',
        expertSupport: 'Expert Support'
      }
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
  steps: {
    actions: {
      proceed: 'Proceed',
      previous: 'Previous step'
    }
  },
  data: {
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
    }
  },
  summary: {
    details: 'Details'
  },
  validation: {
    mixed: {
      required: '{label} is required'
    },
    string: {
      email: 'Please enter a valid email address',
      matches: '{label} is not valid',
      min: '{label} must be at least {min} characters',
      max: '{label} must be at most {max} characters'
    }
  }
};
