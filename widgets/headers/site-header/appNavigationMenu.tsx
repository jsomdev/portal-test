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
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { useMe } from '@providers/user/userContext';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';

import {
  MenuItemProps,
  mapMenuItemsToMenuItemProps
} from '../main-header/mainHeader.helper';
import { NavigationMenuItem } from './navigationMenuItem';
import { getAppUserMenuItems } from './siteHeader.helper';

interface AppNavigationMenuStyles {
  subItemContainer: IStackItemStyles;
  subItemHeader: ITextStyles;
  returnButton: IButtonStyles;
  siteMenuItem: IButtonStyles;
}

const messages = defineMessages({
  mainMenuViewAllCategories: {
    id: messageIds.navigation.main.viewAllCategories,
    description: 'View all categories text',
    defaultMessage: 'View all categories'
  },
  signIn: {
    id: messageIds.navigation.user.signIn,
    description: 'Link text for sign in button',
    defaultMessage: 'Sign In'
  }
});

export const AppNavigationMenu: React.FC = () => {
  const { semanticColors, spacing } = useTheme();
  const {
    mainMenuItems: globalMainMenuItems,
    siteMenuItems: globalSiteMenuItems
  } = useGlobalData();
  const intl = useIntl();
  const { formatMessage } = intl;
  const { instance } = useMsal();
  const { me } = useMe();

  const [activeMenuItem, setActiveMenuItem] = useState<
    MenuItemProps | undefined
  >(undefined);

  const allMainMenuItems: MenuItemProps[] = useMemo(() => {
    return mapMenuItemsToMenuItemProps(
      globalMainMenuItems || [],
      'expanded',
      intl,
      null
    );
  }, [globalMainMenuItems, intl]);

  const renderedMainMenuItems = useMemo(() => {
    if (activeMenuItem?.children) {
      return activeMenuItem.children;
    }
    return allMainMenuItems;
  }, [activeMenuItem, allMainMenuItems]);

  const siteMenuItems: MenuItemProps[] = useMemo(() => {
    return mapMenuItemsToMenuItemProps(
      globalSiteMenuItems || [],
      'default',
      intl
    );
  }, [globalSiteMenuItems, intl]);

  const userMenuItems: MenuItemProps[] = useMemo(() => {
    return getAppUserMenuItems(intl, me, instance);
  }, [instance, intl, me]);

  // The breadcrumbs will only render 3 levels deep
  // The 4th level is not yet needed or supported.
  // A recursive function and an array of breadcrumbs will be needed to render more breadcrumb items for deeper nested menus
  const breadcrumbItem: MenuItemProps | undefined = useMemo(() => {
    return allMainMenuItems?.find(item => {
      return item.id === activeMenuItem?.parentId;
    });
  }, [allMainMenuItems, activeMenuItem]);

  const styles: AppNavigationMenuStyles = {
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
    },
    siteMenuItem: {
      root: {
        padding: `${rem(spacing.l1)} ${rem(spacing.m)}`
      }
    }
  };

  return (
    <Stack>
      {activeMenuItem?.children?.length && (
        <Stack>
          <Stack>
            <ActionButton
              text={formatMessage(messages.mainMenuViewAllCategories)}
              styles={styles.returnButton}
              iconProps={{ iconName: 'chevronLeft' }}
              onClick={() => {
                return setActiveMenuItem(undefined);
              }}
            />
            {breadcrumbItem && (
              <ActionButton
                key={breadcrumbItem.id}
                text={breadcrumbItem.text}
                styles={styles.returnButton}
                iconProps={{ iconName: 'chevronLeft' }}
                onClick={() => setActiveMenuItem(breadcrumbItem)}
              />
            )}
          </Stack>
          <Stack>
            <Text styles={styles.subItemHeader}>{activeMenuItem?.text}</Text>
          </Stack>
        </Stack>
      )}
      {renderedMainMenuItems.length && (
        <Stack styles={activeMenuItem?.children && styles.subItemContainer}>
          {renderedMainMenuItems.map(menuItem => {
            return (
              <NavigationMenuItem
                item={menuItem}
                onClick={() => {
                  setActiveMenuItem(menuItem);
                }}
                key={menuItem.id}
              />
            );
          })}
        </Stack>
      )}
      {userMenuItems.length && (
        <Stack>
          {userMenuItems.map(item => {
            return (
              <Stack key={item.id}>
                <ActionButton {...item} styles={styles.siteMenuItem} />
              </Stack>
            );
          })}
        </Stack>
      )}
      {siteMenuItems.length && (
        <Stack>
          {siteMenuItems?.map(item => {
            return (
              <Stack key={item.id}>
                <ActionButton {...item} styles={styles.siteMenuItem} />
              </Stack>
            );
          })}
        </Stack>
      )}
    </Stack>
  );
};
