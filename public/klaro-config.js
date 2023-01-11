// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
window.klaroConfigGDPR = {
  // With the 0.7.0 release we introduce a 'version' paramter that will make
  // if easier for us to keep configuration files backwards-compatible in the future.
  version: 1,

  // You can customize the ID of the DIV element that Klaro will create
  // when starting up. If undefined, Klaro will use 'klaro'.
  elementID: 'klaro',

  // Setting this to true will keep Klaro from automatically loading itself
  // when the page is being loaded.
  noAutoLoad: false,

  // Setting this to true will render the descriptions of the consent
  // modal and consent notice are HTML. Use with care.
  htmlTexts: false,

  // Setting 'embedded' to true will render the Klaro modal and notice without
  // the modal background, allowing you to e.g. embed them into a specific element
  // of your website, such as your privacy notice.
  embedded: false,

  // You can group services by their purpose in the modal. This is advisable
  // if you have a large number of services. Users can then enable or disable
  // entire groups of services instead of having to enable or disable every service.
  groupByPurpose: true,

  // How Klaro should store the user's preferences. It can be either 'cookie'
  // (the default) or 'localStorage'.
  storageMethod: 'cookie',

  // You can customize the name of the cookie that Klaro uses for storing
  // user consent decisions. If undefined, Klaro will use 'klaro'.
  cookieName: 'SprayCookieConsent',

  // You can also set a custom expiration time for the Klaro cookie.
  // By default, it will expire after 120 days.
  cookieExpiresAfterDays: 1095,

  // You can change to cookie domain for the consent manager itself.
  // Use this if you want to get consent once for multiple matching domains.
  // If undefined, Klaro will use the current domain.
  //cookieDomain: '.github.com',

  cookieDomain: '.spray.com',

  // Defines the default state for services (true=enabled by default).
  default: true,

  // If "mustConsent" is set to true, Klaro will directly display the consent
  // manager modal and not allow the user to close it before having actively
  // consented or declines the use of third-party services.
  mustConsent: false,

  // Show "accept all" to accept all services instead of "ok" that only accepts
  // required and "default: true" services
  acceptAll: true,

  // replace "decline" with cookie manager modal
  hideDeclineAll: false,

  // hide "learnMore" link
  hideLearnMore: false,

  // show cookie notice as modal
  noticeAsModal: false,

  // You can also remove the 'Realized with Klaro!' text in the consent modal.
  // Please don't do this! We provide Klaro as a free open source tool.
  // Placing a link to our website helps us spread the word about it,
  // which ultimately enables us to make Klaro! better for everyone.
  // So please be fair and keep the link enabled. Thanks :)
  disablePoweredBy: true,

  // you can specify an additional class (or classes) that will be added to the Klaro `div`
  //additionalClass: 'my-klaro',

  // You can define the UI language directly here. If undefined, Klaro will
  // use the value given in the global "lang" variable. If that does
  // not exist, it will use the value given in the "lang" attribute of your
  // HTML tag. If that also doesn't exist, it will use 'en'.
  //lang: 'en',

  // You can overwrite existing translations and add translations for your
  // service descriptions and purposes. See `src/translations/` for a full
  // list of translations that can be overwritten:
  // https://github.com/KIProtect/klaro/tree/master/src/translations

  // Example config that shows how to overwrite translations:
  // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
  translations: {
    // translationsed defined under the 'zz' language code act as default
    // translations.
    zz: {
      privacyPolicyUrl: 'https://www.spray.com/legal/privacy-statement'
    },
    // If you erase the "consentModal" translations, Klaro will use the
    // bundled translations.
    en: {
      consentModal: {
        title: 'Services we would like to use',
        description:
          "Here you can assess and customize the services that we'd like to use on this website. You're in charge! Enable or disable services as you see fit."
      },
      consentNotice: {
        description:
          "This website uses cookies. By continuing to browse or by clicking 'Accept' you agree to the storing of first and third party cookies on your device to enhance site navigation, analyze site usage and assist in our marketing efforts."
      },
      purposes: {
        analytics: 'Analytics',
        security: 'Security',
        livechat: 'Livechat',
        advertising: 'Advertising',
        styling: 'Styling'
      },
      ok: 'Accept',
      decline: 'Decline'
    }
  },

  services: [
    {
      name: 'GTM',
      //default: false,
      title: 'Analytics Services',
      purposes: ['analytics'],
      cookies: [
        ['/^_pk_.*$/', '/', 'klaro.kiprotect.com'],
        ['/^_pk_.*$/', '/', 'localhost'],
        'piwik_ignore'
      ],
      // required: false,
      // optOut: false,
      // onlyOnce: true,
      description:
        'Google Analytics, HotJar, LinkedIn, Facebook, ClickDimensions'
    }
  ]
};

