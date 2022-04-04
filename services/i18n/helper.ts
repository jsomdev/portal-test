import { MultilingualString } from '@services/portal-api';

import { en, nl } from './';
import { Messages } from './types';

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

export function formatMultilingualString(
  object: MultilingualString | null | undefined,
  locale: string | undefined
): string {
  const multilingualKey: string = getMultilingualKey(locale, object);

  if (object) {
    return object[multilingualKey];
  }
  return '';
}
export function getMultilingualKey(
  locale?: string,
  obj?: MultilingualString | null | undefined
): string {
  const defaultKey = defaultLocale;
  const language: string | undefined = locale?.split('-')[0];

  if (language) {
    if (!obj) {
      return language;
    }
    if (obj[language]) {
      return language;
    }
  }

  return defaultKey;
}
export const supportedLocales: string[] | undefined =
  process.env.NEXT_PUBLIC_SUPPORTED_LOCALES?.split(',');
export const defaultLocale: string = 'en';
