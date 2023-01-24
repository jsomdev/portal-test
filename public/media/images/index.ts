import cadenasThumbnail from './3d-model.png';
import bigCardImage from './bigcard_spraylance.png';
import atFlag from './countries/at.svg';
import beFlag from './countries/be.svg';
import bgFlag from './countries/bg.svg';
import caFlag from './countries/ca.svg';
import chFlag from './countries/ch.svg';
import czFlag from './countries/cz.svg';
import deFlag from './countries/de.svg';
import eeFlag from './countries/ee.svg';
import esFlag from './countries/es.svg';
import fiFlag from './countries/fi.svg';
import frFlag from './countries/fr.svg';
import gbFlag from './countries/gb.svg';
import grFlag from './countries/gr.svg';
import huFlag from './countries/hu.svg';
import itFlag from './countries/it.svg';
import ltFlag from './countries/lt.svg';
import lvFlag from './countries/lv.svg';
import mxFlag from './countries/mx.svg';
import nlFlag from './countries/nl.svg';
import noFlag from './countries/no.svg';
import plFlag from './countries/pl.svg';
import roFlag from './countries/ro.svg';
import seFlag from './countries/se.svg';
import siFlag from './countries/si.svg';
import skFlag from './countries/sk.svg';
import trFlag from './countries/tr.svg';
import usFlag from './countries/us.svg';
import customerNumber from './customerNumber.jpg';
import defaultCartItem from './defaultCartItem.png';
import defaultProduct from './defaultProduct.png';
import hero from './hero.jpg';
import americanExpressLogo from './icons/amex.svg';
import maestroCardLogo from './icons/maestro.svg';
import masterCardLogo from './icons/mastercard.svg';
import visaLogo from './icons/visa.svg';
import noImageAvailable from './image-not-available.jpg';
import invoice from './invoice.jpg';
import invoiceNumber from './invoiceNumber.jpg';
import mail from './logo-email.svg';
import facebook from './logo-facebook.svg';
import instagram from './logo-instagram.svg';
import linkedIn from './logo-linkedin.svg';
import mainLogo from './logo-spray-white.svg';
import twitter from './logo-twitter.svg';
import youtube from './logo-youtube.svg';
import pdfThumbnail from './pdf.png';
import smallCardSalesImage from './person_salesrepresentative.png';
import smallCardVideoImage from './person_videosprayexpert.png';
import playMovieThumbnail from './play-button-white.png';
import smallCardVerifiedImage1 from './process_customerverification_1.png';
import smallCardVerifiedImage2 from './process_customerverification_2.png';
import smallCardVerifiedImage3 from './process_customerverification_3.png';
import salesRepHome from './sales-rep-home.jpg';
import searchToolHome from './search-tool-home.jpg';
import signInCustomer from './signInCustomer.jpg';
import signInEmployee from './signInEmployee.jpg';
import siteIcon from './site-icon.svg';
import siteLogo from './site-logo.svg';
import videoChatHome from './video-chat-home.jpg';

export const STATIC_IMAGES = {
  app: {
    noImageAvailable,
    smallLogo: defaultCartItem
  },
  signIn: {
    customerCard: signInCustomer,
    headerLogo:
      'https://www.spray.com/-/media/spray/images/logo-spray-color-global.svg?mh=150&hash=E0DBED5E02C6BCD0F4AC0092A8909090',
    employeeCard: signInEmployee
  },
  branding: {
    siteLogo: siteLogo,
    siteIcon: siteIcon
  },
  cart: {
    defaultItem: defaultCartItem
  },
  product: {
    display: {
      cadenasThumbnail,
      defaultProduct,
      playMovieThumbnail,
      pdfThumbnail
    }
  },
  footer: {
    mainLogo,
    mail,
    instagram,
    facebook,
    linkedIn,
    twitter,
    youtube
  },
  checkout: {
    paymentIcons: {
      americanExpressLogo,
      maestroCardLogo,
      masterCardLogo,
      visaLogo
    }
  },
  home: {
    hero,
    support: {
      salesRepHome,
      videoChatHome,
      searchToolHome
    },
    highlights: {
      bigCardImage,
      smallCardSalesImage,
      smallCardVideoImage,
      smallCardVerifiedImage1,
      smallCardVerifiedImage2,
      smallCardVerifiedImage3
    }
  },
  profile: {
    invoices: {
      customerNumber,
      invoiceNumber,
      invoice
    }
  },
  flags: {
    atFlag,
    beFlag,
    bgFlag,
    caFlag,
    chFlag,
    czFlag,
    deFlag,
    eeFlag,
    esFlag,
    fiFlag,
    frFlag,
    gbFlag,
    grFlag,
    huFlag,
    itFlag,
    ltFlag,
    lvFlag,
    mxFlag,
    nlFlag,
    noFlag,
    plFlag,
    roFlag,
    seFlag,
    siFlag,
    skFlag,
    trFlag,
    usFlag
  }
};
