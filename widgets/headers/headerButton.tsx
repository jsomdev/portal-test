import React from 'react';

import {
  ActionButton,
  FontSizes,
  FontWeights,
  IButtonProps,
  IButtonStyles,
  IconButton,
  IProcessedStyleSet,
  mergeStyleSets
} from '@fluentui/react';
import { rem } from '@utilities/rem';

import { HeaderButtonType } from './headerButton.types';

interface HeaderButtonProps extends IButtonProps {
  type?: HeaderButtonType;
}

interface HeaderButtonStyles {
  root: IButtonStyles;
}

export type HeaderButtonType = 'actionButton' | 'iconButton';


export const HeaderButton: React.FC<IHeaderButtonProps> = props => {
  const defaultStyles: IHeaderButtonStyles = {
    root: {
      label: {
        fontSize: FontSizes.large,
        letterSpacing: rem(0.38),
        fontWeight: FontWeights.regular
      },
      icon: {
        fontSize: FontSizes.large
      }
    }
  };
  const mergedStyles: IProcessedStyleSet<IButtonStyles> = mergeStyleSets(
    defaultStyles.root,
    props.styles
  );

  if (props.type === 'actionButton') {
    return <ActionButton {...props} styles={mergedStyles} />;
  }
  return <IconButton {...props} styles={mergedStyles} />;
};
