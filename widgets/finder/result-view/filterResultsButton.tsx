import {
  FontWeights,
  IButtonProps,
  IButtonStyles,
  PrimaryButton,
  useTheme
} from '@fluentui/react';

type FilterResultsButtonProps = Pick<IButtonProps, 'onClick' | 'text'>;

export const FilterResultsButton: React.FC<FilterResultsButtonProps> = ({
  text,
  onClick
}) => {
  const { spacing, fonts } = useTheme();

  const styles: IButtonStyles = {
    root: {
      padding: spacing.l1
    },
    label: {
      fontSize: fonts.large.fontSize,
      fontWeight: FontWeights.regular
    },
    icon: {
      fontSize: fonts.large.fontSize
    }
  };
  return (
    <PrimaryButton
      styles={styles}
      onClick={onClick}
      iconProps={{ iconName: 'Filter' }}
      text={text}
    />
  );
};
