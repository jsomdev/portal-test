import { MultilingualString } from '@services/portal-api';
import { MultilingualStringHelper } from '@utilities/multilingualStringHelper';

/**
 * Helper class for formatting MultilingualStrings (Data-Driven Formatting).
 * Based on the locale (e.g.: 'en-US') it will format values using the appropriate property on the MultilingualString Object.
 */
export class MultilingualStringFormatter {
  protected language: string;
  constructor(locale?: string) {
    this.language = MultilingualStringHelper.getLanguage(locale);
  }

  /**
   * Function that formats a MultilingualString to the correct translation
   * @param value MultilingualString
   * @returns The translated string
   */
  format(value: MultilingualString | null | undefined): string {
    const key: string = MultilingualStringHelper.getMultilingualKey(
      value,
      this.language
    );

    if (value) {
      return value[key];
    }
    return '';
  }
}
