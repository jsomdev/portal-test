import {
  FontSizes,
  FontWeights,
  IButtonProps,
  IButtonStyles,
  PrimaryButton,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';

type FilterResultsButtonProps = Pick<IButtonProps, 'onClick' | 'text'>;

export const FilterResultsButton: React.FC<FilterResultsButtonProps> = ({
  text,
  onClick
}) => {
  const { spacing } = useTheme();

  const styles: IButtonStyles = {
    root: {
      padding: rem(spacing.l1)
    },
    label: {
      fontSize: rem(FontSizes.large),
      fontWeight: FontWeights.regular
    },
    icon: {
      fontSize: rem(FontSizes.large)
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
