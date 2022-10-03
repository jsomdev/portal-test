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

export const ClosePanelButton: React.FC<IButtonProps> = props => {
  const styles: IButtonStyles = {
    label: {
      fontSize: rem(FontSizes.size20),
      fontWeight: FontWeights.regular
    },
    icon: {
      fontSize: rem(FontSizes.size20)
    }
  };

  const mergedStyles: IProcessedStyleSet<IButtonStyles> = mergeStyleSets(
    styles,
    props.styles
  );

  return <ActionButton {...props} styles={mergedStyles} />;
};
