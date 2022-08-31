import {
  ActionButton,
  FontWeights,
  IButtonStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';
import { MenuItemProps } from '@widgets/headers/main-header/mainHeader.helper';
import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

interface NavigationPanelMainMenuBreadcrumbsProps {
  items: MenuItemProps[];
  selectedItem: MenuItemProps;
  resetMenu: () => void;
  onItemClick: () => void;
}

interface NavigationPanelMainMenuBreadcrumbsStyles {
  returnButton: IButtonStyles;
  subItemHeader: ITextStyles;
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
> = ({ items, selectedItem, resetMenu, onItemClick }) => {
  const { formatMessage } = useIntl();
  const { spacing, semanticColors } = useTheme();

  const styles: NavigationPanelMainMenuBreadcrumbsStyles = {
    returnButton: {
      root: {
        padding: `${spacing.l1} ${spacing.m}`,
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      },
      icon: {
        fontSize: rem(12)
      }
    },
    subItemHeader: {
      root: {
        fontWeight: FontWeights.semibold,
        padding: `${spacing.m} ${spacing.l1}`
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
      {items.map(item => {
        if (item) {
          return (
            <ActionButton
              key={item.id}
              text={item.text}
              styles={styles.returnButton}
              iconProps={{ iconName: 'chevronLeft' }}
              onClick={onItemClick}
            />
          );
        }
      })}
      <Text styles={styles.subItemHeader}>{selectedItem?.text}</Text>
    </Stack>
  );
};
