import { Messages } from './types';

/**
 * The Dutch translations
 */
export const nl: Messages = {
  navigation: {
    main: {
      title: 'Spray Finder',
      collapseLabel: 'navigation.main.collapseLabel',
      expandLabel: 'navigation.main.expandLabel'
    },
    site: {
      title: 'Spraying Systems Co.',
      collapseLabel: 'navigation.site.collapseLabel',
      expandLabel: 'navigation.site.expandLabel'
    },
    user: {
      title: 'Gebruiker',
      collapseLabel: 'navigation.user.collapseLabel',
      expandLabel: 'navigation.user.expandLabel',
      signIn: 'Inloggen',
      myProfile: 'Mijn Profiel'
    },
    searchBar: {
      placeholder: 'Zoek onderdeel nummer...'
    },
    desktopLogo: {
      imageAlt: 'Spraying Systems Bedrijf Website Logo'
    },
    mobileLogo: {
      imageAlt: 'Spraying Systems Bedrijf Website Logo'
    }
  },
  pages: {
    home: {
      headTitle: 'Experten in Sproeitechnologie | Spraying Systems Co.',
      headDescription: 'pages.home.headDescription',
      backgroundImageAlt: ''
    },
    model: {
      headTitle: '{name} | Spraying Systems Co.',
      headDescription: 'pages.model.headDescription'
    },
    category: {
      headTitle: '{name} | Spraying Systems Co.',
      headDescription: 'pages.category.headDescription'
    },
    series: {
      headTitle: '{name} | Spraying Systems Co.',
      headDescription: 'pages.series.headDescription'
    },
    docs: {
      i18n: {
        title: 'Internationalisatie',
        description: 'Documentatie rond i18n in het project'
      },
      testing: {
        title: 'Testen',
        description: 'Documentatie rond testen in het project'
      },
      userInterfaces: {
        title: 'Gebruikersinterfaces, Layout en Design',
        description:
          'Documentatie rond gebruikersinterfaces, layout en design in het project'
      },
      projectSetup: {
        title: 'Project Configuratie',
        description:
          'Documentatie rond project setup and configuraties in het project'
      }
    }
  },
  loading: {
    default: 'Aan het laden...',
    user: {
      signingIn: 'Inloggen...',
      signingOut: 'Afmelden...',
      redirecting: 'Even geduld...'
    }
  },
  steps: {
    actions: {
      proceed: 'Volgende stap',
      previous: 'Vorige stap'
    }
  }
};
