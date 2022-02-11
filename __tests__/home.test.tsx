import { supportedLocales } from '@services/i18n';
import { render } from '@testing-library/react';
import { Head, IHeadProps } from '@widgets/metadata/head';
import Home, { getStaticProps, IHomeProps } from "@pages/index"
import { GetStaticPropsResult } from 'next';
import { IPageLayoutProps } from '@widgets/layouts/pageLayout';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    }
  };
});

describe('Homepage tests', () => {
  it('Correct Layout is rendered', async () => {
   
    const {}:  GetStaticPropsResult<IHomeProps & IPageLayoutProps> = await getStaticProps({});
    render(<Home categories={[]} siteMenuItems={[]} mainMenuItems={[]}/>, {
      container: document.head,

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
