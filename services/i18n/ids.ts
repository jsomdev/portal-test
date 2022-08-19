import { Messages } from './';

/**
 * Messages Object used for referencing the ids of the messages when formatting.
 */
export const messageIds: Messages = {
  navigation: {
    main: {
      title: 'navigation.main.title',
      collapseLabel: 'navigation.main.collapseLabel',
      expandLabel: 'navigation.main.expandLabel'
    },
    site: {
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
    searchBar: {
      placeholder: 'navigation.site.searchBar'
    },
    menu: {
      close: 'navigation.menu.close',
      viewAllCategories: 'navigation.menu.viewAllCategories',
      viewAllCategory: 'navigation.menu.viewAllCategory'
    }
  },
  pages: {
    home: {
      headTitle: 'pages.home.headTitle',
      headDescription: 'pages.home.headDescription',
      backgroundImageAlt: 'pages.home.backgroundImageAlt'
    },
    model: {
      headTitle: 'pages.model.headTitle',
      headDescription: 'pages.model.headDescription'
    },
    category: {
      headTitle: 'pages.category.headTitle',
      headDescription: 'pages.category.headDescription'
    },
    series: {
      headTitle: 'pages.series.headTitle',
      headDescription: 'pages.series.headDescription'
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
  }
};
