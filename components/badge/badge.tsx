import React from 'react';

import { styled } from '@fluentui/react';

import { BadgeBase } from './badge.base';
import { getBadgeStyles } from './badge.styles';
import { BadgeProps, BadgeStyleProps, BadgeStyles } from './badge.types';

/**
 * A Badge displays a label in a specific style based on its type.
 * Commonly used to make a characteristic of an item stand out.
 */
export const Badge: React.FC<BadgeProps> = styled<
  BadgeProps,
  BadgeStyleProps,
  BadgeStyles
>(BadgeBase, getBadgeStyles, undefined, {
  scope: 'Badge'
});
