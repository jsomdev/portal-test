import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';

import { getMarkdownByFileName } from '@docs/data';

interface ProjectSetupProps {
  markdown: string;
}

const ProjectSetup: NextPage<ProjectSetupProps> = (
  props: ProjectSetupProps
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
  GetStaticPropsResult<ProjectSetupProps>
> => {
  const markdown = getMarkdownByFileName('project-setup', ['content']);
  return {
    props: {
      markdown: markdown.content
    }
  };
};

export default ProjectSetup;
