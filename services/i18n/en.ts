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
    },
    footer: {
      siteLinks: {
        items: {
          siteMap: 'Site Map',
          legalInformation: 'Legal Information',
          privacyStatement: 'Privacy Statement',
          isoSystemAndPolicyStatement: 'ISO System and Policy Statement',
          REACH: 'REACH'
        }
      },
      productCategories: {
        title: 'Products',
        items: {
          productsOverview: 'Products Overview',
          nozzles: 'Nozzles',
          sprayGuns: 'Spray Guns',
          tankCleaning: 'Tank Cleaning',
          sprayControlOptions: 'Spray Control Options',
          automatedSpraySystems: 'Automated Spray Systems',
          disinfectionSystems: 'Disinfection Systems',
          sprayLancesAndHeaders: 'Spray Lances & Headers',
          accessories: 'Accessories',
          brands: 'Brands'
        }
      },
      industries: {
        title: 'Industries',
        items: {
          industriesOverview: 'Industries Overview',
          automotive: 'Automotive',
          buildingMaterials: 'Building Materials',
          energy: 'Energy',
          foodAndBeverage: 'Food & Beverage',
          pharmaceuticalManufacturing: 'Pharmaceutical Manufacturing',
          steelAndMetals: 'Steel & Metals',
          pulpPaperAndTissue: 'Pulp, Paper & Tissue',
          chemicalProcessing: 'Chemical Processing',
          otherIndustries: 'Other Industries'
        }
      },
      applications: {
        title: 'Applications',
        items: {
          applicationOverview: 'Applications Overview',
          cleaningAndWashing: 'Cleaning & Washing',
          coolingSolids: 'Cooling Solids',
          chestCleaning: 'Chest Cleaning',
          gasCoolingAndConditioning: 'Gas Cooling & Conditioning',
          coating: 'Coating',
          dryingAndBlowOff: 'Drying & Blow-off',
          dustControl: 'Dust Control',
          fireProtection: 'Fire Protection',
          humidification: 'Humidification',
          lubrication: 'Lubrication',
          tankCleaning: 'Tank Cleaning',
          sprayDrying: 'Spray Drying',
          noxControl: 'NOx Control',
          sulfurBurning: 'Sulfur Burning'
        }
      },
      services: {
        title: 'Services',
        items: {
          servicesOverview: 'Services Overview',
          buySprayProducts: 'Buy Spray Products',
          requestADemo: 'Request a Demo',
          freeFacilityEvaluation: 'Free Facility Evaluation',
          sustainabilityAssessment: 'Sustainability Assessment',
          needHelpWithADesign: 'Need Help With a Design?',
          advancedTestingAndModeling: 'Advanced Testing & Modeling',
          servicesForOEMs: 'Services for OEMs & Engineering Firms',
          techSupport: 'Tech Support'
        }
      },
      resources: {
        title: 'Resources',
        items: {
          resourcesOverview: 'Resources Overview',
          catalogs: 'Catalogs',
          technicalLibrary: 'Technical Library',
          sprayWareCalculatorsAndTools: 'SprayWare Calculators & Tools',
          '3dCADModels': '3D CAD Models',
          sprayBasics: 'Spraying Basics',
          sprayPatterns: 'Spray Patterns',
          sprayOptimization: 'Spray Optimization',
          productSupport: 'Product Support'
        }
      },
      company: {
        title: 'Company',
        items: {
          about: 'About',
          sustainability: 'Sustainability',
          events: 'Events',
          careers: 'Careers',
          globalWebsites: 'Global Websites',
          regionalSprayTechnologyCenters: 'Regional Spray Technology Centers'
        }
      },
      contact: {
        title: 'Contact',
        items: {
          contactUs: 'Contact Us',
          findALocalRep: 'Find a Local Rep',
          subscribeToOurNewsletter: 'Subscribe to our Newsletter',
          manageSubscriptions: 'Manage Subscriptions'
        }
      },
      buildVersion: 'Build Version'
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
      bulkApplied: 'Quantity discount applied',
      bulkOnQuote: 'Quantity discount on quote'
    },
    quotedPrice: 'Quoted Price',
    addToCart: 'Add to cart',
    unitPriceSuffix: '/ each',
    priceBreakQuantityInfo:
      'Adding {quantityDisplay} {quantity, plural, one {item} other {items}} to your cart will bring you to a total of {projectedQuantityDisplay} {projectedQuantity, plural, one {item} other {items}.}'
  },
  recentlyViewed: {
    title: 'You recently viewed'
  },
  finder: {
    noResults:
      'No products were found matching your criteria. Try searching something else or apply different filters.',
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
        less: 'Less'
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
  signupFlow: {
    addInvoiceButton: 'Add another invoice number',
    backButton: 'Back',
    billingAddressTitle: 'Billing Address',
    companyDetailsConfirmationButton: 'Yes, link me to this company',
    companyDetailsDeclineButton: 'No, enter details manually',
    companyDetailsTitle: 'Company Details',
    companyNotFoundButton: 'My company is not in the list',
    completeSignupLater: 'Complete your sign up later?',
    completionDescription:
      'Thank you for completing your sign up. You will be notified by email once your information has been reviewed.',
    completionTitle: 'All done!',
    contactDetailsTitle: 'Contact Details',
    customerNumberDescription:
      "Your customer number can be found on the left side of any Spraying Systems Co. invoice. It's a 7-digit number shown as 'CUST NO'.",
    customerNumberTitle: 'Customer Number',
    existingCustomerTitle: 'Already with Spraying Systems Co.?',
    invoiceNumberDescription:
      "An invoice number can be found in the upper right hand corner of any Spraying Systems Co. invoice. It's a 7-character string shown as 'INVOICE NO' (Two letters followed by five digits).",
    invoiceNumberTitle: 'Invoice Number',
    loadingDetails: 'Checking for existing customer...',
    nextButton: 'Next',
    selectButton: 'Select',
    selectCompanyTitle: 'Please select your company',
    signOutButton: 'Sign out',
    startBrowsingButton: 'Get Started',
    startBrowsingTitle: 'You are all set to start browsing!',
    submittingDescription: 'We are setting things up for you...',
    submittingTitle: 'Please wait!',
    tooltipLabel: 'Where can I find this?',
    submittingErrorDescription:
      'Your request could not be completed. Please try again or contact customer support.',
    submittingErrorTitle: 'An error occurred!',
    customerNumberValidation:
      'A valid Customer Number is 7 digits long (e.g. 1234567)',
    invoiceNumberValidation:
      'A valid Invoice Number consists of 2 letters followed by 5 digits (e.g. AB12345)'
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
      title: `Search results for: ''{searchQuery}''`,
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
      imageDisclaimer:
        'Images are representative. Products may differ in material or configuration.',
      sections: {
        top: {
          notAvailableInYourRegion:
            'This product may not be available in your region. However, feel free to add it to your cart and our sales team will help you accordingly.',
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
      },
      errors: {
        searchError:
          'There was a problem retrieving the products you are looking for. Please try again later.'
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
            'Your local representative can help if you are not finding what you are looking for',
          localRepAction: 'Get in contact',
          onlineChatTitle: 'Online support',
          onlineChatDescription:
            'Want to speak with someone before you dive into our big product range?',
          onlineChatAction: 'Schedule a meeting'
        },
        hero: {
          imageAlt: 'Hero image',
          title: 'Find the Right {linebreak} Spray Nozzles',
          description: `Spraying Systems Co.'s digital catalog helps you find, compare and purchase the spray nozzles you need. Shop our full product range, including hydraulic nozzles, air atomizing nozzles, tank cleaning equipment and spray guns.`,
          callToAction: `Start browsing`,
          reorder: `Reorder now!`
        },
        signUp: {
          title: 'Sign in for the best experience',
          callToAction: 'Sign in',
          steps: {
            first: {
              title: 'New to SprayFinder?',
              description:
                "No problem! Create an account in a minute. Click 'Sign up now' on the Sign in page."
            },
            second: {
              title: 'Start shopping',
              description:
                'Browse our products and add the ones you need to your cart. Your cart is automatically linked to your customer account.'
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
          viewAllText: 'View all orders'
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
          addAddressButtonText: 'Add new address',
          updateAddressError:
            'There was a problem updating your address. Please try again.',
          createAddressError:
            'Your address could not be created at this time. Please try again.',
          noAddresses:
            'No addresses were found. Please add an address or refresh the page.',
          removeAddressError:
            'There was a problem removing your address. Please try again.',
          addAddressSuccess: 'Your address was successfully added.'
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
        subTotal: 'Subtotal',
        shippingCosts: 'Shipping costs',
        taxHeader: 'Tax',
        detailPageError: 'An error occurred while loading your order details.',
        commentsHeader: 'Comments',
        confirmationText:
          'Feel free to contact customer support if you have any questions. A customer service representative is standing by at 1-800-957-7729.',
        confirmationTitle:
          'Thank you! Your order has been submitted successfully.',
        overviewEmpty: 'You do not have any orders yet.',
        overviewError: 'An error occurred while loading your orders.'
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
          'Feel free to contact customer support if you have any questions. A customer service representative is standing by at 1-800-957-7729.',
        confirmationTitle: 'Thank you! Your quote request has been submitted.',
        detailsHeader: 'Contact and shipping information',
        addressHeader: 'Customer details',
        commentsHeader: 'Comments',
        detailPageError: 'An error occurred while loading your quote request.',
        overviewEmpty: 'You do not have any quote requests yet.',
        overviewError: 'An error occurred while loading your quote requests.'
      },
      quotes: {
        numberHeader: 'Quote number:',
        quoteDateHeader: 'Quote created on:',
        totalHeader: 'Total price:',
        viewQuote: 'View quote',
        detailsHeader: 'Contact and shipping information',
        viewAll: 'View all quotes',
        viewAllLines:
          '{number, plural,=0 {No additional products} one {Show 1 more product} other {Show {number} more products}}',
        customerInfoHeader: 'Customer details',
        detailPageError: 'An error occurred while loading your quote details.',
        overviewEmpty: 'You do not have any quotes yet.',
        overviewError: 'An error occurred while loading your quotes.'
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
          overviewLink: 'Return to overview page',
          sections: {
            measurementSettings: {
              description:
                'You can manage your measurement settings here. Toggle between metric and imperial units.',
              title: 'Measurement settings'
            },
            profileInformation: {
              title: 'Profile Information',
              description:
                'Change your login details or personal information, such as your phone number.',
              changePasswordLink: 'Change password',
              viewInfoLink: 'View personal information',
              successMessage:
                'Your profile information was successfully updated.',
              errorMessage: 'There was a problem updating your profile.',
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
                'Manage your addresses. Choose a default shipping and billing address that will be used throughout the website.',
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
          jobTitle: 'Job Title',
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
        fileUpload: 'Upload a PO document',
        purchaseOrderInfo:
          'All Pay by Invoice purchases are reviewed and subject to the status and credit available to the account. Uploading a document is not required, but it will help us process your order faster.',
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
          creditCardCVVInfo: `The verification code (also known as CVC/CVV) is a 3-digit code, located on the back of your credit card, at the end of the signature field.`,

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
          referenceNumber: 'Reference Number',
          referenceDocument: 'Upload PO document'
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
          'Feel free to contact customer support if you have any questions. A customer service representative is standing by at 1-800-957-7729.',
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
    },
    error: {
      title: '500 – Internal Server Error',
      headerLine1: 'Oops!',
      headerLine2: 'Something unexpected happened.'
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
