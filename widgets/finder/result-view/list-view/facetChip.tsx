import { ITextStyles, Stack, Text, useTheme } from '@fluentui/react';

interface FacetChipStyles {
  root: ITextStyles;
}

interface FacetChipProps {
  code: string;
  value: string;
}
// TODO: move to better folder
export const FacetChip: React.FC<FacetChipProps> = ({ value, code }) => {
  const { palette } = useTheme();

  const styles: FacetChipStyles = {
    root: {
      root: {
        color: palette.neutralPrimaryAlt,
        borderBottom: `1px dashed ${palette.neutralPrimaryAlt}`,
        display: 'inline',
        '&:hover': {
          cursor: 'pointer',
          borderBottomStyle: `solid`
        }
      }
    }
  };
  return (
    <Stack.Item>
      <Text title={code} styles={styles.root}>
        {value}
      </Text>
    </Stack.Item>
  );
};
