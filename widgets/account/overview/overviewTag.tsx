import {
  FontSizes,
  IIconProps,
  IIconStyles,
  IStackStyles,
  Icon,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';

interface OverviewTagProps {
  iconProps?: IIconProps;
  text: string;
}

interface OverviewTagStyles {
  container: IStackStyles;
  icon: IIconStyles;
}

export const OverviewTag: React.FC<OverviewTagProps> = ({
  text,
  iconProps
}) => {
  const { spacing, palette, effects } = useTheme();

  const styles: OverviewTagStyles = {
    container: {
      root: {
        backgroundColor: palette.neutralLighterAlt,
        padding: `${spacing.s2} ${spacing.m}`,
        borderRadius: rem(effects.roundedCorner4),
        height: rem(22)
      }
    },
    icon: {
      root: {
        fontSize: FontSizes.size12,
        color: palette.green
      }
    }
  };

  return (
    <Stack
      styles={styles.container}
      tokens={{ childrenGap: spacing.s1 }}
      verticalAlign="center"
      horizontal
    >
      <Icon iconName="tag" {...iconProps} styles={styles.icon} />
      <Text variant="medium">{text}</Text>
    </Stack>
  );
};
