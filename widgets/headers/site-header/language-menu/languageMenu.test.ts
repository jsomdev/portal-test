import { Audience } from '@services/portal-api/models/AudienceFlags';
import { getSupportedRegionsWithPaths } from '@widgets/headers/site-header/language-menu/languageMenuCountry.helper';

jest.mock('@services/i18n', () => {
  const originalModule = jest.requireActual('@services/i18n');

  return {
    __esModule: true,
    ...originalModule,
    supportedLocales: ['en-US', 'nl-BE', 'de-DE']
  };
});

describe('languageMenu', () => {
  it('getSupportedRegionsWithPaths filters and returns correct paths even if localePath is missing', () => {
    const result = getSupportedRegionsWithPaths(
      {
        'en-US': 'us-path',
        'nl-BE': 'nl-be-path'
      },
      'en-US'
    );

    expect(result).toEqual([
      {
        audience: Audience.NorthAmerica,
        name: 'Americas',
        countries: [
          {
            name: 'USA',
            code: 'US',
            languages: [
              {
                name: 'English',
                code: 'en',
                locale: 'en-US',
                path: '/us-path'
              }
            ]
          }
        ]
      },
      {
        audience: Audience.Europe,
        name: 'Europe',
        countries: [
          {
            name: 'Belgium',
            code: 'BE',
            languages: [
              {
                name: 'Dutch',
                code: 'nl',
                locale: 'nl-BE',
                path: '/nl-be-path'
              }
            ]
          },
          {
            code: 'DE',
            name: 'Germany',
            languages: [
              {
                code: 'de',
                name: 'German',
                locale: 'de-DE',
                path: '/'
              }
            ]
          }
        ]
      }
    ]);
  });
});
