import { IStackItemStyles, IStackStyles, ITextStyles } from '@fluentui/react';

export interface ErrorPageProps {
  page: string;
  error: Error;
}

export interface ErrorPageStyles {
  root: IStackStyles;
  bodyWrapper: IStackStyles;
  title: ITextStyles;
  description: ITextStyles;
  actionsWrapper: IStackStyles;
  action: IStackItemStyles;
  actionTitle: ITextStyles;
  actionDescription: ITextStyles;
  recentlyViewedWrapper: IStackItemStyles;
}
