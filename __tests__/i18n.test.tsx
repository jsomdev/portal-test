import {
  Messages,
  defaultLanguage,
  en,
  getMessages,
  nl,
  supportedLocales
} from '@services/i18n';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    }
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
    if (
      !supportedLocales?.includes('nl-be') ||
      !supportedLocales.includes('en-us')
    ) {
      throw new Error(
        'en-us and nl-be need to be supported locales for this test to pass. Change tests if this should not be the case'
      );
    }
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
