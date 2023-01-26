import { supportedLocales } from '@services/i18n';
import {
  getAlternateLinks,
  getCanonicalUrl,
  getLocalePathsFromMultilingual
} from '@widgets/page/page.helper';
import { LocalePaths } from '@widgets/page/page.types';

jest.mock('@services/i18n', () => ({
  supportedLocales: ['nl-be', 'de-de', 'en-us', 'fr-fr'],
  defaultLocale: 'default',
  defaultLanguage: 'en'
}));

describe('Page helper tests', () => {
  it('getAlternateLinks returns correct alternate links', async () => {
    const localePaths: LocalePaths = {
      'en-us': 'us-path',
      'de-de': 'de-path',
      'fr-fr': 'fr-path',
      'nl-be': 'nl-path'
    };

    const alternateLinks = getAlternateLinks(
      localePaths,
      'default',
      'absolute'
    );

    expect(alternateLinks).toEqual([
      {
        hrefLang: 'en-us',
        path: `${process.env.NEXT_PUBLIC_BASE_URL}/en-us/us-path`
      },
      {
        hrefLang: 'de-de',
        path: `${process.env.NEXT_PUBLIC_BASE_URL}/de-de/de-path`
      },
      {
        hrefLang: 'fr-fr',
        path: `${process.env.NEXT_PUBLIC_BASE_URL}/fr-fr/fr-path`
      },
      {
        hrefLang: 'nl-be',
        path: `${process.env.NEXT_PUBLIC_BASE_URL}/nl-be/nl-path`
      }
    ]);
  });

  it('getAlternateLinks returns alternate links for all supported locales', async () => {
    const localePaths: LocalePaths = {
      'nl-be': 'nl-path',
      'de-de': 'de-path',
      'en-us': 'us-path',
      'fr-fr': 'fr-path'
    };

    const alternateLinks = getAlternateLinks(
      localePaths,
      'default',
      'absolute'
    );
    expect(alternateLinks.length).toBe(supportedLocales?.length);
  });

  it('getLocalePathsFromMultilingual returns correct paths when no fallback is needed', async () => {
    const localePaths = getLocalePathsFromMultilingual('route-path', {
      en: 'en-slug',
      nl: 'nl-slug'
    });

    expect(localePaths?.['en-us']).toBe(`route-path/en-slug`);
    expect(localePaths?.['nl-be']).toBe(`route-path/nl-slug`);
  });

  it('getLocalePathsFromMultilingual returns correct paths when fallback to default locale is needed', async () => {
    const localePaths = getLocalePathsFromMultilingual('route-path', {
      en: 'en-slug'
    });

    expect(localePaths?.['de-de']).toBe(`route-path/en-slug`);
  });

  it('getCanonicalUrl returns correct path for default locale', async () => {
    const canonicalUrl = getCanonicalUrl(
      'en-us',
      'default',
      {
        'en-us': 'us-path',
        'fr-fr': 'fr-path',
        'de-de': 'de-path',
        'nl-be': 'nl-be-path'
      },
      'absolute'
    );

    expect(canonicalUrl).toBe(
      `${process.env.NEXT_PUBLIC_BASE_URL}/en-us/us-path`
    );
  });

  it('getCanonicalUrl returns correct path for nl-be locale', async () => {
    const canonicalUrl = getCanonicalUrl(
      'nl-be',
      'en-us',
      {
        'en-us': 'us-path',
        'fr-fr': 'fr-path',
        'de-de': 'de-path',
        'nl-be': 'nl-be-path'
      },
      'absolute'
    );

    expect(canonicalUrl).toBe(
      `${process.env.NEXT_PUBLIC_BASE_URL}/nl-be/nl-be-path`
    );
  });

  it('getCanonicalUrl returns absolute url that contains https:// protocol', async () => {
    const canonicalUrl = getCanonicalUrl(
      'en-us',
      'en-us',
      {
        'en-us': 'us-path',
        'fr-fr': 'fr-path',
        'de-de': 'de-path',
        'nl-be': 'nl-be-path'
      },
      'absolute'
    );

    expect(canonicalUrl).toMatch(/^https:\/\//);
  });
});
