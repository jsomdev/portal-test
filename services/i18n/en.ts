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
      expandLabel: 'navigation.site.expandLabel'
    },
    user: {
      title: 'My Account',
      collapseLabel: 'navigation.user.collapseLabel',
      expandLabel: 'navigation.user.expandLabel',
      signIn: 'Sign in',
      myProfile: 'My Profile'
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
      headDescription: '{name} | Spraying Systems Co.'
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
  }
};
