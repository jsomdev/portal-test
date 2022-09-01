import { IStackStyles, Stack, useTheme } from '@fluentui/react';
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
        backgroundColor: palette.white,
        padding: rem(spacing.l1),
        boxShadow: effects.elevation8
      }
    }
  };

  return <Stack styles={styles.heroContainer}>{activeMenuItem?.text}</Stack>;
};
