import React from 'react';

import { ITextStyles, Text, mergeStyleSets, useTheme } from '@fluentui/react';

interface PillCountProps {
  value: number;
  styles?: ITextStyles;
}

export const PillCount: React.FC<PillCountProps> = ({
  value,
  styles: customStyles
}) => {
  const { palette } = useTheme();
  const styles: ITextStyles = {
    root: {
      backgroundColor: palette.themePrimary,
      borderRadius: '16px',
      height: '16px',
      minWidth: '16px',
      paddingLeft: '2px',
      paddingRight: '2px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '11px',
      lineHeight: '11px',
      color: palette.white
    }
  };

  const mergedRootStyles = mergeStyleSets(styles, customStyles);

  return <Text styles={mergedRootStyles}>{value >= 100 ? '99+' : value}</Text>;
};
