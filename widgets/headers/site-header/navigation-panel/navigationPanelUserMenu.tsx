import { Stack } from '@fluentui/react';
import { MenuItemProps } from '@widgets/headers/main-header/mainHeader.helper';
import React from 'react';

interface NavigationPanelUserMenuProps {
  items: MenuItemProps[];
}

export const NavigationPanelUserMenu: React.FC<
  NavigationPanelUserMenuProps
> = ({ items }) => {
  return <Stack></Stack>;
};
