import { IStyle, IStyleFunctionOrObject, ITheme } from '@fluentui/react';

/**
 * Identifies the type of the badge.
 * Based on the BadgeType, different styles will be applied.
 */
export enum BadgeType {
  DEFAULT,
  WARNING,
  ERROR,
  SUCCESS
}
export interface BadgeProps {
  styles?: IStyleFunctionOrObject<BadgeStyleProps, BadgeStyles>;
  theme?: ITheme;
  badgeType?: BadgeType;
  // Text that should be displayed in the center of the badge
  text: string;
}

export interface BadgeStyleProps {
  theme: ITheme;
  badgeType: BadgeType;
}

export interface BadgeStyles {
  root?: IStyle;
}
