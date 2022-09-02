import { IStackStyles, Stack, Text, useTheme } from '@fluentui/react';
import { rem } from '@utilities/rem';
import React, { useMemo } from 'react';
import { MenuItemProps } from '../mainHeader.helper';

type HeroMenuProps = {
  activeMenuItemId: string | undefined;
  menuItems: MenuItemProps[];
};

type HeroMenuStyles = {
  heroContainer: IStackStyles;
};

export const HeroMenu: React.FC<HeroMenuProps> = ({
  activeMenuItemId,
  menuItems
}) => {
  const { palette, spacing, effects } = useTheme();

  const activeMenuItem: MenuItemProps | undefined = useMemo(() => {
    return menuItems.find(item => {
      return item.id === activeMenuItemId;
    });
  }, [activeMenuItemId, menuItems]);

  const styles: HeroMenuStyles = {
    heroContainer: {
      root: {
        height: 'auto',
        minHeight: 200,
        backgroundColor: palette.white,
        padding: rem(spacing.l1),
        boxShadow: effects.elevation8
      }
    }
  };

  console.log(activeMenuItem);

  return (
    <Stack
      styles={styles.heroContainer}
      horizontal
      wrap={false}
      //tokens={{ childrenGap: rem(spacing.l1) }}
    >
      {activeMenuItem?.subItems?.slice(1).map(item => {
        return (
          <Stack
            key={item.id}
            tokens={{ childrenGap: spacing.s1 }}
            styles={{ root: { width: '20%' } }}
          >
            <Text styles={{ root: { fontWeight: 500 } }}>{item.text}</Text>
            {item.subItems && (
              <Stack tokens={{ childrenGap: spacing.s1 }}>
                {item.subItems.map(item => {
                  return <Text key={item.id}>{item.text}</Text>;
                })}
              </Stack>
            )}
          </Stack>
        );
      })}
    </Stack>
  );
};
