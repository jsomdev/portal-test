import React from 'react';

import {
  IChoiceGroupOption,
  IChoiceGroupOptionProps,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';

export const ChoiceGroupOptionContainer: React.FC<{
  props: (IChoiceGroupOption & IChoiceGroupOptionProps) | undefined;
}> = ({ props, children }) => {
  const { spacing, palette, semanticColors, effects } = useTheme();
  const isChecked =
    props === undefined || !('checked' in props) ? false : props.checked;
  const styles: IStackStyles = {
    root: {
      border: `1px solid ${
        isChecked ? palette.themeTertiary : semanticColors.variantBorder
      }`,
      padding: `${spacing.m}`,
      borderRadius: effects.roundedCorner2
    }
  };
  return <Stack styles={styles}>{children}</Stack>;
};
