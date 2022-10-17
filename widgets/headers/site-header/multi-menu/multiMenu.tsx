import React from 'react';

import { Stack, useTheme } from '@fluentui/react';
import { rem } from '@utilities/rem';
import BreadCrumbs from '@widgets/headers/site-header/multi-menu/breadCrumbs';
import { useMultiMenu } from '@widgets/headers/site-header/multi-menu/multiMenu.helper';
import {
  MenuConfiguration,
  MultiMenuConfiguration
} from '@widgets/headers/site-header/multi-menu/multiMenu.types';
import { NavigationMenuItem } from '@widgets/headers/site-header/navigationMenuItem';

interface MultiMenuProps {
  configuration: MultiMenuConfiguration;
  onDismiss: () => void;
}

const MultiMenu: React.FC<MultiMenuProps> = ({
  configuration,
  onDismiss
}: MultiMenuProps) => {
  const { semanticColors, spacing } = useTheme();
  const multiMenu = useMultiMenu(configuration);
  const styles = {
    siteMenuItem: {
      root: {
        padding: `${spacing.l1} ${spacing.m}`
      }
    },
    subItemContainer: {
      root: {
        borderLeft: `1px solid ${semanticColors.variantBorder}`,
        marginLeft: spacing.l1,
        paddingLeft: spacing.s1
      }
    }
  };

  const visibleMenus = Object.keys(multiMenu.menus).reduce(
    (acc: Record<string, MenuConfiguration>, menuId: string) => {
      const menu = multiMenu.menus[menuId];
      const isHidden =
        multiMenu.activeMenu &&
        multiMenu.activeMenu.hideOtherMenusWhenActive &&
        menuId !== multiMenu.activeMenuId;
      if (!isHidden) {
        acc[menuId] = menu;
      }
      return acc;
    },
    {}
  );

  return (
    <Stack>
      <BreadCrumbs multiMenu={multiMenu} />
      {Object.keys(visibleMenus).map(menuId => {
        const menu = visibleMenus[menuId];
        return (
          <Stack
            key={menuId}
            styles={
              multiMenu.activeMenuId === menuId
                ? styles.subItemContainer
                : undefined
            }
          >
            {menu.items?.map(menuItem => {
              return (
                <NavigationMenuItem
                  item={menuItem}
                  key={menuItem.id}
                  style={menu.style}
                  onDismiss={onDismiss}
                  onClick={() => {
                    multiMenu.setActiveMenuItemId(menuItem.id);
                  }}
                />
              );
            })}
          </Stack>
        );
      })}
    </Stack>
  );
};

export default MultiMenu;
