import { ITextStyles, ITooltipHostStyles } from '@fluentui/react';

export interface ProductImageDisclaimerTooltipProps {
  messageText?: string;
}

export interface ProductImageDisclaimerStyles {
  tooltipHost: ITooltipHostStyles;
  disclaimerText: ITextStyles;
}
