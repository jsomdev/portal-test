import React from 'react';

import {
  ActionButton,
  IButtonStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';
import { MenuItemProps } from '@widgets/headers/main-header/mainHeader.helper';

interface NavigationPanelMainMenuItemsProps {
  items: MenuItemProps[];
  onMenuItemClick: (menuItem: MenuItemProps) => void;
}

interface NavigationPanelMainMenuItemsStyles {
  buttonContainer: IStackStyles;
  linkButton: IButtonStyles;
}

export const NavigationPanelMainMenuItems: React.FC<
  NavigationPanelMainMenuItemsProps
> = ({ items, onMenuItemClick }) => {
  const { palette, spacing, semanticColors } = useTheme();

  const styles: NavigationPanelMainMenuItemsStyles = {
    buttonContainer: {
      root: {
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      }
    },

    linkButton: {
      root: {
        padding: `${rem(spacing.l1)} ${rem(spacing.m)}`
      },
      flexContainer: {
        justifyContent: 'space-between'
      },
      menuIcon: {
        color: palette.themePrimary
      }
    }
  };

  return (
    <Stack>
      {items.map(menuItem => {
        return (
          <Stack key={menuItem.id}>
            <Stack
              key={`site-menu-panel-item-${menuItem.text}`}
              styles={styles.buttonContainer}
            >
              <ActionButton
                text={menuItem.text}
                styles={styles.linkButton}
                menuIconProps={{
                  iconName: 'chevronRight'
                }}
                onClick={() => {
                  onMenuItemClick(menuItem);
                }}
              />
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
