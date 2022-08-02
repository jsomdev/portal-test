import { MultilingualString } from '@services/portal-api';
import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';

export class MultilingualStringFormatter {
  protected language: string;
  private defaultLanguage: 'en' = 'en';
  constructor(locale?: string) {
    this.language = this.getLanguage(locale);
  }

  private getLanguage(locale?: string): string {
    const language = (locale || ENVIRONMENT_VARIABLES.defaultLocale)?.split(
      '-'
    )[0];
    return language || this.defaultLanguage;
  }

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

  format(value: MultilingualString | null | undefined): string {
    const key: string = this.getMultilingualKey(value);

    if (value) {
      return value[key];
    }
    return '';
  }
}
