import { FontWeights, ITextStyles, Text, useTheme } from '@fluentui/react';

interface ProductSubsectionHeaderProps {
  title: string;
}

export const ProductSubsectionHeader: React.FC<
  ProductSubsectionHeaderProps
> = ({ title }) => {
  const { spacing } = useTheme();
  const styles: ITextStyles = {
    root: {
      fontWeight: FontWeights.semibold,
      marginBottom: spacing.s1,
      display: 'block'
    }
  };
  return (
    <Text styles={styles} variant="large" as="h3">
      {title}
    </Text>
  );
};
