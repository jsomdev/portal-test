import {
  IButtonStyles,
  ILabelStyles,
  ITooltipHostStyles
} from '@fluentui/react';
import { ReactQueryStatus } from '@services/react-query/types';

export type PriceLabelSize = 'small' | 'medium' | 'large';
export interface PriceLabelProps {
  primaryText: string;
  secondaryText?: string | undefined;
  status: ReactQueryStatus;
  suffix?: string | undefined;
  tooltipText?: string | undefined;
  // defaults to "medium"
  size?: PriceLabelSize;
  direction?: 'horizontal' | 'vertical';
}

export interface PriceLabelStyles {
  tooltipHost: Partial<ITooltipHostStyles>;
  suffix: ILabelStyles;
  signInLink: IButtonStyles;
}
