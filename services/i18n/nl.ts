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
    account: {
      title: 'Gebruiker',
      collapseLabel: 'navigation.account.collapseLabel',
      expandLabel: 'navigation.account.expandLabel',
      signIn: 'Inloggen',
      myProfile: 'Mijn Profiel'
    },
    locale: {
      title: 'Geselecteerd land/regio'
    }
  },
  searchBar: {
    noResults: 'Er werden geen resultaten gevonden...',
    recentSearches: 'Recente zoekopdrachten',
    suggestedProducts: 'Voorgestelde producten',
    placeholder: 'Zoek onderdeel nummer...'
  },
  pricing: {
    error: 'Fout bij het ophalen van prijsinformatie',
    signInForDetails: 'Meld u aan voor prijsinformatie',
    quantityLabel: 'Aantal',
    priceLabel: 'Prijs',
    tooltips: {
      notAuthenticated:
        'Meld u aan of contacteer de sales verantwoordelijke om prijzen te weten.',
      quotedPrice:
        'U kan dit product toevoegen aan uw winkelwagen en een offerte aanvragen.'
    },
    stockInfo: {
      stockNotAvailable: 'Stock informatie is niet beschikbaar'
    },
    discounts: {
      bulkAvailable: 'Bulkkorting mogelijk',
      bulkApplied: 'Bulkkorting toegepast'
    },
    quotedPrice: 'Prijs op aanvraag',
    unitPriceSuffix: '/ per stuk',
    addToCart: 'Toevoegen'
  },
  finder: {
    compare: 'Vergelijk',
    seeComparison: 'Toon verschillen',
    filters: {
      clearAll: 'Wis alle filters',
      search: 'Zoekterm: {query}'
    },
    categoryFacet: {
      title: 'Categorie'
    },
    overview: {
      browseAll: 'Bekijk alle {category}'
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
        ariaCollapse: 'Dichtklappen',
        ariaExpand: 'Openvouwen',
        showResults:
          '{productCount, plural,=0 {Geen producten gevonden} one {Toon 1 product} other {Toon {productCount} producten}}'
      }
    },
    pagination: {
      next: 'Volgende',
      previous: 'Vorige'
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
  bookmarks: {
    actions: {
      bookmark: 'Bewaren'
    }
  },
  pages: {
    default: {
      headTitle: '{title} | Spraying Systems Co.'
    },
    search: {
      title: `Search results for: '{searchQuery}'`,
      headDescription: 'Experts in Spray Technology',
      headTitle: 'Search {searchQuery}'
    },
    product: {
      imageDisclaimer: 'pages.product.imageDisclaimer',
      sections: {
        top: {
          configurations: {
            title: 'Productconfiguratie'
          },
          display: {
            pdf: {
              loading: 'Document inladen...',
              error: 'Er is iets misgelopen',
              noData: 'Er is iets verdwenen',
              zoomIn: 'Zoom in',
              zoomOut: 'Zoom out',
              openNew: 'Open in nieuw tabblad',
              scaleToWidth: 'Schalen naar breedte',
              fitToWidth: 'Aanpassen aan breedte',
              fitToPage: 'Aanpassen aan pagina'
            }
          }
        },
        accessories: {
          title: 'Accessoires'
        },
        downloads: {
          title: 'Downloads',
          actions: {
            dataSheets: 'Datasheets',
            drawings2d: '2D Tekeningen',
            drawings3d: '3D Tekeningen'
          },
          documentsTitle: 'Documenten',
          downloadError:
            'Er liep een fout op tijdens het downloaden van het bestand',
          otherTitle: 'Andere'
        },
        performance: {
          title: 'Performantie',
          multiChart: {
            seriesLabel: 'voor {value} ({type})'
          }
        },
        alternativeModels: {
          title: 'Alternatieve Modellen'
        },
        generalInformation: {
          title: 'Algemene informatie',
          flowTitle: 'Flow',
          descriptionTitle: 'Omschrijving',
          keySpecificationsDescription:
            'De belangrijkste gegevens van het product',
          keySpecificationsTitle: 'Belangrijkste kenmerken'
        },
        specifications: {
          title: 'Alle kenmerken',
          actions: {
            openLink: 'Open link ({index})'
          }
        }
      }
    },
    home: {
      headTitle: 'Experten in Sproeitechnologie',
      headDescription: 'pages.home.headDescription',
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
        signUp: {
          title: 'Meld u aan voor de beste koopervaring',
          callToAction: 'Aanmelden',
          steps: {
            first: {
              title: 'Nieuwe gebruiker?',
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
          title: 'Onze Catalogus',
          items: {
            viewAll: 'Alle bekijken'
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
      headTitle: '{name}',
      browseAll: "Doorblader alle '{number}' producten",
      headDescription: 'pages.model.headDescription'
    },
    category: {
      title: '{name}',
      titleWithoutSearchOrCategory: 'Blader door alle producten',
      titleWithOnlySearch: `Zoekresultaten voor: ''{searchQuery}''`,
      titleWithSearchAndCategory: "''{searchQuery}'' in {name}"
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
      signOut: 'Afmelden',
      signInPrompt: 'Log in om uw accountpagina te bekijken',
      overview: {
        title: 'Account Overzicht',
        subTitle:
          'Hier vindt u alle informatie die relevant is voor uw account',
        link: 'Mijn Account',
        welcome: 'Welkom {name}',
        orders: {
          title: 'Recente Bestellingen',
          viewAllText: 'Bekijk alle eerdere bestellingen'
        },
        profileInformation: {
          title: 'Profiel Informatie',
          nameHeader: 'Dit ben jij:',
          jobHeader: 'Job titel:',
          phoneHeader: 'Telefoonnummer:',
          emailHeader: 'Email adres:'
        },
        companyInformation: {
          companyHeader: 'Dit is u bedrijf:',
          customerHeader: 'Klantnummer:',
          paymentHeader: 'Betaal methode:'
        },
        account: {
          status: {
            manager: 'Manager',
            admin: 'Beheerder',
            employee: 'Medewerker',
            customer: 'Klant',
            verified: 'Geverifieerd'
          }
        },
        addressBook: {
          title: 'Adresboek',
          shippingAddress: 'Verzend adres',
          billingAddress: 'Factuur adres',
          viewAllText: 'Bekijk alle adressen',
          setAsDefaultBilling: 'Stel in als factuur adres',
          setAsDefaultShipping: 'Stel in als verzend adres',
          editAddress: 'Bewerk adres',
          deleteConfirmation: 'Bent u zeker dat u dit adres wilt verwijderen?',
          deleteButtonText: 'Verwijder',
          cancelButtonText: 'Annuleer',
          addAddressButtonText: 'Voeg een adres toe'
        }
      },
      quotes: {
        numberHeader: 'Offertenummer:',
        quoteDateHeader: 'Offerte aangemaakt op:',
        totalHeader: 'Totaalprijs:',
        viewQuote: 'Bekijk offerte'
      },
      orders: {
        statusHeader: 'Status:',
        orderDateHeader: 'Besteld op:',
        totalHeader: 'Totaal prijs:',
        viewOrder: 'Bekijk bestelling',
        numberHeader: 'Bestelling nummer:',
        commentsHeader: 'Opmerkingen:',
        reorderAll: 'Bestel alle producten opnieuw',
        reorderSingle: 'Product opnieuw bestellen',
        viewAllLines:
          '{number, plural,=0 {Geen aanvullende producten} one {Toon 1 product meer} other {Toon {number} meer producten}}',
        detailsHeader: 'Adres- en betalingsgegevens',
        shippingAddressHeader: 'Bezorgadres',
        billingAddressHeader: 'Factuuradres',
        overviewHeader: 'Overzicht',
        shippingMethodHeader: 'Verzendmethode',
        paymentMethodHeader: 'Betalingswijze',
        totalProducts: 'Totaal producten',
        shippingCosts: 'Verzendkosten',
        taxHeader: 'VAT',
        confirmationTitle: 'Bedankt! Uw bestelling is succesvol ingediend.',
        confirmationText:
          'Voel je vrij om contact op te nemen met de klantenservice als je vragen hebt. Een klantenservice medewerker staat klaar om u te helpen op 0800-9577729.'
      },
      quoteRequests: {
        requestDateHeader: 'Aangevraagd op:',
        viewQuoteRequest: 'Bekijk offerteaanvraag'
      },
      sections: {
        orders: {
          title: 'Bestellingen'
        },
        order: {
          title: 'Bestelling'
        },
        quotes: {
          title: 'Offertes'
        },
        quote: {
          title: 'Offerte'
        },
        quoteRequest: {
          title: 'Offerte aanvrag'
        },
        quoteRequests: {
          title: 'Offerteaanvragen'
        },
        infoAndPreferences: {
          title: 'Info & Voorkeuren',
          sections: {
            profileInformation: {
              title: 'Profiel Informatie',
              description:
                'Wijzig uw inloggegevens of persoonlijke gegevens, zoals uw telefoonnummer.',
              viewInfoLink: 'Persoonlijke info bekijken',
              changePasswordLink: 'Verander wachtwoord',
              panel: {
                title: 'Profiel Informatie',
                ariaClose: 'Sluiten',
                cancel: 'Annuleer',
                save: 'Opslaan'
              }
            },
            addressBook: {
              title: 'Adresboek',
              description:
                'Op deze pagina kunt u adressen toevoegen en wijzigen. Bij het bestellen kunt u snel het juiste adres selecteren.',
              viewAddressBookLink: 'Adresboek bekijken',
              panel: {
                title: 'Adresboek',
                ariaClose: 'Sluiten',
                cancel: 'Annuleer',
                save: 'Opslaan'
              },
              formFields: {
                name: {
                  label: 'Naam'
                },
                country: {
                  label: 'Land',
                  placeholder: 'Selecteer een land'
                },
                address: {
                  label: 'Adres'
                },
                city: {
                  label: 'Stad'
                },
                region: {
                  label: {
                    us: 'Staat',
                    ca: 'Provincie',
                    default: 'Regio'
                  },
                  placeholder: {
                    us: 'Selecteer een staat',
                    ca: 'Selecteer een provincie',
                    default: 'Regio'
                  },
                  required: {
                    us: 'Staat is verplicht',
                    ca: 'Provincie is verplicht',
                    default: 'Regio is verplicht'
                  }
                },
                postalCode: {
                  label: 'Postcode'
                },
                setAsBilling: {
                  label: 'Stel in als factuuradres'
                },
                setAsShipping: {
                  label: 'Stel in als bezorgadres'
                }
              }
            },
            companyInformation: {
              title: 'Bedrijf Informatie',
              description:
                'Wijzig uw bedrijfsgegevens, factuuradres en verifieer uw account.'
            },
            preferences: {
              title: 'Voorkeuren',
              description:
                'Zoek en beheer uw voorkeuren. Kies uw applicatie-instellingen en privacy-instellingen.',
              privacySettingsLink: 'Privacy instellingen',
              settingsLink: 'Meetinstellingen'
            }
          }
        }
      }
    },

    cart: {
      title: 'Winkelwagen',
      loading: 'Winkelwagen laden...',
      merge: {
        message:
          'U heeft producten aan uw winkelwagen toegevoegd terwijl u was uitgelogd. Wil je dat we ze aan je winkelwagen toevoegen?',
        viewProducts: 'Bekijk producten'
      },
      addBulkCard: {
        title: 'Voeg meerdere producten tegelijk toe',
        description:
          'Voer de product code en het aantal producten in dat u aan uw winkelwagentje wilt toevoegen',
        quantityPrefix: 'Aantal',
        entryButton: 'Item toevoegen',
        resetButton: 'Reset',
        addToCartButton: 'Toevoegen aan winkelwagen',
        addToCartButtonInProgress: 'Toevoegen...',
        productNumberPlaceholder: 'Product code',
        bulkAllCompleteMessage:
          'Alle producten zijn toegevoegd aan de winkelwagen',
        bulkPartialCompleteMessage:
          'Sommige producten zijn aan de winkelwagen toegevoegd: {productNumbers}.',
        bulkFailMessage:
          'De volgende producten konden niet aan de winkelwagen worden toegevoegd: {productNumbers}',
        warningDialogTitle: 'Sommige items zijn niet toegevoegd'
      },
      productsAddedWhileLoggedOutDialog: {
        title: 'Producten die werden toegevoegd terwijl je was uitgelogd',
        loading: 'Producten laden...'
      },
      actions: {
        continue: 'Doorgaan met winkelen',
        clear: 'Winkelwagen leegmaken'
      },
      summary: {
        header: 'Samenvatting',
        numberOfProducts: 'Aantal producten',
        numberOfItems: 'Aantal stuks',
        subtotal: 'Subtotaal',
        actions: {
          continue: 'Doorgaan',
          request: 'Offerte aanvragen',
          proceed: 'Naar de kassa',
          signIn: 'Log in om door te gaan',
          quotedPriceWarning:
            'Uw winkelwagen bevat artikelen met prijzen op aanvraag.',
          completeProfile: 'Voltooi je profiel voor prijsdetails.',
          quotedPriceWarningTooltip:
            'Artikelen met een prijs op aanvraag worden uitgesloten van het afrekenproces wanneer u doorgaat met het plaatsen van uw bestelling. Ze blijven in uw winkelwagen voor toekomstig gebruik totdat u ze opstuurt voor een offerte.'
        }
      },
      list: {
        emptyCart: 'Uw winkelwagen is leeg',
        loading: 'Productinformatie laden...',
        cartError: 'Er is een fout opgetreden bij het laden van uw winkelwagen'
      },
      addedToCart: 'Toegevoegd aan winkelwagen',
      limitReached: `Uw winkelwagen heeft de limiet voor Product ''{productNumber}'' bereikt. Er {quantityAdded, plural, one {is 1 artikel} other {zijn {quantityAdded} artikels}} aan uw winkelwagen toegevoegd.`,
      goToCart: 'Ga naar winkelwagen',
      continueShopping: 'Doorgaan met winkelen'
    },
    checkout: {
      title: 'Bestellen',
      orderSuccess: 'Je bestelling is aangemaakt. Omleiden...',
      creatingOrder: 'Uw bestelling maken......',
      loadingCart: 'Laden van winkelwagen...',
      loadingCartFailed: 'Het laden van je winkelwagen is mislukt!',
      loadingProductInfo: 'Laden van productinformatie...',
      loadingProductInfoFailed: 'Laden van productinformatie mislukt!',
      noItems:
        'Er zijn geen artikelen gevonden in uw winkelwagen met beschikbare prijzen.',
      noItemsLink:
        'Ga terug naar de winkelwagenpagina en vraag een offerte aan.',
      needsSignIn:
        'U moet ingelogd zijn om uw winkelwagen af te rekenen. Gelieve {signInText}',
      signInText: 'hier inloggen.',
      unauthorized: 'U bent niet bevoegd om deze pagina te bekijken.',
      steps: {
        details: 'Details',
        shippingMethod: 'Levering',
        paymentDetails: 'Betaling',
        overview: 'Overzicht'
      },
      actions: {
        nextButton: 'Doorgaan',
        backButton: 'Vorige stap',
        submitButton: 'Bevestigen',
        completePayment: 'Bevestigen en betalen',
        completePurchaseOrder: 'Bevestigen en plaatsen'
      },
      details: {
        generalTitle: 'Algemene informatie',
        shippingContactTitle: 'Contact Informatie',
        shippingAddressTitle: 'Leveringsadres',
        fields: {
          email: 'E-mail',
          emailPlaceholder: 'example@domain.com',
          firstName: 'Voornaam',
          name: 'Familienaam',
          company: 'Bedrijf',
          companyPlaceholder: 'Bedrijfsnaam',
          country: 'Land',
          countryPlaceholder: 'Selecteer een land',
          address: 'Adres',
          addressPlaceholder: 'Straatnaam en huisnummer',
          city: 'Gemeente',
          state: 'Provincie',
          statePlaceholder: {
            default: 'Staat / Regio / Provincie',
            BE: 'Provincie',
            US: 'Selecteer een staat',
            CA: 'Selecteer een provincie'
          },
          postalCode: 'Postcode',
          phone: 'Telefoonnummer'
        }
      },
      shippingMethods: {
        shippingMethodLabel: 'Levering',
        loadingShippingMethods: 'Leveringsmethoden laden...'
      },
      payment: {
        billingContact: 'Facturatie contact',
        billingAddress: 'Facturatie adres',
        creditCard: 'Kredietkaart',
        purchaseOrder: 'Bestelbon',
        purchaseOrderInfo:
          'Alle aankopen via factuur worden beoordeeld en zijn afhankelijk van de status en het beschikbare krediet op de rekening.',
        fields: {
          paymentMethod: 'Betaalmethode',
          shippingAddressAsBillingAddress:
            'Verzendingadres als factureringadres',
          shippingContactAsBillingContact:
            'Verzendcontact als factureringscontact',
          billingAddressChoice: {
            sameAsShipping: 'Zelfde als leveringsadres',
            differentFromShipping: 'Gebruik een ander facturatieadres'
          },
          billingContactChoice: {
            sameAsShipping: 'Zelfde als leveringscontact',
            differentFromShipping: 'Gebruik een ander facturatiecontact'
          },
          creditCardNumber: 'Kaartnummer',
          creditCardNumberInvalidFormatError: 'Ongeldig kaartnummer',

          creditCardName: 'Naam op kaart',
          creditCardNameInvalidFormatError:
            'Gelieve een geldige naam in te voeren',
          creditCardExpiration: 'Geldig tot',
          creditCardExpirationPlaceholder: 'MM/JJ',
          creditCardExpirationInvalidError: 'Vervaldatum ongeldig',
          creditCardCVV: 'CVV / CVC Code',

          billingFirstName: 'Voornaam',
          billingLastName: 'Familienaam',
          billingCompany: 'Bedrijfsnaam',
          billingCompanyPlaceholder: 'Bedrijfsnaam',
          billingPhone: 'Telefoonnummer',

          billingAddress: 'Adres',
          billingCity: 'Gemeente',
          billingState: 'Provincie',
          billingCountry: 'Land',
          billingPostalCode: 'Postcode',
          referenceNumber: 'Referentienummer'
        }
      },
      summary: {
        details: 'Details',
        subTotal: 'Subtotaal',
        shippingCost: 'Leveringskosten',
        total: 'Totale bestelling',
        tax: 'BTW'
      },
      overview: {
        reviewTitle: 'Controleer uw bestelling',
        termsAndConditions: 'Algemene voorwaarden en condities',
        privacyPolicy: 'Privacybeleid',
        editGroup: 'Wijzigen',
        totalCost: 'Je betaalt',
        invoiceAmount: 'Factuurbedrag',
        fields: {
          acceptedTerms:
            'Ik ga akkoord met de {termsAndConditions} en het {privacyPolicy}.',
          acceptedTermsRequired: 'U moet akkoord gaan met de voorwaarden.',
          additionalInformation: 'Aanvullende informatie',
          additionalInformationPlaceholder:
            'Voeg eventuele aanvullende opmerkingen, verzoeken of opmerkingen toe'
        }
      },
      discounts: {
        apply: 'Toepassen',
        discountCode: 'Kortingscode'
      },
      usps: {
        qualityServices: 'Kwaliteits-diensten',
        secureTransactions: 'Veilige transacties',
        expertSupport: 'Deskundige ondersteuning'
      },
      formErrors: {
        vatError: 'Fout bij laden van BTW tarief',
        noShippingOptions:
          'Geen leveringsopties gevonden. Controleer of je leveringsadres correct is.',
        retryButton: 'Opnieuw proberen',
        editAddress: 'Wijzigen'
      },
      errors: {
        chatWithUs: 'Chat met ons',
        mailTo:
          'mailto:webteam@spray.com?subject=Ik kon geen resultaten vinden voor...',
        send: 'Stuur ons uw feedback',
        subText:
          'Neem gerust contact op met de klantenservice als je vragen hebt. Een medewerker van de klantenservice staat klaar op 1-800-9577729.',
        default: {
          title:
            'Er gebeurde iets onverwachts! Neem contact op met de klantenservice.'
        },
        cardDeclined: {
          title: 'Je credit card is niet geaccepteerd.'
        },
        cardInfoIncorrect: {
          title: 'Uw creditcardgegevens zijn onjuist.'
        },
        cartHasNoPricedItems: {
          title: 'Uw winkelwagen bevat geen artikelen met beschikbare prijzen.',
          description: 'Ververs de pagina om de huidige prijzen te laden.'
        },
        cartIsEmpty: {
          title: 'Uw winkelwagen is leeg.',
          description: 'Ververs de pagina om uw winkelwagen opnieuw te laden.'
        },
        contentTypeHeaderMissing: {
          title:
            'Er is een onverwachte fout opgetreden bij het plaatsen van uw bestelling.',
          description: 'De content type header ontbreekt.'
        },
        givenAmountAndCalculatedAmountDoNotMatch: {
          title: 'Er is een prijsverschil opgetreden.',
          description:
            'De door de winkelwagen berekende prijs komt niet overeen met het verwachte bedrag.'
        },
        invalidPaymentMethod: {
          title:
            'De geselecteerde betaalmethode is ongeldig voor deze account.',
          description:
            'Bestellingen waarvan de betaalmethode is ingesteld op inkooporder hebben een referentienummer nodig.'
        },
        userDoesNotHaveAccount: {
          title: 'U bent momenteel niet ingelogd of uw sessie is verlopen.',
          description:
            'Laad de pagina opnieuw en log opnieuw in met uw gebruikersaccount.'
        },
        todo: {
          title: 'Er is een onverwachte fout opgetreden.',
          description:
            'Controleer of uw creditcardgegevens correct zijn ingevoerd.'
        }
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
    resourceType: {
      caseStudy: 'Case Study',
      catalog: 'Catalogus',
      catalogDetail: ' Catalogus Detail',
      default: 'Download',
      flowImage: 'Flow Afbeelding',
      image: 'Afbeelding',
      interactiveModel: 'Interactief Model',
      productBulletin: 'Productbulletin',
      technicalManual: 'Technische handleiding',
      video: 'Video',
      whitePaper: 'Whitepaper'
    },
    boolean: {
      true: 'Ja',
      false: 'Nee'
    },
    systemOfMeasurement: {
      metric: 'Metrische',
      us: 'US',
      controls: {
        units: '{system} eenheden'
      }
    },
    orders: {
      status: {
        canceled: 'Geannuleerd',
        inProcess: 'Wordt verwerkt',
        new: 'Nieuw',
        shipped: 'Verzonden'
      }
    },
    payments: {
      creditCard: 'Kredietkaart',
      purchaseOrder: 'Bestelling'
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
      required: '{label} is verplicht'
    },
    string: {
      email: 'Gelieve een geldig e-mail adres in te vullen',
      matches: '{label} is niet in een geldig formaat',
      min: '{label} moet minstens {min} tekens bevatten',
      max: '{label} mag maximaal {max} tekens bevatten'
    }
  }
};
