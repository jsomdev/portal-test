import {
  ActionButton,
  FontWeights,
  IButtonProps,
  IButtonStyles,
  IProcessedStyleSet,
  mergeStyleSets,
  useTheme
} from '@fluentui/react';

export const ClosePanelButton: React.FC<IButtonProps> = props => {
  const { fonts } = useTheme();
  const styles: IButtonStyles = {
    label: {
      fontSize: fonts.xLarge.fontSize,
      fontWeight: FontWeights.regular
    },
    icon: {
      fontSize: fonts.xLarge.fontSize
    }
  };

  const mergedStyles: IProcessedStyleSet<IButtonStyles> = mergeStyleSets(
    styles,
    props.styles
  );

  return <ActionButton {...props} styles={mergedStyles} />;
};
