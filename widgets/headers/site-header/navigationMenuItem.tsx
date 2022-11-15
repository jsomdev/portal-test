import React, { useMemo } from 'react';

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

export type NavigationMenuStyle = 'default' | 'plain';

interface NavigationMenuItemViewModel {
  item: MenuItemViewModel;
  style: NavigationMenuStyle;
  onClick?: () => void;
  onDismiss?: () => void;
}

interface NavigationMenuItemStyles {
  link: IButtonStyles;
  linkContainer: IStackStyles;
}

type NavigationMenuItemType = 'link' | 'default';

export const NavigationMenuItem: React.FC<NavigationMenuItemViewModel> = ({
  item,
  style,
  onClick,
  onDismiss
}) => {
  const { semanticColors, spacing, palette } = useTheme();

  const renderAs: NavigationMenuItemType = useMemo(() => {
    if (item.href) {
      return 'link';
    }
    return 'default';
  }, [item]);

  const styles: NavigationMenuItemStyles = {
    linkContainer: {
      root: {
        borderBottom:
          style === 'default'
            ? `1px solid ${semanticColors.variantBorder}`
            : undefined
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
      {renderAs === 'link' && (
        <NextLink
          aria-label={item.text}
          key={item.id}
          href={item.href as string}
          locale={item.locale || undefined}
          passHref
        >
          <ActionButton
            text={item.text}
            styles={styles.link}
            onClick={() => {
              onClick && onClick();
              onDismiss && onDismiss();
            }}
          />
        </NextLink>
      )}
      {renderAs === 'default' && (
        <ActionButton
          onRenderIcon={() => {
            return item.image ? (
              <Image
                src={item.image}
                style={{ border: '1px solid black' }}
                width={20}
              />
            ) : null;
          }}
          text={item.text}
          styles={styles.link}
          onClick={() => {
            onClick && onClick();
          }}
          menuIconProps={
            item.children?.length ? { iconName: 'chevronRight' } : undefined
          }
        />
      )}
    </Stack>
  );
};
