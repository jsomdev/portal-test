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
    user: {
      title: 'My Account',
      collapseLabel: 'navigation.user.collapseLabel',
      expandLabel: 'navigation.user.expandLabel',
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
  finder: {
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
        '{productCount, plural,=0 {No products found} one {Found 1 product} other {Found {productCount} products accross {modelCount, plural,=0 {0 models} one {1 model} other {{modelCount} models}}}}',
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
          title: 'Sign up for the best shopping experience',
          callToAction: 'Create your account now',
          steps: {
            first: {
              title: 'Register',
              description:
                'Create an account linked to your company and complete your contact details'
            },
            second: {
              title: 'Start shopping',
              description:
                'Compare products and add the ones you need to your cart. Your cart will be linked to your customer account'
            },
            third: {
              title: 'Order products',
              description:
                'Checkout your cart or send us a quote request. Our team is ready to help you!'
            }
          }
        },
        catalog: {
          title: 'Browse our Catalog'
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
      infoAndPreferences: 'Info & Preferences',
      orders: 'Orders',
      overview: 'Account Overview',
      quoteRequests: 'Quote Requests',
      signOut: 'Sign Out',
      addressBook: 'Address Book',
      companyInformation: 'Company Information',
      preferences: 'Preferences',
      profileInformation: 'Profile Information',
      welcome: 'Welcome {name}',
      accountPage: 'My Account'
    },
    cart: {
      title: 'Cart',
      loading: 'Loading cart...',
      merge: {
        message:
          'You have added products to your cart while you were logged out. Do you want us to add them to your cart? ',
        answerYes: 'Yes',
        answerNo: 'No',
        viewProducts: 'View products'
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
    }
  }
};
