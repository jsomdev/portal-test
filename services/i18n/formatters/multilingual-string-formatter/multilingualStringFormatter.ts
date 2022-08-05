import { MultilingualString } from '@services/portal-api';
import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';

/**
 * Helper class for formatting MultilingualStrings (Data-Driven Formatting).
 * Based on the locale (e.g.: 'en-US') it will format values using the appropriate property on the MultilingualString Object.
 */
export class MultilingualStringFormatter {
  protected language: string;
  private defaultLanguage: 'en' = 'en';
  constructor(locale?: string) {
    this.language = this.getLanguage(locale);
  }

  /**
   * Function that extracts the language part from a locale string.
   * @param locale string that the language needs to be extracted from (usually 5 characters like 'en-US', 'nl-BE')
   * @returns part of the locale that represents the language.
   */
  private getLanguage(locale?: string): string {
    const language = (locale || ENVIRONMENT_VARIABLES.defaultLocale)?.split(
      '-'
    )[0];
    return language || this.defaultLanguage;
  }

  /**
   * Function to determine the property key that needs to be used.
   * @param value MultilingualString
   * @returns The property key based on the determined language.
   * Will default to the default language as key if no value is available for the desired language key.
   */
  private getMultilingualKey(
    value?: MultilingualString | null | undefined
  ): string {
    if (this.language) {
      if (!value) {
        return this.language;
      }
      if (value[this.language]) {
        return this.language;
      }
    }

    return this.defaultLanguage;
  }

  /**
   * Function that formats a MultilingualString to the correct translation
   * @param value MultilingualString
   * @returns The translated string
   */
  format(value: MultilingualString | null | undefined): string {
    const key: string = this.getMultilingualKey(value);

    if (value) {
      return value[key];
    }
    return '';
  }
}
