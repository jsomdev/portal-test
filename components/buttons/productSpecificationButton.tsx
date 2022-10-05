import React from 'react';

import {
  DirectionalHint,
  ITextStyles,
  Text,
  TooltipHost,
  useTheme
} from '@fluentui/react';

import { ProductSpecificationButtonProps } from './productSpecificationButton.types';

// What's in a name o.O
// Temporary Component that can be used as a subtle actionButton.
// Currently intended for the characteristic of product on a productListItem
// Future: clicking this will render a callout based on a callback?
// eslint-disable-next-line max-len
export const ProductKeySpecificationsButton: React.FC<
  ProductSpecificationButtonProps
> = ({ onClick, text, tooltipValue }) => {
  const { palette, fonts } = useTheme();

  const textStyles: ITextStyles = {
    root: {
      height: 20,
      ...fonts.smallPlus,
      margin: 0,
      lineHeight: '140%',
      borderBottom: `1px dashed ${palette.neutralSecondary}`,
      paddingRight: '2px',
      color: palette.neutralSecondary,
      cursor: 'pointer',
      selectors: {
        '&:hover': {
          borderBottomStyle: 'solid'
        }
      }
    }
  };

  return (
    <TooltipHost
      content={tooltipValue}
      hidden={tooltipValue === text}
      calloutProps={{ gapSpace: 0 }}
      directionalHint={DirectionalHint.topCenter}
    >
      <Text styles={textStyles} onClick={onClick}>
        {text}
      </Text>
    </TooltipHost>
  );
};
