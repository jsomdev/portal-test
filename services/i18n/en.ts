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
    placeholder: 'Looking for...',
    noResults: 'No results found. Try something else...',
    recentSearches: 'Recent searches',
    suggestedProducts: 'Suggested Products'
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
  comparisonPopup: {
    title: 'Compare products',
    clearAll: 'Clear all',
    compare: 'Compare'
  },
  pages: {
    default: {
      headTitle: '{title} | Spraying Systems Co.'
    },
    compare: {
      currentBaseline: 'Current baseline product',
      differencesView: 'Show only differences',
      generalTitle: 'General',
      internalView: 'Show all attributes',
      loading: 'Loading product comparison...',
      noResults:
        'There are no products to compare. On the finder or product page, you can add products to the comparison.',
      publicView: 'Show public attributes',
      setBaseline: 'Set as baseline product',
      title: 'Product Comparison'
    },

    search: {
      title: `Search results for: '{searchQuery}'`,
      headDescription: 'Experts in Spray Technology',
      headTitle: 'Search {searchQuery}'
    },
    requestForQuote: {
      actions: {
        submit: 'Confirm and submit'
      },
      details: {
        billingAddressTitle: 'Billing Address',
        billingContactTitle: 'Billing Contact',
        generalTitle: 'General'
      },
      summary: {
        details: 'Details',
        numberOfItems: 'Number of items',
        numberOfProducts: 'Number of products'
      },
      creatingRequest: 'Creating your request...',
      needSignIn:
        'You need to be signed in to place a quote request. Please {signInText}',
      noItems:
        'There were no items found in your cart that are eligible for quotation.',
      redirectingLogin: 'pages.requestForQuote.redirectingLogin',
      requestFailed:
        'Something unexpected happened while processing your request! Please contact customer support.',
      requestSuccess: 'Your request has been created. Redirecting...',
      signInText: 'sign in here.',
      submitting: 'Submitting your request...',
      title: 'Quote request'
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
        alternativeModels: {
          title: 'Alternative Models'
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
          noData: 'No chart data available.',
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
        support: {
          title: 'Need help finding the product you need?',
          searchToolTitle: 'Try the search tool',
          searchToolDescription:
            'Find a product based on its part number, name and more',
          searchToolAction: 'Start searching',
          localRepTitle: 'Find a local representative',
          localRepDescription:
            'Your local representative can help you if you are not finding what you are looking for',
          localRepAction: 'Get in contact',
          onlineChatTitle: 'Online support',
          onlineChatDescription:
            'Want to speak with someone before you dive into our big product range?',
          onlineChatAction: 'Schedule a meeting'
        },
        hero: {
          imageAlt: 'Hero image',
          title: 'Choose Quality Nozzles',
          description: `Paired with excellent customer service, Spraying Systems Co.'s digital catalog helps you find, compare and purchase the products your company needs.`,
          callToAction: `Start browsing`
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
      headDescription: '{name}',
      browseAll: "Browse all ''{number}'' products"
    },
    category: {
      title: '{name}',
      titleWithoutSearchOrCategory: 'Browse all products',
      titleWithSearchAndCategory: `''{searchQuery}'' in {name}`,
      titleWithOnlySearch: `Search results for: ''{searchQuery}''`
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
          viewAllText: 'View all addresses',
          setAsDefaultBilling: 'Set as billing address',
          setAsDefaultShipping: 'Set as shipping address',
          editAddress: 'Edit',
          deleteConfirmation: 'Are you sure you want to delete this address?',
          deleteButtonText: 'Delete',
          cancelButtonText: 'Cancel',
          addAddressButtonText: 'Add new address'
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
        commentsHeader: 'Comments',
        confirmationText:
          'Feel free to contact customer support if you have any questions. A customer service representative is standing by at 1-800-9577729.',
        confirmationTitle:
          'Thank you! Your order has been submitted successfully.'
      },
      quoteRequests: {
        requestDateHeader: 'Requested on:',
        viewQuoteRequest: 'View quote request',
        linesHeader: 'Products',
        title: 'Quote Requests',
        viewAll: 'View all quote requests',
        viewAllLines:
          '{number, plural,=0 {No additional products} one {Show 1 more product} other {Show {number} more products}}',
        confirmationText:
          'Feel free to contact customer support if you have any questions. A customer service representative is standing by at 1-800-9577729.',
        confirmationTitle: 'Thank you! Your quote request has been submitted.',
        detailsHeader: 'Contact and shipping information',
        addressHeader: 'Customer details',
        commentsHeader: 'Comments'
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
              viewInfoLink: 'View personal information',
              panel: {
                title: 'Edit information',
                ariaClose: 'close',
                cancel: 'Cancel',
                save: 'Save'
              }
            },
            addressBook: {
              title: 'Address Book',
              description:
                'You can add and change addresses on this page. When ordering you can quickly select the right address.',
              viewAddressBookLink: 'View address book',
              panel: {
                title: 'Address book',
                ariaClose: 'close',
                cancel: 'Cancel',
                save: 'Save'
              },
              formFields: {
                address: {
                  label: 'Address'
                },
                city: {
                  label: 'City'
                },
                country: {
                  label: 'Country',
                  placeholder: 'Select a country'
                },
                name: {
                  label: 'Address name'
                },
                postalCode: {
                  label: 'Postal code'
                },
                region: {
                  label: {
                    ca: 'Province',
                    us: 'State',
                    default: 'Region'
                  },
                  placeholder: {
                    ca: 'Select a province',
                    us: 'Select a state',
                    default: 'Select a region'
                  },
                  required: {
                    ca: 'Please select a province',
                    us: 'Please select a state',
                    default: 'Please select a region'
                  }
                },
                setAsBilling: {
                  label: 'Set as billing address'
                },
                setAsShipping: {
                  label: 'Set as shipping address'
                }
              }
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
        cartError: 'There was an error loading your cart.',
        quantityItemsReadOnlyText:
          '{quantity} {quantity, plural, one {item} other {items}}'
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
        shippingMethod: 'Shipping',
        paymentDetails: 'Payment',
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
      shippingMethods: {
        shippingMethodLabel: 'Shipping Method',
        loadingShippingMethods: 'Loading shipping options...'
      },
      payment: {
        billingContact: 'Billing Contact',
        billingAddress: 'Billing Address',
        creditCard: 'Credit card',
        purchaseOrder: 'Purchase order',
        purchaseOrderInfo:
          'All Pay by Invoice purchases are reviewed and subject to the status and credit available to the account.',
        fields: {
          paymentMethod: 'Payment Method',
          shippingAddressAsBillingAddress: 'Shipping as Billing',
          shippingContactAsBillingContact:
            'Shipping Contact as Billing Contact',
          billingAddressChoice: {
            sameAsShipping: 'Same as shipping address',
            differentFromShipping: 'Use a different billing address'
          },
          billingContactChoice: {
            sameAsShipping: 'Same as shipping contact',
            differentFromShipping: 'Use a different billing contact'
          },
          creditCardNumber: 'Card Number',
          creditCardNumberInvalidFormatError:
            'Your credit card number is invalid',
          creditCardName: 'Name on Card',
          creditCardNameInvalidFormatError: 'Please enter valid name',
          creditCardExpiration: 'Valid Thru',
          creditCardExpirationPlaceholder: 'MM/YY',
          creditCardExpirationInvalidError:
            'Please enter a valid expiration date',
          creditCardCVV: 'CVV / CVC Code',

          billingFirstName: 'First Name',
          billingLastName: 'Last Name',
          billingCompany: 'Company Name',
          billingCompanyPlaceholder: 'Name of organization',
          billingPhone: 'Phone Number',

          billingAddress: 'Address',
          billingCity: 'City',
          billingState: 'State / Province',
          billingCountry: 'Country',
          billingPostalCode: 'Postal Code',
          referenceNumber: 'Reference Number'
        }
      },
      summary: {
        details: 'Details',
        subTotal: 'Sub Total',
        shippingCost: 'Shipping',
        total: 'Order Total',
        tax: 'Tax'
      },
      overview: {
        reviewTitle: 'Review',
        termsAndConditions: 'Terms and conditions',
        privacyPolicy: 'Privacy policy',
        editGroup: 'Edit',
        totalCost: 'You will pay',
        invoiceAmount: 'Invoice amount',
        fields: {
          acceptedTerms:
            'I agree with the {termsAndConditions} and {privacyPolicy}.',
          acceptedTermsRequired: 'You must accept the terms and conditions',
          additionalInformation: 'Additional Information',
          additionalInformationPlaceholder:
            'Add any additional comments, request or remarks'
        }
      },
      discounts: {
        apply: 'Apply',
        discountCode: 'Discount code'
      },
      usps: {
        qualityServices: 'Quality Services',
        secureTransactions: 'Secure Transactions',
        expertSupport: 'Expert Support'
      },
      formErrors: {
        vatError: 'Error loading tax',
        noShippingOptions:
          'No shipping options found. Please check if your shipping address is entered correctly.',
        retryButton: 'Retry',
        editAddress: 'Edit'
      },
      errors: {
        chatWithUs: 'Chat with us',
        mailTo: 'mailto:webteam@spray.com?subject=Checkout / RFQ failed',
        send: 'Send us your feedback',
        subText:
          'Feel free to contact customer support if you have any questions. A customer service representative is standing by at 1-800-9577729.',
        default: {
          title:
            'Something unexpected happened! Please contact customer support.'
        },
        cardDeclined: {
          title: 'Your credit card was declined.'
        },
        cardInfoIncorrect: {
          title: 'Your credit card information is incorrect.'
        },
        cartHasNoPricedItems: {
          title: 'Your cart has no items with available pricing.',
          description: 'Please refresh the page to load current prices.'
        },
        cartIsEmpty: {
          title: 'Your cart is empty.',
          description: 'Please refresh the page to reload your cart.'
        },
        contentTypeHeaderMissing: {
          title: 'There was an unexpected error while placing your order.',
          description: 'The content type header is missing.'
        },
        givenAmountAndCalculatedAmountDoNotMatch: {
          title: 'A pricing discrepancy has occurred.',
          description:
            'The price calculated by the cart does not match the expected amount.'
        },
        invalidPaymentMethod: {
          title: 'The selected payment method is invalid for this account.',
          description:
            'Orders with their payment method set to purchase order require a reference number.'
        },
        userDoesNotHaveAccount: {
          title: 'You are not currently logged in or your session has expired.',
          description:
            'Please reload the page and log back in using your user account.'
        },
        todo: {
          title: 'An unexpected error occurred.',
          description:
            'Please check if your credit card information was entered correctly.'
        }
      }
    },
    notFound: {
      title: 'Not Found',
      header: 'This page could not be found',
      explanation: '{pageType} you are looking for could not be found.',
      redirection:
        'If you are lost, please use our search bar in the top menu, or return to the {homepageLink}',
      homepageLink: 'homepage',
      pageTypes: {
        product: 'The product',
        model: 'The product model',
        category: 'The product category',
        defaultPage: 'The page'
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
