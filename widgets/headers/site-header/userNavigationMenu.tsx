import React, { useMemo, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { useMsal } from '@azure/msal-react';
import {
  ActionButton,
  FontWeights,
  IButtonStyles,
  IStackItemStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';

import { MenuItemProps } from '../main-header/mainHeader.helper';
import { NavigationMenuItem } from './navigationMenuItem';
import { getUserMenuItems } from './siteHeader.helper';

interface NavigationPanelMenuStyles {
  subItemContainer: IStackItemStyles;
  subItemHeader: ITextStyles;
  returnButton: IButtonStyles;
}

const messages = defineMessages({
  menuReset: {
    id: messageIds.pages.account.overview,
    description: 'Back to user menu overview',
    defaultMessage: 'Go to overview default'
  }
});

export const UserNavigationMenu: React.FC = () => {
  const { semanticColors, spacing } = useTheme();
  const intl = useIntl();
  const { me } = useMe();
  const { instance } = useMsal();
  const [activeMenuItem, setActiveMenuItem] = useState<
    MenuItemProps | undefined
  >();

  const allMenuItems: MenuItemProps[] = useMemo((): MenuItemProps[] => {
    return getUserMenuItems(intl, me, instance);
  }, [instance, intl, me]);

  const renderedMenuItems: MenuItemProps[] = useMemo(() => {
    if (activeMenuItem?.children) {
      return activeMenuItem.children;
    }
    return allMenuItems;
  }, [activeMenuItem, allMenuItems]);

  function onMenuItemClick(menuItem: MenuItemProps) {
    if (menuItem.children?.length) {
      setActiveMenuItem(menuItem);
    }
    return menuItem.onClick?.();
  }

  const styles: NavigationPanelMenuStyles = {
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
    },
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
      {activeMenuItem?.children && (
        <Stack>
          <Stack>
            <ActionButton
              text={intl.formatMessage(messages.menuReset)}
              styles={styles.returnButton}
              iconProps={{ iconName: 'chevronLeft' }}
              onClick={() => {
                return setActiveMenuItem(undefined);
              }}
            />
          </Stack>
          <Stack>
            <Text styles={styles.subItemHeader}>{activeMenuItem?.text}</Text>
          </Stack>
        </Stack>
      )}
      <Stack styles={activeMenuItem?.children && styles.subItemContainer}>
        {renderedMenuItems.map(menuItem => {
          return (
            <NavigationMenuItem
              item={menuItem}
              onClick={() => {
                onMenuItemClick(menuItem);
              }}
              key={`user-menu-item-${menuItem.id}`}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};
