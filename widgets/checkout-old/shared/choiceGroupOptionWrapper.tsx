import React from 'react';

import {
  IChoiceGroupOption,
  IChoiceGroupOptionProps,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';

export const ChoiceGroupOptionContainer: React.FC<{
  props: IChoiceGroupOption | IChoiceGroupOptionProps | undefined;
}> = ({ props, children }) => {
  const { spacing, palette, semanticColors, effects } = useTheme();
  //TODO ward: check why I have to do this...
  if (props === undefined || !('checked' in props)) {
    return <div>This should not happen</div>;
  }
  const styles: IStackStyles = {
    root: {
      border: `1px solid ${
        props?.checked ? palette.themeTertiary : semanticColors.variantBorder
      }`,
      padding: `${spacing.m}`,
      borderRadius: effects.roundedCorner2
    }
  };
  return <Stack styles={styles}>{children}</Stack>;
};
