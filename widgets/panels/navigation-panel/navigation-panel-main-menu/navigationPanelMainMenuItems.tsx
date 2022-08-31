import {
  ActionButton,
  IButtonStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { MenuItemProps } from '@widgets/headers/main-header/mainHeader.helper';
import React from 'react';

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
        padding: `${spacing.l1} ${spacing.m}`
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
              key={`site-menu-item-${menuItem.text}`}
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
