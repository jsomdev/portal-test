import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';

import { getMarkdownByFileName } from '@docs/data';

interface UserInterfacesProps {
  markdown: string;
}

const UserInterfaces: NextPage<UserInterfacesProps> = (
  props: UserInterfacesProps
) => {
  return (
    <div>
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
