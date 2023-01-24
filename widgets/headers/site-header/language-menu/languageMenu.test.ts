import { Audience } from '@services/portal-api/models/AudienceFlags';
import { getSupportedRegionsWithPaths } from '@widgets/headers/site-header/language-menu/languageMenuCountry.helper';

import { RegionWithPaths } from './languageMenu.types';

jest.mock('@services/i18n', () => {
  const originalModule = jest.requireActual('@services/i18n');

  return {
    __esModule: true,
    ...originalModule,
    supportedLocales: ['en-us', 'nl-be', 'de-de']
  };
});

describe('languageMenu', () => {
  it('getSupportedRegionsWithPaths filters and returns correct paths even if localePath is missing', () => {
    const result: RegionWithPaths[] = getSupportedRegionsWithPaths(
      {
        'en-us': 'us-path',
        'nl-be': 'nl-be-path'
      },
      'en-us'
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
                locale: 'en-us',
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
                locale: 'nl-be',
                path: '/nl-be/nl-be-path'
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
                locale: 'de-de',
                path: '/de-de'
              }
            ]
          }
        ]
      }
    ]);
  });
});
