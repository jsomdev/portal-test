import { supportedLocales } from '@services/i18n';
import {
  getAlternateLinks,
  getCanonicalUrl,
  getLocalePathsFromMultilingual
} from '@widgets/page/page.helper';
import { LocalePaths } from '@widgets/page/page.types';

jest.mock('@services/i18n', () => ({
  supportedLocales: ['nl-BE', 'de-DE', 'en-US', 'fr-FR'],
  defaultLanguage: 'en'
}));

describe('Page helper tests', () => {
  it('getAlternateLinks returns correct alternate links', async () => {
    const localePaths: LocalePaths = {
      'en-US': 'us-path',
      'de-DE': 'de-path',
      'fr-FR': 'fr-path',
      'nl-BE': 'nl-path'
    };

    const alternateLinks = getAlternateLinks(localePaths, 'en-US');

    expect(alternateLinks).toEqual([
      {
        hrefLang: 'en-US',
        path: `${process.env.NEXT_PUBLIC_BASE_URL}/us-path`
      },
      {
        hrefLang: 'de-DE',
        path: `${process.env.NEXT_PUBLIC_BASE_URL}/de-DE/de-path`
      },
      {
        hrefLang: 'fr-FR',
        path: `${process.env.NEXT_PUBLIC_BASE_URL}/fr-FR/fr-path`
      },
      {
        hrefLang: 'nl-BE',
        path: `${process.env.NEXT_PUBLIC_BASE_URL}/nl-BE/nl-path`
      }
    ]);
  });

  it('getAlternateLinks returns alternate links for all supported locales', async () => {
    const localePaths: LocalePaths = {
      'nl-BE': 'nl-path',
      'de-DE': 'de-path',
      'en-US': 'us-path',
      'fr-FR': 'fr-path'
    };

    const alternateLinks = getAlternateLinks(localePaths, 'en-US');
    expect(alternateLinks.length).toBe(supportedLocales?.length);
  });

  it('getLocalePathsFromMultilingual returns correct paths when no fallback is needed', async () => {
    const localePaths = getLocalePathsFromMultilingual('route-path', {
      en: 'en-slug',
      nl: 'nl-slug'
    });

    expect(localePaths?.['en-US']).toBe(`route-path/en-slug`);
    expect(localePaths?.['nl-BE']).toBe(`route-path/nl-slug`);
  });

  it('getLocalePathsFromMultilingual returns correct paths when fallback to default locale is needed', async () => {
    const localePaths = getLocalePathsFromMultilingual('route-path', {
      en: 'en-slug'
    });

    expect(localePaths?.['de-DE']).toBe(`route-path/en-slug`);
  });

  it('getCanonicalUrl returns correct path for default locale', async () => {
    const canonicalUrl = getCanonicalUrl('en-US', 'en-US', {
      'en-US': 'us-path',
      'fr-FR': 'fr-path',
      'de-DE': 'de-path',
      'nl-BE': 'nl-be-path'
    });

    expect(canonicalUrl).toBe(`${process.env.NEXT_PUBLIC_BASE_URL}/us-path`);
  });

  it('getCanonicalUrl returns correct path for nl-be locale', async () => {
    const canonicalUrl = getCanonicalUrl('nl-BE', 'en-US', {
      'en-US': 'us-path',
      'fr-FR': 'fr-path',
      'de-DE': 'de-path',
      'nl-BE': 'nl-be-path'
    });

    expect(canonicalUrl).toBe(
      `${process.env.NEXT_PUBLIC_BASE_URL}/nl-BE/nl-be-path`
    );
  });

  it('getCanonicalUrl returns absolute url that contains https:// protocol', async () => {
    const canonicalUrl = getCanonicalUrl('en-US', 'en-US', {
      'en-US': 'us-path',
      'fr-FR': 'fr-path',
      'de-DE': 'de-path',
      'nl-BE': 'nl-be-path'
    });

    expect(canonicalUrl).toMatch(/^https:\/\//);
  });
});
