import React from 'react';

import {
  ActionButton,
  FontWeights,
  IButtonProps,
  IButtonStyles,
  IProcessedStyleSet,
  mergeStyleSets,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';
import { mediaQueryFrom } from '@widgets/media-queries';

export const SiteHeaderButton: React.FC<IButtonProps> = props => {
  const { fonts } = useTheme();
  const styles: IButtonStyles = {
    label: {
      fontSize: fonts.xLarge.fontSize,
      fontWeight: FontWeights.regular
    },
    icon: {
      fontSize: fonts.xLarge.fontSize
    },
    flexContainer: {
      width: '100%',
      position: 'relative'
    },
    ...mediaQueryFrom('tablet', {
      label: {
        fontSize: fonts.medium.fontSize,
        letterSpacing: rem(0.38),
        fontWeight: FontWeights.regular
      },
      icon: {
        fontSize: fonts.large.fontSize
      }
    })
  };

  const mergedStyles: IProcessedStyleSet<IButtonStyles> = mergeStyleSets(
    styles,
    props.styles
  );

  return <ActionButton {...props} styles={mergedStyles} />;
};
