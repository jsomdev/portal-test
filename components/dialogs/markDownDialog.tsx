import ReactMarkdown from 'react-markdown';

import { Dialog, IDialogProps } from '@fluentui/react';

interface MarkdownDialogProps {
  dialogProps: Partial<IDialogProps>;
  markdownSource: string;
  title: string;
}
/**
 * Reusable component to render a Dialog with Markdown inside
 */
export const MarkDownDialog: React.FC<MarkdownDialogProps> = ({
  dialogProps,
  markdownSource,
  title
}) => {
  return (
    <Dialog
      dialogContentProps={{ showCloseButton: true, title }}
      {...dialogProps}
    >
      <ReactMarkdown className="reactMarkdown">{markdownSource}</ReactMarkdown>
    </Dialog>
  );
};
