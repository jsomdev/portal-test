import { defaultLanguage } from '@services/i18n';
import { MultilingualString } from '@services/portal-api';

import { ENVIRONMENT_VARIABLES } from './environmentVariables';

export class MultilingualStringHelper {
  /**
   * Removes all language keys from the given MultilingualString except for the default language (en) and the language specified by the given locale.
   * If the value for the default language is the same as the value for the language specified by the given locale, only the default language is kept.
   * Returns null if the value is null or undefined, or if the locale is null or undefined.
   *
   * @param {MultilingualString | null | undefined} value - The MultilingualString to strip.
   * @param {string | undefined} locale - The locale to keep in the returned MultilingualString.
   * @returns {MultilingualString | null} The stripped MultilingualString, or null if the value is null or undefined, or if the locale is null or undefined.
   */
  static strip(
    value: MultilingualString | null | undefined,
    locale: string | undefined
  ): MultilingualString | null {
    if (!value || !locale) {
      return null;
    }
    const allKeys = Object.keys(value);

    const languageForLocale: string =
      MultilingualStringHelper.getMultilingualKey(
        value,
        MultilingualStringHelper.getLanguage(locale)
      );

    const isValueEqualForDefaultLanguage =
      value.en === value[languageForLocale];

    const keysToKeep = isValueEqualForDefaultLanguage
      ? [defaultLanguage]
      : [defaultLanguage, languageForLocale];

    const strippedValue = { ...value };
    allKeys
      .filter(key => !keysToKeep.includes(key))
      .map(key => delete strippedValue[key]);

    return strippedValue;
  }

  /**
   * Function that extracts the language part from a locale string.
   * @param locale string that the language needs to be extracted from (usually 5 characters like 'en-us', 'nl-be')
   * @returns part of the locale that represents the language.
   */
  static getLanguage(locale?: string): string {
    const language = (locale || 'en-us')?.split('-')[0];
    return language || defaultLanguage;
  }

  /**
   * Function to determine the property key that needs to be used.
   * @param value MultilingualString
   * @param forLanguage String that  represents which language we want the key for
   * @returns The property key based on the determined language.
   * Will default to 'en' as key if no value is available for the desired language key.
   */
  static getMultilingualKey(
    value: MultilingualString | null | undefined,
    forLanguage: string | undefined
  ): string {
    if (forLanguage) {
      if (!value) {
        return forLanguage;
      }
      if (value[forLanguage]) {
        return forLanguage;
      }
    }

    return defaultLanguage;
  }
}
