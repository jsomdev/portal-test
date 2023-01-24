import { messageIds } from '@services/i18n';

export type FooterDataColumnItem = {
  labelMessageId: string;
  links: { [locale: string]: string };
};

export type FooterDataColumn = {
  titleMessageId: string | null;
  items: FooterDataColumnItem[];
};

export type FooterData = {
  siteLinks: FooterDataColumn;
  productCategories: FooterDataColumn;
  industries: FooterDataColumn;
  applications: FooterDataColumn;
  services: FooterDataColumn;
  resources: FooterDataColumn;
  company: FooterDataColumn;
  contact: FooterDataColumn;
};

export const footerData: FooterData = {
  siteLinks: {
    titleMessageId: null,
    items: [
      {
        labelMessageId: messageIds.navigation.footer.siteLinks.items.siteMap, //TODO i18n
        links: {
          'fr-ch': 'https://www.spray.com/fr-ch/legal/site-map',
          'de-at': 'https://www.spray.com/de-at/legal/site-map',
          'de-de': 'https://www.spray.com/de-de/legal/site-map',
          'el-gr': 'https://www.spray.com/el-gr/legal/site-map',
          'ko-kr': 'https://www.spray.com/ko-kr/legal/site-map',
          'ru-kz': 'https://www.spray.com/ru-kz/юридический/site-map',
          'ru-ru': 'https://www.spray.com/ru-ru/юридический/site-map',
          'es-co': 'https://www.spray.com/es-co/legal/site-map',
          'bg-bg': 'https://www.spray.com/bg-bg/legal/карта-на-сайта',
          'en-za': 'https://www.spray.com/en-za/legal/site-map',
          'sl-si':
            'https://www.spray.com/sl-si/legal/zemljevid-spletnega-mesta',
          'cs-cz': 'https://www.spray.com/cs-cz/legal/site-map',
          'nl-nl': 'https://www.spray.com/nl-nl/legal/site-map',
          'en-ae': 'https://www.spray.com/en-ae/legal/site-map',
          'en-au': 'https://www.spray.com/en-au/legal/site-map',
          'en-ca': 'https://www.spray.com/en-ca/legal/site-map',
          'pl-pl': 'https://www.spray.com/pl-pl/legal/site-map',
          'ro-ro': 'https://www.spray.com/ro-ro/legal/site-map',
          'es-ar': 'https://www.spray.com/es-ar/legal/site-map',
          'es-cl': 'https://www.spray.com/es-cl/legal/site-map',
          'es-ec': 'https://www.spray.com/es-ec/legal/site-map',
          'es-mx': 'https://www.spray.com/es-mx/legal/site-map',
          'tr-tr': 'https://www.spray.com/tr-tr/legal/site-map',
          'en-be': 'https://www.spray.com/en-be/legal/site-map',
          'en-my': 'https://www.spray.com/en-my/legal/site-map',
          'en-at': 'https://www.spray.com/en-at/legal/site-map',
          'hu-hu': 'https://www.spray.com/hu-hu/jogi/oldaltérkép',
          'es-pe': 'https://www.spray.com/es-pe/legal/site-map',
          'es-es': 'https://www.spray.com/es-es/legal/site-map',
          'zh-cn': 'https://www.spray.com/zh-cn/法律/site-map',
          'de-be': 'https://www.spray.com/de-be/legal/site-map',
          'nl-be': 'https://www.spray.com/nl-be/legal/site-map',
          'en-nz': 'https://www.spray.com/en-nz/legal/site-map',
          'fi-fi': 'https://www.spray.com/fi-fi/legal/site-map',
          'fr-ca': 'https://www.spray.com/fr-ca/legal/plan-du-site',
          'fr-fr': 'https://www.spray.com/fr-fr/legal/site-map',
          'en-id': 'https://www.spray.com/en-id/legal/site-map',
          'en-ch': 'https://www.spray.com/en-ch/legal/site-map',
          'en-cz': 'https://www.spray.com/en-cz/legal/site-map',
          'de-ch': 'https://www.spray.com/de-ch/legal/site-map',
          'en-sg': 'https://www.spray.com/en-sg/legal/site-map',
          'et-ee': 'https://www.spray.com/et-ee/legal/saidi-kaart',
          'sk-sk': 'https://www.spray.com/sk-sk/legal/mapa-stránok',
          'lt-lt': 'https://www.spray.com/lt-lt/legal/svetainės-žemėlapis',
          'lv-lv': 'https://www.spray.com/lv-lv/legal/vietnes-karte',
          'en-ma': 'https://www.spray.com/en-ma/legal/site-map',
          'en-cd': 'https://www.spray.com/en-cd/legal/site-map',
          'en-sk': 'https://www.spray.com/en-sk/legal/site-map',
          'fr-sn': 'https://www.spray.com/fr-sn/legal/site-map',
          'en-tn': 'https://www.spray.com/en-tn/legal/site-map',
          'en-zm': 'https://www.spray.com/en-zm/legal/site-map',
          'en-lt': 'https://www.spray.com/en-lt/legal/site-map',
          'fr-ci': 'https://www.spray.com/fr-ci/legal/site-map',
          'en-bh': 'https://www.spray.com/en-bh/legal/site-map',
          'fr-cm': 'https://www.spray.com/fr-cm/legal/site-map',
          'en-mg': 'https://www.spray.com/en-mg/legal/site-map',
          'en-sa': 'https://www.spray.com/en-sa/legal/site-map',
          'fr-dz': 'https://www.spray.com/fr-dz/legal/site-map',
          'en-ci': 'https://www.spray.com/en-ci/legal/site-map',
          'en-ng': 'https://www.spray.com/en-ng/legal/site-map',
          'fr-ma': 'https://www.spray.com/fr-ma/legal/site-map',
          'en-cm': 'https://www.spray.com/en-cm/legal/site-map',
          'fr-mg': 'https://www.spray.com/fr-mg/legal/site-map',
          'en-iq': 'https://www.spray.com/en-iq/legal/site-map',
          'en-sn': 'https://www.spray.com/en-sn/legal/site-map',
          'fr-tn': 'https://www.spray.com/fr-tn/legal/site-map',
          'en-dz': 'https://www.spray.com/en-dz/legal/site-map',
          'en-jo': 'https://www.spray.com/en-jo/legal/site-map',
          'en-eg': 'https://www.spray.com/en-eg/legal/site-map',
          'en-ke': 'https://www.spray.com/en-ke/legal/site-map',
          'en-om': 'https://www.spray.com/en-om/legal/site-map',
          'en-kw': 'https://www.spray.com/en-kw/legal/site-map',
          'fr-cd': 'https://www.spray.com/fr-cd/legal/site-map',
          'en-lb': 'https://www.spray.com/en-lb/legal/site-map',
          'en-pk': 'https://www.spray.com/en-pk/legal/site-map',
          'en-lv': 'https://www.spray.com/en-lv/legal/site-map',
          'en-qa': 'https://www.spray.com/en-qa/legal/site-map',
          'it-ch': 'https://www.spray.com/it-ch/legal/site-map',
          'en-in': 'https://www.spray.com/en-in/legal/site-map',
          'fr-be': 'https://www.spray.com/fr-be/legal/site-map',
          'nb-no': 'https://www.spray.com/nb-no/legal/site-map',
          'it-it': 'https://www.spray.com/it-it/legal/site-map',
          'sv-se': 'https://www.spray.com/sv-se/legal/webbkarta',
          'en-es': 'https://www.spray.com/en-es/legal/site-map',
          'en-hu': 'https://www.spray.com/en-hu/legal/site-map',
          'en-it': 'https://www.spray.com/en-it/legal/site-map',
          'en-nl': 'https://www.spray.com/en-nl/legal/site-map',
          'en-no': 'https://www.spray.com/en-no/legal/site-map',
          'en-pl': 'https://www.spray.com/en-pl/legal/site-map',
          'en-ro': 'https://www.spray.com/en-ro/legal/site-map',
          'en-se': 'https://www.spray.com/en-se/legal/site-map',
          'en-tr': 'https://www.spray.com/en-tr/legal/site-map',
          'en-de': 'https://www.spray.com/en-de/legal/site-map',
          'en-fi': 'https://www.spray.com/en-fi/legal/site-map',
          'en-fr': 'https://www.spray.com/en-fr/legal/site-map',
          'en-gb': 'https://www.spray.com/en-gb/legal/site-map',
          'en-gr': 'https://www.spray.com/en-gr/legal/site-map',
          'en-vn': 'https://www.spray.com/en-vn/legal/site-map',
          'en-hk': 'https://www.spray.com/en-hk/legal/site-map',
          'en-ph': 'https://www.spray.com/en-ph/legal/site-map',
          en: 'https://www.spray.com/legal/site-map',
          'x-default': 'https://www.spray.com/legal/site-map'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.siteLinks.items.legalInformation,
        links: {
          'x-default': 'https://www.spray.com/legal/legal-information',
          'ko-kr': 'https://www.spray.com/ko-kr/legal/legal-information',
          'zh-cn': 'https://www.spray.com/zh-cn/法律/legal-information',
          'ru-ru':
            'https://www.spray.com/ru-ru/юридический/юридическая-информация',
          'ja-jp': 'https://www.spray.co.jp/contact/legal.aspx',
          'ru-ua': 'https://www.spray.com.ua/contact/legal.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/legal/legal-information',
          'fr-ch': 'https://www.spray.com/fr-ch/legal/legal-information',
          'de-at': 'https://www.spray.com/de-at/legal/legal-information',
          'de-de': 'https://www.spray.com/de-de/legal/legal-information',
          'el-gr': 'https://www.spray.com/el-gr/legal/legal-information',
          'ru-kz':
            'https://www.spray.com/ru-kz/юридический/юридическая-информация',
          'es-co': 'https://www.spray.com/es-co/legal/información-legal',
          'bg-bg': 'https://www.spray.com/bg-bg/legal/правна-информация',
          'en-za': 'https://www.spray.com/en-za/legal/legal-information',
          'sl-si': 'https://www.spray.com/sl-si/legal/pravne-informacije',
          'cs-cz': 'https://www.spray.com/cs-cz/legal/legal-information',
          'nl-nl': 'https://www.spray.com/nl-nl/legal/legal-information',
          'en-ae': 'https://www.spray.com/en-ae/legal/legal-information',
          'en-au': 'https://www.spray.com/en-au/legal/legal-information',
          'en-ca': 'https://www.spray.com/en-ca/legal/legal-information',
          'pl-pl': 'https://www.spray.com/pl-pl/legal/legal-information',
          'ro-ro': 'https://www.spray.com/ro-ro/legal/legal-information',
          'es-ar': 'https://www.spray.com/es-ar/legal/información-legal',
          'es-cl': 'https://www.spray.com/es-cl/legal/información-legal',
          'es-ec': 'https://www.spray.com/es-ec/legal/información-legal',
          'es-mx': 'https://www.spray.com/es-mx/legal/información-legal',
          'en-be': 'https://www.spray.com/en-be/legal/legal-information',
          'en-my': 'https://www.spray.com/en-my/legal/legal-information',
          'en-at': 'https://www.spray.com/en-at/legal/legal-information',
          'hu-hu': 'https://www.spray.com/hu-hu/jogi/jogi-információk',
          'es-pe': 'https://www.spray.com/es-pe/legal/información-legal',
          'es-es': 'https://www.spray.com/es-es/legal/legal-information',
          'de-be': 'https://www.spray.com/de-be/legal/legal-information',
          'nl-be': 'https://www.spray.com/nl-be/legal/legal-information',
          'en-nz': 'https://www.spray.com/en-nz/legal/legal-information',
          'fi-fi': 'https://www.spray.com/fi-fi/legal/legal-information',
          'fr-ca': 'https://www.spray.com/fr-ca/legal/legal-information',
          'fr-fr': 'https://www.spray.com/fr-fr/legal/legal-information',
          'en-id': 'https://www.spray.com/en-id/legal/legal-information',
          'en-ch': 'https://www.spray.com/en-ch/legal/legal-information',
          'en-cz': 'https://www.spray.com/en-cz/legal/legal-information',
          'de-ch': 'https://www.spray.com/de-ch/legal/legal-information',
          'en-sg': 'https://www.spray.com/en-sg/legal/legal-information',
          'et-ee': 'https://www.spray.com/et-ee/legal/õiguslik-teave',
          'sk-sk': 'https://www.spray.com/sk-sk/legal/právne-informácie',
          'lt-lt': 'https://www.spray.com/lt-lt/legal/teisinė-informacija',
          'lv-lv': 'https://www.spray.com/lv-lv/legal/juridiskā-informācija',
          'en-ma': 'https://www.spray.com/en-ma/legal/legal-information',
          'en-cd': 'https://www.spray.com/en-cd/legal/legal-information',
          'en-sk': 'https://www.spray.com/en-sk/legal/legal-information',
          'fr-sn': 'https://www.spray.com/fr-sn/legal/legal-information',
          'en-tn': 'https://www.spray.com/en-tn/legal/legal-information',
          'en-zm': 'https://www.spray.com/en-zm/legal/legal-information',
          'en-lt': 'https://www.spray.com/en-lt/legal/legal-information',
          'fr-ci': 'https://www.spray.com/fr-ci/legal/legal-information',
          'en-bh': 'https://www.spray.com/en-bh/legal/legal-information',
          'fr-cm': 'https://www.spray.com/fr-cm/legal/legal-information',
          'en-mg': 'https://www.spray.com/en-mg/legal/legal-information',
          'en-sa': 'https://www.spray.com/en-sa/legal/legal-information',
          'fr-dz': 'https://www.spray.com/fr-dz/legal/legal-information',
          'en-ci': 'https://www.spray.com/en-ci/legal/legal-information',
          'en-ng': 'https://www.spray.com/en-ng/legal/legal-information',
          'fr-ma': 'https://www.spray.com/fr-ma/legal/legal-information',
          'en-cm': 'https://www.spray.com/en-cm/legal/legal-information',
          'fr-mg': 'https://www.spray.com/fr-mg/legal/legal-information',
          'en-iq': 'https://www.spray.com/en-iq/legal/legal-information',
          'en-sn': 'https://www.spray.com/en-sn/legal/legal-information',
          'fr-tn': 'https://www.spray.com/fr-tn/legal/legal-information',
          'en-dz': 'https://www.spray.com/en-dz/legal/legal-information',
          'en-jo': 'https://www.spray.com/en-jo/legal/legal-information',
          'en-eg': 'https://www.spray.com/en-eg/legal/legal-information',
          'en-ke': 'https://www.spray.com/en-ke/legal/legal-information',
          'en-om': 'https://www.spray.com/en-om/legal/legal-information',
          'en-kw': 'https://www.spray.com/en-kw/legal/legal-information',
          'fr-cd': 'https://www.spray.com/fr-cd/legal/legal-information',
          'en-lb': 'https://www.spray.com/en-lb/legal/legal-information',
          'en-pk': 'https://www.spray.com/en-pk/legal/legal-information',
          'en-lv': 'https://www.spray.com/en-lv/legal/legal-information',
          'en-qa': 'https://www.spray.com/en-qa/legal/legal-information',
          'it-ch': 'https://www.spray.com/it-ch/legal/legal-information',
          'en-in': 'https://www.spray.com/en-in/legal/legal-information',
          'fr-be': 'https://www.spray.com/fr-be/legal/legal-information',
          'nb-no': 'https://www.spray.com/nb-no/legal/juridisk-informasjon',
          'it-it': 'https://www.spray.com/it-it/legal/legal-information',
          'sv-se': 'https://www.spray.com/sv-se/legal/juridisk-information',
          'en-es': 'https://www.spray.com/en-es/legal/legal-information',
          'en-hu': 'https://www.spray.com/en-hu/legal/legal-information',
          'en-it': 'https://www.spray.com/en-it/legal/legal-information',
          'en-nl': 'https://www.spray.com/en-nl/legal/legal-information',
          'en-no': 'https://www.spray.com/en-no/legal/legal-information',
          'en-pl': 'https://www.spray.com/en-pl/legal/legal-information',
          'en-ro': 'https://www.spray.com/en-ro/legal/legal-information',
          'en-se': 'https://www.spray.com/en-se/legal/legal-information',
          'en-tr': 'https://www.spray.com/en-tr/legal/legal-information',
          'en-de': 'https://www.spray.com/en-de/legal/legal-information',
          'en-fi': 'https://www.spray.com/en-fi/legal/legal-information',
          'en-fr': 'https://www.spray.com/en-fr/legal/legal-information',
          'en-gb': 'https://www.spray.com/en-gb/legal/legal-information',
          'en-gr': 'https://www.spray.com/en-gr/legal/legal-information',
          'en-vn': 'https://www.spray.com/en-vn/legal/legal-information',
          'en-hk': 'https://www.spray.com/en-hk/legal/legal-information',
          'en-ph': 'https://www.spray.com/en-ph/legal/legal-information',
          en: 'https://www.spray.com/legal/legal-information'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.siteLinks.items.privacyStatement,
        links: {
          'x-default': 'https://www.spray.com/legal/privacy-statement',
          'vi-vn': 'https://www.spray.com.vn/contact/privacy.aspx',
          'ko-kr': 'https://www.spray.com/ko-kr/legal/privacy-statement',
          'zh-cn': 'https://www.spray.com/zh-cn/法律/privacy-statement',
          'cs-cz': 'https://www.spray.com/cs-cz/legal/privacy-statement',
          'ro-ro': 'https://www.spray.com/ro-ro/legal/privacy-statement',
          'ru-ru':
            'https://www.spray.com/ru-ru/юридический/заявление-о-конфиденциальности',
          'es-ar': 'https://www.spray.com/es-ar/legal/privacy-statement',
          'es-co': 'https://www.spray.com/es-co/legal/privacy-statement',
          'es-pe': 'https://www.spray.com/es-pe/legal/privacy-statement',
          'es-cl': 'https://www.spray.com/es-cl/legal/privacy-statement',
          'es-ec': 'https://www.spray.com/es-ec/legal/privacy-statement',
          'sv-se': 'https://www.spray.com/sv-se/legal/integritetspolicy',
          'ja-jp': 'https://www.spray.co.jp/contact/privacy.aspx',
          'ru-ua': 'https://www.spray.com.ua/contact/privacy.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/legal/privacy-statement',
          'fr-ch': 'https://www.spray.com/fr-ch/legal/privacy-statement',
          'de-at': 'https://www.spray.com/de-at/legal/privacy-statement',
          'de-de': 'https://www.spray.com/de-de/legal/privacy-statement',
          'el-gr': 'https://www.spray.com/el-gr/legal/privacy-statement',
          'ru-kz':
            'https://www.spray.com/ru-kz/юридический/заявление-о-конфиденциальности',
          'bg-bg':
            'https://www.spray.com/bg-bg/legal/декларация-за-поверителност',
          'en-za': 'https://www.spray.com/en-za/legal/privacy-statement',
          'sl-si': 'https://www.spray.com/sl-si/legal/izjava-o-zasebnosti',
          'nl-nl': 'https://www.spray.com/nl-nl/legal/privacy-statement',
          'en-ae': 'https://www.spray.com/en-ae/legal/privacy-statement',
          'en-au': 'https://www.spray.com/en-au/legal/privacy-statement',
          'en-ca': 'https://www.spray.com/en-ca/legal/privacy-statement',
          'pl-pl': 'https://www.spray.com/pl-pl/legal/privacy-statement',
          'es-mx': 'https://www.spray.com/es-mx/legal/política-de-privacidad',
          'en-be': 'https://www.spray.com/en-be/legal/privacy-statement',
          'en-my': 'https://www.spray.com/en-my/legal/privacy-statement',
          'en-at': 'https://www.spray.com/en-at/legal/privacy-statement',
          'hu-hu': 'https://www.spray.com/hu-hu/jogi/adatvédelmi-nyilatkozat',
          'es-es': 'https://www.spray.com/es-es/legal/privacy-statement',
          'de-be': 'https://www.spray.com/de-be/legal/privacy-statement',
          'nl-be': 'https://www.spray.com/nl-be/legal/privacy-statement',
          'en-nz': 'https://www.spray.com/en-nz/legal/privacy-statement',
          'fi-fi': 'https://www.spray.com/fi-fi/legal/privacy-statement',
          'fr-ca': 'https://www.spray.com/fr-ca/legal/privacy-statement',
          'fr-fr': 'https://www.spray.com/fr-fr/legal/privacy-statement',
          'en-id': 'https://www.spray.com/en-id/legal/privacy-statement',
          'en-ch': 'https://www.spray.com/en-ch/legal/privacy-statement',
          'en-cz': 'https://www.spray.com/en-cz/legal/privacy-statement',
          'de-ch': 'https://www.spray.com/de-ch/legal/privacy-statement',
          'en-sg': 'https://www.spray.com/en-sg/legal/privacy-statement',
          'et-ee': 'https://www.spray.com/et-ee/legal/privaatsusavaldused',
          'sk-sk':
            'https://www.spray.com/sk-sk/legal/vyhlásenie-o-ochrane-osobných-údajov',
          'lt-lt': 'https://www.spray.com/lt-lt/legal/privatumo-pareiškimas',
          'lv-lv':
            'https://www.spray.com/lv-lv/legal/paziņojums-par-konfidencialitāti',
          'en-ma': 'https://www.spray.com/en-ma/legal/privacy-statement',
          'en-cd': 'https://www.spray.com/en-cd/legal/privacy-statement',
          'en-sk': 'https://www.spray.com/en-sk/legal/privacy-statement',
          'fr-sn': 'https://www.spray.com/fr-sn/legal/privacy-statement',
          'en-tn': 'https://www.spray.com/en-tn/legal/privacy-statement',
          'en-zm': 'https://www.spray.com/en-zm/legal/privacy-statement',
          'en-lt': 'https://www.spray.com/en-lt/legal/privacy-statement',
          'fr-ci': 'https://www.spray.com/fr-ci/legal/privacy-statement',
          'en-bh': 'https://www.spray.com/en-bh/legal/privacy-statement',
          'fr-cm': 'https://www.spray.com/fr-cm/legal/privacy-statement',
          'en-mg': 'https://www.spray.com/en-mg/legal/privacy-statement',
          'en-sa': 'https://www.spray.com/en-sa/legal/privacy-statement',
          'fr-dz': 'https://www.spray.com/fr-dz/legal/privacy-statement',
          'en-ci': 'https://www.spray.com/en-ci/legal/privacy-statement',
          'en-ng': 'https://www.spray.com/en-ng/legal/privacy-statement',
          'fr-ma': 'https://www.spray.com/fr-ma/legal/privacy-statement',
          'en-cm': 'https://www.spray.com/en-cm/legal/privacy-statement',
          'fr-mg': 'https://www.spray.com/fr-mg/legal/privacy-statement',
          'en-iq': 'https://www.spray.com/en-iq/legal/privacy-statement',
          'en-sn': 'https://www.spray.com/en-sn/legal/privacy-statement',
          'fr-tn': 'https://www.spray.com/fr-tn/legal/privacy-statement',
          'en-dz': 'https://www.spray.com/en-dz/legal/privacy-statement',
          'en-jo': 'https://www.spray.com/en-jo/legal/privacy-statement',
          'en-eg': 'https://www.spray.com/en-eg/legal/privacy-statement',
          'en-ke': 'https://www.spray.com/en-ke/legal/privacy-statement',
          'en-om': 'https://www.spray.com/en-om/legal/privacy-statement',
          'en-kw': 'https://www.spray.com/en-kw/legal/privacy-statement',
          'fr-cd': 'https://www.spray.com/fr-cd/legal/privacy-statement',
          'en-lb': 'https://www.spray.com/en-lb/legal/privacy-statement',
          'en-pk': 'https://www.spray.com/en-pk/legal/privacy-statement',
          'en-lv': 'https://www.spray.com/en-lv/legal/privacy-statement',
          'en-qa': 'https://www.spray.com/en-qa/legal/privacy-statement',
          'it-ch': 'https://www.spray.com/it-ch/legal/privacy-statement',
          'en-in': 'https://www.spray.com/en-in/legal/privacy-statement',
          'fr-be': 'https://www.spray.com/fr-be/legal/privacy-statement',
          'nb-no': 'https://www.spray.com/nb-no/legal/personvernerklæring',
          'it-it': 'https://www.spray.com/it-it/legal/privacy-statement',
          'en-es': 'https://www.spray.com/en-es/legal/privacy-statement',
          'en-hu': 'https://www.spray.com/en-hu/legal/privacy-statement',
          'en-it': 'https://www.spray.com/en-it/legal/privacy-statement',
          'en-nl': 'https://www.spray.com/en-nl/legal/privacy-statement',
          'en-no': 'https://www.spray.com/en-no/legal/privacy-statement',
          'en-pl': 'https://www.spray.com/en-pl/legal/privacy-statement',
          'en-ro': 'https://www.spray.com/en-ro/legal/privacy-statement',
          'en-se': 'https://www.spray.com/en-se/legal/privacy-statement',
          'en-tr': 'https://www.spray.com/en-tr/legal/privacy-statement',
          'en-de': 'https://www.spray.com/en-de/legal/privacy-statement',
          'en-fi': 'https://www.spray.com/en-fi/legal/privacy-statement',
          'en-fr': 'https://www.spray.com/en-fr/legal/privacy-statement',
          'en-gb': 'https://www.spray.com/en-gb/legal/privacy-statement',
          'en-gr': 'https://www.spray.com/en-gr/legal/privacy-statement',
          'en-vn': 'https://www.spray.com/en-vn/legal/privacy-statement',
          'en-hk': 'https://www.spray.com/en-hk/legal/privacy-statement',
          'en-ph': 'https://www.spray.com/en-ph/legal/privacy-statement',
          en: 'https://www.spray.com/legal/privacy-statement'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.siteLinks.items
            .isoSystemAndPolicyStatement,
        links: {
          'x-default':
            'https://www.spray.com/legal/iso-system-and-policy-statement',
          'ko-kr':
            'https://www.spray.com/ko-kr/legal/iso-system-and-policy-statement',
          'zh-cn':
            'https://www.spray.com/zh-cn/法律/iso-system-and-policy-statement',
          'ru-ru':
            'https://www.spray.com/ru-ru/юридический/система-iso-и-заявление-о-политике',
          'ja-jp': 'https://www.spray.co.jp/contact/isomfg.aspx',
          'ru-ua': 'https://www.spray.com.ua/contact/isomfg.aspx',
          'tr-tr':
            'https://www.spray.com/tr-tr/legal/iso-system-and-policy-statement',
          'fr-ch':
            'https://www.spray.com/fr-ch/legal/iso-system-and-policy-statement',
          'de-at':
            'https://www.spray.com/de-at/legal/iso-system-and-policy-statement',
          'de-de':
            'https://www.spray.com/de-de/legal/iso-system-and-policy-statement',
          'el-gr':
            'https://www.spray.com/el-gr/legal/iso-system-and-policy-statement',
          'ru-kz':
            'https://www.spray.com/ru-kz/юридический/система-iso-и-заявление-о-политике',
          'es-co':
            'https://www.spray.com/es-co/legal/sistema-iso-y-políticas-de-calidad',
          'bg-bg':
            'https://www.spray.com/bg-bg/legal/декларация-за-системата-и-политиката-на-iso',
          'en-za':
            'https://www.spray.com/en-za/legal/iso-system-and-policy-statement',
          'sl-si':
            'https://www.spray.com/sl-si/legal/izjava-o-sistemu-in-politiki-iso',
          'cs-cz':
            'https://www.spray.com/cs-cz/legal/iso-system-and-policy-statement',
          'nl-nl':
            'https://www.spray.com/nl-nl/legal/iso-system-and-policy-statement',
          'en-ae':
            'https://www.spray.com/en-ae/legal/iso-system-and-policy-statement',
          'en-au':
            'https://www.spray.com/en-au/legal/iso-system-and-policy-statement',
          'en-ca':
            'https://www.spray.com/en-ca/legal/iso-system-and-policy-statement',
          'pl-pl':
            'https://www.spray.com/pl-pl/legal/iso-system-and-policy-statement',
          'ro-ro':
            'https://www.spray.com/ro-ro/legal/iso-system-and-policy-statement',
          'es-ar':
            'https://www.spray.com/es-ar/legal/sistema-iso-y-políticas-de-calidad',
          'es-cl':
            'https://www.spray.com/es-cl/legal/sistema-iso-y-políticas-de-calidad',
          'es-ec':
            'https://www.spray.com/es-ec/legal/sistema-iso-y-políticas-de-calidad',
          'es-mx':
            'https://www.spray.com/es-mx/legal/sistema-iso-y-políticas-de-calidad',
          'en-be':
            'https://www.spray.com/en-be/legal/iso-system-and-policy-statement',
          'en-my':
            'https://www.spray.com/en-my/legal/iso-system-and-policy-statement',
          'en-at':
            'https://www.spray.com/en-at/legal/iso-system-and-policy-statement',
          'hu-hu': 'https://www.spray.com/hu-hu/jogi/iso-rendszer-és-házirend',
          'es-pe':
            'https://www.spray.com/es-pe/legal/sistema-iso-y-políticas-de-calidad',
          'es-es':
            'https://www.spray.com/es-es/legal/iso-system-and-policy-statement',
          'de-be':
            'https://www.spray.com/de-be/legal/iso-system-and-policy-statement',
          'nl-be':
            'https://www.spray.com/nl-be/legal/iso-system-and-policy-statement',
          'en-nz':
            'https://www.spray.com/en-nz/legal/iso-system-and-policy-statement',
          'fi-fi':
            'https://www.spray.com/fi-fi/legal/iso-system-and-policy-statement',
          'fr-ca':
            'https://www.spray.com/fr-ca/legal/iso-system-and-policy-statement',
          'fr-fr':
            'https://www.spray.com/fr-fr/legal/iso-system-and-policy-statement',
          'en-id':
            'https://www.spray.com/en-id/legal/iso-system-and-policy-statement',
          'en-ch':
            'https://www.spray.com/en-ch/legal/iso-system-and-policy-statement',
          'en-cz':
            'https://www.spray.com/en-cz/legal/iso-system-and-policy-statement',
          'de-ch':
            'https://www.spray.com/de-ch/legal/iso-system-and-policy-statement',
          'en-sg':
            'https://www.spray.com/en-sg/legal/iso-system-and-policy-statement',
          'et-ee':
            'https://www.spray.com/et-ee/legal/iso-süsteem-ja-poliitika-avaldus',
          'sk-sk':
            'https://www.spray.com/sk-sk/legal/systém-iso-a-vyhlásenie-o-politike',
          'lt-lt':
            'https://www.spray.com/lt-lt/legal/iso-sistemos-ir-politikos-pareiškimas',
          'lv-lv':
            'https://www.spray.com/lv-lv/legal/iso-sistēmas-un-politikas-paziņojums',
          'en-ma':
            'https://www.spray.com/en-ma/legal/iso-system-and-policy-statement',
          'en-cd':
            'https://www.spray.com/en-cd/legal/iso-system-and-policy-statement',
          'en-sk':
            'https://www.spray.com/en-sk/legal/iso-system-and-policy-statement',
          'fr-sn':
            'https://www.spray.com/fr-sn/legal/iso-system-and-policy-statement',
          'en-tn':
            'https://www.spray.com/en-tn/legal/iso-system-and-policy-statement',
          'en-zm':
            'https://www.spray.com/en-zm/legal/iso-system-and-policy-statement',
          'en-lt':
            'https://www.spray.com/en-lt/legal/iso-system-and-policy-statement',
          'fr-ci':
            'https://www.spray.com/fr-ci/legal/iso-system-and-policy-statement',
          'en-bh':
            'https://www.spray.com/en-bh/legal/iso-system-and-policy-statement',
          'fr-cm':
            'https://www.spray.com/fr-cm/legal/iso-system-and-policy-statement',
          'en-mg':
            'https://www.spray.com/en-mg/legal/iso-system-and-policy-statement',
          'en-sa':
            'https://www.spray.com/en-sa/legal/iso-system-and-policy-statement',
          'fr-dz':
            'https://www.spray.com/fr-dz/legal/iso-system-and-policy-statement',
          'en-ci':
            'https://www.spray.com/en-ci/legal/iso-system-and-policy-statement',
          'en-ng':
            'https://www.spray.com/en-ng/legal/iso-system-and-policy-statement',
          'fr-ma':
            'https://www.spray.com/fr-ma/legal/iso-system-and-policy-statement',
          'en-cm':
            'https://www.spray.com/en-cm/legal/iso-system-and-policy-statement',
          'fr-mg':
            'https://www.spray.com/fr-mg/legal/iso-system-and-policy-statement',
          'en-iq':
            'https://www.spray.com/en-iq/legal/iso-system-and-policy-statement',
          'en-sn':
            'https://www.spray.com/en-sn/legal/iso-system-and-policy-statement',
          'fr-tn':
            'https://www.spray.com/fr-tn/legal/iso-system-and-policy-statement',
          'en-dz':
            'https://www.spray.com/en-dz/legal/iso-system-and-policy-statement',
          'en-jo':
            'https://www.spray.com/en-jo/legal/iso-system-and-policy-statement',
          'en-eg':
            'https://www.spray.com/en-eg/legal/iso-system-and-policy-statement',
          'en-ke':
            'https://www.spray.com/en-ke/legal/iso-system-and-policy-statement',
          'en-om':
            'https://www.spray.com/en-om/legal/iso-system-and-policy-statement',
          'en-kw':
            'https://www.spray.com/en-kw/legal/iso-system-and-policy-statement',
          'fr-cd':
            'https://www.spray.com/fr-cd/legal/iso-system-and-policy-statement',
          'en-lb':
            'https://www.spray.com/en-lb/legal/iso-system-and-policy-statement',
          'en-pk':
            'https://www.spray.com/en-pk/legal/iso-system-and-policy-statement',
          'en-lv':
            'https://www.spray.com/en-lv/legal/iso-system-and-policy-statement',
          'en-qa':
            'https://www.spray.com/en-qa/legal/iso-system-and-policy-statement',
          'it-ch':
            'https://www.spray.com/it-ch/legal/iso-system-and-policy-statement',
          'en-in':
            'https://www.spray.com/en-in/legal/iso-system-and-policy-statement',
          'fr-be':
            'https://www.spray.com/fr-be/legal/iso-system-and-policy-statement',
          'nb-no':
            'https://www.spray.com/nb-no/legal/iso-system-og-policyerklæring',
          'it-it':
            'https://www.spray.com/it-it/legal/iso-system-and-policy-statement',
          'sv-se':
            'https://www.spray.com/sv-se/legal/iso-system-och-policyförklaring',
          'en-es':
            'https://www.spray.com/en-es/legal/iso-system-and-policy-statement',
          'en-hu':
            'https://www.spray.com/en-hu/legal/iso-system-and-policy-statement',
          'en-it':
            'https://www.spray.com/en-it/legal/iso-system-and-policy-statement',
          'en-nl':
            'https://www.spray.com/en-nl/legal/iso-system-and-policy-statement',
          'en-no':
            'https://www.spray.com/en-no/legal/iso-system-and-policy-statement',
          'en-pl':
            'https://www.spray.com/en-pl/legal/iso-system-and-policy-statement',
          'en-ro':
            'https://www.spray.com/en-ro/legal/iso-system-and-policy-statement',
          'en-se':
            'https://www.spray.com/en-se/legal/iso-system-and-policy-statement',
          'en-tr':
            'https://www.spray.com/en-tr/legal/iso-system-and-policy-statement',
          'en-de':
            'https://www.spray.com/en-de/legal/iso-system-and-policy-statement',
          'en-fi':
            'https://www.spray.com/en-fi/legal/iso-system-and-policy-statement',
          'en-fr':
            'https://www.spray.com/en-fr/legal/iso-system-and-policy-statement',
          'en-gb':
            'https://www.spray.com/en-gb/legal/iso-system-and-policy-statement',
          'en-gr':
            'https://www.spray.com/en-gr/legal/iso-system-and-policy-statement',
          'en-vn':
            'https://www.spray.com/en-vn/legal/iso-system-and-policy-statement',
          'en-hk':
            'https://www.spray.com/en-hk/legal/iso-system-and-policy-statement',
          'en-ph':
            'https://www.spray.com/en-ph/legal/iso-system-and-policy-statement',
          en: 'https://www.spray.com/legal/iso-system-and-policy-statement'
        }
      },
      {
        labelMessageId: messageIds.navigation.footer.siteLinks.items.REACH,
        links: {
          'x-default': 'https://www.spray.com/legal/reach_eu',
          'fr-ch': 'https://www.spray.com/fr-ch/legal/reach',
          'de-at': 'https://www.spray.com/de-at/legal/reach',
          'de-de': 'https://www.spray.com/de-de/legal/reach',
          'el-gr': 'https://www.spray.com/el-gr/legal/reach',
          'ko-kr': 'https://www.spray.com/ko-kr/legal/reach_eu',
          'ru-kz': 'https://www.spray.com/ru-kz/юридический/достичь',
          'ru-ru': 'https://www.spray.com/ru-ru/юридический/достичь',
          'es-co': 'https://www.spray.com/es-co/legal/reach_eu',
          'bg-bg': 'https://www.spray.com/bg-bg/legal/reach',
          'en-za': 'https://www.spray.com/en-za/legal/reach_eu',
          'sl-si': 'https://www.spray.com/sl-si/legal/reach',
          'cs-cz': 'https://www.spray.com/cs-cz/legal/reach',
          'nl-nl': 'https://www.spray.com/nl-nl/legal/reach',
          'en-ae': 'https://www.spray.com/en-ae/legal/reach',
          'en-au': 'https://www.spray.com/en-au/legal/reach_eu',
          'en-ca': 'https://www.spray.com/en-ca/legal/reach_eu',
          'pl-pl': 'https://www.spray.com/pl-pl/legal/reach',
          'ro-ro': 'https://www.spray.com/ro-ro/legal/ajungeți-la',
          'es-ar': 'https://www.spray.com/es-ar/legal/reach_eu',
          'es-cl': 'https://www.spray.com/es-cl/legal/reach_eu',
          'es-ec': 'https://www.spray.com/es-ec/legal/reach_eu',
          'es-mx': 'https://www.spray.com/es-mx/legal/reach_eu',
          'tr-tr': 'https://www.spray.com/tr-tr/legal/reach',
          'en-be': 'https://www.spray.com/en-be/legal/reach',
          'en-my': 'https://www.spray.com/en-my/legal/reach_eu',
          'en-at': 'https://www.spray.com/en-at/legal/reach',
          'hu-hu': 'https://www.spray.com/hu-hu/jogi/reach',
          'es-pe': 'https://www.spray.com/es-pe/legal/reach_eu',
          'es-es': 'https://www.spray.com/es-es/legal/reach',
          'zh-cn': 'https://www.spray.com/zh-cn/法律/reach_eu',
          'de-be': 'https://www.spray.com/de-be/legal/reach',
          'nl-be': 'https://www.spray.com/nl-be/legal/reach',
          'en-nz': 'https://www.spray.com/en-nz/legal/reach_eu',
          'fi-fi': 'https://www.spray.com/fi-fi/legal/reach',
          'fr-ca': 'https://www.spray.com/fr-ca/legal/reach_eu',
          'fr-fr': 'https://www.spray.com/fr-fr/legal/reach',
          'en-id': 'https://www.spray.com/en-id/legal/reach_eu',
          'en-ch': 'https://www.spray.com/en-ch/legal/reach',
          'en-cz': 'https://www.spray.com/en-cz/legal/reach',
          'de-ch': 'https://www.spray.com/de-ch/legal/reach',
          'en-sg': 'https://www.spray.com/en-sg/legal/reach_eu',
          'et-ee': 'https://www.spray.com/et-ee/legal/reach',
          'sk-sk': 'https://www.spray.com/sk-sk/legal/reach',
          'lt-lt': 'https://www.spray.com/lt-lt/legal/reach',
          'lv-lv': 'https://www.spray.com/lv-lv/legal/reach',
          'en-ma': 'https://www.spray.com/en-ma/legal/reach',
          'en-cd': 'https://www.spray.com/en-cd/legal/reach',
          'en-sk': 'https://www.spray.com/en-sk/legal/reach',
          'fr-sn': 'https://www.spray.com/fr-sn/legal/reach',
          'en-tn': 'https://www.spray.com/en-tn/legal/reach',
          'en-zm': 'https://www.spray.com/en-zm/legal/reach',
          'en-lt': 'https://www.spray.com/en-lt/legal/reach',
          'fr-ci': 'https://www.spray.com/fr-ci/legal/reach',
          'en-bh': 'https://www.spray.com/en-bh/legal/reach',
          'fr-cm': 'https://www.spray.com/fr-cm/legal/reach',
          'en-mg': 'https://www.spray.com/en-mg/legal/reach',
          'en-sa': 'https://www.spray.com/en-sa/legal/reach',
          'fr-dz': 'https://www.spray.com/fr-dz/legal/reach',
          'en-ci': 'https://www.spray.com/en-ci/legal/reach',
          'en-ng': 'https://www.spray.com/en-ng/legal/reach',
          'fr-ma': 'https://www.spray.com/fr-ma/legal/reach',
          'en-cm': 'https://www.spray.com/en-cm/legal/reach',
          'fr-mg': 'https://www.spray.com/fr-mg/legal/reach',
          'en-iq': 'https://www.spray.com/en-iq/legal/reach',
          'en-sn': 'https://www.spray.com/en-sn/legal/reach',
          'fr-tn': 'https://www.spray.com/fr-tn/legal/reach',
          'en-dz': 'https://www.spray.com/en-dz/legal/reach',
          'en-jo': 'https://www.spray.com/en-jo/legal/reach',
          'en-eg': 'https://www.spray.com/en-eg/legal/reach',
          'en-ke': 'https://www.spray.com/en-ke/legal/reach',
          'en-om': 'https://www.spray.com/en-om/legal/reach',
          'en-kw': 'https://www.spray.com/en-kw/legal/reach',
          'fr-cd': 'https://www.spray.com/fr-cd/legal/reach',
          'en-lb': 'https://www.spray.com/en-lb/legal/reach',
          'en-pk': 'https://www.spray.com/en-pk/legal/reach',
          'en-lv': 'https://www.spray.com/en-lv/legal/reach',
          'en-qa': 'https://www.spray.com/en-qa/legal/reach',
          'it-ch': 'https://www.spray.com/it-ch/legal/reach',
          'en-in': 'https://www.spray.com/en-in/legal/reach_eu',
          'fr-be': 'https://www.spray.com/fr-be/legal/reach',
          'nb-no': 'https://www.spray.com/nb-no/legal/reach',
          'it-it': 'https://www.spray.com/it-it/legal/reach',
          'sv-se': 'https://www.spray.com/sv-se/legal/reach',
          'en-es': 'https://www.spray.com/en-es/legal/reach',
          'en-hu': 'https://www.spray.com/en-hu/legal/reach',
          'en-it': 'https://www.spray.com/en-it/legal/reach',
          'en-nl': 'https://www.spray.com/en-nl/legal/reach',
          'en-no': 'https://www.spray.com/en-no/legal/reach',
          'en-pl': 'https://www.spray.com/en-pl/legal/reach',
          'en-ro': 'https://www.spray.com/en-ro/legal/reach',
          'en-se': 'https://www.spray.com/en-se/legal/reach',
          'en-tr': 'https://www.spray.com/en-tr/legal/reach',
          'en-de': 'https://www.spray.com/en-de/legal/reach',
          'en-fi': 'https://www.spray.com/en-fi/legal/reach',
          'en-fr': 'https://www.spray.com/en-fr/legal/reach',
          'en-gb': 'https://www.spray.com/en-gb/legal/reach',
          'en-gr': 'https://www.spray.com/en-gr/legal/reach',
          'en-vn': 'https://www.spray.com/en-vn/legal/reach_eu',
          'en-hk': 'https://www.spray.com/en-hk/legal/reach_eu',
          'en-ph': 'https://www.spray.com/en-ph/legal/reach_eu',
          en: 'https://www.spray.com/legal/reach_eu'
        }
      }
    ]
  },
  productCategories: {
    titleMessageId: messageIds.navigation.footer.productCategories.title,
    items: [
      {
        labelMessageId:
          messageIds.navigation.footer.productCategories.items.productsOverview,
        links: {
          'pt-br': 'https://www.spray.com.br/produtos.aspx',
          'fr-ch': 'https://www.spray.com/fr-ch/produits/apercu-des-produits',
          'de-at': 'https://www.spray.com/de-at/produkte/uebersicht',
          'de-de': 'https://www.spray.com/de-de/produkte/uebersicht',
          'el-gr': 'https://www.spray.com/el-gr/products/επισκόπηση-προϊόντων',
          'ko-kr': 'https://www.spray.com/ko-kr/products/product-overview',
          'ru-kz': 'https://www.spray.com/ru-kz/продукты/обзор-продуктов',
          'ru-ru': 'https://www.spray.com/ru-ru/продукты/обзор-продуктов',
          'es-co': 'https://www.spray.com/es-co/productos/resumen-de-productos',
          'bg-bg': 'https://www.spray.com/bg-bg/продукти/преглед-на-продукта',
          'en-za': 'https://www.spray.com/en-za/products/product-overview',
          'sl-si': 'https://www.spray.com/sl-si/izdelki/pregled-izdelka',
          'cs-cz': 'https://www.spray.com/cs-cz/products/product-overview',
          'nl-nl': 'https://www.spray.com/nl-nl/producten/productenoverzicht',
          'en-ae': 'https://www.spray.com/en-ae/products/product-overview',
          'en-au': 'https://www.spray.com/en-au/products/product-overview',
          'en-ca': 'https://www.spray.com/en-ca/products/product-overview',
          'pl-pl': 'https://www.spray.com/pl-pl/products/product-overview',
          'ro-ro': 'https://www.spray.com/ro-ro/products/product-overview',
          'es-ar': 'https://www.spray.com/es-ar/productos/resumen-de-productos',
          'es-cl': 'https://www.spray.com/es-cl/productos/resumen-de-productos',
          'es-ec': 'https://www.spray.com/es-ec/productos/resumen-de-productos',
          'es-mx': 'https://www.spray.com/es-mx/productos/resumen-de-productos',
          'tr-tr':
            'https://www.spray.com/tr-tr/urunler/urunlerimize-genel-bakis',
          'en-be': 'https://www.spray.com/en-be/products/product-overview',
          'en-my': 'https://www.spray.com/en-my/products/product-overview',
          'en-at': 'https://www.spray.com/en-at/products/product-overview',
          'hu-hu': 'https://www.spray.com/hu-hu/termékek/termékek-áttekintése',
          'es-pe': 'https://www.spray.com/es-pe/productos/resumen-de-productos',
          'es-es': 'https://www.spray.com/es-es/productos/productos',
          'zh-cn': 'https://www.spray.com/zh-cn/产品/product-overview',
          'de-be': 'https://www.spray.com/de-be/produkte/uebersicht',
          'nl-be': 'https://www.spray.com/nl-be/producten/productenoverzicht',
          'en-nz': 'https://www.spray.com/en-nz/products/product-overview',
          'fi-fi': 'https://www.spray.com/fi-fi/tuotteet/tuotevalikoima',
          'fr-ca': 'https://www.spray.com/fr-ca/produits/aperçu-des-produits',
          'fr-fr': 'https://www.spray.com/fr-fr/produits/apercu-des-produits',
          'en-id': 'https://www.spray.com/en-id/products/product-overview',
          'en-ch': 'https://www.spray.com/en-ch/products/product-overview',
          'en-cz': 'https://www.spray.com/en-cz/products/product-overview',
          'de-ch': 'https://www.spray.com/de-ch/produkte/uebersicht',
          'en-sg': 'https://www.spray.com/en-sg/products/product-overview',
          'et-ee': 'https://www.spray.com/et-ee/tooted/toote-ülevaade',
          'sk-sk': 'https://www.spray.com/sk-sk/produkty/prehľad-produktov',
          'lt-lt': 'https://www.spray.com/lt-lt/produktai/produkto-apžvalga',
          'lv-lv': 'https://www.spray.com/lv-lv/produkti/produkta-pārskats',
          'en-ma': 'https://www.spray.com/en-ma/products/product-overview',
          'en-cd': 'https://www.spray.com/en-cd/products/product-overview',
          'en-sk': 'https://www.spray.com/en-sk/products/product-overview',
          'fr-sn': 'https://www.spray.com/fr-sn/produits/apercu-des-produits',
          'en-tn': 'https://www.spray.com/en-tn/products/product-overview',
          'en-zm': 'https://www.spray.com/en-zm/products/product-overview',
          'en-lt': 'https://www.spray.com/en-lt/products/product-overview',
          'fr-ci': 'https://www.spray.com/fr-ci/produits/apercu-des-produits',
          'en-bh': 'https://www.spray.com/en-bh/products/product-overview',
          'fr-cm': 'https://www.spray.com/fr-cm/produits/apercu-des-produits',
          'en-mg': 'https://www.spray.com/en-mg/products/product-overview',
          'en-sa': 'https://www.spray.com/en-sa/products/product-overview',
          'fr-dz': 'https://www.spray.com/fr-dz/produits/apercu-des-produits',
          'en-ci': 'https://www.spray.com/en-ci/products/product-overview',
          'en-ng': 'https://www.spray.com/en-ng/products/product-overview',
          'fr-ma': 'https://www.spray.com/fr-ma/produits/apercu-des-produits',
          'en-cm': 'https://www.spray.com/en-cm/products/product-overview',
          'fr-mg': 'https://www.spray.com/fr-mg/produits/apercu-des-produits',
          'en-iq': 'https://www.spray.com/en-iq/products/product-overview',
          'en-sn': 'https://www.spray.com/en-sn/products/product-overview',
          'fr-tn': 'https://www.spray.com/fr-tn/produits/apercu-des-produits',
          'en-dz': 'https://www.spray.com/en-dz/products/product-overview',
          'en-jo': 'https://www.spray.com/en-jo/products/product-overview',
          'en-eg': 'https://www.spray.com/en-eg/products/product-overview',
          'en-ke': 'https://www.spray.com/en-ke/products/product-overview',
          'en-om': 'https://www.spray.com/en-om/products/product-overview',
          'en-kw': 'https://www.spray.com/en-kw/products/product-overview',
          'fr-cd': 'https://www.spray.com/fr-cd/produits/apercu-des-produits',
          'en-lb': 'https://www.spray.com/en-lb/products/product-overview',
          'en-pk': 'https://www.spray.com/en-pk/products/product-overview',
          'en-lv': 'https://www.spray.com/en-lv/products/product-overview',
          'en-qa': 'https://www.spray.com/en-qa/products/product-overview',
          'it-ch': 'https://www.spray.com/it-ch/products/product-overview',
          'en-in': 'https://www.spray.com/en-in/products/product-overview',
          'fr-be': 'https://www.spray.com/fr-be/produits/apercu-des-produits',
          'nb-no': 'https://www.spray.com/nb-no/produkter/produktoversikt',
          'it-it': 'https://www.spray.com/it-it/products/product-overview',
          'sv-se': 'https://www.spray.com/sv-se/produkter/produktöversikt',
          'en-es': 'https://www.spray.com/en-es/products/product-overview',
          'en-hu': 'https://www.spray.com/en-hu/products/product-overview',
          'en-it': 'https://www.spray.com/en-it/products/product-overview',
          'en-nl': 'https://www.spray.com/en-nl/products/product-overview',
          'en-no': 'https://www.spray.com/en-no/products/product-overview',
          'en-pl': 'https://www.spray.com/en-pl/products/product-overview',
          'en-ro': 'https://www.spray.com/en-ro/products/product-overview',
          'en-se': 'https://www.spray.com/en-se/products/product-overview',
          'en-tr': 'https://www.spray.com/en-tr/products/product-overview',
          'en-de': 'https://www.spray.com/en-de/products/product-overview',
          'en-fi': 'https://www.spray.com/en-fi/products/product-overview',
          'en-fr': 'https://www.spray.com/en-fr/products/product-overview',
          'en-gb': 'https://www.spray.com/en-gb/products/product-overview',
          'en-gr': 'https://www.spray.com/en-gr/products/product-overview',
          'en-vn': 'https://www.spray.com/en-vn/products/product-overview',
          'en-hk': 'https://www.spray.com/en-hk/products/product-overview',
          'en-ph': 'https://www.spray.com/en-ph/products/product-overview',
          en: 'https://www.spray.com/products/product-overview'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.productCategories.items.nozzles,
        links: {
          'x-default': 'https://www.spray.com/products/nozzles',
          'zh-cn': 'https://www.spray.com/zh-cn/产品/nozzles',
          'ja-jp':
            'https://www.spray.co.jp/spray_nozzles/spray_nozzles_overview.aspx',
          'ru-ua':
            'https://www.spray.com.ua/spray_nozzles/spray_nozzles_overview.aspx',
          'pt-br': 'https://www.spray.com.br/produtos/bicos-pulverizacao.aspx',
          'fr-ch': 'https://www.spray.com/fr-ch/produits/buses',
          'de-at': 'https://www.spray.com/de-at/produkte/duesen',
          'de-de': 'https://www.spray.com/de-de/produkte/duesen',
          'el-gr': 'https://www.spray.com/el-gr/products/ακροφύσια',
          'ko-kr': 'https://www.spray.com/ko-kr/products/nozzles',
          'ru-kz': 'https://www.spray.com/ru-kz/продукты/форсунки',
          'ru-ru': 'https://www.spray.com/ru-ru/продукты/форсунки',
          'es-co':
            'https://www.spray.com/es-co/productos/boquillas-de-pulverización',
          'bg-bg': 'https://www.spray.com/bg-bg/продукти/дюзи',
          'en-za': 'https://www.spray.com/en-za/products/nozzles',
          'sl-si': 'https://www.spray.com/sl-si/izdelki/šobe',
          'cs-cz': 'https://www.spray.com/cs-cz/products/nozzles',
          'nl-nl': 'https://www.spray.com/nl-nl/producten/sproeikoppen',
          'en-ae': 'https://www.spray.com/en-ae/products/nozzles',
          'en-au': 'https://www.spray.com/en-au/products/nozzles',
          'en-ca': 'https://www.spray.com/en-ca/products/nozzles',
          'pl-pl': 'https://www.spray.com/pl-pl/products/nozzles',
          'ro-ro': 'https://www.spray.com/ro-ro/products/nozzles',
          'es-ar':
            'https://www.spray.com/es-ar/productos/boquillas-de-pulverización',
          'es-cl':
            'https://www.spray.com/es-cl/productos/boquillas-de-pulverización',
          'es-ec':
            'https://www.spray.com/es-ec/productos/boquillas-de-pulverización',
          'es-mx':
            'https://www.spray.com/es-mx/productos/boquillas-de-aspersión',
          'tr-tr': 'https://www.spray.com/tr-tr/urunler/nozullar',
          'en-be': 'https://www.spray.com/en-be/products/nozzles',
          'en-my': 'https://www.spray.com/en-my/products/nozzles',
          'en-at': 'https://www.spray.com/en-at/products/nozzles',
          'hu-hu': 'https://www.spray.com/hu-hu/termékek/fúvókák',
          'es-pe':
            'https://www.spray.com/es-pe/productos/boquillas-de-pulverización',
          'es-es': 'https://www.spray.com/es-es/productos/nozzles',
          'de-be': 'https://www.spray.com/de-be/produkte/duesen',
          'nl-be': 'https://www.spray.com/nl-be/producten/sproeikoppen',
          'en-nz': 'https://www.spray.com/en-nz/products/nozzles',
          'fi-fi': 'https://www.spray.com/fi-fi/tuotteet/suuttimet',
          'fr-ca': 'https://www.spray.com/fr-ca/produits/buses',
          'fr-fr': 'https://www.spray.com/fr-fr/produits/buses',
          'en-id': 'https://www.spray.com/en-id/products/nozzles',
          'en-ch': 'https://www.spray.com/en-ch/products/nozzles',
          'en-cz': 'https://www.spray.com/en-cz/products/nozzles',
          'de-ch': 'https://www.spray.com/de-ch/produkte/duesen',
          'en-sg': 'https://www.spray.com/en-sg/products/nozzles',
          'et-ee': 'https://www.spray.com/et-ee/tooted/düüsid',
          'sk-sk': 'https://www.spray.com/sk-sk/produkty/trysky',
          'lt-lt': 'https://www.spray.com/lt-lt/produktai/purkštukai',
          'lv-lv': 'https://www.spray.com/lv-lv/produkti/sprauslas',
          'en-ma': 'https://www.spray.com/en-ma/products/nozzles',
          'en-cd': 'https://www.spray.com/en-cd/products/nozzles',
          'en-sk': 'https://www.spray.com/en-sk/products/nozzles',
          'fr-sn': 'https://www.spray.com/fr-sn/produits/buses',
          'en-tn': 'https://www.spray.com/en-tn/products/nozzles',
          'en-zm': 'https://www.spray.com/en-zm/products/nozzles',
          'en-lt': 'https://www.spray.com/en-lt/products/nozzles',
          'fr-ci': 'https://www.spray.com/fr-ci/produits/buses',
          'en-bh': 'https://www.spray.com/en-bh/products/nozzles',
          'fr-cm': 'https://www.spray.com/fr-cm/produits/buses',
          'en-mg': 'https://www.spray.com/en-mg/products/nozzles',
          'en-sa': 'https://www.spray.com/en-sa/products/nozzles',
          'fr-dz': 'https://www.spray.com/fr-dz/produits/buses',
          'en-ci': 'https://www.spray.com/en-ci/products/nozzles',
          'en-ng': 'https://www.spray.com/en-ng/products/nozzles',
          'fr-ma': 'https://www.spray.com/fr-ma/produits/buses',
          'en-cm': 'https://www.spray.com/en-cm/products/nozzles',
          'fr-mg': 'https://www.spray.com/fr-mg/produits/buses',
          'en-iq': 'https://www.spray.com/en-iq/products/nozzles',
          'en-sn': 'https://www.spray.com/en-sn/products/nozzles',
          'fr-tn': 'https://www.spray.com/fr-tn/produits/buses',
          'en-dz': 'https://www.spray.com/en-dz/products/nozzles',
          'en-jo': 'https://www.spray.com/en-jo/products/nozzles',
          'en-eg': 'https://www.spray.com/en-eg/products/nozzles',
          'en-ke': 'https://www.spray.com/en-ke/products/nozzles',
          'en-om': 'https://www.spray.com/en-om/products/nozzles',
          'en-kw': 'https://www.spray.com/en-kw/products/nozzles',
          'fr-cd': 'https://www.spray.com/fr-cd/produits/buses',
          'en-lb': 'https://www.spray.com/en-lb/products/nozzles',
          'en-pk': 'https://www.spray.com/en-pk/products/nozzles',
          'en-lv': 'https://www.spray.com/en-lv/products/nozzles',
          'en-qa': 'https://www.spray.com/en-qa/products/nozzles',
          'it-ch': 'https://www.spray.com/it-ch/products/nozzles',
          'en-in': 'https://www.spray.com/en-in/products/nozzles',
          'fr-be': 'https://www.spray.com/fr-be/produits/buses',
          'nb-no': 'https://www.spray.com/nb-no/produkter/dyser',
          'it-it': 'https://www.spray.com/it-it/products/nozzles',
          'sv-se': 'https://www.spray.com/sv-se/produkter/munstycken',
          'en-es': 'https://www.spray.com/en-es/products/nozzles',
          'en-hu': 'https://www.spray.com/en-hu/products/nozzles',
          'en-it': 'https://www.spray.com/en-it/products/nozzles',
          'en-nl': 'https://www.spray.com/en-nl/products/nozzles',
          'en-no': 'https://www.spray.com/en-no/products/nozzles',
          'en-pl': 'https://www.spray.com/en-pl/products/nozzles',
          'en-ro': 'https://www.spray.com/en-ro/products/nozzles',
          'en-se': 'https://www.spray.com/en-se/products/nozzles',
          'en-tr': 'https://www.spray.com/en-tr/products/nozzles',
          'en-de': 'https://www.spray.com/en-de/products/nozzles',
          'en-fi': 'https://www.spray.com/en-fi/products/nozzles',
          'en-fr': 'https://www.spray.com/en-fr/products/nozzles',
          'en-gb': 'https://www.spray.com/en-gb/products/nozzles',
          'en-gr': 'https://www.spray.com/en-gr/products/nozzles',
          'en-vn': 'https://www.spray.com/en-vn/products/nozzles',
          'en-hk': 'https://www.spray.com/en-hk/products/nozzles',
          'en-ph': 'https://www.spray.com/en-ph/products/nozzles',
          en: 'https://www.spray.com/products/nozzles'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.productCategories.items.sprayGuns,
        links: {
          'x-default': 'https://www.spray.com/products/nozzles/spray-guns',
          'zh-cn': 'https://www.spray.com/zh-cn/产品/nozzles/spray-guns',
          'ru-ru':
            'https://www.spray.com/ru-ru/продукты/форсунки/распылительные-пистолеты',
          'ja-jp': 'https://www.spray.co.jp/spray_nozzles/spray_guns.aspx',
          'ru-ua': 'https://www.spray.com.ua/spray_nozzles/spray_guns.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/urunler/nozullar/spray-guns',
          'pt-br':
            'https://www.spray.com.br/produtos/bicos-pulverizacao/pistolas-pulverizacao.aspx',
          'fr-ch':
            'https://www.spray.com/fr-ch/produits/buses/pistolets-gunjet',
          'de-at': 'https://www.spray.com/de-at/produkte/duesen/spray-guns',
          'de-de': 'https://www.spray.com/de-de/produkte/duesen/spray-guns',
          'el-gr': 'https://www.spray.com/el-gr/products/ακροφύσια/spray-guns',
          'ko-kr': 'https://www.spray.com/ko-kr/products/nozzles/spray-guns',
          'ru-kz':
            'https://www.spray.com/ru-kz/продукты/форсунки/распылительные-пистолеты',
          'es-co':
            'https://www.spray.com/es-co/productos/boquillas-de-pulverización/pistolas-de-pulverización',
          'bg-bg':
            'https://www.spray.com/bg-bg/продукти/дюзи/пистолети-за-пръскане',
          'en-za': 'https://www.spray.com/en-za/products/nozzles/spray-guns',
          'sl-si':
            'https://www.spray.com/sl-si/izdelki/šobe/razpršilne-pištole',
          'cs-cz': 'https://www.spray.com/cs-cz/products/nozzles/spray-guns',
          'nl-nl':
            'https://www.spray.com/nl-nl/producten/sproeikoppen/handbediende-sproeipistolen',
          'en-ae': 'https://www.spray.com/en-ae/products/nozzles/spray-guns',
          'en-au': 'https://www.spray.com/en-au/products/nozzles/spray-guns',
          'en-ca': 'https://www.spray.com/en-ca/products/nozzles/spray-guns',
          'pl-pl': 'https://www.spray.com/pl-pl/products/nozzles/spray-guns',
          'ro-ro': 'https://www.spray.com/ro-ro/products/nozzles/spray-guns',
          'es-ar':
            'https://www.spray.com/es-ar/productos/boquillas-de-pulverización/pistolas-de-pulverización',
          'es-cl':
            'https://www.spray.com/es-cl/productos/boquillas-de-pulverización/pistolas-de-pulverización',
          'es-ec':
            'https://www.spray.com/es-ec/productos/boquillas-de-pulverización/pistolas-de-pulverización',
          'es-mx':
            'https://www.spray.com/es-mx/productos/boquillas-de-aspersión/pistolas-de-aspersión',
          'en-be': 'https://www.spray.com/en-be/products/nozzles/spray-guns',
          'en-my': 'https://www.spray.com/en-my/products/nozzles/spray-guns',
          'en-at': 'https://www.spray.com/en-at/products/nozzles/spray-guns',
          'hu-hu':
            'https://www.spray.com/hu-hu/termékek/fúvókák/szórópisztolyok',
          'es-pe':
            'https://www.spray.com/es-pe/productos/boquillas-de-pulverización/pistolas-de-pulverización',
          'es-es': 'https://www.spray.com/es-es/productos/nozzles/spray-guns',
          'de-be': 'https://www.spray.com/de-be/produkte/duesen/spray-guns',
          'nl-be':
            'https://www.spray.com/nl-be/producten/sproeikoppen/handbediende-sproeipistolen',
          'en-nz': 'https://www.spray.com/en-nz/products/nozzles/spray-guns',
          'fi-fi':
            'https://www.spray.com/fi-fi/tuotteet/suuttimet/ruiskupistoolit',
          'fr-ca':
            'https://www.spray.com/fr-ca/produits/buses/pistolets-manuels',
          'fr-fr':
            'https://www.spray.com/fr-fr/produits/buses/pistolets-gunjet',
          'en-id': 'https://www.spray.com/en-id/products/nozzles/spray-guns',
          'en-ch': 'https://www.spray.com/en-ch/products/nozzles/spray-guns',
          'en-cz': 'https://www.spray.com/en-cz/products/nozzles/spray-guns',
          'de-ch': 'https://www.spray.com/de-ch/produkte/duesen/spray-guns',
          'en-sg': 'https://www.spray.com/en-sg/products/nozzles/spray-guns',
          'et-ee': 'https://www.spray.com/et-ee/tooted/düüsid/pihustuspüstolid',
          'sk-sk':
            'https://www.spray.com/sk-sk/produkty/trysky/striekacie-pištole',
          'lt-lt':
            'https://www.spray.com/lt-lt/produktai/purkštukai/purškimo-pistoletai',
          'lv-lv':
            'https://www.spray.com/lv-lv/produkti/sprauslas/smidzināšanas-pistoles',
          'en-ma': 'https://www.spray.com/en-ma/products/nozzles/spray-guns',
          'en-cd': 'https://www.spray.com/en-cd/products/nozzles/spray-guns',
          'en-sk': 'https://www.spray.com/en-sk/products/nozzles/spray-guns',
          'fr-sn':
            'https://www.spray.com/fr-sn/produits/buses/pistolets-gunjet',
          'en-tn': 'https://www.spray.com/en-tn/products/nozzles/spray-guns',
          'en-zm': 'https://www.spray.com/en-zm/products/nozzles/spray-guns',
          'en-lt': 'https://www.spray.com/en-lt/products/nozzles/spray-guns',
          'fr-ci':
            'https://www.spray.com/fr-ci/produits/buses/pistolets-gunjet',
          'en-bh': 'https://www.spray.com/en-bh/products/nozzles/spray-guns',
          'fr-cm':
            'https://www.spray.com/fr-cm/produits/buses/pistolets-gunjet',
          'en-mg': 'https://www.spray.com/en-mg/products/nozzles/spray-guns',
          'en-sa': 'https://www.spray.com/en-sa/products/nozzles/spray-guns',
          'fr-dz':
            'https://www.spray.com/fr-dz/produits/buses/pistolets-gunjet',
          'en-ci': 'https://www.spray.com/en-ci/products/nozzles/spray-guns',
          'en-ng': 'https://www.spray.com/en-ng/products/nozzles/spray-guns',
          'fr-ma':
            'https://www.spray.com/fr-ma/produits/buses/pistolets-gunjet',
          'en-cm': 'https://www.spray.com/en-cm/products/nozzles/spray-guns',
          'fr-mg':
            'https://www.spray.com/fr-mg/produits/buses/pistolets-gunjet',
          'en-iq': 'https://www.spray.com/en-iq/products/nozzles/spray-guns',
          'en-sn': 'https://www.spray.com/en-sn/products/nozzles/spray-guns',
          'fr-tn':
            'https://www.spray.com/fr-tn/produits/buses/pistolets-gunjet',
          'en-dz': 'https://www.spray.com/en-dz/products/nozzles/spray-guns',
          'en-jo': 'https://www.spray.com/en-jo/products/nozzles/spray-guns',
          'en-eg': 'https://www.spray.com/en-eg/products/nozzles/spray-guns',
          'en-ke': 'https://www.spray.com/en-ke/products/nozzles/spray-guns',
          'en-om': 'https://www.spray.com/en-om/products/nozzles/spray-guns',
          'en-kw': 'https://www.spray.com/en-kw/products/nozzles/spray-guns',
          'fr-cd':
            'https://www.spray.com/fr-cd/produits/buses/pistolets-gunjet',
          'en-lb': 'https://www.spray.com/en-lb/products/nozzles/spray-guns',
          'en-pk': 'https://www.spray.com/en-pk/products/nozzles/spray-guns',
          'en-lv': 'https://www.spray.com/en-lv/products/nozzles/spray-guns',
          'en-qa': 'https://www.spray.com/en-qa/products/nozzles/spray-guns',
          'it-ch': 'https://www.spray.com/it-ch/products/nozzles/spray-guns',
          'en-in': 'https://www.spray.com/en-in/products/nozzles/spray-guns',
          'fr-be':
            'https://www.spray.com/fr-be/produits/buses/pistolets-gunjet',
          'nb-no': 'https://www.spray.com/nb-no/produkter/dyser/spraypistoler',
          'it-it': 'https://www.spray.com/it-it/products/nozzles/spray-guns',
          'sv-se':
            'https://www.spray.com/sv-se/produkter/munstycken/sprutpistoler',
          'en-es': 'https://www.spray.com/en-es/products/nozzles/spray-guns',
          'en-hu': 'https://www.spray.com/en-hu/products/nozzles/spray-guns',
          'en-it': 'https://www.spray.com/en-it/products/nozzles/spray-guns',
          'en-nl': 'https://www.spray.com/en-nl/products/nozzles/spray-guns',
          'en-no': 'https://www.spray.com/en-no/products/nozzles/spray-guns',
          'en-pl': 'https://www.spray.com/en-pl/products/nozzles/spray-guns',
          'en-ro': 'https://www.spray.com/en-ro/products/nozzles/spray-guns',
          'en-se': 'https://www.spray.com/en-se/products/nozzles/spray-guns',
          'en-tr': 'https://www.spray.com/en-tr/products/nozzles/spray-guns',
          'en-de': 'https://www.spray.com/en-de/products/nozzles/spray-guns',
          'en-fi': 'https://www.spray.com/en-fi/products/nozzles/spray-guns',
          'en-fr': 'https://www.spray.com/en-fr/products/nozzles/spray-guns',
          'en-gb': 'https://www.spray.com/en-gb/products/nozzles/spray-guns',
          'en-gr': 'https://www.spray.com/en-gr/products/nozzles/spray-guns',
          'en-vn': 'https://www.spray.com/en-vn/products/nozzles/spray-guns',
          'en-hk': 'https://www.spray.com/en-hk/products/nozzles/spray-guns',
          'en-ph': 'https://www.spray.com/en-ph/products/nozzles/spray-guns',
          en: 'https://www.spray.com/products/nozzles/spray-guns'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.productCategories.items.tankCleaning,
        links: {
          'pt-br':
            'https://www.spray.com.br/produtos/tankjet-limpeza-tanques.aspx',
          'fr-ch': 'https://www.spray.com/fr-ch/produits/tank-cleaning',
          'de-at': 'https://www.spray.com/de-at/produkte/tankreinigung',
          'de-de': 'https://www.spray.com/de-de/produkte/tankreinigung',
          'el-gr': 'https://www.spray.com/el-gr/products/καθαρισμός-δεξαμενών',
          'ko-kr': 'https://www.spray.com/ko-kr/products/tank-cleaning',
          'ru-kz': 'https://www.spray.com/ru-kz/продукты/очистка-резервуаров',
          'ru-ru': 'https://www.spray.com/ru-ru/продукты/очистка-резервуаров',
          'es-co': 'https://www.spray.com/es-co/productos/limpieza-de-tanques',
          'bg-bg':
            'https://www.spray.com/bg-bg/продукти/почистване-на-резервоари',
          'en-za': 'https://www.spray.com/en-za/products/tank-cleaning',
          'sl-si': 'https://www.spray.com/sl-si/izdelki/čiščenje-rezervoarjev',
          'cs-cz': 'https://www.spray.com/cs-cz/products/tank-cleaning',
          'nl-nl':
            'https://www.spray.com/nl-nl/producten/tankjet-tankreinigingsproducten',
          'en-ae': 'https://www.spray.com/en-ae/products/tank-cleaning',
          'en-au': 'https://www.spray.com/en-au/products/tank-cleaning',
          'en-ca': 'https://www.spray.com/en-ca/products/tank-cleaning',
          'pl-pl': 'https://www.spray.com/pl-pl/products/tank-cleaning',
          'ro-ro': 'https://www.spray.com/ro-ro/products/tank-cleaning',
          'es-ar': 'https://www.spray.com/es-ar/productos/limpieza-de-tanques',
          'es-cl': 'https://www.spray.com/es-cl/productos/limpieza-de-tanques',
          'es-ec': 'https://www.spray.com/es-ec/productos/limpieza-de-tanques',
          'es-mx': 'https://www.spray.com/es-mx/productos/limpieza-de-tanques',
          'tr-tr': 'https://www.spray.com/tr-tr/urunler/tank-cleaning',
          'en-be': 'https://www.spray.com/en-be/products/tank-cleaning',
          'en-my': 'https://www.spray.com/en-my/products/tank-cleaning',
          'en-at': 'https://www.spray.com/en-at/products/tank-cleaning',
          'hu-hu': 'https://www.spray.com/hu-hu/termékek/tartálytisztítás',
          'es-pe': 'https://www.spray.com/es-pe/productos/limpieza-de-tanques',
          'es-es': 'https://www.spray.com/es-es/productos/productos-tankjet',
          'zh-cn': 'https://www.spray.com/zh-cn/产品/tank-cleaning',
          'de-be': 'https://www.spray.com/de-be/produkte/tankreinigung',
          'nl-be':
            'https://www.spray.com/nl-be/producten/tankjet-tankreinigingsproducten',
          'en-nz': 'https://www.spray.com/en-nz/products/tank-cleaning',
          'fi-fi': 'https://www.spray.com/fi-fi/tuotteet/tank-cleaning',
          'fr-ca':
            'https://www.spray.com/fr-ca/produits/nettoyage-de-réservoir',
          'fr-fr': 'https://www.spray.com/fr-fr/produits/tank-cleaning',
          'en-id': 'https://www.spray.com/en-id/products/tank-cleaning',
          'en-ch': 'https://www.spray.com/en-ch/products/tank-cleaning',
          'en-cz': 'https://www.spray.com/en-cz/products/tank-cleaning',
          'de-ch': 'https://www.spray.com/de-ch/produkte/tankreinigung',
          'en-sg': 'https://www.spray.com/en-sg/products/tank-cleaning',
          'et-ee': 'https://www.spray.com/et-ee/tooted/mahuti-puhastamine',
          'sk-sk': 'https://www.spray.com/sk-sk/produkty/čistenie-nádrží',
          'lt-lt': 'https://www.spray.com/lt-lt/produktai/rezervuarų-valymas',
          'lv-lv': 'https://www.spray.com/lv-lv/produkti/tvertņu-tīrīšana',
          'en-ma': 'https://www.spray.com/en-ma/products/tank-cleaning',
          'en-cd': 'https://www.spray.com/en-cd/products/tank-cleaning',
          'en-sk': 'https://www.spray.com/en-sk/products/tank-cleaning',
          'fr-sn': 'https://www.spray.com/fr-sn/produits/tank-cleaning',
          'en-tn': 'https://www.spray.com/en-tn/products/tank-cleaning',
          'en-zm': 'https://www.spray.com/en-zm/products/tank-cleaning',
          'en-lt': 'https://www.spray.com/en-lt/products/tank-cleaning',
          'fr-ci': 'https://www.spray.com/fr-ci/produits/tank-cleaning',
          'en-bh': 'https://www.spray.com/en-bh/products/tank-cleaning',
          'fr-cm': 'https://www.spray.com/fr-cm/produits/tank-cleaning',
          'en-mg': 'https://www.spray.com/en-mg/products/tank-cleaning',
          'en-sa': 'https://www.spray.com/en-sa/products/tank-cleaning',
          'fr-dz': 'https://www.spray.com/fr-dz/produits/tank-cleaning',
          'en-ci': 'https://www.spray.com/en-ci/products/tank-cleaning',
          'en-ng': 'https://www.spray.com/en-ng/products/tank-cleaning',
          'fr-ma': 'https://www.spray.com/fr-ma/produits/tank-cleaning',
          'en-cm': 'https://www.spray.com/en-cm/products/tank-cleaning',
          'fr-mg': 'https://www.spray.com/fr-mg/produits/tank-cleaning',
          'en-iq': 'https://www.spray.com/en-iq/products/tank-cleaning',
          'en-sn': 'https://www.spray.com/en-sn/products/tank-cleaning',
          'fr-tn': 'https://www.spray.com/fr-tn/produits/tank-cleaning',
          'en-dz': 'https://www.spray.com/en-dz/products/tank-cleaning',
          'en-jo': 'https://www.spray.com/en-jo/products/tank-cleaning',
          'en-eg': 'https://www.spray.com/en-eg/products/tank-cleaning',
          'en-ke': 'https://www.spray.com/en-ke/products/tank-cleaning',
          'en-om': 'https://www.spray.com/en-om/products/tank-cleaning',
          'en-kw': 'https://www.spray.com/en-kw/products/tank-cleaning',
          'fr-cd': 'https://www.spray.com/fr-cd/produits/tank-cleaning',
          'en-lb': 'https://www.spray.com/en-lb/products/tank-cleaning',
          'en-pk': 'https://www.spray.com/en-pk/products/tank-cleaning',
          'en-lv': 'https://www.spray.com/en-lv/products/tank-cleaning',
          'en-qa': 'https://www.spray.com/en-qa/products/tank-cleaning',
          'it-ch': 'https://www.spray.com/it-ch/products/tank-cleaning',
          'en-in': 'https://www.spray.com/en-in/products/tank-cleaning',
          'fr-be': 'https://www.spray.com/fr-be/produits/tank-cleaning',
          'nb-no': 'https://www.spray.com/nb-no/produkter/tankrengjøring',
          'it-it': 'https://www.spray.com/it-it/products/tank-cleaning',
          'sv-se': 'https://www.spray.com/sv-se/produkter/rengöring-av-tankar',
          'en-es': 'https://www.spray.com/en-es/products/tank-cleaning',
          'en-hu': 'https://www.spray.com/en-hu/products/tank-cleaning',
          'en-it': 'https://www.spray.com/en-it/products/tank-cleaning',
          'en-nl': 'https://www.spray.com/en-nl/products/tank-cleaning',
          'en-no': 'https://www.spray.com/en-no/products/tank-cleaning',
          'en-pl': 'https://www.spray.com/en-pl/products/tank-cleaning',
          'en-ro': 'https://www.spray.com/en-ro/products/tank-cleaning',
          'en-se': 'https://www.spray.com/en-se/products/tank-cleaning',
          'en-tr': 'https://www.spray.com/en-tr/products/tank-cleaning',
          'en-de': 'https://www.spray.com/en-de/products/tank-cleaning',
          'en-fi': 'https://www.spray.com/en-fi/products/tank-cleaning',
          'en-fr': 'https://www.spray.com/en-fr/products/tank-cleaning',
          'en-gb': 'https://www.spray.com/en-gb/products/tank-cleaning',
          'en-gr': 'https://www.spray.com/en-gr/products/tank-cleaning',
          'en-vn': 'https://www.spray.com/en-vn/products/tank-cleaning',
          'en-hk': 'https://www.spray.com/en-hk/products/tank-cleaning',
          'en-ph': 'https://www.spray.com/en-ph/products/tank-cleaning',
          en: 'https://www.spray.com/products/tank-cleaning',
          'x-default': 'https://www.spray.com/products/tank-cleaning'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.productCategories.items
            .sprayControlOptions,
        links: {
          'x-default': 'https://www.spray.com/products/spray-control-options',
          'zh-cn': 'https://www.spray.com/zh-cn/产品/spray-control-options',
          'ja-jp':
            'https://www.spray.co.jp/automated_systems/spray_control_overview.aspx',
          'ru-ua':
            'https://www.spray.com.ua/automated_systems/spray_control_overview.aspx',
          'pt-br':
            'https://www.spray.com.br/produtos/autojet-controle-pulverizacao.aspx',
          'fr-ch':
            'https://www.spray.com/fr-ch/produits/options-de-controle-de-la-pulverisation',
          'de-at': 'https://www.spray.com/de-at/produkte/spray-control-options',
          'de-de': 'https://www.spray.com/de-de/produkte/spray-control-options',
          'el-gr':
            'https://www.spray.com/el-gr/products/επιλογές-ελέγχου-ψεκασμού',
          'ko-kr': 'https://www.spray.com/ko-kr/products/spray-control-options',
          'ru-kz':
            'https://www.spray.com/ru-kz/продукты/варианты-управления-распылением',
          'ru-ru':
            'https://www.spray.com/ru-ru/продукты/варианты-управления-распылением',
          'es-co':
            'https://www.spray.com/es-co/productos/opciones-para-control-de-la-pulverización',
          'bg-bg':
            'https://www.spray.com/bg-bg/продукти/опции-за-управление-на-пръскането',
          'en-za': 'https://www.spray.com/en-za/products/spray-control-options',
          'sl-si':
            'https://www.spray.com/sl-si/izdelki/možnosti-nadzora-razprševanja',
          'cs-cz': 'https://www.spray.com/cs-cz/products/spray-control-options',
          'nl-nl': 'https://www.spray.com/nl-nl/producten/sproeiregeling',
          'en-ae': 'https://www.spray.com/en-ae/products/spray-control-options',
          'en-au': 'https://www.spray.com/en-au/products/spray-control-options',
          'en-ca': 'https://www.spray.com/en-ca/products/spray-control-options',
          'pl-pl': 'https://www.spray.com/pl-pl/products/spray-control-options',
          'ro-ro': 'https://www.spray.com/ro-ro/products/spray-control-options',
          'es-ar':
            'https://www.spray.com/es-ar/productos/opciones-para-control-de-la-pulverización',
          'es-cl':
            'https://www.spray.com/es-cl/productos/opciones-para-control-de-la-pulverización',
          'es-ec':
            'https://www.spray.com/es-ec/productos/opciones-para-control-de-la-pulverización',
          'es-mx':
            'https://www.spray.com/es-mx/productos/opciones-para-control-de-la-aspersión',
          'tr-tr': 'https://www.spray.com/tr-tr/urunler/spray-control-options',
          'en-be': 'https://www.spray.com/en-be/products/spray-control-options',
          'en-my': 'https://www.spray.com/en-my/products/spray-control-options',
          'en-at': 'https://www.spray.com/en-at/products/spray-control-options',
          'hu-hu': 'https://www.spray.com/hu-hu/termékek/spray-control-opciók',
          'es-pe':
            'https://www.spray.com/es-pe/productos/opciones-para-control-de-la-pulverización',
          'es-es':
            'https://www.spray.com/es-es/productos/spray-control-options',
          'de-be': 'https://www.spray.com/de-be/produkte/spray-control-options',
          'nl-be': 'https://www.spray.com/nl-be/producten/sproeiregeling',
          'en-nz': 'https://www.spray.com/en-nz/products/spray-control-options',
          'fi-fi':
            'https://www.spray.com/fi-fi/tuotteet/ruiskutuksen-automatisointi--ja-ohjausvaihtoehdot',
          'fr-ca':
            'https://www.spray.com/fr-ca/produits/options-de-contrôle-de-la-pulvérisation',
          'fr-fr':
            'https://www.spray.com/fr-fr/produits/options-de-controle-de-la-pulverisation',
          'en-id': 'https://www.spray.com/en-id/products/spray-control-options',
          'en-ch': 'https://www.spray.com/en-ch/products/spray-control-options',
          'en-cz': 'https://www.spray.com/en-cz/products/spray-control-options',
          'de-ch': 'https://www.spray.com/de-ch/produkte/spray-control-options',
          'en-sg': 'https://www.spray.com/en-sg/products/spray-control-options',
          'et-ee':
            'https://www.spray.com/et-ee/tooted/pihustuskontrolli-võimalused',
          'sk-sk':
            'https://www.spray.com/sk-sk/produkty/možnosti-ovládania-postreku',
          'lt-lt':
            'https://www.spray.com/lt-lt/produktai/purškimo-valdymo-parinktys',
          'lv-lv':
            'https://www.spray.com/lv-lv/produkti/izsmidzināšanas-kontroles-opcijas',
          'en-ma': 'https://www.spray.com/en-ma/products/spray-control-options',
          'en-cd': 'https://www.spray.com/en-cd/products/spray-control-options',
          'en-sk': 'https://www.spray.com/en-sk/products/spray-control-options',
          'fr-sn':
            'https://www.spray.com/fr-sn/produits/options-de-controle-de-la-pulverisation',
          'en-tn': 'https://www.spray.com/en-tn/products/spray-control-options',
          'en-zm': 'https://www.spray.com/en-zm/products/spray-control-options',
          'en-lt': 'https://www.spray.com/en-lt/products/spray-control-options',
          'fr-ci':
            'https://www.spray.com/fr-ci/produits/options-de-controle-de-la-pulverisation',
          'en-bh': 'https://www.spray.com/en-bh/products/spray-control-options',
          'fr-cm':
            'https://www.spray.com/fr-cm/produits/options-de-controle-de-la-pulverisation',
          'en-mg': 'https://www.spray.com/en-mg/products/spray-control-options',
          'en-sa': 'https://www.spray.com/en-sa/products/spray-control-options',
          'fr-dz':
            'https://www.spray.com/fr-dz/produits/options-de-controle-de-la-pulverisation',
          'en-ci': 'https://www.spray.com/en-ci/products/spray-control-options',
          'en-ng': 'https://www.spray.com/en-ng/products/spray-control-options',
          'fr-ma':
            'https://www.spray.com/fr-ma/produits/options-de-controle-de-la-pulverisation',
          'en-cm': 'https://www.spray.com/en-cm/products/spray-control-options',
          'fr-mg':
            'https://www.spray.com/fr-mg/produits/options-de-controle-de-la-pulverisation',
          'en-iq': 'https://www.spray.com/en-iq/products/spray-control-options',
          'en-sn': 'https://www.spray.com/en-sn/products/spray-control-options',
          'fr-tn':
            'https://www.spray.com/fr-tn/produits/options-de-controle-de-la-pulverisation',
          'en-dz': 'https://www.spray.com/en-dz/products/spray-control-options',
          'en-jo': 'https://www.spray.com/en-jo/products/spray-control-options',
          'en-eg': 'https://www.spray.com/en-eg/products/spray-control-options',
          'en-ke': 'https://www.spray.com/en-ke/products/spray-control-options',
          'en-om': 'https://www.spray.com/en-om/products/spray-control-options',
          'en-kw': 'https://www.spray.com/en-kw/products/spray-control-options',
          'fr-cd':
            'https://www.spray.com/fr-cd/produits/options-de-controle-de-la-pulverisation',
          'en-lb': 'https://www.spray.com/en-lb/products/spray-control-options',
          'en-pk': 'https://www.spray.com/en-pk/products/spray-control-options',
          'en-lv': 'https://www.spray.com/en-lv/products/spray-control-options',
          'en-qa': 'https://www.spray.com/en-qa/products/spray-control-options',
          'it-ch': 'https://www.spray.com/it-ch/products/spray-control-options',
          'en-in': 'https://www.spray.com/en-in/products/spray-control-options',
          'fr-be':
            'https://www.spray.com/fr-be/produits/options-de-controle-de-la-pulverisation',
          'nb-no':
            'https://www.spray.com/nb-no/produkter/spraykontrollalternativer',
          'it-it': 'https://www.spray.com/it-it/products/spray-control-options',
          'sv-se':
            'https://www.spray.com/sv-se/produkter/alternativ-för-spraystyrning',
          'en-es': 'https://www.spray.com/en-es/products/spray-control-options',
          'en-hu': 'https://www.spray.com/en-hu/products/spray-control-options',
          'en-it': 'https://www.spray.com/en-it/products/spray-control-options',
          'en-nl': 'https://www.spray.com/en-nl/products/spray-control-options',
          'en-no': 'https://www.spray.com/en-no/products/spray-control-options',
          'en-pl': 'https://www.spray.com/en-pl/products/spray-control-options',
          'en-ro': 'https://www.spray.com/en-ro/products/spray-control-options',
          'en-se': 'https://www.spray.com/en-se/products/spray-control-options',
          'en-tr': 'https://www.spray.com/en-tr/products/spray-control-options',
          'en-de': 'https://www.spray.com/en-de/products/spray-control-options',
          'en-fi': 'https://www.spray.com/en-fi/products/spray-control-options',
          'en-fr': 'https://www.spray.com/en-fr/products/spray-control-options',
          'en-gb': 'https://www.spray.com/en-gb/products/spray-control-options',
          'en-gr': 'https://www.spray.com/en-gr/products/spray-control-options',
          'en-vn': 'https://www.spray.com/en-vn/products/spray-control-options',
          'en-hk': 'https://www.spray.com/en-hk/products/spray-control-options',
          'en-ph': 'https://www.spray.com/en-ph/products/spray-control-options',
          en: 'https://www.spray.com/products/spray-control-options'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.productCategories.items
            .automatedSpraySystems,
        links: {
          'x-default':
            'https://www.spray.com/products/application-specific-automated-spray-systems',
          'zh-cn':
            'https://www.spray.com/zh-cn/产品/application-specific-automated-spray-systems',
          'ja-jp':
            'https://www.spray.co.jp/automated_systems/systems_more.aspx',
          'ru-ua':
            'https://www.spray.com.ua/automated_systems/systems_more.aspx',
          'pt-br':
            'https://www.spray.com.br/sistemas-pulverizacao/sistemas-pulverizacao.aspx',
          'fr-ch':
            'https://www.spray.com/fr-ch/produits/systemes-de-pulverisation-automatique-specifiques-a-lapplication',
          'de-at':
            'https://www.spray.com/de-at/produkte/application-specific-automated-spray-systems',
          'de-de':
            'https://www.spray.com/de-de/produkte/application-specific-automated-spray-systems',
          'el-gr':
            'https://www.spray.com/el-gr/products/αυτοματοποιημένα-συστήματα-ψεκασμού',
          'ko-kr':
            'https://www.spray.com/ko-kr/products/application-specific-automated-spray-systems',
          'ru-kz':
            'https://www.spray.com/ru-kz/продукты/автоматизированные-системы-распыления-для-конкретных-областей-применения',
          'ru-ru':
            'https://www.spray.com/ru-ru/продукты/автоматизированные-системы-распыления-для-конкретных-областей-применения',
          'es-co':
            'https://www.spray.com/es-co/productos/aplicaciones---sistemas-específicos-de-pulverización-automatizada',
          'bg-bg':
            'https://www.spray.com/bg-bg/продукти/автоматизирани-системи-за-пръскане,-специфични-за-дадено-приложение',
          'en-za':
            'https://www.spray.com/en-za/products/application-specific-automated-spray-systems',
          'sl-si':
            'https://www.spray.com/sl-si/izdelki/avtomatizirani-razpršilni-sistemi,-prilagojeni-posameznim-aplikacijam',
          'cs-cz':
            'https://www.spray.com/cs-cz/products/application-specific-automated-spray-systems',
          'nl-nl':
            'https://www.spray.com/nl-nl/producten/toepassingsspecifieke-automatische-sproeisystemen',
          'en-ae':
            'https://www.spray.com/en-ae/products/application-specific-automated-spray-systems',
          'en-au':
            'https://www.spray.com/en-au/products/application-specific-automated-spray-systems',
          'en-ca':
            'https://www.spray.com/en-ca/products/application-specific-automated-spray-systems',
          'pl-pl':
            'https://www.spray.com/pl-pl/products/application-specific-automated-spray-systems',
          'ro-ro':
            'https://www.spray.com/ro-ro/products/sisteme-automate-de-pulverizare-specifice-aplicațiilor',
          'es-ar':
            'https://www.spray.com/es-ar/productos/aplicaciones---sistemas-específicos-de-pulverización-automatizada',
          'es-cl':
            'https://www.spray.com/es-cl/productos/aplicaciones---sistemas-específicos-de-pulverización-automatizada',
          'es-ec':
            'https://www.spray.com/es-ec/productos/aplicaciones---sistemas-específicos-de-pulverización-automatizada',
          'es-mx':
            'https://www.spray.com/es-mx/productos/aplicaciones---sistemas-específicos-de-aspersión-automatizada',
          'tr-tr':
            'https://www.spray.com/tr-tr/urunler/uygulamalar-spesifik-otomatik-puskurtme-sistemleri',
          'en-be':
            'https://www.spray.com/en-be/products/application-specific-automated-spray-systems',
          'en-my':
            'https://www.spray.com/en-my/products/application-specific-automated-spray-systems',
          'en-at':
            'https://www.spray.com/en-at/products/application-specific-automated-spray-systems',
          'hu-hu':
            'https://www.spray.com/hu-hu/termékek/alkalmazás-specifikus-automatizált-permetező-rendszerek',
          'es-pe':
            'https://www.spray.com/es-pe/productos/aplicaciones---sistemas-específicos-de-pulverización-automatizada',
          'es-es':
            'https://www.spray.com/es-es/productos/sistemas-automaticos-de-pulverizacion-para-aplicaciones-especificas',
          'de-be':
            'https://www.spray.com/de-be/produkte/application-specific-automated-spray-systems',
          'nl-be':
            'https://www.spray.com/nl-be/producten/toepassingsspecifieke-automatische-sproeisystemen',
          'en-nz':
            'https://www.spray.com/en-nz/products/application-specific-automated-spray-systems',
          'fi-fi':
            'https://www.spray.com/fi-fi/tuotteet/automatisoidut-ruiskutusjarjestelmat',
          'fr-ca':
            'https://www.spray.com/fr-ca/produits/systèmes-de-pulvérisation-automatisés-spécifiques-à-votre-application',
          'fr-fr':
            'https://www.spray.com/fr-fr/produits/systemes-de-pulverisation-automatique-specifiques-a-lapplication',
          'en-id':
            'https://www.spray.com/en-id/products/application-specific-automated-spray-systems',
          'en-ch':
            'https://www.spray.com/en-ch/products/application-specific-automated-spray-systems',
          'en-cz':
            'https://www.spray.com/en-cz/products/application-specific-automated-spray-systems',
          'de-ch':
            'https://www.spray.com/de-ch/produkte/application-specific-automated-spray-systems',
          'en-sg':
            'https://www.spray.com/en-sg/products/application-specific-automated-spray-systems',
          'et-ee':
            'https://www.spray.com/et-ee/tooted/rakendusspetsiifilised-automatiseeritud-pihustussüsteemid',
          'sk-sk':
            'https://www.spray.com/sk-sk/produkty/automatizované-postrekovacie-systémy-špecifické-pre-danú-aplikáciu',
          'lt-lt':
            'https://www.spray.com/lt-lt/produktai/specifinėms-reikmėms-pritaikytos-automatizuotos-purškimo-sistemos',
          'lv-lv':
            'https://www.spray.com/lv-lv/produkti/automatizētās-izsmidzināšanas-sistēmas,-kas-paredzētas-konkrētiem-lietojumiem',
          'en-ma':
            'https://www.spray.com/en-ma/products/application-specific-automated-spray-systems',
          'en-cd':
            'https://www.spray.com/en-cd/products/application-specific-automated-spray-systems',
          'en-sk':
            'https://www.spray.com/en-sk/products/application-specific-automated-spray-systems',
          'fr-sn':
            'https://www.spray.com/fr-sn/produits/systemes-de-pulverisation-automatique-specifiques-a-lapplication',
          'en-tn':
            'https://www.spray.com/en-tn/products/application-specific-automated-spray-systems',
          'en-zm':
            'https://www.spray.com/en-zm/products/application-specific-automated-spray-systems',
          'en-lt':
            'https://www.spray.com/en-lt/products/application-specific-automated-spray-systems',
          'fr-ci':
            'https://www.spray.com/fr-ci/produits/systemes-de-pulverisation-automatique-specifiques-a-lapplication',
          'en-bh':
            'https://www.spray.com/en-bh/products/application-specific-automated-spray-systems',
          'fr-cm':
            'https://www.spray.com/fr-cm/produits/systemes-de-pulverisation-automatique-specifiques-a-lapplication',
          'en-mg':
            'https://www.spray.com/en-mg/products/application-specific-automated-spray-systems',
          'en-sa':
            'https://www.spray.com/en-sa/products/application-specific-automated-spray-systems',
          'fr-dz':
            'https://www.spray.com/fr-dz/produits/systemes-de-pulverisation-automatique-specifiques-a-lapplication',
          'en-ci':
            'https://www.spray.com/en-ci/products/application-specific-automated-spray-systems',
          'en-ng':
            'https://www.spray.com/en-ng/products/application-specific-automated-spray-systems',
          'fr-ma':
            'https://www.spray.com/fr-ma/produits/systemes-de-pulverisation-automatique-specifiques-a-lapplication',
          'en-cm':
            'https://www.spray.com/en-cm/products/application-specific-automated-spray-systems',
          'fr-mg':
            'https://www.spray.com/fr-mg/produits/systemes-de-pulverisation-automatique-specifiques-a-lapplication',
          'en-iq':
            'https://www.spray.com/en-iq/products/application-specific-automated-spray-systems',
          'en-sn':
            'https://www.spray.com/en-sn/products/application-specific-automated-spray-systems',
          'fr-tn':
            'https://www.spray.com/fr-tn/produits/systemes-de-pulverisation-automatique-specifiques-a-lapplication',
          'en-dz':
            'https://www.spray.com/en-dz/products/application-specific-automated-spray-systems',
          'en-jo':
            'https://www.spray.com/en-jo/products/application-specific-automated-spray-systems',
          'en-eg':
            'https://www.spray.com/en-eg/products/application-specific-automated-spray-systems',
          'en-ke':
            'https://www.spray.com/en-ke/products/application-specific-automated-spray-systems',
          'en-om':
            'https://www.spray.com/en-om/products/application-specific-automated-spray-systems',
          'en-kw':
            'https://www.spray.com/en-kw/products/application-specific-automated-spray-systems',
          'fr-cd':
            'https://www.spray.com/fr-cd/produits/systemes-de-pulverisation-automatique-specifiques-a-lapplication',
          'en-lb':
            'https://www.spray.com/en-lb/products/application-specific-automated-spray-systems',
          'en-pk':
            'https://www.spray.com/en-pk/products/application-specific-automated-spray-systems',
          'en-lv':
            'https://www.spray.com/en-lv/products/application-specific-automated-spray-systems',
          'en-qa':
            'https://www.spray.com/en-qa/products/application-specific-automated-spray-systems',
          'it-ch':
            'https://www.spray.com/it-ch/products/application-specific-automated-spray-systems',
          'en-in':
            'https://www.spray.com/en-in/products/application-specific-automated-spray-systems',
          'fr-be':
            'https://www.spray.com/fr-be/produits/systemes-de-pulverisation-automatique-specifiques-a-lapplication',
          'nb-no':
            'https://www.spray.com/nb-no/produkter/bruksspesifikke-automatiserte-sprøytesystemer',
          'it-it':
            'https://www.spray.com/it-it/products/application-specific-automated-spray-systems',
          'sv-se':
            'https://www.spray.com/sv-se/produkter/applikationsspecifika-automatiserade-sprutsystem',
          'en-es':
            'https://www.spray.com/en-es/products/application-specific-automated-spray-systems',
          'en-hu':
            'https://www.spray.com/en-hu/products/application-specific-automated-spray-systems',
          'en-it':
            'https://www.spray.com/en-it/products/application-specific-automated-spray-systems',
          'en-nl':
            'https://www.spray.com/en-nl/products/application-specific-automated-spray-systems',
          'en-no':
            'https://www.spray.com/en-no/products/application-specific-automated-spray-systems',
          'en-pl':
            'https://www.spray.com/en-pl/products/application-specific-automated-spray-systems',
          'en-ro':
            'https://www.spray.com/en-ro/products/application-specific-automated-spray-systems',
          'en-se':
            'https://www.spray.com/en-se/products/application-specific-automated-spray-systems',
          'en-tr':
            'https://www.spray.com/en-tr/products/application-specific-automated-spray-systems',
          'en-de':
            'https://www.spray.com/en-de/products/application-specific-automated-spray-systems',
          'en-fi':
            'https://www.spray.com/en-fi/products/application-specific-automated-spray-systems',
          'en-fr':
            'https://www.spray.com/en-fr/products/application-specific-automated-spray-systems',
          'en-gb':
            'https://www.spray.com/en-gb/products/application-specific-automated-spray-systems',
          'en-gr':
            'https://www.spray.com/en-gr/products/application-specific-automated-spray-systems',
          'en-vn':
            'https://www.spray.com/en-vn/products/application-specific-automated-spray-systems',
          'en-hk':
            'https://www.spray.com/en-hk/products/application-specific-automated-spray-systems',
          'en-ph':
            'https://www.spray.com/en-ph/products/application-specific-automated-spray-systems',
          en: 'https://www.spray.com/products/application-specific-automated-spray-systems'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.productCategories.items
            .disinfectionSystems,
        links: {
          'pt-br':
            'https://www.spray.com.br/produtos/fogjet-sistemas-desinfeccao.aspx',
          'fr-ch':
            'https://www.spray.com/fr-ch/produits/serie-de-desinfection-fogjet',
          'de-at':
            'https://www.spray.com/de-at/produkte/fogjet-disinfection-series',
          'de-de':
            'https://www.spray.com/de-de/produkte/fogjet-disinfection-series',
          'el-gr': 'https://www.spray.com/el-gr/products/συστήματα-απολύμανσης',
          'ko-kr':
            'https://www.spray.com/ko-kr/products/fogjet-disinfection-series',
          'ru-kz':
            'https://www.spray.com/ru-kz/продукты/серия-для-дезинфекции-fogjet',
          'ru-ru':
            'https://www.spray.com/ru-ru/продукты/серия-для-дезинфекции-fogjet',
          'es-co':
            'https://www.spray.com/es-co/productos/serie-de-productos-fogjet-para-desinfección',
          'bg-bg':
            'https://www.spray.com/bg-bg/продукти/серия-за-дезинфекция-fogjet',
          'en-za':
            'https://www.spray.com/en-za/products/fogjet-disinfection-series',
          'sl-si':
            'https://www.spray.com/sl-si/izdelki/serija-za-dezinfekcijo-fogjet',
          'cs-cz':
            'https://www.spray.com/cs-cz/products/fogjet-disinfection-series',
          'nl-nl':
            'https://www.spray.com/nl-nl/producten/fogjet-desinfectiesystemen',
          'en-ae':
            'https://www.spray.com/en-ae/products/fogjet-disinfection-series',
          'en-au':
            'https://www.spray.com/en-au/products/fogjet-disinfection-series',
          'en-ca':
            'https://www.spray.com/en-ca/products/fogjet-disinfection-series',
          'pl-pl':
            'https://www.spray.com/pl-pl/products/fogjet-disinfection-series',
          'ro-ro':
            'https://www.spray.com/ro-ro/products/fogjet-disinfection-series',
          'es-ar':
            'https://www.spray.com/es-ar/productos/serie-de-productos-fogjet-para-desinfección',
          'es-cl':
            'https://www.spray.com/es-cl/productos/serie-de-productos-fogjet-para-desinfección',
          'es-ec':
            'https://www.spray.com/es-ec/productos/serie-de-productos-fogjet-para-desinfección',
          'es-mx':
            'https://www.spray.com/es-mx/productos/serie-de-productos-fogjet-para-desinfección',
          'tr-tr':
            'https://www.spray.com/tr-tr/urunler/fogjet-disinfection-series',
          'en-be':
            'https://www.spray.com/en-be/products/fogjet-disinfection-series',
          'en-my':
            'https://www.spray.com/en-my/products/fogjet-disinfection-series',
          'en-at':
            'https://www.spray.com/en-at/products/fogjet-disinfection-series',
          'hu-hu':
            'https://www.spray.com/hu-hu/termékek/fogjet-fertőtlenítő-sorozat',
          'es-pe':
            'https://www.spray.com/es-pe/productos/serie-de-productos-fogjet-para-desinfección',
          'es-es':
            'https://www.spray.com/es-es/productos/serie-de-desinfección-fogjet',
          'zh-cn':
            'https://www.spray.com/zh-cn/产品/fogjet-disinfection-series',
          'de-be':
            'https://www.spray.com/de-be/produkte/fogjet-disinfection-series',
          'nl-be':
            'https://www.spray.com/nl-be/producten/fogjet-desinfectiesystemen',
          'en-nz':
            'https://www.spray.com/en-nz/products/fogjet-disinfection-series',
          'fi-fi':
            'https://www.spray.com/fi-fi/tuotteet/fogjet-desinfiointituotteet',
          'fr-ca':
            'https://www.spray.com/fr-ca/produits/série-fogjet-désinfection',
          'fr-fr':
            'https://www.spray.com/fr-fr/produits/serie-de-desinfection-fogjet',
          'en-id':
            'https://www.spray.com/en-id/products/fogjet-disinfection-series',
          'en-ch':
            'https://www.spray.com/en-ch/products/fogjet-disinfection-series',
          'en-cz':
            'https://www.spray.com/en-cz/products/fogjet-disinfection-series',
          'de-ch':
            'https://www.spray.com/de-ch/produkte/fogjet-disinfection-series',
          'en-sg':
            'https://www.spray.com/en-sg/products/fogjet-disinfection-series',
          'et-ee':
            'https://www.spray.com/et-ee/tooted/fogjet-desinfitseerimise-seeria',
          'sk-sk':
            'https://www.spray.com/sk-sk/produkty/séria-dezinfekčných-zariadení-fogjet',
          'lt-lt':
            'https://www.spray.com/lt-lt/produktai/fogjet-dezinfekavimo-serija',
          'lv-lv':
            'https://www.spray.com/lv-lv/produkti/fogjet-dezinfekcijas-sērija',
          'en-ma':
            'https://www.spray.com/en-ma/products/fogjet-disinfection-series',
          'en-cd':
            'https://www.spray.com/en-cd/products/fogjet-disinfection-series',
          'en-sk':
            'https://www.spray.com/en-sk/products/fogjet-disinfection-series',
          'fr-sn':
            'https://www.spray.com/fr-sn/produits/serie-de-desinfection-fogjet',
          'en-tn':
            'https://www.spray.com/en-tn/products/fogjet-disinfection-series',
          'en-zm':
            'https://www.spray.com/en-zm/products/fogjet-disinfection-series',
          'en-lt':
            'https://www.spray.com/en-lt/products/fogjet-disinfection-series',
          'fr-ci':
            'https://www.spray.com/fr-ci/produits/serie-de-desinfection-fogjet',
          'en-bh':
            'https://www.spray.com/en-bh/products/fogjet-disinfection-series',
          'fr-cm':
            'https://www.spray.com/fr-cm/produits/serie-de-desinfection-fogjet',
          'en-mg':
            'https://www.spray.com/en-mg/products/fogjet-disinfection-series',
          'en-sa':
            'https://www.spray.com/en-sa/products/fogjet-disinfection-series',
          'fr-dz':
            'https://www.spray.com/fr-dz/produits/serie-de-desinfection-fogjet',
          'en-ci':
            'https://www.spray.com/en-ci/products/fogjet-disinfection-series',
          'en-ng':
            'https://www.spray.com/en-ng/products/fogjet-disinfection-series',
          'fr-ma':
            'https://www.spray.com/fr-ma/produits/serie-de-desinfection-fogjet',
          'en-cm':
            'https://www.spray.com/en-cm/products/fogjet-disinfection-series',
          'fr-mg':
            'https://www.spray.com/fr-mg/produits/serie-de-desinfection-fogjet',
          'en-iq':
            'https://www.spray.com/en-iq/products/fogjet-disinfection-series',
          'en-sn':
            'https://www.spray.com/en-sn/products/fogjet-disinfection-series',
          'fr-tn':
            'https://www.spray.com/fr-tn/produits/serie-de-desinfection-fogjet',
          'en-dz':
            'https://www.spray.com/en-dz/products/fogjet-disinfection-series',
          'en-jo':
            'https://www.spray.com/en-jo/products/fogjet-disinfection-series',
          'en-eg':
            'https://www.spray.com/en-eg/products/fogjet-disinfection-series',
          'en-ke':
            'https://www.spray.com/en-ke/products/fogjet-disinfection-series',
          'en-om':
            'https://www.spray.com/en-om/products/fogjet-disinfection-series',
          'en-kw':
            'https://www.spray.com/en-kw/products/fogjet-disinfection-series',
          'fr-cd':
            'https://www.spray.com/fr-cd/produits/serie-de-desinfection-fogjet',
          'en-lb':
            'https://www.spray.com/en-lb/products/fogjet-disinfection-series',
          'en-pk':
            'https://www.spray.com/en-pk/products/fogjet-disinfection-series',
          'en-lv':
            'https://www.spray.com/en-lv/products/fogjet-disinfection-series',
          'en-qa':
            'https://www.spray.com/en-qa/products/fogjet-disinfection-series',
          'it-ch':
            'https://www.spray.com/it-ch/products/fogjet-disinfection-series',
          'en-in':
            'https://www.spray.com/en-in/products/fogjet-disinfection-series',
          'fr-be':
            'https://www.spray.com/fr-be/produits/serie-de-desinfection-fogjet',
          'nb-no':
            'https://www.spray.com/nb-no/produkter/fogjet-desinfeksjonsserie',
          'it-it':
            'https://www.spray.com/it-it/products/fogjet-disinfection-series',
          'sv-se':
            'https://www.spray.com/sv-se/produkter/fogjet-desinfektionsserie',
          'en-es':
            'https://www.spray.com/en-es/products/fogjet-disinfection-series',
          'en-hu':
            'https://www.spray.com/en-hu/products/fogjet-disinfection-series',
          'en-it':
            'https://www.spray.com/en-it/products/fogjet-disinfection-series',
          'en-nl':
            'https://www.spray.com/en-nl/products/fogjet-disinfection-series',
          'en-no':
            'https://www.spray.com/en-no/products/fogjet-disinfection-series',
          'en-pl':
            'https://www.spray.com/en-pl/products/fogjet-disinfection-series',
          'en-ro':
            'https://www.spray.com/en-ro/products/fogjet-disinfection-series',
          'en-se':
            'https://www.spray.com/en-se/products/fogjet-disinfection-series',
          'en-tr':
            'https://www.spray.com/en-tr/products/fogjet-disinfection-series',
          'en-de':
            'https://www.spray.com/en-de/products/fogjet-disinfection-series',
          'en-fi':
            'https://www.spray.com/en-fi/products/fogjet-disinfection-series',
          'en-fr':
            'https://www.spray.com/en-fr/products/fogjet-disinfection-series',
          'en-gb':
            'https://www.spray.com/en-gb/products/fogjet-disinfection-series',
          'en-gr':
            'https://www.spray.com/en-gr/products/fogjet-disinfection-series',
          'en-vn':
            'https://www.spray.com/en-vn/products/fogjet-disinfection-series',
          'en-hk':
            'https://www.spray.com/en-hk/products/fogjet-disinfection-series',
          'en-ph':
            'https://www.spray.com/en-ph/products/fogjet-disinfection-series',
          en: 'https://www.spray.com/products/fogjet-disinfection-series',
          'x-default':
            'https://www.spray.com/products/fogjet-disinfection-series'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.productCategories.items
            .sprayLancesAndHeaders,
        links: {
          'x-default':
            'https://www.spray.com/products/spray-lances-and-headers',
          'vi-vn':
            'https://www.spray.com.vn/fabricated_products/spray_fabrication_overview.aspx',
          'ko-kr':
            'https://www.spray.com/ko-kr/products/spray-lances-and-headers',
          'zh-cn': 'https://www.spray.com/zh-cn/产品/spray-lances-and-headers',
          'es-co':
            'https://www.spray.com/es-co/productos/lanzas-y-cabezales-de-pulverización',
          'es-pe':
            'https://www.spray.com/es-pe/productos/lanzas-y-cabezales-de-pulverización',
          'es-cl':
            'https://www.spray.com/es-cl/productos/lanzas-y-cabezales-de-pulverización',
          'es-ec':
            'https://www.spray.com/es-ec/productos/lanzas-y-cabezales-de-pulverización',
          'ja-jp':
            'https://www.spray.co.jp/fabricated_products/spray_fabrication_overview.aspx',
          'ru-ua':
            'https://www.spray.com.ua/fabricated_products/spray_fabrication_overview.aspx',
          'pt-br':
            'https://www.spray.com.br/produtos/lancas-cabecotes-pulverizacao.aspx',
          'fr-ch':
            'https://www.spray.com/fr-ch/produits/lances-et-en-tetes-de-pulverisation',
          'de-at':
            'https://www.spray.com/de-at/produkte/spray-lances-and-headers',
          'de-de':
            'https://www.spray.com/de-de/produkte/spray-lances-and-headers',
          'el-gr':
            'https://www.spray.com/el-gr/products/spray-lances-and-headers',
          'ru-kz':
            'https://www.spray.com/ru-kz/продукты/распылительные-инжекторы-и-коллекторы',
          'ru-ru':
            'https://www.spray.com/ru-ru/продукты/распылительные-инжекторы-и-коллекторы',
          'bg-bg': 'https://www.spray.com/bg-bg/продукти/разпръсквачи-и-глави',
          'en-za':
            'https://www.spray.com/en-za/products/spray-lances-and-headers',
          'sl-si':
            'https://www.spray.com/sl-si/izdelki/razpršilne-cevi-in-glave',
          'cs-cz':
            'https://www.spray.com/cs-cz/products/spray-lances-and-headers',
          'nl-nl':
            'https://www.spray.com/nl-nl/producten/sproeilansen-en-headers',
          'en-ae':
            'https://www.spray.com/en-ae/products/spray-lances-and-headers',
          'en-au':
            'https://www.spray.com/en-au/products/spray-lances-and-headers',
          'en-ca':
            'https://www.spray.com/en-ca/products/spray-lances-and-headers',
          'pl-pl':
            'https://www.spray.com/pl-pl/products/spray-lances-and-headers',
          'ro-ro':
            'https://www.spray.com/ro-ro/products/spray-lances-and-headers',
          'es-ar':
            'https://www.spray.com/es-ar/productos/lanzas-y-cabezales-de-pulverización',
          'es-mx':
            'https://www.spray.com/es-mx/productos/lanzas-y-cabezales-de-aspersión',
          'tr-tr':
            'https://www.spray.com/tr-tr/urunler/spray-lances-and-headers',
          'en-be':
            'https://www.spray.com/en-be/products/spray-lances-and-headers',
          'en-my':
            'https://www.spray.com/en-my/products/spray-lances-and-headers',
          'en-at':
            'https://www.spray.com/en-at/products/spray-lances-and-headers',
          'hu-hu':
            'https://www.spray.com/hu-hu/termékek/spray-lándzsák-és-fejlécek',
          'es-es':
            'https://www.spray.com/es-es/productos/spray-lances-and-headers',
          'de-be':
            'https://www.spray.com/de-be/produkte/spray-lances-and-headers',
          'nl-be':
            'https://www.spray.com/nl-be/producten/sproeilansen-en-headers',
          'en-nz':
            'https://www.spray.com/en-nz/products/spray-lances-and-headers',
          'fi-fi':
            'https://www.spray.com/fi-fi/tuotteet/spray-lances-and-headers',
          'fr-ca':
            'https://www.spray.com/fr-ca/produits/lances-et-rampes-de-pulvérisation',
          'fr-fr':
            'https://www.spray.com/fr-fr/produits/lances-et-en-tetes-de-pulverisation',
          'en-id':
            'https://www.spray.com/en-id/products/spray-lances-and-headers',
          'en-ch':
            'https://www.spray.com/en-ch/products/spray-lances-and-headers',
          'en-cz':
            'https://www.spray.com/en-cz/products/spray-lances-and-headers',
          'de-ch':
            'https://www.spray.com/de-ch/produkte/spray-lances-and-headers',
          'en-sg':
            'https://www.spray.com/en-sg/products/spray-lances-and-headers',
          'et-ee':
            'https://www.spray.com/et-ee/tooted/pihustuslaternad-ja-otsikud',
          'sk-sk':
            'https://www.spray.com/sk-sk/produkty/postrekovacie-lance-a-hlavice',
          'lt-lt':
            'https://www.spray.com/lt-lt/produktai/purkštuvai-ir-antgaliai',
          'lv-lv':
            'https://www.spray.com/lv-lv/produkti/izsmidzināšanas-lances-un-uzgaļi',
          'en-ma':
            'https://www.spray.com/en-ma/products/spray-lances-and-headers',
          'en-cd':
            'https://www.spray.com/en-cd/products/spray-lances-and-headers',
          'en-sk':
            'https://www.spray.com/en-sk/products/spray-lances-and-headers',
          'fr-sn':
            'https://www.spray.com/fr-sn/produits/lances-et-en-tetes-de-pulverisation',
          'en-tn':
            'https://www.spray.com/en-tn/products/spray-lances-and-headers',
          'en-zm':
            'https://www.spray.com/en-zm/products/spray-lances-and-headers',
          'en-lt':
            'https://www.spray.com/en-lt/products/spray-lances-and-headers',
          'fr-ci':
            'https://www.spray.com/fr-ci/produits/lances-et-en-tetes-de-pulverisation',
          'en-bh':
            'https://www.spray.com/en-bh/products/spray-lances-and-headers',
          'fr-cm':
            'https://www.spray.com/fr-cm/produits/lances-et-en-tetes-de-pulverisation',
          'en-mg':
            'https://www.spray.com/en-mg/products/spray-lances-and-headers',
          'en-sa':
            'https://www.spray.com/en-sa/products/spray-lances-and-headers',
          'fr-dz':
            'https://www.spray.com/fr-dz/produits/lances-et-en-tetes-de-pulverisation',
          'en-ci':
            'https://www.spray.com/en-ci/products/spray-lances-and-headers',
          'en-ng':
            'https://www.spray.com/en-ng/products/spray-lances-and-headers',
          'fr-ma':
            'https://www.spray.com/fr-ma/produits/lances-et-en-tetes-de-pulverisation',
          'en-cm':
            'https://www.spray.com/en-cm/products/spray-lances-and-headers',
          'fr-mg':
            'https://www.spray.com/fr-mg/produits/lances-et-en-tetes-de-pulverisation',
          'en-iq':
            'https://www.spray.com/en-iq/products/spray-lances-and-headers',
          'en-sn':
            'https://www.spray.com/en-sn/products/spray-lances-and-headers',
          'fr-tn':
            'https://www.spray.com/fr-tn/produits/lances-et-en-tetes-de-pulverisation',
          'en-dz':
            'https://www.spray.com/en-dz/products/spray-lances-and-headers',
          'en-jo':
            'https://www.spray.com/en-jo/products/spray-lances-and-headers',
          'en-eg':
            'https://www.spray.com/en-eg/products/spray-lances-and-headers',
          'en-ke':
            'https://www.spray.com/en-ke/products/spray-lances-and-headers',
          'en-om':
            'https://www.spray.com/en-om/products/spray-lances-and-headers',
          'en-kw':
            'https://www.spray.com/en-kw/products/spray-lances-and-headers',
          'fr-cd':
            'https://www.spray.com/fr-cd/produits/lances-et-en-tetes-de-pulverisation',
          'en-lb':
            'https://www.spray.com/en-lb/products/spray-lances-and-headers',
          'en-pk':
            'https://www.spray.com/en-pk/products/spray-lances-and-headers',
          'en-lv':
            'https://www.spray.com/en-lv/products/spray-lances-and-headers',
          'en-qa':
            'https://www.spray.com/en-qa/products/spray-lances-and-headers',
          'it-ch':
            'https://www.spray.com/it-ch/products/spray-lances-and-headers',
          'en-in':
            'https://www.spray.com/en-in/products/spray-lances-and-headers',
          'fr-be':
            'https://www.spray.com/fr-be/produits/lances-et-en-tetes-de-pulverisation',
          'nb-no':
            'https://www.spray.com/nb-no/produkter/spray-lanser-og-headers',
          'it-it':
            'https://www.spray.com/it-it/products/spray-lances-and-headers',
          'sv-se':
            'https://www.spray.com/sv-se/produkter/sprutlansar-och-huvuden',
          'en-es':
            'https://www.spray.com/en-es/products/spray-lances-and-headers',
          'en-hu':
            'https://www.spray.com/en-hu/products/spray-lances-and-headers',
          'en-it':
            'https://www.spray.com/en-it/products/spray-lances-and-headers',
          'en-nl':
            'https://www.spray.com/en-nl/products/spray-lances-and-headers',
          'en-no':
            'https://www.spray.com/en-no/products/spray-lances-and-headers',
          'en-pl':
            'https://www.spray.com/en-pl/products/spray-lances-and-headers',
          'en-ro':
            'https://www.spray.com/en-ro/products/spray-lances-and-headers',
          'en-se':
            'https://www.spray.com/en-se/products/spray-lances-and-headers',
          'en-tr':
            'https://www.spray.com/en-tr/products/spray-lances-and-headers',
          'en-de':
            'https://www.spray.com/en-de/products/spray-lances-and-headers',
          'en-fi':
            'https://www.spray.com/en-fi/products/spray-lances-and-headers',
          'en-fr':
            'https://www.spray.com/en-fr/products/spray-lances-and-headers',
          'en-gb':
            'https://www.spray.com/en-gb/products/spray-lances-and-headers',
          'en-gr':
            'https://www.spray.com/en-gr/products/spray-lances-and-headers',
          'en-vn':
            'https://www.spray.com/en-vn/products/spray-lances-and-headers',
          'en-hk':
            'https://www.spray.com/en-hk/products/spray-lances-and-headers',
          'en-ph':
            'https://www.spray.com/en-ph/products/spray-lances-and-headers',
          en: 'https://www.spray.com/products/spray-lances-and-headers'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.productCategories.items.accessories,
        links: {
          'x-default': 'https://www.spray.com/products/nozzles/accessories',
          'zh-cn': 'https://www.spray.com/zh-cn/产品/nozzles/accessories',
          'ru-ru': 'https://www.spray.com/ru-ru/продукты/форсунки/аксессуары',
          'ja-jp':
            'https://www.spray.co.jp/spray_nozzles/accessories/accessories_strainers.aspx',
          'ru-ua':
            'https://www.spray.com.ua/spray_nozzles/accessories/accessories_strainers.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/urunler/nozullar/accessories',
          'pt-br':
            'https://www.spray.com.br/bicos-pulverizacao/acessorios.aspx',
          'fr-ch': 'https://www.spray.com/fr-ch/produits/buses/accessoires',
          'de-at': 'https://www.spray.com/de-at/produkte/duesen/accessories',
          'de-de': 'https://www.spray.com/de-de/produkte/duesen/accessories',
          'el-gr': 'https://www.spray.com/el-gr/products/ακροφύσια/αξεσουάρ',
          'ko-kr': 'https://www.spray.com/ko-kr/products/nozzles/accessories',
          'ru-kz': 'https://www.spray.com/ru-kz/продукты/форсунки/аксессуары',
          'es-co':
            'https://www.spray.com/es-co/productos/boquillas-de-pulverización/accesorios',
          'bg-bg': 'https://www.spray.com/bg-bg/продукти/дюзи/аксесоари',
          'en-za': 'https://www.spray.com/en-za/products/nozzles/accessories',
          'sl-si': 'https://www.spray.com/sl-si/izdelki/šobe/dodatki',
          'cs-cz': 'https://www.spray.com/cs-cz/products/nozzles/accessories',
          'nl-nl':
            'https://www.spray.com/nl-nl/producten/sproeikoppen/accessoires',
          'en-ae': 'https://www.spray.com/en-ae/products/nozzles/accessories',
          'en-au': 'https://www.spray.com/en-au/products/nozzles/accessories',
          'en-ca': 'https://www.spray.com/en-ca/products/nozzles/accessories',
          'pl-pl': 'https://www.spray.com/pl-pl/products/nozzles/accessories',
          'ro-ro': 'https://www.spray.com/ro-ro/products/nozzles/accessories',
          'es-ar':
            'https://www.spray.com/es-ar/productos/boquillas-de-pulverización/accesorios',
          'es-cl':
            'https://www.spray.com/es-cl/productos/boquillas-de-pulverización/accesorios',
          'es-ec':
            'https://www.spray.com/es-ec/productos/boquillas-de-pulverización/accesorios',
          'es-mx':
            'https://www.spray.com/es-mx/productos/boquillas-de-aspersión/accesorios',
          'en-be': 'https://www.spray.com/en-be/products/nozzles/accessories',
          'en-my': 'https://www.spray.com/en-my/products/nozzles/accessories',
          'en-at': 'https://www.spray.com/en-at/products/nozzles/accessories',
          'hu-hu': 'https://www.spray.com/hu-hu/termékek/fúvókák/kiegészítők',
          'es-pe':
            'https://www.spray.com/es-pe/productos/boquillas-de-pulverización/accesorios',
          'es-es': 'https://www.spray.com/es-es/productos/nozzles/accessories',
          'de-be': 'https://www.spray.com/de-be/produkte/duesen/accessories',
          'nl-be':
            'https://www.spray.com/nl-be/producten/sproeikoppen/accessoires',
          'en-nz': 'https://www.spray.com/en-nz/products/nozzles/accessories',
          'fi-fi':
            'https://www.spray.com/fi-fi/tuotteet/suuttimet/lisävarusteet',
          'fr-ca': 'https://www.spray.com/fr-ca/produits/buses/accessoires',
          'fr-fr': 'https://www.spray.com/fr-fr/produits/buses/accessoires',
          'en-id': 'https://www.spray.com/en-id/products/nozzles/accessories',
          'en-ch': 'https://www.spray.com/en-ch/products/nozzles/accessories',
          'en-cz': 'https://www.spray.com/en-cz/products/nozzles/accessories',
          'de-ch': 'https://www.spray.com/de-ch/produkte/duesen/accessories',
          'en-sg': 'https://www.spray.com/en-sg/products/nozzles/accessories',
          'et-ee': 'https://www.spray.com/et-ee/tooted/düüsid/tarvikud',
          'sk-sk': 'https://www.spray.com/sk-sk/produkty/trysky/príslušenstvo',
          'lt-lt': 'https://www.spray.com/lt-lt/produktai/purkštukai/priedai',
          'lv-lv': 'https://www.spray.com/lv-lv/produkti/sprauslas/aksesuāri',
          'en-ma': 'https://www.spray.com/en-ma/products/nozzles/accessories',
          'en-cd': 'https://www.spray.com/en-cd/products/nozzles/accessories',
          'en-sk': 'https://www.spray.com/en-sk/products/nozzles/accessories',
          'fr-sn': 'https://www.spray.com/fr-sn/produits/buses/accessoires',
          'en-tn': 'https://www.spray.com/en-tn/products/nozzles/accessories',
          'en-zm': 'https://www.spray.com/en-zm/products/nozzles/accessories',
          'en-lt': 'https://www.spray.com/en-lt/products/nozzles/accessories',
          'fr-ci': 'https://www.spray.com/fr-ci/produits/buses/accessoires',
          'en-bh': 'https://www.spray.com/en-bh/products/nozzles/accessories',
          'fr-cm': 'https://www.spray.com/fr-cm/produits/buses/accessoires',
          'en-mg': 'https://www.spray.com/en-mg/products/nozzles/accessories',
          'en-sa': 'https://www.spray.com/en-sa/products/nozzles/accessories',
          'fr-dz': 'https://www.spray.com/fr-dz/produits/buses/accessoires',
          'en-ci': 'https://www.spray.com/en-ci/products/nozzles/accessories',
          'en-ng': 'https://www.spray.com/en-ng/products/nozzles/accessories',
          'fr-ma': 'https://www.spray.com/fr-ma/produits/buses/accessoires',
          'en-cm': 'https://www.spray.com/en-cm/products/nozzles/accessories',
          'fr-mg': 'https://www.spray.com/fr-mg/produits/buses/accessoires',
          'en-iq': 'https://www.spray.com/en-iq/products/nozzles/accessories',
          'en-sn': 'https://www.spray.com/en-sn/products/nozzles/accessories',
          'fr-tn': 'https://www.spray.com/fr-tn/produits/buses/accessoires',
          'en-dz': 'https://www.spray.com/en-dz/products/nozzles/accessories',
          'en-jo': 'https://www.spray.com/en-jo/products/nozzles/accessories',
          'en-eg': 'https://www.spray.com/en-eg/products/nozzles/accessories',
          'en-ke': 'https://www.spray.com/en-ke/products/nozzles/accessories',
          'en-om': 'https://www.spray.com/en-om/products/nozzles/accessories',
          'en-kw': 'https://www.spray.com/en-kw/products/nozzles/accessories',
          'fr-cd': 'https://www.spray.com/fr-cd/produits/buses/accessoires',
          'en-lb': 'https://www.spray.com/en-lb/products/nozzles/accessories',
          'en-pk': 'https://www.spray.com/en-pk/products/nozzles/accessories',
          'en-lv': 'https://www.spray.com/en-lv/products/nozzles/accessories',
          'en-qa': 'https://www.spray.com/en-qa/products/nozzles/accessories',
          'it-ch': 'https://www.spray.com/it-ch/products/nozzles/accessories',
          'en-in': 'https://www.spray.com/en-in/products/nozzles/accessories',
          'fr-be': 'https://www.spray.com/fr-be/produits/buses/accessoires',
          'nb-no': 'https://www.spray.com/nb-no/produkter/dyser/tilbehør',
          'it-it': 'https://www.spray.com/it-it/products/nozzles/accessories',
          'sv-se': 'https://www.spray.com/sv-se/produkter/munstycken/tillbehör',
          'en-es': 'https://www.spray.com/en-es/products/nozzles/accessories',
          'en-hu': 'https://www.spray.com/en-hu/products/nozzles/accessories',
          'en-it': 'https://www.spray.com/en-it/products/nozzles/accessories',
          'en-nl': 'https://www.spray.com/en-nl/products/nozzles/accessories',
          'en-no': 'https://www.spray.com/en-no/products/nozzles/accessories',
          'en-pl': 'https://www.spray.com/en-pl/products/nozzles/accessories',
          'en-ro': 'https://www.spray.com/en-ro/products/nozzles/accessories',
          'en-se': 'https://www.spray.com/en-se/products/nozzles/accessories',
          'en-tr': 'https://www.spray.com/en-tr/products/nozzles/accessories',
          'en-de': 'https://www.spray.com/en-de/products/nozzles/accessories',
          'en-fi': 'https://www.spray.com/en-fi/products/nozzles/accessories',
          'en-fr': 'https://www.spray.com/en-fr/products/nozzles/accessories',
          'en-gb': 'https://www.spray.com/en-gb/products/nozzles/accessories',
          'en-gr': 'https://www.spray.com/en-gr/products/nozzles/accessories',
          'en-vn': 'https://www.spray.com/en-vn/products/nozzles/accessories',
          'en-hk': 'https://www.spray.com/en-hk/products/nozzles/accessories',
          'en-ph': 'https://www.spray.com/en-ph/products/nozzles/accessories',
          en: 'https://www.spray.com/products/nozzles/accessories'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.productCategories.items.brands,
        links: {
          'pt-br': 'https://www.spray.com.br/produtos/marcas.aspx',
          'fr-ch':
            'https://www.spray.com/fr-ch/produits/marques-de-buses-et-de-systemes-de-pulverisation',
          'de-at':
            'https://www.spray.com/de-at/produkte/nozzle-and-spray-system-brands',
          'de-de':
            'https://www.spray.com/de-de/produkte/nozzle-and-spray-system-brands',
          'el-gr':
            'https://www.spray.com/el-gr/products/nozzle-and-spray-system-brands',
          'ko-kr':
            'https://www.spray.com/ko-kr/products/nozzle-and-spray-system-brands',
          'ru-kz':
            'https://www.spray.com/ru-kz/продукты/бренды-форсунок-и-систем-распыления',
          'ru-ru':
            'https://www.spray.com/ru-ru/продукты/бренды-форсунок-и-систем-распыления',
          'es-co':
            'https://www.spray.com/es-co/productos/marcas-de-boquillas-y-de-sistemas-de-pulverización',
          'bg-bg':
            'https://www.spray.com/bg-bg/продукти/марки-дюзи-и-системи-за-пръскане',
          'en-za':
            'https://www.spray.com/en-za/products/nozzle-and-spray-system-brands',
          'sl-si':
            'https://www.spray.com/sl-si/izdelki/blagovne-znamke-šob-in-razpršilnih-sistemov',
          'cs-cz':
            'https://www.spray.com/cs-cz/products/nozzle-and-spray-system-brands',
          'nl-nl': 'https://www.spray.com/nl-nl/producten/onze-merken',
          'en-ae':
            'https://www.spray.com/en-ae/products/nozzle-and-spray-system-brands',
          'en-au':
            'https://www.spray.com/en-au/products/nozzle-and-spray-system-brands',
          'en-ca':
            'https://www.spray.com/en-ca/products/nozzle-and-spray-system-brands',
          'pl-pl':
            'https://www.spray.com/pl-pl/products/nozzle-and-spray-system-brands',
          'ro-ro':
            'https://www.spray.com/ro-ro/products/nozzle-and-spray-system-brands',
          'es-ar':
            'https://www.spray.com/es-ar/productos/marcas-de-boquillas-y-de-sistemas-de-pulverización',
          'es-cl':
            'https://www.spray.com/es-cl/productos/marcas-de-boquillas-y-de-sistemas-de-pulverización',
          'es-ec':
            'https://www.spray.com/es-ec/productos/marcas-de-boquillas-y-de-sistemas-de-pulverización',
          'es-mx':
            'https://www.spray.com/es-mx/productos/marcas-de-boquillas-y-de-sistemas-de-aspersión',
          'tr-tr':
            'https://www.spray.com/tr-tr/urunler/nozullar-ve-markalarimiz',
          'en-be':
            'https://www.spray.com/en-be/products/nozzle-and-spray-system-brands',
          'en-my':
            'https://www.spray.com/en-my/products/nozzle-and-spray-system-brands',
          'en-at':
            'https://www.spray.com/en-at/products/nozzle-and-spray-system-brands',
          'hu-hu':
            'https://www.spray.com/hu-hu/termékek/fúvóka-és-permetező-rendszer-márkák',
          'es-pe':
            'https://www.spray.com/es-pe/productos/marcas-de-boquillas-y-de-sistemas-de-pulverización',
          'es-es':
            'https://www.spray.com/es-es/productos/modelos-de-boquillas-y-sistemas-de-pulverización',
          'zh-cn':
            'https://www.spray.com/zh-cn/产品/nozzle-and-spray-system-brands',
          'de-be':
            'https://www.spray.com/de-be/produkte/nozzle-and-spray-system-brands',
          'nl-be': 'https://www.spray.com/nl-be/producten/onze-merken',
          'en-nz':
            'https://www.spray.com/en-nz/products/nozzle-and-spray-system-brands',
          'fi-fi': 'https://www.spray.com/fi-fi/tuotteet/tuotemerkit',
          'fr-ca':
            'https://www.spray.com/fr-ca/produits/marques-de-buses-et-de-systèmes-de-pulvérisation',
          'fr-fr':
            'https://www.spray.com/fr-fr/produits/marques-de-buses-et-de-systemes-de-pulverisation',
          'en-id':
            'https://www.spray.com/en-id/products/nozzle-and-spray-system-brands',
          'en-ch':
            'https://www.spray.com/en-ch/products/nozzle-and-spray-system-brands',
          'en-cz':
            'https://www.spray.com/en-cz/products/nozzle-and-spray-system-brands',
          'de-ch':
            'https://www.spray.com/de-ch/produkte/nozzle-and-spray-system-brands',
          'en-sg':
            'https://www.spray.com/en-sg/products/nozzle-and-spray-system-brands',
          'et-ee':
            'https://www.spray.com/et-ee/tooted/pihusti-ja-pihustussüsteemi-kaubamärgid',
          'sk-sk':
            'https://www.spray.com/sk-sk/produkty/značky-trysiek-a-striekacích-systémov',
          'lt-lt':
            'https://www.spray.com/lt-lt/produktai/purkštukų-ir-purškimo-sistemų-prekės-ženklai',
          'lv-lv':
            'https://www.spray.com/lv-lv/produkti/sprauslu-un-smidzināšanas-sistēmu-zīmoli',
          'en-ma':
            'https://www.spray.com/en-ma/products/nozzle-and-spray-system-brands',
          'en-cd':
            'https://www.spray.com/en-cd/products/nozzle-and-spray-system-brands',
          'en-sk':
            'https://www.spray.com/en-sk/products/nozzle-and-spray-system-brands',
          'fr-sn':
            'https://www.spray.com/fr-sn/produits/marques-de-buses-et-de-systemes-de-pulverisation',
          'en-tn':
            'https://www.spray.com/en-tn/products/nozzle-and-spray-system-brands',
          'en-zm':
            'https://www.spray.com/en-zm/products/nozzle-and-spray-system-brands',
          'en-lt':
            'https://www.spray.com/en-lt/products/nozzle-and-spray-system-brands',
          'fr-ci':
            'https://www.spray.com/fr-ci/produits/marques-de-buses-et-de-systemes-de-pulverisation',
          'en-bh':
            'https://www.spray.com/en-bh/products/nozzle-and-spray-system-brands',
          'fr-cm':
            'https://www.spray.com/fr-cm/produits/marques-de-buses-et-de-systemes-de-pulverisation',
          'en-mg':
            'https://www.spray.com/en-mg/products/nozzle-and-spray-system-brands',
          'en-sa':
            'https://www.spray.com/en-sa/products/nozzle-and-spray-system-brands',
          'fr-dz':
            'https://www.spray.com/fr-dz/produits/marques-de-buses-et-de-systemes-de-pulverisation',
          'en-ci':
            'https://www.spray.com/en-ci/products/nozzle-and-spray-system-brands',
          'en-ng':
            'https://www.spray.com/en-ng/products/nozzle-and-spray-system-brands',
          'fr-ma':
            'https://www.spray.com/fr-ma/produits/marques-de-buses-et-de-systemes-de-pulverisation',
          'en-cm':
            'https://www.spray.com/en-cm/products/nozzle-and-spray-system-brands',
          'fr-mg':
            'https://www.spray.com/fr-mg/produits/marques-de-buses-et-de-systemes-de-pulverisation',
          'en-iq':
            'https://www.spray.com/en-iq/products/nozzle-and-spray-system-brands',
          'en-sn':
            'https://www.spray.com/en-sn/products/nozzle-and-spray-system-brands',
          'fr-tn':
            'https://www.spray.com/fr-tn/produits/marques-de-buses-et-de-systemes-de-pulverisation',
          'en-dz':
            'https://www.spray.com/en-dz/products/nozzle-and-spray-system-brands',
          'en-jo':
            'https://www.spray.com/en-jo/products/nozzle-and-spray-system-brands',
          'en-eg':
            'https://www.spray.com/en-eg/products/nozzle-and-spray-system-brands',
          'en-ke':
            'https://www.spray.com/en-ke/products/nozzle-and-spray-system-brands',
          'en-om':
            'https://www.spray.com/en-om/products/nozzle-and-spray-system-brands',
          'en-kw':
            'https://www.spray.com/en-kw/products/nozzle-and-spray-system-brands',
          'fr-cd':
            'https://www.spray.com/fr-cd/produits/marques-de-buses-et-de-systemes-de-pulverisation',
          'en-lb':
            'https://www.spray.com/en-lb/products/nozzle-and-spray-system-brands',
          'en-pk':
            'https://www.spray.com/en-pk/products/nozzle-and-spray-system-brands',
          'en-lv':
            'https://www.spray.com/en-lv/products/nozzle-and-spray-system-brands',
          'en-qa':
            'https://www.spray.com/en-qa/products/nozzle-and-spray-system-brands',
          'it-ch':
            'https://www.spray.com/it-ch/products/nozzle-and-spray-system-brands',
          'en-in':
            'https://www.spray.com/en-in/products/nozzle-and-spray-system-brands',
          'fr-be':
            'https://www.spray.com/fr-be/produits/marques-de-buses-et-de-systemes-de-pulverisation',
          'nb-no':
            'https://www.spray.com/nb-no/produkter/dyse--og-sprøytesystemmerker',
          'it-it':
            'https://www.spray.com/it-it/products/nozzle-and-spray-system-brands',
          'sv-se':
            'https://www.spray.com/sv-se/produkter/märken-för-munstycken-och-sprutsystem',
          'en-es':
            'https://www.spray.com/en-es/products/nozzle-and-spray-system-brands',
          'en-hu':
            'https://www.spray.com/en-hu/products/nozzle-and-spray-system-brands',
          'en-it':
            'https://www.spray.com/en-it/products/nozzle-and-spray-system-brands',
          'en-nl':
            'https://www.spray.com/en-nl/products/nozzle-and-spray-system-brands',
          'en-no':
            'https://www.spray.com/en-no/products/nozzle-and-spray-system-brands',
          'en-pl':
            'https://www.spray.com/en-pl/products/nozzle-and-spray-system-brands',
          'en-ro':
            'https://www.spray.com/en-ro/products/nozzle-and-spray-system-brands',
          'en-se':
            'https://www.spray.com/en-se/products/nozzle-and-spray-system-brands',
          'en-tr':
            'https://www.spray.com/en-tr/products/nozzle-and-spray-system-brands',
          'en-de':
            'https://www.spray.com/en-de/products/nozzle-and-spray-system-brands',
          'en-fi':
            'https://www.spray.com/en-fi/products/nozzle-and-spray-system-brands',
          'en-fr':
            'https://www.spray.com/en-fr/products/nozzle-and-spray-system-brands',
          'en-gb':
            'https://www.spray.com/en-gb/products/nozzle-and-spray-system-brands',
          'en-gr':
            'https://www.spray.com/en-gr/products/nozzle-and-spray-system-brands',
          'en-vn':
            'https://www.spray.com/en-vn/products/nozzle-and-spray-system-brands',
          'en-hk':
            'https://www.spray.com/en-hk/products/nozzle-and-spray-system-brands',
          'en-ph':
            'https://www.spray.com/en-ph/products/nozzle-and-spray-system-brands',
          en: 'https://www.spray.com/products/nozzle-and-spray-system-brands',
          'x-default':
            'https://www.spray.com/products/nozzle-and-spray-system-brands'
        }
      }
    ]
  },
  industries: {
    titleMessageId: messageIds.navigation.footer.industries.title,
    items: [
      {
        labelMessageId:
          messageIds.navigation.footer.industries.items.industriesOverview,
        links: {
          'fr-ch':
            'https://www.spray.com/fr-ch/industries/apercu-des-secteurs-dactivite',
          'de-at': 'https://www.spray.com/de-at/industrien/industries-overview',
          'de-de': 'https://www.spray.com/de-de/industrien/industries-overview',
          'el-gr':
            'https://www.spray.com/el-gr/industries/επισκόπηση-βιομηχανιών',
          'ko-kr': 'https://www.spray.com/ko-kr/industries/industries-overview',
          'ru-kz': 'https://www.spray.com/ru-kz/отрасли/обзор-отраслей',
          'ru-ru': 'https://www.spray.com/ru-ru/отрасли/обзор-отраслей',
          'es-co':
            'https://www.spray.com/es-co/industrias/resumen-de-industrias',
          'bg-bg':
            'https://www.spray.com/bg-bg/индустрии/преглед-на-индустриите',
          'en-za': 'https://www.spray.com/en-za/industries/industries-overview',
          'sl-si': 'https://www.spray.com/sl-si/industrije/pregled-panog',
          'cs-cz': 'https://www.spray.com/cs-cz/industries/industries-overview',
          'nl-nl':
            'https://www.spray.com/nl-nl/industries/overzicht-van-sectoren',
          'en-ae': 'https://www.spray.com/en-ae/industries/industries-overview',
          'en-au': 'https://www.spray.com/en-au/industries/industries-overview',
          'en-ca': 'https://www.spray.com/en-ca/industries/industries-overview',
          'pl-pl': 'https://www.spray.com/pl-pl/industries/industries-overview',
          'ro-ro': 'https://www.spray.com/ro-ro/industries/industries-overview',
          'es-ar':
            'https://www.spray.com/es-ar/industrias/resumen-de-industrias',
          'es-cl':
            'https://www.spray.com/es-cl/industrias/resumen-de-industrias',
          'es-ec':
            'https://www.spray.com/es-ec/industrias/resumen-de-industrias',
          'es-mx':
            'https://www.spray.com/es-mx/industrias/resumen-de-industrias',
          'tr-tr': 'https://www.spray.com/tr-tr/industries/industries-overview',
          'en-be': 'https://www.spray.com/en-be/industries/industries-overview',
          'en-my': 'https://www.spray.com/en-my/industries/industries-overview',
          'en-at': 'https://www.spray.com/en-at/industries/industries-overview',
          'hu-hu': 'https://www.spray.com/hu-hu/iparágak/iparágak-áttekintése',
          'es-pe':
            'https://www.spray.com/es-pe/industrias/resumen-de-industrias',
          'es-es': 'https://www.spray.com/es-es/industrias/industrias',
          'zh-cn': 'https://www.spray.com/zh-cn/行业/industries-overview',
          'de-be': 'https://www.spray.com/de-be/industrien/industries-overview',
          'nl-be':
            'https://www.spray.com/nl-be/industries/overzicht-van-sectoren',
          'en-nz': 'https://www.spray.com/en-nz/industries/industries-overview',
          'fi-fi':
            'https://www.spray.com/fi-fi/teollisuudenalat/teollisuuden-alat',
          'fr-ca': 'https://www.spray.com/fr-ca/industries/industries-overview',
          'fr-fr':
            'https://www.spray.com/fr-fr/industries/apercu-des-secteurs-dactivite',
          'en-id': 'https://www.spray.com/en-id/industries/industries-overview',
          'en-ch': 'https://www.spray.com/en-ch/industries/industries-overview',
          'en-cz': 'https://www.spray.com/en-cz/industries/industries-overview',
          'de-ch': 'https://www.spray.com/de-ch/industrien/industries-overview',
          'en-sg': 'https://www.spray.com/en-sg/industries/industries-overview',
          'et-ee':
            'https://www.spray.com/et-ee/tööstused/ülevaade-tööstusharudest',
          'sk-sk': 'https://www.spray.com/sk-sk/odvetvia/prehľad-odvetví',
          'lt-lt':
            'https://www.spray.com/lt-lt/pramonės-šakos/pramonės-šakų-apžvalga',
          'lv-lv': 'https://www.spray.com/lv-lv/nozares/pārskats-par-nozarēm',
          'en-ma': 'https://www.spray.com/en-ma/industries/industries-overview',
          'en-cd': 'https://www.spray.com/en-cd/industries/industries-overview',
          'en-sk': 'https://www.spray.com/en-sk/industries/industries-overview',
          'fr-sn':
            'https://www.spray.com/fr-sn/industries/apercu-des-secteurs-dactivite',
          'en-tn': 'https://www.spray.com/en-tn/industries/industries-overview',
          'en-zm': 'https://www.spray.com/en-zm/industries/industries-overview',
          'en-lt': 'https://www.spray.com/en-lt/industries/industries-overview',
          'fr-ci':
            'https://www.spray.com/fr-ci/industries/apercu-des-secteurs-dactivite',
          'en-bh': 'https://www.spray.com/en-bh/industries/industries-overview',
          'fr-cm':
            'https://www.spray.com/fr-cm/industries/apercu-des-secteurs-dactivite',
          'en-mg': 'https://www.spray.com/en-mg/industries/industries-overview',
          'en-sa': 'https://www.spray.com/en-sa/industries/industries-overview',
          'fr-dz':
            'https://www.spray.com/fr-dz/industries/apercu-des-secteurs-dactivite',
          'en-ci': 'https://www.spray.com/en-ci/industries/industries-overview',
          'en-ng': 'https://www.spray.com/en-ng/industries/industries-overview',
          'fr-ma':
            'https://www.spray.com/fr-ma/industries/apercu-des-secteurs-dactivite',
          'en-cm': 'https://www.spray.com/en-cm/industries/industries-overview',
          'fr-mg':
            'https://www.spray.com/fr-mg/industries/apercu-des-secteurs-dactivite',
          'en-iq': 'https://www.spray.com/en-iq/industries/industries-overview',
          'en-sn': 'https://www.spray.com/en-sn/industries/industries-overview',
          'fr-tn':
            'https://www.spray.com/fr-tn/industries/apercu-des-secteurs-dactivite',
          'en-dz': 'https://www.spray.com/en-dz/industries/industries-overview',
          'en-jo': 'https://www.spray.com/en-jo/industries/industries-overview',
          'en-eg': 'https://www.spray.com/en-eg/industries/industries-overview',
          'en-ke': 'https://www.spray.com/en-ke/industries/industries-overview',
          'en-om': 'https://www.spray.com/en-om/industries/industries-overview',
          'en-kw': 'https://www.spray.com/en-kw/industries/industries-overview',
          'fr-cd':
            'https://www.spray.com/fr-cd/industries/apercu-des-secteurs-dactivite',
          'en-lb': 'https://www.spray.com/en-lb/industries/industries-overview',
          'en-pk': 'https://www.spray.com/en-pk/industries/industries-overview',
          'en-lv': 'https://www.spray.com/en-lv/industries/industries-overview',
          'en-qa': 'https://www.spray.com/en-qa/industries/industries-overview',
          'it-ch': 'https://www.spray.com/it-ch/industries/industries-overview',
          'en-in': 'https://www.spray.com/en-in/industries/industries-overview',
          'fr-be':
            'https://www.spray.com/fr-be/industries/apercu-des-secteurs-dactivite',
          'nb-no':
            'https://www.spray.com/nb-no/industrier/oversikt-over-bransjer',
          'it-it': 'https://www.spray.com/it-it/industries/industries-overview',
          'sv-se':
            'https://www.spray.com/sv-se/branscher/översikt-över-branscher',
          'en-es': 'https://www.spray.com/en-es/industries/industries-overview',
          'en-hu': 'https://www.spray.com/en-hu/industries/industries-overview',
          'en-it': 'https://www.spray.com/en-it/industries/industries-overview',
          'en-nl': 'https://www.spray.com/en-nl/industries/industries-overview',
          'en-no': 'https://www.spray.com/en-no/industries/industries-overview',
          'en-pl': 'https://www.spray.com/en-pl/industries/industries-overview',
          'en-ro': 'https://www.spray.com/en-ro/industries/industries-overview',
          'en-se': 'https://www.spray.com/en-se/industries/industries-overview',
          'en-tr': 'https://www.spray.com/en-tr/industries/industries-overview',
          'en-de': 'https://www.spray.com/en-de/industries/industries-overview',
          'en-fi': 'https://www.spray.com/en-fi/industries/industries-overview',
          'en-fr': 'https://www.spray.com/en-fr/industries/industries-overview',
          'en-gb': 'https://www.spray.com/en-gb/industries/industries-overview',
          'en-gr': 'https://www.spray.com/en-gr/industries/industries-overview',
          'en-vn': 'https://www.spray.com/en-vn/industries/industries-overview',
          'en-hk': 'https://www.spray.com/en-hk/industries/industries-overview',
          'en-ph': 'https://www.spray.com/en-ph/industries/industries-overview',
          en: 'https://www.spray.com/industries/industries-overview',
          'x-default': 'https://www.spray.com/industries/industries-overview'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.industries.items.automotive,
        links: {
          'fr-ch': 'https://www.spray.com/fr-ch/industries/automotive',
          'de-at': 'https://www.spray.com/de-at/industrien/automobil',
          'de-de': 'https://www.spray.com/de-de/industrien/automobil',
          'el-gr':
            'https://www.spray.com/el-gr/industries/αυτοκινητοβιομηχανία',
          'ko-kr': 'https://www.spray.com/ko-kr/industries/automotive',
          'ru-kz':
            'https://www.spray.com/ru-kz/отрасли/автомобильная-промышленность',
          'ru-ru':
            'https://www.spray.com/ru-ru/отрасли/автомобильная-промышленность',
          'es-co': 'https://www.spray.com/es-co/industrias/automotriz',
          'bg-bg': 'https://www.spray.com/bg-bg/индустрии/automotive',
          'en-za': 'https://www.spray.com/en-za/industries/automotive',
          'sl-si': 'https://www.spray.com/sl-si/industrije/automotive',
          'cs-cz': 'https://www.spray.com/cs-cz/industries/automotive',
          'nl-nl': 'https://www.spray.com/nl-nl/industries/auto-industrie',
          'en-ae': 'https://www.spray.com/en-ae/industries/automotive',
          'en-au': 'https://www.spray.com/en-au/industries/automotive',
          'en-ca': 'https://www.spray.com/en-ca/industries/automotive',
          'pl-pl': 'https://www.spray.com/pl-pl/industries/automotive',
          'ro-ro': 'https://www.spray.com/ro-ro/industries/automotive',
          'es-ar': 'https://www.spray.com/es-ar/industrias/automotriz',
          'es-cl': 'https://www.spray.com/es-cl/industrias/automotriz',
          'es-ec': 'https://www.spray.com/es-ec/industrias/automotriz',
          'es-mx': 'https://www.spray.com/es-mx/industrias/automotriz',
          'tr-tr': 'https://www.spray.com/tr-tr/industries/automotive',
          'en-be': 'https://www.spray.com/en-be/industries/automotive',
          'en-my': 'https://www.spray.com/en-my/industries/automotive',
          'en-at': 'https://www.spray.com/en-at/industries/automotive',
          'hu-hu': 'https://www.spray.com/hu-hu/iparágak/automotive',
          'es-pe': 'https://www.spray.com/es-pe/industrias/automotriz',
          'es-es': 'https://www.spray.com/es-es/industrias/automocion',
          'zh-cn': 'https://www.spray.com/zh-cn/行业/automotive',
          'de-be': 'https://www.spray.com/de-be/industrien/automobil',
          'nl-be': 'https://www.spray.com/nl-be/industries/auto-industrie',
          'en-nz': 'https://www.spray.com/en-nz/industries/automotive',
          'fi-fi':
            'https://www.spray.com/fi-fi/teollisuudenalat/ajoneuvoteollisuudessa',
          'fr-ca': 'https://www.spray.com/fr-ca/industries/automobile',
          'fr-fr': 'https://www.spray.com/fr-fr/industries/automotive',
          'en-id': 'https://www.spray.com/en-id/industries/automotive',
          'en-ch': 'https://www.spray.com/en-ch/industries/automotive',
          'en-cz': 'https://www.spray.com/en-cz/industries/automotive',
          'de-ch': 'https://www.spray.com/de-ch/industrien/automobil',
          'en-sg': 'https://www.spray.com/en-sg/industries/automotive',
          'et-ee': 'https://www.spray.com/et-ee/tööstused/automotive',
          'sk-sk': 'https://www.spray.com/sk-sk/odvetvia/automotive',
          'lt-lt': 'https://www.spray.com/lt-lt/pramonės-šakos/automotive',
          'lv-lv': 'https://www.spray.com/lv-lv/nozares/automotive',
          'en-ma': 'https://www.spray.com/en-ma/industries/automotive',
          'en-cd': 'https://www.spray.com/en-cd/industries/automotive',
          'en-sk': 'https://www.spray.com/en-sk/industries/automotive',
          'fr-sn': 'https://www.spray.com/fr-sn/industries/automotive',
          'en-tn': 'https://www.spray.com/en-tn/industries/automotive',
          'en-zm': 'https://www.spray.com/en-zm/industries/automotive',
          'en-lt': 'https://www.spray.com/en-lt/industries/automotive',
          'fr-ci': 'https://www.spray.com/fr-ci/industries/automotive',
          'en-bh': 'https://www.spray.com/en-bh/industries/automotive',
          'fr-cm': 'https://www.spray.com/fr-cm/industries/automotive',
          'en-mg': 'https://www.spray.com/en-mg/industries/automotive',
          'en-sa': 'https://www.spray.com/en-sa/industries/automotive',
          'fr-dz': 'https://www.spray.com/fr-dz/industries/automotive',
          'en-ci': 'https://www.spray.com/en-ci/industries/automotive',
          'en-ng': 'https://www.spray.com/en-ng/industries/automotive',
          'fr-ma': 'https://www.spray.com/fr-ma/industries/automotive',
          'en-cm': 'https://www.spray.com/en-cm/industries/automotive',
          'fr-mg': 'https://www.spray.com/fr-mg/industries/automotive',
          'en-iq': 'https://www.spray.com/en-iq/industries/automotive',
          'en-sn': 'https://www.spray.com/en-sn/industries/automotive',
          'fr-tn': 'https://www.spray.com/fr-tn/industries/automotive',
          'en-dz': 'https://www.spray.com/en-dz/industries/automotive',
          'en-jo': 'https://www.spray.com/en-jo/industries/automotive',
          'en-eg': 'https://www.spray.com/en-eg/industries/automotive',
          'en-ke': 'https://www.spray.com/en-ke/industries/automotive',
          'en-om': 'https://www.spray.com/en-om/industries/automotive',
          'en-kw': 'https://www.spray.com/en-kw/industries/automotive',
          'fr-cd': 'https://www.spray.com/fr-cd/industries/automotive',
          'en-lb': 'https://www.spray.com/en-lb/industries/automotive',
          'en-pk': 'https://www.spray.com/en-pk/industries/automotive',
          'en-lv': 'https://www.spray.com/en-lv/industries/automotive',
          'en-qa': 'https://www.spray.com/en-qa/industries/automotive',
          'it-ch': 'https://www.spray.com/it-ch/industries/automotive',
          'en-in': 'https://www.spray.com/en-in/industries/automotive',
          'fr-be': 'https://www.spray.com/fr-be/industries/automotive',
          'nb-no': 'https://www.spray.com/nb-no/industrier/automotive',
          'it-it': 'https://www.spray.com/it-it/industries/automotive',
          'sv-se': 'https://www.spray.com/sv-se/branscher/automotive',
          'en-es': 'https://www.spray.com/en-es/industries/automotive',
          'en-hu': 'https://www.spray.com/en-hu/industries/automotive',
          'en-it': 'https://www.spray.com/en-it/industries/automotive',
          'en-nl': 'https://www.spray.com/en-nl/industries/automotive',
          'en-no': 'https://www.spray.com/en-no/industries/automotive',
          'en-pl': 'https://www.spray.com/en-pl/industries/automotive',
          'en-ro': 'https://www.spray.com/en-ro/industries/automotive',
          'en-se': 'https://www.spray.com/en-se/industries/automotive',
          'en-tr': 'https://www.spray.com/en-tr/industries/automotive',
          'en-de': 'https://www.spray.com/en-de/industries/automotive',
          'en-fi': 'https://www.spray.com/en-fi/industries/automotive',
          'en-fr': 'https://www.spray.com/en-fr/industries/automotive',
          'en-gb': 'https://www.spray.com/en-gb/industries/automotive',
          'en-gr': 'https://www.spray.com/en-gr/industries/automotive',
          'en-vn': 'https://www.spray.com/en-vn/industries/automotive',
          'en-hk': 'https://www.spray.com/en-hk/industries/automotive',
          'en-ph': 'https://www.spray.com/en-ph/industries/automotive',
          en: 'https://www.spray.com/industries/automotive',
          'x-default': 'https://www.spray.com/industries/automotive'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.industries.items.buildingMaterials,
        links: {
          'fr-ch': 'https://www.spray.com/fr-ch/industries/building-materials',
          'de-at': 'https://www.spray.com/de-at/industrien/building-materials',
          'de-de': 'https://www.spray.com/de-de/industrien/building-materials',
          'el-gr': 'https://www.spray.com/el-gr/industries/δομικά-υλικά',
          'ko-kr': 'https://www.spray.com/ko-kr/industries/building-materials',
          'ru-kz': 'https://www.spray.com/ru-kz/отрасли/строительные-материалы',
          'ru-ru': 'https://www.spray.com/ru-ru/отрасли/строительные-материалы',
          'es-co':
            'https://www.spray.com/es-co/industrias/materiales-de-construcción',
          'bg-bg': 'https://www.spray.com/bg-bg/индустрии/строителни-материали',
          'en-za': 'https://www.spray.com/en-za/industries/building-materials',
          'sl-si': 'https://www.spray.com/sl-si/industrije/gradbeni-materiali',
          'cs-cz': 'https://www.spray.com/cs-cz/industries/building-materials',
          'nl-nl': 'https://www.spray.com/nl-nl/industries/bouwmaterialen',
          'en-ae': 'https://www.spray.com/en-ae/industries/building-materials',
          'en-au': 'https://www.spray.com/en-au/industries/building-materials',
          'en-ca': 'https://www.spray.com/en-ca/industries/building-materials',
          'pl-pl': 'https://www.spray.com/pl-pl/industries/building-materials',
          'ro-ro':
            'https://www.spray.com/ro-ro/industries/materiale-de-construcții',
          'es-ar':
            'https://www.spray.com/es-ar/industrias/materiales-de-construcción',
          'es-cl':
            'https://www.spray.com/es-cl/industrias/materiales-de-construcción',
          'es-ec':
            'https://www.spray.com/es-ec/industrias/materiales-de-construcción',
          'es-mx':
            'https://www.spray.com/es-mx/industrias/materiales-de-construcción',
          'tr-tr': 'https://www.spray.com/tr-tr/industries/building-materials',
          'en-be': 'https://www.spray.com/en-be/industries/building-materials',
          'en-my': 'https://www.spray.com/en-my/industries/building-materials',
          'en-at': 'https://www.spray.com/en-at/industries/building-materials',
          'hu-hu': 'https://www.spray.com/hu-hu/iparágak/építőanyagok',
          'es-pe':
            'https://www.spray.com/es-pe/industrias/materiales-de-construcción',
          'es-es':
            'https://www.spray.com/es-es/industrias/materiales-de-construccion',
          'zh-cn': 'https://www.spray.com/zh-cn/行业/building-materials',
          'de-be': 'https://www.spray.com/de-be/industrien/building-materials',
          'nl-be': 'https://www.spray.com/nl-be/industries/bouwmaterialen',
          'en-nz': 'https://www.spray.com/en-nz/industries/building-materials',
          'fi-fi':
            'https://www.spray.com/fi-fi/teollisuudenalat/rakennusmateriaalien-valmistuksessa',
          'fr-ca':
            'https://www.spray.com/fr-ca/industries/matériaux-de-construction',
          'fr-fr': 'https://www.spray.com/fr-fr/industries/building-materials',
          'en-id': 'https://www.spray.com/en-id/industries/building-materials',
          'en-ch': 'https://www.spray.com/en-ch/industries/building-materials',
          'en-cz': 'https://www.spray.com/en-cz/industries/building-materials',
          'de-ch': 'https://www.spray.com/de-ch/industrien/building-materials',
          'en-sg': 'https://www.spray.com/en-sg/industries/building-materials',
          'et-ee': 'https://www.spray.com/et-ee/tööstused/ehitusmaterjalid',
          'sk-sk': 'https://www.spray.com/sk-sk/odvetvia/stavebné-materiály',
          'lt-lt':
            'https://www.spray.com/lt-lt/pramonės-šakos/statybinės-medžiagos',
          'lv-lv': 'https://www.spray.com/lv-lv/nozares/būvmateriāli',
          'en-ma': 'https://www.spray.com/en-ma/industries/building-materials',
          'en-cd': 'https://www.spray.com/en-cd/industries/building-materials',
          'en-sk': 'https://www.spray.com/en-sk/industries/building-materials',
          'fr-sn': 'https://www.spray.com/fr-sn/industries/building-materials',
          'en-tn': 'https://www.spray.com/en-tn/industries/building-materials',
          'en-zm': 'https://www.spray.com/en-zm/industries/building-materials',
          'en-lt': 'https://www.spray.com/en-lt/industries/building-materials',
          'fr-ci': 'https://www.spray.com/fr-ci/industries/building-materials',
          'en-bh': 'https://www.spray.com/en-bh/industries/building-materials',
          'fr-cm': 'https://www.spray.com/fr-cm/industries/building-materials',
          'en-mg': 'https://www.spray.com/en-mg/industries/building-materials',
          'en-sa': 'https://www.spray.com/en-sa/industries/building-materials',
          'fr-dz': 'https://www.spray.com/fr-dz/industries/building-materials',
          'en-ci': 'https://www.spray.com/en-ci/industries/building-materials',
          'en-ng': 'https://www.spray.com/en-ng/industries/building-materials',
          'fr-ma': 'https://www.spray.com/fr-ma/industries/building-materials',
          'en-cm': 'https://www.spray.com/en-cm/industries/building-materials',
          'fr-mg': 'https://www.spray.com/fr-mg/industries/building-materials',
          'en-iq': 'https://www.spray.com/en-iq/industries/building-materials',
          'en-sn': 'https://www.spray.com/en-sn/industries/building-materials',
          'fr-tn': 'https://www.spray.com/fr-tn/industries/building-materials',
          'en-dz': 'https://www.spray.com/en-dz/industries/building-materials',
          'en-jo': 'https://www.spray.com/en-jo/industries/building-materials',
          'en-eg': 'https://www.spray.com/en-eg/industries/building-materials',
          'en-ke': 'https://www.spray.com/en-ke/industries/building-materials',
          'en-om': 'https://www.spray.com/en-om/industries/building-materials',
          'en-kw': 'https://www.spray.com/en-kw/industries/building-materials',
          'fr-cd': 'https://www.spray.com/fr-cd/industries/building-materials',
          'en-lb': 'https://www.spray.com/en-lb/industries/building-materials',
          'en-pk': 'https://www.spray.com/en-pk/industries/building-materials',
          'en-lv': 'https://www.spray.com/en-lv/industries/building-materials',
          'en-qa': 'https://www.spray.com/en-qa/industries/building-materials',
          'it-ch': 'https://www.spray.com/it-ch/industries/building-materials',
          'en-in': 'https://www.spray.com/en-in/industries/building-materials',
          'fr-be': 'https://www.spray.com/fr-be/industries/building-materials',
          'nb-no': 'https://www.spray.com/nb-no/industrier/byggematerialer',
          'it-it': 'https://www.spray.com/it-it/industries/building-materials',
          'sv-se': 'https://www.spray.com/sv-se/branscher/byggnadsmaterial',
          'en-es': 'https://www.spray.com/en-es/industries/building-materials',
          'en-hu': 'https://www.spray.com/en-hu/industries/building-materials',
          'en-it': 'https://www.spray.com/en-it/industries/building-materials',
          'en-nl': 'https://www.spray.com/en-nl/industries/building-materials',
          'en-no': 'https://www.spray.com/en-no/industries/building-materials',
          'en-pl': 'https://www.spray.com/en-pl/industries/building-materials',
          'en-ro': 'https://www.spray.com/en-ro/industries/building-materials',
          'en-se': 'https://www.spray.com/en-se/industries/building-materials',
          'en-tr': 'https://www.spray.com/en-tr/industries/building-materials',
          'en-de': 'https://www.spray.com/en-de/industries/building-materials',
          'en-fi': 'https://www.spray.com/en-fi/industries/building-materials',
          'en-fr': 'https://www.spray.com/en-fr/industries/building-materials',
          'en-gb': 'https://www.spray.com/en-gb/industries/building-materials',
          'en-gr': 'https://www.spray.com/en-gr/industries/building-materials',
          'en-vn': 'https://www.spray.com/en-vn/industries/building-materials',
          'en-hk': 'https://www.spray.com/en-hk/industries/building-materials',
          'en-ph': 'https://www.spray.com/en-ph/industries/building-materials',
          en: 'https://www.spray.com/industries/building-materials',
          'x-default': 'https://www.spray.com/industries/building-materials'
        }
      },
      {
        labelMessageId: messageIds.navigation.footer.industries.items.energy,
        links: {
          'fr-ch': 'https://www.spray.com/fr-ch/industries/energie',
          'de-at': 'https://www.spray.com/de-at/industrien/energy',
          'de-de': 'https://www.spray.com/de-de/industrien/energy',
          'el-gr': 'https://www.spray.com/el-gr/industries/ενέργεια',
          'ko-kr': 'https://www.spray.com/ko-kr/industries/energy',
          'ru-kz': 'https://www.spray.com/ru-kz/отрасли/энергетика',
          'ru-ru': 'https://www.spray.com/ru-ru/отрасли/энергетика',
          'es-co': 'https://www.spray.com/es-co/industrias/energía',
          'bg-bg': 'https://www.spray.com/bg-bg/индустрии/енергия',
          'en-za': 'https://www.spray.com/en-za/industries/energy',
          'sl-si': 'https://www.spray.com/sl-si/industrije/energija',
          'cs-cz': 'https://www.spray.com/cs-cz/industries/energy',
          'nl-nl': 'https://www.spray.com/nl-nl/industries/energieproductie',
          'en-ae': 'https://www.spray.com/en-ae/industries/energy',
          'en-au': 'https://www.spray.com/en-au/industries/energy',
          'en-ca': 'https://www.spray.com/en-ca/industries/energy',
          'pl-pl': 'https://www.spray.com/pl-pl/industries/energy',
          'ro-ro': 'https://www.spray.com/ro-ro/industries/energie',
          'es-ar': 'https://www.spray.com/es-ar/industrias/energía',
          'es-cl': 'https://www.spray.com/es-cl/industrias/energía',
          'es-ec': 'https://www.spray.com/es-ec/industrias/energía',
          'es-mx': 'https://www.spray.com/es-mx/industrias/energía',
          'tr-tr': 'https://www.spray.com/tr-tr/industries/energy',
          'en-be': 'https://www.spray.com/en-be/industries/energy',
          'en-my': 'https://www.spray.com/en-my/industries/energy',
          'en-at': 'https://www.spray.com/en-at/industries/energy',
          'hu-hu': 'https://www.spray.com/hu-hu/iparágak/energia',
          'es-pe': 'https://www.spray.com/es-pe/industrias/energía',
          'es-es': 'https://www.spray.com/es-es/industrias/energia',
          'zh-cn': 'https://www.spray.com/zh-cn/行业/energy',
          'de-be': 'https://www.spray.com/de-be/industrien/energy',
          'nl-be': 'https://www.spray.com/nl-be/industries/energieproductie',
          'en-nz': 'https://www.spray.com/en-nz/industries/energy',
          'fi-fi':
            'https://www.spray.com/fi-fi/teollisuudenalat/energiateollisuuden',
          'fr-ca': 'https://www.spray.com/fr-ca/industries/énergie',
          'fr-fr': 'https://www.spray.com/fr-fr/industries/energie',
          'en-id': 'https://www.spray.com/en-id/industries/energy',
          'en-ch': 'https://www.spray.com/en-ch/industries/energy',
          'en-cz': 'https://www.spray.com/en-cz/industries/energy',
          'de-ch': 'https://www.spray.com/de-ch/industrien/energy',
          'en-sg': 'https://www.spray.com/en-sg/industries/energy',
          'et-ee': 'https://www.spray.com/et-ee/tööstused/energia',
          'sk-sk': 'https://www.spray.com/sk-sk/odvetvia/energia',
          'lt-lt': 'https://www.spray.com/lt-lt/pramonės-šakos/energija',
          'lv-lv': 'https://www.spray.com/lv-lv/nozares/enerģija',
          'en-ma': 'https://www.spray.com/en-ma/industries/energy',
          'en-cd': 'https://www.spray.com/en-cd/industries/energy',
          'en-sk': 'https://www.spray.com/en-sk/industries/energy',
          'fr-sn': 'https://www.spray.com/fr-sn/industries/energie',
          'en-tn': 'https://www.spray.com/en-tn/industries/energy',
          'en-zm': 'https://www.spray.com/en-zm/industries/energy',
          'en-lt': 'https://www.spray.com/en-lt/industries/energy',
          'fr-ci': 'https://www.spray.com/fr-ci/industries/energie',
          'en-bh': 'https://www.spray.com/en-bh/industries/energy',
          'fr-cm': 'https://www.spray.com/fr-cm/industries/energie',
          'en-mg': 'https://www.spray.com/en-mg/industries/energy',
          'en-sa': 'https://www.spray.com/en-sa/industries/energy',
          'fr-dz': 'https://www.spray.com/fr-dz/industries/energie',
          'en-ci': 'https://www.spray.com/en-ci/industries/energy',
          'en-ng': 'https://www.spray.com/en-ng/industries/energy',
          'fr-ma': 'https://www.spray.com/fr-ma/industries/energie',
          'en-cm': 'https://www.spray.com/en-cm/industries/energy',
          'fr-mg': 'https://www.spray.com/fr-mg/industries/energie',
          'en-iq': 'https://www.spray.com/en-iq/industries/energy',
          'en-sn': 'https://www.spray.com/en-sn/industries/energy',
          'fr-tn': 'https://www.spray.com/fr-tn/industries/energie',
          'en-dz': 'https://www.spray.com/en-dz/industries/energy',
          'en-jo': 'https://www.spray.com/en-jo/industries/energy',
          'en-eg': 'https://www.spray.com/en-eg/industries/energy',
          'en-ke': 'https://www.spray.com/en-ke/industries/energy',
          'en-om': 'https://www.spray.com/en-om/industries/energy',
          'en-kw': 'https://www.spray.com/en-kw/industries/energy',
          'fr-cd': 'https://www.spray.com/fr-cd/industries/energie',
          'en-lb': 'https://www.spray.com/en-lb/industries/energy',
          'en-pk': 'https://www.spray.com/en-pk/industries/energy',
          'en-lv': 'https://www.spray.com/en-lv/industries/energy',
          'en-qa': 'https://www.spray.com/en-qa/industries/energy',
          'it-ch': 'https://www.spray.com/it-ch/industries/energy',
          'en-in': 'https://www.spray.com/en-in/industries/energy',
          'fr-be': 'https://www.spray.com/fr-be/industries/energie',
          'nb-no': 'https://www.spray.com/nb-no/industrier/energi',
          'it-it': 'https://www.spray.com/it-it/industries/energy',
          'sv-se': 'https://www.spray.com/sv-se/branscher/energi',
          'en-es': 'https://www.spray.com/en-es/industries/energy',
          'en-hu': 'https://www.spray.com/en-hu/industries/energy',
          'en-it': 'https://www.spray.com/en-it/industries/energy',
          'en-nl': 'https://www.spray.com/en-nl/industries/energy',
          'en-no': 'https://www.spray.com/en-no/industries/energy',
          'en-pl': 'https://www.spray.com/en-pl/industries/energy',
          'en-ro': 'https://www.spray.com/en-ro/industries/energy',
          'en-se': 'https://www.spray.com/en-se/industries/energy',
          'en-tr': 'https://www.spray.com/en-tr/industries/energy',
          'en-de': 'https://www.spray.com/en-de/industries/energy',
          'en-fi': 'https://www.spray.com/en-fi/industries/energy',
          'en-fr': 'https://www.spray.com/en-fr/industries/energy',
          'en-gb': 'https://www.spray.com/en-gb/industries/energy',
          'en-gr': 'https://www.spray.com/en-gr/industries/energy',
          'en-vn': 'https://www.spray.com/en-vn/industries/energy',
          'en-hk': 'https://www.spray.com/en-hk/industries/energy',
          'en-ph': 'https://www.spray.com/en-ph/industries/energy',
          en: 'https://www.spray.com/industries/energy',
          'x-default': 'https://www.spray.com/industries/energy'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.industries.items.foodAndBeverage,
        links: {
          'x-default': 'https://www.spray.com/industries/food-and-beverage',
          'ko-kr': 'https://www.spray.com/ko-kr/industries/food-and-beverage',
          'zh-cn': 'https://www.spray.com/zh-cn/行业/food-and-beverage',
          'ja-jp': 'https://www.spray.co.jp/markets_and_applications/food.aspx',
          'ru-ua':
            'https://www.spray.com.ua/markets_and_applications/food.aspx',
          'fr-ch':
            'https://www.spray.com/fr-ch/industries/nourriture-et-boissons',
          'de-at': 'https://www.spray.com/de-at/industrien/food-and-beverage',
          'de-de': 'https://www.spray.com/de-de/industrien/food-and-beverage',
          'el-gr': 'https://www.spray.com/el-gr/industries/τρόφιμα',
          'ru-kz':
            'https://www.spray.com/ru-kz/отрасли/продукты-питания-и-напитки',
          'ru-ru':
            'https://www.spray.com/ru-ru/отрасли/продукты-питания-и-напитки',
          'es-co': 'https://www.spray.com/es-co/industrias/alimentos-y-bebidas',
          'bg-bg': 'https://www.spray.com/bg-bg/индустрии/food-and-beverage',
          'en-za': 'https://www.spray.com/en-za/industries/food-and-beverage',
          'sl-si': 'https://www.spray.com/sl-si/industrije/food-and-beverage',
          'cs-cz': 'https://www.spray.com/cs-cz/industries/food-and-beverage',
          'nl-nl': 'https://www.spray.com/nl-nl/industries/food-and-beverage',
          'en-ae': 'https://www.spray.com/en-ae/industries/food-and-beverage',
          'en-au': 'https://www.spray.com/en-au/industries/food-and-beverage',
          'en-ca': 'https://www.spray.com/en-ca/industries/food-and-beverage',
          'pl-pl': 'https://www.spray.com/pl-pl/industries/food-and-beverage',
          'ro-ro': 'https://www.spray.com/ro-ro/industries/alimente-și-băuturi',
          'es-ar': 'https://www.spray.com/es-ar/industrias/alimentos-y-bebidas',
          'es-cl': 'https://www.spray.com/es-cl/industrias/alimentos-y-bebidas',
          'es-ec': 'https://www.spray.com/es-ec/industrias/alimentos-y-bebidas',
          'es-mx': 'https://www.spray.com/es-mx/industrias/alimentos-y-bebidas',
          'tr-tr': 'https://www.spray.com/tr-tr/industries/yiyecek-ve-içecek',
          'en-be': 'https://www.spray.com/en-be/industries/food-and-beverage',
          'en-my': 'https://www.spray.com/en-my/industries/food-and-beverage',
          'en-at': 'https://www.spray.com/en-at/industries/food-and-beverage',
          'hu-hu': 'https://www.spray.com/hu-hu/iparágak/étel-és-ital',
          'es-pe': 'https://www.spray.com/es-pe/industrias/alimentos-y-bebidas',
          'es-es':
            'https://www.spray.com/es-es/industrias/industria-alimentaria-y-de-bebidas',
          'de-be': 'https://www.spray.com/de-be/industrien/food-and-beverage',
          'nl-be': 'https://www.spray.com/nl-be/industries/food-and-beverage',
          'en-nz': 'https://www.spray.com/en-nz/industries/food-and-beverage',
          'fi-fi':
            'https://www.spray.com/fi-fi/teollisuudenalat/ruoka-ja-juoma',
          'fr-ca':
            'https://www.spray.com/fr-ca/industries/nourriture-et-boissons',
          'fr-fr':
            'https://www.spray.com/fr-fr/industries/nourriture-et-boissons',
          'en-id': 'https://www.spray.com/en-id/industries/food-and-beverage',
          'en-ch': 'https://www.spray.com/en-ch/industries/food-and-beverage',
          'en-cz': 'https://www.spray.com/en-cz/industries/food-and-beverage',
          'de-ch': 'https://www.spray.com/de-ch/industrien/food-and-beverage',
          'en-sg': 'https://www.spray.com/en-sg/industries/food-and-beverage',
          'et-ee': 'https://www.spray.com/et-ee/tööstused/food-and-beverage',
          'sk-sk': 'https://www.spray.com/sk-sk/odvetvia/food-and-beverage',
          'lt-lt':
            'https://www.spray.com/lt-lt/pramonės-šakos/food-and-beverage',
          'lv-lv': 'https://www.spray.com/lv-lv/nozares/food-and-beverage',
          'en-ma': 'https://www.spray.com/en-ma/industries/food-and-beverage',
          'en-cd': 'https://www.spray.com/en-cd/industries/food-and-beverage',
          'en-sk': 'https://www.spray.com/en-sk/industries/food-and-beverage',
          'fr-sn':
            'https://www.spray.com/fr-sn/industries/nourriture-et-boissons',
          'en-tn': 'https://www.spray.com/en-tn/industries/food-and-beverage',
          'en-zm': 'https://www.spray.com/en-zm/industries/food-and-beverage',
          'en-lt': 'https://www.spray.com/en-lt/industries/food-and-beverage',
          'fr-ci':
            'https://www.spray.com/fr-ci/industries/nourriture-et-boissons',
          'en-bh': 'https://www.spray.com/en-bh/industries/food-and-beverage',
          'fr-cm':
            'https://www.spray.com/fr-cm/industries/nourriture-et-boissons',
          'en-mg': 'https://www.spray.com/en-mg/industries/food-and-beverage',
          'en-sa': 'https://www.spray.com/en-sa/industries/food-and-beverage',
          'fr-dz':
            'https://www.spray.com/fr-dz/industries/nourriture-et-boissons',
          'en-ci': 'https://www.spray.com/en-ci/industries/food-and-beverage',
          'en-ng': 'https://www.spray.com/en-ng/industries/food-and-beverage',
          'fr-ma':
            'https://www.spray.com/fr-ma/industries/nourriture-et-boissons',
          'en-cm': 'https://www.spray.com/en-cm/industries/food-and-beverage',
          'fr-mg':
            'https://www.spray.com/fr-mg/industries/nourriture-et-boissons',
          'en-iq': 'https://www.spray.com/en-iq/industries/food-and-beverage',
          'en-sn': 'https://www.spray.com/en-sn/industries/food-and-beverage',
          'fr-tn':
            'https://www.spray.com/fr-tn/industries/nourriture-et-boissons',
          'en-dz': 'https://www.spray.com/en-dz/industries/food-and-beverage',
          'en-jo': 'https://www.spray.com/en-jo/industries/food-and-beverage',
          'en-eg': 'https://www.spray.com/en-eg/industries/food-and-beverage',
          'en-ke': 'https://www.spray.com/en-ke/industries/food-and-beverage',
          'en-om': 'https://www.spray.com/en-om/industries/food-and-beverage',
          'en-kw': 'https://www.spray.com/en-kw/industries/food-and-beverage',
          'fr-cd':
            'https://www.spray.com/fr-cd/industries/nourriture-et-boissons',
          'en-lb': 'https://www.spray.com/en-lb/industries/food-and-beverage',
          'en-pk': 'https://www.spray.com/en-pk/industries/food-and-beverage',
          'en-lv': 'https://www.spray.com/en-lv/industries/food-and-beverage',
          'en-qa': 'https://www.spray.com/en-qa/industries/food-and-beverage',
          'it-ch': 'https://www.spray.com/it-ch/industries/food-and-beverage',
          'en-in': 'https://www.spray.com/en-in/industries/food-and-beverage',
          'fr-be':
            'https://www.spray.com/fr-be/industries/nourriture-et-boissons',
          'nb-no': 'https://www.spray.com/nb-no/industrier/food-and-beverage',
          'it-it': 'https://www.spray.com/it-it/industries/food-and-beverage',
          'sv-se': 'https://www.spray.com/sv-se/branscher/food-and-beverage',
          'en-es': 'https://www.spray.com/en-es/industries/food-and-beverage',
          'en-hu': 'https://www.spray.com/en-hu/industries/food-and-beverage',
          'en-it': 'https://www.spray.com/en-it/industries/food-and-beverage',
          'en-nl': 'https://www.spray.com/en-nl/industries/food-and-beverage',
          'en-no': 'https://www.spray.com/en-no/industries/food-and-beverage',
          'en-pl': 'https://www.spray.com/en-pl/industries/food-and-beverage',
          'en-ro': 'https://www.spray.com/en-ro/industries/food-and-beverage',
          'en-se': 'https://www.spray.com/en-se/industries/food-and-beverage',
          'en-tr': 'https://www.spray.com/en-tr/industries/food-and-beverage',
          'en-de': 'https://www.spray.com/en-de/industries/food-and-beverage',
          'en-fi': 'https://www.spray.com/en-fi/industries/food-and-beverage',
          'en-fr': 'https://www.spray.com/en-fr/industries/food-and-beverage',
          'en-gb': 'https://www.spray.com/en-gb/industries/food-and-beverage',
          'en-gr': 'https://www.spray.com/en-gr/industries/food-and-beverage',
          'en-vn': 'https://www.spray.com/en-vn/industries/food-and-beverage',
          'en-hk': 'https://www.spray.com/en-hk/industries/food-and-beverage',
          'en-ph': 'https://www.spray.com/en-ph/industries/food-and-beverage',
          en: 'https://www.spray.com/industries/food-and-beverage'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.industries.items
            .pharmaceuticalManufacturing,
        links: {
          'x-default':
            'https://www.spray.com/industries/pharmaceutical-manufacturing',
          'ko-kr':
            'https://www.spray.com/ko-kr/industries/pharmaceutical-manufacturing',
          'zh-cn':
            'https://www.spray.com/zh-cn/行业/pharmaceutical-manufacturing',
          'ja-jp':
            'https://www.spray.co.jp/markets_and_applications/pharmaceutical.aspx',
          'ru-ua':
            'https://www.spray.com.ua/markets_and_applications/pharmaceutical.aspx',
          'fr-ch':
            'https://www.spray.com/fr-ch/industries/technologie-de-pulverisation-pour-la-fabrication-de-produits-pharmaceutiques',
          'de-at':
            'https://www.spray.com/de-at/industrien/pharmaceutical-manufacturing',
          'de-de':
            'https://www.spray.com/de-de/industrien/pharmaceutical-manufacturing',
          'el-gr':
            'https://www.spray.com/el-gr/industries/παρασκευή-φαρμακευτικών',
          'ru-kz':
            'https://www.spray.com/ru-kz/отрасли/фармацевтическое-производство',
          'ru-ru':
            'https://www.spray.com/ru-ru/отрасли/фармацевтическое-производство',
          'es-co':
            'https://www.spray.com/es-co/industrias/industria-farmacéutica',
          'bg-bg':
            'https://www.spray.com/bg-bg/индустрии/фармацевтично-производство',
          'en-za':
            'https://www.spray.com/en-za/industries/pharmaceutical-manufacturing',
          'sl-si':
            'https://www.spray.com/sl-si/industrije/farmacevtska-proizvodnja',
          'cs-cz':
            'https://www.spray.com/cs-cz/industries/pharmaceutical-manufacturing',
          'nl-nl':
            'https://www.spray.com/nl-nl/industries/pharmaceutical-manufacturing',
          'en-ae':
            'https://www.spray.com/en-ae/industries/pharmaceutical-manufacturing',
          'en-au':
            'https://www.spray.com/en-au/industries/pharmaceutical-manufacturing',
          'en-ca':
            'https://www.spray.com/en-ca/industries/pharmaceutical-manufacturing',
          'pl-pl':
            'https://www.spray.com/pl-pl/industries/pharmaceutical-manufacturing',
          'ro-ro':
            'https://www.spray.com/ro-ro/industries/fabricarea-produselor-farmaceutice',
          'es-ar':
            'https://www.spray.com/es-ar/industrias/industria-farmacéutica',
          'es-cl':
            'https://www.spray.com/es-cl/industrias/industria-farmacéutica',
          'es-ec':
            'https://www.spray.com/es-ec/industrias/industria-farmacéutica',
          'es-mx':
            'https://www.spray.com/es-mx/industrias/industria-farmacéutica',
          'tr-tr':
            'https://www.spray.com/tr-tr/industries/pharmaceutical-manufacturing',
          'en-be':
            'https://www.spray.com/en-be/industries/pharmaceutical-manufacturing',
          'en-my':
            'https://www.spray.com/en-my/industries/pharmaceutical-manufacturing',
          'en-at':
            'https://www.spray.com/en-at/industries/pharmaceutical-manufacturing',
          'hu-hu': 'https://www.spray.com/hu-hu/iparágak/gyógyszergyártás',
          'es-pe':
            'https://www.spray.com/es-pe/industrias/industria-farmacéutica',
          'es-es':
            'https://www.spray.com/es-es/industrias/industria-farmaceutica',
          'de-be':
            'https://www.spray.com/de-be/industrien/pharmaceutical-manufacturing',
          'nl-be':
            'https://www.spray.com/nl-be/industries/pharmaceutical-manufacturing',
          'en-nz':
            'https://www.spray.com/en-nz/industries/pharmaceutical-manufacturing',
          'fi-fi':
            'https://www.spray.com/fi-fi/teollisuudenalat/laaketeollisuuteen',
          'fr-ca':
            'https://www.spray.com/fr-ca/industries/la-fabrication-pharmaceutique',
          'fr-fr':
            'https://www.spray.com/fr-fr/industries/technologie-de-pulverisation-pour-la-fabrication-de-produits-pharmaceutiques',
          'en-id':
            'https://www.spray.com/en-id/industries/pharmaceutical-manufacturing',
          'en-ch':
            'https://www.spray.com/en-ch/industries/pharmaceutical-manufacturing',
          'en-cz':
            'https://www.spray.com/en-cz/industries/pharmaceutical-manufacturing',
          'de-ch':
            'https://www.spray.com/de-ch/industrien/pharmaceutical-manufacturing',
          'en-sg':
            'https://www.spray.com/en-sg/industries/pharmaceutical-manufacturing',
          'et-ee': 'https://www.spray.com/et-ee/tööstused/farmaatsiatööstus',
          'sk-sk': 'https://www.spray.com/sk-sk/odvetvia/farmaceutická-výroba',
          'lt-lt':
            'https://www.spray.com/lt-lt/pramonės-šakos/farmacijos-gamyba',
          'lv-lv':
            'https://www.spray.com/lv-lv/nozares/farmācijas-produktu-ražošana',
          'en-ma':
            'https://www.spray.com/en-ma/industries/pharmaceutical-manufacturing',
          'en-cd':
            'https://www.spray.com/en-cd/industries/pharmaceutical-manufacturing',
          'en-sk':
            'https://www.spray.com/en-sk/industries/pharmaceutical-manufacturing',
          'fr-sn':
            'https://www.spray.com/fr-sn/industries/technologie-de-pulverisation-pour-la-fabrication-de-produits-pharmaceutiques',
          'en-tn':
            'https://www.spray.com/en-tn/industries/pharmaceutical-manufacturing',
          'en-zm':
            'https://www.spray.com/en-zm/industries/pharmaceutical-manufacturing',
          'en-lt':
            'https://www.spray.com/en-lt/industries/pharmaceutical-manufacturing',
          'fr-ci':
            'https://www.spray.com/fr-ci/industries/technologie-de-pulverisation-pour-la-fabrication-de-produits-pharmaceutiques',
          'en-bh':
            'https://www.spray.com/en-bh/industries/pharmaceutical-manufacturing',
          'fr-cm':
            'https://www.spray.com/fr-cm/industries/technologie-de-pulverisation-pour-la-fabrication-de-produits-pharmaceutiques',
          'en-mg':
            'https://www.spray.com/en-mg/industries/pharmaceutical-manufacturing',
          'en-sa':
            'https://www.spray.com/en-sa/industries/pharmaceutical-manufacturing',
          'fr-dz':
            'https://www.spray.com/fr-dz/industries/technologie-de-pulverisation-pour-la-fabrication-de-produits-pharmaceutiques',
          'en-ci':
            'https://www.spray.com/en-ci/industries/pharmaceutical-manufacturing',
          'en-ng':
            'https://www.spray.com/en-ng/industries/pharmaceutical-manufacturing',
          'fr-ma':
            'https://www.spray.com/fr-ma/industries/technologie-de-pulverisation-pour-la-fabrication-de-produits-pharmaceutiques',
          'en-cm':
            'https://www.spray.com/en-cm/industries/pharmaceutical-manufacturing',
          'fr-mg':
            'https://www.spray.com/fr-mg/industries/technologie-de-pulverisation-pour-la-fabrication-de-produits-pharmaceutiques',
          'en-iq':
            'https://www.spray.com/en-iq/industries/pharmaceutical-manufacturing',
          'en-sn':
            'https://www.spray.com/en-sn/industries/pharmaceutical-manufacturing',
          'fr-tn':
            'https://www.spray.com/fr-tn/industries/technologie-de-pulverisation-pour-la-fabrication-de-produits-pharmaceutiques',
          'en-dz':
            'https://www.spray.com/en-dz/industries/pharmaceutical-manufacturing',
          'en-jo':
            'https://www.spray.com/en-jo/industries/pharmaceutical-manufacturing',
          'en-eg':
            'https://www.spray.com/en-eg/industries/pharmaceutical-manufacturing',
          'en-ke':
            'https://www.spray.com/en-ke/industries/pharmaceutical-manufacturing',
          'en-om':
            'https://www.spray.com/en-om/industries/pharmaceutical-manufacturing',
          'en-kw':
            'https://www.spray.com/en-kw/industries/pharmaceutical-manufacturing',
          'fr-cd':
            'https://www.spray.com/fr-cd/industries/technologie-de-pulverisation-pour-la-fabrication-de-produits-pharmaceutiques',
          'en-lb':
            'https://www.spray.com/en-lb/industries/pharmaceutical-manufacturing',
          'en-pk':
            'https://www.spray.com/en-pk/industries/pharmaceutical-manufacturing',
          'en-lv':
            'https://www.spray.com/en-lv/industries/pharmaceutical-manufacturing',
          'en-qa':
            'https://www.spray.com/en-qa/industries/pharmaceutical-manufacturing',
          'it-ch':
            'https://www.spray.com/it-ch/industries/pharmaceutical-manufacturing',
          'en-in':
            'https://www.spray.com/en-in/industries/pharmaceutical-manufacturing',
          'fr-be':
            'https://www.spray.com/fr-be/industries/technologie-de-pulverisation-pour-la-fabrication-de-produits-pharmaceutiques',
          'nb-no':
            'https://www.spray.com/nb-no/industrier/farmasøytisk-produksjon',
          'it-it':
            'https://www.spray.com/it-it/industries/pharmaceutical-manufacturing',
          'sv-se':
            'https://www.spray.com/sv-se/branscher/läkemedelstillverkning',
          'en-es':
            'https://www.spray.com/en-es/industries/pharmaceutical-manufacturing',
          'en-hu':
            'https://www.spray.com/en-hu/industries/pharmaceutical-manufacturing',
          'en-it':
            'https://www.spray.com/en-it/industries/pharmaceutical-manufacturing',
          'en-nl':
            'https://www.spray.com/en-nl/industries/pharmaceutical-manufacturing',
          'en-no':
            'https://www.spray.com/en-no/industries/pharmaceutical-manufacturing',
          'en-pl':
            'https://www.spray.com/en-pl/industries/pharmaceutical-manufacturing',
          'en-ro':
            'https://www.spray.com/en-ro/industries/pharmaceutical-manufacturing',
          'en-se':
            'https://www.spray.com/en-se/industries/pharmaceutical-manufacturing',
          'en-tr':
            'https://www.spray.com/en-tr/industries/pharmaceutical-manufacturing',
          'en-de':
            'https://www.spray.com/en-de/industries/pharmaceutical-manufacturing',
          'en-fi':
            'https://www.spray.com/en-fi/industries/pharmaceutical-manufacturing',
          'en-fr':
            'https://www.spray.com/en-fr/industries/pharmaceutical-manufacturing',
          'en-gb':
            'https://www.spray.com/en-gb/industries/pharmaceutical-manufacturing',
          'en-gr':
            'https://www.spray.com/en-gr/industries/pharmaceutical-manufacturing',
          'en-vn':
            'https://www.spray.com/en-vn/industries/pharmaceutical-manufacturing',
          'en-hk':
            'https://www.spray.com/en-hk/industries/pharmaceutical-manufacturing',
          'en-ph':
            'https://www.spray.com/en-ph/industries/pharmaceutical-manufacturing',
          en: 'https://www.spray.com/industries/pharmaceutical-manufacturing'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.industries.items.steelAndMetals,
        links: {
          'x-default':
            'https://www.spray.com/industries/steel-and-metal-manufacturing',
          'ko-kr':
            'https://www.spray.com/ko-kr/industries/steel-and-metal-manufacturing',
          'zh-cn':
            'https://www.spray.com/zh-cn/行业/steel-and-metal-manufacturing',
          'ja-jp':
            'https://www.spray.co.jp/markets_and_applications/steel.aspx',
          'ru-ua':
            'https://www.spray.com.ua/markets_and_applications/steel.aspx',
          'fr-ch':
            'https://www.spray.com/fr-ch/industries/technologie-de-pulverisation-pour-les-acieries-et-la-fabrication-des-metaux',
          'de-at':
            'https://www.spray.com/de-at/industrien/steel-and-metal-manufacturing',
          'de-de':
            'https://www.spray.com/de-de/industrien/steel-and-metal-manufacturing',
          'el-gr': 'https://www.spray.com/el-gr/industries/χάλυβας-και-μέταλλα',
          'ru-kz':
            'https://www.spray.com/ru-kz/отрасли/производство-стали-и-металла',
          'ru-ru':
            'https://www.spray.com/ru-ru/отрасли/производство-стали-и-металла',
          'es-co':
            'https://www.spray.com/es-co/industrias/fabricación-de-acero-y-metal',
          'bg-bg':
            'https://www.spray.com/bg-bg/индустрии/производство-на-стомана-и-метали',
          'en-za':
            'https://www.spray.com/en-za/industries/steel-and-metal-manufacturing',
          'sl-si':
            'https://www.spray.com/sl-si/industrije/proizvodnja-jekla-in-kovin',
          'cs-cz':
            'https://www.spray.com/cs-cz/industries/steel-and-metal-manufacturing',
          'nl-nl':
            'https://www.spray.com/nl-nl/industries/steel-and-metal-manufacturing',
          'en-ae':
            'https://www.spray.com/en-ae/industries/steel-and-metal-manufacturing',
          'en-au':
            'https://www.spray.com/en-au/industries/steel-and-metal-manufacturing',
          'en-ca':
            'https://www.spray.com/en-ca/industries/steel-and-metal-manufacturing',
          'pl-pl':
            'https://www.spray.com/pl-pl/industries/steel-and-metal-manufacturing',
          'ro-ro':
            'https://www.spray.com/ro-ro/industries/producția-de-oțel-și-metal',
          'es-ar':
            'https://www.spray.com/es-ar/industrias/fabricación-de-acero-y-metal',
          'es-cl':
            'https://www.spray.com/es-cl/industrias/fabricación-de-acero-y-metal',
          'es-ec':
            'https://www.spray.com/es-ec/industrias/fabricación-de-acero-y-metal',
          'es-mx':
            'https://www.spray.com/es-mx/industrias/fabricación-de-acero-y-metal',
          'tr-tr':
            'https://www.spray.com/tr-tr/industries/steel-and-metal-manufacturing',
          'en-be':
            'https://www.spray.com/en-be/industries/steel-and-metal-manufacturing',
          'en-my':
            'https://www.spray.com/en-my/industries/steel-and-metal-manufacturing',
          'en-at':
            'https://www.spray.com/en-at/industries/steel-and-metal-manufacturing',
          'hu-hu': 'https://www.spray.com/hu-hu/iparágak/acél--és-fémgyártás',
          'es-pe':
            'https://www.spray.com/es-pe/industrias/fabricación-de-acero-y-metal',
          'es-es':
            'https://www.spray.com/es-es/industrias/acerias-y-fabricación-de-metales',
          'de-be':
            'https://www.spray.com/de-be/industrien/steel-and-metal-manufacturing',
          'nl-be':
            'https://www.spray.com/nl-be/industries/steel-and-metal-manufacturing',
          'en-nz':
            'https://www.spray.com/en-nz/industries/steel-and-metal-manufacturing',
          'fi-fi':
            'https://www.spray.com/fi-fi/teollisuudenalat/teras-ja-metalliteollisuudelle',
          'fr-ca':
            "https://www.spray.com/fr-ca/industries/la-fabrication-de-l'acier-et-des-métaux",
          'fr-fr':
            'https://www.spray.com/fr-fr/industries/technologie-de-pulverisation-pour-les-acieries-et-la-fabrication-des-metaux',
          'en-id':
            'https://www.spray.com/en-id/industries/steel-and-metal-manufacturing',
          'en-ch':
            'https://www.spray.com/en-ch/industries/steel-and-metal-manufacturing',
          'en-cz':
            'https://www.spray.com/en-cz/industries/steel-and-metal-manufacturing',
          'de-ch':
            'https://www.spray.com/de-ch/industrien/steel-and-metal-manufacturing',
          'en-sg':
            'https://www.spray.com/en-sg/industries/steel-and-metal-manufacturing',
          'et-ee':
            'https://www.spray.com/et-ee/tööstused/terase-ja-metalli-tootmine',
          'sk-sk': 'https://www.spray.com/sk-sk/odvetvia/výroba-ocele-a-kovov',
          'lt-lt':
            'https://www.spray.com/lt-lt/pramonės-šakos/plieno-ir-metalo-gamyba',
          'lv-lv':
            'https://www.spray.com/lv-lv/nozares/tērauda-un-metāla-ražošana',
          'en-ma':
            'https://www.spray.com/en-ma/industries/steel-and-metal-manufacturing',
          'en-cd':
            'https://www.spray.com/en-cd/industries/steel-and-metal-manufacturing',
          'en-sk':
            'https://www.spray.com/en-sk/industries/steel-and-metal-manufacturing',
          'fr-sn':
            'https://www.spray.com/fr-sn/industries/technologie-de-pulverisation-pour-les-acieries-et-la-fabrication-des-metaux',
          'en-tn':
            'https://www.spray.com/en-tn/industries/steel-and-metal-manufacturing',
          'en-zm':
            'https://www.spray.com/en-zm/industries/steel-and-metal-manufacturing',
          'en-lt':
            'https://www.spray.com/en-lt/industries/steel-and-metal-manufacturing',
          'fr-ci':
            'https://www.spray.com/fr-ci/industries/technologie-de-pulverisation-pour-les-acieries-et-la-fabrication-des-metaux',
          'en-bh':
            'https://www.spray.com/en-bh/industries/steel-and-metal-manufacturing',
          'fr-cm':
            'https://www.spray.com/fr-cm/industries/technologie-de-pulverisation-pour-les-acieries-et-la-fabrication-des-metaux',
          'en-mg':
            'https://www.spray.com/en-mg/industries/steel-and-metal-manufacturing',
          'en-sa':
            'https://www.spray.com/en-sa/industries/steel-and-metal-manufacturing',
          'fr-dz':
            'https://www.spray.com/fr-dz/industries/technologie-de-pulverisation-pour-les-acieries-et-la-fabrication-des-metaux',
          'en-ci':
            'https://www.spray.com/en-ci/industries/steel-and-metal-manufacturing',
          'en-ng':
            'https://www.spray.com/en-ng/industries/steel-and-metal-manufacturing',
          'fr-ma':
            'https://www.spray.com/fr-ma/industries/technologie-de-pulverisation-pour-les-acieries-et-la-fabrication-des-metaux',
          'en-cm':
            'https://www.spray.com/en-cm/industries/steel-and-metal-manufacturing',
          'fr-mg':
            'https://www.spray.com/fr-mg/industries/technologie-de-pulverisation-pour-les-acieries-et-la-fabrication-des-metaux',
          'en-iq':
            'https://www.spray.com/en-iq/industries/steel-and-metal-manufacturing',
          'en-sn':
            'https://www.spray.com/en-sn/industries/steel-and-metal-manufacturing',
          'fr-tn':
            'https://www.spray.com/fr-tn/industries/technologie-de-pulverisation-pour-les-acieries-et-la-fabrication-des-metaux',
          'en-dz':
            'https://www.spray.com/en-dz/industries/steel-and-metal-manufacturing',
          'en-jo':
            'https://www.spray.com/en-jo/industries/steel-and-metal-manufacturing',
          'en-eg':
            'https://www.spray.com/en-eg/industries/steel-and-metal-manufacturing',
          'en-ke':
            'https://www.spray.com/en-ke/industries/steel-and-metal-manufacturing',
          'en-om':
            'https://www.spray.com/en-om/industries/steel-and-metal-manufacturing',
          'en-kw':
            'https://www.spray.com/en-kw/industries/steel-and-metal-manufacturing',
          'fr-cd':
            'https://www.spray.com/fr-cd/industries/technologie-de-pulverisation-pour-les-acieries-et-la-fabrication-des-metaux',
          'en-lb':
            'https://www.spray.com/en-lb/industries/steel-and-metal-manufacturing',
          'en-pk':
            'https://www.spray.com/en-pk/industries/steel-and-metal-manufacturing',
          'en-lv':
            'https://www.spray.com/en-lv/industries/steel-and-metal-manufacturing',
          'en-qa':
            'https://www.spray.com/en-qa/industries/steel-and-metal-manufacturing',
          'it-ch':
            'https://www.spray.com/it-ch/industries/steel-and-metal-manufacturing',
          'en-in':
            'https://www.spray.com/en-in/industries/steel-and-metal-manufacturing',
          'fr-be':
            'https://www.spray.com/fr-be/industries/technologie-de-pulverisation-pour-les-acieries-et-la-fabrication-des-metaux',
          'nb-no':
            'https://www.spray.com/nb-no/industrier/stål--og-metallproduksjon',
          'it-it':
            'https://www.spray.com/it-it/industries/steel-and-metal-manufacturing',
          'sv-se':
            'https://www.spray.com/sv-se/branscher/stål--och-metalltillverkning',
          'en-es':
            'https://www.spray.com/en-es/industries/steel-and-metal-manufacturing',
          'en-hu':
            'https://www.spray.com/en-hu/industries/steel-and-metal-manufacturing',
          'en-it':
            'https://www.spray.com/en-it/industries/steel-and-metal-manufacturing',
          'en-nl':
            'https://www.spray.com/en-nl/industries/steel-and-metal-manufacturing',
          'en-no':
            'https://www.spray.com/en-no/industries/steel-and-metal-manufacturing',
          'en-pl':
            'https://www.spray.com/en-pl/industries/steel-and-metal-manufacturing',
          'en-ro':
            'https://www.spray.com/en-ro/industries/steel-and-metal-manufacturing',
          'en-se':
            'https://www.spray.com/en-se/industries/steel-and-metal-manufacturing',
          'en-tr':
            'https://www.spray.com/en-tr/industries/steel-and-metal-manufacturing',
          'en-de':
            'https://www.spray.com/en-de/industries/steel-and-metal-manufacturing',
          'en-fi':
            'https://www.spray.com/en-fi/industries/steel-and-metal-manufacturing',
          'en-fr':
            'https://www.spray.com/en-fr/industries/steel-and-metal-manufacturing',
          'en-gb':
            'https://www.spray.com/en-gb/industries/steel-and-metal-manufacturing',
          'en-gr':
            'https://www.spray.com/en-gr/industries/steel-and-metal-manufacturing',
          'en-vn':
            'https://www.spray.com/en-vn/industries/steel-and-metal-manufacturing',
          'en-hk':
            'https://www.spray.com/en-hk/industries/steel-and-metal-manufacturing',
          'en-ph':
            'https://www.spray.com/en-ph/industries/steel-and-metal-manufacturing',
          en: 'https://www.spray.com/industries/steel-and-metal-manufacturing'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.industries.items.pulpPaperAndTissue,
        links: {
          'x-default':
            'https://www.spray.com/industries/pulp-paper-and-tissue-manufacturing',
          'ko-kr':
            'https://www.spray.com/ko-kr/industries/pulp-paper-and-tissue-manufacturing',
          'zh-cn':
            'https://www.spray.com/zh-cn/行业/pulp-paper-and-tissue-manufacturing',
          'ja-jp':
            'https://www.spray.co.jp/markets_and_applications/paper.aspx',
          'ru-ua':
            'https://www.spray.com.ua/markets_and_applications/paper.aspx',
          'fr-ch':
            'https://www.spray.com/fr-ch/industries/technologie-de-pulverisation-pour-la-fabrication-de-pates,-papiers-et-tissus',
          'de-at':
            'https://www.spray.com/de-at/industrien/pulp-paper-and-tissue-manufacturing',
          'de-de':
            'https://www.spray.com/de-de/industrien/pulp-paper-and-tissue-manufacturing',
          'el-gr': 'https://www.spray.com/el-gr/industries/πολτός-και-χαρτί',
          'ru-kz':
            'https://www.spray.com/ru-kz/отрасли/целлюлозно-бумажное--производство',
          'ru-ru':
            'https://www.spray.com/ru-ru/отрасли/целлюлозно-бумажное--производство',
          'es-co':
            'https://www.spray.com/es-co/industrias/fabricación-de-pulpa,-papel-y-tissue',
          'bg-bg':
            'https://www.spray.com/bg-bg/индустрии/производство-на-целулоза,-хартия-и-тъкани',
          'en-za':
            'https://www.spray.com/en-za/industries/pulp-paper-and-tissue-manufacturing',
          'sl-si':
            'https://www.spray.com/sl-si/industrije/proizvodnja-celuloze,-papirja-in-tkiva',
          'cs-cz':
            'https://www.spray.com/cs-cz/industries/pulp-paper-and-tissue-manufacturing',
          'nl-nl':
            'https://www.spray.com/nl-nl/industries/pulp-paper-and-tissue-manufacturing',
          'en-ae':
            'https://www.spray.com/en-ae/industries/pulp-paper-and-tissue-manufacturing',
          'en-au':
            'https://www.spray.com/en-au/industries/pulp-paper-and-tissue-manufacturing',
          'en-ca':
            'https://www.spray.com/en-ca/industries/pulp-paper-and-tissue-manufacturing',
          'pl-pl':
            'https://www.spray.com/pl-pl/industries/pulp-paper-and-tissue-manufacturing',
          'ro-ro':
            'https://www.spray.com/ro-ro/industries/fabricarea-celulozei-și-a-hârtiei-și-a-țesăturilor',
          'es-ar':
            'https://www.spray.com/es-ar/industrias/fabricación-de-pulpa,-papel-y-tissue',
          'es-cl':
            'https://www.spray.com/es-cl/industrias/fabricación-de-pulpa,-papel-y-tissue',
          'es-ec':
            'https://www.spray.com/es-ec/industrias/fabricación-de-pulpa,-papel-y-tissue',
          'es-mx':
            'https://www.spray.com/es-mx/industrias/fabricación-de-pulpa,-papel-y-tissue',
          'tr-tr':
            'https://www.spray.com/tr-tr/industries/pulp-paper-and-tissue-manufacturing',
          'en-be':
            'https://www.spray.com/en-be/industries/pulp-paper-and-tissue-manufacturing',
          'en-my':
            'https://www.spray.com/en-my/industries/pulp-paper-and-tissue-manufacturing',
          'en-at':
            'https://www.spray.com/en-at/industries/pulp-paper-and-tissue-manufacturing',
          'hu-hu':
            'https://www.spray.com/hu-hu/iparágak/péppapír-és-szövetgyártás',
          'es-pe':
            'https://www.spray.com/es-pe/industrias/fabricación-de-pulpa,-papel-y-tissue',
          'es-es':
            'https://www.spray.com/es-es/industrias/fabricacion-de-pasta,-papel-y-tisú',
          'de-be':
            'https://www.spray.com/de-be/industrien/pulp-paper-and-tissue-manufacturing',
          'nl-be':
            'https://www.spray.com/nl-be/industries/pulp-paper-and-tissue-manufacturing',
          'en-nz':
            'https://www.spray.com/en-nz/industries/pulp-paper-and-tissue-manufacturing',
          'fi-fi':
            'https://www.spray.com/fi-fi/teollisuudenalat/paperi-sellu-ja-pehmopaperivalmistuksessa',
          'fr-ca':
            'https://www.spray.com/fr-ca/industries/la-fabrication-des-pâtes-et-papiers-et-des-tissus',
          'fr-fr':
            'https://www.spray.com/fr-fr/industries/technologie-de-pulverisation-pour-la-fabrication-de-pates,-papiers-et-tissus',
          'en-id':
            'https://www.spray.com/en-id/industries/pulp-paper-and-tissue-manufacturing',
          'en-ch':
            'https://www.spray.com/en-ch/industries/pulp-paper-and-tissue-manufacturing',
          'en-cz':
            'https://www.spray.com/en-cz/industries/pulp-paper-and-tissue-manufacturing',
          'de-ch':
            'https://www.spray.com/de-ch/industrien/pulp-paper-and-tissue-manufacturing',
          'en-sg':
            'https://www.spray.com/en-sg/industries/pulp-paper-and-tissue-manufacturing',
          'et-ee':
            'https://www.spray.com/et-ee/tööstused/paberimassi-ja-kanga-tootmine',
          'sk-sk':
            'https://www.spray.com/sk-sk/odvetvia/výroba-celulózového-papiera-a-tkanín',
          'lt-lt':
            'https://www.spray.com/lt-lt/pramonės-šakos/celiuliozės-popieriaus-ir-audinių-gamyba',
          'lv-lv':
            'https://www.spray.com/lv-lv/nozares/celulozes-papīra-un-audu-ražošana',
          'en-ma':
            'https://www.spray.com/en-ma/industries/pulp-paper-and-tissue-manufacturing',
          'en-cd':
            'https://www.spray.com/en-cd/industries/pulp-paper-and-tissue-manufacturing',
          'en-sk':
            'https://www.spray.com/en-sk/industries/pulp-paper-and-tissue-manufacturing',
          'fr-sn':
            'https://www.spray.com/fr-sn/industries/technologie-de-pulverisation-pour-la-fabrication-de-pates,-papiers-et-tissus',
          'en-tn':
            'https://www.spray.com/en-tn/industries/pulp-paper-and-tissue-manufacturing',
          'en-zm':
            'https://www.spray.com/en-zm/industries/pulp-paper-and-tissue-manufacturing',
          'en-lt':
            'https://www.spray.com/en-lt/industries/pulp-paper-and-tissue-manufacturing',
          'fr-ci':
            'https://www.spray.com/fr-ci/industries/technologie-de-pulverisation-pour-la-fabrication-de-pates,-papiers-et-tissus',
          'en-bh':
            'https://www.spray.com/en-bh/industries/pulp-paper-and-tissue-manufacturing',
          'fr-cm':
            'https://www.spray.com/fr-cm/industries/technologie-de-pulverisation-pour-la-fabrication-de-pates,-papiers-et-tissus',
          'en-mg':
            'https://www.spray.com/en-mg/industries/pulp-paper-and-tissue-manufacturing',
          'en-sa':
            'https://www.spray.com/en-sa/industries/pulp-paper-and-tissue-manufacturing',
          'fr-dz':
            'https://www.spray.com/fr-dz/industries/technologie-de-pulverisation-pour-la-fabrication-de-pates,-papiers-et-tissus',
          'en-ci':
            'https://www.spray.com/en-ci/industries/pulp-paper-and-tissue-manufacturing',
          'en-ng':
            'https://www.spray.com/en-ng/industries/pulp-paper-and-tissue-manufacturing',
          'fr-ma':
            'https://www.spray.com/fr-ma/industries/technologie-de-pulverisation-pour-la-fabrication-de-pates,-papiers-et-tissus',
          'en-cm':
            'https://www.spray.com/en-cm/industries/pulp-paper-and-tissue-manufacturing',
          'fr-mg':
            'https://www.spray.com/fr-mg/industries/technologie-de-pulverisation-pour-la-fabrication-de-pates,-papiers-et-tissus',
          'en-iq':
            'https://www.spray.com/en-iq/industries/pulp-paper-and-tissue-manufacturing',
          'en-sn':
            'https://www.spray.com/en-sn/industries/pulp-paper-and-tissue-manufacturing',
          'fr-tn':
            'https://www.spray.com/fr-tn/industries/technologie-de-pulverisation-pour-la-fabrication-de-pates,-papiers-et-tissus',
          'en-dz':
            'https://www.spray.com/en-dz/industries/pulp-paper-and-tissue-manufacturing',
          'en-jo':
            'https://www.spray.com/en-jo/industries/pulp-paper-and-tissue-manufacturing',
          'en-eg':
            'https://www.spray.com/en-eg/industries/pulp-paper-and-tissue-manufacturing',
          'en-ke':
            'https://www.spray.com/en-ke/industries/pulp-paper-and-tissue-manufacturing',
          'en-om':
            'https://www.spray.com/en-om/industries/pulp-paper-and-tissue-manufacturing',
          'en-kw':
            'https://www.spray.com/en-kw/industries/pulp-paper-and-tissue-manufacturing',
          'fr-cd':
            'https://www.spray.com/fr-cd/industries/technologie-de-pulverisation-pour-la-fabrication-de-pates,-papiers-et-tissus',
          'en-lb':
            'https://www.spray.com/en-lb/industries/pulp-paper-and-tissue-manufacturing',
          'en-pk':
            'https://www.spray.com/en-pk/industries/pulp-paper-and-tissue-manufacturing',
          'en-lv':
            'https://www.spray.com/en-lv/industries/pulp-paper-and-tissue-manufacturing',
          'en-qa':
            'https://www.spray.com/en-qa/industries/pulp-paper-and-tissue-manufacturing',
          'it-ch':
            'https://www.spray.com/it-ch/industries/pulp-paper-and-tissue-manufacturing',
          'en-in':
            'https://www.spray.com/en-in/industries/pulp-paper-and-tissue-manufacturing',
          'fr-be':
            'https://www.spray.com/fr-be/industries/technologie-de-pulverisation-pour-la-fabrication-de-pates,-papiers-et-tissus',
          'nb-no':
            'https://www.spray.com/nb-no/industrier/massepapir--og-vevproduksjon',
          'it-it':
            'https://www.spray.com/it-it/industries/pulp-paper-and-tissue-manufacturing',
          'sv-se':
            'https://www.spray.com/sv-se/branscher/tillverkning-av-pappersmassa-och-mjukpapper',
          'en-es':
            'https://www.spray.com/en-es/industries/pulp-paper-and-tissue-manufacturing',
          'en-hu':
            'https://www.spray.com/en-hu/industries/pulp-paper-and-tissue-manufacturing',
          'en-it':
            'https://www.spray.com/en-it/industries/pulp-paper-and-tissue-manufacturing',
          'en-nl':
            'https://www.spray.com/en-nl/industries/pulp-paper-and-tissue-manufacturing',
          'en-no':
            'https://www.spray.com/en-no/industries/pulp-paper-and-tissue-manufacturing',
          'en-pl':
            'https://www.spray.com/en-pl/industries/pulp-paper-and-tissue-manufacturing',
          'en-ro':
            'https://www.spray.com/en-ro/industries/pulp-paper-and-tissue-manufacturing',
          'en-se':
            'https://www.spray.com/en-se/industries/pulp-paper-and-tissue-manufacturing',
          'en-tr':
            'https://www.spray.com/en-tr/industries/pulp-paper-and-tissue-manufacturing',
          'en-de':
            'https://www.spray.com/en-de/industries/pulp-paper-and-tissue-manufacturing',
          'en-fi':
            'https://www.spray.com/en-fi/industries/pulp-paper-and-tissue-manufacturing',
          'en-fr':
            'https://www.spray.com/en-fr/industries/pulp-paper-and-tissue-manufacturing',
          'en-gb':
            'https://www.spray.com/en-gb/industries/pulp-paper-and-tissue-manufacturing',
          'en-gr':
            'https://www.spray.com/en-gr/industries/pulp-paper-and-tissue-manufacturing',
          'en-vn':
            'https://www.spray.com/en-vn/industries/pulp-paper-and-tissue-manufacturing',
          'en-hk':
            'https://www.spray.com/en-hk/industries/pulp-paper-and-tissue-manufacturing',
          'en-ph':
            'https://www.spray.com/en-ph/industries/pulp-paper-and-tissue-manufacturing',
          en: 'https://www.spray.com/industries/pulp-paper-and-tissue-manufacturing'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.industries.items.chemicalProcessing,
        links: {
          'x-default': 'https://www.spray.com/industries/chemical-processing',
          'ko-kr': 'https://www.spray.com/ko-kr/industries/chemical-processing',
          'zh-cn': 'https://www.spray.com/zh-cn/行业/chemical-processing',
          'ru-ru':
            'https://www.spray.com/ru-ru/отрасли/химическая-промышленность',
          'ja-jp':
            'https://www.spray.co.jp/markets_and_applications/chemical.aspx',
          'ru-ua':
            'https://www.spray.com.ua/markets_and_applications/chemical.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/industries/chemical-processing',
          'fr-ch': 'https://www.spray.com/fr-ch/industries/traitement-chimique',
          'de-at': 'https://www.spray.com/de-at/industrien/chemical-processing',
          'de-de': 'https://www.spray.com/de-de/industrien/chemical-processing',
          'el-gr': 'https://www.spray.com/el-gr/industries/χημική-επεξεργασία',
          'ru-kz':
            'https://www.spray.com/ru-kz/отрасли/химическая-промышленность',
          'es-co':
            'https://www.spray.com/es-co/industrias/procesamiento-químico',
          'bg-bg': 'https://www.spray.com/bg-bg/индустрии/химическа-обработка',
          'en-za': 'https://www.spray.com/en-za/industries/chemical-processing',
          'sl-si': 'https://www.spray.com/sl-si/industrije/kemična-predelava',
          'cs-cz': 'https://www.spray.com/cs-cz/industries/chemical-processing',
          'nl-nl':
            'https://www.spray.com/nl-nl/industries/chemische-verwerking',
          'en-ae': 'https://www.spray.com/en-ae/industries/chemical-processing',
          'en-au': 'https://www.spray.com/en-au/industries/chemical-processing',
          'en-ca': 'https://www.spray.com/en-ca/industries/chemical-processing',
          'pl-pl': 'https://www.spray.com/pl-pl/industries/chemical-processing',
          'ro-ro': 'https://www.spray.com/ro-ro/industries/procesare-chimică',
          'es-ar':
            'https://www.spray.com/es-ar/industrias/procesamiento-químico',
          'es-cl':
            'https://www.spray.com/es-cl/industrias/procesamiento-químico',
          'es-ec':
            'https://www.spray.com/es-ec/industrias/procesamiento-químico',
          'es-mx':
            'https://www.spray.com/es-mx/industrias/procesamiento-químico',
          'en-be': 'https://www.spray.com/en-be/industries/chemical-processing',
          'en-my': 'https://www.spray.com/en-my/industries/chemical-processing',
          'en-at': 'https://www.spray.com/en-at/industries/chemical-processing',
          'hu-hu': 'https://www.spray.com/hu-hu/iparágak/kémiai-feldolgozás',
          'es-pe':
            'https://www.spray.com/es-pe/industrias/procesamiento-químico',
          'es-es':
            'https://www.spray.com/es-es/industrias/procesamiento-químico',
          'de-be': 'https://www.spray.com/de-be/industrien/chemical-processing',
          'nl-be':
            'https://www.spray.com/nl-be/industries/chemische-verwerking',
          'en-nz': 'https://www.spray.com/en-nz/industries/chemical-processing',
          'fi-fi':
            'https://www.spray.com/fi-fi/teollisuudenalat/kemikaaliteollisuuden-prosesseissa',
          'fr-ca': 'https://www.spray.com/fr-ca/industries/traitement-chimique',
          'fr-fr': 'https://www.spray.com/fr-fr/industries/traitement-chimique',
          'en-id': 'https://www.spray.com/en-id/industries/chemical-processing',
          'en-ch': 'https://www.spray.com/en-ch/industries/chemical-processing',
          'en-cz': 'https://www.spray.com/en-cz/industries/chemical-processing',
          'de-ch': 'https://www.spray.com/de-ch/industrien/chemical-processing',
          'en-sg': 'https://www.spray.com/en-sg/industries/chemical-processing',
          'et-ee': 'https://www.spray.com/et-ee/tööstused/keemiline-töötlemine',
          'sk-sk': 'https://www.spray.com/sk-sk/odvetvia/chemické-spracovanie',
          'lt-lt':
            'https://www.spray.com/lt-lt/pramonės-šakos/cheminis-apdorojimas',
          'lv-lv': 'https://www.spray.com/lv-lv/nozares/ķīmiskā-apstrāde',
          'en-ma': 'https://www.spray.com/en-ma/industries/chemical-processing',
          'en-cd': 'https://www.spray.com/en-cd/industries/chemical-processing',
          'en-sk': 'https://www.spray.com/en-sk/industries/chemical-processing',
          'fr-sn': 'https://www.spray.com/fr-sn/industries/traitement-chimique',
          'en-tn': 'https://www.spray.com/en-tn/industries/chemical-processing',
          'en-zm': 'https://www.spray.com/en-zm/industries/chemical-processing',
          'en-lt': 'https://www.spray.com/en-lt/industries/chemical-processing',
          'fr-ci': 'https://www.spray.com/fr-ci/industries/traitement-chimique',
          'en-bh': 'https://www.spray.com/en-bh/industries/chemical-processing',
          'fr-cm': 'https://www.spray.com/fr-cm/industries/traitement-chimique',
          'en-mg': 'https://www.spray.com/en-mg/industries/chemical-processing',
          'en-sa': 'https://www.spray.com/en-sa/industries/chemical-processing',
          'fr-dz': 'https://www.spray.com/fr-dz/industries/traitement-chimique',
          'en-ci': 'https://www.spray.com/en-ci/industries/chemical-processing',
          'en-ng': 'https://www.spray.com/en-ng/industries/chemical-processing',
          'fr-ma': 'https://www.spray.com/fr-ma/industries/traitement-chimique',
          'en-cm': 'https://www.spray.com/en-cm/industries/chemical-processing',
          'fr-mg': 'https://www.spray.com/fr-mg/industries/traitement-chimique',
          'en-iq': 'https://www.spray.com/en-iq/industries/chemical-processing',
          'en-sn': 'https://www.spray.com/en-sn/industries/chemical-processing',
          'fr-tn': 'https://www.spray.com/fr-tn/industries/traitement-chimique',
          'en-dz': 'https://www.spray.com/en-dz/industries/chemical-processing',
          'en-jo': 'https://www.spray.com/en-jo/industries/chemical-processing',
          'en-eg': 'https://www.spray.com/en-eg/industries/chemical-processing',
          'en-ke': 'https://www.spray.com/en-ke/industries/chemical-processing',
          'en-om': 'https://www.spray.com/en-om/industries/chemical-processing',
          'en-kw': 'https://www.spray.com/en-kw/industries/chemical-processing',
          'fr-cd': 'https://www.spray.com/fr-cd/industries/traitement-chimique',
          'en-lb': 'https://www.spray.com/en-lb/industries/chemical-processing',
          'en-pk': 'https://www.spray.com/en-pk/industries/chemical-processing',
          'en-lv': 'https://www.spray.com/en-lv/industries/chemical-processing',
          'en-qa': 'https://www.spray.com/en-qa/industries/chemical-processing',
          'it-ch': 'https://www.spray.com/it-ch/industries/chemical-processing',
          'en-in': 'https://www.spray.com/en-in/industries/chemical-processing',
          'fr-be': 'https://www.spray.com/fr-be/industries/traitement-chimique',
          'nb-no':
            'https://www.spray.com/nb-no/industrier/kjemisk-prosessering',
          'it-it': 'https://www.spray.com/it-it/industries/chemical-processing',
          'sv-se': 'https://www.spray.com/sv-se/branscher/kemisk-bearbetning',
          'en-es': 'https://www.spray.com/en-es/industries/chemical-processing',
          'en-hu': 'https://www.spray.com/en-hu/industries/chemical-processing',
          'en-it': 'https://www.spray.com/en-it/industries/chemical-processing',
          'en-nl': 'https://www.spray.com/en-nl/industries/chemical-processing',
          'en-no': 'https://www.spray.com/en-no/industries/chemical-processing',
          'en-pl': 'https://www.spray.com/en-pl/industries/chemical-processing',
          'en-ro': 'https://www.spray.com/en-ro/industries/chemical-processing',
          'en-se': 'https://www.spray.com/en-se/industries/chemical-processing',
          'en-tr': 'https://www.spray.com/en-tr/industries/chemical-processing',
          'en-de': 'https://www.spray.com/en-de/industries/chemical-processing',
          'en-fi': 'https://www.spray.com/en-fi/industries/chemical-processing',
          'en-fr': 'https://www.spray.com/en-fr/industries/chemical-processing',
          'en-gb': 'https://www.spray.com/en-gb/industries/chemical-processing',
          'en-gr': 'https://www.spray.com/en-gr/industries/chemical-processing',
          'en-vn': 'https://www.spray.com/en-vn/industries/chemical-processing',
          'en-hk': 'https://www.spray.com/en-hk/industries/chemical-processing',
          'en-ph': 'https://www.spray.com/en-ph/industries/chemical-processing',
          en: 'https://www.spray.com/industries/chemical-processing'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.industries.items.otherIndustries,
        links: {
          'x-default': 'https://www.spray.com/industries/other-industries',
          'ko-kr': 'https://www.spray.com/ko-kr/industries/other-industries',
          'zh-cn': 'https://www.spray.com/zh-cn/行业/other-industries',
          'ja-jp':
            'https://www.spray.co.jp/markets_and_applications/markets_more.aspx',
          'ru-ua':
            'https://www.spray.com.ua/markets_and_applications/markets_more.aspx',
          'fr-ch':
            'https://www.spray.com/fr-ch/industries/technologie-de-pulverisation-pour-autres-industries',
          'de-at': 'https://www.spray.com/de-at/industrien/other-industries',
          'de-de': 'https://www.spray.com/de-de/industrien/other-industries',
          'el-gr': 'https://www.spray.com/el-gr/industries/άλλες-βιομηχανίες',
          'ru-kz': 'https://www.spray.com/ru-kz/отрасли/другие-отрасли',
          'ru-ru': 'https://www.spray.com/ru-ru/отрасли/другие-отрасли',
          'es-co': 'https://www.spray.com/es-co/industrias/otras-industrias',
          'bg-bg': 'https://www.spray.com/bg-bg/индустрии/други-индустрии',
          'en-za': 'https://www.spray.com/en-za/industries/other-industries',
          'sl-si': 'https://www.spray.com/sl-si/industrije/druge-panoge',
          'cs-cz': 'https://www.spray.com/cs-cz/industries/other-industries',
          'nl-nl': 'https://www.spray.com/nl-nl/industries/other-industries',
          'en-ae': 'https://www.spray.com/en-ae/industries/other-industries',
          'en-au': 'https://www.spray.com/en-au/industries/other-industries',
          'en-ca': 'https://www.spray.com/en-ca/industries/other-industries',
          'pl-pl': 'https://www.spray.com/pl-pl/industries/other-industries',
          'ro-ro': 'https://www.spray.com/ro-ro/industries/alte-industrii',
          'es-ar': 'https://www.spray.com/es-ar/industrias/otras-industrias',
          'es-cl': 'https://www.spray.com/es-cl/industrias/otras-industrias',
          'es-ec': 'https://www.spray.com/es-ec/industrias/otras-industrias',
          'es-mx': 'https://www.spray.com/es-mx/industrias/otras-industrias',
          'tr-tr': 'https://www.spray.com/tr-tr/industries/other-industries',
          'en-be': 'https://www.spray.com/en-be/industries/other-industries',
          'en-my': 'https://www.spray.com/en-my/industries/other-industries',
          'en-at': 'https://www.spray.com/en-at/industries/other-industries',
          'hu-hu': 'https://www.spray.com/hu-hu/iparágak/egyéb-iparágak',
          'es-pe': 'https://www.spray.com/es-pe/industrias/otras-industrias',
          'es-es': 'https://www.spray.com/es-es/industrias/otras-industrias',
          'de-be': 'https://www.spray.com/de-be/industrien/other-industries',
          'nl-be': 'https://www.spray.com/nl-be/industries/other-industries',
          'en-nz': 'https://www.spray.com/en-nz/industries/other-industries',
          'fi-fi':
            'https://www.spray.com/fi-fi/teollisuudenalat/muut-teollisuudenalat',
          'fr-ca': 'https://www.spray.com/fr-ca/industries/autres-industries',
          'fr-fr':
            'https://www.spray.com/fr-fr/industries/technologie-de-pulverisation-pour-autres-industries',
          'en-id': 'https://www.spray.com/en-id/industries/other-industries',
          'en-ch': 'https://www.spray.com/en-ch/industries/other-industries',
          'en-cz': 'https://www.spray.com/en-cz/industries/other-industries',
          'de-ch': 'https://www.spray.com/de-ch/industrien/other-industries',
          'en-sg': 'https://www.spray.com/en-sg/industries/other-industries',
          'et-ee': 'https://www.spray.com/et-ee/tööstused/muud-tööstusharud',
          'sk-sk': 'https://www.spray.com/sk-sk/odvetvia/ostatné-odvetvia',
          'lt-lt':
            'https://www.spray.com/lt-lt/pramonės-šakos/kitos-pramonės-šakos',
          'lv-lv': 'https://www.spray.com/lv-lv/nozares/citas-nozares',
          'en-ma': 'https://www.spray.com/en-ma/industries/other-industries',
          'en-cd': 'https://www.spray.com/en-cd/industries/other-industries',
          'en-sk': 'https://www.spray.com/en-sk/industries/other-industries',
          'fr-sn':
            'https://www.spray.com/fr-sn/industries/technologie-de-pulverisation-pour-autres-industries',
          'en-tn': 'https://www.spray.com/en-tn/industries/other-industries',
          'en-zm': 'https://www.spray.com/en-zm/industries/other-industries',
          'en-lt': 'https://www.spray.com/en-lt/industries/other-industries',
          'fr-ci':
            'https://www.spray.com/fr-ci/industries/technologie-de-pulverisation-pour-autres-industries',
          'en-bh': 'https://www.spray.com/en-bh/industries/other-industries',
          'fr-cm':
            'https://www.spray.com/fr-cm/industries/technologie-de-pulverisation-pour-autres-industries',
          'en-mg': 'https://www.spray.com/en-mg/industries/other-industries',
          'en-sa': 'https://www.spray.com/en-sa/industries/other-industries',
          'fr-dz':
            'https://www.spray.com/fr-dz/industries/technologie-de-pulverisation-pour-autres-industries',
          'en-ci': 'https://www.spray.com/en-ci/industries/other-industries',
          'en-ng': 'https://www.spray.com/en-ng/industries/other-industries',
          'fr-ma':
            'https://www.spray.com/fr-ma/industries/technologie-de-pulverisation-pour-autres-industries',
          'en-cm': 'https://www.spray.com/en-cm/industries/other-industries',
          'fr-mg':
            'https://www.spray.com/fr-mg/industries/technologie-de-pulverisation-pour-autres-industries',
          'en-iq': 'https://www.spray.com/en-iq/industries/other-industries',
          'en-sn': 'https://www.spray.com/en-sn/industries/other-industries',
          'fr-tn':
            'https://www.spray.com/fr-tn/industries/technologie-de-pulverisation-pour-autres-industries',
          'en-dz': 'https://www.spray.com/en-dz/industries/other-industries',
          'en-jo': 'https://www.spray.com/en-jo/industries/other-industries',
          'en-eg': 'https://www.spray.com/en-eg/industries/other-industries',
          'en-ke': 'https://www.spray.com/en-ke/industries/other-industries',
          'en-om': 'https://www.spray.com/en-om/industries/other-industries',
          'en-kw': 'https://www.spray.com/en-kw/industries/other-industries',
          'fr-cd':
            'https://www.spray.com/fr-cd/industries/technologie-de-pulverisation-pour-autres-industries',
          'en-lb': 'https://www.spray.com/en-lb/industries/other-industries',
          'en-pk': 'https://www.spray.com/en-pk/industries/other-industries',
          'en-lv': 'https://www.spray.com/en-lv/industries/other-industries',
          'en-qa': 'https://www.spray.com/en-qa/industries/other-industries',
          'it-ch': 'https://www.spray.com/it-ch/industries/other-industries',
          'en-in': 'https://www.spray.com/en-in/industries/other-industries',
          'fr-be':
            'https://www.spray.com/fr-be/industries/technologie-de-pulverisation-pour-autres-industries',
          'nb-no': 'https://www.spray.com/nb-no/industrier/andre-bransjer',
          'it-it': 'https://www.spray.com/it-it/industries/other-industries',
          'sv-se': 'https://www.spray.com/sv-se/branscher/andra-branscher',
          'en-es': 'https://www.spray.com/en-es/industries/other-industries',
          'en-hu': 'https://www.spray.com/en-hu/industries/other-industries',
          'en-it': 'https://www.spray.com/en-it/industries/other-industries',
          'en-nl': 'https://www.spray.com/en-nl/industries/other-industries',
          'en-no': 'https://www.spray.com/en-no/industries/other-industries',
          'en-pl': 'https://www.spray.com/en-pl/industries/other-industries',
          'en-ro': 'https://www.spray.com/en-ro/industries/other-industries',
          'en-se': 'https://www.spray.com/en-se/industries/other-industries',
          'en-tr': 'https://www.spray.com/en-tr/industries/other-industries',
          'en-de': 'https://www.spray.com/en-de/industries/other-industries',
          'en-fi': 'https://www.spray.com/en-fi/industries/other-industries',
          'en-fr': 'https://www.spray.com/en-fr/industries/other-industries',
          'en-gb': 'https://www.spray.com/en-gb/industries/other-industries',
          'en-gr': 'https://www.spray.com/en-gr/industries/other-industries',
          'en-vn': 'https://www.spray.com/en-vn/industries/other-industries',
          'en-hk': 'https://www.spray.com/en-hk/industries/other-industries',
          'en-ph': 'https://www.spray.com/en-ph/industries/other-industries',
          en: 'https://www.spray.com/industries/other-industries'
        }
      }
    ]
  },
  applications: {
    titleMessageId: messageIds.navigation.footer.applications.title,
    items: [
      {
        labelMessageId:
          messageIds.navigation.footer.applications.items.applicationOverview,
        links: {
          'x-default':
            'https://www.spray.com/applications/applications-overview',
          'vi-vn':
            'https://www.spray.com.vn/markets_and_applications/markets_applications.aspx',
          'ko-kr':
            'https://www.spray.com/ko-kr/applications/applications-overview',
          'zh-cn': 'https://www.spray.com/zh-cn/应用/applications-overview',
          'ru-ru': 'https://www.spray.com/ru-ru/применения/обзор-применений',
          'es-ar':
            'https://www.spray.com/es-ar/aplicaciones/descripción-general-de-aplicaciones',
          'es-co':
            'https://www.spray.com/es-co/aplicaciones/descripción-general-de-aplicaciones',
          'es-pe':
            'https://www.spray.com/es-pe/aplicaciones/descripción-general-de-aplicaciones',
          'es-cl':
            'https://www.spray.com/es-cl/aplicaciones/descripción-general-de-aplicaciones',
          'es-ec':
            'https://www.spray.com/es-ec/aplicaciones/descripción-general-de-aplicaciones',
          'ja-jp':
            'https://www.spray.co.jp/markets_and_applications/markets_applications.aspx',
          'ru-ua':
            'https://www.spray.com.ua/markets_and_applications/markets_applications.aspx',
          'tr-tr':
            'https://www.spray.com/tr-tr/applications/applications-overview',
          'fr-ch':
            'https://www.spray.com/fr-ch/applications/aperçu-des-applications',
          'de-at':
            'https://www.spray.com/de-at/anwendungen/applications-overview',
          'de-de':
            'https://www.spray.com/de-de/anwendungen/applications-overview',
          'el-gr':
            'https://www.spray.com/el-gr/applications/applications-overview',
          'ru-kz': 'https://www.spray.com/ru-kz/применения/обзор-применений',
          'bg-bg':
            'https://www.spray.com/bg-bg/приложения/преглед-на-приложенията',
          'en-za':
            'https://www.spray.com/en-za/applications/applications-overview',
          'sl-si': 'https://www.spray.com/sl-si/aplikacije/pregled-aplikacij',
          'cs-cz':
            'https://www.spray.com/cs-cz/applications/applications-overview',
          'nl-nl':
            'https://www.spray.com/nl-nl/applications/applications-overview',
          'en-ae':
            'https://www.spray.com/en-ae/applications/applications-overview',
          'en-au':
            'https://www.spray.com/en-au/applications/applications-overview',
          'en-ca':
            'https://www.spray.com/en-ca/applications/applications-overview',
          'pl-pl':
            'https://www.spray.com/pl-pl/applications/applications-overview',
          'ro-ro':
            'https://www.spray.com/ro-ro/applications/applications-overview',
          'es-mx':
            'https://www.spray.com/es-mx/aplicaciones/descripción-general-de-aplicaciones',
          'en-be':
            'https://www.spray.com/en-be/applications/applications-overview',
          'en-my':
            'https://www.spray.com/en-my/applications/applications-overview',
          'en-at':
            'https://www.spray.com/en-at/applications/applications-overview',
          'hu-hu':
            'https://www.spray.com/hu-hu/alkalmazások/alkalmazások-áttekintése',
          'es-es': 'https://www.spray.com/es-es/aplicaciones/aplicaciones',
          'de-be':
            'https://www.spray.com/de-be/anwendungen/applications-overview',
          'nl-be':
            'https://www.spray.com/nl-be/applications/applications-overview',
          'en-nz':
            'https://www.spray.com/en-nz/applications/applications-overview',
          'fi-fi':
            'https://www.spray.com/fi-fi/sovellukset/yleiskatsaus-sovelluksiin',
          'fr-ca':
            'https://www.spray.com/fr-ca/applications/revue-des-applications',
          'fr-fr':
            'https://www.spray.com/fr-fr/applications/aperçu-des-applications',
          'en-id':
            'https://www.spray.com/en-id/applications/applications-overview',
          'en-ch':
            'https://www.spray.com/en-ch/applications/applications-overview',
          'en-cz':
            'https://www.spray.com/en-cz/applications/applications-overview',
          'de-ch':
            'https://www.spray.com/de-ch/anwendungen/applications-overview',
          'en-sg':
            'https://www.spray.com/en-sg/applications/applications-overview',
          'et-ee': 'https://www.spray.com/et-ee/rakendused/rakenduste-ülevaade',
          'sk-sk': 'https://www.spray.com/sk-sk/aplikácie/prehľad-aplikácií',
          'lt-lt': 'https://www.spray.com/lt-lt/paraiškos/programų-apžvalga',
          'lv-lv': 'https://www.spray.com/lv-lv/pieteikumi/aplikāciju-pārskats',
          'en-ma':
            'https://www.spray.com/en-ma/applications/applications-overview',
          'en-cd':
            'https://www.spray.com/en-cd/applications/applications-overview',
          'en-sk':
            'https://www.spray.com/en-sk/applications/applications-overview',
          'fr-sn':
            'https://www.spray.com/fr-sn/applications/aperçu-des-applications',
          'en-tn':
            'https://www.spray.com/en-tn/applications/applications-overview',
          'en-zm':
            'https://www.spray.com/en-zm/applications/applications-overview',
          'en-lt':
            'https://www.spray.com/en-lt/applications/applications-overview',
          'fr-ci':
            'https://www.spray.com/fr-ci/applications/aperçu-des-applications',
          'en-bh':
            'https://www.spray.com/en-bh/applications/applications-overview',
          'fr-cm':
            'https://www.spray.com/fr-cm/applications/aperçu-des-applications',
          'en-mg':
            'https://www.spray.com/en-mg/applications/applications-overview',
          'en-sa':
            'https://www.spray.com/en-sa/applications/applications-overview',
          'fr-dz':
            'https://www.spray.com/fr-dz/applications/aperçu-des-applications',
          'en-ci':
            'https://www.spray.com/en-ci/applications/applications-overview',
          'en-ng':
            'https://www.spray.com/en-ng/applications/applications-overview',
          'fr-ma':
            'https://www.spray.com/fr-ma/applications/aperçu-des-applications',
          'en-cm':
            'https://www.spray.com/en-cm/applications/applications-overview',
          'fr-mg':
            'https://www.spray.com/fr-mg/applications/aperçu-des-applications',
          'en-iq':
            'https://www.spray.com/en-iq/applications/applications-overview',
          'en-sn':
            'https://www.spray.com/en-sn/applications/applications-overview',
          'fr-tn':
            'https://www.spray.com/fr-tn/applications/aperçu-des-applications',
          'en-dz':
            'https://www.spray.com/en-dz/applications/applications-overview',
          'en-jo':
            'https://www.spray.com/en-jo/applications/applications-overview',
          'en-eg':
            'https://www.spray.com/en-eg/applications/applications-overview',
          'en-ke':
            'https://www.spray.com/en-ke/applications/applications-overview',
          'en-om':
            'https://www.spray.com/en-om/applications/applications-overview',
          'en-kw':
            'https://www.spray.com/en-kw/applications/applications-overview',
          'fr-cd':
            'https://www.spray.com/fr-cd/applications/aperçu-des-applications',
          'en-lb':
            'https://www.spray.com/en-lb/applications/applications-overview',
          'en-pk':
            'https://www.spray.com/en-pk/applications/applications-overview',
          'en-lv':
            'https://www.spray.com/en-lv/applications/applications-overview',
          'en-qa':
            'https://www.spray.com/en-qa/applications/applications-overview',
          'it-ch':
            'https://www.spray.com/it-ch/applications/applications-overview',
          'en-in':
            'https://www.spray.com/en-in/applications/applications-overview',
          'fr-be':
            'https://www.spray.com/fr-be/applications/aperçu-des-applications',
          'nb-no':
            'https://www.spray.com/nb-no/applikasjoner/oversikt-over-applikasjoner',
          'it-it':
            'https://www.spray.com/it-it/applications/applications-overview',
          'sv-se':
            'https://www.spray.com/sv-se/tillämpningar/översikt-över-tillämpningar',
          'en-es':
            'https://www.spray.com/en-es/applications/applications-overview',
          'en-hu':
            'https://www.spray.com/en-hu/applications/applications-overview',
          'en-it':
            'https://www.spray.com/en-it/applications/applications-overview',
          'en-nl':
            'https://www.spray.com/en-nl/applications/applications-overview',
          'en-no':
            'https://www.spray.com/en-no/applications/applications-overview',
          'en-pl':
            'https://www.spray.com/en-pl/applications/applications-overview',
          'en-ro':
            'https://www.spray.com/en-ro/applications/applications-overview',
          'en-se':
            'https://www.spray.com/en-se/applications/applications-overview',
          'en-tr':
            'https://www.spray.com/en-tr/applications/applications-overview',
          'en-de':
            'https://www.spray.com/en-de/applications/applications-overview',
          'en-fi':
            'https://www.spray.com/en-fi/applications/applications-overview',
          'en-fr':
            'https://www.spray.com/en-fr/applications/applications-overview',
          'en-gb':
            'https://www.spray.com/en-gb/applications/applications-overview',
          'en-gr':
            'https://www.spray.com/en-gr/applications/applications-overview',
          'en-vn':
            'https://www.spray.com/en-vn/applications/applications-overview',
          'en-hk':
            'https://www.spray.com/en-hk/applications/applications-overview',
          'en-ph':
            'https://www.spray.com/en-ph/applications/applications-overview',
          en: 'https://www.spray.com/applications/applications-overview'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.applications.items.cleaningAndWashing,
        links: {
          'x-default':
            'https://www.spray.com/applications/cleaning-and-washing',
          'ko-kr':
            'https://www.spray.com/ko-kr/applications/cleaning-and-washing',
          'zh-cn': 'https://www.spray.com/zh-cn/应用/cleaning-and-washing',
          'ja-jp':
            'https://www.spray.co.jp/markets_and_applications/cleaning_washing.aspx',
          'ru-ua':
            'https://www.spray.com.ua/markets_and_applications/cleaning_washing.aspx',
          'fr-ch':
            'https://www.spray.com/fr-ch/applications/nettoyage-et-lavage',
          'de-at':
            'https://www.spray.com/de-at/anwendungen/reinigen-und-waschen',
          'de-de':
            'https://www.spray.com/de-de/anwendungen/reinigen-und-waschen',
          'el-gr':
            'https://www.spray.com/el-gr/applications/cleaning-and-washing',
          'ru-kz': 'https://www.spray.com/ru-kz/применения/очистка-и-мойка',
          'ru-ru': 'https://www.spray.com/ru-ru/применения/очистка-и-мойка',
          'es-co': 'https://www.spray.com/es-co/aplicaciones/limpieza-y-lavado',
          'bg-bg': 'https://www.spray.com/bg-bg/приложения/почистване-и-миене',
          'en-za':
            'https://www.spray.com/en-za/applications/cleaning-and-washing',
          'sl-si': 'https://www.spray.com/sl-si/aplikacije/čiščenje-in-pranje',
          'cs-cz':
            'https://www.spray.com/cs-cz/applications/cleaning-and-washing',
          'nl-nl':
            'https://www.spray.com/nl-nl/applications/cleaning-and-washing',
          'en-ae':
            'https://www.spray.com/en-ae/applications/cleaning-and-washing',
          'en-au':
            'https://www.spray.com/en-au/applications/cleaning-and-washing',
          'en-ca':
            'https://www.spray.com/en-ca/applications/cleaning-and-washing',
          'pl-pl':
            'https://www.spray.com/pl-pl/applications/cleaning-and-washing',
          'ro-ro':
            'https://www.spray.com/ro-ro/applications/cleaning-and-washing',
          'es-ar': 'https://www.spray.com/es-ar/aplicaciones/limpieza-y-lavado',
          'es-cl': 'https://www.spray.com/es-cl/aplicaciones/limpieza-y-lavado',
          'es-ec': 'https://www.spray.com/es-ec/aplicaciones/limpieza-y-lavado',
          'es-mx': 'https://www.spray.com/es-mx/aplicaciones/limpieza-y-lavado',
          'tr-tr':
            'https://www.spray.com/tr-tr/applications/cleaning-and-washing',
          'en-be':
            'https://www.spray.com/en-be/applications/cleaning-and-washing',
          'en-my':
            'https://www.spray.com/en-my/applications/cleaning-and-washing',
          'en-at':
            'https://www.spray.com/en-at/applications/cleaning-and-washing',
          'hu-hu':
            'https://www.spray.com/hu-hu/alkalmazások/tisztítás-és-mosás',
          'es-pe': 'https://www.spray.com/es-pe/aplicaciones/limpieza-y-lavado',
          'es-es':
            'https://www.spray.com/es-es/aplicaciones/soluciones-de-limpieza-y-lavado',
          'de-be':
            'https://www.spray.com/de-be/anwendungen/reinigen-und-waschen',
          'nl-be':
            'https://www.spray.com/nl-be/applications/cleaning-and-washing',
          'en-nz':
            'https://www.spray.com/en-nz/applications/cleaning-and-washing',
          'fi-fi': 'https://www.spray.com/fi-fi/sovellukset/puhdistus-ja-pesu',
          'fr-ca':
            'https://www.spray.com/fr-ca/applications/nettoyage-et-lavage',
          'fr-fr':
            'https://www.spray.com/fr-fr/applications/nettoyage-et-lavage',
          'en-id':
            'https://www.spray.com/en-id/applications/cleaning-and-washing',
          'en-ch':
            'https://www.spray.com/en-ch/applications/cleaning-and-washing',
          'en-cz':
            'https://www.spray.com/en-cz/applications/cleaning-and-washing',
          'de-ch':
            'https://www.spray.com/de-ch/anwendungen/reinigen-und-waschen',
          'en-sg':
            'https://www.spray.com/en-sg/applications/cleaning-and-washing',
          'et-ee':
            'https://www.spray.com/et-ee/rakendused/puhastamine-ja-pesemine',
          'sk-sk': 'https://www.spray.com/sk-sk/aplikácie/čistenie-a-umývanie',
          'lt-lt': 'https://www.spray.com/lt-lt/paraiškos/valymas-ir-plovimas',
          'lv-lv':
            'https://www.spray.com/lv-lv/pieteikumi/tīrīšana-un-mazgāšana',
          'en-ma':
            'https://www.spray.com/en-ma/applications/cleaning-and-washing',
          'en-cd':
            'https://www.spray.com/en-cd/applications/cleaning-and-washing',
          'en-sk':
            'https://www.spray.com/en-sk/applications/cleaning-and-washing',
          'fr-sn':
            'https://www.spray.com/fr-sn/applications/nettoyage-et-lavage',
          'en-tn':
            'https://www.spray.com/en-tn/applications/cleaning-and-washing',
          'en-zm':
            'https://www.spray.com/en-zm/applications/cleaning-and-washing',
          'en-lt':
            'https://www.spray.com/en-lt/applications/cleaning-and-washing',
          'fr-ci':
            'https://www.spray.com/fr-ci/applications/nettoyage-et-lavage',
          'en-bh':
            'https://www.spray.com/en-bh/applications/cleaning-and-washing',
          'fr-cm':
            'https://www.spray.com/fr-cm/applications/nettoyage-et-lavage',
          'en-mg':
            'https://www.spray.com/en-mg/applications/cleaning-and-washing',
          'en-sa':
            'https://www.spray.com/en-sa/applications/cleaning-and-washing',
          'fr-dz':
            'https://www.spray.com/fr-dz/applications/nettoyage-et-lavage',
          'en-ci':
            'https://www.spray.com/en-ci/applications/cleaning-and-washing',
          'en-ng':
            'https://www.spray.com/en-ng/applications/cleaning-and-washing',
          'fr-ma':
            'https://www.spray.com/fr-ma/applications/nettoyage-et-lavage',
          'en-cm':
            'https://www.spray.com/en-cm/applications/cleaning-and-washing',
          'fr-mg':
            'https://www.spray.com/fr-mg/applications/nettoyage-et-lavage',
          'en-iq':
            'https://www.spray.com/en-iq/applications/cleaning-and-washing',
          'en-sn':
            'https://www.spray.com/en-sn/applications/cleaning-and-washing',
          'fr-tn':
            'https://www.spray.com/fr-tn/applications/nettoyage-et-lavage',
          'en-dz':
            'https://www.spray.com/en-dz/applications/cleaning-and-washing',
          'en-jo':
            'https://www.spray.com/en-jo/applications/cleaning-and-washing',
          'en-eg':
            'https://www.spray.com/en-eg/applications/cleaning-and-washing',
          'en-ke':
            'https://www.spray.com/en-ke/applications/cleaning-and-washing',
          'en-om':
            'https://www.spray.com/en-om/applications/cleaning-and-washing',
          'en-kw':
            'https://www.spray.com/en-kw/applications/cleaning-and-washing',
          'fr-cd':
            'https://www.spray.com/fr-cd/applications/nettoyage-et-lavage',
          'en-lb':
            'https://www.spray.com/en-lb/applications/cleaning-and-washing',
          'en-pk':
            'https://www.spray.com/en-pk/applications/cleaning-and-washing',
          'en-lv':
            'https://www.spray.com/en-lv/applications/cleaning-and-washing',
          'en-qa':
            'https://www.spray.com/en-qa/applications/cleaning-and-washing',
          'it-ch':
            'https://www.spray.com/it-ch/applications/cleaning-and-washing',
          'en-in':
            'https://www.spray.com/en-in/applications/cleaning-and-washing',
          'fr-be':
            'https://www.spray.com/fr-be/applications/nettoyage-et-lavage',
          'nb-no':
            'https://www.spray.com/nb-no/applikasjoner/rengjøring-og-vask',
          'it-it':
            'https://www.spray.com/it-it/applications/cleaning-and-washing',
          'sv-se':
            'https://www.spray.com/sv-se/tillämpningar/rengöring-och-tvätt',
          'en-es':
            'https://www.spray.com/en-es/applications/cleaning-and-washing',
          'en-hu':
            'https://www.spray.com/en-hu/applications/cleaning-and-washing',
          'en-it':
            'https://www.spray.com/en-it/applications/cleaning-and-washing',
          'en-nl':
            'https://www.spray.com/en-nl/applications/cleaning-and-washing',
          'en-no':
            'https://www.spray.com/en-no/applications/cleaning-and-washing',
          'en-pl':
            'https://www.spray.com/en-pl/applications/cleaning-and-washing',
          'en-ro':
            'https://www.spray.com/en-ro/applications/cleaning-and-washing',
          'en-se':
            'https://www.spray.com/en-se/applications/cleaning-and-washing',
          'en-tr':
            'https://www.spray.com/en-tr/applications/cleaning-and-washing',
          'en-de':
            'https://www.spray.com/en-de/applications/cleaning-and-washing',
          'en-fi':
            'https://www.spray.com/en-fi/applications/cleaning-and-washing',
          'en-fr':
            'https://www.spray.com/en-fr/applications/cleaning-and-washing',
          'en-gb':
            'https://www.spray.com/en-gb/applications/cleaning-and-washing',
          'en-gr':
            'https://www.spray.com/en-gr/applications/cleaning-and-washing',
          'en-vn':
            'https://www.spray.com/en-vn/applications/cleaning-and-washing',
          'en-hk':
            'https://www.spray.com/en-hk/applications/cleaning-and-washing',
          'en-ph':
            'https://www.spray.com/en-ph/applications/cleaning-and-washing',
          en: 'https://www.spray.com/applications/cleaning-and-washing'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.applications.items.chestCleaning,
        links: {
          'fr-ch':
            'https://www.spray.com/fr-ch/applications/nettoyage-de-la-poitrine',
          'de-at':
            'https://www.spray.com/de-at/anwendungen/tank--und-behaelterreinigung',
          'de-de':
            'https://www.spray.com/de-de/anwendungen/tank--und-behaelterreinigung',
          'el-gr': 'https://www.spray.com/el-gr/applications/chest-cleaning',
          'ko-kr': 'https://www.spray.com/ko-kr/applications/chest-cleaning',
          'ru-kz': 'https://www.spray.com/ru-kz/применения/очистка-резервуаров',
          'ru-ru': 'https://www.spray.com/ru-ru/применения/очистка-резервуаров',
          'es-co':
            'https://www.spray.com/es-co/aplicaciones/limpieza-de-contenedores-y-tanques-de-proceso',
          'bg-bg':
            'https://www.spray.com/bg-bg/приложения/почистване-на-сандъка',
          'en-za': 'https://www.spray.com/en-za/applications/chest-cleaning',
          'sl-si':
            'https://www.spray.com/sl-si/aplikacije/čiščenje-prsnega-koša',
          'cs-cz': 'https://www.spray.com/cs-cz/applications/chest-cleaning',
          'nl-nl': 'https://www.spray.com/nl-nl/applications/chest-cleaning',
          'en-ae': 'https://www.spray.com/en-ae/applications/chest-cleaning',
          'en-au': 'https://www.spray.com/en-au/applications/chest-cleaning',
          'en-ca': 'https://www.spray.com/en-ca/applications/chest-cleaning',
          'pl-pl': 'https://www.spray.com/pl-pl/applications/chest-cleaning',
          'ro-ro': 'https://www.spray.com/ro-ro/applications/chest-cleaning',
          'es-ar':
            'https://www.spray.com/es-ar/aplicaciones/limpieza-de-contenedores-y-tanques-de-proceso',
          'es-cl':
            'https://www.spray.com/es-cl/aplicaciones/limpieza-de-contenedores-y-tanques-de-proceso',
          'es-ec':
            'https://www.spray.com/es-ec/aplicaciones/limpieza-de-contenedores-y-tanques-de-proceso',
          'es-mx':
            'https://www.spray.com/es-mx/aplicaciones/limpieza-de-contenedores-y-tanques-de-proceso',
          'tr-tr': 'https://www.spray.com/tr-tr/applications/chest-cleaning',
          'en-be': 'https://www.spray.com/en-be/applications/chest-cleaning',
          'en-my': 'https://www.spray.com/en-my/applications/chest-cleaning',
          'en-at': 'https://www.spray.com/en-at/applications/chest-cleaning',
          'hu-hu': 'https://www.spray.com/hu-hu/alkalmazások/láda-mosás',
          'es-pe':
            'https://www.spray.com/es-pe/aplicaciones/limpieza-de-contenedores-y-tanques-de-proceso',
          'es-es':
            'https://www.spray.com/es-es/aplicaciones/limpieza-de-depositos',
          'zh-cn': 'https://www.spray.com/zh-cn/应用/chest-cleaning',
          'de-be':
            'https://www.spray.com/de-be/anwendungen/tank--und-behaelterreinigung',
          'nl-be': 'https://www.spray.com/nl-be/applications/chest-cleaning',
          'en-nz': 'https://www.spray.com/en-nz/applications/chest-cleaning',
          'fi-fi': 'https://www.spray.com/fi-fi/sovellukset/sailion-puhdistus',
          'fr-ca':
            'https://www.spray.com/fr-ca/applications/nettoyage-des-coffres',
          'fr-fr':
            'https://www.spray.com/fr-fr/applications/nettoyage-de-la-poitrine',
          'en-id': 'https://www.spray.com/en-id/applications/chest-cleaning',
          'en-ch': 'https://www.spray.com/en-ch/applications/chest-cleaning',
          'en-cz': 'https://www.spray.com/en-cz/applications/chest-cleaning',
          'de-ch':
            'https://www.spray.com/de-ch/anwendungen/tank--und-behaelterreinigung',
          'en-sg': 'https://www.spray.com/en-sg/applications/chest-cleaning',
          'et-ee': 'https://www.spray.com/et-ee/rakendused/rinna-puhastamine',
          'sk-sk': 'https://www.spray.com/sk-sk/aplikácie/čistenie-hrudníka',
          'lt-lt': 'https://www.spray.com/lt-lt/paraiškos/krūtinės-valymas',
          'lv-lv': 'https://www.spray.com/lv-lv/pieteikumi/krūtīs-tīrīšana',
          'en-ma': 'https://www.spray.com/en-ma/applications/chest-cleaning',
          'en-cd': 'https://www.spray.com/en-cd/applications/chest-cleaning',
          'en-sk': 'https://www.spray.com/en-sk/applications/chest-cleaning',
          'fr-sn':
            'https://www.spray.com/fr-sn/applications/nettoyage-de-la-poitrine',
          'en-tn': 'https://www.spray.com/en-tn/applications/chest-cleaning',
          'en-zm': 'https://www.spray.com/en-zm/applications/chest-cleaning',
          'en-lt': 'https://www.spray.com/en-lt/applications/chest-cleaning',
          'fr-ci':
            'https://www.spray.com/fr-ci/applications/nettoyage-de-la-poitrine',
          'en-bh': 'https://www.spray.com/en-bh/applications/chest-cleaning',
          'fr-cm':
            'https://www.spray.com/fr-cm/applications/nettoyage-de-la-poitrine',
          'en-mg': 'https://www.spray.com/en-mg/applications/chest-cleaning',
          'en-sa': 'https://www.spray.com/en-sa/applications/chest-cleaning',
          'fr-dz':
            'https://www.spray.com/fr-dz/applications/nettoyage-de-la-poitrine',
          'en-ci': 'https://www.spray.com/en-ci/applications/chest-cleaning',
          'en-ng': 'https://www.spray.com/en-ng/applications/chest-cleaning',
          'fr-ma':
            'https://www.spray.com/fr-ma/applications/nettoyage-de-la-poitrine',
          'en-cm': 'https://www.spray.com/en-cm/applications/chest-cleaning',
          'fr-mg':
            'https://www.spray.com/fr-mg/applications/nettoyage-de-la-poitrine',
          'en-iq': 'https://www.spray.com/en-iq/applications/chest-cleaning',
          'en-sn': 'https://www.spray.com/en-sn/applications/chest-cleaning',
          'fr-tn':
            'https://www.spray.com/fr-tn/applications/nettoyage-de-la-poitrine',
          'en-dz': 'https://www.spray.com/en-dz/applications/chest-cleaning',
          'en-jo': 'https://www.spray.com/en-jo/applications/chest-cleaning',
          'en-eg': 'https://www.spray.com/en-eg/applications/chest-cleaning',
          'en-ke': 'https://www.spray.com/en-ke/applications/chest-cleaning',
          'en-om': 'https://www.spray.com/en-om/applications/chest-cleaning',
          'en-kw': 'https://www.spray.com/en-kw/applications/chest-cleaning',
          'fr-cd':
            'https://www.spray.com/fr-cd/applications/nettoyage-de-la-poitrine',
          'en-lb': 'https://www.spray.com/en-lb/applications/chest-cleaning',
          'en-pk': 'https://www.spray.com/en-pk/applications/chest-cleaning',
          'en-lv': 'https://www.spray.com/en-lv/applications/chest-cleaning',
          'en-qa': 'https://www.spray.com/en-qa/applications/chest-cleaning',
          'it-ch': 'https://www.spray.com/it-ch/applications/chest-cleaning',
          'en-in': 'https://www.spray.com/en-in/applications/chest-cleaning',
          'fr-be':
            'https://www.spray.com/fr-be/applications/nettoyage-de-la-poitrine',
          'nb-no': 'https://www.spray.com/nb-no/applikasjoner/bryst-rengjøring',
          'it-it': 'https://www.spray.com/it-it/applications/chest-cleaning',
          'sv-se':
            'https://www.spray.com/sv-se/tillämpningar/rengöring-av-bröstkorgen',
          'en-es': 'https://www.spray.com/en-es/applications/chest-cleaning',
          'en-hu': 'https://www.spray.com/en-hu/applications/chest-cleaning',
          'en-it': 'https://www.spray.com/en-it/applications/chest-cleaning',
          'en-nl': 'https://www.spray.com/en-nl/applications/chest-cleaning',
          'en-no': 'https://www.spray.com/en-no/applications/chest-cleaning',
          'en-pl': 'https://www.spray.com/en-pl/applications/chest-cleaning',
          'en-ro': 'https://www.spray.com/en-ro/applications/chest-cleaning',
          'en-se': 'https://www.spray.com/en-se/applications/chest-cleaning',
          'en-tr': 'https://www.spray.com/en-tr/applications/chest-cleaning',
          'en-de': 'https://www.spray.com/en-de/applications/chest-cleaning',
          'en-fi': 'https://www.spray.com/en-fi/applications/chest-cleaning',
          'en-fr': 'https://www.spray.com/en-fr/applications/chest-cleaning',
          'en-gb': 'https://www.spray.com/en-gb/applications/chest-cleaning',
          'en-gr': 'https://www.spray.com/en-gr/applications/chest-cleaning',
          'en-vn': 'https://www.spray.com/en-vn/applications/chest-cleaning',
          'en-hk': 'https://www.spray.com/en-hk/applications/chest-cleaning',
          'en-ph': 'https://www.spray.com/en-ph/applications/chest-cleaning',
          en: 'https://www.spray.com/applications/chest-cleaning',
          'x-default': 'https://www.spray.com/applications/chest-cleaning'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.applications.items.coolingSolids,
        links: {
          'fr-ch':
            'https://www.spray.com/fr-ch/applications/refroidissement-des-solides',
          'de-at': 'https://www.spray.com/de-at/anwendungen/cooling-solids',
          'de-de': 'https://www.spray.com/de-de/anwendungen/cooling-solids',
          'el-gr': 'https://www.spray.com/el-gr/applications/cooling-solids',
          'ko-kr': 'https://www.spray.com/ko-kr/applications/cooling-solids',
          'ru-kz':
            'https://www.spray.com/ru-kz/применения/охлаждение-твердых-тел',
          'ru-ru':
            'https://www.spray.com/ru-ru/применения/охлаждение-твердых-тел',
          'es-co':
            'https://www.spray.com/es-co/aplicaciones/enfriamiento-de-sólidos',
          'bg-bg':
            'https://www.spray.com/bg-bg/приложения/охлаждане-на-твърди-вещества',
          'en-za': 'https://www.spray.com/en-za/applications/cooling-solids',
          'sl-si':
            'https://www.spray.com/sl-si/aplikacije/hladilne-trdne-snovi',
          'cs-cz': 'https://www.spray.com/cs-cz/applications/cooling-solids',
          'nl-nl': 'https://www.spray.com/nl-nl/applications/cooling-solids',
          'en-ae': 'https://www.spray.com/en-ae/applications/cooling-solids',
          'en-au': 'https://www.spray.com/en-au/applications/cooling-solids',
          'en-ca': 'https://www.spray.com/en-ca/applications/cooling-solids',
          'pl-pl': 'https://www.spray.com/pl-pl/applications/cooling-solids',
          'ro-ro': 'https://www.spray.com/ro-ro/applications/cooling-solids',
          'es-ar':
            'https://www.spray.com/es-ar/aplicaciones/enfriamiento-de-sólidos',
          'es-cl':
            'https://www.spray.com/es-cl/aplicaciones/enfriamiento-de-sólidos',
          'es-ec':
            'https://www.spray.com/es-ec/aplicaciones/enfriamiento-de-sólidos',
          'es-mx':
            'https://www.spray.com/es-mx/aplicaciones/enfriamiento-de-sólidos',
          'tr-tr': 'https://www.spray.com/tr-tr/applications/cooling-solids',
          'en-be': 'https://www.spray.com/en-be/applications/cooling-solids',
          'en-my': 'https://www.spray.com/en-my/applications/cooling-solids',
          'en-at': 'https://www.spray.com/en-at/applications/cooling-solids',
          'hu-hu':
            'https://www.spray.com/hu-hu/alkalmazások/hűtő-szilárd-anyagok',
          'es-pe':
            'https://www.spray.com/es-pe/aplicaciones/enfriamiento-de-sólidos',
          'es-es':
            'https://www.spray.com/es-es/aplicaciones/refrigeración-de-sólidos',
          'zh-cn': 'https://www.spray.com/zh-cn/应用/cooling-solids',
          'de-be': 'https://www.spray.com/de-be/anwendungen/cooling-solids',
          'nl-be': 'https://www.spray.com/nl-be/applications/cooling-solids',
          'en-nz': 'https://www.spray.com/en-nz/applications/cooling-solids',
          'fi-fi':
            'https://www.spray.com/fi-fi/sovellukset/kiinteiden-aineiden-jaahdytys',
          'fr-ca':
            'https://www.spray.com/fr-ca/applications/refroidissement-des-solides',
          'fr-fr':
            'https://www.spray.com/fr-fr/applications/refroidissement-des-solides',
          'en-id': 'https://www.spray.com/en-id/applications/cooling-solids',
          'en-ch': 'https://www.spray.com/en-ch/applications/cooling-solids',
          'en-cz': 'https://www.spray.com/en-cz/applications/cooling-solids',
          'de-ch': 'https://www.spray.com/de-ch/anwendungen/cooling-solids',
          'en-sg': 'https://www.spray.com/en-sg/applications/cooling-solids',
          'et-ee':
            'https://www.spray.com/et-ee/rakendused/jahutus-tahked-ained',
          'sk-sk': 'https://www.spray.com/sk-sk/aplikácie/chladiace-tuhé-látky',
          'lt-lt':
            'https://www.spray.com/lt-lt/paraiškos/kietųjų-kūnų-aušinimas',
          'lv-lv': 'https://www.spray.com/lv-lv/pieteikumi/cietvielu-dzesēšana',
          'en-ma': 'https://www.spray.com/en-ma/applications/cooling-solids',
          'en-cd': 'https://www.spray.com/en-cd/applications/cooling-solids',
          'en-sk': 'https://www.spray.com/en-sk/applications/cooling-solids',
          'fr-sn':
            'https://www.spray.com/fr-sn/applications/refroidissement-des-solides',
          'en-tn': 'https://www.spray.com/en-tn/applications/cooling-solids',
          'en-zm': 'https://www.spray.com/en-zm/applications/cooling-solids',
          'en-lt': 'https://www.spray.com/en-lt/applications/cooling-solids',
          'fr-ci':
            'https://www.spray.com/fr-ci/applications/refroidissement-des-solides',
          'en-bh': 'https://www.spray.com/en-bh/applications/cooling-solids',
          'fr-cm':
            'https://www.spray.com/fr-cm/applications/refroidissement-des-solides',
          'en-mg': 'https://www.spray.com/en-mg/applications/cooling-solids',
          'en-sa': 'https://www.spray.com/en-sa/applications/cooling-solids',
          'fr-dz':
            'https://www.spray.com/fr-dz/applications/refroidissement-des-solides',
          'en-ci': 'https://www.spray.com/en-ci/applications/cooling-solids',
          'en-ng': 'https://www.spray.com/en-ng/applications/cooling-solids',
          'fr-ma':
            'https://www.spray.com/fr-ma/applications/refroidissement-des-solides',
          'en-cm': 'https://www.spray.com/en-cm/applications/cooling-solids',
          'fr-mg':
            'https://www.spray.com/fr-mg/applications/refroidissement-des-solides',
          'en-iq': 'https://www.spray.com/en-iq/applications/cooling-solids',
          'en-sn': 'https://www.spray.com/en-sn/applications/cooling-solids',
          'fr-tn':
            'https://www.spray.com/fr-tn/applications/refroidissement-des-solides',
          'en-dz': 'https://www.spray.com/en-dz/applications/cooling-solids',
          'en-jo': 'https://www.spray.com/en-jo/applications/cooling-solids',
          'en-eg': 'https://www.spray.com/en-eg/applications/cooling-solids',
          'en-ke': 'https://www.spray.com/en-ke/applications/cooling-solids',
          'en-om': 'https://www.spray.com/en-om/applications/cooling-solids',
          'en-kw': 'https://www.spray.com/en-kw/applications/cooling-solids',
          'fr-cd':
            'https://www.spray.com/fr-cd/applications/refroidissement-des-solides',
          'en-lb': 'https://www.spray.com/en-lb/applications/cooling-solids',
          'en-pk': 'https://www.spray.com/en-pk/applications/cooling-solids',
          'en-lv': 'https://www.spray.com/en-lv/applications/cooling-solids',
          'en-qa': 'https://www.spray.com/en-qa/applications/cooling-solids',
          'it-ch': 'https://www.spray.com/it-ch/applications/cooling-solids',
          'en-in': 'https://www.spray.com/en-in/applications/cooling-solids',
          'fr-be':
            'https://www.spray.com/fr-be/applications/refroidissement-des-solides',
          'nb-no':
            'https://www.spray.com/nb-no/applikasjoner/avkjølende-faste-stoffer',
          'it-it': 'https://www.spray.com/it-it/applications/cooling-solids',
          'sv-se':
            'https://www.spray.com/sv-se/tillämpningar/kylning-av-fasta-ämnen',
          'en-es': 'https://www.spray.com/en-es/applications/cooling-solids',
          'en-hu': 'https://www.spray.com/en-hu/applications/cooling-solids',
          'en-it': 'https://www.spray.com/en-it/applications/cooling-solids',
          'en-nl': 'https://www.spray.com/en-nl/applications/cooling-solids',
          'en-no': 'https://www.spray.com/en-no/applications/cooling-solids',
          'en-pl': 'https://www.spray.com/en-pl/applications/cooling-solids',
          'en-ro': 'https://www.spray.com/en-ro/applications/cooling-solids',
          'en-se': 'https://www.spray.com/en-se/applications/cooling-solids',
          'en-tr': 'https://www.spray.com/en-tr/applications/cooling-solids',
          'en-de': 'https://www.spray.com/en-de/applications/cooling-solids',
          'en-fi': 'https://www.spray.com/en-fi/applications/cooling-solids',
          'en-fr': 'https://www.spray.com/en-fr/applications/cooling-solids',
          'en-gb': 'https://www.spray.com/en-gb/applications/cooling-solids',
          'en-gr': 'https://www.spray.com/en-gr/applications/cooling-solids',
          'en-vn': 'https://www.spray.com/en-vn/applications/cooling-solids',
          'en-hk': 'https://www.spray.com/en-hk/applications/cooling-solids',
          'en-ph': 'https://www.spray.com/en-ph/applications/cooling-solids',
          en: 'https://www.spray.com/applications/cooling-solids',
          'x-default': 'https://www.spray.com/applications/cooling-solids'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.applications.items
            .gasCoolingAndConditioning,
        links: {
          'x-default':
            'https://www.spray.com/applications/gas-cooling-and-conditioning',
          'ko-kr':
            'https://www.spray.com/ko-kr/applications/gas-cooling-and-conditioning',
          'zh-cn':
            'https://www.spray.com/zh-cn/应用/gas-cooling-and-conditioning',
          'ru-ru':
            'https://www.spray.com/ru-ru/применения/газовое-охлаждение-и-кондиционирование',
          'ja-jp':
            'https://www.spray.co.jp/markets_and_applications/gas_cool_condition.aspx',
          'ru-ua':
            'https://www.spray.com.ua/markets_and_applications/gas_cool_condition.aspx',
          'tr-tr':
            'https://www.spray.com/tr-tr/applications/gas-cooling-and-conditioning',
          'fr-ch':
            'https://www.spray.com/fr-ch/applications/refroidissement-et-conditionnement-du-gaz',
          'de-at':
            'https://www.spray.com/de-at/anwendungen/gas-cooling-and-conditioning',
          'de-de':
            'https://www.spray.com/de-de/anwendungen/gas-cooling-and-conditioning',
          'el-gr':
            'https://www.spray.com/el-gr/applications/gas-cooling-and-conditioning',
          'ru-kz':
            'https://www.spray.com/ru-kz/применения/газовое-охлаждение-и-кондиционирование',
          'es-co':
            'https://www.spray.com/es-co/aplicaciones/enfriamiento-y-acondicionamiento-de-gases',
          'bg-bg':
            'https://www.spray.com/bg-bg/приложения/охлаждане-и-кондициониране-на-газ',
          'en-za':
            'https://www.spray.com/en-za/applications/gas-cooling-and-conditioning',
          'sl-si':
            'https://www.spray.com/sl-si/aplikacije/plinsko-hlajenje-in-kondicioniranje',
          'cs-cz':
            'https://www.spray.com/cs-cz/applications/gas-cooling-and-conditioning',
          'nl-nl':
            'https://www.spray.com/nl-nl/applications/gas-cooling-and-conditioning',
          'en-ae':
            'https://www.spray.com/en-ae/applications/gas-cooling-and-conditioning',
          'en-au':
            'https://www.spray.com/en-au/applications/gas-cooling-and-conditioning',
          'en-ca':
            'https://www.spray.com/en-ca/applications/gas-cooling-and-conditioning',
          'pl-pl':
            'https://www.spray.com/pl-pl/applications/gas-cooling-and-conditioning',
          'ro-ro':
            'https://www.spray.com/ro-ro/applications/gas-cooling-and-conditioning',
          'es-ar':
            'https://www.spray.com/es-ar/aplicaciones/enfriamiento-y-acondicionamiento-de-gases',
          'es-cl':
            'https://www.spray.com/es-cl/aplicaciones/enfriamiento-y-acondicionamiento-de-gases',
          'es-ec':
            'https://www.spray.com/es-ec/aplicaciones/enfriamiento-y-acondicionamiento-de-gases',
          'es-mx':
            'https://www.spray.com/es-mx/aplicaciones/enfriamiento-y-acondicionamiento-de-gases',
          'en-be':
            'https://www.spray.com/en-be/applications/gas-cooling-and-conditioning',
          'en-my':
            'https://www.spray.com/en-my/applications/gas-cooling-and-conditioning',
          'en-at':
            'https://www.spray.com/en-at/applications/gas-cooling-and-conditioning',
          'hu-hu':
            'https://www.spray.com/hu-hu/alkalmazások/gázhűtés-és-kondicionálás',
          'es-pe':
            'https://www.spray.com/es-pe/aplicaciones/enfriamiento-y-acondicionamiento-de-gases',
          'es-es':
            'https://www.spray.com/es-es/aplicaciones/soluciones-de-refrigeración-y-acondicionamiento-de-gases',
          'de-be':
            'https://www.spray.com/de-be/anwendungen/gas-cooling-and-conditioning',
          'nl-be':
            'https://www.spray.com/nl-be/applications/gas-cooling-and-conditioning',
          'en-nz':
            'https://www.spray.com/en-nz/applications/gas-cooling-and-conditioning',
          'fi-fi':
            'https://www.spray.com/fi-fi/sovellukset/kaasunjaahdytys-ja-paastohallinta',
          'fr-ca':
            'https://www.spray.com/fr-ca/applications/refroidissement-et-conditionnement-du-gaz',
          'fr-fr':
            'https://www.spray.com/fr-fr/applications/refroidissement-et-conditionnement-du-gaz',
          'en-id':
            'https://www.spray.com/en-id/applications/gas-cooling-and-conditioning',
          'en-ch':
            'https://www.spray.com/en-ch/applications/gas-cooling-and-conditioning',
          'en-cz':
            'https://www.spray.com/en-cz/applications/gas-cooling-and-conditioning',
          'de-ch':
            'https://www.spray.com/de-ch/anwendungen/gas-cooling-and-conditioning',
          'en-sg':
            'https://www.spray.com/en-sg/applications/gas-cooling-and-conditioning',
          'et-ee':
            'https://www.spray.com/et-ee/rakendused/gaasijahutus-ja-konditsioneerimine',
          'sk-sk':
            'https://www.spray.com/sk-sk/aplikácie/chladenie-a-klimatizácia-plynu',
          'lt-lt':
            'https://www.spray.com/lt-lt/paraiškos/dujų-aušinimas-ir-kondicionavimas',
          'lv-lv':
            'https://www.spray.com/lv-lv/pieteikumi/gāzes-dzesēšana-un-kondicionēšana',
          'en-ma':
            'https://www.spray.com/en-ma/applications/gas-cooling-and-conditioning',
          'en-cd':
            'https://www.spray.com/en-cd/applications/gas-cooling-and-conditioning',
          'en-sk':
            'https://www.spray.com/en-sk/applications/gas-cooling-and-conditioning',
          'fr-sn':
            'https://www.spray.com/fr-sn/applications/refroidissement-et-conditionnement-du-gaz',
          'en-tn':
            'https://www.spray.com/en-tn/applications/gas-cooling-and-conditioning',
          'en-zm':
            'https://www.spray.com/en-zm/applications/gas-cooling-and-conditioning',
          'en-lt':
            'https://www.spray.com/en-lt/applications/gas-cooling-and-conditioning',
          'fr-ci':
            'https://www.spray.com/fr-ci/applications/refroidissement-et-conditionnement-du-gaz',
          'en-bh':
            'https://www.spray.com/en-bh/applications/gas-cooling-and-conditioning',
          'fr-cm':
            'https://www.spray.com/fr-cm/applications/refroidissement-et-conditionnement-du-gaz',
          'en-mg':
            'https://www.spray.com/en-mg/applications/gas-cooling-and-conditioning',
          'en-sa':
            'https://www.spray.com/en-sa/applications/gas-cooling-and-conditioning',
          'fr-dz':
            'https://www.spray.com/fr-dz/applications/refroidissement-et-conditionnement-du-gaz',
          'en-ci':
            'https://www.spray.com/en-ci/applications/gas-cooling-and-conditioning',
          'en-ng':
            'https://www.spray.com/en-ng/applications/gas-cooling-and-conditioning',
          'fr-ma':
            'https://www.spray.com/fr-ma/applications/refroidissement-et-conditionnement-du-gaz',
          'en-cm':
            'https://www.spray.com/en-cm/applications/gas-cooling-and-conditioning',
          'fr-mg':
            'https://www.spray.com/fr-mg/applications/refroidissement-et-conditionnement-du-gaz',
          'en-iq':
            'https://www.spray.com/en-iq/applications/gas-cooling-and-conditioning',
          'en-sn':
            'https://www.spray.com/en-sn/applications/gas-cooling-and-conditioning',
          'fr-tn':
            'https://www.spray.com/fr-tn/applications/refroidissement-et-conditionnement-du-gaz',
          'en-dz':
            'https://www.spray.com/en-dz/applications/gas-cooling-and-conditioning',
          'en-jo':
            'https://www.spray.com/en-jo/applications/gas-cooling-and-conditioning',
          'en-eg':
            'https://www.spray.com/en-eg/applications/gas-cooling-and-conditioning',
          'en-ke':
            'https://www.spray.com/en-ke/applications/gas-cooling-and-conditioning',
          'en-om':
            'https://www.spray.com/en-om/applications/gas-cooling-and-conditioning',
          'en-kw':
            'https://www.spray.com/en-kw/applications/gas-cooling-and-conditioning',
          'fr-cd':
            'https://www.spray.com/fr-cd/applications/refroidissement-et-conditionnement-du-gaz',
          'en-lb':
            'https://www.spray.com/en-lb/applications/gas-cooling-and-conditioning',
          'en-pk':
            'https://www.spray.com/en-pk/applications/gas-cooling-and-conditioning',
          'en-lv':
            'https://www.spray.com/en-lv/applications/gas-cooling-and-conditioning',
          'en-qa':
            'https://www.spray.com/en-qa/applications/gas-cooling-and-conditioning',
          'it-ch':
            'https://www.spray.com/it-ch/applications/gas-cooling-and-conditioning',
          'en-in':
            'https://www.spray.com/en-in/applications/gas-cooling-and-conditioning',
          'fr-be':
            'https://www.spray.com/fr-be/applications/refroidissement-et-conditionnement-du-gaz',
          'nb-no':
            'https://www.spray.com/nb-no/applikasjoner/gasskjøling-og-kondisjonering',
          'it-it':
            'https://www.spray.com/it-it/applications/gas-cooling-and-conditioning',
          'sv-se':
            'https://www.spray.com/sv-se/tillämpningar/kylning-och-konditionering-av-gas',
          'en-es':
            'https://www.spray.com/en-es/applications/gas-cooling-and-conditioning',
          'en-hu':
            'https://www.spray.com/en-hu/applications/gas-cooling-and-conditioning',
          'en-it':
            'https://www.spray.com/en-it/applications/gas-cooling-and-conditioning',
          'en-nl':
            'https://www.spray.com/en-nl/applications/gas-cooling-and-conditioning',
          'en-no':
            'https://www.spray.com/en-no/applications/gas-cooling-and-conditioning',
          'en-pl':
            'https://www.spray.com/en-pl/applications/gas-cooling-and-conditioning',
          'en-ro':
            'https://www.spray.com/en-ro/applications/gas-cooling-and-conditioning',
          'en-se':
            'https://www.spray.com/en-se/applications/gas-cooling-and-conditioning',
          'en-tr':
            'https://www.spray.com/en-tr/applications/gas-cooling-and-conditioning',
          'en-de':
            'https://www.spray.com/en-de/applications/gas-cooling-and-conditioning',
          'en-fi':
            'https://www.spray.com/en-fi/applications/gas-cooling-and-conditioning',
          'en-fr':
            'https://www.spray.com/en-fr/applications/gas-cooling-and-conditioning',
          'en-gb':
            'https://www.spray.com/en-gb/applications/gas-cooling-and-conditioning',
          'en-gr':
            'https://www.spray.com/en-gr/applications/gas-cooling-and-conditioning',
          'en-vn':
            'https://www.spray.com/en-vn/applications/gas-cooling-and-conditioning',
          'en-hk':
            'https://www.spray.com/en-hk/applications/gas-cooling-and-conditioning',
          'en-ph':
            'https://www.spray.com/en-ph/applications/gas-cooling-and-conditioning',
          en: 'https://www.spray.com/applications/gas-cooling-and-conditioning'
        }
      },
      {
        labelMessageId: messageIds.navigation.footer.applications.items.coating,
        links: {
          'x-default': 'https://www.spray.com/applications/coating',
          'ko-kr': 'https://www.spray.com/ko-kr/applications/coating',
          'zh-cn': 'https://www.spray.com/zh-cn/应用/coating',
          'ja-jp':
            'https://www.spray.co.jp/markets_and_applications/coating.aspx',
          'ru-ua':
            'https://www.spray.com.ua/markets_and_applications/coating.aspx',
          'fr-ch': 'https://www.spray.com/fr-ch/applications/revetement',
          'de-at': 'https://www.spray.com/de-at/anwendungen/coating',
          'de-de': 'https://www.spray.com/de-de/anwendungen/coating',
          'el-gr': 'https://www.spray.com/el-gr/applications/coating',
          'ru-kz': 'https://www.spray.com/ru-kz/применения/покрытие',
          'ru-ru': 'https://www.spray.com/ru-ru/применения/покрытие',
          'es-co': 'https://www.spray.com/es-co/aplicaciones/recubrimiento',
          'bg-bg': 'https://www.spray.com/bg-bg/приложения/покритие',
          'en-za': 'https://www.spray.com/en-za/applications/coating',
          'sl-si': 'https://www.spray.com/sl-si/aplikacije/premaz',
          'cs-cz': 'https://www.spray.com/cs-cz/applications/coating',
          'nl-nl': 'https://www.spray.com/nl-nl/applications/coating',
          'en-ae': 'https://www.spray.com/en-ae/applications/coating',
          'en-au': 'https://www.spray.com/en-au/applications/coating',
          'en-ca': 'https://www.spray.com/en-ca/applications/coating',
          'pl-pl': 'https://www.spray.com/pl-pl/applications/coating',
          'ro-ro': 'https://www.spray.com/ro-ro/applications/coating',
          'es-ar': 'https://www.spray.com/es-ar/aplicaciones/recubrimiento',
          'es-cl': 'https://www.spray.com/es-cl/aplicaciones/recubrimiento',
          'es-ec': 'https://www.spray.com/es-ec/aplicaciones/recubrimiento',
          'es-mx': 'https://www.spray.com/es-mx/aplicaciones/recubrimiento',
          'tr-tr': 'https://www.spray.com/tr-tr/applications/coating',
          'en-be': 'https://www.spray.com/en-be/applications/coating',
          'en-my': 'https://www.spray.com/en-my/applications/coating',
          'en-at': 'https://www.spray.com/en-at/applications/coating',
          'hu-hu': 'https://www.spray.com/hu-hu/alkalmazások/bevonat',
          'es-pe': 'https://www.spray.com/es-pe/aplicaciones/recubrimiento',
          'es-es': 'https://www.spray.com/es-es/aplicaciones/recubrimientos',
          'de-be': 'https://www.spray.com/de-be/anwendungen/coating',
          'nl-be': 'https://www.spray.com/nl-be/applications/coating',
          'en-nz': 'https://www.spray.com/en-nz/applications/coating',
          'fi-fi': 'https://www.spray.com/fi-fi/sovellukset/paallystys',
          'fr-ca': 'https://www.spray.com/fr-ca/applications/revêtement',
          'fr-fr': 'https://www.spray.com/fr-fr/applications/revetement',
          'en-id': 'https://www.spray.com/en-id/applications/coating',
          'en-ch': 'https://www.spray.com/en-ch/applications/coating',
          'en-cz': 'https://www.spray.com/en-cz/applications/coating',
          'de-ch': 'https://www.spray.com/de-ch/anwendungen/coating',
          'en-sg': 'https://www.spray.com/en-sg/applications/coating',
          'et-ee': 'https://www.spray.com/et-ee/rakendused/pinnakate',
          'sk-sk': 'https://www.spray.com/sk-sk/aplikácie/povrchová-úprava',
          'lt-lt': 'https://www.spray.com/lt-lt/paraiškos/dangos',
          'lv-lv': 'https://www.spray.com/lv-lv/pieteikumi/pārklājums',
          'en-ma': 'https://www.spray.com/en-ma/applications/coating',
          'en-cd': 'https://www.spray.com/en-cd/applications/coating',
          'en-sk': 'https://www.spray.com/en-sk/applications/coating',
          'fr-sn': 'https://www.spray.com/fr-sn/applications/revetement',
          'en-tn': 'https://www.spray.com/en-tn/applications/coating',
          'en-zm': 'https://www.spray.com/en-zm/applications/coating',
          'en-lt': 'https://www.spray.com/en-lt/applications/coating',
          'fr-ci': 'https://www.spray.com/fr-ci/applications/revetement',
          'en-bh': 'https://www.spray.com/en-bh/applications/coating',
          'fr-cm': 'https://www.spray.com/fr-cm/applications/revetement',
          'en-mg': 'https://www.spray.com/en-mg/applications/coating',
          'en-sa': 'https://www.spray.com/en-sa/applications/coating',
          'fr-dz': 'https://www.spray.com/fr-dz/applications/revetement',
          'en-ci': 'https://www.spray.com/en-ci/applications/coating',
          'en-ng': 'https://www.spray.com/en-ng/applications/coating',
          'fr-ma': 'https://www.spray.com/fr-ma/applications/revetement',
          'en-cm': 'https://www.spray.com/en-cm/applications/coating',
          'fr-mg': 'https://www.spray.com/fr-mg/applications/revetement',
          'en-iq': 'https://www.spray.com/en-iq/applications/coating',
          'en-sn': 'https://www.spray.com/en-sn/applications/coating',
          'fr-tn': 'https://www.spray.com/fr-tn/applications/revetement',
          'en-dz': 'https://www.spray.com/en-dz/applications/coating',
          'en-jo': 'https://www.spray.com/en-jo/applications/coating',
          'en-eg': 'https://www.spray.com/en-eg/applications/coating',
          'en-ke': 'https://www.spray.com/en-ke/applications/coating',
          'en-om': 'https://www.spray.com/en-om/applications/coating',
          'en-kw': 'https://www.spray.com/en-kw/applications/coating',
          'fr-cd': 'https://www.spray.com/fr-cd/applications/revetement',
          'en-lb': 'https://www.spray.com/en-lb/applications/coating',
          'en-pk': 'https://www.spray.com/en-pk/applications/coating',
          'en-lv': 'https://www.spray.com/en-lv/applications/coating',
          'en-qa': 'https://www.spray.com/en-qa/applications/coating',
          'it-ch': 'https://www.spray.com/it-ch/applications/coating',
          'en-in': 'https://www.spray.com/en-in/applications/coating',
          'fr-be': 'https://www.spray.com/fr-be/applications/revetement',
          'nb-no': 'https://www.spray.com/nb-no/applikasjoner/belegg',
          'it-it': 'https://www.spray.com/it-it/applications/coating',
          'sv-se': 'https://www.spray.com/sv-se/tillämpningar/beläggning',
          'en-es': 'https://www.spray.com/en-es/applications/coating',
          'en-hu': 'https://www.spray.com/en-hu/applications/coating',
          'en-it': 'https://www.spray.com/en-it/applications/coating',
          'en-nl': 'https://www.spray.com/en-nl/applications/coating',
          'en-no': 'https://www.spray.com/en-no/applications/coating',
          'en-pl': 'https://www.spray.com/en-pl/applications/coating',
          'en-ro': 'https://www.spray.com/en-ro/applications/coating',
          'en-se': 'https://www.spray.com/en-se/applications/coating',
          'en-tr': 'https://www.spray.com/en-tr/applications/coating',
          'en-de': 'https://www.spray.com/en-de/applications/coating',
          'en-fi': 'https://www.spray.com/en-fi/applications/coating',
          'en-fr': 'https://www.spray.com/en-fr/applications/coating',
          'en-gb': 'https://www.spray.com/en-gb/applications/coating',
          'en-gr': 'https://www.spray.com/en-gr/applications/coating',
          'en-vn': 'https://www.spray.com/en-vn/applications/coating',
          'en-hk': 'https://www.spray.com/en-hk/applications/coating',
          'en-ph': 'https://www.spray.com/en-ph/applications/coating',
          en: 'https://www.spray.com/applications/coating'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.applications.items.dryingAndBlowOff,
        links: {
          'fr-ch':
            'https://www.spray.com/fr-ch/applications/sechage-et-soufflage',
          'de-at':
            'https://www.spray.com/de-at/anwendungen/drying-and-blow-off',
          'de-de':
            'https://www.spray.com/de-de/anwendungen/drying-and-blow-off',
          'el-gr':
            'https://www.spray.com/el-gr/applications/drying-and-blow-off',
          'ko-kr':
            'https://www.spray.com/ko-kr/applications/drying-and-blow-off',
          'ru-kz': 'https://www.spray.com/ru-kz/применения/сушка-и-обдув',
          'ru-ru': 'https://www.spray.com/ru-ru/применения/сушка-и-обдув',
          'es-co': 'https://www.spray.com/es-co/aplicaciones/secado-y-soplado',
          'bg-bg':
            'https://www.spray.com/bg-bg/приложения/изсушаване-и-издухване',
          'en-za':
            'https://www.spray.com/en-za/applications/drying-and-blow-off',
          'sl-si':
            'https://www.spray.com/sl-si/aplikacije/sušenje-in-izpihovanje',
          'cs-cz':
            'https://www.spray.com/cs-cz/applications/drying-and-blow-off',
          'nl-nl':
            'https://www.spray.com/nl-nl/applications/drying-and-blow-off',
          'en-ae':
            'https://www.spray.com/en-ae/applications/drying-and-blow-off',
          'en-au':
            'https://www.spray.com/en-au/applications/drying-and-blow-off',
          'en-ca':
            'https://www.spray.com/en-ca/applications/drying-and-blow-off',
          'pl-pl':
            'https://www.spray.com/pl-pl/applications/drying-and-blow-off',
          'ro-ro':
            'https://www.spray.com/ro-ro/applications/drying-and-blow-off',
          'es-ar': 'https://www.spray.com/es-ar/aplicaciones/secado-y-soplado',
          'es-cl': 'https://www.spray.com/es-cl/aplicaciones/secado-y-soplado',
          'es-ec': 'https://www.spray.com/es-ec/aplicaciones/secado-y-soplado',
          'es-mx': 'https://www.spray.com/es-mx/aplicaciones/secado-y-soplado',
          'tr-tr':
            'https://www.spray.com/tr-tr/applications/drying-and-blow-off',
          'en-be':
            'https://www.spray.com/en-be/applications/drying-and-blow-off',
          'en-my':
            'https://www.spray.com/en-my/applications/drying-and-blow-off',
          'en-at':
            'https://www.spray.com/en-at/applications/drying-and-blow-off',
          'hu-hu':
            'https://www.spray.com/hu-hu/alkalmazások/szárítás-és-lefújás',
          'es-pe': 'https://www.spray.com/es-pe/aplicaciones/secado-y-soplado',
          'es-es': 'https://www.spray.com/es-es/aplicaciones/secado-y-soplado',
          'zh-cn': 'https://www.spray.com/zh-cn/应用/drying-and-blow-off',
          'de-be':
            'https://www.spray.com/de-be/anwendungen/drying-and-blow-off',
          'nl-be':
            'https://www.spray.com/nl-be/applications/drying-and-blow-off',
          'en-nz':
            'https://www.spray.com/en-nz/applications/drying-and-blow-off',
          'fi-fi':
            'https://www.spray.com/fi-fi/sovellukset/kuivaus-ja-puhalluskohteet',
          'fr-ca':
            'https://www.spray.com/fr-ca/applications/séchage-et-soufflage',
          'fr-fr':
            'https://www.spray.com/fr-fr/applications/sechage-et-soufflage',
          'en-id':
            'https://www.spray.com/en-id/applications/drying-and-blow-off',
          'en-ch':
            'https://www.spray.com/en-ch/applications/drying-and-blow-off',
          'en-cz':
            'https://www.spray.com/en-cz/applications/drying-and-blow-off',
          'de-ch':
            'https://www.spray.com/de-ch/anwendungen/drying-and-blow-off',
          'en-sg':
            'https://www.spray.com/en-sg/applications/drying-and-blow-off',
          'et-ee':
            'https://www.spray.com/et-ee/rakendused/kuivatamine-ja-puhumine',
          'sk-sk': 'https://www.spray.com/sk-sk/aplikácie/sušenie-a-fúkanie',
          'lt-lt':
            'https://www.spray.com/lt-lt/paraiškos/džiovinimas-ir-išpūtimas',
          'lv-lv':
            'https://www.spray.com/lv-lv/pieteikumi/žāvēšana-un-izsmidzināšana',
          'en-ma':
            'https://www.spray.com/en-ma/applications/drying-and-blow-off',
          'en-cd':
            'https://www.spray.com/en-cd/applications/drying-and-blow-off',
          'en-sk':
            'https://www.spray.com/en-sk/applications/drying-and-blow-off',
          'fr-sn':
            'https://www.spray.com/fr-sn/applications/sechage-et-soufflage',
          'en-tn':
            'https://www.spray.com/en-tn/applications/drying-and-blow-off',
          'en-zm':
            'https://www.spray.com/en-zm/applications/drying-and-blow-off',
          'en-lt':
            'https://www.spray.com/en-lt/applications/drying-and-blow-off',
          'fr-ci':
            'https://www.spray.com/fr-ci/applications/sechage-et-soufflage',
          'en-bh':
            'https://www.spray.com/en-bh/applications/drying-and-blow-off',
          'fr-cm':
            'https://www.spray.com/fr-cm/applications/sechage-et-soufflage',
          'en-mg':
            'https://www.spray.com/en-mg/applications/drying-and-blow-off',
          'en-sa':
            'https://www.spray.com/en-sa/applications/drying-and-blow-off',
          'fr-dz':
            'https://www.spray.com/fr-dz/applications/sechage-et-soufflage',
          'en-ci':
            'https://www.spray.com/en-ci/applications/drying-and-blow-off',
          'en-ng':
            'https://www.spray.com/en-ng/applications/drying-and-blow-off',
          'fr-ma':
            'https://www.spray.com/fr-ma/applications/sechage-et-soufflage',
          'en-cm':
            'https://www.spray.com/en-cm/applications/drying-and-blow-off',
          'fr-mg':
            'https://www.spray.com/fr-mg/applications/sechage-et-soufflage',
          'en-iq':
            'https://www.spray.com/en-iq/applications/drying-and-blow-off',
          'en-sn':
            'https://www.spray.com/en-sn/applications/drying-and-blow-off',
          'fr-tn':
            'https://www.spray.com/fr-tn/applications/sechage-et-soufflage',
          'en-dz':
            'https://www.spray.com/en-dz/applications/drying-and-blow-off',
          'en-jo':
            'https://www.spray.com/en-jo/applications/drying-and-blow-off',
          'en-eg':
            'https://www.spray.com/en-eg/applications/drying-and-blow-off',
          'en-ke':
            'https://www.spray.com/en-ke/applications/drying-and-blow-off',
          'en-om':
            'https://www.spray.com/en-om/applications/drying-and-blow-off',
          'en-kw':
            'https://www.spray.com/en-kw/applications/drying-and-blow-off',
          'fr-cd':
            'https://www.spray.com/fr-cd/applications/sechage-et-soufflage',
          'en-lb':
            'https://www.spray.com/en-lb/applications/drying-and-blow-off',
          'en-pk':
            'https://www.spray.com/en-pk/applications/drying-and-blow-off',
          'en-lv':
            'https://www.spray.com/en-lv/applications/drying-and-blow-off',
          'en-qa':
            'https://www.spray.com/en-qa/applications/drying-and-blow-off',
          'it-ch':
            'https://www.spray.com/it-ch/applications/drying-and-blow-off',
          'en-in':
            'https://www.spray.com/en-in/applications/drying-and-blow-off',
          'fr-be':
            'https://www.spray.com/fr-be/applications/sechage-et-soufflage',
          'nb-no':
            'https://www.spray.com/nb-no/applikasjoner/tørking-og-avblåsing',
          'it-it':
            'https://www.spray.com/it-it/applications/drying-and-blow-off',
          'sv-se':
            'https://www.spray.com/sv-se/tillämpningar/torkning-och-avblåsning',
          'en-es':
            'https://www.spray.com/en-es/applications/drying-and-blow-off',
          'en-hu':
            'https://www.spray.com/en-hu/applications/drying-and-blow-off',
          'en-it':
            'https://www.spray.com/en-it/applications/drying-and-blow-off',
          'en-nl':
            'https://www.spray.com/en-nl/applications/drying-and-blow-off',
          'en-no':
            'https://www.spray.com/en-no/applications/drying-and-blow-off',
          'en-pl':
            'https://www.spray.com/en-pl/applications/drying-and-blow-off',
          'en-ro':
            'https://www.spray.com/en-ro/applications/drying-and-blow-off',
          'en-se':
            'https://www.spray.com/en-se/applications/drying-and-blow-off',
          'en-tr':
            'https://www.spray.com/en-tr/applications/drying-and-blow-off',
          'en-de':
            'https://www.spray.com/en-de/applications/drying-and-blow-off',
          'en-fi':
            'https://www.spray.com/en-fi/applications/drying-and-blow-off',
          'en-fr':
            'https://www.spray.com/en-fr/applications/drying-and-blow-off',
          'en-gb':
            'https://www.spray.com/en-gb/applications/drying-and-blow-off',
          'en-gr':
            'https://www.spray.com/en-gr/applications/drying-and-blow-off',
          'en-vn':
            'https://www.spray.com/en-vn/applications/drying-and-blow-off',
          'en-hk':
            'https://www.spray.com/en-hk/applications/drying-and-blow-off',
          'en-ph':
            'https://www.spray.com/en-ph/applications/drying-and-blow-off',
          en: 'https://www.spray.com/applications/drying-and-blow-off',
          'x-default': 'https://www.spray.com/applications/drying-and-blow-off'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.applications.items.dustControl,
        links: {
          'x-default': 'https://www.spray.com/applications/dust-control',
          'ko-kr': 'https://www.spray.com/ko-kr/applications/dust-control',
          'zh-cn': 'https://www.spray.com/zh-cn/应用/dust-control',
          'ru-ru': 'https://www.spray.com/ru-ru/применения/контроль-пыли',
          'ja-jp':
            'https://www.spray.co.jp/markets_and_applications/dust_control.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/applications/dust-control',
          'fr-ch':
            'https://www.spray.com/fr-ch/applications/solutions-de-controle-de-la-poussiere',
          'de-at': 'https://www.spray.com/de-at/anwendungen/dust-control',
          'de-de': 'https://www.spray.com/de-de/anwendungen/dust-control',
          'el-gr': 'https://www.spray.com/el-gr/applications/dust-control',
          'ru-kz': 'https://www.spray.com/ru-kz/применения/контроль-пыли',
          'es-co': 'https://www.spray.com/es-co/aplicaciones/control-de-polvo',
          'bg-bg': 'https://www.spray.com/bg-bg/приложения/контрол-на-праха',
          'en-za': 'https://www.spray.com/en-za/applications/dust-control',
          'sl-si': 'https://www.spray.com/sl-si/aplikacije/nadzor-prahu',
          'cs-cz': 'https://www.spray.com/cs-cz/applications/dust-control',
          'nl-nl': 'https://www.spray.com/nl-nl/applications/dust-control',
          'en-ae': 'https://www.spray.com/en-ae/applications/dust-control',
          'en-au': 'https://www.spray.com/en-au/applications/dust-control',
          'en-ca': 'https://www.spray.com/en-ca/applications/dust-control',
          'pl-pl': 'https://www.spray.com/pl-pl/applications/dust-control',
          'ro-ro': 'https://www.spray.com/ro-ro/applications/dust-control',
          'es-ar': 'https://www.spray.com/es-ar/aplicaciones/control-de-polvo',
          'es-cl': 'https://www.spray.com/es-cl/aplicaciones/control-de-polvo',
          'es-ec': 'https://www.spray.com/es-ec/aplicaciones/control-de-polvo',
          'es-mx': 'https://www.spray.com/es-mx/aplicaciones/control-de-polvo',
          'en-be': 'https://www.spray.com/en-be/applications/dust-control',
          'en-my': 'https://www.spray.com/en-my/applications/dust-control',
          'en-at': 'https://www.spray.com/en-at/applications/dust-control',
          'hu-hu': 'https://www.spray.com/hu-hu/alkalmazások/porlekötés',
          'es-pe': 'https://www.spray.com/es-pe/aplicaciones/control-de-polvo',
          'es-es': 'https://www.spray.com/es-es/aplicaciones/control-de-polvo',
          'de-be': 'https://www.spray.com/de-be/anwendungen/dust-control',
          'nl-be': 'https://www.spray.com/nl-be/applications/dust-control',
          'en-nz': 'https://www.spray.com/en-nz/applications/dust-control',
          'fi-fi': 'https://www.spray.com/fi-fi/sovellukset/polynhallinta',
          'fr-ca':
            'https://www.spray.com/fr-ca/applications/contrôle-de-la-poussière',
          'fr-fr':
            'https://www.spray.com/fr-fr/applications/solutions-de-controle-de-la-poussiere',
          'en-id': 'https://www.spray.com/en-id/applications/dust-control',
          'en-ch': 'https://www.spray.com/en-ch/applications/dust-control',
          'en-cz': 'https://www.spray.com/en-cz/applications/dust-control',
          'de-ch': 'https://www.spray.com/de-ch/anwendungen/dust-control',
          'en-sg': 'https://www.spray.com/en-sg/applications/dust-control',
          'et-ee': 'https://www.spray.com/et-ee/rakendused/tolmukontroll',
          'sk-sk': 'https://www.spray.com/sk-sk/aplikácie/kontrola-prachu',
          'lt-lt': 'https://www.spray.com/lt-lt/paraiškos/dulkių-kontrolė',
          'lv-lv': 'https://www.spray.com/lv-lv/pieteikumi/putekļu-kontrole',
          'en-ma': 'https://www.spray.com/en-ma/applications/dust-control',
          'en-cd': 'https://www.spray.com/en-cd/applications/dust-control',
          'en-sk': 'https://www.spray.com/en-sk/applications/dust-control',
          'fr-sn':
            'https://www.spray.com/fr-sn/applications/solutions-de-controle-de-la-poussiere',
          'en-tn': 'https://www.spray.com/en-tn/applications/dust-control',
          'en-zm': 'https://www.spray.com/en-zm/applications/dust-control',
          'en-lt': 'https://www.spray.com/en-lt/applications/dust-control',
          'fr-ci':
            'https://www.spray.com/fr-ci/applications/solutions-de-controle-de-la-poussiere',
          'en-bh': 'https://www.spray.com/en-bh/applications/dust-control',
          'fr-cm':
            'https://www.spray.com/fr-cm/applications/solutions-de-controle-de-la-poussiere',
          'en-mg': 'https://www.spray.com/en-mg/applications/dust-control',
          'en-sa': 'https://www.spray.com/en-sa/applications/dust-control',
          'fr-dz':
            'https://www.spray.com/fr-dz/applications/solutions-de-controle-de-la-poussiere',
          'en-ci': 'https://www.spray.com/en-ci/applications/dust-control',
          'en-ng': 'https://www.spray.com/en-ng/applications/dust-control',
          'fr-ma':
            'https://www.spray.com/fr-ma/applications/solutions-de-controle-de-la-poussiere',
          'en-cm': 'https://www.spray.com/en-cm/applications/dust-control',
          'fr-mg':
            'https://www.spray.com/fr-mg/applications/solutions-de-controle-de-la-poussiere',
          'en-iq': 'https://www.spray.com/en-iq/applications/dust-control',
          'en-sn': 'https://www.spray.com/en-sn/applications/dust-control',
          'fr-tn':
            'https://www.spray.com/fr-tn/applications/solutions-de-controle-de-la-poussiere',
          'en-dz': 'https://www.spray.com/en-dz/applications/dust-control',
          'en-jo': 'https://www.spray.com/en-jo/applications/dust-control',
          'en-eg': 'https://www.spray.com/en-eg/applications/dust-control',
          'en-ke': 'https://www.spray.com/en-ke/applications/dust-control',
          'en-om': 'https://www.spray.com/en-om/applications/dust-control',
          'en-kw': 'https://www.spray.com/en-kw/applications/dust-control',
          'fr-cd':
            'https://www.spray.com/fr-cd/applications/solutions-de-controle-de-la-poussiere',
          'en-lb': 'https://www.spray.com/en-lb/applications/dust-control',
          'en-pk': 'https://www.spray.com/en-pk/applications/dust-control',
          'en-lv': 'https://www.spray.com/en-lv/applications/dust-control',
          'en-qa': 'https://www.spray.com/en-qa/applications/dust-control',
          'it-ch': 'https://www.spray.com/it-ch/applications/dust-control',
          'en-in': 'https://www.spray.com/en-in/applications/dust-control',
          'fr-be':
            'https://www.spray.com/fr-be/applications/solutions-de-controle-de-la-poussiere',
          'nb-no': 'https://www.spray.com/nb-no/applikasjoner/støvkontroll',
          'it-it': 'https://www.spray.com/it-it/applications/dust-control',
          'sv-se': 'https://www.spray.com/sv-se/tillämpningar/dammbekämpning',
          'en-es': 'https://www.spray.com/en-es/applications/dust-control',
          'en-hu': 'https://www.spray.com/en-hu/applications/dust-control',
          'en-it': 'https://www.spray.com/en-it/applications/dust-control',
          'en-nl': 'https://www.spray.com/en-nl/applications/dust-control',
          'en-no': 'https://www.spray.com/en-no/applications/dust-control',
          'en-pl': 'https://www.spray.com/en-pl/applications/dust-control',
          'en-ro': 'https://www.spray.com/en-ro/applications/dust-control',
          'en-se': 'https://www.spray.com/en-se/applications/dust-control',
          'en-tr': 'https://www.spray.com/en-tr/applications/dust-control',
          'en-de': 'https://www.spray.com/en-de/applications/dust-control',
          'en-fi': 'https://www.spray.com/en-fi/applications/dust-control',
          'en-fr': 'https://www.spray.com/en-fr/applications/dust-control',
          'en-gb': 'https://www.spray.com/en-gb/applications/dust-control',
          'en-gr': 'https://www.spray.com/en-gr/applications/dust-control',
          'en-vn': 'https://www.spray.com/en-vn/applications/dust-control',
          'en-hk': 'https://www.spray.com/en-hk/applications/dust-control',
          'en-ph': 'https://www.spray.com/en-ph/applications/dust-control',
          en: 'https://www.spray.com/applications/dust-control'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.applications.items.fireProtection,
        links: {
          'x-default': 'https://www.spray.com/applications/fire-protection',
          'ko-kr': 'https://www.spray.com/ko-kr/applications/fire-protection',
          'zh-cn': 'https://www.spray.com/zh-cn/应用/fire-protection',
          'ru-ru':
            'https://www.spray.com/ru-ru/применения/противопожарная-защита',
          'ja-jp':
            'https://www.spray.co.jp/markets_and_applications/fire_protection.aspx',
          'ru-ua':
            'https://www.spray.com.ua/markets_and_applications/fire_protection.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/applications/fire-protection',
          'fr-ch':
            'https://www.spray.com/fr-ch/applications/produits-de-protection-contre-lincendie-en-aerosol',
          'de-at': 'https://www.spray.com/de-at/anwendungen/fire-protection',
          'de-de': 'https://www.spray.com/de-de/anwendungen/fire-protection',
          'el-gr': 'https://www.spray.com/el-gr/applications/fire-protection',
          'ru-kz':
            'https://www.spray.com/ru-kz/применения/противопожарная-защита',
          'es-co':
            'https://www.spray.com/es-co/aplicaciones/protección-contra-fuego',
          'bg-bg':
            'https://www.spray.com/bg-bg/приложения/противопожарна-защита',
          'en-za': 'https://www.spray.com/en-za/applications/fire-protection',
          'sl-si': 'https://www.spray.com/sl-si/aplikacije/požarna-zaščita',
          'cs-cz': 'https://www.spray.com/cs-cz/applications/fire-protection',
          'nl-nl': 'https://www.spray.com/nl-nl/applications/fire-protection',
          'en-ae': 'https://www.spray.com/en-ae/applications/fire-protection',
          'en-au': 'https://www.spray.com/en-au/applications/fire-protection',
          'en-ca': 'https://www.spray.com/en-ca/applications/fire-protection',
          'pl-pl': 'https://www.spray.com/pl-pl/applications/fire-protection',
          'ro-ro': 'https://www.spray.com/ro-ro/applications/fire-protection',
          'es-ar':
            'https://www.spray.com/es-ar/aplicaciones/protección-contra-fuego',
          'es-cl':
            'https://www.spray.com/es-cl/aplicaciones/protección-contra-fuego',
          'es-ec':
            'https://www.spray.com/es-ec/aplicaciones/protección-contra-fuego',
          'es-mx':
            'https://www.spray.com/es-mx/aplicaciones/protección-contra-fuego',
          'en-be': 'https://www.spray.com/en-be/applications/fire-protection',
          'en-my': 'https://www.spray.com/en-my/applications/fire-protection',
          'en-at': 'https://www.spray.com/en-at/applications/fire-protection',
          'hu-hu': 'https://www.spray.com/hu-hu/alkalmazások/tűzvédelem',
          'es-pe':
            'https://www.spray.com/es-pe/aplicaciones/protección-contra-fuego',
          'es-es':
            'https://www.spray.com/es-es/aplicaciones/protección-contra-incendios',
          'de-be': 'https://www.spray.com/de-be/anwendungen/fire-protection',
          'nl-be': 'https://www.spray.com/nl-be/applications/fire-protection',
          'en-nz': 'https://www.spray.com/en-nz/applications/fire-protection',
          'fi-fi': 'https://www.spray.com/fi-fi/sovellukset/palontorjunta',
          'fr-ca':
            "https://www.spray.com/fr-ca/applications/protection-contre-l'incendie",
          'fr-fr':
            'https://www.spray.com/fr-fr/applications/produits-de-protection-contre-lincendie-en-aerosol',
          'en-id': 'https://www.spray.com/en-id/applications/fire-protection',
          'en-ch': 'https://www.spray.com/en-ch/applications/fire-protection',
          'en-cz': 'https://www.spray.com/en-cz/applications/fire-protection',
          'de-ch': 'https://www.spray.com/de-ch/anwendungen/fire-protection',
          'en-sg': 'https://www.spray.com/en-sg/applications/fire-protection',
          'et-ee': 'https://www.spray.com/et-ee/rakendused/tulekaitse',
          'sk-sk': 'https://www.spray.com/sk-sk/aplikácie/požiarna-ochrana',
          'lt-lt':
            'https://www.spray.com/lt-lt/paraiškos/priešgaisrinė-apsauga',
          'lv-lv': 'https://www.spray.com/lv-lv/pieteikumi/ugunsdrošība',
          'en-ma': 'https://www.spray.com/en-ma/applications/fire-protection',
          'en-cd': 'https://www.spray.com/en-cd/applications/fire-protection',
          'en-sk': 'https://www.spray.com/en-sk/applications/fire-protection',
          'fr-sn':
            'https://www.spray.com/fr-sn/applications/produits-de-protection-contre-lincendie-en-aerosol',
          'en-tn': 'https://www.spray.com/en-tn/applications/fire-protection',
          'en-zm': 'https://www.spray.com/en-zm/applications/fire-protection',
          'en-lt': 'https://www.spray.com/en-lt/applications/fire-protection',
          'fr-ci':
            'https://www.spray.com/fr-ci/applications/produits-de-protection-contre-lincendie-en-aerosol',
          'en-bh': 'https://www.spray.com/en-bh/applications/fire-protection',
          'fr-cm':
            'https://www.spray.com/fr-cm/applications/produits-de-protection-contre-lincendie-en-aerosol',
          'en-mg': 'https://www.spray.com/en-mg/applications/fire-protection',
          'en-sa': 'https://www.spray.com/en-sa/applications/fire-protection',
          'fr-dz':
            'https://www.spray.com/fr-dz/applications/produits-de-protection-contre-lincendie-en-aerosol',
          'en-ci': 'https://www.spray.com/en-ci/applications/fire-protection',
          'en-ng': 'https://www.spray.com/en-ng/applications/fire-protection',
          'fr-ma':
            'https://www.spray.com/fr-ma/applications/produits-de-protection-contre-lincendie-en-aerosol',
          'en-cm': 'https://www.spray.com/en-cm/applications/fire-protection',
          'fr-mg':
            'https://www.spray.com/fr-mg/applications/produits-de-protection-contre-lincendie-en-aerosol',
          'en-iq': 'https://www.spray.com/en-iq/applications/fire-protection',
          'en-sn': 'https://www.spray.com/en-sn/applications/fire-protection',
          'fr-tn':
            'https://www.spray.com/fr-tn/applications/produits-de-protection-contre-lincendie-en-aerosol',
          'en-dz': 'https://www.spray.com/en-dz/applications/fire-protection',
          'en-jo': 'https://www.spray.com/en-jo/applications/fire-protection',
          'en-eg': 'https://www.spray.com/en-eg/applications/fire-protection',
          'en-ke': 'https://www.spray.com/en-ke/applications/fire-protection',
          'en-om': 'https://www.spray.com/en-om/applications/fire-protection',
          'en-kw': 'https://www.spray.com/en-kw/applications/fire-protection',
          'fr-cd':
            'https://www.spray.com/fr-cd/applications/produits-de-protection-contre-lincendie-en-aerosol',
          'en-lb': 'https://www.spray.com/en-lb/applications/fire-protection',
          'en-pk': 'https://www.spray.com/en-pk/applications/fire-protection',
          'en-lv': 'https://www.spray.com/en-lv/applications/fire-protection',
          'en-qa': 'https://www.spray.com/en-qa/applications/fire-protection',
          'it-ch': 'https://www.spray.com/it-ch/applications/fire-protection',
          'en-in': 'https://www.spray.com/en-in/applications/fire-protection',
          'fr-be':
            'https://www.spray.com/fr-be/applications/produits-de-protection-contre-lincendie-en-aerosol',
          'nb-no': 'https://www.spray.com/nb-no/applikasjoner/brannvern',
          'it-it': 'https://www.spray.com/it-it/applications/fire-protection',
          'sv-se': 'https://www.spray.com/sv-se/tillämpningar/brandskydd',
          'en-es': 'https://www.spray.com/en-es/applications/fire-protection',
          'en-hu': 'https://www.spray.com/en-hu/applications/fire-protection',
          'en-it': 'https://www.spray.com/en-it/applications/fire-protection',
          'en-nl': 'https://www.spray.com/en-nl/applications/fire-protection',
          'en-no': 'https://www.spray.com/en-no/applications/fire-protection',
          'en-pl': 'https://www.spray.com/en-pl/applications/fire-protection',
          'en-ro': 'https://www.spray.com/en-ro/applications/fire-protection',
          'en-se': 'https://www.spray.com/en-se/applications/fire-protection',
          'en-tr': 'https://www.spray.com/en-tr/applications/fire-protection',
          'en-de': 'https://www.spray.com/en-de/applications/fire-protection',
          'en-fi': 'https://www.spray.com/en-fi/applications/fire-protection',
          'en-fr': 'https://www.spray.com/en-fr/applications/fire-protection',
          'en-gb': 'https://www.spray.com/en-gb/applications/fire-protection',
          'en-gr': 'https://www.spray.com/en-gr/applications/fire-protection',
          'en-vn': 'https://www.spray.com/en-vn/applications/fire-protection',
          'en-hk': 'https://www.spray.com/en-hk/applications/fire-protection',
          'en-ph': 'https://www.spray.com/en-ph/applications/fire-protection',
          en: 'https://www.spray.com/applications/fire-protection'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.applications.items.humidification,
        links: {
          'x-default': 'https://www.spray.com/applications/humidification',
          'ko-kr': 'https://www.spray.com/ko-kr/applications/humidification',
          'zh-cn': 'https://www.spray.com/zh-cn/应用/humidification',
          'ru-ru': 'https://www.spray.com/ru-ru/применения/увлажнение',
          'ja-jp':
            'https://www.spray.co.jp/markets_and_applications/humidification.aspx',
          'ru-ua':
            'https://www.spray.com.ua/markets_and_applications/humidification.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/applications/humidification',
          'fr-ch': 'https://www.spray.com/fr-ch/applications/humidification',
          'de-at': 'https://www.spray.com/de-at/anwendungen/humidification',
          'de-de': 'https://www.spray.com/de-de/anwendungen/humidification',
          'el-gr': 'https://www.spray.com/el-gr/applications/humidification',
          'ru-kz': 'https://www.spray.com/ru-kz/применения/увлажнение',
          'es-co': 'https://www.spray.com/es-co/aplicaciones/humidificación',
          'bg-bg': 'https://www.spray.com/bg-bg/приложения/овлажняване',
          'en-za': 'https://www.spray.com/en-za/applications/humidification',
          'sl-si': 'https://www.spray.com/sl-si/aplikacije/vlaženje',
          'cs-cz': 'https://www.spray.com/cs-cz/applications/humidification',
          'nl-nl': 'https://www.spray.com/nl-nl/applications/humidification',
          'en-ae': 'https://www.spray.com/en-ae/applications/humidification',
          'en-au': 'https://www.spray.com/en-au/applications/humidification',
          'en-ca': 'https://www.spray.com/en-ca/applications/humidification',
          'pl-pl': 'https://www.spray.com/pl-pl/applications/humidification',
          'ro-ro': 'https://www.spray.com/ro-ro/applications/humidification',
          'es-ar': 'https://www.spray.com/es-ar/aplicaciones/humidificación',
          'es-cl': 'https://www.spray.com/es-cl/aplicaciones/humidificación',
          'es-ec': 'https://www.spray.com/es-ec/aplicaciones/humidificación',
          'es-mx': 'https://www.spray.com/es-mx/aplicaciones/humidificación',
          'en-be': 'https://www.spray.com/en-be/applications/humidification',
          'en-my': 'https://www.spray.com/en-my/applications/humidification',
          'en-at': 'https://www.spray.com/en-at/applications/humidification',
          'hu-hu': 'https://www.spray.com/hu-hu/alkalmazások/párásítás',
          'es-pe': 'https://www.spray.com/es-pe/aplicaciones/humidificación',
          'es-es': 'https://www.spray.com/es-es/aplicaciones/humidificacion',
          'de-be': 'https://www.spray.com/de-be/anwendungen/humidification',
          'nl-be': 'https://www.spray.com/nl-be/applications/humidification',
          'en-nz': 'https://www.spray.com/en-nz/applications/humidification',
          'fi-fi': 'https://www.spray.com/fi-fi/sovellukset/kostutus',
          'fr-ca': 'https://www.spray.com/fr-ca/applications/humidification',
          'fr-fr': 'https://www.spray.com/fr-fr/applications/humidification',
          'en-id': 'https://www.spray.com/en-id/applications/humidification',
          'en-ch': 'https://www.spray.com/en-ch/applications/humidification',
          'en-cz': 'https://www.spray.com/en-cz/applications/humidification',
          'de-ch': 'https://www.spray.com/de-ch/anwendungen/humidification',
          'en-sg': 'https://www.spray.com/en-sg/applications/humidification',
          'et-ee': 'https://www.spray.com/et-ee/rakendused/niisutamine',
          'sk-sk': 'https://www.spray.com/sk-sk/aplikácie/zvlhčovanie-vzduchu',
          'lt-lt': 'https://www.spray.com/lt-lt/paraiškos/drėkinimas',
          'lv-lv': 'https://www.spray.com/lv-lv/pieteikumi/mitrināšana',
          'en-ma': 'https://www.spray.com/en-ma/applications/humidification',
          'en-cd': 'https://www.spray.com/en-cd/applications/humidification',
          'en-sk': 'https://www.spray.com/en-sk/applications/humidification',
          'fr-sn': 'https://www.spray.com/fr-sn/applications/humidification',
          'en-tn': 'https://www.spray.com/en-tn/applications/humidification',
          'en-zm': 'https://www.spray.com/en-zm/applications/humidification',
          'en-lt': 'https://www.spray.com/en-lt/applications/humidification',
          'fr-ci': 'https://www.spray.com/fr-ci/applications/humidification',
          'en-bh': 'https://www.spray.com/en-bh/applications/humidification',
          'fr-cm': 'https://www.spray.com/fr-cm/applications/humidification',
          'en-mg': 'https://www.spray.com/en-mg/applications/humidification',
          'en-sa': 'https://www.spray.com/en-sa/applications/humidification',
          'fr-dz': 'https://www.spray.com/fr-dz/applications/humidification',
          'en-ci': 'https://www.spray.com/en-ci/applications/humidification',
          'en-ng': 'https://www.spray.com/en-ng/applications/humidification',
          'fr-ma': 'https://www.spray.com/fr-ma/applications/humidification',
          'en-cm': 'https://www.spray.com/en-cm/applications/humidification',
          'fr-mg': 'https://www.spray.com/fr-mg/applications/humidification',
          'en-iq': 'https://www.spray.com/en-iq/applications/humidification',
          'en-sn': 'https://www.spray.com/en-sn/applications/humidification',
          'fr-tn': 'https://www.spray.com/fr-tn/applications/humidification',
          'en-dz': 'https://www.spray.com/en-dz/applications/humidification',
          'en-jo': 'https://www.spray.com/en-jo/applications/humidification',
          'en-eg': 'https://www.spray.com/en-eg/applications/humidification',
          'en-ke': 'https://www.spray.com/en-ke/applications/humidification',
          'en-om': 'https://www.spray.com/en-om/applications/humidification',
          'en-kw': 'https://www.spray.com/en-kw/applications/humidification',
          'fr-cd': 'https://www.spray.com/fr-cd/applications/humidification',
          'en-lb': 'https://www.spray.com/en-lb/applications/humidification',
          'en-pk': 'https://www.spray.com/en-pk/applications/humidification',
          'en-lv': 'https://www.spray.com/en-lv/applications/humidification',
          'en-qa': 'https://www.spray.com/en-qa/applications/humidification',
          'it-ch': 'https://www.spray.com/it-ch/applications/humidification',
          'en-in': 'https://www.spray.com/en-in/applications/humidification',
          'fr-be': 'https://www.spray.com/fr-be/applications/humidification',
          'nb-no': 'https://www.spray.com/nb-no/applikasjoner/fukting',
          'it-it': 'https://www.spray.com/it-it/applications/humidification',
          'sv-se': 'https://www.spray.com/sv-se/tillämpningar/luftfuktning',
          'en-es': 'https://www.spray.com/en-es/applications/humidification',
          'en-hu': 'https://www.spray.com/en-hu/applications/humidification',
          'en-it': 'https://www.spray.com/en-it/applications/humidification',
          'en-nl': 'https://www.spray.com/en-nl/applications/humidification',
          'en-no': 'https://www.spray.com/en-no/applications/humidification',
          'en-pl': 'https://www.spray.com/en-pl/applications/humidification',
          'en-ro': 'https://www.spray.com/en-ro/applications/humidification',
          'en-se': 'https://www.spray.com/en-se/applications/humidification',
          'en-tr': 'https://www.spray.com/en-tr/applications/humidification',
          'en-de': 'https://www.spray.com/en-de/applications/humidification',
          'en-fi': 'https://www.spray.com/en-fi/applications/humidification',
          'en-fr': 'https://www.spray.com/en-fr/applications/humidification',
          'en-gb': 'https://www.spray.com/en-gb/applications/humidification',
          'en-gr': 'https://www.spray.com/en-gr/applications/humidification',
          'en-vn': 'https://www.spray.com/en-vn/applications/humidification',
          'en-hk': 'https://www.spray.com/en-hk/applications/humidification',
          'en-ph': 'https://www.spray.com/en-ph/applications/humidification',
          en: 'https://www.spray.com/applications/humidification'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.applications.items.lubrication,
        links: {
          'x-default': 'https://www.spray.com/applications/lubrication',
          'ko-kr': 'https://www.spray.com/ko-kr/applications/lubrication',
          'zh-cn': 'https://www.spray.com/zh-cn/应用/lubrication',
          'ru-ru': 'https://www.spray.com/ru-ru/применения/смазка',
          'ja-jp':
            'https://www.spray.co.jp/automated_systems/die_lubrication.aspx',
          'ru-ua':
            'https://www.spray.com.ua/automated_systems/die_lubrication.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/applications/lubrication',
          'fr-ch': 'https://www.spray.com/fr-ch/applications/lubrification',
          'de-at': 'https://www.spray.com/de-at/anwendungen/lubrication',
          'de-de': 'https://www.spray.com/de-de/anwendungen/lubrication',
          'el-gr': 'https://www.spray.com/el-gr/applications/lubrication',
          'ru-kz': 'https://www.spray.com/ru-kz/применения/смазка',
          'es-co': 'https://www.spray.com/es-co/aplicaciones/lubricación',
          'bg-bg': 'https://www.spray.com/bg-bg/приложения/смазване',
          'en-za': 'https://www.spray.com/en-za/applications/lubrication',
          'sl-si': 'https://www.spray.com/sl-si/aplikacije/mazanje',
          'cs-cz': 'https://www.spray.com/cs-cz/applications/lubrication',
          'nl-nl': 'https://www.spray.com/nl-nl/applications/lubrication',
          'en-ae': 'https://www.spray.com/en-ae/applications/lubrication',
          'en-au': 'https://www.spray.com/en-au/applications/lubrication',
          'en-ca': 'https://www.spray.com/en-ca/applications/lubrication',
          'pl-pl': 'https://www.spray.com/pl-pl/applications/lubrication',
          'ro-ro': 'https://www.spray.com/ro-ro/applications/lubrication',
          'es-ar': 'https://www.spray.com/es-ar/aplicaciones/lubricación',
          'es-cl': 'https://www.spray.com/es-cl/aplicaciones/lubricación',
          'es-ec': 'https://www.spray.com/es-ec/aplicaciones/lubricación',
          'es-mx': 'https://www.spray.com/es-mx/aplicaciones/lubricación',
          'en-be': 'https://www.spray.com/en-be/applications/lubrication',
          'en-my': 'https://www.spray.com/en-my/applications/lubrication',
          'en-at': 'https://www.spray.com/en-at/applications/lubrication',
          'hu-hu': 'https://www.spray.com/hu-hu/alkalmazások/kenés',
          'es-pe': 'https://www.spray.com/es-pe/aplicaciones/lubricación',
          'es-es': 'https://www.spray.com/es-es/aplicaciones/lubricación',
          'de-be': 'https://www.spray.com/de-be/anwendungen/lubrication',
          'nl-be': 'https://www.spray.com/nl-be/applications/lubrication',
          'en-nz': 'https://www.spray.com/en-nz/applications/lubrication',
          'fi-fi': 'https://www.spray.com/fi-fi/sovellukset/voitelu',
          'fr-ca': 'https://www.spray.com/fr-ca/applications/lubrification',
          'fr-fr': 'https://www.spray.com/fr-fr/applications/lubrification',
          'en-id': 'https://www.spray.com/en-id/applications/lubrication',
          'en-ch': 'https://www.spray.com/en-ch/applications/lubrication',
          'en-cz': 'https://www.spray.com/en-cz/applications/lubrication',
          'de-ch': 'https://www.spray.com/de-ch/anwendungen/lubrication',
          'en-sg': 'https://www.spray.com/en-sg/applications/lubrication',
          'et-ee': 'https://www.spray.com/et-ee/rakendused/määrimine',
          'sk-sk': 'https://www.spray.com/sk-sk/aplikácie/mazanie',
          'lt-lt': 'https://www.spray.com/lt-lt/paraiškos/tepimas',
          'lv-lv': 'https://www.spray.com/lv-lv/pieteikumi/eļļošana',
          'en-ma': 'https://www.spray.com/en-ma/applications/lubrication',
          'en-cd': 'https://www.spray.com/en-cd/applications/lubrication',
          'en-sk': 'https://www.spray.com/en-sk/applications/lubrication',
          'fr-sn': 'https://www.spray.com/fr-sn/applications/lubrification',
          'en-tn': 'https://www.spray.com/en-tn/applications/lubrication',
          'en-zm': 'https://www.spray.com/en-zm/applications/lubrication',
          'en-lt': 'https://www.spray.com/en-lt/applications/lubrication',
          'fr-ci': 'https://www.spray.com/fr-ci/applications/lubrification',
          'en-bh': 'https://www.spray.com/en-bh/applications/lubrication',
          'fr-cm': 'https://www.spray.com/fr-cm/applications/lubrification',
          'en-mg': 'https://www.spray.com/en-mg/applications/lubrication',
          'en-sa': 'https://www.spray.com/en-sa/applications/lubrication',
          'fr-dz': 'https://www.spray.com/fr-dz/applications/lubrification',
          'en-ci': 'https://www.spray.com/en-ci/applications/lubrication',
          'en-ng': 'https://www.spray.com/en-ng/applications/lubrication',
          'fr-ma': 'https://www.spray.com/fr-ma/applications/lubrification',
          'en-cm': 'https://www.spray.com/en-cm/applications/lubrication',
          'fr-mg': 'https://www.spray.com/fr-mg/applications/lubrification',
          'en-iq': 'https://www.spray.com/en-iq/applications/lubrication',
          'en-sn': 'https://www.spray.com/en-sn/applications/lubrication',
          'fr-tn': 'https://www.spray.com/fr-tn/applications/lubrification',
          'en-dz': 'https://www.spray.com/en-dz/applications/lubrication',
          'en-jo': 'https://www.spray.com/en-jo/applications/lubrication',
          'en-eg': 'https://www.spray.com/en-eg/applications/lubrication',
          'en-ke': 'https://www.spray.com/en-ke/applications/lubrication',
          'en-om': 'https://www.spray.com/en-om/applications/lubrication',
          'en-kw': 'https://www.spray.com/en-kw/applications/lubrication',
          'fr-cd': 'https://www.spray.com/fr-cd/applications/lubrification',
          'en-lb': 'https://www.spray.com/en-lb/applications/lubrication',
          'en-pk': 'https://www.spray.com/en-pk/applications/lubrication',
          'en-lv': 'https://www.spray.com/en-lv/applications/lubrication',
          'en-qa': 'https://www.spray.com/en-qa/applications/lubrication',
          'it-ch': 'https://www.spray.com/it-ch/applications/lubrication',
          'en-in': 'https://www.spray.com/en-in/applications/lubrication',
          'fr-be': 'https://www.spray.com/fr-be/applications/lubrification',
          'nb-no': 'https://www.spray.com/nb-no/applikasjoner/smøring',
          'it-it': 'https://www.spray.com/it-it/applications/lubrication',
          'sv-se': 'https://www.spray.com/sv-se/tillämpningar/smörjning',
          'en-es': 'https://www.spray.com/en-es/applications/lubrication',
          'en-hu': 'https://www.spray.com/en-hu/applications/lubrication',
          'en-it': 'https://www.spray.com/en-it/applications/lubrication',
          'en-nl': 'https://www.spray.com/en-nl/applications/lubrication',
          'en-no': 'https://www.spray.com/en-no/applications/lubrication',
          'en-pl': 'https://www.spray.com/en-pl/applications/lubrication',
          'en-ro': 'https://www.spray.com/en-ro/applications/lubrication',
          'en-se': 'https://www.spray.com/en-se/applications/lubrication',
          'en-tr': 'https://www.spray.com/en-tr/applications/lubrication',
          'en-de': 'https://www.spray.com/en-de/applications/lubrication',
          'en-fi': 'https://www.spray.com/en-fi/applications/lubrication',
          'en-fr': 'https://www.spray.com/en-fr/applications/lubrication',
          'en-gb': 'https://www.spray.com/en-gb/applications/lubrication',
          'en-gr': 'https://www.spray.com/en-gr/applications/lubrication',
          'en-vn': 'https://www.spray.com/en-vn/applications/lubrication',
          'en-hk': 'https://www.spray.com/en-hk/applications/lubrication',
          'en-ph': 'https://www.spray.com/en-ph/applications/lubrication',
          en: 'https://www.spray.com/applications/lubrication'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.applications.items.tankCleaning,
        links: {
          'fr-ch':
            'https://www.spray.com/fr-ch/applications/nettoyage-des-reservoirs',
          'de-at': 'https://www.spray.com/de-at/anwendungen/tank-cleaning',
          'de-de': 'https://www.spray.com/de-de/anwendungen/tank-cleaning',
          'el-gr': 'https://www.spray.com/el-gr/applications/tank-cleaning',
          'ko-kr': 'https://www.spray.com/ko-kr/applications/tank-cleaning',
          'ru-kz': 'https://www.spray.com/ru-kz/применения/очистка-резервуара',
          'ru-ru': 'https://www.spray.com/ru-ru/применения/очистка-резервуара',
          'es-co':
            'https://www.spray.com/es-co/aplicaciones/limpieza-de-tanques',
          'bg-bg':
            'https://www.spray.com/bg-bg/приложения/почистване-на-резервоари',
          'en-za': 'https://www.spray.com/en-za/applications/tank-cleaning',
          'sl-si':
            'https://www.spray.com/sl-si/aplikacije/čiščenje-rezervoarjev',
          'cs-cz': 'https://www.spray.com/cs-cz/applications/tank-cleaning',
          'nl-nl': 'https://www.spray.com/nl-nl/applications/tank-cleaning',
          'en-ae': 'https://www.spray.com/en-ae/applications/tank-cleaning',
          'en-au': 'https://www.spray.com/en-au/applications/tank-cleaning',
          'en-ca': 'https://www.spray.com/en-ca/applications/tank-cleaning',
          'pl-pl': 'https://www.spray.com/pl-pl/applications/tank-cleaning',
          'ro-ro': 'https://www.spray.com/ro-ro/applications/tank-cleaning',
          'es-ar':
            'https://www.spray.com/es-ar/aplicaciones/limpieza-de-tanques',
          'es-cl':
            'https://www.spray.com/es-cl/aplicaciones/limpieza-de-tanques',
          'es-ec':
            'https://www.spray.com/es-ec/aplicaciones/limpieza-de-tanques',
          'es-mx':
            'https://www.spray.com/es-mx/aplicaciones/limpieza-de-tanques',
          'tr-tr': 'https://www.spray.com/tr-tr/applications/tank-cleaning',
          'en-be': 'https://www.spray.com/en-be/applications/tank-cleaning',
          'en-my': 'https://www.spray.com/en-my/applications/tank-cleaning',
          'en-at': 'https://www.spray.com/en-at/applications/tank-cleaning',
          'hu-hu': 'https://www.spray.com/hu-hu/alkalmazások/tartálytisztítás',
          'es-pe':
            'https://www.spray.com/es-pe/aplicaciones/limpieza-de-tanques',
          'es-es':
            'https://www.spray.com/es-es/aplicaciones/limpieza-de-tanques',
          'zh-cn': 'https://www.spray.com/zh-cn/应用/tank-cleaning',
          'de-be': 'https://www.spray.com/de-be/anwendungen/tank-cleaning',
          'nl-be': 'https://www.spray.com/nl-be/applications/tank-cleaning',
          'en-nz': 'https://www.spray.com/en-nz/applications/tank-cleaning',
          'fi-fi': 'https://www.spray.com/fi-fi/sovellukset/sailionpesu',
          'fr-ca':
            'https://www.spray.com/fr-ca/applications/nettoyage-de-réservoir',
          'fr-fr':
            'https://www.spray.com/fr-fr/applications/nettoyage-des-reservoirs',
          'en-id': 'https://www.spray.com/en-id/applications/tank-cleaning',
          'en-ch': 'https://www.spray.com/en-ch/applications/tank-cleaning',
          'en-cz': 'https://www.spray.com/en-cz/applications/tank-cleaning',
          'de-ch': 'https://www.spray.com/de-ch/anwendungen/tank-cleaning',
          'en-sg': 'https://www.spray.com/en-sg/applications/tank-cleaning',
          'et-ee': 'https://www.spray.com/et-ee/rakendused/mahuti-puhastamine',
          'sk-sk': 'https://www.spray.com/sk-sk/aplikácie/čistenie-nádrží',
          'lt-lt': 'https://www.spray.com/lt-lt/paraiškos/rezervuarų-valymas',
          'lv-lv': 'https://www.spray.com/lv-lv/pieteikumi/tvertņu-tīrīšana',
          'en-ma': 'https://www.spray.com/en-ma/applications/tank-cleaning',
          'en-cd': 'https://www.spray.com/en-cd/applications/tank-cleaning',
          'en-sk': 'https://www.spray.com/en-sk/applications/tank-cleaning',
          'fr-sn':
            'https://www.spray.com/fr-sn/applications/nettoyage-des-reservoirs',
          'en-tn': 'https://www.spray.com/en-tn/applications/tank-cleaning',
          'en-zm': 'https://www.spray.com/en-zm/applications/tank-cleaning',
          'en-lt': 'https://www.spray.com/en-lt/applications/tank-cleaning',
          'fr-ci':
            'https://www.spray.com/fr-ci/applications/nettoyage-des-reservoirs',
          'en-bh': 'https://www.spray.com/en-bh/applications/tank-cleaning',
          'fr-cm':
            'https://www.spray.com/fr-cm/applications/nettoyage-des-reservoirs',
          'en-mg': 'https://www.spray.com/en-mg/applications/tank-cleaning',
          'en-sa': 'https://www.spray.com/en-sa/applications/tank-cleaning',
          'fr-dz':
            'https://www.spray.com/fr-dz/applications/nettoyage-des-reservoirs',
          'en-ci': 'https://www.spray.com/en-ci/applications/tank-cleaning',
          'en-ng': 'https://www.spray.com/en-ng/applications/tank-cleaning',
          'fr-ma':
            'https://www.spray.com/fr-ma/applications/nettoyage-des-reservoirs',
          'en-cm': 'https://www.spray.com/en-cm/applications/tank-cleaning',
          'fr-mg':
            'https://www.spray.com/fr-mg/applications/nettoyage-des-reservoirs',
          'en-iq': 'https://www.spray.com/en-iq/applications/tank-cleaning',
          'en-sn': 'https://www.spray.com/en-sn/applications/tank-cleaning',
          'fr-tn':
            'https://www.spray.com/fr-tn/applications/nettoyage-des-reservoirs',
          'en-dz': 'https://www.spray.com/en-dz/applications/tank-cleaning',
          'en-jo': 'https://www.spray.com/en-jo/applications/tank-cleaning',
          'en-eg': 'https://www.spray.com/en-eg/applications/tank-cleaning',
          'en-ke': 'https://www.spray.com/en-ke/applications/tank-cleaning',
          'en-om': 'https://www.spray.com/en-om/applications/tank-cleaning',
          'en-kw': 'https://www.spray.com/en-kw/applications/tank-cleaning',
          'fr-cd':
            'https://www.spray.com/fr-cd/applications/nettoyage-des-reservoirs',
          'en-lb': 'https://www.spray.com/en-lb/applications/tank-cleaning',
          'en-pk': 'https://www.spray.com/en-pk/applications/tank-cleaning',
          'en-lv': 'https://www.spray.com/en-lv/applications/tank-cleaning',
          'en-qa': 'https://www.spray.com/en-qa/applications/tank-cleaning',
          'it-ch': 'https://www.spray.com/it-ch/applications/tank-cleaning',
          'en-in': 'https://www.spray.com/en-in/applications/tank-cleaning',
          'fr-be':
            'https://www.spray.com/fr-be/applications/nettoyage-des-reservoirs',
          'nb-no': 'https://www.spray.com/nb-no/applikasjoner/tankrengjøring',
          'it-it': 'https://www.spray.com/it-it/applications/tank-cleaning',
          'sv-se':
            'https://www.spray.com/sv-se/tillämpningar/rengöring-av-tankar',
          'en-es': 'https://www.spray.com/en-es/applications/tank-cleaning',
          'en-hu': 'https://www.spray.com/en-hu/applications/tank-cleaning',
          'en-it': 'https://www.spray.com/en-it/applications/tank-cleaning',
          'en-nl': 'https://www.spray.com/en-nl/applications/tank-cleaning',
          'en-no': 'https://www.spray.com/en-no/applications/tank-cleaning',
          'en-pl': 'https://www.spray.com/en-pl/applications/tank-cleaning',
          'en-ro': 'https://www.spray.com/en-ro/applications/tank-cleaning',
          'en-se': 'https://www.spray.com/en-se/applications/tank-cleaning',
          'en-tr': 'https://www.spray.com/en-tr/applications/tank-cleaning',
          'en-de': 'https://www.spray.com/en-de/applications/tank-cleaning',
          'en-fi': 'https://www.spray.com/en-fi/applications/tank-cleaning',
          'en-fr': 'https://www.spray.com/en-fr/applications/tank-cleaning',
          'en-gb': 'https://www.spray.com/en-gb/applications/tank-cleaning',
          'en-gr': 'https://www.spray.com/en-gr/applications/tank-cleaning',
          'en-vn': 'https://www.spray.com/en-vn/applications/tank-cleaning',
          'en-hk': 'https://www.spray.com/en-hk/applications/tank-cleaning',
          'en-ph': 'https://www.spray.com/en-ph/applications/tank-cleaning',
          en: 'https://www.spray.com/applications/tank-cleaning',
          'x-default': 'https://www.spray.com/applications/tank-cleaning'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.applications.items.sprayDrying,
        links: {
          'fr-ch':
            'https://www.spray.com/fr-ch/applications/sechage-par-pulverisation',
          'de-at': 'https://www.spray.com/de-at/anwendungen/spray-drying',
          'de-de': 'https://www.spray.com/de-de/anwendungen/spray-drying',
          'el-gr': 'https://www.spray.com/el-gr/applications/spray-drying',
          'ko-kr': 'https://www.spray.com/ko-kr/applications/spray-drying',
          'ru-kz':
            'https://www.spray.com/ru-kz/применения/распылительная-сушка',
          'ru-ru':
            'https://www.spray.com/ru-ru/применения/распылительная-сушка',
          'es-co':
            'https://www.spray.com/es-co/aplicaciones/secado-por-pulverización',
          'bg-bg': 'https://www.spray.com/bg-bg/приложения/сушене-със-спрей',
          'en-za': 'https://www.spray.com/en-za/applications/spray-drying',
          'sl-si':
            'https://www.spray.com/sl-si/aplikacije/sušenje-z-razprševanjem',
          'cs-cz': 'https://www.spray.com/cs-cz/applications/spray-drying',
          'nl-nl': 'https://www.spray.com/nl-nl/applications/spray-drying',
          'en-ae': 'https://www.spray.com/en-ae/applications/spray-drying',
          'en-au': 'https://www.spray.com/en-au/applications/spray-drying',
          'en-ca': 'https://www.spray.com/en-ca/applications/spray-drying',
          'pl-pl': 'https://www.spray.com/pl-pl/applications/spray-drying',
          'ro-ro': 'https://www.spray.com/ro-ro/applications/spray-drying',
          'es-ar':
            'https://www.spray.com/es-ar/aplicaciones/secado-por-pulverización',
          'es-cl':
            'https://www.spray.com/es-cl/aplicaciones/secado-por-pulverización',
          'es-ec':
            'https://www.spray.com/es-ec/aplicaciones/secado-por-pulverización',
          'es-mx':
            'https://www.spray.com/es-mx/aplicaciones/secado-por-aspersión',
          'tr-tr': 'https://www.spray.com/tr-tr/applications/spray-drying',
          'en-be': 'https://www.spray.com/en-be/applications/spray-drying',
          'en-my': 'https://www.spray.com/en-my/applications/spray-drying',
          'en-at': 'https://www.spray.com/en-at/applications/spray-drying',
          'hu-hu': 'https://www.spray.com/hu-hu/alkalmazások/spray-szárítás',
          'es-pe':
            'https://www.spray.com/es-pe/aplicaciones/secado-por-pulverización',
          'es-es':
            'https://www.spray.com/es-es/aplicaciones/boquillas-spraydry',
          'zh-cn': 'https://www.spray.com/zh-cn/应用/spray-drying',
          'de-be': 'https://www.spray.com/de-be/anwendungen/spray-drying',
          'nl-be': 'https://www.spray.com/nl-be/applications/spray-drying',
          'en-nz': 'https://www.spray.com/en-nz/applications/spray-drying',
          'fi-fi': 'https://www.spray.com/fi-fi/sovellukset/sumukuivaus',
          'fr-ca':
            'https://www.spray.com/fr-ca/applications/séchage-par-pulvérisation',
          'fr-fr':
            'https://www.spray.com/fr-fr/applications/sechage-par-pulverisation',
          'en-id': 'https://www.spray.com/en-id/applications/spray-drying',
          'en-ch': 'https://www.spray.com/en-ch/applications/spray-drying',
          'en-cz': 'https://www.spray.com/en-cz/applications/spray-drying',
          'de-ch': 'https://www.spray.com/de-ch/anwendungen/spray-drying',
          'en-sg': 'https://www.spray.com/en-sg/applications/spray-drying',
          'et-ee': 'https://www.spray.com/et-ee/rakendused/pihustuskuivatus',
          'sk-sk':
            'https://www.spray.com/sk-sk/aplikácie/sušenie-rozprašovaním',
          'lt-lt': 'https://www.spray.com/lt-lt/paraiškos/džiovinimas-purškimu',
          'lv-lv':
            'https://www.spray.com/lv-lv/pieteikumi/izsmidzināšanas-žāvēšana',
          'en-ma': 'https://www.spray.com/en-ma/applications/spray-drying',
          'en-cd': 'https://www.spray.com/en-cd/applications/spray-drying',
          'en-sk': 'https://www.spray.com/en-sk/applications/spray-drying',
          'fr-sn':
            'https://www.spray.com/fr-sn/applications/sechage-par-pulverisation',
          'en-tn': 'https://www.spray.com/en-tn/applications/spray-drying',
          'en-zm': 'https://www.spray.com/en-zm/applications/spray-drying',
          'en-lt': 'https://www.spray.com/en-lt/applications/spray-drying',
          'fr-ci':
            'https://www.spray.com/fr-ci/applications/sechage-par-pulverisation',
          'en-bh': 'https://www.spray.com/en-bh/applications/spray-drying',
          'fr-cm':
            'https://www.spray.com/fr-cm/applications/sechage-par-pulverisation',
          'en-mg': 'https://www.spray.com/en-mg/applications/spray-drying',
          'en-sa': 'https://www.spray.com/en-sa/applications/spray-drying',
          'fr-dz':
            'https://www.spray.com/fr-dz/applications/sechage-par-pulverisation',
          'en-ci': 'https://www.spray.com/en-ci/applications/spray-drying',
          'en-ng': 'https://www.spray.com/en-ng/applications/spray-drying',
          'fr-ma':
            'https://www.spray.com/fr-ma/applications/sechage-par-pulverisation',
          'en-cm': 'https://www.spray.com/en-cm/applications/spray-drying',
          'fr-mg':
            'https://www.spray.com/fr-mg/applications/sechage-par-pulverisation',
          'en-iq': 'https://www.spray.com/en-iq/applications/spray-drying',
          'en-sn': 'https://www.spray.com/en-sn/applications/spray-drying',
          'fr-tn':
            'https://www.spray.com/fr-tn/applications/sechage-par-pulverisation',
          'en-dz': 'https://www.spray.com/en-dz/applications/spray-drying',
          'en-jo': 'https://www.spray.com/en-jo/applications/spray-drying',
          'en-eg': 'https://www.spray.com/en-eg/applications/spray-drying',
          'en-ke': 'https://www.spray.com/en-ke/applications/spray-drying',
          'en-om': 'https://www.spray.com/en-om/applications/spray-drying',
          'en-kw': 'https://www.spray.com/en-kw/applications/spray-drying',
          'fr-cd':
            'https://www.spray.com/fr-cd/applications/sechage-par-pulverisation',
          'en-lb': 'https://www.spray.com/en-lb/applications/spray-drying',
          'en-pk': 'https://www.spray.com/en-pk/applications/spray-drying',
          'en-lv': 'https://www.spray.com/en-lv/applications/spray-drying',
          'en-qa': 'https://www.spray.com/en-qa/applications/spray-drying',
          'it-ch': 'https://www.spray.com/it-ch/applications/spray-drying',
          'en-in': 'https://www.spray.com/en-in/applications/spray-drying',
          'fr-be':
            'https://www.spray.com/fr-be/applications/sechage-par-pulverisation',
          'nb-no': 'https://www.spray.com/nb-no/applikasjoner/spraytørking',
          'it-it': 'https://www.spray.com/it-it/applications/spray-drying',
          'sv-se': 'https://www.spray.com/sv-se/tillämpningar/spraytorkning',
          'en-es': 'https://www.spray.com/en-es/applications/spray-drying',
          'en-hu': 'https://www.spray.com/en-hu/applications/spray-drying',
          'en-it': 'https://www.spray.com/en-it/applications/spray-drying',
          'en-nl': 'https://www.spray.com/en-nl/applications/spray-drying',
          'en-no': 'https://www.spray.com/en-no/applications/spray-drying',
          'en-pl': 'https://www.spray.com/en-pl/applications/spray-drying',
          'en-ro': 'https://www.spray.com/en-ro/applications/spray-drying',
          'en-se': 'https://www.spray.com/en-se/applications/spray-drying',
          'en-tr': 'https://www.spray.com/en-tr/applications/spray-drying',
          'en-de': 'https://www.spray.com/en-de/applications/spray-drying',
          'en-fi': 'https://www.spray.com/en-fi/applications/spray-drying',
          'en-fr': 'https://www.spray.com/en-fr/applications/spray-drying',
          'en-gb': 'https://www.spray.com/en-gb/applications/spray-drying',
          'en-gr': 'https://www.spray.com/en-gr/applications/spray-drying',
          'en-vn': 'https://www.spray.com/en-vn/applications/spray-drying',
          'en-hk': 'https://www.spray.com/en-hk/applications/spray-drying',
          'en-ph': 'https://www.spray.com/en-ph/applications/spray-drying',
          en: 'https://www.spray.com/applications/spray-drying',
          'x-default': 'https://www.spray.com/applications/spray-drying'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.applications.items.noxControl,
        links: {
          'x-default': 'https://www.spray.com/applications/nox-control',
          'ko-kr': 'https://www.spray.com/ko-kr/applications/nox-control',
          'zh-cn': 'https://www.spray.com/zh-cn/应用/nox-control',
          'ru-ru': 'https://www.spray.com/ru-ru/применения/контроль-nox',
          'ja-jp':
            'https://www.spray.co.jp/markets_and_applications/nox_control.aspx',
          'ru-ua':
            'https://www.spray.com.ua/markets_and_applications/nox_control.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/applications/nox-control',
          'fr-ch': 'https://www.spray.com/fr-ch/applications/controle-des-nox',
          'de-at': 'https://www.spray.com/de-at/anwendungen/nox-control',
          'de-de': 'https://www.spray.com/de-de/anwendungen/nox-control',
          'el-gr': 'https://www.spray.com/el-gr/applications/nox-control',
          'ru-kz': 'https://www.spray.com/ru-kz/применения/контроль-nox',
          'es-co': 'https://www.spray.com/es-co/aplicaciones/control-de-nox',
          'bg-bg': 'https://www.spray.com/bg-bg/приложения/контрол-на-nox',
          'en-za': 'https://www.spray.com/en-za/applications/nox-control',
          'sl-si': 'https://www.spray.com/sl-si/aplikacije/nadzor-nox',
          'cs-cz': 'https://www.spray.com/cs-cz/applications/nox-control',
          'nl-nl': 'https://www.spray.com/nl-nl/applications/nox-control',
          'en-ae': 'https://www.spray.com/en-ae/applications/nox-control',
          'en-au': 'https://www.spray.com/en-au/applications/nox-control',
          'en-ca': 'https://www.spray.com/en-ca/applications/nox-control',
          'pl-pl': 'https://www.spray.com/pl-pl/applications/nox-control',
          'ro-ro': 'https://www.spray.com/ro-ro/applications/nox-control',
          'es-ar': 'https://www.spray.com/es-ar/aplicaciones/control-de-nox',
          'es-cl': 'https://www.spray.com/es-cl/aplicaciones/control-de-nox',
          'es-ec': 'https://www.spray.com/es-ec/aplicaciones/control-de-nox',
          'es-mx': 'https://www.spray.com/es-mx/aplicaciones/control-de-nox',
          'en-be': 'https://www.spray.com/en-be/applications/nox-control',
          'en-my': 'https://www.spray.com/en-my/applications/nox-control',
          'en-at': 'https://www.spray.com/en-at/applications/nox-control',
          'hu-hu': 'https://www.spray.com/hu-hu/alkalmazások/nox-szabályozás',
          'es-pe': 'https://www.spray.com/es-pe/aplicaciones/control-de-nox',
          'es-es': 'https://www.spray.com/es-es/aplicaciones/control-de-nox',
          'de-be': 'https://www.spray.com/de-be/anwendungen/nox-control',
          'nl-be': 'https://www.spray.com/nl-be/applications/nox-control',
          'en-nz': 'https://www.spray.com/en-nz/applications/nox-control',
          'fi-fi':
            'https://www.spray.com/fi-fi/sovellukset/nox-paastojen-hallinta',
          'fr-ca': 'https://www.spray.com/fr-ca/applications/contrôle-de-nox',
          'fr-fr': 'https://www.spray.com/fr-fr/applications/controle-des-nox',
          'en-id': 'https://www.spray.com/en-id/applications/nox-control',
          'en-ch': 'https://www.spray.com/en-ch/applications/nox-control',
          'en-cz': 'https://www.spray.com/en-cz/applications/nox-control',
          'de-ch': 'https://www.spray.com/de-ch/anwendungen/nox-control',
          'en-sg': 'https://www.spray.com/en-sg/applications/nox-control',
          'et-ee': 'https://www.spray.com/et-ee/rakendused/nox-kontroll',
          'sk-sk': 'https://www.spray.com/sk-sk/aplikácie/regulácia-nox',
          'lt-lt': 'https://www.spray.com/lt-lt/paraiškos/nox-kontrolė',
          'lv-lv': 'https://www.spray.com/lv-lv/pieteikumi/nox-kontrole',
          'en-ma': 'https://www.spray.com/en-ma/applications/nox-control',
          'en-cd': 'https://www.spray.com/en-cd/applications/nox-control',
          'en-sk': 'https://www.spray.com/en-sk/applications/nox-control',
          'fr-sn': 'https://www.spray.com/fr-sn/applications/controle-des-nox',
          'en-tn': 'https://www.spray.com/en-tn/applications/nox-control',
          'en-zm': 'https://www.spray.com/en-zm/applications/nox-control',
          'en-lt': 'https://www.spray.com/en-lt/applications/nox-control',
          'fr-ci': 'https://www.spray.com/fr-ci/applications/controle-des-nox',
          'en-bh': 'https://www.spray.com/en-bh/applications/nox-control',
          'fr-cm': 'https://www.spray.com/fr-cm/applications/controle-des-nox',
          'en-mg': 'https://www.spray.com/en-mg/applications/nox-control',
          'en-sa': 'https://www.spray.com/en-sa/applications/nox-control',
          'fr-dz': 'https://www.spray.com/fr-dz/applications/controle-des-nox',
          'en-ci': 'https://www.spray.com/en-ci/applications/nox-control',
          'en-ng': 'https://www.spray.com/en-ng/applications/nox-control',
          'fr-ma': 'https://www.spray.com/fr-ma/applications/controle-des-nox',
          'en-cm': 'https://www.spray.com/en-cm/applications/nox-control',
          'fr-mg': 'https://www.spray.com/fr-mg/applications/controle-des-nox',
          'en-iq': 'https://www.spray.com/en-iq/applications/nox-control',
          'en-sn': 'https://www.spray.com/en-sn/applications/nox-control',
          'fr-tn': 'https://www.spray.com/fr-tn/applications/controle-des-nox',
          'en-dz': 'https://www.spray.com/en-dz/applications/nox-control',
          'en-jo': 'https://www.spray.com/en-jo/applications/nox-control',
          'en-eg': 'https://www.spray.com/en-eg/applications/nox-control',
          'en-ke': 'https://www.spray.com/en-ke/applications/nox-control',
          'en-om': 'https://www.spray.com/en-om/applications/nox-control',
          'en-kw': 'https://www.spray.com/en-kw/applications/nox-control',
          'fr-cd': 'https://www.spray.com/fr-cd/applications/controle-des-nox',
          'en-lb': 'https://www.spray.com/en-lb/applications/nox-control',
          'en-pk': 'https://www.spray.com/en-pk/applications/nox-control',
          'en-lv': 'https://www.spray.com/en-lv/applications/nox-control',
          'en-qa': 'https://www.spray.com/en-qa/applications/nox-control',
          'it-ch': 'https://www.spray.com/it-ch/applications/nox-control',
          'en-in': 'https://www.spray.com/en-in/applications/nox-control',
          'fr-be': 'https://www.spray.com/fr-be/applications/controle-des-nox',
          'nb-no': 'https://www.spray.com/nb-no/applikasjoner/nox-kontroll',
          'it-it': 'https://www.spray.com/it-it/applications/nox-control',
          'sv-se': 'https://www.spray.com/sv-se/tillämpningar/nox-kontroll',
          'en-es': 'https://www.spray.com/en-es/applications/nox-control',
          'en-hu': 'https://www.spray.com/en-hu/applications/nox-control',
          'en-it': 'https://www.spray.com/en-it/applications/nox-control',
          'en-nl': 'https://www.spray.com/en-nl/applications/nox-control',
          'en-no': 'https://www.spray.com/en-no/applications/nox-control',
          'en-pl': 'https://www.spray.com/en-pl/applications/nox-control',
          'en-ro': 'https://www.spray.com/en-ro/applications/nox-control',
          'en-se': 'https://www.spray.com/en-se/applications/nox-control',
          'en-tr': 'https://www.spray.com/en-tr/applications/nox-control',
          'en-de': 'https://www.spray.com/en-de/applications/nox-control',
          'en-fi': 'https://www.spray.com/en-fi/applications/nox-control',
          'en-fr': 'https://www.spray.com/en-fr/applications/nox-control',
          'en-gb': 'https://www.spray.com/en-gb/applications/nox-control',
          'en-gr': 'https://www.spray.com/en-gr/applications/nox-control',
          'en-vn': 'https://www.spray.com/en-vn/applications/nox-control',
          'en-hk': 'https://www.spray.com/en-hk/applications/nox-control',
          'en-ph': 'https://www.spray.com/en-ph/applications/nox-control',
          en: 'https://www.spray.com/applications/nox-control'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.applications.items.sulfurBurning,
        links: {
          'x-default': 'https://www.spray.com/applications/sulfur-burning',
          'ko-kr': 'https://www.spray.com/ko-kr/applications/sulfur-burning',
          'zh-cn': 'https://www.spray.com/zh-cn/应用/sulfur-burning',
          'ru-ru': 'https://www.spray.com/ru-ru/применения/сжигание-серы',
          'ja-jp':
            'https://www.spray.co.jp/markets_and_applications/sulfur.aspx',
          'ru-ua':
            'https://www.spray.com.ua/markets_and_applications/sulfur.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/applications/sulfur-burning',
          'fr-ch': 'https://www.spray.com/fr-ch/applications/bruler-du-soufre',
          'de-at': 'https://www.spray.com/de-at/anwendungen/sulfur-burning',
          'de-de': 'https://www.spray.com/de-de/anwendungen/sulfur-burning',
          'el-gr': 'https://www.spray.com/el-gr/applications/sulfur-burning',
          'ru-kz': 'https://www.spray.com/ru-kz/применения/сжигание-серы',
          'es-co':
            'https://www.spray.com/es-co/aplicaciones/combustión-de-azufre',
          'bg-bg': 'https://www.spray.com/bg-bg/приложения/изгаряне-на-сяра',
          'en-za': 'https://www.spray.com/en-za/applications/sulfur-burning',
          'sl-si': 'https://www.spray.com/sl-si/aplikacije/izgorevanje-žvepla',
          'cs-cz': 'https://www.spray.com/cs-cz/applications/sulfur-burning',
          'nl-nl': 'https://www.spray.com/nl-nl/applications/sulfur-burning',
          'en-ae': 'https://www.spray.com/en-ae/applications/sulfur-burning',
          'en-au': 'https://www.spray.com/en-au/applications/sulfur-burning',
          'en-ca': 'https://www.spray.com/en-ca/applications/sulfur-burning',
          'pl-pl': 'https://www.spray.com/pl-pl/applications/sulfur-burning',
          'ro-ro': 'https://www.spray.com/ro-ro/applications/sulfur-burning',
          'es-ar':
            'https://www.spray.com/es-ar/aplicaciones/combustión-de-azufre',
          'es-cl':
            'https://www.spray.com/es-cl/aplicaciones/combustión-de-azufre',
          'es-ec':
            'https://www.spray.com/es-ec/aplicaciones/combustión-de-azufre',
          'es-mx':
            'https://www.spray.com/es-mx/aplicaciones/combustión-de-azufre',
          'en-be': 'https://www.spray.com/en-be/applications/sulfur-burning',
          'en-my': 'https://www.spray.com/en-my/applications/sulfur-burning',
          'en-at': 'https://www.spray.com/en-at/applications/sulfur-burning',
          'hu-hu': 'https://www.spray.com/hu-hu/alkalmazások/kénégetés',
          'es-pe':
            'https://www.spray.com/es-pe/aplicaciones/combustión-de-azufre',
          'es-es': 'https://www.spray.com/es-es/aplicaciones/quema-de-azufre',
          'de-be': 'https://www.spray.com/de-be/anwendungen/sulfur-burning',
          'nl-be': 'https://www.spray.com/nl-be/applications/sulfur-burning',
          'en-nz': 'https://www.spray.com/en-nz/applications/sulfur-burning',
          'fi-fi': 'https://www.spray.com/fi-fi/sovellukset/rikinpoltto',
          'fr-ca':
            'https://www.spray.com/fr-ca/applications/combustion-du-soufre',
          'fr-fr': 'https://www.spray.com/fr-fr/applications/bruler-du-soufre',
          'en-id': 'https://www.spray.com/en-id/applications/sulfur-burning',
          'en-ch': 'https://www.spray.com/en-ch/applications/sulfur-burning',
          'en-cz': 'https://www.spray.com/en-cz/applications/sulfur-burning',
          'de-ch': 'https://www.spray.com/de-ch/anwendungen/sulfur-burning',
          'en-sg': 'https://www.spray.com/en-sg/applications/sulfur-burning',
          'et-ee': 'https://www.spray.com/et-ee/rakendused/väävli-põletamine',
          'sk-sk': 'https://www.spray.com/sk-sk/aplikácie/spaľovanie-síry',
          'lt-lt': 'https://www.spray.com/lt-lt/paraiškos/sieros-deginimas',
          'lv-lv': 'https://www.spray.com/lv-lv/pieteikumi/sēra-dedzināšana',
          'en-ma': 'https://www.spray.com/en-ma/applications/sulfur-burning',
          'en-cd': 'https://www.spray.com/en-cd/applications/sulfur-burning',
          'en-sk': 'https://www.spray.com/en-sk/applications/sulfur-burning',
          'fr-sn': 'https://www.spray.com/fr-sn/applications/bruler-du-soufre',
          'en-tn': 'https://www.spray.com/en-tn/applications/sulfur-burning',
          'en-zm': 'https://www.spray.com/en-zm/applications/sulfur-burning',
          'en-lt': 'https://www.spray.com/en-lt/applications/sulfur-burning',
          'fr-ci': 'https://www.spray.com/fr-ci/applications/bruler-du-soufre',
          'en-bh': 'https://www.spray.com/en-bh/applications/sulfur-burning',
          'fr-cm': 'https://www.spray.com/fr-cm/applications/bruler-du-soufre',
          'en-mg': 'https://www.spray.com/en-mg/applications/sulfur-burning',
          'en-sa': 'https://www.spray.com/en-sa/applications/sulfur-burning',
          'fr-dz': 'https://www.spray.com/fr-dz/applications/bruler-du-soufre',
          'en-ci': 'https://www.spray.com/en-ci/applications/sulfur-burning',
          'en-ng': 'https://www.spray.com/en-ng/applications/sulfur-burning',
          'fr-ma': 'https://www.spray.com/fr-ma/applications/bruler-du-soufre',
          'en-cm': 'https://www.spray.com/en-cm/applications/sulfur-burning',
          'fr-mg': 'https://www.spray.com/fr-mg/applications/bruler-du-soufre',
          'en-iq': 'https://www.spray.com/en-iq/applications/sulfur-burning',
          'en-sn': 'https://www.spray.com/en-sn/applications/sulfur-burning',
          'fr-tn': 'https://www.spray.com/fr-tn/applications/bruler-du-soufre',
          'en-dz': 'https://www.spray.com/en-dz/applications/sulfur-burning',
          'en-jo': 'https://www.spray.com/en-jo/applications/sulfur-burning',
          'en-eg': 'https://www.spray.com/en-eg/applications/sulfur-burning',
          'en-ke': 'https://www.spray.com/en-ke/applications/sulfur-burning',
          'en-om': 'https://www.spray.com/en-om/applications/sulfur-burning',
          'en-kw': 'https://www.spray.com/en-kw/applications/sulfur-burning',
          'fr-cd': 'https://www.spray.com/fr-cd/applications/bruler-du-soufre',
          'en-lb': 'https://www.spray.com/en-lb/applications/sulfur-burning',
          'en-pk': 'https://www.spray.com/en-pk/applications/sulfur-burning',
          'en-lv': 'https://www.spray.com/en-lv/applications/sulfur-burning',
          'en-qa': 'https://www.spray.com/en-qa/applications/sulfur-burning',
          'it-ch': 'https://www.spray.com/it-ch/applications/sulfur-burning',
          'en-in': 'https://www.spray.com/en-in/applications/sulfur-burning',
          'fr-be': 'https://www.spray.com/fr-be/applications/bruler-du-soufre',
          'nb-no':
            'https://www.spray.com/nb-no/applikasjoner/svovelforbrenning',
          'it-it': 'https://www.spray.com/it-it/applications/sulfur-burning',
          'sv-se':
            'https://www.spray.com/sv-se/tillämpningar/förbränning-av-svavel',
          'en-es': 'https://www.spray.com/en-es/applications/sulfur-burning',
          'en-hu': 'https://www.spray.com/en-hu/applications/sulfur-burning',
          'en-it': 'https://www.spray.com/en-it/applications/sulfur-burning',
          'en-nl': 'https://www.spray.com/en-nl/applications/sulfur-burning',
          'en-no': 'https://www.spray.com/en-no/applications/sulfur-burning',
          'en-pl': 'https://www.spray.com/en-pl/applications/sulfur-burning',
          'en-ro': 'https://www.spray.com/en-ro/applications/sulfur-burning',
          'en-se': 'https://www.spray.com/en-se/applications/sulfur-burning',
          'en-tr': 'https://www.spray.com/en-tr/applications/sulfur-burning',
          'en-de': 'https://www.spray.com/en-de/applications/sulfur-burning',
          'en-fi': 'https://www.spray.com/en-fi/applications/sulfur-burning',
          'en-fr': 'https://www.spray.com/en-fr/applications/sulfur-burning',
          'en-gb': 'https://www.spray.com/en-gb/applications/sulfur-burning',
          'en-gr': 'https://www.spray.com/en-gr/applications/sulfur-burning',
          'en-vn': 'https://www.spray.com/en-vn/applications/sulfur-burning',
          'en-hk': 'https://www.spray.com/en-hk/applications/sulfur-burning',
          'en-ph': 'https://www.spray.com/en-ph/applications/sulfur-burning',
          en: 'https://www.spray.com/applications/sulfur-burning'
        }
      }
    ]
  },
  services: {
    titleMessageId: messageIds.navigation.footer.services.title,
    items: [
      {
        labelMessageId:
          messageIds.navigation.footer.services.items.servicesOverview,
        links: {
          'fr-ch': 'https://www.spray.com/fr-ch/services/services-overview',
          'de-at': 'https://www.spray.com/de-at/services/services-overview',
          'de-de': 'https://www.spray.com/de-de/services/services-overview',
          'el-gr': 'https://www.spray.com/el-gr/services/services-overview',
          'ko-kr': 'https://www.spray.com/ko-kr/services/services-overview',
          'ru-kz': 'https://www.spray.com/ru-kz/услуги/обзор-услуг',
          'ru-ru': 'https://www.spray.com/ru-ru/услуги/обзор-услуг',
          'es-co':
            'https://www.spray.com/es-co/servicios/resumen-de-nuestros-servicios',
          'bg-bg': 'https://www.spray.com/bg-bg/services/преглед-на-услугите',
          'en-za': 'https://www.spray.com/en-za/services/services-overview',
          'sl-si': 'https://www.spray.com/sl-si/services/pregled-storitev',
          'cs-cz': 'https://www.spray.com/cs-cz/services/services-overview',
          'nl-nl': 'https://www.spray.com/nl-nl/services/services-overview',
          'en-ae': 'https://www.spray.com/en-ae/services/services-overview',
          'en-au': 'https://www.spray.com/en-au/services/services-overview',
          'en-ca': 'https://www.spray.com/en-ca/services/services-overview',
          'pl-pl': 'https://www.spray.com/pl-pl/services/services-overview',
          'ro-ro': 'https://www.spray.com/ro-ro/services/services-overview',
          'es-ar':
            'https://www.spray.com/es-ar/servicios/resumen-de-nuestros-servicios',
          'es-cl':
            'https://www.spray.com/es-cl/servicios/resumen-de-nuestros-servicios',
          'es-ec':
            'https://www.spray.com/es-ec/servicios/resumen-de-nuestros-servicios',
          'es-mx':
            'https://www.spray.com/es-mx/servicios/resumen-de-nuestros-servicios',
          'tr-tr': 'https://www.spray.com/tr-tr/services/services-overview',
          'en-be': 'https://www.spray.com/en-be/services/services-overview',
          'en-my': 'https://www.spray.com/en-my/services/services-overview',
          'en-at': 'https://www.spray.com/en-at/services/services-overview',
          'hu-hu':
            'https://www.spray.com/hu-hu/szolgáltatások/szolgáltatások-áttekintése',
          'es-pe':
            'https://www.spray.com/es-pe/servicios/resumen-de-nuestros-servicios',
          'es-es': 'https://www.spray.com/es-es/servicios/services-overview',
          'zh-cn': 'https://www.spray.com/zh-cn/服务/services-overview',
          'de-be': 'https://www.spray.com/de-be/services/services-overview',
          'nl-be': 'https://www.spray.com/nl-be/services/services-overview',
          'en-nz': 'https://www.spray.com/en-nz/services/services-overview',
          'fi-fi': 'https://www.spray.com/fi-fi/services/services-overview',
          'fr-ca': 'https://www.spray.com/fr-ca/services/aperçu-des-services',
          'fr-fr': 'https://www.spray.com/fr-fr/services/services-overview',
          'en-id': 'https://www.spray.com/en-id/services/services-overview',
          'en-ch': 'https://www.spray.com/en-ch/services/services-overview',
          'en-cz': 'https://www.spray.com/en-cz/services/services-overview',
          'de-ch': 'https://www.spray.com/de-ch/services/services-overview',
          'en-sg': 'https://www.spray.com/en-sg/services/services-overview',
          'et-ee': 'https://www.spray.com/et-ee/services/teenuste-ülevaade',
          'sk-sk': 'https://www.spray.com/sk-sk/services/prehľad-služieb',
          'lt-lt': 'https://www.spray.com/lt-lt/services/paslaugų-apžvalga',
          'lv-lv': 'https://www.spray.com/lv-lv/services/pakalpojumu-pārskats',
          'en-ma': 'https://www.spray.com/en-ma/services/services-overview',
          'en-cd': 'https://www.spray.com/en-cd/services/services-overview',
          'en-sk': 'https://www.spray.com/en-sk/services/services-overview',
          'fr-sn': 'https://www.spray.com/fr-sn/services/services-overview',
          'en-tn': 'https://www.spray.com/en-tn/services/services-overview',
          'en-zm': 'https://www.spray.com/en-zm/services/services-overview',
          'en-lt': 'https://www.spray.com/en-lt/services/services-overview',
          'fr-ci': 'https://www.spray.com/fr-ci/services/services-overview',
          'en-bh': 'https://www.spray.com/en-bh/services/services-overview',
          'fr-cm': 'https://www.spray.com/fr-cm/services/services-overview',
          'en-mg': 'https://www.spray.com/en-mg/services/services-overview',
          'en-sa': 'https://www.spray.com/en-sa/services/services-overview',
          'fr-dz': 'https://www.spray.com/fr-dz/services/services-overview',
          'en-ci': 'https://www.spray.com/en-ci/services/services-overview',
          'en-ng': 'https://www.spray.com/en-ng/services/services-overview',
          'fr-ma': 'https://www.spray.com/fr-ma/services/services-overview',
          'en-cm': 'https://www.spray.com/en-cm/services/services-overview',
          'fr-mg': 'https://www.spray.com/fr-mg/services/services-overview',
          'en-iq': 'https://www.spray.com/en-iq/services/services-overview',
          'en-sn': 'https://www.spray.com/en-sn/services/services-overview',
          'fr-tn': 'https://www.spray.com/fr-tn/services/services-overview',
          'en-dz': 'https://www.spray.com/en-dz/services/services-overview',
          'en-jo': 'https://www.spray.com/en-jo/services/services-overview',
          'en-eg': 'https://www.spray.com/en-eg/services/services-overview',
          'en-ke': 'https://www.spray.com/en-ke/services/services-overview',
          'en-om': 'https://www.spray.com/en-om/services/services-overview',
          'en-kw': 'https://www.spray.com/en-kw/services/services-overview',
          'fr-cd': 'https://www.spray.com/fr-cd/services/services-overview',
          'en-lb': 'https://www.spray.com/en-lb/services/services-overview',
          'en-pk': 'https://www.spray.com/en-pk/services/services-overview',
          'en-lv': 'https://www.spray.com/en-lv/services/services-overview',
          'en-qa': 'https://www.spray.com/en-qa/services/services-overview',
          'it-ch': 'https://www.spray.com/it-ch/services/services-overview',
          'en-in': 'https://www.spray.com/en-in/services/services-overview',
          'fr-be': 'https://www.spray.com/fr-be/services/services-overview',
          'nb-no': 'https://www.spray.com/nb-no/services/tjenester-oversikt',
          'it-it': 'https://www.spray.com/it-it/services/services-overview',
          'sv-se':
            'https://www.spray.com/sv-se/services/översikt-över-tjänster',
          'en-es': 'https://www.spray.com/en-es/services/services-overview',
          'en-hu': 'https://www.spray.com/en-hu/services/services-overview',
          'en-it': 'https://www.spray.com/en-it/services/services-overview',
          'en-nl': 'https://www.spray.com/en-nl/services/services-overview',
          'en-no': 'https://www.spray.com/en-no/services/services-overview',
          'en-pl': 'https://www.spray.com/en-pl/services/services-overview',
          'en-ro': 'https://www.spray.com/en-ro/services/services-overview',
          'en-se': 'https://www.spray.com/en-se/services/services-overview',
          'en-tr': 'https://www.spray.com/en-tr/services/services-overview',
          'en-de': 'https://www.spray.com/en-de/services/services-overview',
          'en-fi': 'https://www.spray.com/en-fi/services/services-overview',
          'en-fr': 'https://www.spray.com/en-fr/services/services-overview',
          'en-gb': 'https://www.spray.com/en-gb/services/services-overview',
          'en-gr': 'https://www.spray.com/en-gr/services/services-overview',
          'en-vn': 'https://www.spray.com/en-vn/services/services-overview',
          'en-hk': 'https://www.spray.com/en-hk/services/services-overview',
          'en-ph': 'https://www.spray.com/en-ph/services/services-overview',
          en: 'https://www.spray.com/services/services-overview',
          'x-default': 'https://www.spray.com/services/services-overview'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.services.items.buySprayProducts,
        links: { 'x-default': 'https://www.ispray.com/' }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.services.items.requestADemo,
        links: {
          'x-default':
            'https://www.spray.com/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'fr-ch':
            'https://www.spray.com/fr-ch/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'de-at': 'https://www.spray.com/de-at/services/spruehversuch',
          'de-de': 'https://www.spray.com/de-de/services/spruehversuch',
          'el-gr':
            'https://www.spray.com/el-gr/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'ko-kr':
            'https://www.spray.com/ko-kr/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'ru-kz':
            'https://www.spray.com/ru-kz/услуги/демонстрация-распыления-узнайте,-как-наша-техника-для-распыления-может-улучшить-ваши-операции',
          'ru-ru':
            'https://www.spray.com/ru-ru/услуги/демонстрация-распыления-узнайте,-как-наша-техника-для-распыления-может-улучшить-ваши-операции',
          'es-co':
            'https://www.spray.com/es-co/servicios/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'bg-bg':
            'https://www.spray.com/bg-bg/services/научете-как-нашата-техника-за-пръскане-може-да-подобри-работата-ви',
          'en-za':
            'https://www.spray.com/en-za/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'sl-si':
            'https://www.spray.com/sl-si/services/demonstracija-škropljenja-spoznajte,-kako-lahko-naša-tehnologija-za-škropljenje-izboljša-vaše-delovanje',
          'cs-cz':
            'https://www.spray.com/cs-cz/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'nl-nl':
            'https://www.spray.com/nl-nl/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-ae':
            'https://www.spray.com/en-ae/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-au':
            'https://www.spray.com/en-au/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-ca':
            'https://www.spray.com/en-ca/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'pl-pl':
            'https://www.spray.com/pl-pl/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'ro-ro':
            'https://www.spray.com/ro-ro/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'es-ar':
            'https://www.spray.com/es-ar/servicios/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'es-cl':
            'https://www.spray.com/es-cl/servicios/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'es-ec':
            'https://www.spray.com/es-ec/servicios/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'tr-tr':
            'https://www.spray.com/tr-tr/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-be':
            'https://www.spray.com/en-be/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-my':
            'https://www.spray.com/en-my/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-at':
            'https://www.spray.com/en-at/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'hu-hu':
            'https://www.spray.com/hu-hu/szolgáltatások/spray-demo-ismerje-meg,-hogyan-javíthatja-a-spray-technológiánk-az-ön-működését',
          'es-pe':
            'https://www.spray.com/es-pe/servicios/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'es-es':
            'https://www.spray.com/es-es/servicios/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'zh-cn':
            'https://www.spray.com/zh-cn/服务/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'de-be': 'https://www.spray.com/de-be/services/spruehversuch',
          'nl-be':
            'https://www.spray.com/nl-be/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-nz':
            'https://www.spray.com/en-nz/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'fi-fi':
            'https://www.spray.com/fi-fi/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'fr-ca':
            'https://www.spray.com/fr-ca/services/démonstration-de-pulvérisation-découvrez-comment-notre-technologie-de-pulvérisation-peut-améliorer-vos-opérations',
          'fr-fr':
            'https://www.spray.com/fr-fr/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-id':
            'https://www.spray.com/en-id/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-ch':
            'https://www.spray.com/en-ch/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-cz':
            'https://www.spray.com/en-cz/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'de-ch': 'https://www.spray.com/de-ch/services/spruehversuch',
          'en-sg':
            'https://www.spray.com/en-sg/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'et-ee':
            'https://www.spray.com/et-ee/services/spray-demo-õppige,-kuidas-meie-spray-tech-saab-parandada-teie-tegevust',
          'sk-sk':
            'https://www.spray.com/sk-sk/services/ukážka-postrekovania-zistite,-ako-môže-naša-technológia-postrekovania-zlepšiť-vašu-prevádzku',
          'lt-lt':
            'https://www.spray.com/lt-lt/services/sužinokite,-kaip-mūsų-purškimo-technika-gali-pagerinti-jūsų-veiklą',
          'lv-lv':
            'https://www.spray.com/lv-lv/services/uzziniet,-kā-mūsu-smidzināšanas-tehnika-var-uzlabot-jūsu-darbību',
          'en-ma':
            'https://www.spray.com/en-ma/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-cd':
            'https://www.spray.com/en-cd/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-sk':
            'https://www.spray.com/en-sk/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'fr-sn':
            'https://www.spray.com/fr-sn/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-tn':
            'https://www.spray.com/en-tn/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-zm':
            'https://www.spray.com/en-zm/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-lt':
            'https://www.spray.com/en-lt/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'fr-ci':
            'https://www.spray.com/fr-ci/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-bh':
            'https://www.spray.com/en-bh/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'fr-cm':
            'https://www.spray.com/fr-cm/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-mg':
            'https://www.spray.com/en-mg/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-sa':
            'https://www.spray.com/en-sa/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'fr-dz':
            'https://www.spray.com/fr-dz/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-ci':
            'https://www.spray.com/en-ci/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-ng':
            'https://www.spray.com/en-ng/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'fr-ma':
            'https://www.spray.com/fr-ma/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-cm':
            'https://www.spray.com/en-cm/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'fr-mg':
            'https://www.spray.com/fr-mg/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-iq':
            'https://www.spray.com/en-iq/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-sn':
            'https://www.spray.com/en-sn/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'fr-tn':
            'https://www.spray.com/fr-tn/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-dz':
            'https://www.spray.com/en-dz/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-jo':
            'https://www.spray.com/en-jo/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-eg':
            'https://www.spray.com/en-eg/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-ke':
            'https://www.spray.com/en-ke/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-om':
            'https://www.spray.com/en-om/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-kw':
            'https://www.spray.com/en-kw/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'fr-cd':
            'https://www.spray.com/fr-cd/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-lb':
            'https://www.spray.com/en-lb/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-pk':
            'https://www.spray.com/en-pk/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-lv':
            'https://www.spray.com/en-lv/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-qa':
            'https://www.spray.com/en-qa/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'it-ch':
            'https://www.spray.com/it-ch/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-in':
            'https://www.spray.com/en-in/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'fr-be':
            'https://www.spray.com/fr-be/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'nb-no':
            'https://www.spray.com/nb-no/services/spraydemo-lær-hvordan-sprayteknologien-vår-kan-forbedre-driften-din',
          'it-it':
            'https://www.spray.com/it-it/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'sv-se':
            'https://www.spray.com/sv-se/services/spray-demo-lär-dig-hur-vår-sprayteknik-kan-förbättra-din-verksamhet',
          'en-es':
            'https://www.spray.com/en-es/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-hu':
            'https://www.spray.com/en-hu/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-it':
            'https://www.spray.com/en-it/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-nl':
            'https://www.spray.com/en-nl/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-no':
            'https://www.spray.com/en-no/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-pl':
            'https://www.spray.com/en-pl/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-ro':
            'https://www.spray.com/en-ro/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-se':
            'https://www.spray.com/en-se/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-tr':
            'https://www.spray.com/en-tr/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-de':
            'https://www.spray.com/en-de/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-fi':
            'https://www.spray.com/en-fi/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-fr':
            'https://www.spray.com/en-fr/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-gb':
            'https://www.spray.com/en-gb/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-gr':
            'https://www.spray.com/en-gr/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-vn':
            'https://www.spray.com/en-vn/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-hk':
            'https://www.spray.com/en-hk/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          'en-ph':
            'https://www.spray.com/en-ph/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations',
          en: 'https://www.spray.com/services/spray-demo-learn-how-our-spray-tech-can-improve-your-operations'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.services.items.freeFacilityEvaluation,
        links: {
          'x-default': 'https://www.spray.com/services/facility-evaluation',
          'ko-kr': 'https://www.spray.com/ko-kr/services/facility-evaluation',
          'zh-cn': 'https://www.spray.com/zh-cn/服务/facility-evaluation',
          'ru-ru': 'https://www.spray.com/ru-ru/услуги/оценка-объекта',
          'ja-jp': 'https://www.spray.co.jp/services/evaluations.aspx',
          'ru-ua': 'https://www.spray.com.ua/services/evaluations.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/services/facility-evaluation',
          'fr-ch': 'https://www.spray.com/fr-ch/services/facility-evaluation',
          'de-at': 'https://www.spray.com/de-at/services/facility-evaluation',
          'de-de': 'https://www.spray.com/de-de/services/facility-evaluation',
          'el-gr': 'https://www.spray.com/el-gr/services/facility-evaluation',
          'ru-kz': 'https://www.spray.com/ru-kz/услуги/оценка-объекта',
          'es-co': 'https://www.spray.com/es-co/servicios/facility-evaluation',
          'bg-bg':
            'https://www.spray.com/bg-bg/services/оценка-на-съоръжението',
          'en-za': 'https://www.spray.com/en-za/services/facility-evaluation',
          'sl-si': 'https://www.spray.com/sl-si/services/vrednotenje-objekta',
          'cs-cz': 'https://www.spray.com/cs-cz/services/facility-evaluation',
          'nl-nl': 'https://www.spray.com/nl-nl/services/facility-evaluation',
          'en-ae': 'https://www.spray.com/en-ae/services/facility-evaluation',
          'en-au': 'https://www.spray.com/en-au/services/facility-evaluation',
          'en-ca': 'https://www.spray.com/en-ca/services/facility-evaluation',
          'pl-pl': 'https://www.spray.com/pl-pl/services/facility-evaluation',
          'ro-ro': 'https://www.spray.com/ro-ro/services/facility-evaluation',
          'es-ar': 'https://www.spray.com/es-ar/servicios/facility-evaluation',
          'es-cl': 'https://www.spray.com/es-cl/servicios/facility-evaluation',
          'es-ec': 'https://www.spray.com/es-ec/servicios/facility-evaluation',
          'en-be': 'https://www.spray.com/en-be/services/facility-evaluation',
          'en-my': 'https://www.spray.com/en-my/services/facility-evaluation',
          'en-at': 'https://www.spray.com/en-at/services/facility-evaluation',
          'hu-hu':
            'https://www.spray.com/hu-hu/szolgáltatások/a-létesítmény-értékelése',
          'es-pe': 'https://www.spray.com/es-pe/servicios/facility-evaluation',
          'es-es': 'https://www.spray.com/es-es/servicios/facility-evaluation',
          'de-be': 'https://www.spray.com/de-be/services/facility-evaluation',
          'nl-be': 'https://www.spray.com/nl-be/services/facility-evaluation',
          'en-nz': 'https://www.spray.com/en-nz/services/facility-evaluation',
          'fi-fi': 'https://www.spray.com/fi-fi/services/facility-evaluation',
          'fr-ca':
            "https://www.spray.com/fr-ca/services/évaluation-de-l'établissement",
          'fr-fr': 'https://www.spray.com/fr-fr/services/facility-evaluation',
          'en-id': 'https://www.spray.com/en-id/services/facility-evaluation',
          'en-ch': 'https://www.spray.com/en-ch/services/facility-evaluation',
          'en-cz': 'https://www.spray.com/en-cz/services/facility-evaluation',
          'de-ch': 'https://www.spray.com/de-ch/services/facility-evaluation',
          'en-sg': 'https://www.spray.com/en-sg/services/facility-evaluation',
          'et-ee': 'https://www.spray.com/et-ee/services/rajatise-hindamine',
          'sk-sk': 'https://www.spray.com/sk-sk/services/hodnotenie-zariadenia',
          'lt-lt': 'https://www.spray.com/lt-lt/services/priemonės-vertinimas',
          'lv-lv': 'https://www.spray.com/lv-lv/services/objekta-novērtējums',
          'en-ma': 'https://www.spray.com/en-ma/services/facility-evaluation',
          'en-cd': 'https://www.spray.com/en-cd/services/facility-evaluation',
          'en-sk': 'https://www.spray.com/en-sk/services/facility-evaluation',
          'fr-sn': 'https://www.spray.com/fr-sn/services/facility-evaluation',
          'en-tn': 'https://www.spray.com/en-tn/services/facility-evaluation',
          'en-zm': 'https://www.spray.com/en-zm/services/facility-evaluation',
          'en-lt': 'https://www.spray.com/en-lt/services/facility-evaluation',
          'fr-ci': 'https://www.spray.com/fr-ci/services/facility-evaluation',
          'en-bh': 'https://www.spray.com/en-bh/services/facility-evaluation',
          'fr-cm': 'https://www.spray.com/fr-cm/services/facility-evaluation',
          'en-mg': 'https://www.spray.com/en-mg/services/facility-evaluation',
          'en-sa': 'https://www.spray.com/en-sa/services/facility-evaluation',
          'fr-dz': 'https://www.spray.com/fr-dz/services/facility-evaluation',
          'en-ci': 'https://www.spray.com/en-ci/services/facility-evaluation',
          'en-ng': 'https://www.spray.com/en-ng/services/facility-evaluation',
          'fr-ma': 'https://www.spray.com/fr-ma/services/facility-evaluation',
          'en-cm': 'https://www.spray.com/en-cm/services/facility-evaluation',
          'fr-mg': 'https://www.spray.com/fr-mg/services/facility-evaluation',
          'en-iq': 'https://www.spray.com/en-iq/services/facility-evaluation',
          'en-sn': 'https://www.spray.com/en-sn/services/facility-evaluation',
          'fr-tn': 'https://www.spray.com/fr-tn/services/facility-evaluation',
          'en-dz': 'https://www.spray.com/en-dz/services/facility-evaluation',
          'en-jo': 'https://www.spray.com/en-jo/services/facility-evaluation',
          'en-eg': 'https://www.spray.com/en-eg/services/facility-evaluation',
          'en-ke': 'https://www.spray.com/en-ke/services/facility-evaluation',
          'en-om': 'https://www.spray.com/en-om/services/facility-evaluation',
          'en-kw': 'https://www.spray.com/en-kw/services/facility-evaluation',
          'fr-cd': 'https://www.spray.com/fr-cd/services/facility-evaluation',
          'en-lb': 'https://www.spray.com/en-lb/services/facility-evaluation',
          'en-pk': 'https://www.spray.com/en-pk/services/facility-evaluation',
          'en-lv': 'https://www.spray.com/en-lv/services/facility-evaluation',
          'en-qa': 'https://www.spray.com/en-qa/services/facility-evaluation',
          'it-ch': 'https://www.spray.com/it-ch/services/facility-evaluation',
          'en-in': 'https://www.spray.com/en-in/services/facility-evaluation',
          'fr-be': 'https://www.spray.com/fr-be/services/facility-evaluation',
          'nb-no': 'https://www.spray.com/nb-no/services/evaluering-av-anlegg',
          'it-it': 'https://www.spray.com/it-it/services/facility-evaluation',
          'sv-se':
            'https://www.spray.com/sv-se/services/utvärdering-av-anläggningen',
          'en-es': 'https://www.spray.com/en-es/services/facility-evaluation',
          'en-hu': 'https://www.spray.com/en-hu/services/facility-evaluation',
          'en-it': 'https://www.spray.com/en-it/services/facility-evaluation',
          'en-nl': 'https://www.spray.com/en-nl/services/facility-evaluation',
          'en-no': 'https://www.spray.com/en-no/services/facility-evaluation',
          'en-pl': 'https://www.spray.com/en-pl/services/facility-evaluation',
          'en-ro': 'https://www.spray.com/en-ro/services/facility-evaluation',
          'en-se': 'https://www.spray.com/en-se/services/facility-evaluation',
          'en-tr': 'https://www.spray.com/en-tr/services/facility-evaluation',
          'en-de': 'https://www.spray.com/en-de/services/facility-evaluation',
          'en-fi': 'https://www.spray.com/en-fi/services/facility-evaluation',
          'en-fr': 'https://www.spray.com/en-fr/services/facility-evaluation',
          'en-gb': 'https://www.spray.com/en-gb/services/facility-evaluation',
          'en-gr': 'https://www.spray.com/en-gr/services/facility-evaluation',
          'en-vn': 'https://www.spray.com/en-vn/services/facility-evaluation',
          'en-hk': 'https://www.spray.com/en-hk/services/facility-evaluation',
          'en-ph': 'https://www.spray.com/en-ph/services/facility-evaluation',
          en: 'https://www.spray.com/services/facility-evaluation'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.services.items.sustainabilityAssessment,
        links: {
          'x-default':
            'https://www.spray.com/services/sustainability-assessment',
          'ko-kr':
            'https://www.spray.com/ko-kr/services/sustainability-assessment',
          'tr-tr':
            'https://www.spray.com/tr-tr/services/sustainability-assessment',
          'fr-ch':
            'https://www.spray.com/fr-ch/services/sustainability-assessment',
          'de-at':
            'https://www.spray.com/de-at/services/sustainability-assessment',
          'de-de':
            'https://www.spray.com/de-de/services/sustainability-assessment',
          'el-gr':
            'https://www.spray.com/el-gr/services/sustainability-assessment',
          'ru-kz': 'https://www.spray.com/ru-kz/услуги/оценка-устойчивости',
          'ru-ru': 'https://www.spray.com/ru-ru/услуги/оценка-устойчивости',
          'es-co':
            'https://www.spray.com/es-co/servicios/sustainability-assessment',
          'bg-bg':
            'https://www.spray.com/bg-bg/services/оценка-на-устойчивостта',
          'en-za':
            'https://www.spray.com/en-za/services/sustainability-assessment',
          'sl-si':
            'https://www.spray.com/sl-si/services/ocena-trajnostnega-razvoja',
          'cs-cz':
            'https://www.spray.com/cs-cz/services/sustainability-assessment',
          'nl-nl':
            'https://www.spray.com/nl-nl/services/sustainability-assessment',
          'en-ae':
            'https://www.spray.com/en-ae/services/sustainability-assessment',
          'en-au':
            'https://www.spray.com/en-au/services/sustainability-assessment',
          'en-ca':
            'https://www.spray.com/en-ca/services/sustainability-assessment',
          'pl-pl':
            'https://www.spray.com/pl-pl/services/sustainability-assessment',
          'ro-ro':
            'https://www.spray.com/ro-ro/services/sustainability-assessment',
          'es-ar':
            'https://www.spray.com/es-ar/servicios/sustainability-assessment',
          'es-cl':
            'https://www.spray.com/es-cl/servicios/sustainability-assessment',
          'es-ec':
            'https://www.spray.com/es-ec/servicios/sustainability-assessment',
          'en-be':
            'https://www.spray.com/en-be/services/sustainability-assessment',
          'en-my':
            'https://www.spray.com/en-my/services/sustainability-assessment',
          'en-at':
            'https://www.spray.com/en-at/services/sustainability-assessment',
          'hu-hu':
            'https://www.spray.com/hu-hu/szolgáltatások/fenntarthatósági-értékelés',
          'es-pe':
            'https://www.spray.com/es-pe/servicios/sustainability-assessment',
          'es-es':
            'https://www.spray.com/es-es/servicios/sustainability-assessment',
          'zh-cn': 'https://www.spray.com/zh-cn/服务/sustainability-assessment',
          'de-be':
            'https://www.spray.com/de-be/services/sustainability-assessment',
          'nl-be':
            'https://www.spray.com/nl-be/services/sustainability-assessment',
          'en-nz':
            'https://www.spray.com/en-nz/services/sustainability-assessment',
          'fi-fi':
            'https://www.spray.com/fi-fi/services/sustainability-assessment',
          'fr-ca':
            'https://www.spray.com/fr-ca/services/évaluation-de-la-durabilité',
          'fr-fr':
            'https://www.spray.com/fr-fr/services/sustainability-assessment',
          'en-id':
            'https://www.spray.com/en-id/services/sustainability-assessment',
          'en-ch':
            'https://www.spray.com/en-ch/services/sustainability-assessment',
          'en-cz':
            'https://www.spray.com/en-cz/services/sustainability-assessment',
          'de-ch':
            'https://www.spray.com/de-ch/services/sustainability-assessment',
          'en-sg':
            'https://www.spray.com/en-sg/services/sustainability-assessment',
          'et-ee':
            'https://www.spray.com/et-ee/services/jätkusuutlikkuse-hindamine',
          'sk-sk':
            'https://www.spray.com/sk-sk/services/hodnotenie-udržateľnosti',
          'lt-lt': 'https://www.spray.com/lt-lt/services/tvarumo-vertinimas',
          'lv-lv':
            'https://www.spray.com/lv-lv/services/ilgtspējas-novērtējums',
          'en-ma':
            'https://www.spray.com/en-ma/services/sustainability-assessment',
          'en-cd':
            'https://www.spray.com/en-cd/services/sustainability-assessment',
          'en-sk':
            'https://www.spray.com/en-sk/services/sustainability-assessment',
          'fr-sn':
            'https://www.spray.com/fr-sn/services/sustainability-assessment',
          'en-tn':
            'https://www.spray.com/en-tn/services/sustainability-assessment',
          'en-zm':
            'https://www.spray.com/en-zm/services/sustainability-assessment',
          'en-lt':
            'https://www.spray.com/en-lt/services/sustainability-assessment',
          'fr-ci':
            'https://www.spray.com/fr-ci/services/sustainability-assessment',
          'en-bh':
            'https://www.spray.com/en-bh/services/sustainability-assessment',
          'fr-cm':
            'https://www.spray.com/fr-cm/services/sustainability-assessment',
          'en-mg':
            'https://www.spray.com/en-mg/services/sustainability-assessment',
          'en-sa':
            'https://www.spray.com/en-sa/services/sustainability-assessment',
          'fr-dz':
            'https://www.spray.com/fr-dz/services/sustainability-assessment',
          'en-ci':
            'https://www.spray.com/en-ci/services/sustainability-assessment',
          'en-ng':
            'https://www.spray.com/en-ng/services/sustainability-assessment',
          'fr-ma':
            'https://www.spray.com/fr-ma/services/sustainability-assessment',
          'en-cm':
            'https://www.spray.com/en-cm/services/sustainability-assessment',
          'fr-mg':
            'https://www.spray.com/fr-mg/services/sustainability-assessment',
          'en-iq':
            'https://www.spray.com/en-iq/services/sustainability-assessment',
          'en-sn':
            'https://www.spray.com/en-sn/services/sustainability-assessment',
          'fr-tn':
            'https://www.spray.com/fr-tn/services/sustainability-assessment',
          'en-dz':
            'https://www.spray.com/en-dz/services/sustainability-assessment',
          'en-jo':
            'https://www.spray.com/en-jo/services/sustainability-assessment',
          'en-eg':
            'https://www.spray.com/en-eg/services/sustainability-assessment',
          'en-ke':
            'https://www.spray.com/en-ke/services/sustainability-assessment',
          'en-om':
            'https://www.spray.com/en-om/services/sustainability-assessment',
          'en-kw':
            'https://www.spray.com/en-kw/services/sustainability-assessment',
          'fr-cd':
            'https://www.spray.com/fr-cd/services/sustainability-assessment',
          'en-lb':
            'https://www.spray.com/en-lb/services/sustainability-assessment',
          'en-pk':
            'https://www.spray.com/en-pk/services/sustainability-assessment',
          'en-lv':
            'https://www.spray.com/en-lv/services/sustainability-assessment',
          'en-qa':
            'https://www.spray.com/en-qa/services/sustainability-assessment',
          'it-ch':
            'https://www.spray.com/it-ch/services/sustainability-assessment',
          'en-in':
            'https://www.spray.com/en-in/services/sustainability-assessment',
          'fr-be':
            'https://www.spray.com/fr-be/services/sustainability-assessment',
          'nb-no': 'https://www.spray.com/nb-no/services/bærekraftsvurdering',
          'it-it':
            'https://www.spray.com/it-it/services/sustainability-assessment',
          'sv-se':
            'https://www.spray.com/sv-se/services/bedömning-av-hållbarhet',
          'en-es':
            'https://www.spray.com/en-es/services/sustainability-assessment',
          'en-hu':
            'https://www.spray.com/en-hu/services/sustainability-assessment',
          'en-it':
            'https://www.spray.com/en-it/services/sustainability-assessment',
          'en-nl':
            'https://www.spray.com/en-nl/services/sustainability-assessment',
          'en-no':
            'https://www.spray.com/en-no/services/sustainability-assessment',
          'en-pl':
            'https://www.spray.com/en-pl/services/sustainability-assessment',
          'en-ro':
            'https://www.spray.com/en-ro/services/sustainability-assessment',
          'en-se':
            'https://www.spray.com/en-se/services/sustainability-assessment',
          'en-tr':
            'https://www.spray.com/en-tr/services/sustainability-assessment',
          'en-de':
            'https://www.spray.com/en-de/services/sustainability-assessment',
          'en-fi':
            'https://www.spray.com/en-fi/services/sustainability-assessment',
          'en-fr':
            'https://www.spray.com/en-fr/services/sustainability-assessment',
          'en-gb':
            'https://www.spray.com/en-gb/services/sustainability-assessment',
          'en-gr':
            'https://www.spray.com/en-gr/services/sustainability-assessment',
          'en-vn':
            'https://www.spray.com/en-vn/services/sustainability-assessment',
          'en-hk':
            'https://www.spray.com/en-hk/services/sustainability-assessment',
          'en-ph':
            'https://www.spray.com/en-ph/services/sustainability-assessment',
          en: 'https://www.spray.com/services/sustainability-assessment'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.services.items.needHelpWithADesign,
        links: {
          'fr-ch': 'https://www.spray.com/fr-ch/services/design-assistance',
          'de-at': 'https://www.spray.com/de-at/services/design-assistance',
          'de-de': 'https://www.spray.com/de-de/services/design-assistance',
          'el-gr': 'https://www.spray.com/el-gr/services/design-assistance',
          'ko-kr': 'https://www.spray.com/ko-kr/services/design-assistance',
          'ru-kz': 'https://www.spray.com/ru-kz/услуги/помощь-в-проектировании',
          'ru-ru': 'https://www.spray.com/ru-ru/услуги/помощь-в-проектировании',
          'es-co':
            'https://www.spray.com/es-co/servicios/asistencia-en-el-diseño',
          'bg-bg': 'https://www.spray.com/bg-bg/services/помощ-при-проектиране',
          'en-za': 'https://www.spray.com/en-za/services/design-assistance',
          'sl-si': 'https://www.spray.com/sl-si/services/pomoč-pri-oblikovanju',
          'cs-cz': 'https://www.spray.com/cs-cz/services/design-assistance',
          'nl-nl': 'https://www.spray.com/nl-nl/services/design-assistance',
          'en-ae': 'https://www.spray.com/en-ae/services/design-assistance',
          'en-au': 'https://www.spray.com/en-au/services/design-assistance',
          'en-ca': 'https://www.spray.com/en-ca/services/design-assistance',
          'pl-pl': 'https://www.spray.com/pl-pl/services/design-assistance',
          'ro-ro': 'https://www.spray.com/ro-ro/services/design-assistance',
          'es-ar':
            'https://www.spray.com/es-ar/servicios/asistencia-en-el-diseño',
          'es-cl':
            'https://www.spray.com/es-cl/servicios/asistencia-en-el-diseño',
          'es-ec':
            'https://www.spray.com/es-ec/servicios/asistencia-en-el-diseño',
          'es-mx':
            'https://www.spray.com/es-mx/servicios/asistencia-en-el-diseño',
          'tr-tr': 'https://www.spray.com/tr-tr/services/design-assistance',
          'en-be': 'https://www.spray.com/en-be/services/design-assistance',
          'en-my': 'https://www.spray.com/en-my/services/design-assistance',
          'en-at': 'https://www.spray.com/en-at/services/design-assistance',
          'hu-hu':
            'https://www.spray.com/hu-hu/szolgáltatások/tervezési-segítség',
          'es-pe':
            'https://www.spray.com/es-pe/servicios/asistencia-en-el-diseño',
          'es-es': 'https://www.spray.com/es-es/servicios/design-assistance',
          'zh-cn': 'https://www.spray.com/zh-cn/服务/design-assistance',
          'de-be': 'https://www.spray.com/de-be/services/design-assistance',
          'nl-be': 'https://www.spray.com/nl-be/services/design-assistance',
          'en-nz': 'https://www.spray.com/en-nz/services/design-assistance',
          'fi-fi': 'https://www.spray.com/fi-fi/services/design-assistance',
          'fr-ca':
            'https://www.spray.com/fr-ca/services/assistance-à-la-conception',
          'fr-fr': 'https://www.spray.com/fr-fr/services/design-assistance',
          'en-id': 'https://www.spray.com/en-id/services/design-assistance',
          'en-ch': 'https://www.spray.com/en-ch/services/design-assistance',
          'en-cz': 'https://www.spray.com/en-cz/services/design-assistance',
          'de-ch': 'https://www.spray.com/de-ch/services/design-assistance',
          'en-sg': 'https://www.spray.com/en-sg/services/design-assistance',
          'et-ee': 'https://www.spray.com/et-ee/services/disainiabi',
          'sk-sk': 'https://www.spray.com/sk-sk/services/pomoc-pri-navrhovaní',
          'lt-lt': 'https://www.spray.com/lt-lt/services/projektavimo-pagalba',
          'lv-lv':
            'https://www.spray.com/lv-lv/services/projektēšanas-palīdzība',
          'en-ma': 'https://www.spray.com/en-ma/services/design-assistance',
          'en-cd': 'https://www.spray.com/en-cd/services/design-assistance',
          'en-sk': 'https://www.spray.com/en-sk/services/design-assistance',
          'fr-sn': 'https://www.spray.com/fr-sn/services/design-assistance',
          'en-tn': 'https://www.spray.com/en-tn/services/design-assistance',
          'en-zm': 'https://www.spray.com/en-zm/services/design-assistance',
          'en-lt': 'https://www.spray.com/en-lt/services/design-assistance',
          'fr-ci': 'https://www.spray.com/fr-ci/services/design-assistance',
          'en-bh': 'https://www.spray.com/en-bh/services/design-assistance',
          'fr-cm': 'https://www.spray.com/fr-cm/services/design-assistance',
          'en-mg': 'https://www.spray.com/en-mg/services/design-assistance',
          'en-sa': 'https://www.spray.com/en-sa/services/design-assistance',
          'fr-dz': 'https://www.spray.com/fr-dz/services/design-assistance',
          'en-ci': 'https://www.spray.com/en-ci/services/design-assistance',
          'en-ng': 'https://www.spray.com/en-ng/services/design-assistance',
          'fr-ma': 'https://www.spray.com/fr-ma/services/design-assistance',
          'en-cm': 'https://www.spray.com/en-cm/services/design-assistance',
          'fr-mg': 'https://www.spray.com/fr-mg/services/design-assistance',
          'en-iq': 'https://www.spray.com/en-iq/services/design-assistance',
          'en-sn': 'https://www.spray.com/en-sn/services/design-assistance',
          'fr-tn': 'https://www.spray.com/fr-tn/services/design-assistance',
          'en-dz': 'https://www.spray.com/en-dz/services/design-assistance',
          'en-jo': 'https://www.spray.com/en-jo/services/design-assistance',
          'en-eg': 'https://www.spray.com/en-eg/services/design-assistance',
          'en-ke': 'https://www.spray.com/en-ke/services/design-assistance',
          'en-om': 'https://www.spray.com/en-om/services/design-assistance',
          'en-kw': 'https://www.spray.com/en-kw/services/design-assistance',
          'fr-cd': 'https://www.spray.com/fr-cd/services/design-assistance',
          'en-lb': 'https://www.spray.com/en-lb/services/design-assistance',
          'en-pk': 'https://www.spray.com/en-pk/services/design-assistance',
          'en-lv': 'https://www.spray.com/en-lv/services/design-assistance',
          'en-qa': 'https://www.spray.com/en-qa/services/design-assistance',
          'it-ch': 'https://www.spray.com/it-ch/services/design-assistance',
          'en-in': 'https://www.spray.com/en-in/services/design-assistance',
          'fr-be': 'https://www.spray.com/fr-be/services/design-assistance',
          'nb-no': 'https://www.spray.com/nb-no/services/designhjelp',
          'it-it': 'https://www.spray.com/it-it/services/design-assistance',
          'sv-se':
            'https://www.spray.com/sv-se/services/bistånd-vid-utformning',
          'en-es': 'https://www.spray.com/en-es/services/design-assistance',
          'en-hu': 'https://www.spray.com/en-hu/services/design-assistance',
          'en-it': 'https://www.spray.com/en-it/services/design-assistance',
          'en-nl': 'https://www.spray.com/en-nl/services/design-assistance',
          'en-no': 'https://www.spray.com/en-no/services/design-assistance',
          'en-pl': 'https://www.spray.com/en-pl/services/design-assistance',
          'en-ro': 'https://www.spray.com/en-ro/services/design-assistance',
          'en-se': 'https://www.spray.com/en-se/services/design-assistance',
          'en-tr': 'https://www.spray.com/en-tr/services/design-assistance',
          'en-de': 'https://www.spray.com/en-de/services/design-assistance',
          'en-fi': 'https://www.spray.com/en-fi/services/design-assistance',
          'en-fr': 'https://www.spray.com/en-fr/services/design-assistance',
          'en-gb': 'https://www.spray.com/en-gb/services/design-assistance',
          'en-gr': 'https://www.spray.com/en-gr/services/design-assistance',
          'en-vn': 'https://www.spray.com/en-vn/services/design-assistance',
          'en-hk': 'https://www.spray.com/en-hk/services/design-assistance',
          'en-ph': 'https://www.spray.com/en-ph/services/design-assistance',
          en: 'https://www.spray.com/services/design-assistance',
          'x-default': 'https://www.spray.com/services/design-assistance'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.services.items
            .advancedTestingAndModeling,
        links: {
          'x-default':
            'https://www.spray.com/services/advanced-testing-and-modeling',
          'ko-kr':
            'https://www.spray.com/ko-kr/services/advanced-testing-and-modeling',
          'zh-cn':
            'https://www.spray.com/zh-cn/服务/advanced-testing-and-modeling',
          'ja-jp': 'https://www.spray.co.jp/services/research_and_testing.aspx',
          'fr-ch':
            'https://www.spray.com/fr-ch/services/advanced-testing-and-modeling',
          'de-at':
            'https://www.spray.com/de-at/services/advanced-testing-and-modeling',
          'de-de':
            'https://www.spray.com/de-de/services/advanced-testing-and-modeling',
          'el-gr':
            'https://www.spray.com/el-gr/services/advanced-testing-and-modeling',
          'ru-kz':
            'https://www.spray.com/ru-kz/услуги/продвинутое-тестирование-и-моделирование',
          'ru-ru':
            'https://www.spray.com/ru-ru/услуги/продвинутое-тестирование-и-моделирование',
          'es-co': 'https://www.spray.com/es-co/servicios/pruebas-y-modelado',
          'bg-bg':
            'https://www.spray.com/bg-bg/services/усъвършенствано-тестване-и-моделиране',
          'en-za':
            'https://www.spray.com/en-za/services/advanced-testing-and-modeling',
          'sl-si':
            'https://www.spray.com/sl-si/services/napredno-testiranje-in-modeliranje',
          'cs-cz':
            'https://www.spray.com/cs-cz/services/advanced-testing-and-modeling',
          'nl-nl':
            'https://www.spray.com/nl-nl/services/advanced-testing-and-modeling',
          'en-ae':
            'https://www.spray.com/en-ae/services/advanced-testing-and-modeling',
          'en-au':
            'https://www.spray.com/en-au/services/advanced-testing-and-modeling',
          'en-ca':
            'https://www.spray.com/en-ca/services/advanced-testing-and-modeling',
          'pl-pl':
            'https://www.spray.com/pl-pl/services/advanced-testing-and-modeling',
          'ro-ro':
            'https://www.spray.com/ro-ro/services/advanced-testing-and-modeling',
          'es-ar': 'https://www.spray.com/es-ar/servicios/pruebas-y-modelado',
          'es-cl': 'https://www.spray.com/es-cl/servicios/pruebas-y-modelado',
          'es-ec': 'https://www.spray.com/es-ec/servicios/pruebas-y-modelado',
          'es-mx': 'https://www.spray.com/es-mx/servicios/pruebas-y-modelado',
          'tr-tr':
            'https://www.spray.com/tr-tr/services/advanced-testing-and-modeling',
          'en-be':
            'https://www.spray.com/en-be/services/advanced-testing-and-modeling',
          'en-my':
            'https://www.spray.com/en-my/services/advanced-testing-and-modeling',
          'en-at':
            'https://www.spray.com/en-at/services/advanced-testing-and-modeling',
          'hu-hu':
            'https://www.spray.com/hu-hu/szolgáltatások/haladó-tesztelés-és-modellezés',
          'es-pe': 'https://www.spray.com/es-pe/servicios/pruebas-y-modelado',
          'es-es':
            'https://www.spray.com/es-es/servicios/advanced-testing-and-modeling',
          'de-be':
            'https://www.spray.com/de-be/services/advanced-testing-and-modeling',
          'nl-be':
            'https://www.spray.com/nl-be/services/advanced-testing-and-modeling',
          'en-nz':
            'https://www.spray.com/en-nz/services/advanced-testing-and-modeling',
          'fi-fi':
            'https://www.spray.com/fi-fi/services/advanced-testing-and-modeling',
          'fr-ca':
            'https://www.spray.com/fr-ca/services/tests-et-modélisation-avancés',
          'fr-fr':
            'https://www.spray.com/fr-fr/services/advanced-testing-and-modeling',
          'en-id':
            'https://www.spray.com/en-id/services/advanced-testing-and-modeling',
          'en-ch':
            'https://www.spray.com/en-ch/services/advanced-testing-and-modeling',
          'en-cz':
            'https://www.spray.com/en-cz/services/advanced-testing-and-modeling',
          'de-ch':
            'https://www.spray.com/de-ch/services/advanced-testing-and-modeling',
          'en-sg':
            'https://www.spray.com/en-sg/services/advanced-testing-and-modeling',
          'et-ee':
            'https://www.spray.com/et-ee/services/täiustatud-testimine-ja-modelleerimine',
          'sk-sk':
            'https://www.spray.com/sk-sk/services/pokročilé-testovanie-a-modelovanie',
          'lt-lt':
            'https://www.spray.com/lt-lt/services/išplėstinis-testavimas-ir-modeliavimas',
          'lv-lv':
            'https://www.spray.com/lv-lv/services/uzlabota-testēšana-un-modelēšana',
          'en-ma':
            'https://www.spray.com/en-ma/services/advanced-testing-and-modeling',
          'en-cd':
            'https://www.spray.com/en-cd/services/advanced-testing-and-modeling',
          'en-sk':
            'https://www.spray.com/en-sk/services/advanced-testing-and-modeling',
          'fr-sn':
            'https://www.spray.com/fr-sn/services/advanced-testing-and-modeling',
          'en-tn':
            'https://www.spray.com/en-tn/services/advanced-testing-and-modeling',
          'en-zm':
            'https://www.spray.com/en-zm/services/advanced-testing-and-modeling',
          'en-lt':
            'https://www.spray.com/en-lt/services/advanced-testing-and-modeling',
          'fr-ci':
            'https://www.spray.com/fr-ci/services/advanced-testing-and-modeling',
          'en-bh':
            'https://www.spray.com/en-bh/services/advanced-testing-and-modeling',
          'fr-cm':
            'https://www.spray.com/fr-cm/services/advanced-testing-and-modeling',
          'en-mg':
            'https://www.spray.com/en-mg/services/advanced-testing-and-modeling',
          'en-sa':
            'https://www.spray.com/en-sa/services/advanced-testing-and-modeling',
          'fr-dz':
            'https://www.spray.com/fr-dz/services/advanced-testing-and-modeling',
          'en-ci':
            'https://www.spray.com/en-ci/services/advanced-testing-and-modeling',
          'en-ng':
            'https://www.spray.com/en-ng/services/advanced-testing-and-modeling',
          'fr-ma':
            'https://www.spray.com/fr-ma/services/advanced-testing-and-modeling',
          'en-cm':
            'https://www.spray.com/en-cm/services/advanced-testing-and-modeling',
          'fr-mg':
            'https://www.spray.com/fr-mg/services/advanced-testing-and-modeling',
          'en-iq':
            'https://www.spray.com/en-iq/services/advanced-testing-and-modeling',
          'en-sn':
            'https://www.spray.com/en-sn/services/advanced-testing-and-modeling',
          'fr-tn':
            'https://www.spray.com/fr-tn/services/advanced-testing-and-modeling',
          'en-dz':
            'https://www.spray.com/en-dz/services/advanced-testing-and-modeling',
          'en-jo':
            'https://www.spray.com/en-jo/services/advanced-testing-and-modeling',
          'en-eg':
            'https://www.spray.com/en-eg/services/advanced-testing-and-modeling',
          'en-ke':
            'https://www.spray.com/en-ke/services/advanced-testing-and-modeling',
          'en-om':
            'https://www.spray.com/en-om/services/advanced-testing-and-modeling',
          'en-kw':
            'https://www.spray.com/en-kw/services/advanced-testing-and-modeling',
          'fr-cd':
            'https://www.spray.com/fr-cd/services/advanced-testing-and-modeling',
          'en-lb':
            'https://www.spray.com/en-lb/services/advanced-testing-and-modeling',
          'en-pk':
            'https://www.spray.com/en-pk/services/advanced-testing-and-modeling',
          'en-lv':
            'https://www.spray.com/en-lv/services/advanced-testing-and-modeling',
          'en-qa':
            'https://www.spray.com/en-qa/services/advanced-testing-and-modeling',
          'it-ch':
            'https://www.spray.com/it-ch/services/advanced-testing-and-modeling',
          'en-in':
            'https://www.spray.com/en-in/services/advanced-testing-and-modeling',
          'fr-be':
            'https://www.spray.com/fr-be/services/advanced-testing-and-modeling',
          'nb-no':
            'https://www.spray.com/nb-no/services/avansert-testing-og-modellering',
          'it-it':
            'https://www.spray.com/it-it/services/advanced-testing-and-modeling',
          'sv-se':
            'https://www.spray.com/sv-se/services/avancerad-provning-och-modellering',
          'en-es':
            'https://www.spray.com/en-es/services/advanced-testing-and-modeling',
          'en-hu':
            'https://www.spray.com/en-hu/services/advanced-testing-and-modeling',
          'en-it':
            'https://www.spray.com/en-it/services/advanced-testing-and-modeling',
          'en-nl':
            'https://www.spray.com/en-nl/services/advanced-testing-and-modeling',
          'en-no':
            'https://www.spray.com/en-no/services/advanced-testing-and-modeling',
          'en-pl':
            'https://www.spray.com/en-pl/services/advanced-testing-and-modeling',
          'en-ro':
            'https://www.spray.com/en-ro/services/advanced-testing-and-modeling',
          'en-se':
            'https://www.spray.com/en-se/services/advanced-testing-and-modeling',
          'en-tr':
            'https://www.spray.com/en-tr/services/advanced-testing-and-modeling',
          'en-de':
            'https://www.spray.com/en-de/services/advanced-testing-and-modeling',
          'en-fi':
            'https://www.spray.com/en-fi/services/advanced-testing-and-modeling',
          'en-fr':
            'https://www.spray.com/en-fr/services/advanced-testing-and-modeling',
          'en-gb':
            'https://www.spray.com/en-gb/services/advanced-testing-and-modeling',
          'en-gr':
            'https://www.spray.com/en-gr/services/advanced-testing-and-modeling',
          'en-vn':
            'https://www.spray.com/en-vn/services/advanced-testing-and-modeling',
          'en-hk':
            'https://www.spray.com/en-hk/services/advanced-testing-and-modeling',
          'en-ph':
            'https://www.spray.com/en-ph/services/advanced-testing-and-modeling',
          en: 'https://www.spray.com/services/advanced-testing-and-modeling'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.services.items.servicesForOEMs,
        links: {
          'x-default':
            'https://www.spray.com/industries/other-industries/oems-and-engineering-firms',
          'ko-kr':
            'https://www.spray.com/ko-kr/industries/other-industries/oems-and-engineering-firms',
          'zh-cn':
            'https://www.spray.com/zh-cn/行业/other-industries/oems-and-engineering-firms',
          'ru-ru':
            'https://www.spray.com/ru-ru/отрасли/другие-отрасли/oem-производители-и-инженерные-фирмы',
          'ja-jp': 'https://www.spray.co.jp/services/oem_services.aspx',
          'ru-ua': 'https://www.spray.com.ua/services/oem_services.aspx',
          'tr-tr':
            'https://www.spray.com/tr-tr/industries/other-industries/oems-and-engineering-firms',
          'fr-ch':
            'https://www.spray.com/fr-ch/industries/technologie-de-pulverisation-pour-autres-industries/solutions-de-pulverisation-pour-oem-et-societes-dingenierie',
          'de-at':
            'https://www.spray.com/de-at/industrien/other-industries/oems-and-engineering-firms',
          'de-de':
            'https://www.spray.com/de-de/industrien/other-industries/oems-and-engineering-firms',
          'el-gr':
            'https://www.spray.com/el-gr/industries/άλλες-βιομηχανίες/oem-,-a-,amp;-κατασκευαστικές-εταιρείες',
          'ru-kz':
            'https://www.spray.com/ru-kz/отрасли/другие-отрасли/oem-производители-и-инженерные-фирмы',
          'es-co':
            'https://www.spray.com/es-co/industrias/otras-industrias/fabricantes-de-equipo-original-oem-y-firmas-de-ingeniería',
          'bg-bg':
            'https://www.spray.com/bg-bg/индустрии/други-индустрии/производители-на-оригинално-оборудване-и-инженерингови-фирми',
          'en-za':
            'https://www.spray.com/en-za/industries/other-industries/oems-and-engineering-firms',
          'sl-si':
            'https://www.spray.com/sl-si/industrije/druge-panoge/proizvajalci-originalne-opreme-in-inženirska-podjetja',
          'cs-cz':
            'https://www.spray.com/cs-cz/industries/other-industries/oems-and-engineering-firms',
          'nl-nl':
            'https://www.spray.com/nl-nl/industries/other-industries/oems-and-engineering-firms',
          'en-ae':
            'https://www.spray.com/en-ae/industries/other-industries/oems-and-engineering-firms',
          'en-au':
            'https://www.spray.com/en-au/industries/other-industries/oems-and-engineering-firms',
          'en-ca':
            'https://www.spray.com/en-ca/industries/other-industries/oems-and-engineering-firms',
          'pl-pl':
            'https://www.spray.com/pl-pl/industries/other-industries/oems-and-engineering-firms',
          'ro-ro':
            'https://www.spray.com/ro-ro/industries/alte-industrii/oems-and-engineering-firms',
          'es-ar':
            'https://www.spray.com/es-ar/industrias/otras-industrias/fabricantes-de-equipo-original-oem-y-firmas-de-ingeniería',
          'es-cl':
            'https://www.spray.com/es-cl/industrias/otras-industrias/fabricantes-de-equipo-original-oem-y-firmas-de-ingeniería',
          'es-ec':
            'https://www.spray.com/es-ec/industrias/otras-industrias/fabricantes-de-equipo-original-oem-y-firmas-de-ingeniería',
          'es-mx':
            'https://www.spray.com/es-mx/industrias/otras-industrias/fabricantes-de-equipo-original-oem-y-firmas-de-ingeniería',
          'en-be':
            'https://www.spray.com/en-be/industries/other-industries/oems-and-engineering-firms',
          'en-my':
            'https://www.spray.com/en-my/industries/other-industries/oems-and-engineering-firms',
          'en-at':
            'https://www.spray.com/en-at/industries/other-industries/oems-and-engineering-firms',
          'hu-hu':
            'https://www.spray.com/hu-hu/iparágak/egyéb-iparágak/oem-gyártók-és-mérnöki-cégek',
          'es-pe':
            'https://www.spray.com/es-pe/industrias/otras-industrias/fabricantes-de-equipo-original-oem-y-firmas-de-ingeniería',
          'es-es':
            'https://www.spray.com/es-es/industrias/otras-industrias/oems-and-engineering-firms',
          'de-be':
            'https://www.spray.com/de-be/industrien/other-industries/oems-and-engineering-firms',
          'nl-be':
            'https://www.spray.com/nl-be/industries/other-industries/oems-and-engineering-firms',
          'en-nz':
            'https://www.spray.com/en-nz/industries/other-industries/oems-and-engineering-firms',
          'fi-fi':
            'https://www.spray.com/fi-fi/teollisuudenalat/muut-teollisuudenalat/oem--ja-suunnitteluyrityksille',
          'fr-ca':
            "https://www.spray.com/fr-ca/industries/autres-industries/oems-et-firmes-d'ingénierie",
          'fr-fr':
            'https://www.spray.com/fr-fr/industries/technologie-de-pulverisation-pour-autres-industries/solutions-de-pulverisation-pour-oem-et-societes-dingenierie',
          'en-id':
            'https://www.spray.com/en-id/industries/other-industries/oems-and-engineering-firms',
          'en-ch':
            'https://www.spray.com/en-ch/industries/other-industries/oems-and-engineering-firms',
          'en-cz':
            'https://www.spray.com/en-cz/industries/other-industries/oems-and-engineering-firms',
          'de-ch':
            'https://www.spray.com/de-ch/industrien/other-industries/oems-and-engineering-firms',
          'en-sg':
            'https://www.spray.com/en-sg/industries/other-industries/oems-and-engineering-firms',
          'et-ee':
            'https://www.spray.com/et-ee/tööstused/muud-tööstusharud/oem--ja-insenerifirmad',
          'sk-sk':
            'https://www.spray.com/sk-sk/odvetvia/ostatné-odvetvia/oem-a-inžinierske-firmy',
          'lt-lt':
            'https://www.spray.com/lt-lt/pramonės-šakos/kitos-pramonės-šakos/oįg-ir-inžinerijos-įmonės',
          'lv-lv':
            'https://www.spray.com/lv-lv/nozares/citas-nozares/oriģināliekārtu-ražotāji-un-projektēšanas-uzņēmumi',
          'en-ma':
            'https://www.spray.com/en-ma/industries/other-industries/oems-and-engineering-firms',
          'en-cd':
            'https://www.spray.com/en-cd/industries/other-industries/oems-and-engineering-firms',
          'en-sk':
            'https://www.spray.com/en-sk/industries/other-industries/oems-and-engineering-firms',
          'fr-sn':
            'https://www.spray.com/fr-sn/industries/technologie-de-pulverisation-pour-autres-industries/solutions-de-pulverisation-pour-oem-et-societes-dingenierie',
          'en-tn':
            'https://www.spray.com/en-tn/industries/other-industries/oems-and-engineering-firms',
          'en-zm':
            'https://www.spray.com/en-zm/industries/other-industries/oems-and-engineering-firms',
          'en-lt':
            'https://www.spray.com/en-lt/industries/other-industries/oems-and-engineering-firms',
          'fr-ci':
            'https://www.spray.com/fr-ci/industries/technologie-de-pulverisation-pour-autres-industries/solutions-de-pulverisation-pour-oem-et-societes-dingenierie',
          'en-bh':
            'https://www.spray.com/en-bh/industries/other-industries/oems-and-engineering-firms',
          'fr-cm':
            'https://www.spray.com/fr-cm/industries/technologie-de-pulverisation-pour-autres-industries/solutions-de-pulverisation-pour-oem-et-societes-dingenierie',
          'en-mg':
            'https://www.spray.com/en-mg/industries/other-industries/oems-and-engineering-firms',
          'en-sa':
            'https://www.spray.com/en-sa/industries/other-industries/oems-and-engineering-firms',
          'fr-dz':
            'https://www.spray.com/fr-dz/industries/technologie-de-pulverisation-pour-autres-industries/solutions-de-pulverisation-pour-oem-et-societes-dingenierie',
          'en-ci':
            'https://www.spray.com/en-ci/industries/other-industries/oems-and-engineering-firms',
          'en-ng':
            'https://www.spray.com/en-ng/industries/other-industries/oems-and-engineering-firms',
          'fr-ma':
            'https://www.spray.com/fr-ma/industries/technologie-de-pulverisation-pour-autres-industries/solutions-de-pulverisation-pour-oem-et-societes-dingenierie',
          'en-cm':
            'https://www.spray.com/en-cm/industries/other-industries/oems-and-engineering-firms',
          'fr-mg':
            'https://www.spray.com/fr-mg/industries/technologie-de-pulverisation-pour-autres-industries/solutions-de-pulverisation-pour-oem-et-societes-dingenierie',
          'en-iq':
            'https://www.spray.com/en-iq/industries/other-industries/oems-and-engineering-firms',
          'en-sn':
            'https://www.spray.com/en-sn/industries/other-industries/oems-and-engineering-firms',
          'fr-tn':
            'https://www.spray.com/fr-tn/industries/technologie-de-pulverisation-pour-autres-industries/solutions-de-pulverisation-pour-oem-et-societes-dingenierie',
          'en-dz':
            'https://www.spray.com/en-dz/industries/other-industries/oems-and-engineering-firms',
          'en-jo':
            'https://www.spray.com/en-jo/industries/other-industries/oems-and-engineering-firms',
          'en-eg':
            'https://www.spray.com/en-eg/industries/other-industries/oems-and-engineering-firms',
          'en-ke':
            'https://www.spray.com/en-ke/industries/other-industries/oems-and-engineering-firms',
          'en-om':
            'https://www.spray.com/en-om/industries/other-industries/oems-and-engineering-firms',
          'en-kw':
            'https://www.spray.com/en-kw/industries/other-industries/oems-and-engineering-firms',
          'fr-cd':
            'https://www.spray.com/fr-cd/industries/technologie-de-pulverisation-pour-autres-industries/solutions-de-pulverisation-pour-oem-et-societes-dingenierie',
          'en-lb':
            'https://www.spray.com/en-lb/industries/other-industries/oems-and-engineering-firms',
          'en-pk':
            'https://www.spray.com/en-pk/industries/other-industries/oems-and-engineering-firms',
          'en-lv':
            'https://www.spray.com/en-lv/industries/other-industries/oems-and-engineering-firms',
          'en-qa':
            'https://www.spray.com/en-qa/industries/other-industries/oems-and-engineering-firms',
          'it-ch':
            'https://www.spray.com/it-ch/industries/other-industries/oems-and-engineering-firms',
          'en-in':
            'https://www.spray.com/en-in/industries/other-industries/oems-and-engineering-firms',
          'fr-be':
            'https://www.spray.com/fr-be/industries/technologie-de-pulverisation-pour-autres-industries/solutions-de-pulverisation-pour-oem-et-societes-dingenierie',
          'nb-no':
            'https://www.spray.com/nb-no/industrier/andre-bransjer/oem-er-og-ingeniørfirmaer',
          'it-it':
            'https://www.spray.com/it-it/industries/other-industries/oems-and-engineering-firms',
          'sv-se':
            'https://www.spray.com/sv-se/branscher/andra-branscher/oem,-c-,er-och-ingenjörsföretag',
          'en-es':
            'https://www.spray.com/en-es/industries/other-industries/oems-and-engineering-firms',
          'en-hu':
            'https://www.spray.com/en-hu/industries/other-industries/oems-and-engineering-firms',
          'en-it':
            'https://www.spray.com/en-it/industries/other-industries/oems-and-engineering-firms',
          'en-nl':
            'https://www.spray.com/en-nl/industries/other-industries/oems-and-engineering-firms',
          'en-no':
            'https://www.spray.com/en-no/industries/other-industries/oems-and-engineering-firms',
          'en-pl':
            'https://www.spray.com/en-pl/industries/other-industries/oems-and-engineering-firms',
          'en-ro':
            'https://www.spray.com/en-ro/industries/other-industries/oems-and-engineering-firms',
          'en-se':
            'https://www.spray.com/en-se/industries/other-industries/oems-and-engineering-firms',
          'en-tr':
            'https://www.spray.com/en-tr/industries/other-industries/oems-and-engineering-firms',
          'en-de':
            'https://www.spray.com/en-de/industries/other-industries/oems-and-engineering-firms',
          'en-fi':
            'https://www.spray.com/en-fi/industries/other-industries/oems-and-engineering-firms',
          'en-fr':
            'https://www.spray.com/en-fr/industries/other-industries/oems-and-engineering-firms',
          'en-gb':
            'https://www.spray.com/en-gb/industries/other-industries/oems-and-engineering-firms',
          'en-gr':
            'https://www.spray.com/en-gr/industries/other-industries/oems-and-engineering-firms',
          'en-vn':
            'https://www.spray.com/en-vn/industries/other-industries/oems-and-engineering-firms',
          'en-hk':
            'https://www.spray.com/en-hk/industries/other-industries/oems-and-engineering-firms',
          'en-ph':
            'https://www.spray.com/en-ph/industries/other-industries/oems-and-engineering-firms',
          en: 'https://www.spray.com/industries/other-industries/oems-and-engineering-firms'
        }
      },
      {
        labelMessageId: messageIds.navigation.footer.services.items.techSupport,
        links: {
          'x-default': 'https://www.spray.com/services/tech-support',
          'ko-kr': 'https://www.spray.com/ko-kr/services/tech-support',
          'zh-cn': 'https://www.spray.com/zh-cn/服务/tech-support',
          'ru-ru': 'https://www.spray.com/ru-ru/услуги/техническая-поддержка',
          'ru-ua': 'https://www.spray.com.ua/services/tech_support.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/services/tech-support',
          'fr-ch': 'https://www.spray.com/fr-ch/services/tech-support',
          'de-at': 'https://www.spray.com/de-at/services/tech-support',
          'de-de': 'https://www.spray.com/de-de/services/tech-support',
          'el-gr': 'https://www.spray.com/el-gr/services/tech-support',
          'ru-kz': 'https://www.spray.com/ru-kz/услуги/техническая-поддержка',
          'es-co': 'https://www.spray.com/es-co/servicios/soporte-técnico',
          'bg-bg': 'https://www.spray.com/bg-bg/services/техническа-поддръжка',
          'en-za': 'https://www.spray.com/en-za/services/tech-support',
          'sl-si': 'https://www.spray.com/sl-si/services/tehnična-podpora',
          'cs-cz': 'https://www.spray.com/cs-cz/services/tech-support',
          'nl-nl': 'https://www.spray.com/nl-nl/services/tech-support',
          'en-ae': 'https://www.spray.com/en-ae/services/tech-support',
          'en-au': 'https://www.spray.com/en-au/services/tech-support',
          'en-ca': 'https://www.spray.com/en-ca/services/tech-support',
          'pl-pl': 'https://www.spray.com/pl-pl/services/tech-support',
          'ro-ro': 'https://www.spray.com/ro-ro/services/tech-support',
          'es-ar': 'https://www.spray.com/es-ar/servicios/soporte-técnico',
          'es-cl': 'https://www.spray.com/es-cl/servicios/soporte-técnico',
          'es-ec': 'https://www.spray.com/es-ec/servicios/soporte-técnico',
          'es-mx': 'https://www.spray.com/es-mx/servicios/soporte-técnico',
          'en-be': 'https://www.spray.com/en-be/services/tech-support',
          'en-my': 'https://www.spray.com/en-my/services/tech-support',
          'en-at': 'https://www.spray.com/en-at/services/tech-support',
          'hu-hu':
            'https://www.spray.com/hu-hu/szolgáltatások/technikai-támogatás',
          'es-pe': 'https://www.spray.com/es-pe/servicios/soporte-técnico',
          'es-es': 'https://www.spray.com/es-es/servicios/tech-support',
          'de-be': 'https://www.spray.com/de-be/services/tech-support',
          'nl-be': 'https://www.spray.com/nl-be/services/tech-support',
          'en-nz': 'https://www.spray.com/en-nz/services/tech-support',
          'fi-fi': 'https://www.spray.com/fi-fi/services/tech-support',
          'fr-ca': 'https://www.spray.com/fr-ca/services/support-technique',
          'fr-fr': 'https://www.spray.com/fr-fr/services/tech-support',
          'en-id': 'https://www.spray.com/en-id/services/tech-support',
          'en-ch': 'https://www.spray.com/en-ch/services/tech-support',
          'en-cz': 'https://www.spray.com/en-cz/services/tech-support',
          'de-ch': 'https://www.spray.com/de-ch/services/tech-support',
          'en-sg': 'https://www.spray.com/en-sg/services/tech-support',
          'et-ee': 'https://www.spray.com/et-ee/services/tehniline-tugi',
          'sk-sk': 'https://www.spray.com/sk-sk/services/technická-podpora',
          'lt-lt': 'https://www.spray.com/lt-lt/services/techninis-palaikymas',
          'lv-lv': 'https://www.spray.com/lv-lv/services/tehniskais-atbalsts',
          'en-ma': 'https://www.spray.com/en-ma/services/tech-support',
          'en-cd': 'https://www.spray.com/en-cd/services/tech-support',
          'en-sk': 'https://www.spray.com/en-sk/services/tech-support',
          'fr-sn': 'https://www.spray.com/fr-sn/services/tech-support',
          'en-tn': 'https://www.spray.com/en-tn/services/tech-support',
          'en-zm': 'https://www.spray.com/en-zm/services/tech-support',
          'en-lt': 'https://www.spray.com/en-lt/services/tech-support',
          'fr-ci': 'https://www.spray.com/fr-ci/services/tech-support',
          'en-bh': 'https://www.spray.com/en-bh/services/tech-support',
          'fr-cm': 'https://www.spray.com/fr-cm/services/tech-support',
          'en-mg': 'https://www.spray.com/en-mg/services/tech-support',
          'en-sa': 'https://www.spray.com/en-sa/services/tech-support',
          'fr-dz': 'https://www.spray.com/fr-dz/services/tech-support',
          'en-ci': 'https://www.spray.com/en-ci/services/tech-support',
          'en-ng': 'https://www.spray.com/en-ng/services/tech-support',
          'fr-ma': 'https://www.spray.com/fr-ma/services/tech-support',
          'en-cm': 'https://www.spray.com/en-cm/services/tech-support',
          'fr-mg': 'https://www.spray.com/fr-mg/services/tech-support',
          'en-iq': 'https://www.spray.com/en-iq/services/tech-support',
          'en-sn': 'https://www.spray.com/en-sn/services/tech-support',
          'fr-tn': 'https://www.spray.com/fr-tn/services/tech-support',
          'en-dz': 'https://www.spray.com/en-dz/services/tech-support',
          'en-jo': 'https://www.spray.com/en-jo/services/tech-support',
          'en-eg': 'https://www.spray.com/en-eg/services/tech-support',
          'en-ke': 'https://www.spray.com/en-ke/services/tech-support',
          'en-om': 'https://www.spray.com/en-om/services/tech-support',
          'en-kw': 'https://www.spray.com/en-kw/services/tech-support',
          'fr-cd': 'https://www.spray.com/fr-cd/services/tech-support',
          'en-lb': 'https://www.spray.com/en-lb/services/tech-support',
          'en-pk': 'https://www.spray.com/en-pk/services/tech-support',
          'en-lv': 'https://www.spray.com/en-lv/services/tech-support',
          'en-qa': 'https://www.spray.com/en-qa/services/tech-support',
          'it-ch': 'https://www.spray.com/it-ch/services/tech-support',
          'en-in': 'https://www.spray.com/en-in/services/tech-support',
          'fr-be': 'https://www.spray.com/fr-be/services/tech-support',
          'nb-no': 'https://www.spray.com/nb-no/services/teknisk-hjelp',
          'it-it': 'https://www.spray.com/it-it/services/tech-support',
          'sv-se': 'https://www.spray.com/sv-se/services/teknisk-support',
          'en-es': 'https://www.spray.com/en-es/services/tech-support',
          'en-hu': 'https://www.spray.com/en-hu/services/tech-support',
          'en-it': 'https://www.spray.com/en-it/services/tech-support',
          'en-nl': 'https://www.spray.com/en-nl/services/tech-support',
          'en-no': 'https://www.spray.com/en-no/services/tech-support',
          'en-pl': 'https://www.spray.com/en-pl/services/tech-support',
          'en-ro': 'https://www.spray.com/en-ro/services/tech-support',
          'en-se': 'https://www.spray.com/en-se/services/tech-support',
          'en-tr': 'https://www.spray.com/en-tr/services/tech-support',
          'en-de': 'https://www.spray.com/en-de/services/tech-support',
          'en-fi': 'https://www.spray.com/en-fi/services/tech-support',
          'en-fr': 'https://www.spray.com/en-fr/services/tech-support',
          'en-gb': 'https://www.spray.com/en-gb/services/tech-support',
          'en-gr': 'https://www.spray.com/en-gr/services/tech-support',
          'en-vn': 'https://www.spray.com/en-vn/services/tech-support',
          'en-hk': 'https://www.spray.com/en-hk/services/tech-support',
          'en-ph': 'https://www.spray.com/en-ph/services/tech-support',
          en: 'https://www.spray.com/services/tech-support'
        }
      }
    ]
  },
  resources: {
    titleMessageId: messageIds.navigation.footer.resources.title,
    items: [
      {
        labelMessageId:
          messageIds.navigation.footer.resources.items.resourcesOverview,
        links: {
          'x-default': 'https://www.spray.com/resources/resources-overview',
          'ko-kr': 'https://www.spray.com/ko-kr/resources/resources-overview',
          'zh-cn': 'https://www.spray.com/zh-cn/资源/resources-overview',
          'es-co':
            'https://www.spray.com/es-co/recursos/resumen-de-nuestros-recursos',
          'es-pe':
            'https://www.spray.com/es-pe/recursos/resumen-de-nuestros-recursos',
          'es-cl':
            'https://www.spray.com/es-cl/recursos/resumen-de-nuestros-recursos',
          'es-ec':
            'https://www.spray.com/es-ec/recursos/resumen-de-nuestros-recursos',
          'ja-jp': 'https://www.spray.co.jp/sprayware/sprayware.aspx',
          'ru-ua': 'https://www.spray.com.ua/sprayware/sprayware.aspx',
          'pt-br': 'https://www.spray.com.br/sprayware/sprayware.aspx',
          'fr-ch': 'https://www.spray.com/fr-ch/resources/resources-overview',
          'de-at':
            'https://www.spray.com/de-at/arbeitshilfen/resources-overview',
          'de-de':
            'https://www.spray.com/de-de/arbeitshilfen/resources-overview',
          'el-gr': 'https://www.spray.com/el-gr/resources/resources-overview',
          'ru-kz': 'https://www.spray.com/ru-kz/ресурсы/обзор-ресурсов',
          'ru-ru': 'https://www.spray.com/ru-ru/ресурсы/обзор-ресурсов',
          'bg-bg': 'https://www.spray.com/bg-bg/resources/преглед-на-ресурсите',
          'en-za': 'https://www.spray.com/en-za/resources/resources-overview',
          'sl-si': 'https://www.spray.com/sl-si/resources/pregled-virov',
          'cs-cz': 'https://www.spray.com/cs-cz/resources/resources-overview',
          'nl-nl': 'https://www.spray.com/nl-nl/resources/resources-overview',
          'en-ae': 'https://www.spray.com/en-ae/resources/resources-overview',
          'en-au': 'https://www.spray.com/en-au/resources/resources-overview',
          'en-ca': 'https://www.spray.com/en-ca/resources/resources-overview',
          'pl-pl': 'https://www.spray.com/pl-pl/resources/resources-overview',
          'ro-ro': 'https://www.spray.com/ro-ro/resources/resources-overview',
          'es-ar':
            'https://www.spray.com/es-ar/recursos/resumen-de-nuestros-recursos',
          'es-mx':
            'https://www.spray.com/es-mx/recursos/resumen-de-nuestros-recursos',
          'tr-tr': 'https://www.spray.com/tr-tr/resources/resources-overview',
          'en-be': 'https://www.spray.com/en-be/resources/resources-overview',
          'en-my': 'https://www.spray.com/en-my/resources/resources-overview',
          'en-at': 'https://www.spray.com/en-at/resources/resources-overview',
          'hu-hu':
            'https://www.spray.com/hu-hu/erőforrások/források-áttekintése',
          'es-es': 'https://www.spray.com/es-es/descargas/recursos',
          'de-be':
            'https://www.spray.com/de-be/arbeitshilfen/resources-overview',
          'nl-be': 'https://www.spray.com/nl-be/resources/resources-overview',
          'en-nz': 'https://www.spray.com/en-nz/resources/resources-overview',
          'fi-fi': 'https://www.spray.com/fi-fi/resources/resources-overview',
          'fr-ca':
            'https://www.spray.com/fr-ca/ressources/aperçu-des-ressources',
          'fr-fr': 'https://www.spray.com/fr-fr/resources/resources-overview',
          'en-id': 'https://www.spray.com/en-id/resources/resources-overview',
          'en-ch': 'https://www.spray.com/en-ch/resources/resources-overview',
          'en-cz': 'https://www.spray.com/en-cz/resources/resources-overview',
          'de-ch':
            'https://www.spray.com/de-ch/arbeitshilfen/resources-overview',
          'en-sg': 'https://www.spray.com/en-sg/resources/resources-overview',
          'et-ee': 'https://www.spray.com/et-ee/resources/ressursside-ülevaade',
          'sk-sk': 'https://www.spray.com/sk-sk/resources/prehľad-zdrojov',
          'lt-lt': 'https://www.spray.com/lt-lt/resources/išteklių-apžvalga',
          'lv-lv':
            'https://www.spray.com/lv-lv/resources/pārskats-par-resursiem',
          'en-ma': 'https://www.spray.com/en-ma/resources/resources-overview',
          'en-cd': 'https://www.spray.com/en-cd/resources/resources-overview',
          'en-sk': 'https://www.spray.com/en-sk/resources/resources-overview',
          'fr-sn': 'https://www.spray.com/fr-sn/resources/resources-overview',
          'en-tn': 'https://www.spray.com/en-tn/resources/resources-overview',
          'en-zm': 'https://www.spray.com/en-zm/resources/resources-overview',
          'en-lt': 'https://www.spray.com/en-lt/resources/resources-overview',
          'fr-ci': 'https://www.spray.com/fr-ci/resources/resources-overview',
          'en-bh': 'https://www.spray.com/en-bh/resources/resources-overview',
          'fr-cm': 'https://www.spray.com/fr-cm/resources/resources-overview',
          'en-mg': 'https://www.spray.com/en-mg/resources/resources-overview',
          'en-sa': 'https://www.spray.com/en-sa/resources/resources-overview',
          'fr-dz': 'https://www.spray.com/fr-dz/resources/resources-overview',
          'en-ci': 'https://www.spray.com/en-ci/resources/resources-overview',
          'en-ng': 'https://www.spray.com/en-ng/resources/resources-overview',
          'fr-ma': 'https://www.spray.com/fr-ma/resources/resources-overview',
          'en-cm': 'https://www.spray.com/en-cm/resources/resources-overview',
          'fr-mg': 'https://www.spray.com/fr-mg/resources/resources-overview',
          'en-iq': 'https://www.spray.com/en-iq/resources/resources-overview',
          'en-sn': 'https://www.spray.com/en-sn/resources/resources-overview',
          'fr-tn': 'https://www.spray.com/fr-tn/resources/resources-overview',
          'en-dz': 'https://www.spray.com/en-dz/resources/resources-overview',
          'en-jo': 'https://www.spray.com/en-jo/resources/resources-overview',
          'en-eg': 'https://www.spray.com/en-eg/resources/resources-overview',
          'en-ke': 'https://www.spray.com/en-ke/resources/resources-overview',
          'en-om': 'https://www.spray.com/en-om/resources/resources-overview',
          'en-kw': 'https://www.spray.com/en-kw/resources/resources-overview',
          'fr-cd': 'https://www.spray.com/fr-cd/resources/resources-overview',
          'en-lb': 'https://www.spray.com/en-lb/resources/resources-overview',
          'en-pk': 'https://www.spray.com/en-pk/resources/resources-overview',
          'en-lv': 'https://www.spray.com/en-lv/resources/resources-overview',
          'en-qa': 'https://www.spray.com/en-qa/resources/resources-overview',
          'it-ch': 'https://www.spray.com/it-ch/resources/resources-overview',
          'en-in': 'https://www.spray.com/en-in/resources/resources-overview',
          'fr-be': 'https://www.spray.com/fr-be/resources/resources-overview',
          'nb-no': 'https://www.spray.com/nb-no/resources/ressursoversikt',
          'it-it': 'https://www.spray.com/it-it/resources/resources-overview',
          'sv-se':
            'https://www.spray.com/sv-se/resources/översikt-över-resurser',
          'en-es': 'https://www.spray.com/en-es/resources/resources-overview',
          'en-hu': 'https://www.spray.com/en-hu/resources/resources-overview',
          'en-it': 'https://www.spray.com/en-it/resources/resources-overview',
          'en-nl': 'https://www.spray.com/en-nl/resources/resources-overview',
          'en-no': 'https://www.spray.com/en-no/resources/resources-overview',
          'en-pl': 'https://www.spray.com/en-pl/resources/resources-overview',
          'en-ro': 'https://www.spray.com/en-ro/resources/resources-overview',
          'en-se': 'https://www.spray.com/en-se/resources/resources-overview',
          'en-tr': 'https://www.spray.com/en-tr/resources/resources-overview',
          'en-de': 'https://www.spray.com/en-de/resources/resources-overview',
          'en-fi': 'https://www.spray.com/en-fi/resources/resources-overview',
          'en-fr': 'https://www.spray.com/en-fr/resources/resources-overview',
          'en-gb': 'https://www.spray.com/en-gb/resources/resources-overview',
          'en-gr': 'https://www.spray.com/en-gr/resources/resources-overview',
          'en-vn': 'https://www.spray.com/en-vn/resources/resources-overview',
          'en-hk': 'https://www.spray.com/en-hk/resources/resources-overview',
          'en-ph': 'https://www.spray.com/en-ph/resources/resources-overview',
          en: 'https://www.spray.com/resources/resources-overview'
        }
      },
      {
        labelMessageId: messageIds.navigation.footer.resources.items.catalogs,
        links: {
          'fr-ch': 'https://www.spray.com/fr-ch/resources/catalogs',
          'de-at': 'https://www.spray.com/de-at/arbeitshilfen/catalogs',
          'de-de': 'https://www.spray.com/de-de/arbeitshilfen/catalogs',
          'el-gr': 'https://www.spray.com/el-gr/resources/catalogs',
          'ko-kr': 'https://www.spray.com/ko-kr/resources/catalogs',
          'ru-kz': 'https://www.spray.com/ru-kz/ресурсы/каталоги',
          'ru-ru': 'https://www.spray.com/ru-ru/ресурсы/каталоги',
          'es-co': 'https://www.spray.com/es-co/recursos/catálogos',
          'bg-bg': 'https://www.spray.com/bg-bg/resources/каталози',
          'en-za': 'https://www.spray.com/en-za/resources/catalogs',
          'sl-si': 'https://www.spray.com/sl-si/resources/katalogi',
          'cs-cz': 'https://www.spray.com/cs-cz/resources/catalogs',
          'nl-nl': 'https://www.spray.com/nl-nl/resources/catalogs',
          'en-ae': 'https://www.spray.com/en-ae/resources/catalogs',
          'en-au': 'https://www.spray.com/en-au/resources/catalogs',
          'en-ca': 'https://www.spray.com/en-ca/resources/catalogs',
          'pl-pl': 'https://www.spray.com/pl-pl/resources/catalogs',
          'ro-ro': 'https://www.spray.com/ro-ro/resources/catalogs',
          'es-ar': 'https://www.spray.com/es-ar/recursos/catálogos',
          'es-cl': 'https://www.spray.com/es-cl/recursos/catálogos',
          'es-ec': 'https://www.spray.com/es-ec/recursos/catálogos',
          'es-mx': 'https://www.spray.com/es-mx/recursos/catálogos',
          'tr-tr': 'https://www.spray.com/tr-tr/resources/catalogs',
          'en-be': 'https://www.spray.com/en-be/resources/catalogs',
          'en-my': 'https://www.spray.com/en-my/resources/catalogs',
          'en-at': 'https://www.spray.com/en-at/resources/catalogs',
          'hu-hu': 'https://www.spray.com/hu-hu/erőforrások/katalógusok',
          'es-pe': 'https://www.spray.com/es-pe/recursos/catálogos',
          'es-es': 'https://www.spray.com/es-es/descargas/catálogos',
          'zh-cn': 'https://www.spray.com/zh-cn/资源/catalogs',
          'de-be': 'https://www.spray.com/de-be/arbeitshilfen/catalogs',
          'nl-be': 'https://www.spray.com/nl-be/resources/catalogs',
          'en-nz': 'https://www.spray.com/en-nz/resources/catalogs',
          'fi-fi': 'https://www.spray.com/fi-fi/resources/catalogs',
          'fr-ca': 'https://www.spray.com/fr-ca/ressources/catalogues',
          'fr-fr': 'https://www.spray.com/fr-fr/resources/catalogs',
          'en-id': 'https://www.spray.com/en-id/resources/catalogs',
          'en-ch': 'https://www.spray.com/en-ch/resources/catalogs',
          'en-cz': 'https://www.spray.com/en-cz/resources/catalogs',
          'de-ch': 'https://www.spray.com/de-ch/arbeitshilfen/catalogs',
          'en-sg': 'https://www.spray.com/en-sg/resources/catalogs',
          'et-ee': 'https://www.spray.com/et-ee/resources/kataloogid',
          'sk-sk': 'https://www.spray.com/sk-sk/resources/katalógy',
          'lt-lt': 'https://www.spray.com/lt-lt/resources/katalogai',
          'lv-lv': 'https://www.spray.com/lv-lv/resources/katalogi',
          'en-ma': 'https://www.spray.com/en-ma/resources/catalogs',
          'en-cd': 'https://www.spray.com/en-cd/resources/catalogs',
          'en-sk': 'https://www.spray.com/en-sk/resources/catalogs',
          'fr-sn': 'https://www.spray.com/fr-sn/resources/catalogs',
          'en-tn': 'https://www.spray.com/en-tn/resources/catalogs',
          'en-zm': 'https://www.spray.com/en-zm/resources/catalogs',
          'en-lt': 'https://www.spray.com/en-lt/resources/catalogs',
          'fr-ci': 'https://www.spray.com/fr-ci/resources/catalogs',
          'en-bh': 'https://www.spray.com/en-bh/resources/catalogs',
          'fr-cm': 'https://www.spray.com/fr-cm/resources/catalogs',
          'en-mg': 'https://www.spray.com/en-mg/resources/catalogs',
          'en-sa': 'https://www.spray.com/en-sa/resources/catalogs',
          'fr-dz': 'https://www.spray.com/fr-dz/resources/catalogs',
          'en-ci': 'https://www.spray.com/en-ci/resources/catalogs',
          'en-ng': 'https://www.spray.com/en-ng/resources/catalogs',
          'fr-ma': 'https://www.spray.com/fr-ma/resources/catalogs',
          'en-cm': 'https://www.spray.com/en-cm/resources/catalogs',
          'fr-mg': 'https://www.spray.com/fr-mg/resources/catalogs',
          'en-iq': 'https://www.spray.com/en-iq/resources/catalogs',
          'en-sn': 'https://www.spray.com/en-sn/resources/catalogs',
          'fr-tn': 'https://www.spray.com/fr-tn/resources/catalogs',
          'en-dz': 'https://www.spray.com/en-dz/resources/catalogs',
          'en-jo': 'https://www.spray.com/en-jo/resources/catalogs',
          'en-eg': 'https://www.spray.com/en-eg/resources/catalogs',
          'en-ke': 'https://www.spray.com/en-ke/resources/catalogs',
          'en-om': 'https://www.spray.com/en-om/resources/catalogs',
          'en-kw': 'https://www.spray.com/en-kw/resources/catalogs',
          'fr-cd': 'https://www.spray.com/fr-cd/resources/catalogs',
          'en-lb': 'https://www.spray.com/en-lb/resources/catalogs',
          'en-pk': 'https://www.spray.com/en-pk/resources/catalogs',
          'en-lv': 'https://www.spray.com/en-lv/resources/catalogs',
          'en-qa': 'https://www.spray.com/en-qa/resources/catalogs',
          'it-ch': 'https://www.spray.com/it-ch/resources/catalogs',
          'en-in': 'https://www.spray.com/en-in/resources/catalogs',
          'fr-be': 'https://www.spray.com/fr-be/resources/catalogs',
          'nb-no': 'https://www.spray.com/nb-no/resources/kataloger',
          'it-it': 'https://www.spray.com/it-it/resources/catalogs',
          'sv-se': 'https://www.spray.com/sv-se/resources/kataloger',
          'en-es': 'https://www.spray.com/en-es/resources/catalogs',
          'en-hu': 'https://www.spray.com/en-hu/resources/catalogs',
          'en-it': 'https://www.spray.com/en-it/resources/catalogs',
          'en-nl': 'https://www.spray.com/en-nl/resources/catalogs',
          'en-no': 'https://www.spray.com/en-no/resources/catalogs',
          'en-pl': 'https://www.spray.com/en-pl/resources/catalogs',
          'en-ro': 'https://www.spray.com/en-ro/resources/catalogs',
          'en-se': 'https://www.spray.com/en-se/resources/catalogs',
          'en-tr': 'https://www.spray.com/en-tr/resources/catalogs',
          'en-de': 'https://www.spray.com/en-de/resources/catalogs',
          'en-fi': 'https://www.spray.com/en-fi/resources/catalogs',
          'en-fr': 'https://www.spray.com/en-fr/resources/catalogs',
          'en-gb': 'https://www.spray.com/en-gb/resources/catalogs',
          'en-gr': 'https://www.spray.com/en-gr/resources/catalogs',
          'en-vn': 'https://www.spray.com/en-vn/resources/catalogs',
          'en-hk': 'https://www.spray.com/en-hk/resources/catalogs',
          'en-ph': 'https://www.spray.com/en-ph/resources/catalogs',
          en: 'https://www.spray.com/resources/catalogs',
          'x-default': 'https://www.spray.com/resources/catalogs'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.resources.items.technicalLibrary,
        links: {
          'x-default': 'https://www.spray.com/resources/technical-library',
          'vi-vn': 'https://www.spray.com.vn/literature/literature_all.aspx',
          'ko-kr': 'https://www.spray.com/ko-kr/resources/technical-library',
          'zh-cn': 'https://www.spray.com/zh-cn/资源/technical-library',
          'ja-jp': 'https://www.spray.co.jp/literature/literature_all.aspx',
          'ru-ua': 'https://www.spray.com.ua/literature/literature_all.aspx',
          'fr-ch': 'https://www.spray.com/fr-ch/resources/technical-library',
          'de-at':
            'https://www.spray.com/de-at/arbeitshilfen/technical-library',
          'de-de':
            'https://www.spray.com/de-de/arbeitshilfen/technical-library',
          'el-gr': 'https://www.spray.com/el-gr/resources/technical-library',
          'ru-kz': 'https://www.spray.com/ru-kz/ресурсы/техническая-библиотека',
          'ru-ru': 'https://www.spray.com/ru-ru/ресурсы/техническая-библиотека',
          'es-co': 'https://www.spray.com/es-co/recursos/librería-técnica',
          'bg-bg': 'https://www.spray.com/bg-bg/resources/technical-library',
          'en-za': 'https://www.spray.com/en-za/resources/technical-library',
          'sl-si': 'https://www.spray.com/sl-si/resources/technical-library',
          'cs-cz': 'https://www.spray.com/cs-cz/resources/technical-library',
          'nl-nl': 'https://www.spray.com/nl-nl/resources/technical-library',
          'en-ae': 'https://www.spray.com/en-ae/resources/technical-library',
          'en-au': 'https://www.spray.com/en-au/resources/technical-library',
          'en-ca': 'https://www.spray.com/en-ca/resources/technical-library',
          'pl-pl': 'https://www.spray.com/pl-pl/resources/technical-library',
          'ro-ro': 'https://www.spray.com/ro-ro/resources/technical-library',
          'es-ar': 'https://www.spray.com/es-ar/recursos/librería-técnica',
          'es-cl': 'https://www.spray.com/es-cl/recursos/librería-técnica',
          'es-ec': 'https://www.spray.com/es-ec/recursos/librería-técnica',
          'es-mx': 'https://www.spray.com/es-mx/recursos/librería-técnica',
          'tr-tr': 'https://www.spray.com/tr-tr/resources/technical-library',
          'en-be': 'https://www.spray.com/en-be/resources/technical-library',
          'en-my': 'https://www.spray.com/en-my/resources/technical-library',
          'en-at': 'https://www.spray.com/en-at/resources/technical-library',
          'hu-hu': 'https://www.spray.com/hu-hu/erőforrások/műszaki-könyvtár',
          'es-pe': 'https://www.spray.com/es-pe/recursos/librería-técnica',
          'es-es': 'https://www.spray.com/es-es/descargas/technical-library',
          'de-be':
            'https://www.spray.com/de-be/arbeitshilfen/technical-library',
          'nl-be': 'https://www.spray.com/nl-be/resources/technical-library',
          'en-nz': 'https://www.spray.com/en-nz/resources/technical-library',
          'fi-fi': 'https://www.spray.com/fi-fi/resources/technical-library',
          'fr-ca':
            'https://www.spray.com/fr-ca/ressources/bibliothèque-technique',
          'fr-fr': 'https://www.spray.com/fr-fr/resources/technical-library',
          'en-id': 'https://www.spray.com/en-id/resources/technical-library',
          'en-ch': 'https://www.spray.com/en-ch/resources/technical-library',
          'en-cz': 'https://www.spray.com/en-cz/resources/technical-library',
          'de-ch':
            'https://www.spray.com/de-ch/arbeitshilfen/technical-library',
          'en-sg': 'https://www.spray.com/en-sg/resources/technical-library',
          'et-ee': 'https://www.spray.com/et-ee/resources/technical-library',
          'sk-sk': 'https://www.spray.com/sk-sk/resources/technical-library',
          'lt-lt': 'https://www.spray.com/lt-lt/resources/technical-library',
          'lv-lv': 'https://www.spray.com/lv-lv/resources/technical-library',
          'en-ma': 'https://www.spray.com/en-ma/resources/technical-library',
          'en-cd': 'https://www.spray.com/en-cd/resources/technical-library',
          'en-sk': 'https://www.spray.com/en-sk/resources/technical-library',
          'fr-sn': 'https://www.spray.com/fr-sn/resources/technical-library',
          'en-tn': 'https://www.spray.com/en-tn/resources/technical-library',
          'en-zm': 'https://www.spray.com/en-zm/resources/technical-library',
          'en-lt': 'https://www.spray.com/en-lt/resources/technical-library',
          'fr-ci': 'https://www.spray.com/fr-ci/resources/technical-library',
          'en-bh': 'https://www.spray.com/en-bh/resources/technical-library',
          'fr-cm': 'https://www.spray.com/fr-cm/resources/technical-library',
          'en-mg': 'https://www.spray.com/en-mg/resources/technical-library',
          'en-sa': 'https://www.spray.com/en-sa/resources/technical-library',
          'fr-dz': 'https://www.spray.com/fr-dz/resources/technical-library',
          'en-ci': 'https://www.spray.com/en-ci/resources/technical-library',
          'en-ng': 'https://www.spray.com/en-ng/resources/technical-library',
          'fr-ma': 'https://www.spray.com/fr-ma/resources/technical-library',
          'en-cm': 'https://www.spray.com/en-cm/resources/technical-library',
          'fr-mg': 'https://www.spray.com/fr-mg/resources/technical-library',
          'en-iq': 'https://www.spray.com/en-iq/resources/technical-library',
          'en-sn': 'https://www.spray.com/en-sn/resources/technical-library',
          'fr-tn': 'https://www.spray.com/fr-tn/resources/technical-library',
          'en-dz': 'https://www.spray.com/en-dz/resources/technical-library',
          'en-jo': 'https://www.spray.com/en-jo/resources/technical-library',
          'en-eg': 'https://www.spray.com/en-eg/resources/technical-library',
          'en-ke': 'https://www.spray.com/en-ke/resources/technical-library',
          'en-om': 'https://www.spray.com/en-om/resources/technical-library',
          'en-kw': 'https://www.spray.com/en-kw/resources/technical-library',
          'fr-cd': 'https://www.spray.com/fr-cd/resources/technical-library',
          'en-lb': 'https://www.spray.com/en-lb/resources/technical-library',
          'en-pk': 'https://www.spray.com/en-pk/resources/technical-library',
          'en-lv': 'https://www.spray.com/en-lv/resources/technical-library',
          'en-qa': 'https://www.spray.com/en-qa/resources/technical-library',
          'it-ch': 'https://www.spray.com/it-ch/resources/technical-library',
          'en-in': 'https://www.spray.com/en-in/resources/technical-library',
          'fr-be': 'https://www.spray.com/fr-be/resources/technical-library',
          'nb-no': 'https://www.spray.com/nb-no/resources/technical-library',
          'it-it': 'https://www.spray.com/it-it/resources/technical-library',
          'sv-se': 'https://www.spray.com/sv-se/resources/technical-library',
          'en-es': 'https://www.spray.com/en-es/resources/technical-library',
          'en-hu': 'https://www.spray.com/en-hu/resources/technical-library',
          'en-it': 'https://www.spray.com/en-it/resources/technical-library',
          'en-nl': 'https://www.spray.com/en-nl/resources/technical-library',
          'en-no': 'https://www.spray.com/en-no/resources/technical-library',
          'en-pl': 'https://www.spray.com/en-pl/resources/technical-library',
          'en-ro': 'https://www.spray.com/en-ro/resources/technical-library',
          'en-se': 'https://www.spray.com/en-se/resources/technical-library',
          'en-tr': 'https://www.spray.com/en-tr/resources/technical-library',
          'en-de': 'https://www.spray.com/en-de/resources/technical-library',
          'en-fi': 'https://www.spray.com/en-fi/resources/technical-library',
          'en-fr': 'https://www.spray.com/en-fr/resources/technical-library',
          'en-gb': 'https://www.spray.com/en-gb/resources/technical-library',
          'en-gr': 'https://www.spray.com/en-gr/resources/technical-library',
          'en-vn': 'https://www.spray.com/en-vn/resources/technical-library',
          'en-hk': 'https://www.spray.com/en-hk/resources/technical-library',
          'en-ph': 'https://www.spray.com/en-ph/resources/technical-library',
          en: 'https://www.spray.com/resources/technical-library'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.resources.items
            .sprayWareCalculatorsAndTools,
        links: {
          'x-default':
            'https://www.spray.com/resources/sprayware-calculators-and-tools',
          'ko-kr':
            'https://www.spray.com/ko-kr/resources/sprayware-calculators-and-tools',
          'zh-cn':
            'https://www.spray.com/zh-cn/资源/sprayware-calculators-and-tools',
          'es-co':
            'https://www.spray.com/es-co/recursos/calculadoras-y-herramientas-sprayware',
          'es-pe':
            'https://www.spray.com/es-pe/recursos/calculadoras-y-herramientas-sprayware',
          'es-cl':
            'https://www.spray.com/es-cl/recursos/calculadoras-y-herramientas-sprayware',
          'es-ec':
            'https://www.spray.com/es-ec/recursos/calculadoras-y-herramientas-sprayware',
          'ja-jp': 'https://www.spray.co.jp/sprayware/sprayware.aspx',
          'ru-ua': 'https://www.spray.com.ua/sprayware/sprayware.aspx',
          'pt-br': 'https://www.spray.com.br/sprayware/sprayware.aspx',
          'fr-ch':
            'https://www.spray.com/fr-ch/resources/sprayware-calculators-and-tools',
          'de-at':
            'https://www.spray.com/de-at/arbeitshilfen/sprayware-calculators-and-tools',
          'de-de':
            'https://www.spray.com/de-de/arbeitshilfen/sprayware-calculators-and-tools',
          'el-gr':
            'https://www.spray.com/el-gr/resources/sprayware-calculators-and-tools',
          'ru-kz':
            'https://www.spray.com/ru-kz/ресурсы/калькуляторы-и-инструменты-sprayware',
          'ru-ru':
            'https://www.spray.com/ru-ru/ресурсы/калькуляторы-и-инструменты-sprayware',
          'bg-bg':
            'https://www.spray.com/bg-bg/resources/калкулатори-и-инструменти-на-sprayware',
          'en-za':
            'https://www.spray.com/en-za/resources/sprayware-calculators-and-tools',
          'sl-si':
            'https://www.spray.com/sl-si/resources/kalkulatorji-in-orodja-sprayware',
          'cs-cz':
            'https://www.spray.com/cs-cz/resources/sprayware-calculators-and-tools',
          'nl-nl':
            'https://www.spray.com/nl-nl/resources/sprayware-calculators-and-tools',
          'en-ae':
            'https://www.spray.com/en-ae/resources/sprayware-calculators-and-tools',
          'en-au':
            'https://www.spray.com/en-au/resources/sprayware-calculators-and-tools',
          'en-ca':
            'https://www.spray.com/en-ca/resources/sprayware-calculators-and-tools',
          'pl-pl':
            'https://www.spray.com/pl-pl/resources/sprayware-calculators-and-tools',
          'ro-ro':
            'https://www.spray.com/ro-ro/resources/sprayware-calculators-and-tools',
          'es-ar':
            'https://www.spray.com/es-ar/recursos/calculadoras-y-herramientas-sprayware',
          'es-mx':
            'https://www.spray.com/es-mx/recursos/calculadoras-y-herramientas-sprayware',
          'tr-tr':
            'https://www.spray.com/tr-tr/resources/sprayware-calculators-and-tools',
          'en-be':
            'https://www.spray.com/en-be/resources/sprayware-calculators-and-tools',
          'en-my':
            'https://www.spray.com/en-my/resources/sprayware-calculators-and-tools',
          'en-at':
            'https://www.spray.com/en-at/resources/sprayware-calculators-and-tools',
          'hu-hu':
            'https://www.spray.com/hu-hu/erőforrások/sprayware-számológépek-és-eszközök',
          'es-es':
            'https://www.spray.com/es-es/descargas/calculadoras-y-herramientas-de-sprayware',
          'de-be':
            'https://www.spray.com/de-be/arbeitshilfen/sprayware-calculators-and-tools',
          'nl-be':
            'https://www.spray.com/nl-be/resources/sprayware-calculators-and-tools',
          'en-nz':
            'https://www.spray.com/en-nz/resources/sprayware-calculators-and-tools',
          'fi-fi':
            'https://www.spray.com/fi-fi/resources/sprayware-calculators-and-tools',
          'fr-ca':
            'https://www.spray.com/fr-ca/ressources/calculateurs-et-outils-pour-les-jets-de-pulvérisation',
          'fr-fr':
            'https://www.spray.com/fr-fr/resources/sprayware-calculators-and-tools',
          'en-id':
            'https://www.spray.com/en-id/resources/sprayware-calculators-and-tools',
          'en-ch':
            'https://www.spray.com/en-ch/resources/sprayware-calculators-and-tools',
          'en-cz':
            'https://www.spray.com/en-cz/resources/sprayware-calculators-and-tools',
          'de-ch':
            'https://www.spray.com/de-ch/arbeitshilfen/sprayware-calculators-and-tools',
          'en-sg':
            'https://www.spray.com/en-sg/resources/sprayware-calculators-and-tools',
          'et-ee':
            'https://www.spray.com/et-ee/resources/sprayware-kalkulaatorid-ja-tööriistad',
          'sk-sk':
            'https://www.spray.com/sk-sk/resources/kalkulačky-a-nástroje-sprayware',
          'lt-lt':
            'https://www.spray.com/lt-lt/resources/sprayware-skaičiuoklės-ir-įrankiai',
          'lv-lv':
            'https://www.spray.com/lv-lv/resources/sprayware-kalkulatori-un-rīki',
          'en-ma':
            'https://www.spray.com/en-ma/resources/sprayware-calculators-and-tools',
          'en-cd':
            'https://www.spray.com/en-cd/resources/sprayware-calculators-and-tools',
          'en-sk':
            'https://www.spray.com/en-sk/resources/sprayware-calculators-and-tools',
          'fr-sn':
            'https://www.spray.com/fr-sn/resources/sprayware-calculators-and-tools',
          'en-tn':
            'https://www.spray.com/en-tn/resources/sprayware-calculators-and-tools',
          'en-zm':
            'https://www.spray.com/en-zm/resources/sprayware-calculators-and-tools',
          'en-lt':
            'https://www.spray.com/en-lt/resources/sprayware-calculators-and-tools',
          'fr-ci':
            'https://www.spray.com/fr-ci/resources/sprayware-calculators-and-tools',
          'en-bh':
            'https://www.spray.com/en-bh/resources/sprayware-calculators-and-tools',
          'fr-cm':
            'https://www.spray.com/fr-cm/resources/sprayware-calculators-and-tools',
          'en-mg':
            'https://www.spray.com/en-mg/resources/sprayware-calculators-and-tools',
          'en-sa':
            'https://www.spray.com/en-sa/resources/sprayware-calculators-and-tools',
          'fr-dz':
            'https://www.spray.com/fr-dz/resources/sprayware-calculators-and-tools',
          'en-ci':
            'https://www.spray.com/en-ci/resources/sprayware-calculators-and-tools',
          'en-ng':
            'https://www.spray.com/en-ng/resources/sprayware-calculators-and-tools',
          'fr-ma':
            'https://www.spray.com/fr-ma/resources/sprayware-calculators-and-tools',
          'en-cm':
            'https://www.spray.com/en-cm/resources/sprayware-calculators-and-tools',
          'fr-mg':
            'https://www.spray.com/fr-mg/resources/sprayware-calculators-and-tools',
          'en-iq':
            'https://www.spray.com/en-iq/resources/sprayware-calculators-and-tools',
          'en-sn':
            'https://www.spray.com/en-sn/resources/sprayware-calculators-and-tools',
          'fr-tn':
            'https://www.spray.com/fr-tn/resources/sprayware-calculators-and-tools',
          'en-dz':
            'https://www.spray.com/en-dz/resources/sprayware-calculators-and-tools',
          'en-jo':
            'https://www.spray.com/en-jo/resources/sprayware-calculators-and-tools',
          'en-eg':
            'https://www.spray.com/en-eg/resources/sprayware-calculators-and-tools',
          'en-ke':
            'https://www.spray.com/en-ke/resources/sprayware-calculators-and-tools',
          'en-om':
            'https://www.spray.com/en-om/resources/sprayware-calculators-and-tools',
          'en-kw':
            'https://www.spray.com/en-kw/resources/sprayware-calculators-and-tools',
          'fr-cd':
            'https://www.spray.com/fr-cd/resources/sprayware-calculators-and-tools',
          'en-lb':
            'https://www.spray.com/en-lb/resources/sprayware-calculators-and-tools',
          'en-pk':
            'https://www.spray.com/en-pk/resources/sprayware-calculators-and-tools',
          'en-lv':
            'https://www.spray.com/en-lv/resources/sprayware-calculators-and-tools',
          'en-qa':
            'https://www.spray.com/en-qa/resources/sprayware-calculators-and-tools',
          'it-ch':
            'https://www.spray.com/it-ch/resources/sprayware-calculators-and-tools',
          'en-in':
            'https://www.spray.com/en-in/resources/sprayware-calculators-and-tools',
          'fr-be':
            'https://www.spray.com/fr-be/resources/sprayware-calculators-and-tools',
          'nb-no':
            'https://www.spray.com/nb-no/resources/sprayware-kalkulatorer-og-verktøy',
          'it-it':
            'https://www.spray.com/it-it/resources/sprayware-calculators-and-tools',
          'sv-se':
            'https://www.spray.com/sv-se/resources/sprayware-kalkylatorer-och-verktyg',
          'en-es':
            'https://www.spray.com/en-es/resources/sprayware-calculators-and-tools',
          'en-hu':
            'https://www.spray.com/en-hu/resources/sprayware-calculators-and-tools',
          'en-it':
            'https://www.spray.com/en-it/resources/sprayware-calculators-and-tools',
          'en-nl':
            'https://www.spray.com/en-nl/resources/sprayware-calculators-and-tools',
          'en-no':
            'https://www.spray.com/en-no/resources/sprayware-calculators-and-tools',
          'en-pl':
            'https://www.spray.com/en-pl/resources/sprayware-calculators-and-tools',
          'en-ro':
            'https://www.spray.com/en-ro/resources/sprayware-calculators-and-tools',
          'en-se':
            'https://www.spray.com/en-se/resources/sprayware-calculators-and-tools',
          'en-tr':
            'https://www.spray.com/en-tr/resources/sprayware-calculators-and-tools',
          'en-de':
            'https://www.spray.com/en-de/resources/sprayware-calculators-and-tools',
          'en-fi':
            'https://www.spray.com/en-fi/resources/sprayware-calculators-and-tools',
          'en-fr':
            'https://www.spray.com/en-fr/resources/sprayware-calculators-and-tools',
          'en-gb':
            'https://www.spray.com/en-gb/resources/sprayware-calculators-and-tools',
          'en-gr':
            'https://www.spray.com/en-gr/resources/sprayware-calculators-and-tools',
          'en-vn':
            'https://www.spray.com/en-vn/resources/sprayware-calculators-and-tools',
          'en-hk':
            'https://www.spray.com/en-hk/resources/sprayware-calculators-and-tools',
          'en-ph':
            'https://www.spray.com/en-ph/resources/sprayware-calculators-and-tools',
          en: 'https://www.spray.com/resources/sprayware-calculators-and-tools'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.resources.items['3dCADModels'],
        links: {
          'x-default': 'https://www.spray.com/resources/cad-central',
          'fr-ch': 'https://www.spray.com/fr-ch/resources/cad-central',
          'de-at': 'https://www.spray.com/de-at/arbeitshilfen/cad-central',
          'de-de': 'https://www.spray.com/de-de/arbeitshilfen/cad-central',
          'el-gr': 'https://www.spray.com/el-gr/resources/cad-central',
          'ko-kr': 'https://www.spray.com/ko-kr/resources/cad-central',
          'ru-kz': 'https://www.spray.com/ru-kz/ресурсы/cad-central',
          'ru-ru': 'https://www.spray.com/ru-ru/ресурсы/cad-central',
          'es-co': 'https://www.spray.com/es-co/recursos/cad-central',
          'bg-bg': 'https://www.spray.com/bg-bg/resources/cad-central',
          'en-za': 'https://www.spray.com/en-za/resources/cad-central',
          'sl-si': 'https://www.spray.com/sl-si/resources/cad-central',
          'cs-cz': 'https://www.spray.com/cs-cz/resources/cad-central',
          'nl-nl': 'https://www.spray.com/nl-nl/resources/cad-central',
          'en-ae': 'https://www.spray.com/en-ae/resources/cad-central',
          'en-au': 'https://www.spray.com/en-au/resources/cad-central',
          'en-ca': 'https://www.spray.com/en-ca/resources/cad-central',
          'pl-pl': 'https://www.spray.com/pl-pl/resources/cad-central',
          'ro-ro': 'https://www.spray.com/ro-ro/resources/cad-central',
          'es-ar': 'https://www.spray.com/es-ar/recursos/cad-central',
          'es-cl': 'https://www.spray.com/es-cl/recursos/cad-central',
          'es-ec': 'https://www.spray.com/es-ec/recursos/cad-central',
          'es-mx': 'https://www.spray.com/es-mx/recursos/cad-central',
          'tr-tr': 'https://www.spray.com/tr-tr/resources/cad-central',
          'en-be': 'https://www.spray.com/en-be/resources/cad-central',
          'en-my': 'https://www.spray.com/en-my/resources/cad-central',
          'en-at': 'https://www.spray.com/en-at/resources/cad-central',
          'hu-hu': 'https://www.spray.com/hu-hu/erőforrások/cad-central',
          'es-pe': 'https://www.spray.com/es-pe/recursos/cad-central',
          'es-es': 'https://www.spray.com/es-es/descargas/cad-central',
          'zh-cn': 'https://www.spray.com/zh-cn/资源/cad-central',
          'de-be': 'https://www.spray.com/de-be/arbeitshilfen/cad-central',
          'nl-be': 'https://www.spray.com/nl-be/resources/cad-central',
          'en-nz': 'https://www.spray.com/en-nz/resources/cad-central',
          'fi-fi': 'https://www.spray.com/fi-fi/resources/cad-central',
          'fr-ca': 'https://www.spray.com/fr-ca/ressources/cad-central',
          'fr-fr': 'https://www.spray.com/fr-fr/resources/cad-central',
          'en-id': 'https://www.spray.com/en-id/resources/cad-central',
          'en-ch': 'https://www.spray.com/en-ch/resources/cad-central',
          'en-cz': 'https://www.spray.com/en-cz/resources/cad-central',
          'de-ch': 'https://www.spray.com/de-ch/arbeitshilfen/cad-central',
          'en-sg': 'https://www.spray.com/en-sg/resources/cad-central',
          'et-ee': 'https://www.spray.com/et-ee/resources/cad-central',
          'sk-sk': 'https://www.spray.com/sk-sk/resources/cad-central',
          'lt-lt': 'https://www.spray.com/lt-lt/resources/cad-central',
          'lv-lv': 'https://www.spray.com/lv-lv/resources/cad-central',
          'en-ma': 'https://www.spray.com/en-ma/resources/cad-central',
          'en-cd': 'https://www.spray.com/en-cd/resources/cad-central',
          'en-sk': 'https://www.spray.com/en-sk/resources/cad-central',
          'fr-sn': 'https://www.spray.com/fr-sn/resources/cad-central',
          'en-tn': 'https://www.spray.com/en-tn/resources/cad-central',
          'en-zm': 'https://www.spray.com/en-zm/resources/cad-central',
          'en-lt': 'https://www.spray.com/en-lt/resources/cad-central',
          'fr-ci': 'https://www.spray.com/fr-ci/resources/cad-central',
          'en-bh': 'https://www.spray.com/en-bh/resources/cad-central',
          'fr-cm': 'https://www.spray.com/fr-cm/resources/cad-central',
          'en-mg': 'https://www.spray.com/en-mg/resources/cad-central',
          'en-sa': 'https://www.spray.com/en-sa/resources/cad-central',
          'fr-dz': 'https://www.spray.com/fr-dz/resources/cad-central',
          'en-ci': 'https://www.spray.com/en-ci/resources/cad-central',
          'en-ng': 'https://www.spray.com/en-ng/resources/cad-central',
          'fr-ma': 'https://www.spray.com/fr-ma/resources/cad-central',
          'en-cm': 'https://www.spray.com/en-cm/resources/cad-central',
          'fr-mg': 'https://www.spray.com/fr-mg/resources/cad-central',
          'en-iq': 'https://www.spray.com/en-iq/resources/cad-central',
          'en-sn': 'https://www.spray.com/en-sn/resources/cad-central',
          'fr-tn': 'https://www.spray.com/fr-tn/resources/cad-central',
          'en-dz': 'https://www.spray.com/en-dz/resources/cad-central',
          'en-jo': 'https://www.spray.com/en-jo/resources/cad-central',
          'en-eg': 'https://www.spray.com/en-eg/resources/cad-central',
          'en-ke': 'https://www.spray.com/en-ke/resources/cad-central',
          'en-om': 'https://www.spray.com/en-om/resources/cad-central',
          'en-kw': 'https://www.spray.com/en-kw/resources/cad-central',
          'fr-cd': 'https://www.spray.com/fr-cd/resources/cad-central',
          'en-lb': 'https://www.spray.com/en-lb/resources/cad-central',
          'en-pk': 'https://www.spray.com/en-pk/resources/cad-central',
          'en-lv': 'https://www.spray.com/en-lv/resources/cad-central',
          'en-qa': 'https://www.spray.com/en-qa/resources/cad-central',
          'it-ch': 'https://www.spray.com/it-ch/resources/cad-central',
          'en-in': 'https://www.spray.com/en-in/resources/cad-central',
          'fr-be': 'https://www.spray.com/fr-be/resources/cad-central',
          'nb-no': 'https://www.spray.com/nb-no/resources/cad-sentral',
          'it-it': 'https://www.spray.com/it-it/resources/cad-central',
          'sv-se': 'https://www.spray.com/sv-se/resources/cad-central',
          'en-es': 'https://www.spray.com/en-es/resources/cad-central',
          'en-hu': 'https://www.spray.com/en-hu/resources/cad-central',
          'en-it': 'https://www.spray.com/en-it/resources/cad-central',
          'en-nl': 'https://www.spray.com/en-nl/resources/cad-central',
          'en-no': 'https://www.spray.com/en-no/resources/cad-central',
          'en-pl': 'https://www.spray.com/en-pl/resources/cad-central',
          'en-ro': 'https://www.spray.com/en-ro/resources/cad-central',
          'en-se': 'https://www.spray.com/en-se/resources/cad-central',
          'en-tr': 'https://www.spray.com/en-tr/resources/cad-central',
          'en-de': 'https://www.spray.com/en-de/resources/cad-central',
          'en-fi': 'https://www.spray.com/en-fi/resources/cad-central',
          'en-fr': 'https://www.spray.com/en-fr/resources/cad-central',
          'en-gb': 'https://www.spray.com/en-gb/resources/cad-central',
          'en-gr': 'https://www.spray.com/en-gr/resources/cad-central',
          'en-vn': 'https://www.spray.com/en-vn/resources/cad-central',
          'en-hk': 'https://www.spray.com/en-hk/resources/cad-central',
          'en-ph': 'https://www.spray.com/en-ph/resources/cad-central',
          en: 'https://www.spray.com/resources/cad-central'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.resources.items.sprayBasics,
        links: {
          'fr-ch': 'https://www.spray.com/fr-ch/resources/spraying-basics',
          'de-at': 'https://www.spray.com/de-at/arbeitshilfen/spraying-basics',
          'de-de': 'https://www.spray.com/de-de/arbeitshilfen/spraying-basics',
          'el-gr': 'https://www.spray.com/el-gr/resources/spraying-basics',
          'ko-kr': 'https://www.spray.com/ko-kr/resources/spraying-basics',
          'ru-kz': 'https://www.spray.com/ru-kz/ресурсы/основы-опрыскивания',
          'ru-ru': 'https://www.spray.com/ru-ru/ресурсы/основы-опрыскивания',
          'es-co':
            'https://www.spray.com/es-co/recursos/principios-básicos-de-pulverización',
          'bg-bg': 'https://www.spray.com/bg-bg/resources/основи-на-пръскането',
          'en-za': 'https://www.spray.com/en-za/resources/spraying-basics',
          'sl-si': 'https://www.spray.com/sl-si/resources/osnove-škropljenja',
          'cs-cz': 'https://www.spray.com/cs-cz/resources/spraying-basics',
          'nl-nl': 'https://www.spray.com/nl-nl/resources/spraying-basics',
          'en-ae': 'https://www.spray.com/en-ae/resources/spraying-basics',
          'en-au': 'https://www.spray.com/en-au/resources/spraying-basics',
          'en-ca': 'https://www.spray.com/en-ca/resources/spraying-basics',
          'pl-pl': 'https://www.spray.com/pl-pl/resources/spraying-basics',
          'ro-ro': 'https://www.spray.com/ro-ro/resources/spraying-basics',
          'es-ar':
            'https://www.spray.com/es-ar/recursos/principios-básicos-de-pulverización',
          'es-cl':
            'https://www.spray.com/es-cl/recursos/principios-básicos-de-pulverización',
          'es-ec':
            'https://www.spray.com/es-ec/recursos/principios-básicos-de-pulverización',
          'es-mx':
            'https://www.spray.com/es-mx/recursos/principios-básicos-de-aspersión',
          'tr-tr': 'https://www.spray.com/tr-tr/resources/spraying-basics',
          'en-be': 'https://www.spray.com/en-be/resources/spraying-basics',
          'en-my': 'https://www.spray.com/en-my/resources/spraying-basics',
          'en-at': 'https://www.spray.com/en-at/resources/spraying-basics',
          'hu-hu': 'https://www.spray.com/hu-hu/erőforrások/permetezés-alapjai',
          'es-pe':
            'https://www.spray.com/es-pe/recursos/principios-básicos-de-pulverización',
          'es-es':
            'https://www.spray.com/es-es/descargas/fundamentos-de-la-pulverización',
          'zh-cn': 'https://www.spray.com/zh-cn/资源/spraying-basics',
          'de-be': 'https://www.spray.com/de-be/arbeitshilfen/spraying-basics',
          'nl-be': 'https://www.spray.com/nl-be/resources/spraying-basics',
          'en-nz': 'https://www.spray.com/en-nz/resources/spraying-basics',
          'fi-fi': 'https://www.spray.com/fi-fi/resources/spraying-basics',
          'fr-ca':
            'https://www.spray.com/fr-ca/ressources/les-bases-de-la-pulvérisation',
          'fr-fr': 'https://www.spray.com/fr-fr/resources/spraying-basics',
          'en-id': 'https://www.spray.com/en-id/resources/spraying-basics',
          'en-ch': 'https://www.spray.com/en-ch/resources/spraying-basics',
          'en-cz': 'https://www.spray.com/en-cz/resources/spraying-basics',
          'de-ch': 'https://www.spray.com/de-ch/arbeitshilfen/spraying-basics',
          'en-sg': 'https://www.spray.com/en-sg/resources/spraying-basics',
          'et-ee': 'https://www.spray.com/et-ee/resources/pihustamise-põhitõed',
          'sk-sk':
            'https://www.spray.com/sk-sk/resources/základy-postrekovania',
          'lt-lt': 'https://www.spray.com/lt-lt/resources/purškimo-pagrindai',
          'lv-lv': 'https://www.spray.com/lv-lv/resources/smidzināšanas-pamati',
          'en-ma': 'https://www.spray.com/en-ma/resources/spraying-basics',
          'en-cd': 'https://www.spray.com/en-cd/resources/spraying-basics',
          'en-sk': 'https://www.spray.com/en-sk/resources/spraying-basics',
          'fr-sn': 'https://www.spray.com/fr-sn/resources/spraying-basics',
          'en-tn': 'https://www.spray.com/en-tn/resources/spraying-basics',
          'en-zm': 'https://www.spray.com/en-zm/resources/spraying-basics',
          'en-lt': 'https://www.spray.com/en-lt/resources/spraying-basics',
          'fr-ci': 'https://www.spray.com/fr-ci/resources/spraying-basics',
          'en-bh': 'https://www.spray.com/en-bh/resources/spraying-basics',
          'fr-cm': 'https://www.spray.com/fr-cm/resources/spraying-basics',
          'en-mg': 'https://www.spray.com/en-mg/resources/spraying-basics',
          'en-sa': 'https://www.spray.com/en-sa/resources/spraying-basics',
          'fr-dz': 'https://www.spray.com/fr-dz/resources/spraying-basics',
          'en-ci': 'https://www.spray.com/en-ci/resources/spraying-basics',
          'en-ng': 'https://www.spray.com/en-ng/resources/spraying-basics',
          'fr-ma': 'https://www.spray.com/fr-ma/resources/spraying-basics',
          'en-cm': 'https://www.spray.com/en-cm/resources/spraying-basics',
          'fr-mg': 'https://www.spray.com/fr-mg/resources/spraying-basics',
          'en-iq': 'https://www.spray.com/en-iq/resources/spraying-basics',
          'en-sn': 'https://www.spray.com/en-sn/resources/spraying-basics',
          'fr-tn': 'https://www.spray.com/fr-tn/resources/spraying-basics',
          'en-dz': 'https://www.spray.com/en-dz/resources/spraying-basics',
          'en-jo': 'https://www.spray.com/en-jo/resources/spraying-basics',
          'en-eg': 'https://www.spray.com/en-eg/resources/spraying-basics',
          'en-ke': 'https://www.spray.com/en-ke/resources/spraying-basics',
          'en-om': 'https://www.spray.com/en-om/resources/spraying-basics',
          'en-kw': 'https://www.spray.com/en-kw/resources/spraying-basics',
          'fr-cd': 'https://www.spray.com/fr-cd/resources/spraying-basics',
          'en-lb': 'https://www.spray.com/en-lb/resources/spraying-basics',
          'en-pk': 'https://www.spray.com/en-pk/resources/spraying-basics',
          'en-lv': 'https://www.spray.com/en-lv/resources/spraying-basics',
          'en-qa': 'https://www.spray.com/en-qa/resources/spraying-basics',
          'it-ch': 'https://www.spray.com/it-ch/resources/spraying-basics',
          'en-in': 'https://www.spray.com/en-in/resources/spraying-basics',
          'fr-be': 'https://www.spray.com/fr-be/resources/spraying-basics',
          'nb-no':
            'https://www.spray.com/nb-no/resources/grunnleggende-om-sprøyting',
          'it-it': 'https://www.spray.com/it-it/resources/spraying-basics',
          'sv-se':
            'https://www.spray.com/sv-se/resources/grunderna-för-sprutning',
          'en-es': 'https://www.spray.com/en-es/resources/spraying-basics',
          'en-hu': 'https://www.spray.com/en-hu/resources/spraying-basics',
          'en-it': 'https://www.spray.com/en-it/resources/spraying-basics',
          'en-nl': 'https://www.spray.com/en-nl/resources/spraying-basics',
          'en-no': 'https://www.spray.com/en-no/resources/spraying-basics',
          'en-pl': 'https://www.spray.com/en-pl/resources/spraying-basics',
          'en-ro': 'https://www.spray.com/en-ro/resources/spraying-basics',
          'en-se': 'https://www.spray.com/en-se/resources/spraying-basics',
          'en-tr': 'https://www.spray.com/en-tr/resources/spraying-basics',
          'en-de': 'https://www.spray.com/en-de/resources/spraying-basics',
          'en-fi': 'https://www.spray.com/en-fi/resources/spraying-basics',
          'en-fr': 'https://www.spray.com/en-fr/resources/spraying-basics',
          'en-gb': 'https://www.spray.com/en-gb/resources/spraying-basics',
          'en-gr': 'https://www.spray.com/en-gr/resources/spraying-basics',
          'en-vn': 'https://www.spray.com/en-vn/resources/spraying-basics',
          'en-hk': 'https://www.spray.com/en-hk/resources/spraying-basics',
          'en-ph': 'https://www.spray.com/en-ph/resources/spraying-basics',
          en: 'https://www.spray.com/resources/spraying-basics',
          'x-default': 'https://www.spray.com/resources/spraying-basics'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.resources.items.sprayPatterns,
        links: {
          'fr-ch':
            'https://www.spray.com/fr-ch/resources/spraying-basics/spray-patterns',
          'de-at':
            'https://www.spray.com/de-at/arbeitshilfen/spraying-basics/spray-patterns',
          'de-de':
            'https://www.spray.com/de-de/arbeitshilfen/spraying-basics/spray-patterns',
          'el-gr':
            'https://www.spray.com/el-gr/resources/spraying-basics/spray-patterns',
          'ko-kr':
            'https://www.spray.com/ko-kr/resources/spraying-basics/spray-patterns',
          'ru-kz':
            'https://www.spray.com/ru-kz/ресурсы/основы-опрыскивания/формы-распыления',
          'ru-ru':
            'https://www.spray.com/ru-ru/ресурсы/основы-опрыскивания/формы-распыления',
          'es-co':
            'https://www.spray.com/es-co/recursos/principios-básicos-de-pulverización/patrones-de-pulverización',
          'bg-bg':
            'https://www.spray.com/bg-bg/resources/основи-на-пръскането/модели-на-пръскане',
          'en-za':
            'https://www.spray.com/en-za/resources/spraying-basics/spray-patterns',
          'sl-si':
            'https://www.spray.com/sl-si/resources/osnove-škropljenja/vzorci-razprševanja',
          'cs-cz':
            'https://www.spray.com/cs-cz/resources/spraying-basics/spray-patterns',
          'nl-nl':
            'https://www.spray.com/nl-nl/resources/spraying-basics/spray-patterns',
          'en-ae':
            'https://www.spray.com/en-ae/resources/spraying-basics/spray-patterns',
          'en-au':
            'https://www.spray.com/en-au/resources/spraying-basics/spray-patterns',
          'en-ca':
            'https://www.spray.com/en-ca/resources/spraying-basics/spray-patterns',
          'pl-pl':
            'https://www.spray.com/pl-pl/resources/spraying-basics/spray-patterns',
          'ro-ro':
            'https://www.spray.com/ro-ro/resources/spraying-basics/spray-patterns',
          'es-ar':
            'https://www.spray.com/es-ar/recursos/principios-básicos-de-pulverización/patrones-de-pulverización',
          'es-cl':
            'https://www.spray.com/es-cl/recursos/principios-básicos-de-pulverización/patrones-de-pulverización',
          'es-ec':
            'https://www.spray.com/es-ec/recursos/principios-básicos-de-pulverización/patrones-de-pulverización',
          'es-mx':
            'https://www.spray.com/es-mx/recursos/principios-básicos-de-aspersión/patrones-de-aspersión',
          'tr-tr':
            'https://www.spray.com/tr-tr/resources/spraying-basics/spray-patterns',
          'en-be':
            'https://www.spray.com/en-be/resources/spraying-basics/spray-patterns',
          'en-my':
            'https://www.spray.com/en-my/resources/spraying-basics/spray-patterns',
          'en-at':
            'https://www.spray.com/en-at/resources/spraying-basics/spray-patterns',
          'hu-hu':
            'https://www.spray.com/hu-hu/erőforrások/permetezés-alapjai/spray-minták',
          'es-pe':
            'https://www.spray.com/es-pe/recursos/principios-básicos-de-pulverización/patrones-de-pulverización',
          'es-es':
            'https://www.spray.com/es-es/descargas/fundamentos-de-la-pulverización/spray-patterns',
          'zh-cn':
            'https://www.spray.com/zh-cn/资源/spraying-basics/spray-patterns',
          'de-be':
            'https://www.spray.com/de-be/arbeitshilfen/spraying-basics/spray-patterns',
          'nl-be':
            'https://www.spray.com/nl-be/resources/spraying-basics/spray-patterns',
          'en-nz':
            'https://www.spray.com/en-nz/resources/spraying-basics/spray-patterns',
          'fi-fi':
            'https://www.spray.com/fi-fi/resources/spraying-basics/spray-patterns',
          'fr-ca':
            'https://www.spray.com/fr-ca/ressources/les-bases-de-la-pulvérisation/modèles-de-pulvérisation',
          'fr-fr':
            'https://www.spray.com/fr-fr/resources/spraying-basics/spray-patterns',
          'en-id':
            'https://www.spray.com/en-id/resources/spraying-basics/spray-patterns',
          'en-ch':
            'https://www.spray.com/en-ch/resources/spraying-basics/spray-patterns',
          'en-cz':
            'https://www.spray.com/en-cz/resources/spraying-basics/spray-patterns',
          'de-ch':
            'https://www.spray.com/de-ch/arbeitshilfen/spraying-basics/spray-patterns',
          'en-sg':
            'https://www.spray.com/en-sg/resources/spraying-basics/spray-patterns',
          'et-ee':
            'https://www.spray.com/et-ee/resources/pihustamise-põhitõed/pihustusmustrid',
          'sk-sk':
            'https://www.spray.com/sk-sk/resources/základy-postrekovania/vzory-striekania',
          'lt-lt':
            'https://www.spray.com/lt-lt/resources/purškimo-pagrindai/purškimo-modeliai',
          'lv-lv':
            'https://www.spray.com/lv-lv/resources/smidzināšanas-pamati/izsmidzināšanas-modeļi',
          'en-ma':
            'https://www.spray.com/en-ma/resources/spraying-basics/spray-patterns',
          'en-cd':
            'https://www.spray.com/en-cd/resources/spraying-basics/spray-patterns',
          'en-sk':
            'https://www.spray.com/en-sk/resources/spraying-basics/spray-patterns',
          'fr-sn':
            'https://www.spray.com/fr-sn/resources/spraying-basics/spray-patterns',
          'en-tn':
            'https://www.spray.com/en-tn/resources/spraying-basics/spray-patterns',
          'en-zm':
            'https://www.spray.com/en-zm/resources/spraying-basics/spray-patterns',
          'en-lt':
            'https://www.spray.com/en-lt/resources/spraying-basics/spray-patterns',
          'fr-ci':
            'https://www.spray.com/fr-ci/resources/spraying-basics/spray-patterns',
          'en-bh':
            'https://www.spray.com/en-bh/resources/spraying-basics/spray-patterns',
          'fr-cm':
            'https://www.spray.com/fr-cm/resources/spraying-basics/spray-patterns',
          'en-mg':
            'https://www.spray.com/en-mg/resources/spraying-basics/spray-patterns',
          'en-sa':
            'https://www.spray.com/en-sa/resources/spraying-basics/spray-patterns',
          'fr-dz':
            'https://www.spray.com/fr-dz/resources/spraying-basics/spray-patterns',
          'en-ci':
            'https://www.spray.com/en-ci/resources/spraying-basics/spray-patterns',
          'en-ng':
            'https://www.spray.com/en-ng/resources/spraying-basics/spray-patterns',
          'fr-ma':
            'https://www.spray.com/fr-ma/resources/spraying-basics/spray-patterns',
          'en-cm':
            'https://www.spray.com/en-cm/resources/spraying-basics/spray-patterns',
          'fr-mg':
            'https://www.spray.com/fr-mg/resources/spraying-basics/spray-patterns',
          'en-iq':
            'https://www.spray.com/en-iq/resources/spraying-basics/spray-patterns',
          'en-sn':
            'https://www.spray.com/en-sn/resources/spraying-basics/spray-patterns',
          'fr-tn':
            'https://www.spray.com/fr-tn/resources/spraying-basics/spray-patterns',
          'en-dz':
            'https://www.spray.com/en-dz/resources/spraying-basics/spray-patterns',
          'en-jo':
            'https://www.spray.com/en-jo/resources/spraying-basics/spray-patterns',
          'en-eg':
            'https://www.spray.com/en-eg/resources/spraying-basics/spray-patterns',
          'en-ke':
            'https://www.spray.com/en-ke/resources/spraying-basics/spray-patterns',
          'en-om':
            'https://www.spray.com/en-om/resources/spraying-basics/spray-patterns',
          'en-kw':
            'https://www.spray.com/en-kw/resources/spraying-basics/spray-patterns',
          'fr-cd':
            'https://www.spray.com/fr-cd/resources/spraying-basics/spray-patterns',
          'en-lb':
            'https://www.spray.com/en-lb/resources/spraying-basics/spray-patterns',
          'en-pk':
            'https://www.spray.com/en-pk/resources/spraying-basics/spray-patterns',
          'en-lv':
            'https://www.spray.com/en-lv/resources/spraying-basics/spray-patterns',
          'en-qa':
            'https://www.spray.com/en-qa/resources/spraying-basics/spray-patterns',
          'it-ch':
            'https://www.spray.com/it-ch/resources/spraying-basics/spray-patterns',
          'en-in':
            'https://www.spray.com/en-in/resources/spraying-basics/spray-patterns',
          'fr-be':
            'https://www.spray.com/fr-be/resources/spraying-basics/spray-patterns',
          'nb-no':
            'https://www.spray.com/nb-no/resources/grunnleggende-om-sprøyting/spray-mønstre',
          'it-it':
            'https://www.spray.com/it-it/resources/spraying-basics/spray-patterns',
          'sv-se':
            'https://www.spray.com/sv-se/resources/grunderna-för-sprutning/sprutmönster',
          'en-es':
            'https://www.spray.com/en-es/resources/spraying-basics/spray-patterns',
          'en-hu':
            'https://www.spray.com/en-hu/resources/spraying-basics/spray-patterns',
          'en-it':
            'https://www.spray.com/en-it/resources/spraying-basics/spray-patterns',
          'en-nl':
            'https://www.spray.com/en-nl/resources/spraying-basics/spray-patterns',
          'en-no':
            'https://www.spray.com/en-no/resources/spraying-basics/spray-patterns',
          'en-pl':
            'https://www.spray.com/en-pl/resources/spraying-basics/spray-patterns',
          'en-ro':
            'https://www.spray.com/en-ro/resources/spraying-basics/spray-patterns',
          'en-se':
            'https://www.spray.com/en-se/resources/spraying-basics/spray-patterns',
          'en-tr':
            'https://www.spray.com/en-tr/resources/spraying-basics/spray-patterns',
          'en-de':
            'https://www.spray.com/en-de/resources/spraying-basics/spray-patterns',
          'en-fi':
            'https://www.spray.com/en-fi/resources/spraying-basics/spray-patterns',
          'en-fr':
            'https://www.spray.com/en-fr/resources/spraying-basics/spray-patterns',
          'en-gb':
            'https://www.spray.com/en-gb/resources/spraying-basics/spray-patterns',
          'en-gr':
            'https://www.spray.com/en-gr/resources/spraying-basics/spray-patterns',
          'en-vn':
            'https://www.spray.com/en-vn/resources/spraying-basics/spray-patterns',
          'en-hk':
            'https://www.spray.com/en-hk/resources/spraying-basics/spray-patterns',
          'en-ph':
            'https://www.spray.com/en-ph/resources/spraying-basics/spray-patterns',
          en: 'https://www.spray.com/resources/spraying-basics/spray-patterns',
          'x-default':
            'https://www.spray.com/resources/spraying-basics/spray-patterns'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.resources.items.sprayOptimization,
        links: {
          'x-default':
            'https://www.spray.com/resources/spraying-basics/spray-optimization',
          'ko-kr':
            'https://www.spray.com/ko-kr/resources/spraying-basics/spray-optimization',
          'zh-cn':
            'https://www.spray.com/zh-cn/资源/spraying-basics/spray-optimization',
          'ru-ru':
            'https://www.spray.com/ru-ru/ресурсы/основы-опрыскивания/оптимизация-распыления',
          'ja-jp': 'https://www.spray.co.jp/services/nozzle_maintenance.aspx',
          'ru-ua': 'https://www.spray.com.ua/services/nozzle_maintenance.aspx',
          'tr-tr':
            'https://www.spray.com/tr-tr/resources/spraying-basics/spray-optimization',
          'fr-ch':
            'https://www.spray.com/fr-ch/resources/spraying-basics/spray-optimization',
          'de-at':
            'https://www.spray.com/de-at/arbeitshilfen/spraying-basics/spray-optimization',
          'de-de':
            'https://www.spray.com/de-de/arbeitshilfen/spraying-basics/spray-optimization',
          'el-gr':
            'https://www.spray.com/el-gr/resources/spraying-basics/spray-optimization',
          'ru-kz':
            'https://www.spray.com/ru-kz/ресурсы/основы-опрыскивания/оптимизация-распыления',
          'es-co':
            'https://www.spray.com/es-co/recursos/principios-básicos-de-pulverización/optimización-de-la-pulverización',
          'bg-bg':
            'https://www.spray.com/bg-bg/resources/основи-на-пръскането/оптимизиране-на-пръскането',
          'en-za':
            'https://www.spray.com/en-za/resources/spraying-basics/spray-optimization',
          'sl-si':
            'https://www.spray.com/sl-si/resources/osnove-škropljenja/optimizacija-razprševanja',
          'cs-cz':
            'https://www.spray.com/cs-cz/resources/spraying-basics/spray-optimization',
          'nl-nl':
            'https://www.spray.com/nl-nl/resources/spraying-basics/spray-optimization',
          'en-ae':
            'https://www.spray.com/en-ae/resources/spraying-basics/spray-optimization',
          'en-au':
            'https://www.spray.com/en-au/resources/spraying-basics/spray-optimization',
          'en-ca':
            'https://www.spray.com/en-ca/resources/spraying-basics/spray-optimization',
          'pl-pl':
            'https://www.spray.com/pl-pl/resources/spraying-basics/spray-optimization',
          'ro-ro':
            'https://www.spray.com/ro-ro/resources/spraying-basics/spray-optimization',
          'es-ar':
            'https://www.spray.com/es-ar/recursos/principios-básicos-de-pulverización/optimización-de-la-pulverización',
          'es-cl':
            'https://www.spray.com/es-cl/recursos/principios-básicos-de-pulverización/optimización-de-la-pulverización',
          'es-ec':
            'https://www.spray.com/es-ec/recursos/principios-básicos-de-pulverización/optimización-de-la-pulverización',
          'es-mx':
            'https://www.spray.com/es-mx/recursos/principios-básicos-de-aspersión/optimización-de-la-aspersión',
          'en-be':
            'https://www.spray.com/en-be/resources/spraying-basics/spray-optimization',
          'en-my':
            'https://www.spray.com/en-my/resources/spraying-basics/spray-optimization',
          'en-at':
            'https://www.spray.com/en-at/resources/spraying-basics/spray-optimization',
          'hu-hu':
            'https://www.spray.com/hu-hu/erőforrások/permetezés-alapjai/spray-optimization',
          'es-pe':
            'https://www.spray.com/es-pe/recursos/principios-básicos-de-pulverización/optimización-de-la-pulverización',
          'es-es':
            'https://www.spray.com/es-es/descargas/fundamentos-de-la-pulverización/spray-optimization',
          'de-be':
            'https://www.spray.com/de-be/arbeitshilfen/spraying-basics/spray-optimization',
          'nl-be':
            'https://www.spray.com/nl-be/resources/spraying-basics/spray-optimization',
          'en-nz':
            'https://www.spray.com/en-nz/resources/spraying-basics/spray-optimization',
          'fi-fi':
            'https://www.spray.com/fi-fi/resources/spraying-basics/spray-optimization',
          'fr-ca':
            'https://www.spray.com/fr-ca/ressources/les-bases-de-la-pulvérisation/optimisation-de-la-pulvérisation',
          'fr-fr':
            'https://www.spray.com/fr-fr/resources/spraying-basics/spray-optimization',
          'en-id':
            'https://www.spray.com/en-id/resources/spraying-basics/spray-optimization',
          'en-ch':
            'https://www.spray.com/en-ch/resources/spraying-basics/spray-optimization',
          'en-cz':
            'https://www.spray.com/en-cz/resources/spraying-basics/spray-optimization',
          'de-ch':
            'https://www.spray.com/de-ch/arbeitshilfen/spraying-basics/spray-optimization',
          'en-sg':
            'https://www.spray.com/en-sg/resources/spraying-basics/spray-optimization',
          'et-ee':
            'https://www.spray.com/et-ee/resources/pihustamise-põhitõed/spray-optimization',
          'sk-sk':
            'https://www.spray.com/sk-sk/resources/základy-postrekovania/optimalizácia-postreku',
          'lt-lt':
            'https://www.spray.com/lt-lt/resources/purškimo-pagrindai/purškimo-optimizavimas',
          'lv-lv':
            'https://www.spray.com/lv-lv/resources/smidzināšanas-pamati/izsmidzināšanas-optimizācija',
          'en-ma':
            'https://www.spray.com/en-ma/resources/spraying-basics/spray-optimization',
          'en-cd':
            'https://www.spray.com/en-cd/resources/spraying-basics/spray-optimization',
          'en-sk':
            'https://www.spray.com/en-sk/resources/spraying-basics/spray-optimization',
          'fr-sn':
            'https://www.spray.com/fr-sn/resources/spraying-basics/spray-optimization',
          'en-tn':
            'https://www.spray.com/en-tn/resources/spraying-basics/spray-optimization',
          'en-zm':
            'https://www.spray.com/en-zm/resources/spraying-basics/spray-optimization',
          'en-lt':
            'https://www.spray.com/en-lt/resources/spraying-basics/spray-optimization',
          'fr-ci':
            'https://www.spray.com/fr-ci/resources/spraying-basics/spray-optimization',
          'en-bh':
            'https://www.spray.com/en-bh/resources/spraying-basics/spray-optimization',
          'fr-cm':
            'https://www.spray.com/fr-cm/resources/spraying-basics/spray-optimization',
          'en-mg':
            'https://www.spray.com/en-mg/resources/spraying-basics/spray-optimization',
          'en-sa':
            'https://www.spray.com/en-sa/resources/spraying-basics/spray-optimization',
          'fr-dz':
            'https://www.spray.com/fr-dz/resources/spraying-basics/spray-optimization',
          'en-ci':
            'https://www.spray.com/en-ci/resources/spraying-basics/spray-optimization',
          'en-ng':
            'https://www.spray.com/en-ng/resources/spraying-basics/spray-optimization',
          'fr-ma':
            'https://www.spray.com/fr-ma/resources/spraying-basics/spray-optimization',
          'en-cm':
            'https://www.spray.com/en-cm/resources/spraying-basics/spray-optimization',
          'fr-mg':
            'https://www.spray.com/fr-mg/resources/spraying-basics/spray-optimization',
          'en-iq':
            'https://www.spray.com/en-iq/resources/spraying-basics/spray-optimization',
          'en-sn':
            'https://www.spray.com/en-sn/resources/spraying-basics/spray-optimization',
          'fr-tn':
            'https://www.spray.com/fr-tn/resources/spraying-basics/spray-optimization',
          'en-dz':
            'https://www.spray.com/en-dz/resources/spraying-basics/spray-optimization',
          'en-jo':
            'https://www.spray.com/en-jo/resources/spraying-basics/spray-optimization',
          'en-eg':
            'https://www.spray.com/en-eg/resources/spraying-basics/spray-optimization',
          'en-ke':
            'https://www.spray.com/en-ke/resources/spraying-basics/spray-optimization',
          'en-om':
            'https://www.spray.com/en-om/resources/spraying-basics/spray-optimization',
          'en-kw':
            'https://www.spray.com/en-kw/resources/spraying-basics/spray-optimization',
          'fr-cd':
            'https://www.spray.com/fr-cd/resources/spraying-basics/spray-optimization',
          'en-lb':
            'https://www.spray.com/en-lb/resources/spraying-basics/spray-optimization',
          'en-pk':
            'https://www.spray.com/en-pk/resources/spraying-basics/spray-optimization',
          'en-lv':
            'https://www.spray.com/en-lv/resources/spraying-basics/spray-optimization',
          'en-qa':
            'https://www.spray.com/en-qa/resources/spraying-basics/spray-optimization',
          'it-ch':
            'https://www.spray.com/it-ch/resources/spraying-basics/spray-optimization',
          'en-in':
            'https://www.spray.com/en-in/resources/spraying-basics/spray-optimization',
          'fr-be':
            'https://www.spray.com/fr-be/resources/spraying-basics/spray-optimization',
          'nb-no':
            'https://www.spray.com/nb-no/resources/grunnleggende-om-sprøyting/sprayoptimalisering',
          'it-it':
            'https://www.spray.com/it-it/resources/spraying-basics/spray-optimization',
          'sv-se':
            'https://www.spray.com/sv-se/resources/grunderna-för-sprutning/optimering-av-spray',
          'en-es':
            'https://www.spray.com/en-es/resources/spraying-basics/spray-optimization',
          'en-hu':
            'https://www.spray.com/en-hu/resources/spraying-basics/spray-optimization',
          'en-it':
            'https://www.spray.com/en-it/resources/spraying-basics/spray-optimization',
          'en-nl':
            'https://www.spray.com/en-nl/resources/spraying-basics/spray-optimization',
          'en-no':
            'https://www.spray.com/en-no/resources/spraying-basics/spray-optimization',
          'en-pl':
            'https://www.spray.com/en-pl/resources/spraying-basics/spray-optimization',
          'en-ro':
            'https://www.spray.com/en-ro/resources/spraying-basics/spray-optimization',
          'en-se':
            'https://www.spray.com/en-se/resources/spraying-basics/spray-optimization',
          'en-tr':
            'https://www.spray.com/en-tr/resources/spraying-basics/spray-optimization',
          'en-de':
            'https://www.spray.com/en-de/resources/spraying-basics/spray-optimization',
          'en-fi':
            'https://www.spray.com/en-fi/resources/spraying-basics/spray-optimization',
          'en-fr':
            'https://www.spray.com/en-fr/resources/spraying-basics/spray-optimization',
          'en-gb':
            'https://www.spray.com/en-gb/resources/spraying-basics/spray-optimization',
          'en-gr':
            'https://www.spray.com/en-gr/resources/spraying-basics/spray-optimization',
          'en-vn':
            'https://www.spray.com/en-vn/resources/spraying-basics/spray-optimization',
          'en-hk':
            'https://www.spray.com/en-hk/resources/spraying-basics/spray-optimization',
          'en-ph':
            'https://www.spray.com/en-ph/resources/spraying-basics/spray-optimization',
          en: 'https://www.spray.com/resources/spraying-basics/spray-optimization'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.resources.items.productSupport,
        links: {
          'fr-ch': 'https://www.spray.com/fr-ch/product-support/resources',
          'de-at': 'https://www.spray.com/de-at/product-support/resources',
          'de-de': 'https://www.spray.com/de-de/product-support/resources',
          'el-gr': 'https://www.spray.com/el-gr/product-support/resources',
          'ko-kr': 'https://www.spray.com/ko-kr/product-support/resources',
          'ru-kz': 'https://www.spray.com/ru-kz/product-support/resources',
          'ru-ru': 'https://www.spray.com/ru-ru/product-support/resources',
          'es-co': 'https://www.spray.com/es-co/product-support/resources',
          'bg-bg': 'https://www.spray.com/bg-bg/product-support/resources',
          'en-za': 'https://www.spray.com/en-za/product-support/resources',
          'sl-si': 'https://www.spray.com/sl-si/product-support/resources',
          'cs-cz': 'https://www.spray.com/cs-cz/product-support/resources',
          'nl-nl': 'https://www.spray.com/nl-nl/product-support/resources',
          'en-ae': 'https://www.spray.com/en-ae/product-support/resources',
          'en-au': 'https://www.spray.com/en-au/product-support/resources',
          'en-ca': 'https://www.spray.com/en-ca/product-support/resources',
          'pl-pl': 'https://www.spray.com/pl-pl/product-support/resources',
          'ro-ro': 'https://www.spray.com/ro-ro/product-support/resources',
          'es-ar': 'https://www.spray.com/es-ar/product-support/resources',
          'es-cl': 'https://www.spray.com/es-cl/product-support/resources',
          'es-ec': 'https://www.spray.com/es-ec/product-support/resources',
          'tr-tr': 'https://www.spray.com/tr-tr/product-support/resources',
          'en-be': 'https://www.spray.com/en-be/product-support/resources',
          'en-my': 'https://www.spray.com/en-my/product-support/resources',
          'en-at': 'https://www.spray.com/en-at/product-support/resources',
          'hu-hu': 'https://www.spray.com/hu-hu/terméktámogatás/resources',
          'es-pe': 'https://www.spray.com/es-pe/product-support/resources',
          'es-es': 'https://www.spray.com/es-es/product-support/resources',
          'zh-cn': 'https://www.spray.com/zh-cn/product-support/resources',
          'de-be': 'https://www.spray.com/de-be/product-support/resources',
          'nl-be': 'https://www.spray.com/nl-be/product-support/resources',
          'en-nz': 'https://www.spray.com/en-nz/product-support/resources',
          'fi-fi': 'https://www.spray.com/fi-fi/product-support/resources',
          'fr-ca': 'https://www.spray.com/fr-ca/product-support/resources',
          'fr-fr': 'https://www.spray.com/fr-fr/product-support/resources',
          'en-id': 'https://www.spray.com/en-id/product-support/resources',
          'en-ch': 'https://www.spray.com/en-ch/product-support/resources',
          'en-cz': 'https://www.spray.com/en-cz/product-support/resources',
          'de-ch': 'https://www.spray.com/de-ch/product-support/resources',
          'en-sg': 'https://www.spray.com/en-sg/product-support/resources',
          'et-ee': 'https://www.spray.com/et-ee/product-support/resources',
          'sk-sk': 'https://www.spray.com/sk-sk/product-support/resources',
          'lt-lt': 'https://www.spray.com/lt-lt/product-support/resources',
          'lv-lv': 'https://www.spray.com/lv-lv/product-support/resources',
          'en-ma': 'https://www.spray.com/en-ma/product-support/resources',
          'en-cd': 'https://www.spray.com/en-cd/product-support/resources',
          'en-sk': 'https://www.spray.com/en-sk/product-support/resources',
          'fr-sn': 'https://www.spray.com/fr-sn/product-support/resources',
          'en-tn': 'https://www.spray.com/en-tn/product-support/resources',
          'en-zm': 'https://www.spray.com/en-zm/product-support/resources',
          'en-lt': 'https://www.spray.com/en-lt/product-support/resources',
          'fr-ci': 'https://www.spray.com/fr-ci/product-support/resources',
          'en-bh': 'https://www.spray.com/en-bh/product-support/resources',
          'fr-cm': 'https://www.spray.com/fr-cm/product-support/resources',
          'en-mg': 'https://www.spray.com/en-mg/product-support/resources',
          'en-sa': 'https://www.spray.com/en-sa/product-support/resources',
          'fr-dz': 'https://www.spray.com/fr-dz/product-support/resources',
          'en-ci': 'https://www.spray.com/en-ci/product-support/resources',
          'en-ng': 'https://www.spray.com/en-ng/product-support/resources',
          'fr-ma': 'https://www.spray.com/fr-ma/product-support/resources',
          'en-cm': 'https://www.spray.com/en-cm/product-support/resources',
          'fr-mg': 'https://www.spray.com/fr-mg/product-support/resources',
          'en-iq': 'https://www.spray.com/en-iq/product-support/resources',
          'en-sn': 'https://www.spray.com/en-sn/product-support/resources',
          'fr-tn': 'https://www.spray.com/fr-tn/product-support/resources',
          'en-dz': 'https://www.spray.com/en-dz/product-support/resources',
          'en-jo': 'https://www.spray.com/en-jo/product-support/resources',
          'en-eg': 'https://www.spray.com/en-eg/product-support/resources',
          'en-ke': 'https://www.spray.com/en-ke/product-support/resources',
          'en-om': 'https://www.spray.com/en-om/product-support/resources',
          'en-kw': 'https://www.spray.com/en-kw/product-support/resources',
          'fr-cd': 'https://www.spray.com/fr-cd/product-support/resources',
          'en-lb': 'https://www.spray.com/en-lb/product-support/resources',
          'en-pk': 'https://www.spray.com/en-pk/product-support/resources',
          'en-lv': 'https://www.spray.com/en-lv/product-support/resources',
          'en-qa': 'https://www.spray.com/en-qa/product-support/resources',
          'it-ch': 'https://www.spray.com/it-ch/product-support/resources',
          'en-in': 'https://www.spray.com/en-in/product-support/resources',
          'fr-be': 'https://www.spray.com/fr-be/product-support/resources',
          'nb-no': 'https://www.spray.com/nb-no/product-support/resources',
          'it-it': 'https://www.spray.com/it-it/product-support/resources',
          'sv-se': 'https://www.spray.com/sv-se/product-support/resources',
          'en-es': 'https://www.spray.com/en-es/product-support/resources',
          'en-hu': 'https://www.spray.com/en-hu/product-support/resources',
          'en-it': 'https://www.spray.com/en-it/product-support/resources',
          'en-nl': 'https://www.spray.com/en-nl/product-support/resources',
          'en-no': 'https://www.spray.com/en-no/product-support/resources',
          'en-pl': 'https://www.spray.com/en-pl/product-support/resources',
          'en-ro': 'https://www.spray.com/en-ro/product-support/resources',
          'en-se': 'https://www.spray.com/en-se/product-support/resources',
          'en-tr': 'https://www.spray.com/en-tr/product-support/resources',
          'en-de': 'https://www.spray.com/en-de/product-support/resources',
          'en-fi': 'https://www.spray.com/en-fi/product-support/resources',
          'en-fr': 'https://www.spray.com/en-fr/product-support/resources',
          'en-gb': 'https://www.spray.com/en-gb/product-support/resources',
          'en-gr': 'https://www.spray.com/en-gr/product-support/resources',
          'en-vn': 'https://www.spray.com/en-vn/product-support/resources',
          'en-hk': 'https://www.spray.com/en-hk/product-support/resources',
          'en-ph': 'https://www.spray.com/en-ph/product-support/resources',
          en: 'https://www.spray.com/product-support/resources',
          'x-default': 'https://www.spray.com/product-support/resources'
        }
      }
    ]
  },
  company: {
    titleMessageId: messageIds.navigation.footer.company.title,
    items: [
      {
        labelMessageId: messageIds.navigation.footer.company.items.about,
        links: {
          'x-default': 'https://www.spray.com/company/about-us',
          'ko-kr': 'https://www.spray.com/ko-kr/company/about-us',
          'zh-cn': 'https://www.spray.com/zh-cn/公司/about-us',
          'ru-ru': 'https://www.spray.com/ru-ru/компания/о-нас',
          'ja-jp': 'https://www.spray.co.jp/contact/company_info.aspx',
          'ru-ua': 'https://www.spray.com.ua/contact/company_info.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/company/about-us',
          'fr-ch': 'https://www.spray.com/fr-ch/company/about-us',
          'de-at': 'https://www.spray.com/de-at/firma/ueber-uns',
          'de-de': 'https://www.spray.com/de-de/firma/ueber-uns',
          'el-gr': 'https://www.spray.com/el-gr/company/about-us',
          'ru-kz': 'https://www.spray.com/ru-kz/компания/о-нас',
          'es-co': 'https://www.spray.com/es-co/compañía/acerca-de-nosotros',
          'bg-bg': 'https://www.spray.com/bg-bg/company/за-нас',
          'en-za': 'https://www.spray.com/en-za/company/about-us',
          'sl-si': 'https://www.spray.com/sl-si/company/o-nas',
          'cs-cz': 'https://www.spray.com/cs-cz/company/about-us',
          'nl-nl': 'https://www.spray.com/nl-nl/company/about-us',
          'en-ae': 'https://www.spray.com/en-ae/company/about-us',
          'en-au': 'https://www.spray.com/en-au/company/about-us',
          'en-ca': 'https://www.spray.com/en-ca/company/about-us',
          'pl-pl': 'https://www.spray.com/pl-pl/company/about-us',
          'ro-ro': 'https://www.spray.com/ro-ro/company/about-us',
          'es-ar': 'https://www.spray.com/es-ar/compañía/acerca-de-nosotros',
          'es-cl': 'https://www.spray.com/es-cl/compañía/acerca-de-nosotros',
          'es-ec': 'https://www.spray.com/es-ec/compañía/acerca-de-nosotros',
          'es-mx': 'https://www.spray.com/es-mx/compañía/acerca-de-nosotros',
          'en-be': 'https://www.spray.com/en-be/company/about-us',
          'en-my': 'https://www.spray.com/en-my/company/about-us',
          'en-at': 'https://www.spray.com/en-at/company/about-us',
          'hu-hu': 'https://www.spray.com/hu-hu/vállalat/rólunk',
          'es-pe': 'https://www.spray.com/es-pe/compañía/acerca-de-nosotros',
          'es-es': 'https://www.spray.com/es-es/compania/about-us',
          'de-be': 'https://www.spray.com/de-be/firma/ueber-uns',
          'nl-be': 'https://www.spray.com/nl-be/company/about-us',
          'en-nz': 'https://www.spray.com/en-nz/company/about-us',
          'fi-fi': 'https://www.spray.com/fi-fi/company/about-us',
          'fr-ca': 'https://www.spray.com/fr-ca/société/à-propos-de-nous',
          'fr-fr': 'https://www.spray.com/fr-fr/company/about-us',
          'en-id': 'https://www.spray.com/en-id/company/about-us',
          'en-ch': 'https://www.spray.com/en-ch/company/about-us',
          'en-cz': 'https://www.spray.com/en-cz/company/about-us',
          'de-ch': 'https://www.spray.com/de-ch/firma/ueber-uns',
          'en-sg': 'https://www.spray.com/en-sg/company/about-us',
          'et-ee': 'https://www.spray.com/et-ee/company/meie-kohta',
          'sk-sk': 'https://www.spray.com/sk-sk/company/o-nás',
          'lt-lt': 'https://www.spray.com/lt-lt/company/apie-mus',
          'lv-lv': 'https://www.spray.com/lv-lv/company/par-mums',
          'en-ma': 'https://www.spray.com/en-ma/company/about-us',
          'en-cd': 'https://www.spray.com/en-cd/company/about-us',
          'en-sk': 'https://www.spray.com/en-sk/company/about-us',
          'fr-sn': 'https://www.spray.com/fr-sn/company/about-us',
          'en-tn': 'https://www.spray.com/en-tn/company/about-us',
          'en-zm': 'https://www.spray.com/en-zm/company/about-us',
          'en-lt': 'https://www.spray.com/en-lt/company/about-us',
          'fr-ci': 'https://www.spray.com/fr-ci/company/about-us',
          'en-bh': 'https://www.spray.com/en-bh/company/about-us',
          'fr-cm': 'https://www.spray.com/fr-cm/company/about-us',
          'en-mg': 'https://www.spray.com/en-mg/company/about-us',
          'en-sa': 'https://www.spray.com/en-sa/company/about-us',
          'fr-dz': 'https://www.spray.com/fr-dz/company/about-us',
          'en-ci': 'https://www.spray.com/en-ci/company/about-us',
          'en-ng': 'https://www.spray.com/en-ng/company/about-us',
          'fr-ma': 'https://www.spray.com/fr-ma/company/about-us',
          'en-cm': 'https://www.spray.com/en-cm/company/about-us',
          'fr-mg': 'https://www.spray.com/fr-mg/company/about-us',
          'en-iq': 'https://www.spray.com/en-iq/company/about-us',
          'en-sn': 'https://www.spray.com/en-sn/company/about-us',
          'fr-tn': 'https://www.spray.com/fr-tn/company/about-us',
          'en-dz': 'https://www.spray.com/en-dz/company/about-us',
          'en-jo': 'https://www.spray.com/en-jo/company/about-us',
          'en-eg': 'https://www.spray.com/en-eg/company/about-us',
          'en-ke': 'https://www.spray.com/en-ke/company/about-us',
          'en-om': 'https://www.spray.com/en-om/company/about-us',
          'en-kw': 'https://www.spray.com/en-kw/company/about-us',
          'fr-cd': 'https://www.spray.com/fr-cd/company/about-us',
          'en-lb': 'https://www.spray.com/en-lb/company/about-us',
          'en-pk': 'https://www.spray.com/en-pk/company/about-us',
          'en-lv': 'https://www.spray.com/en-lv/company/about-us',
          'en-qa': 'https://www.spray.com/en-qa/company/about-us',
          'it-ch': 'https://www.spray.com/it-ch/company/about-us',
          'en-in': 'https://www.spray.com/en-in/company/about-us',
          'fr-be': 'https://www.spray.com/fr-be/company/about-us',
          'nb-no': 'https://www.spray.com/nb-no/company/om-oss',
          'it-it': 'https://www.spray.com/it-it/company/about-us',
          'sv-se': 'https://www.spray.com/sv-se/company/om-oss',
          'en-es': 'https://www.spray.com/en-es/company/about-us',
          'en-hu': 'https://www.spray.com/en-hu/company/about-us',
          'en-it': 'https://www.spray.com/en-it/company/about-us',
          'en-nl': 'https://www.spray.com/en-nl/company/about-us',
          'en-no': 'https://www.spray.com/en-no/company/about-us',
          'en-pl': 'https://www.spray.com/en-pl/company/about-us',
          'en-ro': 'https://www.spray.com/en-ro/company/about-us',
          'en-se': 'https://www.spray.com/en-se/company/about-us',
          'en-tr': 'https://www.spray.com/en-tr/company/about-us',
          'en-de': 'https://www.spray.com/en-de/company/about-us',
          'en-fi': 'https://www.spray.com/en-fi/company/about-us',
          'en-fr': 'https://www.spray.com/en-fr/company/about-us',
          'en-gb': 'https://www.spray.com/en-gb/company/about-us',
          'en-gr': 'https://www.spray.com/en-gr/company/about-us',
          'en-vn': 'https://www.spray.com/en-vn/company/about-us',
          'en-hk': 'https://www.spray.com/en-hk/company/about-us',
          'en-ph': 'https://www.spray.com/en-ph/company/about-us',
          en: 'https://www.spray.com/company/about-us'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.company.items.sustainability,
        links: {
          'x-default': 'https://www.spray.com/company/sustainability',
          'ko-kr': 'https://www.spray.com/ko-kr/company/sustainability',
          'zh-cn': 'https://www.spray.com/zh-cn/公司/sustainability',
          'ru-ru': 'https://www.spray.com/ru-ru/компания/устойчивое-развитие',
          'ja-jp': 'https://www.spray.co.jp/sustainability',
          'ru-ua': 'https://www.spray.com.ua/sustainability',
          'tr-tr': 'https://www.spray.com/tr-tr/company/sustainability',
          'fr-ch': 'https://www.spray.com/fr-ch/company/sustainability',
          'de-at': 'https://www.spray.com/de-at/firma/sustainability',
          'de-de': 'https://www.spray.com/de-de/firma/sustainability',
          'el-gr': 'https://www.spray.com/el-gr/company/sustainability',
          'ru-kz': 'https://www.spray.com/ru-kz/компания/устойчивое-развитие',
          'es-co': 'https://www.spray.com/es-co/compañía/sustentabilidad',
          'bg-bg': 'https://www.spray.com/bg-bg/company/устойчивост',
          'en-za': 'https://www.spray.com/en-za/company/sustainability',
          'sl-si': 'https://www.spray.com/sl-si/company/trajnostni-razvoj',
          'cs-cz': 'https://www.spray.com/cs-cz/company/sustainability',
          'nl-nl': 'https://www.spray.com/nl-nl/company/sustainability',
          'en-ae': 'https://www.spray.com/en-ae/company/sustainability',
          'en-au': 'https://www.spray.com/en-au/company/sustainability',
          'en-ca': 'https://www.spray.com/en-ca/company/sustainability',
          'pl-pl': 'https://www.spray.com/pl-pl/company/sustainability',
          'ro-ro': 'https://www.spray.com/ro-ro/company/sustainability',
          'es-ar': 'https://www.spray.com/es-ar/compañía/sustentabilidad',
          'es-cl': 'https://www.spray.com/es-cl/compañía/sustentabilidad',
          'es-ec': 'https://www.spray.com/es-ec/compañía/sustentabilidad',
          'es-mx': 'https://www.spray.com/es-mx/compañía/sustentabilidad',
          'en-be': 'https://www.spray.com/en-be/company/sustainability',
          'en-my': 'https://www.spray.com/en-my/company/sustainability',
          'en-at': 'https://www.spray.com/en-at/company/sustainability',
          'hu-hu': 'https://www.spray.com/hu-hu/vállalat/fenntarthatóság',
          'es-pe': 'https://www.spray.com/es-pe/compañía/sustentabilidad',
          'es-es': 'https://www.spray.com/es-es/compania/sustainability',
          'de-be': 'https://www.spray.com/de-be/firma/sustainability',
          'nl-be': 'https://www.spray.com/nl-be/company/sustainability',
          'en-nz': 'https://www.spray.com/en-nz/company/sustainability',
          'fi-fi': 'https://www.spray.com/fi-fi/company/sustainability',
          'fr-ca': 'https://www.spray.com/fr-ca/société/durabilité',
          'fr-fr': 'https://www.spray.com/fr-fr/company/sustainability',
          'en-id': 'https://www.spray.com/en-id/company/sustainability',
          'en-ch': 'https://www.spray.com/en-ch/company/sustainability',
          'en-cz': 'https://www.spray.com/en-cz/company/sustainability',
          'de-ch': 'https://www.spray.com/de-ch/firma/sustainability',
          'en-sg': 'https://www.spray.com/en-sg/company/sustainability',
          'et-ee': 'https://www.spray.com/et-ee/company/jätkusuutlikkus',
          'sk-sk': 'https://www.spray.com/sk-sk/company/udržateľnosť',
          'lt-lt': 'https://www.spray.com/lt-lt/company/tvarumas',
          'lv-lv': 'https://www.spray.com/lv-lv/company/ilgtspēja',
          'en-ma': 'https://www.spray.com/en-ma/company/sustainability',
          'en-cd': 'https://www.spray.com/en-cd/company/sustainability',
          'en-sk': 'https://www.spray.com/en-sk/company/sustainability',
          'fr-sn': 'https://www.spray.com/fr-sn/company/sustainability',
          'en-tn': 'https://www.spray.com/en-tn/company/sustainability',
          'en-zm': 'https://www.spray.com/en-zm/company/sustainability',
          'en-lt': 'https://www.spray.com/en-lt/company/sustainability',
          'fr-ci': 'https://www.spray.com/fr-ci/company/sustainability',
          'en-bh': 'https://www.spray.com/en-bh/company/sustainability',
          'fr-cm': 'https://www.spray.com/fr-cm/company/sustainability',
          'en-mg': 'https://www.spray.com/en-mg/company/sustainability',
          'en-sa': 'https://www.spray.com/en-sa/company/sustainability',
          'fr-dz': 'https://www.spray.com/fr-dz/company/sustainability',
          'en-ci': 'https://www.spray.com/en-ci/company/sustainability',
          'en-ng': 'https://www.spray.com/en-ng/company/sustainability',
          'fr-ma': 'https://www.spray.com/fr-ma/company/sustainability',
          'en-cm': 'https://www.spray.com/en-cm/company/sustainability',
          'fr-mg': 'https://www.spray.com/fr-mg/company/sustainability',
          'en-iq': 'https://www.spray.com/en-iq/company/sustainability',
          'en-sn': 'https://www.spray.com/en-sn/company/sustainability',
          'fr-tn': 'https://www.spray.com/fr-tn/company/sustainability',
          'en-dz': 'https://www.spray.com/en-dz/company/sustainability',
          'en-jo': 'https://www.spray.com/en-jo/company/sustainability',
          'en-eg': 'https://www.spray.com/en-eg/company/sustainability',
          'en-ke': 'https://www.spray.com/en-ke/company/sustainability',
          'en-om': 'https://www.spray.com/en-om/company/sustainability',
          'en-kw': 'https://www.spray.com/en-kw/company/sustainability',
          'fr-cd': 'https://www.spray.com/fr-cd/company/sustainability',
          'en-lb': 'https://www.spray.com/en-lb/company/sustainability',
          'en-pk': 'https://www.spray.com/en-pk/company/sustainability',
          'en-lv': 'https://www.spray.com/en-lv/company/sustainability',
          'en-qa': 'https://www.spray.com/en-qa/company/sustainability',
          'it-ch': 'https://www.spray.com/it-ch/company/sustainability',
          'en-in': 'https://www.spray.com/en-in/company/sustainability',
          'fr-be': 'https://www.spray.com/fr-be/company/sustainability',
          'nb-no': 'https://www.spray.com/nb-no/company/bærekraft',
          'it-it': 'https://www.spray.com/it-it/company/sustainability',
          'sv-se': 'https://www.spray.com/sv-se/company/hållbarhet',
          'en-es': 'https://www.spray.com/en-es/company/sustainability',
          'en-hu': 'https://www.spray.com/en-hu/company/sustainability',
          'en-it': 'https://www.spray.com/en-it/company/sustainability',
          'en-nl': 'https://www.spray.com/en-nl/company/sustainability',
          'en-no': 'https://www.spray.com/en-no/company/sustainability',
          'en-pl': 'https://www.spray.com/en-pl/company/sustainability',
          'en-ro': 'https://www.spray.com/en-ro/company/sustainability',
          'en-se': 'https://www.spray.com/en-se/company/sustainability',
          'en-tr': 'https://www.spray.com/en-tr/company/sustainability',
          'en-de': 'https://www.spray.com/en-de/company/sustainability',
          'en-fi': 'https://www.spray.com/en-fi/company/sustainability',
          'en-fr': 'https://www.spray.com/en-fr/company/sustainability',
          'en-gb': 'https://www.spray.com/en-gb/company/sustainability',
          'en-gr': 'https://www.spray.com/en-gr/company/sustainability',
          'en-vn': 'https://www.spray.com/en-vn/company/sustainability',
          'en-hk': 'https://www.spray.com/en-hk/company/sustainability',
          'en-ph': 'https://www.spray.com/en-ph/company/sustainability',
          en: 'https://www.spray.com/company/sustainability'
        }
      },
      {
        labelMessageId: messageIds.navigation.footer.company.items.events,
        links: {
          'x-default': 'https://www.spray.com/company/events',
          'ko-kr': 'https://www.spray.com/ko-kr/company/events',
          'zh-cn': 'https://www.spray.com/zh-cn/公司/events',
          'ru-ru': 'https://www.spray.com/ru-ru/компания/события',
          'ja-jp': 'https://www.spray.co.jp/contact/news_events.aspx',
          'ru-ua': 'https://www.spray.com.ua/contact/news_events.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/company/events',
          'fr-ch': 'https://www.spray.com/fr-ch/company/events',
          'de-at': 'https://www.spray.com/de-at/firma/events',
          'de-de': 'https://www.spray.com/de-de/firma/events',
          'el-gr': 'https://www.spray.com/el-gr/company/events',
          'ru-kz': 'https://www.spray.com/ru-kz/компания/события',
          'es-co': 'https://www.spray.com/es-co/compañía/eventos',
          'bg-bg': 'https://www.spray.com/bg-bg/company/събития',
          'en-za': 'https://www.spray.com/en-za/company/events',
          'sl-si': 'https://www.spray.com/sl-si/company/dogodki',
          'cs-cz': 'https://www.spray.com/cs-cz/company/events',
          'nl-nl': 'https://www.spray.com/nl-nl/company/events',
          'en-ae': 'https://www.spray.com/en-ae/company/events',
          'en-au': 'https://www.spray.com/en-au/company/events',
          'en-ca': 'https://www.spray.com/en-ca/company/events',
          'pl-pl': 'https://www.spray.com/pl-pl/company/events',
          'ro-ro': 'https://www.spray.com/ro-ro/company/events',
          'es-ar': 'https://www.spray.com/es-ar/compañía/eventos',
          'es-cl': 'https://www.spray.com/es-cl/compañía/eventos',
          'es-ec': 'https://www.spray.com/es-ec/compañía/eventos',
          'es-mx': 'https://www.spray.com/es-mx/compañía/eventos',
          'en-be': 'https://www.spray.com/en-be/company/events',
          'en-my': 'https://www.spray.com/en-my/company/events',
          'en-at': 'https://www.spray.com/en-at/company/events',
          'hu-hu': 'https://www.spray.com/hu-hu/vállalat/események',
          'es-pe': 'https://www.spray.com/es-pe/compañía/eventos',
          'es-es': 'https://www.spray.com/es-es/compania/events',
          'de-be': 'https://www.spray.com/de-be/firma/events',
          'nl-be': 'https://www.spray.com/nl-be/company/events',
          'en-nz': 'https://www.spray.com/en-nz/company/events',
          'fi-fi': 'https://www.spray.com/fi-fi/company/events',
          'fr-ca': 'https://www.spray.com/fr-ca/société/événements',
          'fr-fr': 'https://www.spray.com/fr-fr/company/events',
          'en-id': 'https://www.spray.com/en-id/company/events',
          'en-ch': 'https://www.spray.com/en-ch/company/events',
          'en-cz': 'https://www.spray.com/en-cz/company/events',
          'de-ch': 'https://www.spray.com/de-ch/firma/events',
          'en-sg': 'https://www.spray.com/en-sg/company/events',
          'et-ee': 'https://www.spray.com/et-ee/company/sündmused',
          'sk-sk': 'https://www.spray.com/sk-sk/company/events',
          'lt-lt': 'https://www.spray.com/lt-lt/company/renginiai',
          'lv-lv': 'https://www.spray.com/lv-lv/company/events',
          'en-ma': 'https://www.spray.com/en-ma/company/events',
          'en-cd': 'https://www.spray.com/en-cd/company/events',
          'en-sk': 'https://www.spray.com/en-sk/company/events',
          'fr-sn': 'https://www.spray.com/fr-sn/company/events',
          'en-tn': 'https://www.spray.com/en-tn/company/events',
          'en-zm': 'https://www.spray.com/en-zm/company/events',
          'en-lt': 'https://www.spray.com/en-lt/company/events',
          'fr-ci': 'https://www.spray.com/fr-ci/company/events',
          'en-bh': 'https://www.spray.com/en-bh/company/events',
          'fr-cm': 'https://www.spray.com/fr-cm/company/events',
          'en-mg': 'https://www.spray.com/en-mg/company/events',
          'en-sa': 'https://www.spray.com/en-sa/company/events',
          'fr-dz': 'https://www.spray.com/fr-dz/company/events',
          'en-ci': 'https://www.spray.com/en-ci/company/events',
          'en-ng': 'https://www.spray.com/en-ng/company/events',
          'fr-ma': 'https://www.spray.com/fr-ma/company/events',
          'en-cm': 'https://www.spray.com/en-cm/company/events',
          'fr-mg': 'https://www.spray.com/fr-mg/company/events',
          'en-iq': 'https://www.spray.com/en-iq/company/events',
          'en-sn': 'https://www.spray.com/en-sn/company/events',
          'fr-tn': 'https://www.spray.com/fr-tn/company/events',
          'en-dz': 'https://www.spray.com/en-dz/company/events',
          'en-jo': 'https://www.spray.com/en-jo/company/events',
          'en-eg': 'https://www.spray.com/en-eg/company/events',
          'en-ke': 'https://www.spray.com/en-ke/company/events',
          'en-om': 'https://www.spray.com/en-om/company/events',
          'en-kw': 'https://www.spray.com/en-kw/company/events',
          'fr-cd': 'https://www.spray.com/fr-cd/company/events',
          'en-lb': 'https://www.spray.com/en-lb/company/events',
          'en-pk': 'https://www.spray.com/en-pk/company/events',
          'en-lv': 'https://www.spray.com/en-lv/company/events',
          'en-qa': 'https://www.spray.com/en-qa/company/events',
          'it-ch': 'https://www.spray.com/it-ch/company/events',
          'en-in': 'https://www.spray.com/en-in/company/events',
          'fr-be': 'https://www.spray.com/fr-be/company/events',
          'nb-no': 'https://www.spray.com/nb-no/company/events',
          'it-it': 'https://www.spray.com/it-it/company/events',
          'sv-se': 'https://www.spray.com/sv-se/company/events',
          'en-es': 'https://www.spray.com/en-es/company/events',
          'en-hu': 'https://www.spray.com/en-hu/company/events',
          'en-it': 'https://www.spray.com/en-it/company/events',
          'en-nl': 'https://www.spray.com/en-nl/company/events',
          'en-no': 'https://www.spray.com/en-no/company/events',
          'en-pl': 'https://www.spray.com/en-pl/company/events',
          'en-ro': 'https://www.spray.com/en-ro/company/events',
          'en-se': 'https://www.spray.com/en-se/company/events',
          'en-tr': 'https://www.spray.com/en-tr/company/events',
          'en-de': 'https://www.spray.com/en-de/company/events',
          'en-fi': 'https://www.spray.com/en-fi/company/events',
          'en-fr': 'https://www.spray.com/en-fr/company/events',
          'en-gb': 'https://www.spray.com/en-gb/company/events',
          'en-gr': 'https://www.spray.com/en-gr/company/events',
          'en-vn': 'https://www.spray.com/en-vn/company/events',
          'en-hk': 'https://www.spray.com/en-hk/company/events',
          'en-ph': 'https://www.spray.com/en-ph/company/events',
          en: 'https://www.spray.com/company/events'
        }
      },
      {
        labelMessageId: messageIds.navigation.footer.company.items.careers,
        links: {
          'x-default': 'https://www.spray.com/company/careers',
          'ko-kr': 'https://www.spray.com/ko-kr/company/careers',
          'zh-cn': 'https://www.spray.com/zh-cn/公司/careers',
          'ru-ru': 'https://www.spray.com/ru-ru/компания/карьера',
          'ru-ua': 'https://www.spray.com.ua/contact/careers.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/company/careers',
          'fr-ch': 'https://www.spray.com/fr-ch/company/careers',
          'de-at': 'https://www.spray.com/de-at/firma/karriere',
          'de-de': 'https://www.spray.com/de-de/firma/karriere',
          'el-gr': 'https://www.spray.com/el-gr/company/careers',
          'ru-kz': 'https://www.spray.com/ru-kz/компания/карьера',
          'es-co': 'https://www.spray.com/es-co/compañía/carreras',
          'bg-bg': 'https://www.spray.com/bg-bg/company/кариери',
          'en-za': 'https://www.spray.com/en-za/company/careers',
          'sl-si': 'https://www.spray.com/sl-si/company/kariera',
          'cs-cz': 'https://www.spray.com/cs-cz/company/careers',
          'nl-nl': 'https://www.spray.com/nl-nl/company/jobs',
          'en-ae': 'https://www.spray.com/en-ae/company/careers',
          'en-au': 'https://www.spray.com/en-au/company/careers',
          'en-ca': 'https://www.spray.com/en-ca/company/careers',
          'pl-pl': 'https://www.spray.com/pl-pl/company/careers',
          'ro-ro': 'https://www.spray.com/ro-ro/company/careers',
          'es-ar': 'https://www.spray.com/es-ar/compañía/carreras',
          'es-cl': 'https://www.spray.com/es-cl/compañía/carreras',
          'es-ec': 'https://www.spray.com/es-ec/compañía/carreras',
          'es-mx': 'https://www.spray.com/es-mx/compañía/carreras',
          'en-be': 'https://www.spray.com/en-be/company/careers',
          'en-my': 'https://www.spray.com/en-my/company/careers',
          'en-at': 'https://www.spray.com/en-at/company/careers',
          'hu-hu': 'https://www.spray.com/hu-hu/vállalat/karrier',
          'es-pe': 'https://www.spray.com/es-pe/compañía/carreras',
          'es-es': 'https://www.spray.com/es-es/compania/careers',
          'de-be': 'https://www.spray.com/de-be/firma/karriere',
          'nl-be': 'https://www.spray.com/nl-be/company/jobs',
          'en-nz': 'https://www.spray.com/en-nz/company/careers',
          'fi-fi': 'https://www.spray.com/fi-fi/company/careers',
          'fr-ca': 'https://www.spray.com/fr-ca/société/carrières',
          'fr-fr': 'https://www.spray.com/fr-fr/company/careers',
          'en-id': 'https://www.spray.com/en-id/company/careers',
          'en-ch': 'https://www.spray.com/en-ch/company/careers',
          'en-cz': 'https://www.spray.com/en-cz/company/careers',
          'de-ch': 'https://www.spray.com/de-ch/firma/karriere',
          'en-sg': 'https://www.spray.com/en-sg/company/careers',
          'et-ee': 'https://www.spray.com/et-ee/company/karjäärivõimalused',
          'sk-sk': 'https://www.spray.com/sk-sk/company/kariéra',
          'lt-lt': 'https://www.spray.com/lt-lt/company/karjera',
          'lv-lv': 'https://www.spray.com/lv-lv/company/karjera',
          'en-ma': 'https://www.spray.com/en-ma/company/careers',
          'en-cd': 'https://www.spray.com/en-cd/company/careers',
          'en-sk': 'https://www.spray.com/en-sk/company/careers',
          'fr-sn': 'https://www.spray.com/fr-sn/company/careers',
          'en-tn': 'https://www.spray.com/en-tn/company/careers',
          'en-zm': 'https://www.spray.com/en-zm/company/careers',
          'en-lt': 'https://www.spray.com/en-lt/company/careers',
          'fr-ci': 'https://www.spray.com/fr-ci/company/careers',
          'en-bh': 'https://www.spray.com/en-bh/company/careers',
          'fr-cm': 'https://www.spray.com/fr-cm/company/careers',
          'en-mg': 'https://www.spray.com/en-mg/company/careers',
          'en-sa': 'https://www.spray.com/en-sa/company/careers',
          'fr-dz': 'https://www.spray.com/fr-dz/company/careers',
          'en-ci': 'https://www.spray.com/en-ci/company/careers',
          'en-ng': 'https://www.spray.com/en-ng/company/careers',
          'fr-ma': 'https://www.spray.com/fr-ma/company/careers',
          'en-cm': 'https://www.spray.com/en-cm/company/careers',
          'fr-mg': 'https://www.spray.com/fr-mg/company/careers',
          'en-iq': 'https://www.spray.com/en-iq/company/careers',
          'en-sn': 'https://www.spray.com/en-sn/company/careers',
          'fr-tn': 'https://www.spray.com/fr-tn/company/careers',
          'en-dz': 'https://www.spray.com/en-dz/company/careers',
          'en-jo': 'https://www.spray.com/en-jo/company/careers',
          'en-eg': 'https://www.spray.com/en-eg/company/careers',
          'en-ke': 'https://www.spray.com/en-ke/company/careers',
          'en-om': 'https://www.spray.com/en-om/company/careers',
          'en-kw': 'https://www.spray.com/en-kw/company/careers',
          'fr-cd': 'https://www.spray.com/fr-cd/company/careers',
          'en-lb': 'https://www.spray.com/en-lb/company/careers',
          'en-pk': 'https://www.spray.com/en-pk/company/careers',
          'en-lv': 'https://www.spray.com/en-lv/company/careers',
          'en-qa': 'https://www.spray.com/en-qa/company/careers',
          'it-ch': 'https://www.spray.com/it-ch/company/careers',
          'en-in': 'https://www.spray.com/en-in/company/careers',
          'fr-be': 'https://www.spray.com/fr-be/company/careers',
          'nb-no': 'https://www.spray.com/nb-no/company/careers',
          'it-it': 'https://www.spray.com/it-it/company/careers',
          'sv-se': 'https://www.spray.com/sv-se/company/careers',
          'en-es': 'https://www.spray.com/en-es/company/careers',
          'en-hu': 'https://www.spray.com/en-hu/company/careers',
          'en-it': 'https://www.spray.com/en-it/company/careers',
          'en-nl': 'https://www.spray.com/en-nl/company/careers',
          'en-no': 'https://www.spray.com/en-no/company/careers',
          'en-pl': 'https://www.spray.com/en-pl/company/careers',
          'en-ro': 'https://www.spray.com/en-ro/company/careers',
          'en-se': 'https://www.spray.com/en-se/company/careers',
          'en-tr': 'https://www.spray.com/en-tr/company/careers',
          'en-de': 'https://www.spray.com/en-de/company/careers',
          'en-fi': 'https://www.spray.com/en-fi/company/careers',
          'en-fr': 'https://www.spray.com/en-fr/company/careers',
          'en-gb': 'https://www.spray.com/en-gb/company/careers',
          'en-gr': 'https://www.spray.com/en-gr/company/careers',
          'en-vn': 'https://www.spray.com/en-vn/company/careers',
          'en-hk': 'https://www.spray.com/en-hk/company/careers',
          'en-ph': 'https://www.spray.com/en-ph/company/careers',
          en: 'https://www.spray.com/company/careers'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.company.items.globalWebsites,
        links: {
          'x-default': 'https://www.spray.com/company/global-websites',
          'ko-kr': 'https://www.spray.com/ko-kr/company/global-websites',
          'zh-cn': 'https://www.spray.com/zh-cn/公司/global-websites',
          'ru-ru': 'https://www.spray.com/ru-ru/компания/глобальные-веб-сайты',
          'ru-ua': 'https://www.spray.com.ua/contact/global_websites.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/company/global-websites',
          'fr-ch': 'https://www.spray.com/fr-ch/company/global-websites',
          'de-at': 'https://www.spray.com/de-at/firma/global-websites',
          'de-de': 'https://www.spray.com/de-de/firma/global-websites',
          'el-gr': 'https://www.spray.com/el-gr/company/global-websites',
          'ru-kz': 'https://www.spray.com/ru-kz/компания/глобальные-веб-сайты',
          'es-co': 'https://www.spray.com/es-co/compañía/sitios-web-mundiales',
          'bg-bg': 'https://www.spray.com/bg-bg/company/global-websites',
          'en-za': 'https://www.spray.com/en-za/company/global-websites',
          'sl-si': 'https://www.spray.com/sl-si/company/global-websites',
          'cs-cz': 'https://www.spray.com/cs-cz/company/global-websites',
          'nl-nl': 'https://www.spray.com/nl-nl/company/global-websites',
          'en-ae': 'https://www.spray.com/en-ae/company/global-websites',
          'en-au': 'https://www.spray.com/en-au/company/global-websites',
          'en-ca': 'https://www.spray.com/en-ca/company/global-websites',
          'pl-pl': 'https://www.spray.com/pl-pl/company/global-websites',
          'ro-ro': 'https://www.spray.com/ro-ro/company/global-websites',
          'es-ar': 'https://www.spray.com/es-ar/compañía/sitios-web-mundiales',
          'es-cl': 'https://www.spray.com/es-cl/compañía/sitios-web-mundiales',
          'es-ec': 'https://www.spray.com/es-ec/compañía/sitios-web-mundiales',
          'es-mx': 'https://www.spray.com/es-mx/compañía/sitios-web-mundiales',
          'en-be': 'https://www.spray.com/en-be/company/global-websites',
          'en-my': 'https://www.spray.com/en-my/company/global-websites',
          'en-at': 'https://www.spray.com/en-at/company/global-websites',
          'hu-hu': 'https://www.spray.com/hu-hu/vállalat/globális-weboldalak',
          'es-pe': 'https://www.spray.com/es-pe/compañía/sitios-web-mundiales',
          'es-es': 'https://www.spray.com/es-es/compania/global-websites',
          'de-be': 'https://www.spray.com/de-be/firma/global-websites',
          'nl-be': 'https://www.spray.com/nl-be/company/global-websites',
          'en-nz': 'https://www.spray.com/en-nz/company/global-websites',
          'fi-fi': 'https://www.spray.com/fi-fi/company/global-websites',
          'fr-ca': 'https://www.spray.com/fr-ca/société/sites-web-mondiaux',
          'fr-fr': 'https://www.spray.com/fr-fr/company/global-websites',
          'en-id': 'https://www.spray.com/en-id/company/global-websites',
          'en-ch': 'https://www.spray.com/en-ch/company/global-websites',
          'en-cz': 'https://www.spray.com/en-cz/company/global-websites',
          'de-ch': 'https://www.spray.com/de-ch/firma/global-websites',
          'en-sg': 'https://www.spray.com/en-sg/company/global-websites',
          'et-ee': 'https://www.spray.com/et-ee/company/global-websites',
          'sk-sk': 'https://www.spray.com/sk-sk/company/global-websites',
          'lt-lt': 'https://www.spray.com/lt-lt/company/global-websites',
          'lv-lv': 'https://www.spray.com/lv-lv/company/global-websites',
          'en-ma': 'https://www.spray.com/en-ma/company/global-websites',
          'en-cd': 'https://www.spray.com/en-cd/company/global-websites',
          'en-sk': 'https://www.spray.com/en-sk/company/global-websites',
          'fr-sn': 'https://www.spray.com/fr-sn/company/global-websites',
          'en-tn': 'https://www.spray.com/en-tn/company/global-websites',
          'en-zm': 'https://www.spray.com/en-zm/company/global-websites',
          'en-lt': 'https://www.spray.com/en-lt/company/global-websites',
          'fr-ci': 'https://www.spray.com/fr-ci/company/global-websites',
          'en-bh': 'https://www.spray.com/en-bh/company/global-websites',
          'fr-cm': 'https://www.spray.com/fr-cm/company/global-websites',
          'en-mg': 'https://www.spray.com/en-mg/company/global-websites',
          'en-sa': 'https://www.spray.com/en-sa/company/global-websites',
          'fr-dz': 'https://www.spray.com/fr-dz/company/global-websites',
          'en-ci': 'https://www.spray.com/en-ci/company/global-websites',
          'en-ng': 'https://www.spray.com/en-ng/company/global-websites',
          'fr-ma': 'https://www.spray.com/fr-ma/company/global-websites',
          'en-cm': 'https://www.spray.com/en-cm/company/global-websites',
          'fr-mg': 'https://www.spray.com/fr-mg/company/global-websites',
          'en-iq': 'https://www.spray.com/en-iq/company/global-websites',
          'en-sn': 'https://www.spray.com/en-sn/company/global-websites',
          'fr-tn': 'https://www.spray.com/fr-tn/company/global-websites',
          'en-dz': 'https://www.spray.com/en-dz/company/global-websites',
          'en-jo': 'https://www.spray.com/en-jo/company/global-websites',
          'en-eg': 'https://www.spray.com/en-eg/company/global-websites',
          'en-ke': 'https://www.spray.com/en-ke/company/global-websites',
          'en-om': 'https://www.spray.com/en-om/company/global-websites',
          'en-kw': 'https://www.spray.com/en-kw/company/global-websites',
          'fr-cd': 'https://www.spray.com/fr-cd/company/global-websites',
          'en-lb': 'https://www.spray.com/en-lb/company/global-websites',
          'en-pk': 'https://www.spray.com/en-pk/company/global-websites',
          'en-lv': 'https://www.spray.com/en-lv/company/global-websites',
          'en-qa': 'https://www.spray.com/en-qa/company/global-websites',
          'it-ch': 'https://www.spray.com/it-ch/company/global-websites',
          'en-in': 'https://www.spray.com/en-in/company/global-websites',
          'fr-be': 'https://www.spray.com/fr-be/company/global-websites',
          'nb-no': 'https://www.spray.com/nb-no/company/global-websites',
          'it-it': 'https://www.spray.com/it-it/company/global-websites',
          'sv-se': 'https://www.spray.com/sv-se/company/global-websites',
          'en-es': 'https://www.spray.com/en-es/company/global-websites',
          'en-hu': 'https://www.spray.com/en-hu/company/global-websites',
          'en-it': 'https://www.spray.com/en-it/company/global-websites',
          'en-nl': 'https://www.spray.com/en-nl/company/global-websites',
          'en-no': 'https://www.spray.com/en-no/company/global-websites',
          'en-pl': 'https://www.spray.com/en-pl/company/global-websites',
          'en-ro': 'https://www.spray.com/en-ro/company/global-websites',
          'en-se': 'https://www.spray.com/en-se/company/global-websites',
          'en-tr': 'https://www.spray.com/en-tr/company/global-websites',
          'en-de': 'https://www.spray.com/en-de/company/global-websites',
          'en-fi': 'https://www.spray.com/en-fi/company/global-websites',
          'en-fr': 'https://www.spray.com/en-fr/company/global-websites',
          'en-gb': 'https://www.spray.com/en-gb/company/global-websites',
          'en-gr': 'https://www.spray.com/en-gr/company/global-websites',
          'en-vn': 'https://www.spray.com/en-vn/company/global-websites',
          'en-hk': 'https://www.spray.com/en-hk/company/global-websites',
          'en-ph': 'https://www.spray.com/en-ph/company/global-websites',
          en: 'https://www.spray.com/company/global-websites'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.company.items
            .regionalSprayTechnologyCenters,
        links: {
          'x-default':
            'https://www.spray.com/company/regional-spray-technology-centers',
          'ko-kr':
            'https://www.spray.com/ko-kr/company/regional-spray-technology-centers',
          'zh-cn':
            'https://www.spray.com/zh-cn/公司/regional-spray-technology-centers',
          'ru-ru':
            'https://www.spray.com/ru-ru/компания/региональные-центры-технологии-распыления',
          'ja-jp': 'https://www.spray.co.jp/services/stc.aspx',
          'ru-ua': 'https://www.spray.com.ua/services/stc.aspx',
          'tr-tr':
            'https://www.spray.com/tr-tr/company/regional-spray-technology-centers',
          'fr-ch':
            'https://www.spray.com/fr-ch/company/regional-spray-technology-centers',
          'de-at':
            'https://www.spray.com/de-at/firma/regional-spray-technology-centers',
          'de-de':
            'https://www.spray.com/de-de/firma/regional-spray-technology-centers',
          'el-gr':
            'https://www.spray.com/el-gr/company/regional-spray-technology-centers',
          'ru-kz':
            'https://www.spray.com/ru-kz/компания/региональные-центры-технологии-распыления',
          'es-co':
            'https://www.spray.com/es-co/compañía/centros-de-tecnología-de-pulverización-regionales',
          'bg-bg':
            'https://www.spray.com/bg-bg/company/регионални-технологични-центрове-за-пръскане',
          'en-za':
            'https://www.spray.com/en-za/company/regional-spray-technology-centers',
          'sl-si':
            'https://www.spray.com/sl-si/company/regionalni-centri-za-tehnologijo-brizganja',
          'cs-cz':
            'https://www.spray.com/cs-cz/company/regional-spray-technology-centers',
          'nl-nl':
            'https://www.spray.com/nl-nl/company/regionale-centra-voor-sproeitechnologie',
          'en-ae':
            'https://www.spray.com/en-ae/company/regional-spray-technology-centers',
          'en-au':
            'https://www.spray.com/en-au/company/regional-spray-technology-centres',
          'en-ca':
            'https://www.spray.com/en-ca/company/regional-spray-technology-centers',
          'pl-pl':
            'https://www.spray.com/pl-pl/company/regional-spray-technology-centers',
          'ro-ro':
            'https://www.spray.com/ro-ro/company/regional-spray-technology-centers',
          'es-ar':
            'https://www.spray.com/es-ar/compañía/centros-de-tecnología-de-pulverización-regionales',
          'es-cl':
            'https://www.spray.com/es-cl/compañía/centros-de-tecnología-de-pulverización-regionales',
          'es-ec':
            'https://www.spray.com/es-ec/compañía/centros-de-tecnología-de-pulverización-regionales',
          'es-mx':
            'https://www.spray.com/es-mx/compañía/centros-de-tecnología-de-aspersión-regionales',
          'en-be':
            'https://www.spray.com/en-be/company/regional-spray-technology-centers',
          'en-my':
            'https://www.spray.com/en-my/company/regional-spray-technology-centers',
          'en-at':
            'https://www.spray.com/en-at/company/regional-spray-technology-centers',
          'hu-hu':
            'https://www.spray.com/hu-hu/vállalat/regionális-permetezési-technológiai-központok',
          'es-pe':
            'https://www.spray.com/es-pe/compañía/centros-de-tecnología-de-pulverización-regionales',
          'es-es':
            'https://www.spray.com/es-es/compania/regional-spray-technology-centers',
          'de-be':
            'https://www.spray.com/de-be/firma/regional-spray-technology-centers',
          'nl-be':
            'https://www.spray.com/nl-be/company/regionale-centra-voor-sproeitechnologie',
          'en-nz':
            'https://www.spray.com/en-nz/company/regional-spray-technology-centers',
          'fi-fi':
            'https://www.spray.com/fi-fi/company/regional-spray-technology-centers',
          'fr-ca':
            'https://www.spray.com/fr-ca/société/les-centres-régionaux-de-technologie-de-pulvérisation',
          'fr-fr':
            'https://www.spray.com/fr-fr/company/regional-spray-technology-centers',
          'en-id':
            'https://www.spray.com/en-id/company/regional-spray-technology-centers',
          'en-ch':
            'https://www.spray.com/en-ch/company/regional-spray-technology-centers',
          'en-cz':
            'https://www.spray.com/en-cz/company/regional-spray-technology-centers',
          'de-ch':
            'https://www.spray.com/de-ch/firma/regional-spray-technology-centers',
          'en-sg':
            'https://www.spray.com/en-sg/company/regional-spray-technology-centers',
          'et-ee':
            'https://www.spray.com/et-ee/company/piirkondlikud-pihustustehnoloogiakeskused',
          'sk-sk':
            'https://www.spray.com/sk-sk/company/regionálne-centrá-striekacích-technológií',
          'lt-lt':
            'https://www.spray.com/lt-lt/company/regioniniai-purškimo-technologijų-centrai',
          'lv-lv':
            'https://www.spray.com/lv-lv/company/reģionālie-smidzināšanas-tehnoloģiju-centri',
          'en-ma':
            'https://www.spray.com/en-ma/company/regional-spray-technology-centers',
          'en-cd':
            'https://www.spray.com/en-cd/company/regional-spray-technology-centers',
          'en-sk':
            'https://www.spray.com/en-sk/company/regional-spray-technology-centers',
          'fr-sn':
            'https://www.spray.com/fr-sn/company/regional-spray-technology-centers',
          'en-tn':
            'https://www.spray.com/en-tn/company/regional-spray-technology-centers',
          'en-zm':
            'https://www.spray.com/en-zm/company/regional-spray-technology-centers',
          'en-lt':
            'https://www.spray.com/en-lt/company/regional-spray-technology-centers',
          'fr-ci':
            'https://www.spray.com/fr-ci/company/regional-spray-technology-centers',
          'en-bh':
            'https://www.spray.com/en-bh/company/regional-spray-technology-centers',
          'fr-cm':
            'https://www.spray.com/fr-cm/company/regional-spray-technology-centers',
          'en-mg':
            'https://www.spray.com/en-mg/company/regional-spray-technology-centers',
          'en-sa':
            'https://www.spray.com/en-sa/company/regional-spray-technology-centers',
          'fr-dz':
            'https://www.spray.com/fr-dz/company/regional-spray-technology-centers',
          'en-ci':
            'https://www.spray.com/en-ci/company/regional-spray-technology-centers',
          'en-ng':
            'https://www.spray.com/en-ng/company/regional-spray-technology-centers',
          'fr-ma':
            'https://www.spray.com/fr-ma/company/regional-spray-technology-centers',
          'en-cm':
            'https://www.spray.com/en-cm/company/regional-spray-technology-centers',
          'fr-mg':
            'https://www.spray.com/fr-mg/company/regional-spray-technology-centers',
          'en-iq':
            'https://www.spray.com/en-iq/company/regional-spray-technology-centers',
          'en-sn':
            'https://www.spray.com/en-sn/company/regional-spray-technology-centers',
          'fr-tn':
            'https://www.spray.com/fr-tn/company/regional-spray-technology-centers',
          'en-dz':
            'https://www.spray.com/en-dz/company/regional-spray-technology-centers',
          'en-jo':
            'https://www.spray.com/en-jo/company/regional-spray-technology-centers',
          'en-eg':
            'https://www.spray.com/en-eg/company/regional-spray-technology-centers',
          'en-ke':
            'https://www.spray.com/en-ke/company/regional-spray-technology-centers',
          'en-om':
            'https://www.spray.com/en-om/company/regional-spray-technology-centers',
          'en-kw':
            'https://www.spray.com/en-kw/company/regional-spray-technology-centers',
          'fr-cd':
            'https://www.spray.com/fr-cd/company/regional-spray-technology-centers',
          'en-lb':
            'https://www.spray.com/en-lb/company/regional-spray-technology-centers',
          'en-pk':
            'https://www.spray.com/en-pk/company/regional-spray-technology-centers',
          'en-lv':
            'https://www.spray.com/en-lv/company/regional-spray-technology-centers',
          'en-qa':
            'https://www.spray.com/en-qa/company/regional-spray-technology-centers',
          'it-ch':
            'https://www.spray.com/it-ch/company/regional-spray-technology-centers',
          'en-in':
            'https://www.spray.com/en-in/company/regional-spray-technology-centers',
          'fr-be':
            'https://www.spray.com/fr-be/company/regional-spray-technology-centers',
          'nb-no':
            'https://www.spray.com/nb-no/company/regionale-sprayteknologisentre',
          'it-it':
            'https://www.spray.com/it-it/company/regional-spray-technology-centers',
          'sv-se':
            'https://www.spray.com/sv-se/company/regionala-centrum-för-sprutteknik',
          'en-es':
            'https://www.spray.com/en-es/company/regional-spray-technology-centers',
          'en-hu':
            'https://www.spray.com/en-hu/company/regional-spray-technology-centers',
          'en-it':
            'https://www.spray.com/en-it/company/regional-spray-technology-centers',
          'en-nl':
            'https://www.spray.com/en-nl/company/regional-spray-technology-centers',
          'en-no':
            'https://www.spray.com/en-no/company/regional-spray-technology-centers',
          'en-pl':
            'https://www.spray.com/en-pl/company/regional-spray-technology-centers',
          'en-ro':
            'https://www.spray.com/en-ro/company/regional-spray-technology-centers',
          'en-se':
            'https://www.spray.com/en-se/company/regional-spray-technology-centers',
          'en-tr':
            'https://www.spray.com/en-tr/company/regional-spray-technology-centers',
          'en-de':
            'https://www.spray.com/en-de/company/regional-spray-technology-centers',
          'en-fi':
            'https://www.spray.com/en-fi/company/regional-spray-technology-centers',
          'en-fr':
            'https://www.spray.com/en-fr/company/regional-spray-technology-centers',
          'en-gb':
            'https://www.spray.com/en-gb/company/regional-spray-technology-centers',
          'en-gr':
            'https://www.spray.com/en-gr/company/regional-spray-technology-centers',
          'en-vn':
            'https://www.spray.com/en-vn/company/regional-spray-technology-centers',
          'en-hk':
            'https://www.spray.com/en-hk/company/regional-spray-technology-centers',
          'en-ph':
            'https://www.spray.com/en-ph/company/regional-spray-technology-centers',
          en: 'https://www.spray.com/company/regional-spray-technology-centers'
        }
      }
    ]
  },
  contact: {
    titleMessageId: messageIds.navigation.footer.contact.title,
    items: [
      {
        labelMessageId: messageIds.navigation.footer.contact.items.contactUs,
        links: {
          'ko-kr': 'https://www.spray.com/ko-kr/contact/contact-us',
          'zh-cn': 'https://www.spray.com/zh-cn/联系我们/contact-us',
          'ru-ru': 'https://www.spray.com/ru-ru/связаться-с/свяжитесь-с-нами',
          'ru-ua': 'https://www.spray.com.ua/literature/request.aspx',
          'tr-tr': 'https://www.spray.com/tr-tr/contact/contact-us',
          'x-default': 'https://www.spray.com/contact/contact-us',
          'fr-ch': 'https://www.spray.com/fr-ch/contact/contact-us',
          'de-at': 'https://www.spray.com/de-at/contact/contact-us',
          'de-de': 'https://www.spray.com/de-de/contact/contact-us',
          'el-gr': 'https://www.spray.com/el-gr/contact/επικοινωνήστε-μαζί-μας',
          'ru-kz': 'https://www.spray.com/ru-kz/связаться-с/свяжитесь-с-нами',
          'es-co': 'https://www.spray.com/es-co/contáctenos/contáctenos',
          'bg-bg': 'https://www.spray.com/bg-bg/свържете-се-с/contact-us',
          'en-za': 'https://www.spray.com/en-za/contact/contact-us',
          'sl-si': 'https://www.spray.com/sl-si/pišite-na/contact-us',
          'cs-cz': 'https://www.spray.com/cs-cz/contact/contact-us',
          'nl-nl': 'https://www.spray.com/nl-nl/contact/contact-us',
          'en-ae': 'https://www.spray.com/en-ae/contact/contact-us',
          'en-au': 'https://www.spray.com/en-au/contact/contact-us',
          'en-ca': 'https://www.spray.com/en-ca/contact/contact-us',
          'pl-pl': 'https://www.spray.com/pl-pl/contact/contact-us',
          'ro-ro': 'https://www.spray.com/ro-ro/contact/contact-us',
          'es-ar': 'https://www.spray.com/es-ar/contáctenos/contáctenos',
          'es-cl': 'https://www.spray.com/es-cl/contáctenos/contáctenos',
          'es-ec': 'https://www.spray.com/es-ec/contáctenos/contáctenos',
          'es-mx': 'https://www.spray.com/es-mx/contáctenos/contáctenos',
          'en-be': 'https://www.spray.com/en-be/contact/contact-us',
          'en-my': 'https://www.spray.com/en-my/contact/contact-us',
          'en-at': 'https://www.spray.com/en-at/contact/contact-us',
          'hu-hu':
            'https://www.spray.com/hu-hu/kapcsolatba-lépni/lépjen-kapcsolatba-velünk',
          'es-pe': 'https://www.spray.com/es-pe/contáctenos/contáctenos',
          'es-es': 'https://www.spray.com/es-es/contacto/contact-us',
          'de-be': 'https://www.spray.com/de-be/contact/contact-us',
          'nl-be': 'https://www.spray.com/nl-be/contact/contact-us',
          'en-nz': 'https://www.spray.com/en-nz/contact/contact-us',
          'fi-fi': 'https://www.spray.com/fi-fi/contact/contact-us',
          'fr-ca': 'https://www.spray.com/fr-ca/contactez/contactez-nous',
          'fr-fr': 'https://www.spray.com/fr-fr/contact/contact-us',
          'en-id': 'https://www.spray.com/en-id/contact/contact-us',
          'en-ch': 'https://www.spray.com/en-ch/contact/contact-us',
          'en-cz': 'https://www.spray.com/en-cz/contact/contact-us',
          'de-ch': 'https://www.spray.com/de-ch/contact/contact-us',
          'en-sg': 'https://www.spray.com/en-sg/contact/contact-us',
          'et-ee': 'https://www.spray.com/et-ee/kontakt/contact-us',
          'sk-sk': 'https://www.spray.com/sk-sk/kontakt/contact-us',
          'lt-lt': 'https://www.spray.com/lt-lt/susisiekite-su/contact-us',
          'lv-lv': 'https://www.spray.com/lv-lv/sazinieties-ar/contact-us',
          'en-ma': 'https://www.spray.com/en-ma/contact/contact-us',
          'en-cd': 'https://www.spray.com/en-cd/contact/contact-us',
          'en-sk': 'https://www.spray.com/en-sk/contact/contact-us',
          'fr-sn': 'https://www.spray.com/fr-sn/contact/contact-us',
          'en-tn': 'https://www.spray.com/en-tn/contact/contact-us',
          'en-zm': 'https://www.spray.com/en-zm/contact/contact-us',
          'en-lt': 'https://www.spray.com/en-lt/contact/contact-us',
          'fr-ci': 'https://www.spray.com/fr-ci/contact/contact-us',
          'en-bh': 'https://www.spray.com/en-bh/contact/contact-us',
          'fr-cm': 'https://www.spray.com/fr-cm/contact/contact-us',
          'en-mg': 'https://www.spray.com/en-mg/contact/contact-us',
          'en-sa': 'https://www.spray.com/en-sa/contact/contact-us',
          'fr-dz': 'https://www.spray.com/fr-dz/contact/contact-us',
          'en-ci': 'https://www.spray.com/en-ci/contact/contact-us',
          'en-ng': 'https://www.spray.com/en-ng/contact/contact-us',
          'fr-ma': 'https://www.spray.com/fr-ma/contact/contact-us',
          'en-cm': 'https://www.spray.com/en-cm/contact/contact-us',
          'fr-mg': 'https://www.spray.com/fr-mg/contact/contact-us',
          'en-iq': 'https://www.spray.com/en-iq/contact/contact-us',
          'en-sn': 'https://www.spray.com/en-sn/contact/contact-us',
          'fr-tn': 'https://www.spray.com/fr-tn/contact/contact-us',
          'en-dz': 'https://www.spray.com/en-dz/contact/contact-us',
          'en-jo': 'https://www.spray.com/en-jo/contact/contact-us',
          'en-eg': 'https://www.spray.com/en-eg/contact/contact-us',
          'en-ke': 'https://www.spray.com/en-ke/contact/contact-us',
          'en-om': 'https://www.spray.com/en-om/contact/contact-us',
          'en-kw': 'https://www.spray.com/en-kw/contact/contact-us',
          'fr-cd': 'https://www.spray.com/fr-cd/contact/contact-us',
          'en-lb': 'https://www.spray.com/en-lb/contact/contact-us',
          'en-pk': 'https://www.spray.com/en-pk/contact/contact-us',
          'en-lv': 'https://www.spray.com/en-lv/contact/contact-us',
          'en-qa': 'https://www.spray.com/en-qa/contact/contact-us',
          'it-ch': 'https://www.spray.com/it-ch/contact/contact-us',
          'en-in': 'https://www.spray.com/en-in/contact/contact-us',
          'fr-be': 'https://www.spray.com/fr-be/contact/contact-us',
          'nb-no': 'https://www.spray.com/nb-no/contact/contact-us',
          'it-it': 'https://www.spray.com/it-it/contact/contact-us',
          'sv-se': 'https://www.spray.com/sv-se/contact/contact-us',
          'en-es': 'https://www.spray.com/en-es/contact/contact-us',
          'en-hu': 'https://www.spray.com/en-hu/contact/contact-us',
          'en-it': 'https://www.spray.com/en-it/contact/contact-us',
          'en-nl': 'https://www.spray.com/en-nl/contact/contact-us',
          'en-no': 'https://www.spray.com/en-no/contact/contact-us',
          'en-pl': 'https://www.spray.com/en-pl/contact/contact-us',
          'en-ro': 'https://www.spray.com/en-ro/contact/contact-us',
          'en-se': 'https://www.spray.com/en-se/contact/contact-us',
          'en-tr': 'https://www.spray.com/en-tr/contact/contact-us',
          'en-de': 'https://www.spray.com/en-de/contact/contact-us',
          'en-fi': 'https://www.spray.com/en-fi/contact/contact-us',
          'en-fr': 'https://www.spray.com/en-fr/contact/contact-us',
          'en-gb': 'https://www.spray.com/en-gb/contact/contact-us',
          'en-gr': 'https://www.spray.com/en-gr/contact/contact-us',
          'en-vn': 'https://www.spray.com/en-vn/contact/contact-us',
          'en-hk': 'https://www.spray.com/en-hk/contact/contact-us',
          'en-ph': 'https://www.spray.com/en-ph/contact/contact-us',
          en: 'https://www.spray.com/contact/contact-us'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.contact.items.findALocalRep,
        links: {
          'x-default': 'https://www.spray.com/contact/find-a-representative',
          'vi-vn': 'https://www.spray.com.vn/contact/local_rep.aspx',
          'ko-kr': 'https://www.spray.com/ko-kr/contact/find-a-representative',
          'zh-cn': 'https://www.spray.com/zh-cn/联系我们/find-a-representative',
          'ro-ro': 'https://www.spray.com/ro-ro/contact/find-a-representative',
          'es-ar':
            'https://www.spray.com/es-ar/contáctenos/encuentre-a-un-representante',
          'es-co':
            'https://www.spray.com/es-co/contáctenos/encuentre-a-un-representante',
          'es-pe':
            'https://www.spray.com/es-pe/contáctenos/encuentre-a-un-representante',
          'es-cl':
            'https://www.spray.com/es-cl/contáctenos/encuentre-a-un-representante',
          'es-ec':
            'https://www.spray.com/es-ec/contáctenos/encuentre-a-un-representante',
          'ja-jp': 'https://www.spray.co.jp/contact/local_rep.aspx',
          'ru-ua': 'https://www.spray.com.ua/contact/local_rep.aspx',
          cs: 'https://www.spray.cz/contact/local_rep.aspx',
          'fr-ch': 'https://www.spray.com/fr-ch/contact/find-a-representative',
          'de-at': 'https://www.spray.com/de-at/contact/find-a-representative',
          'de-de': 'https://www.spray.com/de-de/contact/find-a-representative',
          'el-gr': 'https://www.spray.com/el-gr/contact/find-a-representative',
          'ru-kz':
            'https://www.spray.com/ru-kz/связаться-с/найти-представителя',
          'ru-ru':
            'https://www.spray.com/ru-ru/связаться-с/найти-представителя',
          'bg-bg':
            'https://www.spray.com/bg-bg/свържете-се-с/намерете-представител',
          'en-za': 'https://www.spray.com/en-za/contact/find-a-representative',
          'sl-si': 'https://www.spray.com/sl-si/pišite-na/poiščite-zastopnika',
          'cs-cz': 'https://www.spray.com/cs-cz/contact/find-a-representative',
          'nl-nl': 'https://www.spray.com/nl-nl/contact/find-a-representative',
          'en-ae': 'https://www.spray.com/en-ae/contact/find-a-representative',
          'en-au': 'https://www.spray.com/en-au/contact/find-a-representative',
          'en-ca': 'https://www.spray.com/en-ca/contact/find-a-representative',
          'pl-pl': 'https://www.spray.com/pl-pl/contact/find-a-representative',
          'es-mx':
            'https://www.spray.com/es-mx/contáctenos/encuentre-a-un-representante',
          'tr-tr': 'https://www.spray.com/tr-tr/contact/find-a-representative',
          'en-be': 'https://www.spray.com/en-be/contact/find-a-representative',
          'en-my': 'https://www.spray.com/en-my/contact/find-a-representative',
          'en-at': 'https://www.spray.com/en-at/contact/find-a-representative',
          'hu-hu':
            'https://www.spray.com/hu-hu/kapcsolatba-lépni/keressen-egy-képviselőt',
          'es-es': 'https://www.spray.com/es-es/contacto/find-a-representative',
          'de-be': 'https://www.spray.com/de-be/contact/find-a-representative',
          'nl-be': 'https://www.spray.com/nl-be/contact/find-a-representative',
          'en-nz': 'https://www.spray.com/en-nz/contact/find-a-representative',
          'fi-fi':
            'https://www.spray.com/fi-fi/contact/etsi-paikallinen-edustaja',
          'fr-ca':
            'https://www.spray.com/fr-ca/contactez/trouver-un-représentant-local',
          'fr-fr': 'https://www.spray.com/fr-fr/contact/find-a-representative',
          'en-id': 'https://www.spray.com/en-id/contact/find-a-representative',
          'en-ch': 'https://www.spray.com/en-ch/contact/find-a-representative',
          'en-cz': 'https://www.spray.com/en-cz/contact/find-a-representative',
          'de-ch': 'https://www.spray.com/de-ch/contact/find-a-representative',
          'en-sg': 'https://www.spray.com/en-sg/contact/find-a-representative',
          'et-ee': 'https://www.spray.com/et-ee/kontakt/leia-esindaja',
          'sk-sk': 'https://www.spray.com/sk-sk/kontakt/nájsť-zástupcu',
          'lt-lt': 'https://www.spray.com/lt-lt/susisiekite-su/raskite-atstovą',
          'lv-lv': 'https://www.spray.com/lv-lv/sazinieties-ar/atrast-pārstāvi',
          'en-ma': 'https://www.spray.com/en-ma/contact/find-a-representative',
          'en-cd': 'https://www.spray.com/en-cd/contact/find-a-representative',
          'en-sk': 'https://www.spray.com/en-sk/contact/find-a-representative',
          'fr-sn': 'https://www.spray.com/fr-sn/contact/find-a-representative',
          'en-tn': 'https://www.spray.com/en-tn/contact/find-a-representative',
          'en-zm': 'https://www.spray.com/en-zm/contact/find-a-representative',
          'en-lt': 'https://www.spray.com/en-lt/contact/find-a-representative',
          'fr-ci': 'https://www.spray.com/fr-ci/contact/find-a-representative',
          'en-bh': 'https://www.spray.com/en-bh/contact/find-a-representative',
          'fr-cm': 'https://www.spray.com/fr-cm/contact/find-a-representative',
          'en-mg': 'https://www.spray.com/en-mg/contact/find-a-representative',
          'en-sa': 'https://www.spray.com/en-sa/contact/find-a-representative',
          'fr-dz': 'https://www.spray.com/fr-dz/contact/find-a-representative',
          'en-ci': 'https://www.spray.com/en-ci/contact/find-a-representative',
          'en-ng': 'https://www.spray.com/en-ng/contact/find-a-representative',
          'fr-ma': 'https://www.spray.com/fr-ma/contact/find-a-representative',
          'en-cm': 'https://www.spray.com/en-cm/contact/find-a-representative',
          'fr-mg': 'https://www.spray.com/fr-mg/contact/find-a-representative',
          'en-iq': 'https://www.spray.com/en-iq/contact/find-a-representative',
          'en-sn': 'https://www.spray.com/en-sn/contact/find-a-representative',
          'fr-tn': 'https://www.spray.com/fr-tn/contact/find-a-representative',
          'en-dz': 'https://www.spray.com/en-dz/contact/find-a-representative',
          'en-jo': 'https://www.spray.com/en-jo/contact/find-a-representative',
          'en-eg': 'https://www.spray.com/en-eg/contact/find-a-representative',
          'en-ke': 'https://www.spray.com/en-ke/contact/find-a-representative',
          'en-om': 'https://www.spray.com/en-om/contact/find-a-representative',
          'en-kw': 'https://www.spray.com/en-kw/contact/find-a-representative',
          'fr-cd': 'https://www.spray.com/fr-cd/contact/find-a-representative',
          'en-lb': 'https://www.spray.com/en-lb/contact/find-a-representative',
          'en-pk': 'https://www.spray.com/en-pk/contact/find-a-representative',
          'en-lv': 'https://www.spray.com/en-lv/contact/find-a-representative',
          'en-qa': 'https://www.spray.com/en-qa/contact/find-a-representative',
          'it-ch': 'https://www.spray.com/it-ch/contact/find-a-representative',
          'en-in': 'https://www.spray.com/en-in/contact/find-a-representative',
          'fr-be': 'https://www.spray.com/fr-be/contact/find-a-representative',
          'nb-no': 'https://www.spray.com/nb-no/contact/find-a-representative',
          'it-it': 'https://www.spray.com/it-it/contact/find-a-representative',
          'sv-se': 'https://www.spray.com/sv-se/contact/find-a-representative',
          'en-es': 'https://www.spray.com/en-es/contact/find-a-representative',
          'en-hu': 'https://www.spray.com/en-hu/contact/find-a-representative',
          'en-it': 'https://www.spray.com/en-it/contact/find-a-representative',
          'en-nl': 'https://www.spray.com/en-nl/contact/find-a-representative',
          'en-no': 'https://www.spray.com/en-no/contact/find-a-representative',
          'en-pl': 'https://www.spray.com/en-pl/contact/find-a-representative',
          'en-ro': 'https://www.spray.com/en-ro/contact/find-a-representative',
          'en-se': 'https://www.spray.com/en-se/contact/find-a-representative',
          'en-tr': 'https://www.spray.com/en-tr/contact/find-a-representative',
          'en-de': 'https://www.spray.com/en-de/contact/find-a-representative',
          'en-fi': 'https://www.spray.com/en-fi/contact/find-a-representative',
          'en-fr': 'https://www.spray.com/en-fr/contact/find-a-representative',
          'en-gb': 'https://www.spray.com/en-gb/contact/find-a-representative',
          'en-gr': 'https://www.spray.com/en-gr/contact/find-a-representative',
          'en-vn': 'https://www.spray.com/en-vn/contact/find-a-representative',
          'en-hk': 'https://www.spray.com/en-hk/contact/find-a-representative',
          'en-ph': 'https://www.spray.com/en-ph/contact/find-a-representative',
          en: 'https://www.spray.com/contact/find-a-representative'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.contact.items.subscribeToOurNewsletter,
        links: {
          'fr-ch': 'https://www.spray.com/fr-ch/services/subscribe',
          'de-at': 'https://www.spray.com/de-at/services/subscribe',
          'de-de': 'https://www.spray.com/de-de/services/subscribe',
          'el-gr': 'https://www.spray.com/el-gr/services/subscribe',
          'ko-kr': 'https://www.spray.com/ko-kr/services/subscribe',
          'ru-kz': 'https://www.spray.com/ru-kz/услуги/подписаться',
          'ru-ru': 'https://www.spray.com/ru-ru/услуги/подписаться',
          'es-co': 'https://www.spray.com/es-co/servicios/suscríbase',
          'bg-bg': 'https://www.spray.com/bg-bg/services/абонирайте-се-за',
          'en-za': 'https://www.spray.com/en-za/services/subscribe',
          'sl-si': 'https://www.spray.com/sl-si/services/naročite-se-na',
          'cs-cz': 'https://www.spray.com/cs-cz/services/subscribe',
          'nl-nl': 'https://www.spray.com/nl-nl/services/subscribe',
          'en-ae': 'https://www.spray.com/en-ae/services/subscribe',
          'en-au': 'https://www.spray.com/en-au/services/subscribe',
          'en-ca': 'https://www.spray.com/en-ca/services/subscribe',
          'pl-pl': 'https://www.spray.com/pl-pl/services/subscribe',
          'ro-ro': 'https://www.spray.com/ro-ro/services/subscribe',
          'es-ar': 'https://www.spray.com/es-ar/servicios/suscríbase',
          'es-cl': 'https://www.spray.com/es-cl/servicios/suscríbase',
          'es-ec': 'https://www.spray.com/es-ec/servicios/suscríbase',
          'es-mx': 'https://www.spray.com/es-mx/servicios/suscríbase',
          'tr-tr': 'https://www.spray.com/tr-tr/services/subscribe',
          'en-be': 'https://www.spray.com/en-be/services/subscribe',
          'en-my': 'https://www.spray.com/en-my/services/subscribe',
          'en-at': 'https://www.spray.com/en-at/services/subscribe',
          'hu-hu': 'https://www.spray.com/hu-hu/szolgáltatások/subscribe',
          'es-pe': 'https://www.spray.com/es-pe/servicios/suscríbase',
          'es-es': 'https://www.spray.com/es-es/servicios/subscribe',
          'zh-cn': 'https://www.spray.com/zh-cn/服务/subscribe',
          'de-be': 'https://www.spray.com/de-be/services/subscribe',
          'nl-be': 'https://www.spray.com/nl-be/services/subscribe',
          'en-nz': 'https://www.spray.com/en-nz/services/subscribe',
          'fi-fi': 'https://www.spray.com/fi-fi/services/subscribe',
          'fr-ca': "https://www.spray.com/fr-ca/services/s'abonner",
          'fr-fr': 'https://www.spray.com/fr-fr/services/subscribe',
          'en-id': 'https://www.spray.com/en-id/services/subscribe',
          'en-ch': 'https://www.spray.com/en-ch/services/subscribe',
          'en-cz': 'https://www.spray.com/en-cz/services/subscribe',
          'de-ch': 'https://www.spray.com/de-ch/services/subscribe',
          'en-sg': 'https://www.spray.com/en-sg/services/subscribe',
          'et-ee': 'https://www.spray.com/et-ee/services/telli',
          'sk-sk': 'https://www.spray.com/sk-sk/services/prihlásiť-sa-na',
          'lt-lt': 'https://www.spray.com/lt-lt/services/prenumeruoti',
          'lv-lv': 'https://www.spray.com/lv-lv/services/abonēt',
          'en-ma': 'https://www.spray.com/en-ma/services/subscribe',
          'en-cd': 'https://www.spray.com/en-cd/services/subscribe',
          'en-sk': 'https://www.spray.com/en-sk/services/subscribe',
          'fr-sn': 'https://www.spray.com/fr-sn/services/subscribe',
          'en-tn': 'https://www.spray.com/en-tn/services/subscribe',
          'en-zm': 'https://www.spray.com/en-zm/services/subscribe',
          'en-lt': 'https://www.spray.com/en-lt/services/subscribe',
          'fr-ci': 'https://www.spray.com/fr-ci/services/subscribe',
          'en-bh': 'https://www.spray.com/en-bh/services/subscribe',
          'fr-cm': 'https://www.spray.com/fr-cm/services/subscribe',
          'en-mg': 'https://www.spray.com/en-mg/services/subscribe',
          'en-sa': 'https://www.spray.com/en-sa/services/subscribe',
          'fr-dz': 'https://www.spray.com/fr-dz/services/subscribe',
          'en-ci': 'https://www.spray.com/en-ci/services/subscribe',
          'en-ng': 'https://www.spray.com/en-ng/services/subscribe',
          'fr-ma': 'https://www.spray.com/fr-ma/services/subscribe',
          'en-cm': 'https://www.spray.com/en-cm/services/subscribe',
          'fr-mg': 'https://www.spray.com/fr-mg/services/subscribe',
          'en-iq': 'https://www.spray.com/en-iq/services/subscribe',
          'en-sn': 'https://www.spray.com/en-sn/services/subscribe',
          'fr-tn': 'https://www.spray.com/fr-tn/services/subscribe',
          'en-dz': 'https://www.spray.com/en-dz/services/subscribe',
          'en-jo': 'https://www.spray.com/en-jo/services/subscribe',
          'en-eg': 'https://www.spray.com/en-eg/services/subscribe',
          'en-ke': 'https://www.spray.com/en-ke/services/subscribe',
          'en-om': 'https://www.spray.com/en-om/services/subscribe',
          'en-kw': 'https://www.spray.com/en-kw/services/subscribe',
          'fr-cd': 'https://www.spray.com/fr-cd/services/subscribe',
          'en-lb': 'https://www.spray.com/en-lb/services/subscribe',
          'en-pk': 'https://www.spray.com/en-pk/services/subscribe',
          'en-lv': 'https://www.spray.com/en-lv/services/subscribe',
          'en-qa': 'https://www.spray.com/en-qa/services/subscribe',
          'it-ch': 'https://www.spray.com/it-ch/services/subscribe',
          'en-in': 'https://www.spray.com/en-in/services/subscribe',
          'fr-be': 'https://www.spray.com/fr-be/services/subscribe',
          'nb-no': 'https://www.spray.com/nb-no/services/abonnere',
          'it-it': 'https://www.spray.com/it-it/services/subscribe',
          'sv-se': 'https://www.spray.com/sv-se/services/prenumerera-på',
          'en-es': 'https://www.spray.com/en-es/services/subscribe',
          'en-hu': 'https://www.spray.com/en-hu/services/subscribe',
          'en-it': 'https://www.spray.com/en-it/services/subscribe',
          'en-nl': 'https://www.spray.com/en-nl/services/subscribe',
          'en-no': 'https://www.spray.com/en-no/services/subscribe',
          'en-pl': 'https://www.spray.com/en-pl/services/subscribe',
          'en-ro': 'https://www.spray.com/en-ro/services/subscribe',
          'en-se': 'https://www.spray.com/en-se/services/subscribe',
          'en-tr': 'https://www.spray.com/en-tr/services/subscribe',
          'en-de': 'https://www.spray.com/en-de/services/subscribe',
          'en-fi': 'https://www.spray.com/en-fi/services/subscribe',
          'en-fr': 'https://www.spray.com/en-fr/services/subscribe',
          'en-gb': 'https://www.spray.com/en-gb/services/subscribe',
          'en-gr': 'https://www.spray.com/en-gr/services/subscribe',
          'en-vn': 'https://www.spray.com/en-vn/services/subscribe',
          'en-hk': 'https://www.spray.com/en-hk/services/subscribe',
          'en-ph': 'https://www.spray.com/en-ph/services/subscribe',
          en: 'https://www.spray.com/services/subscribe',
          'x-default': 'https://www.spray.com/services/subscribe'
        }
      },
      {
        labelMessageId:
          messageIds.navigation.footer.contact.items.manageSubscriptions,
        links: {
          'fr-ch': 'https://www.spray.com/fr-ch/services/manage-subscriptions',
          'de-at': 'https://www.spray.com/de-at/services/manage-subscriptions',
          'de-de': 'https://www.spray.com/de-de/services/manage-subscriptions',
          'el-gr': 'https://www.spray.com/el-gr/services/manage-subscriptions',
          'ko-kr': 'https://www.spray.com/ko-kr/services/manage-subscriptions',
          'ru-kz': 'https://www.spray.com/ru-kz/услуги/manage-subscriptions',
          'ru-ru': 'https://www.spray.com/ru-ru/услуги/manage-subscriptions',
          'es-co':
            'https://www.spray.com/es-co/servicios/manejo-de-suscripciones',
          'bg-bg': 'https://www.spray.com/bg-bg/services/manage-subscriptions',
          'en-za': 'https://www.spray.com/en-za/services/manage-subscriptions',
          'sl-si': 'https://www.spray.com/sl-si/services/manage-subscriptions',
          'cs-cz': 'https://www.spray.com/cs-cz/services/manage-subscriptions',
          'nl-nl': 'https://www.spray.com/nl-nl/services/manage-subscriptions',
          'en-ae': 'https://www.spray.com/en-ae/services/manage-subscriptions',
          'en-au': 'https://www.spray.com/en-au/services/manage-subscriptions',
          'en-ca': 'https://www.spray.com/en-ca/services/manage-subscriptions',
          'pl-pl': 'https://www.spray.com/pl-pl/services/manage-subscriptions',
          'ro-ro': 'https://www.spray.com/ro-ro/services/manage-subscriptions',
          'es-ar':
            'https://www.spray.com/es-ar/servicios/manejo-de-suscripciones',
          'es-cl':
            'https://www.spray.com/es-cl/servicios/manejo-de-suscripciones',
          'es-ec':
            'https://www.spray.com/es-ec/servicios/manejo-de-suscripciones',
          'es-mx':
            'https://www.spray.com/es-mx/servicios/manejo-de-suscripciones',
          'tr-tr': 'https://www.spray.com/tr-tr/services/manage-subscriptions',
          'en-be': 'https://www.spray.com/en-be/services/manage-subscriptions',
          'en-my': 'https://www.spray.com/en-my/services/manage-subscriptions',
          'en-at': 'https://www.spray.com/en-at/services/manage-subscriptions',
          'hu-hu':
            'https://www.spray.com/hu-hu/szolgáltatások/manage-subscriptions',
          'es-pe':
            'https://www.spray.com/es-pe/servicios/manejo-de-suscripciones',
          'es-es': 'https://www.spray.com/es-es/servicios/manage-subscriptions',
          'zh-cn': 'https://www.spray.com/zh-cn/服务/manage-subscriptions',
          'de-be': 'https://www.spray.com/de-be/services/manage-subscriptions',
          'nl-be': 'https://www.spray.com/nl-be/services/manage-subscriptions',
          'en-nz': 'https://www.spray.com/en-nz/services/manage-subscriptions',
          'fi-fi': 'https://www.spray.com/fi-fi/services/manage-subscriptions',
          'fr-ca': 'https://www.spray.com/fr-ca/services/gérer-les-abonnements',
          'fr-fr': 'https://www.spray.com/fr-fr/services/manage-subscriptions',
          'en-id': 'https://www.spray.com/en-id/services/manage-subscriptions',
          'en-ch': 'https://www.spray.com/en-ch/services/manage-subscriptions',
          'en-cz': 'https://www.spray.com/en-cz/services/manage-subscriptions',
          'de-ch': 'https://www.spray.com/de-ch/services/manage-subscriptions',
          'en-sg': 'https://www.spray.com/en-sg/services/manage-subscriptions',
          'et-ee': 'https://www.spray.com/et-ee/services/manage-subscriptions',
          'sk-sk': 'https://www.spray.com/sk-sk/services/manage-subscriptions',
          'lt-lt': 'https://www.spray.com/lt-lt/services/manage-subscriptions',
          'lv-lv': 'https://www.spray.com/lv-lv/services/manage-subscriptions',
          'en-ma': 'https://www.spray.com/en-ma/services/manage-subscriptions',
          'en-cd': 'https://www.spray.com/en-cd/services/manage-subscriptions',
          'en-sk': 'https://www.spray.com/en-sk/services/manage-subscriptions',
          'fr-sn': 'https://www.spray.com/fr-sn/services/manage-subscriptions',
          'en-tn': 'https://www.spray.com/en-tn/services/manage-subscriptions',
          'en-zm': 'https://www.spray.com/en-zm/services/manage-subscriptions',
          'en-lt': 'https://www.spray.com/en-lt/services/manage-subscriptions',
          'fr-ci': 'https://www.spray.com/fr-ci/services/manage-subscriptions',
          'en-bh': 'https://www.spray.com/en-bh/services/manage-subscriptions',
          'fr-cm': 'https://www.spray.com/fr-cm/services/manage-subscriptions',
          'en-mg': 'https://www.spray.com/en-mg/services/manage-subscriptions',
          'en-sa': 'https://www.spray.com/en-sa/services/manage-subscriptions',
          'fr-dz': 'https://www.spray.com/fr-dz/services/manage-subscriptions',
          'en-ci': 'https://www.spray.com/en-ci/services/manage-subscriptions',
          'en-ng': 'https://www.spray.com/en-ng/services/manage-subscriptions',
          'fr-ma': 'https://www.spray.com/fr-ma/services/manage-subscriptions',
          'en-cm': 'https://www.spray.com/en-cm/services/manage-subscriptions',
          'fr-mg': 'https://www.spray.com/fr-mg/services/manage-subscriptions',
          'en-iq': 'https://www.spray.com/en-iq/services/manage-subscriptions',
          'en-sn': 'https://www.spray.com/en-sn/services/manage-subscriptions',
          'fr-tn': 'https://www.spray.com/fr-tn/services/manage-subscriptions',
          'en-dz': 'https://www.spray.com/en-dz/services/manage-subscriptions',
          'en-jo': 'https://www.spray.com/en-jo/services/manage-subscriptions',
          'en-eg': 'https://www.spray.com/en-eg/services/manage-subscriptions',
          'en-ke': 'https://www.spray.com/en-ke/services/manage-subscriptions',
          'en-om': 'https://www.spray.com/en-om/services/manage-subscriptions',
          'en-kw': 'https://www.spray.com/en-kw/services/manage-subscriptions',
          'fr-cd': 'https://www.spray.com/fr-cd/services/manage-subscriptions',
          'en-lb': 'https://www.spray.com/en-lb/services/manage-subscriptions',
          'en-pk': 'https://www.spray.com/en-pk/services/manage-subscriptions',
          'en-lv': 'https://www.spray.com/en-lv/services/manage-subscriptions',
          'en-qa': 'https://www.spray.com/en-qa/services/manage-subscriptions',
          'it-ch': 'https://www.spray.com/it-ch/services/manage-subscriptions',
          'en-in': 'https://www.spray.com/en-in/services/manage-subscriptions',
          'fr-be': 'https://www.spray.com/fr-be/services/manage-subscriptions',
          'nb-no': 'https://www.spray.com/nb-no/services/manage-subscriptions',
          'it-it': 'https://www.spray.com/it-it/services/manage-subscriptions',
          'sv-se': 'https://www.spray.com/sv-se/services/manage-subscriptions',
          'en-es': 'https://www.spray.com/en-es/services/manage-subscriptions',
          'en-hu': 'https://www.spray.com/en-hu/services/manage-subscriptions',
          'en-it': 'https://www.spray.com/en-it/services/manage-subscriptions',
          'en-nl': 'https://www.spray.com/en-nl/services/manage-subscriptions',
          'en-no': 'https://www.spray.com/en-no/services/manage-subscriptions',
          'en-pl': 'https://www.spray.com/en-pl/services/manage-subscriptions',
          'en-ro': 'https://www.spray.com/en-ro/services/manage-subscriptions',
          'en-se': 'https://www.spray.com/en-se/services/manage-subscriptions',
          'en-tr': 'https://www.spray.com/en-tr/services/manage-subscriptions',
          'en-de': 'https://www.spray.com/en-de/services/manage-subscriptions',
          'en-fi': 'https://www.spray.com/en-fi/services/manage-subscriptions',
          'en-fr': 'https://www.spray.com/en-fr/services/manage-subscriptions',
          'en-gb': 'https://www.spray.com/en-gb/services/manage-subscriptions',
          'en-gr': 'https://www.spray.com/en-gr/services/manage-subscriptions',
          'en-vn': 'https://www.spray.com/en-vn/services/manage-subscriptions',
          'en-hk': 'https://www.spray.com/en-hk/services/manage-subscriptions',
          'en-ph': 'https://www.spray.com/en-ph/services/manage-subscriptions',
          en: 'https://www.spray.com/services/manage-subscriptions',
          'x-default': 'https://www.spray.com/services/manage-subscriptions'
        }
      }
    ]
  }
};
