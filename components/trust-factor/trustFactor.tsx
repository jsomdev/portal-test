import { Icon, Stack, Text, useTheme } from '@fluentui/react';
import { useBetweenMobileAndTablet } from '@widgets/media-queries';

export interface TrustFactorItem {
  iconName: string;
  text: string;
}

type TrustFactorProps = TrustFactorItem;

export const tempTrustFactors: TrustFactorItem[] = [
  { iconName: 'GlobeFavorite', text: 'Market Leader in Nozzles' },
  {
    iconName: 'DeliveryTruck',
    text: 'Order before 11am, out for delivery by tomorrow'
  },
  {
    text: 'Amazing Customer Service',
    iconName: 'People'
  }
];
/**
 * THIS IS TEMP FUNCTIONALITY TO CHECK OUT IN DEV
 * TODO: Make permanent or remove @Jan
 */
export const TrustFactors: React.FC = () => {
  const { spacing } = useTheme();
  const isMobileOrTablet = useBetweenMobileAndTablet();
  return (
    <Stack
      horizontal
      verticalAlign="center"
      horizontalAlign="space-around"
      tokens={{
        padding: spacing.m,
        childrenGap: spacing.m
      }}
    >
      {tempTrustFactors.slice(0, isMobileOrTablet ? 1 : 3).map(item => (
        <TrustFactor key={item.text} {...item} />
      ))}
    </Stack>
  );
};

/**
 * THIS IS TEMP FUNCTIONALITY TO CHECK OUT IN DEV
 * TODO: Make permanent or remove @Jan
 */
export const TrustFactor: React.FC<TrustFactorProps> = ({ iconName, text }) => {
  const { spacing, palette } = useTheme();
  return (
    <Stack
      horizontal
      key={text}
      verticalAlign="center"
      tokens={{ childrenGap: spacing.s1 }}
    >
      <Icon
        iconName={iconName}
        styles={{
          root: {
            color: palette.themeLight
          }
        }}
      />
      <Text
        styles={{
          root: {
            color: palette.themePrimary
          }
        }}
      >
        {text}
      </Text>
    </Stack>
  );
};
