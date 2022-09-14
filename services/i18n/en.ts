import { Messages } from './types';

/**
 * The English translations
 */
export const en: Messages = {
  navigation: {
    main: {
      title: 'Categories',
      collapseLabel: 'navigation.main.collapseLabel',
      expandLabel: 'navigation.main.expandLabel'
    },
    site: {
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
    searchBar: {
      placeholder: 'Search by part number...'
    },
    menu: {
      close: 'Menu',
      viewAllCategories: 'Go to all categories',
      viewAllCategory: 'Go to all'
    }
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
    home: {
      headTitle: 'Welcome',
      backgroundImageAlt: '',
      headDescription: 'Experts in Spray Technology | Spraying Systems Co.'
    },
    model: {
      headTitle: 'Model',
      headDescription: '{name} | Spraying Systems Co.'
    },
    category: {
      headTitle: 'Category',
      headDescription: '{name} | Spraying Systems Co.',
      title: '{name}',
      titleWithSearch: '{searchQuery} in {name}'
    },
    series: {
      headTitle: 'Series',
      headDescription: '{name} | Spraying Systems Co.'
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
