import {
  ActionButton,
  FontWeights,
  IButtonStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';
import { SiteMenuItem } from '@widgets/headers/mainHeader.helper';
import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';

interface AppNavigationPanelMobileMenuProps {
  items: SiteMenuItem[];
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
  },
  mainMenuViewAllCategory: {
    id: messageIds.navigation.menu.viewAllCategory,
    description: 'View all ... ',
    defaultMessage: 'View all '
  }
});

export const AppNavigationPanelMobileMenu: React.FC<
  AppNavigationPanelMobileMenuProps
> = ({ items }) => {
  const { palette, semanticColors, spacing } = useTheme();
  const { formatMessage } = useIntl();
  const [selectedItem, setSelectedItem] = useState<SiteMenuItem | undefined>(
    undefined
  );

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
        paddingLeft: spacing.l1
      }
    },
    subItemHeader: {
      root: {
        fontWeight: FontWeights.semibold
      }
    }
  };

  if (selectedItem) {
    return (
      <Stack>
        <ActionButton
          text={formatMessage(messages.mainMenuViewAllCategories)}
          styles={styles.returnButton}
          iconProps={{ iconName: 'chevronLeft' }}
          onClick={() => {
            return setSelectedItem(undefined);
          }}
        />
        <ActionButton
          text={`${formatMessage(messages.mainMenuViewAllCategory)} ${
            selectedItem.text
          }`}
          styles={styles.linkButton}
          menuIconProps={{
            iconName: 'chevronRight'
          }}
          href={selectedItem.href}
        />
        <Stack styles={styles.subItemContainer}>
          {selectedItem.subItems?.map(item => {
            return (
              <Stack
                key={`site-menu-item-${item.text}`}
                styles={styles.buttonContainer}
              >
                <ActionButton
                  text={item.text}
                  styles={styles.linkButton}
                  menuIconProps={{
                    iconName: 'chevronRight'
                  }}
                  onClick={e => {
                    e.preventDefault();
                    window.location.href = item.href;
                  }}
                />
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack>
      {items.map(item => {
        return (
          <Stack
            key={`site-menu-item-${item.text}`}
            styles={styles.buttonContainer}
          >
            <ActionButton
              text={item.text}
              styles={styles.linkButton}
              menuIconProps={{
                iconName: 'chevronRight'
              }}
              onClick={() => {
                return setSelectedItem(item);
              }}
            />
          </Stack>
        );
      })}
    </Stack>
  );
};
