import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';

import { getMarkdownByFileName } from '@docs/data';

interface TestingProps {
  markdown: string;
}

const Testing: NextPage<TestingProps> = (props: TestingProps) => {
  return (
    <div>
      <ReactMarkdown className={'reactMarkdown'}>
        {props.markdown}
      </ReactMarkdown>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<TestingProps>
> => {
  const markdown = getMarkdownByFileName('testing', ['content']);
  return {
    props: {
      markdown: markdown.content
    }
  };
};

export default Testing;