window.klaroConfigUS = {
  // With the 0.7.0 release we introduce a 'version' paramter that will make
  // if easier for us to keep configuration files backwards-compatible in the future.
  version: 1,

  // You can customize the ID of the DIV element that Klaro will create
  // when starting up. If undefined, Klaro will use 'klaro'.
  elementID: 'klaro',

  // Setting this to true will keep Klaro from automatically loading itself
  // when the page is being loaded.
  noAutoLoad: true,

  // Setting this to true will render the descriptions of the consent
  // modal and consent notice are HTML. Use with care.
  htmlTexts: false,

  // Setting 'embedded' to true will render the Klaro modal and notice without
  // the modal background, allowing you to e.g. embed them into a specific element
  // of your website, such as your privacy notice.
  embedded: false,

  // You can group services by their purpose in the modal. This is advisable
  // if you have a large number of services. Users can then enable or disable
  // entire groups of services instead of having to enable or disable every service.
  groupByPurpose: true,

  // How Klaro should store the user's preferences. It can be either 'cookie'
  // (the default) or 'localStorage'.
  storageMethod: 'cookie',

  // You can customize the name of the cookie that Klaro uses for storing
  // user consent decisions. If undefined, Klaro will use 'klaro'.
  cookieName: 'SprayCookieConsent',

  // You can also set a custom expiration time for the Klaro cookie.
  // By default, it will expire after 120 days.
  cookieExpiresAfterDays: 1095,

  // You can change to cookie domain for the consent manager itself.
  // Use this if you want to get consent once for multiple matching domains.
  // If undefined, Klaro will use the current domain.
  //cookieDomain: '.github.com',

  cookieDomain: '.spray.com',

  // Defines the default state for services (true=enabled by default).
  default: true,

  // If "mustConsent" is set to true, Klaro will directly display the consent
  // manager modal and not allow the user to close it before having actively
  // consented or declines the use of third-party services.
  mustConsent: false,

  // Show "accept all" to accept all services instead of "ok" that only accepts
  // required and "default: true" services
  acceptAll: true,

  // replace "decline" with cookie manager modal
  hideDeclineAll: true,

  // hide "learnMore" link
  hideLearnMore: true,

  // show cookie notice as modal
  noticeAsModal: false,

  // You can also remove the 'Realized with Klaro!' text in the consent modal.
  // Please don't do this! We provide Klaro as a free open source tool.
  // Placing a link to our website helps us spread the word about it,
  // which ultimately enables us to make Klaro! better for everyone.
  // So please be fair and keep the link enabled. Thanks :)
  disablePoweredBy: true,

  // you can specify an additional class (or classes) that will be added to the Klaro `div`
  //additionalClass: 'my-klaro',

  // You can define the UI language directly here. If undefined, Klaro will
  // use the value given in the global "lang" variable. If that does
  // not exist, it will use the value given in the "lang" attribute of your
  // HTML tag. If that also doesn't exist, it will use 'en'.
  //lang: 'en',

  // You can overwrite existing translations and add translations for your
  // service descriptions and purposes. See `src/translations/` for a full
  // list of translations that can be overwritten:
  // https://github.com/KIProtect/klaro/tree/master/src/translations

  // Example config that shows how to overwrite translations:
  // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
  translations: {
    // translationsed defined under the 'zz' language code act as default
    // translations.
    zz: {
      privacyPolicyUrl: 'https://www.spray.com/legal/privacy-statement'
    },
    // If you erase the "consentModal" translations, Klaro will use the
    // bundled translations.
    en: {
      consentModal: {
        title: 'Services we would like to use',
        description:
          "Here you can assess and customize the services that we'd like to use on this website. You're in charge! Enable or disable services as you see fit."
      },
      consentNotice: {
        description:
          "This website uses cookies. By continuing to browse or by clicking 'Accept' you agree to the storing of first and third party cookies on your device to enhance site navigation, analyze site usage and assist in our marketing efforts."
      },
      purposes: {
        analytics: 'Analytics',
        security: 'Security',
        livechat: 'Livechat',
        advertising: 'Advertising',
        styling: 'Styling'
      },
      ok: 'Accept',
      decline: 'Decline'
    }
  },
  // This is a list of third-party services that Klaro will manage for you.
  services: [
    {
      name: 'GTM',
      //default: false,
      title: 'Analytics Services',
      purposes: ['analytics'],
      cookies: [
        ['/^_pk_.*$/', '/', 'klaro.kiprotect.com'],
        ['/^_pk_.*$/', '/', 'localhost'],
        'piwik_ignore'
      ],
      required: false,
      optOut: true,
      onlyOnce: true,
      default: true,
      description:
        'Google Analytics, HotJar, LinkedIn, Facebook, ClickDimensions'
    }
  ]
};
