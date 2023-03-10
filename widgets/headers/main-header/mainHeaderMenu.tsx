import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  ActionButton,
  IButtonStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';

import { MenuItemViewModel } from './mainHeader.helper';

type MainHeaderMenuProps = {
  activeMenuItem: MenuItemViewModel | undefined;
};

type MainHeaderMenuStyles = {
  heroContainer: IStackStyles;
  link: (type: 'main' | 'sub') => IButtonStyles;
  viewAllLink: IButtonStyles;
};

const messages = defineMessages({
  mainMenuViewAllCategory: {
    id: messageIds.navigation.main.viewAllCategory,
    description: 'View all ... ',
    defaultMessage: 'View all '
  }
});

export const MainHeaderMenu: React.FC<MainHeaderMenuProps> = ({
  activeMenuItem
}) => {
  const { palette, spacing } = useTheme();
  const { formatMessage } = useIntl();

  const styles: MainHeaderMenuStyles = {
    heroContainer: {
      root: {
        height: 'auto',
        backgroundColor: palette.white,
        padding: `${rem(40)} ${spacing.l1}`
      }
    },
    link: (type: 'main' | 'sub') => ({
      root: {
        padding: 0,
        margin: 0,
        textAlign: 'left',
        height: 'auto'
      },
      label: {
        margin: 0,
        lineHeight: 'normal',
        fontWeight: type === 'main' ? 500 : 'normal'
      }
    }),
    viewAllLink: {
      root: { paddingLeft: 0, marginLeft: 0 },
      label: { marginLeft: 0, fontWeight: 500 },
      menuIcon: { color: palette.themePrimary }
    }
  };

  if (!activeMenuItem) {
    return null;
  }

  return (
    <Stack styles={styles.heroContainer} tokens={{ childrenGap: spacing.l1 }}>
      <Stack horizontal wrap={false} tokens={{ childrenGap: spacing.l2 }}>
        {activeMenuItem?.children?.map(item => {
          return (
            <Stack key={item.id} tokens={{ childrenGap: spacing.m }}>
              {item.href && (
                <NextLink
                  aria-label={item.text}
                  key={item.id}
                  href={item.href}
                  passHref
                >
                  <ActionButton text={item.text} styles={styles.link('main')} />
                </NextLink>
              )}

              {item.children && (
                <Stack tokens={{ childrenGap: spacing.s1 }}>
                  {item.children.map(item => {
                    return (
                      item.href && (
                        <NextLink
                          aria-label={item.text}
                          key={item.id}
                          href={item.href}
                          passHref
                        >
                          <ActionButton
                            text={item.text}
                            styles={styles.link('sub')}
                          />
                        </NextLink>
                      )
                    );
                  })}
                </Stack>
              )}
            </Stack>
          );
        })}
      </Stack>
      {activeMenuItem.href && (
        <NextLink
          aria-label={activeMenuItem.text}
          key={activeMenuItem.id}
          href={activeMenuItem.href}
          passHref
        >
          <ActionButton
            text={formatMessage(messages.mainMenuViewAllCategory, {
              category: activeMenuItem.text
            })}
            styles={styles.viewAllLink}
            menuIconProps={{ iconName: 'chevronRight' }}
          />
        </NextLink>
      )}
    </Stack>
  );
};
