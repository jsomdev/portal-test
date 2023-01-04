import {
  FontWeights,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';

interface ProductSubsectionHeaderProps {
  title: string;
}

export const ProductSubsectionHeader: React.FC<
  ProductSubsectionHeaderProps
> = ({ title, children }) => {
  const { spacing } = useTheme();
  const styles: ITextStyles = {
    root: {
      fontWeight: FontWeights.semibold,
      display: 'block'
    }
  };
  return (
    <Stack
      horizontal
      verticalAlign="center"
      horizontalAlign="space-between"
      tokens={{ padding: `0 0 ${spacing.s1} 0` }}
    >
      <Text styles={styles} variant="large" as="h3">
        {title}
      </Text>
      {children}
    </Stack>
  );
};
