import React from 'react';

import {
  Messages,
  defaultLanguage,
  en,
  getMessages,
  nl,
  supportedLocales
} from '@services/i18n';
import { render } from '@testing-library/react';
import { Head, IHeadProps } from '@widgets/metadata/head';

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
      !supportedLocales?.includes('nl-BE') ||
      !supportedLocales.includes('en-US')
    ) {
      throw new Error(
        'en-US and nl-BE need to be supported locales for this test to pass. Change tests if this should not be the case'
      );
    }
    const actualMessagesNL: Messages = getMessages('nl-BE');
    const expectedMessagesNL: Messages = nl;
    expect(actualMessagesNL.pages.docs.i18n.title).toBe(
      expectedMessagesNL.pages.docs.i18n.title
    );
    expect(actualMessagesNL.pages.docs.i18n.description).toBe(
      expectedMessagesNL.pages.docs.i18n.description
    );

    const actualMessagesEN: Messages = getMessages('en-US');
    const expectedMessagesEN: Messages = en;
    expect(actualMessagesEN.pages.docs.i18n.title).toBe(
      expectedMessagesEN.pages.docs.i18n.title
    );
    expect(actualMessagesEN.pages.docs.i18n.description).toBe(
      expectedMessagesEN.pages.docs.i18n.description
    );
  });

  it('<Head> renders alternate links correctly', async () => {
    const pathname: string = 'testing';
    const title: string = 'test title';
    const description: string = 'test description';
    const headProps: IHeadProps = {
      pathname,
      title,
      description
    };
    render(<Head {...headProps} />, {
      container: document.head
    });

    const links: HTMLLinkElement[] = Array.from(
      document.getElementsByTagName('link')
    );

    const alternateLinks: HTMLLinkElement[] = links.filter(
      link => link.rel === 'alternate'
    );

    expect(alternateLinks.length).toBe(supportedLocales?.length);

    supportedLocales?.forEach(locale => {
      expect(links.filter(link => link.hreflang === locale).length).toEqual(1);
      expect(
        links.filter(
          link =>
            link.href ===
            `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/${pathname}`
        )
      );
    });
  });
});
