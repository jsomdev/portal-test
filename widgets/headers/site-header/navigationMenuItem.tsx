import React from 'react';

import Image from 'next/image';

import { NextLink } from '@components/link/nextLink';
import {
  ActionButton,
  IButtonStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';

import { MenuItemViewModel } from '../main-header/mainHeader.helper';

interface NavigationMenuItemViewModel {
  item: MenuItemViewModel;
  onClick?: () => void;
  onDismiss?: () => void;
}

interface NavigationMenuItemStyles {
  link: IButtonStyles;
  linkContainer: IStackStyles;
}

export const NavigationMenuItem: React.FC<NavigationMenuItemViewModel> = ({
  item,
  onClick,
  onDismiss
}) => {
  const { semanticColors, spacing, palette } = useTheme();

  const styles: NavigationMenuItemStyles = {
    linkContainer: {
      root: {
        borderBottom: !item.href
          ? `1px solid ${semanticColors.variantBorder}`
          : `1px solid transparent`
      }
    },
    link: {
      flexContainer: {
        justifyContent: 'space-between',
        padding: `${spacing.l1} ${spacing.m}`
      },
      textContainer: {
        flexGrow: 1,
        textAlign: 'left',
        paddingLeft: item.image ? spacing.s1 : undefined
      },
      label: {
        margin: 0
      },
      menuIcon: {
        color: palette.themePrimary
      }
    }
  };

  return (
    <Stack
      key={`site-menu-panel-item-${item.text}`}
      styles={styles.linkContainer}
    >
      <NextLink
        aria-label={item.text}
        key={item.id}
        href={item.href}
        locale={item.locale || undefined}
        passHref
      >
        <ActionButton
          onRenderIcon={() => {
            return item.image ? (
              <Image
                src={item.image}
                layout="fixed"
                height={20}
                style={{ border: '1px solid black' }}
                width={20}
              />
            ) : null;
          }}
          text={item.text}
          styles={styles.link}
          onClick={() => {
            onClick && onClick();
            item.href && onDismiss && onDismiss();
          }}
          menuIconProps={
            item.children?.length ? { iconName: 'chevronRight' } : undefined
          }
        />
      </NextLink>
    </Stack>
  );
};
