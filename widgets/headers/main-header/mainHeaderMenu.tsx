import {
  ActionButton,
  IButtonStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { MenuItemProps } from './mainHeader.helper';

type MainHeaderMenuProps = {
  activeMenuItemId: string | undefined;
  menuItems: MenuItemProps[];
};

type MainHeaderMenuStyles = {
  heroContainer: IStackStyles;
  link: (type: 'main' | 'sub') => IButtonStyles;
};

export const MainHeaderMenu: React.FC<MainHeaderMenuProps> = ({
  activeMenuItemId,
  menuItems
}) => {
  const { palette, spacing } = useTheme();

  const activeMenuItem: MenuItemProps | undefined = useMemo(() => {
    return menuItems.find(item => {
      return item.id === activeMenuItemId;
    });
  }, [activeMenuItemId, menuItems]);

  const styles: MainHeaderMenuStyles = {
    heroContainer: {
      root: {
        height: 'auto',
        minHeight: 200,
        backgroundColor: palette.white,
        padding: `${rem(40)} ${rem(spacing.l1)}`
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
    })
  };

  if (!activeMenuItem) {
    return null;
  }

  return (
    <Stack
      styles={styles.heroContainer}
      horizontal
      wrap={false}
      tokens={{ childrenGap: spacing.l2 }}
    >
      {activeMenuItem?.subItems?.map(item => {
        return (
          <Stack key={item.id} tokens={{ childrenGap: spacing.m }}>
            <Link
              aria-label={item.text}
              key={item.id}
              href={item.href}
              passHref
            >
              <ActionButton text={item.text} styles={styles.link('main')} />
            </Link>
            {item.subItems && (
              <Stack tokens={{ childrenGap: spacing.s1 }}>
                {item.subItems.map(item => {
                  return (
                    <Link
                      aria-label={item.text}
                      key={item.id}
                      href={item.href}
                      passHref
                    >
                      <ActionButton
                        text={item.text}
                        styles={styles.link('sub')}
                      />
                    </Link>
                  );
                })}
              </Stack>
            )}
          </Stack>
        );
      })}
    </Stack>
  );
};
