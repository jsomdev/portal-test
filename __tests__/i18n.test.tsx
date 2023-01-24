import {
  Messages,
  defaultLanguage,
  getMessages,
  supportedLocales
} from '@services/i18n';
import { en } from '@services/i18n/en';
import { nl } from '@services/i18n/nl';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    }
  };
});

jest.mock('@services/i18n', () => {
  const originalModule = jest.requireActual('@services/i18n');
  return {
    __esModule: true,
    ...originalModule,
    supportedLocales: ['default', 'en-us', 'en-gb', 'nl-be'],
    defaultLocale: 'default',
    defaultLanguage: 'en'
  };
});

describe('I18N Tests', () => {
  it('getMessages returns the default messages if locale is not supported', () => {
    const notSupportedLocale: string = 'not-Supported';
    if (supportedLocales?.includes(notSupportedLocale)) {
      throw new Error(
        'The locale you defined is supported. notSupportedLocale should not exist in the list of supported locales'
      );
    }
    const actualMessages = getMessages(notSupportedLocale);
    const expectedMessages = getMessages(defaultLanguage);
    expect(actualMessages.pages.docs.i18n.title).toBe(
      actualMessages.pages.docs.i18n.title
    );
    expect(expectedMessages.pages.docs.i18n.description).toBe(
      expectedMessages.pages.docs.i18n.description
    );
  });

  it('getMessages returns the messages for a supported locale correctly', () => {
    const actualMessagesNL: Messages = getMessages('nl-be');
    const expectedMessagesNL: Messages = nl;
    expect(actualMessagesNL.pages.docs.i18n.title).toBe(
      expectedMessagesNL.pages.docs.i18n.title
    );
    expect(actualMessagesNL.pages.docs.i18n.description).toBe(
      expectedMessagesNL.pages.docs.i18n.description
    );

    const actualMessagesEN: Messages = getMessages('en-us');
    const expectedMessagesEN: Messages = en;
    expect(actualMessagesEN.pages.docs.i18n.title).toBe(
      expectedMessagesEN.pages.docs.i18n.title
    );
    expect(actualMessagesEN.pages.docs.i18n.description).toBe(
      expectedMessagesEN.pages.docs.i18n.description
    );
  });
});
