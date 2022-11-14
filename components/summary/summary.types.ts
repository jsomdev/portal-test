import { ReactNode } from 'react';

import { IStackItemStyles, IStackStyles, ITextStyles } from '@fluentui/react';

export interface SummaryProps {
  onRenderDetails: () => ReactNode;
  onRenderTopSection?: () => ReactNode;
  onRenderActions?: () => ReactNode;
}

export interface SummaryStyles {
  wrapper: IStackStyles;
  contentWrapper: IStackStyles;
  headerText: ITextStyles;
  detailsText: ITextStyles;
  actionsWrapper: IStackItemStyles;
  topSection: IStackStyles;
}
