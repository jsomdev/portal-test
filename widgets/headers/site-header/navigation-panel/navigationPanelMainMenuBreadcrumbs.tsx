import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { ActionButton, IButtonStyles, Stack, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';
import { MenuItemProps } from '@widgets/headers/main-header/mainHeader.helper';

interface NavigationPanelMainMenuBreadcrumbsProps {
  breadCrumbItem: MenuItemProps | undefined;
  resetMenu: () => void;
  onItemClick: (item: MenuItemProps) => void;
}

interface NavigationPanelMainMenuBreadcrumbsStyles {
  returnButton: IButtonStyles;
}

const messages = defineMessages({
  mainMenuViewAllCategories: {
    id: messageIds.navigation.menu.viewAllCategories,
    description: 'View all categories text',
    defaultMessage: 'View all categories'
  }
});

export const NavigationPanelMainMenuBreadcrumbs: React.FC<
  NavigationPanelMainMenuBreadcrumbsProps
> = ({ breadCrumbItem, resetMenu, onItemClick }) => {
  const { formatMessage } = useIntl();
  const { spacing, semanticColors } = useTheme();

  const styles: NavigationPanelMainMenuBreadcrumbsStyles = {
    returnButton: {
      root: {
        padding: `${rem(spacing.l1)} ${rem(spacing.m)}`,
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      },
      icon: {
        fontSize: rem(12)
      }
    }
  };

  return (
    <Stack>
      <ActionButton
        text={formatMessage(messages.mainMenuViewAllCategories)}
        styles={styles.returnButton}
        iconProps={{ iconName: 'chevronLeft' }}
        onClick={() => {
          return resetMenu();
        }}
      />
      {breadCrumbItem && (
        <ActionButton
          key={breadCrumbItem.id}
          text={breadCrumbItem.text}
          styles={styles.returnButton}
          iconProps={{ iconName: 'chevronLeft' }}
          onClick={() => onItemClick(breadCrumbItem)}
        />
      )}
    </Stack>
  );
};
