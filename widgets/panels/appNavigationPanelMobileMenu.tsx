import {
  ActionButton,
  FontWeights,
  IButtonStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';
import { MainMenuItem } from '@widgets/headers/mainHeader.helper';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';

interface AppNavigationPanelMobileMenuProps {
  items: MainMenuItem[];
}

interface AppNavigationPanelMobileMenuStyles {
  buttonContainer: IStackStyles;
  returnButton: IButtonStyles;
  linkButton: IButtonStyles;
  subItemContainer: IStackItemStyles;
  subItemHeader: ITextStyles;
}

const messages = defineMessages({
  mainMenuViewAllCategories: {
    id: messageIds.navigation.menu.viewAllCategories,
    description: 'View all categories text',
    defaultMessage: 'View all categories'
  }
});

export const AppNavigationPanelMobileMenu: React.FC<
  AppNavigationPanelMobileMenuProps
> = ({ items }) => {
  const { palette, semanticColors, spacing } = useTheme();
  const { formatMessage } = useIntl();
  const [selectedItem, setSelectedItem] = useState<MainMenuItem | undefined>();
  const [breadcrumbItems, setBreadcrumbItems] = useState<MainMenuItem[]>([]);

  const { push } = useRouter();

  function resetMenu() {
    setSelectedItem(undefined);
  }

  const styles: AppNavigationPanelMobileMenuStyles = {
    buttonContainer: {
      root: {
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      }
    },
    returnButton: {
      root: {
        padding: `${spacing.l1} ${spacing.m}`,
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      },
      icon: {
        fontSize: rem(12)
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
    },
    subItemContainer: {
      root: {
        borderLeft: `1px solid ${semanticColors.variantBorder}`,
        marginLeft: spacing.l1,
        paddingLeft: spacing.s1
      }
    },
    subItemHeader: {
      root: {
        fontWeight: FontWeights.semibold,
        padding: `${spacing.m} ${spacing.l1}`
      }
    }
  };

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  const renderMenu: (
    items: MainMenuItem[],
    isSubMenu: boolean
  ) => JSX.Element[] = (items: MainMenuItem[], isSubMenu: boolean) => {
    return items.map((menuItem: MainMenuItem) => {
      return (
        <Stack key={menuItem.id}>
          {!isSubMenu && (
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
                  if (menuItem.subItems) {
                    setSelectedItem(menuItem);
                  } else {
                    push(menuItem.href);
                  }
                }}
              />
            </Stack>
          )}

          {!!menuItem.subItems && renderMenu(menuItem.subItems, true)}
        </Stack>
      );
    });
  };

  const renderBreadcrumbs = () => {
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
        {breadcrumbItems.map(item => {
          if (item) {
            return (
              <ActionButton
                key={item.id}
                text={item.text}
                styles={styles.returnButton}
                iconProps={{ iconName: 'chevronLeft' }}
                onClick={() => {
                  setSelectedItem(breadcrumbItems.pop());
                  setBreadcrumbItems([...breadcrumbItems.splice(-1)]);
                }}
              />
            );
          }
        })}
        <Text styles={styles.subItemHeader}>{selectedItem?.text}</Text>
      </Stack>
    );
  };

  if (selectedItem?.subItems) {
    return (
      <Stack>
        <Stack>{renderBreadcrumbs()}</Stack>
        <Stack styles={styles.subItemContainer}>
          {renderMenu(selectedItem.subItems, false)}
        </Stack>
      </Stack>
    );
  }

  return <Stack>{renderMenu(items, false)}</Stack>;
};
