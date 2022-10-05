import React, { useMemo } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  ActionButton,
  IButtonStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';

import { MenuItemProps } from '../main-header/mainHeader.helper';

export type NavigationMenuStyle = 'default' | 'plain';

interface NavigationMenuItemProps {
  item: MenuItemProps;
  style: NavigationMenuStyle;
  onClick?: () => void;
  onDismiss?: () => void;
}

interface NavigationMenuItemStyles {
  link: IButtonStyles;
  linkContainer: IStackStyles;
}

type NavigationMenuItemType = 'link' | 'default';

export const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
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
        padding: `${rem(spacing.l1)} ${rem(spacing.m)}`
      },
      textContainer: {
        flexGrow: 1,
        textAlign: 'left',
        paddingLeft: item.image ? rem(spacing.s1) : undefined
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
        <Link
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
        </Link>
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
          onClick={onClick}
          menuIconProps={
            item.children?.length ? { iconName: 'chevronRight' } : undefined
          }
        />
      )}
    </Stack>
  );
};
