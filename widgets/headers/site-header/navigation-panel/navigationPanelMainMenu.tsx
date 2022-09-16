import {
  FontWeights,
  IStackItemStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';
import { MenuItemProps } from '@widgets/headers/main-header/mainHeader.helper';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';
import { NavigationPanelMainMenuBreadcrumbs } from './navigationPanelMainMenuBreadcrumbs';
import { NavigationPanelMainMenuItems } from './navigationPanelMainMenuItems';

interface NavigationPanelMainMenuProps {
  items: MenuItemProps[];
}

interface NavigationPanelMainMenuStyles {
  subItemContainer: IStackItemStyles;
  subItemHeader: ITextStyles;
}

export const NavigationPanelMainMenu: React.FC<
  NavigationPanelMainMenuProps
> = ({ items }) => {
  const { semanticColors, spacing } = useTheme();
  const [activeMenuItem, setActiveMenuItem] = useState<
    MenuItemProps | undefined
  >(undefined);
  const { push } = useRouter();

  const menuItems = useMemo(() => {
    if (activeMenuItem?.children) {
      return activeMenuItem.children;
    }
    return items;
  }, [activeMenuItem, items]);

  const breadcrumb: MenuItemProps | undefined = useMemo(() => {
    return items.find(item => {
      return item.id === activeMenuItem?.parentId;
    });
  }, [items, activeMenuItem]);

  const onMenuItemClick = useCallback(
    (item: MenuItemProps) => {
      if (item.children) {
        setActiveMenuItem(item);
      } else {
        push(item.href);
      }
    },
    [push]
  );

  const styles: NavigationPanelMainMenuStyles = {
    subItemContainer: {
      root: {
        borderLeft: `1px solid ${semanticColors.variantBorder}`,
        marginLeft: rem(spacing.l1),
        paddingLeft: rem(spacing.s1)
      }
    },
    subItemHeader: {
      root: {
        fontWeight: FontWeights.semibold,
        padding: `${rem(spacing.m)} ${rem(spacing.l1)}`
      }
    }
  };

  if (activeMenuItem?.children) {
    return (
      <Stack>
        <NavigationPanelMainMenuBreadcrumbs
          breadCrumbItem={breadcrumb}
          resetMenu={() => setActiveMenuItem(undefined)}
          onItemClick={item => setActiveMenuItem(item)}
        />
        <Stack>
          <Text styles={styles.subItemHeader}>{activeMenuItem?.text}</Text>
        </Stack>
        <Stack styles={styles.subItemContainer}>
          <NavigationPanelMainMenuItems
            items={menuItems}
            onMenuItemClick={onMenuItemClick}
          />
        </Stack>
      </Stack>
    );
  }

  return (
    <NavigationPanelMainMenuItems
      items={menuItems}
      onMenuItemClick={onMenuItemClick}
    />
  );
};
