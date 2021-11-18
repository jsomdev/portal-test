import React from 'react';

import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from 'next';
import { useRouter } from 'next/dist/client/router';
import { useIntl } from 'react-intl';
import ReactMarkdown from 'react-markdown';

import { getMarkdownByFileName } from '@docs/data';
import { messageIds } from '@services/i18n';
import { Head } from '@widgets/metadata';

interface ITestingProps {
  markdown: string;
}

const Testing: NextPage<ITestingProps> = (props: ITestingProps) => {
  const { pathname } = useRouter();
  const { formatMessage } = useIntl();
  return (
    <div>
      <Head
        pathname={pathname}
        title={formatMessage({ id: messageIds.pages.docs.testing.title })}
        description={formatMessage({ id: messageIds.pages.docs.testing.description })}
      />
      <ReactMarkdown className={'reactMarkdown'}>{props.markdown}</ReactMarkdown>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<ITestingProps>> => {
  const markdown = getMarkdownByFileName('testing', ['content']);
  return {
    props: {
      markdown: markdown.content,
    },
  };
};

export default Testing;
