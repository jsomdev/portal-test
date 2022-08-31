import { ActionButton, IButtonStyles, Stack, useTheme } from '@fluentui/react';
import { MenuItemProps } from '@widgets/headers/main-header/mainHeader.helper';
import React from 'react';

interface NavigationPanelSiteMenuProps {
  items: MenuItemProps[];
}

export const NavigationPanelSiteMenu: React.FC<
  NavigationPanelSiteMenuProps
> = ({ items }) => {
  const { spacing } = useTheme();

  const styles: IButtonStyles = {
    root: {
      padding: `${spacing.l1} ${spacing.m}`
    }
  };

  return (
    <Stack>
      {items.map(item => {
        return (
          <Stack key={`site-menu-item-${item.text}`}>
            <ActionButton {...item} styles={styles} />
          </Stack>
        );
      })}
    </Stack>
  );
};
