import { Messages } from './types';

/**
 * The Dutch translations
 */
export const nl: Messages = {
  navigation: {
    main: {
      title: 'Menu',
      collapseLabel: 'navigation.main.collapseLabel',
      expandLabel: 'navigation.main.expandLabel',
      cartAriaLabel: 'Winkelmandje',
      accessPadAriaLabel: 'Snel menu',
      userAriaLabel: 'Gebruikers Menu',
      viewAllCategories: 'Ga naar alle categorieën',
      viewAllCategory: 'Ga naar alle {category}'
    },
    site: {
      navigationAriaLabel: 'Navigatie menu',
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
    locale: {
      title: 'Geselecteerd land/regio'
    }
  },
  searchBar: {
    placeholder: 'Zoek onderdeel nummer...'
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
    default: {
      headTitle: '{title} | Spraying Systems Co.'
    },
    home: {
      headTitle: 'Experten in Sproeitechnologie',
      headDescription: 'pages.home.headDescription',
      sections: {
        signUp: {
          title: 'Meld u aan voor de beste koopervaring',
          callToAction: 'Creëer een account of log in',
          steps: {
            first: {
              title: 'Registreren',
              description:
                'Maak een account aan die gelinkt is aan uw bedrijf en voltooi vervolgens uw profiel'
            },
            second: {
              title: 'Start met uw aankopen',
              description:
                'Vergelijk producten en voeg de producten toe die u nodig heeft. Uw winkelmandje zal gelinkt zijn aan uw account'
            },
            third: {
              title: 'Bestel producten',
              description:
                'Reken af of verzoek een offerte. Ons team staat klaar om u te helpen!'
            }
          }
        },
        hero: {
          imageAlt: 'Hero afbeelding',
          title: 'Kies voor Kwaliteit',
          description:
            'Gepaard met een uitstekende klantendienst, De digitale catalogus van Spraying Systems Co. helpt u met het vinden, vergelijken en aankopen van producten dat uw bedrijf nodig heeft.',
          callToAction: 'Aan de slag'
        },
        catalog: {
          title: 'Onze Catalogus'
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
      headTitle: '{name}',
      headDescription: 'pages.model.headDescription'
    },
    category: {
      title: '{name}',
      titleWithSearch: '{searchQuery} in {name}'
    },
    series: {
      headTitle: '{name}',
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
    },
    account: {
      welcome: 'Welkom {name}',
      infoAndPreferences: 'Info & Voorkeuren',
      orders: 'Bestellingen',
      overview: 'Overzicht',
      quoteRequests: 'Prijs Offertes',
      signOut: 'Uitloggen',
      addressBook: 'Adresboek',
      companyInformation: 'Bedrijf Informatie',
      preferences: 'Voorkeuren',
      profileInformation: 'Profiel Informatie',
      accountPage: 'Mijn Account'
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
