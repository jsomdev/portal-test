import url from 'url';

import { STATIC_IMAGES } from '@public/media/images';
import { Country, supportedLocales, supportedRegions } from '@services/i18n';
import {
  CountryWithPaths,
  LanguageWithPath,
  RegionWithPaths
} from '@widgets/headers/site-header/language-menu/languageMenu.types';
import { getPathWithLocale } from '@widgets/page/page.helper';
import { LocalePaths } from '@widgets/page/page.types';

export function getCountryImage(code: string): string | undefined {
  const key = `${code.toLowerCase()}Flag` as keyof typeof STATIC_IMAGES.flags;
  const image = STATIC_IMAGES.flags[key];
  return image;
}

const removeUnsupportedLanguagesFromCountry = (country: Country): Country => {
  const supportedLanguagesForCountry = country.languages.filter(language => {
    const locale = language.code + '-' + country.code.toUpperCase();
    return supportedLocales?.some(
      supportedLocale => supportedLocale === locale
    );
  });
  return {
    ...country,
    languages: supportedLanguagesForCountry
  };
};

const mapToCountryWithPaths = (
  country: Country,
  localePaths: LocalePaths,
  defaultLocale: string
): CountryWithPaths => {
  const countryWithPaths: CountryWithPaths = {
    name: country.name,
    code: country.code,
    languages: country.languages.map<LanguageWithPath>(language => {
      const locale = language.code + '-' + country.code.toUpperCase();
      const path = getPathWithLocale(locale, defaultLocale, localePaths);
      return {
        name: language.name,
        code: language.code,
        locale: locale,
        path: url.format(
          Object.assign(
            new URL(path.pathname || '/', process.env.NEXT_PUBLIC_BASE_URL),
            path
          )
        )
      };
    })
  };
  return countryWithPaths;
};

const removeCountriesWithoutLanguages = (
  country: CountryWithPaths
): country is CountryWithPaths => country.languages.length > 0;

export const getSupportedRegionsWithPaths = (
  localePaths: LocalePaths,
  defaultLocale: string
): RegionWithPaths[] => {
  return supportedRegions
    .map(region => {
      const supportedCountries = region.countries
        .map(removeUnsupportedLanguagesFromCountry)
        .map(country =>
          mapToCountryWithPaths(country, localePaths, defaultLocale)
        )
        .filter(removeCountriesWithoutLanguages);
      return {
        ...region,
        countries: supportedCountries
      };
    })
    .filter(region => region.countries.length > 0);
};
