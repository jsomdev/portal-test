import {
  IButtonStyles,
  IStackStyles,
  ITextStyles,
  ITooltipHostStyles,
} from '@fluentui/react';

export interface CartSummaryActionsStyles {
  request: IStackStyles;
  primaryButton: IButtonStyles;
  defaultButton: IButtonStyles;
  tooltipHost: ITooltipHostStyles;
  calloutAnchor: IButtonStyles;
  callout: IStackStyles;
}

export interface CartSummaryDetailStyles {
  totalText: ITextStyles;
  total: IStackStyles;
}
