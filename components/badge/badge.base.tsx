import React from 'react';

import { classNamesFunction } from '@fluentui/react';

import {
  BadgeProps,
  BadgeStyleProps,
  BadgeStyles,
  BadgeType
} from './badge.types';

const getClassNames = classNamesFunction<BadgeStyleProps, BadgeStyles>();
export const BadgeBase: React.FC<BadgeProps> = props => {
  const { styles, theme, text, badgeType = BadgeType.DEFAULT } = props;

  if (!theme) {
    return null;
  }
  const classNames = getClassNames(styles, { theme, badgeType });

  return <div className={classNames.root}>{text}</div>;
};
