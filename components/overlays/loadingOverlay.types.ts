import { IOverlayStyles, ISpinnerStyles, IStackStyles } from '@fluentui/react';

export interface LoadingOverlayProps {
  spinnerText: string;
}

export interface LoadingOverlayStyles {
  overlay: IOverlayStyles;
  contentWrapper: IStackStyles;
  spinner: ISpinnerStyles;
}
