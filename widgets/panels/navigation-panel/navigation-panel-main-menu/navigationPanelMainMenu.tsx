import { IStackItemStyles, Stack, useTheme } from '@fluentui/react';
import { MenuItemProps } from '@widgets/headers/main-header/mainHeader.helper';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { NavigationPanelMainMenuBreadcrumbs } from './navigationPanelMainMenuBreadcrumbs';
import { NavigationPanelMainMenuItems } from './navigationPanelMainMenuItems';

interface NavigationPanelMainMenuProps {
  items: MenuItemProps[];
}

interface NavigationPanelMainMenuStyles {
  subItemContainer: IStackItemStyles;
}

export const NavigationPanelMainMenu: React.FC<
  NavigationPanelMainMenuProps
> = ({ items }) => {
  const { semanticColors, spacing } = useTheme();
  const [selectedItem, setSelectedItem] = useState<MenuItemProps | undefined>();
  const [breadcrumbItems, setBreadcrumbItems] = useState<MenuItemProps[]>([]);

  const { push } = useRouter();

  function resetMenu() {
    setSelectedItem(undefined);
  }

  //reducer -> action: selectItem = select item, set selected item as id, write function to determine
  function onMenuItemClick(menuItem: MenuItemProps) {
    if (menuItem.subItems) {
      setSelectedItem(menuItem);
      items.find(item => {
        if (selectedItem?.id === item.id) {
          setBreadcrumbItems([...breadcrumbItems, item]);
        }
      });
    } else {
      push(menuItem.href);
    }
  }

  function onBreadcrumbItemClick() {
    setSelectedItem(breadcrumbItems.pop());
    setBreadcrumbItems([...breadcrumbItems.splice(-1)]);
  }

  const styles: NavigationPanelMainMenuStyles = {
    subItemContainer: {
      root: {
        borderLeft: `1px solid ${semanticColors.variantBorder}`,
        marginLeft: spacing.l1,
        paddingLeft: spacing.s1
      }
    }
  };

  if (selectedItem?.subItems) {
    return (
      <Stack>
        <NavigationPanelMainMenuBreadcrumbs
          selectedItem={selectedItem}
          items={breadcrumbItems}
          resetMenu={resetMenu}
          onItemClick={onBreadcrumbItemClick}
        />
        <Stack styles={styles.subItemContainer}>
          <NavigationPanelMainMenuItems
            items={selectedItem.subItems}
            onMenuItemClick={onMenuItemClick}
          />
        </Stack>
      </Stack>
    );
  }

  return (
    <NavigationPanelMainMenuItems
      items={items}
      onMenuItemClick={onMenuItemClick}
    />
  );
};
