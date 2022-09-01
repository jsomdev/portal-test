import { Stack, useTheme } from '@fluentui/react';
import { rem } from '@utilities/rem';
import React from 'react';
import { MenuItemProps } from '../mainHeader.helper';

type HeroMenuProps = {
  activeMenuItemId: string | undefined;
  menuItems: MenuItemProps[];
};

export const HeroMenu: React.FC<HeroMenuProps> = ({
  activeMenuItemId,
  menuItems
}) => {
  const { palette, spacing, effects } = useTheme();

  return (
    <Stack
      styles={{
        root: {
          height: 'auto',
          backgroundColor: palette.white,
          padding: rem(spacing.l1),
          boxShadow: effects.elevation8
        }
      }}
    >
      {
        menuItems.find(item => {
          return item.id === activeMenuItemId;
        })?.text
      }
    </Stack>
  );
};
