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
      expandLabel: 'navigation.site.expandLabel',
      logoAlt: 'Spraying Systems Company Logo'
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
    menu: {
      close: 'Menu',
      viewAllCategories: 'Bekijk alle categorieën',
      viewAllCategory: 'Bekijk alle'
    }
  },
  finder: {
    filters: {
      clearAll: 'Wis alle filters',
      search: 'Zoekterm: {query}'
    },
    categoryFacet: {
      title: 'Categorie'
    },
    operatingConditions: {
      validation: {
        title: 'Foute ingave',
        greaterThanZero: 'Waarde moet groter zijn dan 0',
        requiredFlowRate: 'Liquid Flow Rate is verplicht',
        requiredFlowRatePressure: 'Als je Liquid Pressure invult',
        requiredFlowRateGravity: 'Als je Specific Gravity verandert'
      },
      actions: {
        apply: 'Toepassen'
      },
      liquidType: {
        customValue: {
          title: 'Vul een waarde in',
          placeholder: 'Aangepast ({minimum} tot {maximum})',
          suffix: 'sg'
        }
      }
    },
    resultsHeader: {
      count:
        '{productCount, plural,=0 {Geen resultaten gevonden} one {1 product gevonden} other {{productCount} producten gevonden in {modelCount, plural,=0 {0 modellen} one {1 model} other {{modelCount} modellen}}}}',

      actions: {
        filter:
          '{productCount, plural,=0 {Geen resultaten om te filteren} one {Filter 1 product} other {Filter {productCount} producten}}'
      }
    },
    panel: {
      mobile: {
        title: 'Filters',
        ariaClose: 'Sluiten',
        showResults:
          '{productCount, plural,=0 {Geen producten gevonden} one {Toon 1 product} other {Toon {productCount} producten}}'
      }
    },
    checkboxFacet: {
      actions: {
        more: 'Meer',
        less: 'Minder'
      },
      panel: {
        placeholder: 'Zoeken'
      }
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
      headDescription: 'pages.category.headDescription',
      title: '{name}',
      titleWithSearch: '{searchQuery} in {name}'
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
  },
  data: {
    boolean: {
      true: 'Ja',
      false: 'Nee'
    }
  }
};
