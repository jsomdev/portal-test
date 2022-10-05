import { FontWeights } from '@fluentui/react';

import { BadgeStyleProps, BadgeStyles, BadgeType } from './badge.types';

export const getBadgeStyles = (props: BadgeStyleProps): BadgeStyles => {
  const {
    badgeType,
    theme: { palette, spacing, effects }
  } = props;

  const getBackgroundColor = (type: BadgeType): string | undefined => {
    switch (type) {
      case BadgeType.SUCCESS:
        return palette.greenLight;
      case BadgeType.DEFAULT:
        return palette.neutralLight;
      case BadgeType.WARNING:
        return palette.yellowLight;
      case BadgeType.ERROR:
        return palette.red;
      default:
        return undefined;
    }
  };
  const getColor = (type: BadgeType): string | undefined => {
    switch (type) {
      case BadgeType.SUCCESS:
        return palette.greenDark;
      case BadgeType.DEFAULT:
        return palette.neutralDark;
      case BadgeType.WARNING:
        return palette.yellowDark;
      case BadgeType.ERROR:
        return palette.redDark;
      default:
        return undefined;
    }
  };
  const getFontWeight = (type: BadgeType) => {
    switch (type) {
      case BadgeType.SUCCESS:
        return FontWeights.semibold;
      case BadgeType.DEFAULT:
      default:
        return undefined;
    }
  };

  return {
    root: {
      background: getBackgroundColor(badgeType),
      color: getColor(badgeType),
      borderRadius: effects.roundedCorner2,
      padding: `${spacing.s2} ${spacing.s1}`,
      fontWeight: getFontWeight(badgeType)
    }
  };
};
