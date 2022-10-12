import React from 'react';

import {
  ActionButton,
  FontSizes,
  FontWeights,
  IButtonProps,
  IButtonStyles,
  IProcessedStyleSet,
  mergeStyleSets
} from '@fluentui/react';
import { rem } from '@utilities/rem';
import { mediaQueryFrom } from '@widgets/media-queries';

export const SiteHeaderButton: React.FC<IButtonProps> = props => {
  const styles: IButtonStyles = {
    label: {
      fontSize: FontSizes.size20,
      fontWeight: FontWeights.regular
    },
    icon: {
      fontSize: FontSizes.size20
    },
    flexContainer: {
      width: '100%',
      position: 'relative'
    },
    ...mediaQueryFrom('tablet', {
      label: {
        fontSize: FontSizes.medium,
        letterSpacing: rem(0.38),
        fontWeight: FontWeights.regular
      },
      icon: {
        fontSize: FontSizes.large
      }
    })
  };

  const mergedStyles: IProcessedStyleSet<IButtonStyles> = mergeStyleSets(
    styles,
    props.styles
  );

  return <ActionButton {...props} styles={mergedStyles} />;
};
