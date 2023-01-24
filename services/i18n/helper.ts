import { FlaggedEnum } from '@services/portal-api/flaggedEnum';
import { Audience } from '@services/portal-api/models/AudienceFlags';
import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';

import { en } from './en';
import { nl } from './nl';
import regions from './regions';
import { Messages, Region } from './types';

export function getAudienceLocale(contextLocale: string | undefined): string {
  if (!contextLocale || contextLocale === 'default') {
    return 'en-us';
  }
  return contextLocale;
}

export function getMessages(locale?: string, exact: boolean = false): Messages {
  const language: string | undefined = exact ? locale : locale?.split('-')?.[0];
  if (language) {
    switch (language) {
      case 'nl':
        return nl;
    }
  }

  return en;
}
// TODO: Handle fallback for different environments
export function getAudience(locale: string | undefined): Audience {
  const countryCode: string | undefined = locale?.split('-')[1];
  if (!countryCode) {
    return Audience.NorthAmerica;
  }

  const region: Region | undefined = supportedRegions.find(
    region =>
      !!region.countries.find(
        country => country.code.toUpperCase() === countryCode.toUpperCase()
      )
  );

  if (!region) {
    return FlaggedEnum.create<Audience>(Audience, Audience.NorthAmerica);
  }

  return FlaggedEnum.create<Audience>(Audience, region.audience);
}

/**
 * // === Internal helper function to recalculate the supported locales based on the regions file === 
 * function getSupportedLocales(regions: Region[]): string[] {
  const locales: string[] = [];

  regions.forEach(region => {
    region.countries.forEach(country => {
      country.languages.forEach(language => {
        locales.push(`${language.code}-${country.code}`);
      });
    });
  });

  return locales;
}*/

export const supportedRegions: Region[] = regions as unknown as Region[];

export const supportedLocales: string[] | undefined =
  ENVIRONMENT_VARIABLES.supportedLocales;

export const defaultLanguage: string = 'en';
