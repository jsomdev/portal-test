import React from 'react';

import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useIntl } from 'react-intl';
import ReactMarkdown from 'react-markdown';

import { getMarkdownByFileName } from '@docs/data';
import { messageIds } from '@services/i18n';
import { Head } from '@widgets/metadata';

interface UserInterfacesProps {
  markdown: string;
}

const UserInterfaces: NextPage<UserInterfacesProps> = (
  props: UserInterfacesProps
) => {
  const { pathname } = useRouter();
  const { formatMessage } = useIntl();
  return (
    <div>
      <Head
        pathname={pathname}
        title={formatMessage({
          id: messageIds.pages.docs.userInterfaces.title
        })}
        description={formatMessage({
          id: messageIds.pages.docs.userInterfaces.description
        })}
      />
      <ReactMarkdown className={'reactMarkdown'}>
        {props.markdown}
      </ReactMarkdown>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<UserInterfacesProps>
> => {
  const markdown = getMarkdownByFileName('user-interfaces', ['content']);
  return {
    props: {
      markdown: markdown.content
    }
  };
};

export default UserInterfaces;
