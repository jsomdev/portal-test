import React from 'react';

import { ActionButton, IButtonStyles, Stack, useTheme } from '@fluentui/react';
import { rem } from '@utilities/rem';
import { MenuItemProps } from '@widgets/headers/main-header/mainHeader.helper';

interface NavigationPanelSiteMenuProps {
  items: MenuItemProps[];
}

export const NavigationPanelSiteMenu: React.FC<
  NavigationPanelSiteMenuProps
> = ({ items }) => {
  const { spacing } = useTheme();

  const styles: IButtonStyles = {
    root: {
      padding: `${rem(spacing.l1)} ${rem(spacing.m)}`
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
