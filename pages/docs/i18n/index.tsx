import React from 'react';

import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useIntl } from 'react-intl';
import ReactMarkdown from 'react-markdown';

import { NextLink } from '@components/link/nextLink';
import { getMarkdownByFileName } from '@docs/data';
import { messageIds, supportedLocales } from '@services/i18n';

interface I18NProps {
  markdown: string;
}

const I18NExamples: React.FC<Pick<I18NProps, 'markdown'>> = () => {
  const { formatMessage } = useIntl();
  const { pathname, locale } = useRouter();
  return (
    <div className="container">
      <h2>Examples</h2>
      <h4>
        Translated title:{' '}
        {formatMessage({
          id: messageIds.pages.docs.i18n.title
        })}
      </h4>
      <p>
        Translated description:{' '}
        {formatMessage({
          id: messageIds.pages.docs.i18n.description
        })}
      </p>
      <h3>Supported Locales</h3>
      {supportedLocales?.map(supportedLocale => (
        <NextLink
          key={supportedLocale}
          href={pathname}
          locale={supportedLocale}
          passHref
        >
          <a
            className={supportedLocale === locale ? 'active' : ''}
            rel="canonical"
          >
            {supportedLocale}
          </a>
        </NextLink>
      ))}
      {/* <style jsx>{`
        .container {
          padding: 2em;
        }
        a {
          margin: 8px;
          border: 2px solid #eee;
          border-radius: 4px;
          padding: 4px;
          font-size: 22px;
        }
        a.active {
          color: orange;
          border-color: orange;
        }
      `}</style> */}
    </div>
  );
};

const I18N: NextPage<I18NProps> = (props: I18NProps) => {
  return (
    <React.Fragment>
      <ReactMarkdown className={'reactMarkdown'}>
        {props.markdown}
      </ReactMarkdown>
      <I18NExamples {...props} />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<I18NProps>
> => {
  const markdown = getMarkdownByFileName('i18n', ['content']);
  return {
    props: {
      markdown: markdown.content
    }
  };
};

export default I18N;
