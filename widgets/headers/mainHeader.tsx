import React from 'react';

import {
  CommandBar,
  IButtonStyles,
  ICommandBarStyles,
  IStackItemStyles,
  IStackStyles,
  Stack,
  useTheme,
} from '@fluentui/react';
import { MenuItem } from '@services/portal-api';
import { mainMenuItems } from '@services/preval';
import { rem } from '@utilities/rem';

import { HeaderButton } from './headerButton';
import { getMainCommandBarItems } from './mainHeader.helper';

interface IMainHeaderStyles {
  commandBarContainer: IStackItemStyles;
  root: IStackStyles;
}
interface IMainCommandBarStyles {
  commandBar: Partial<ICommandBarStyles>;
  button: Partial<IButtonStyles>;
}

export const MainHeader: React.FC = () => {
  const { spacing } = useTheme();

  const styles: IMainHeaderStyles = {
    root: {
      root: {
        height: 44,
        transition: '0.3s all ease',
      },
    },
    commandBarContainer: {
      root: {
        flex: 1,
      },
    },
  };

  return (
    <nav>
      <Stack
        horizontal
        verticalAlign="center"
        styles={styles.root}
        tokens={{
          padding: `0 ${rem(spacing.l1)}`,
        }}
        horizontalAlign="space-between"
      >
        <Stack.Item styles={styles.commandBarContainer}>
          <MainHeaderCommandBar items={mainMenuItems} />
        </Stack.Item>
        <Stack.Item>
          <HeaderButton
            iconProps={{
              iconName: 'Search',
            }}
          />
          <HeaderButton
            iconProps={{
              iconName: 'ShoppingCart',
            }}
          />
          <HeaderButton
            iconProps={{
              iconName: 'FavoriteList',
            }}
          />

          <HeaderButton
            iconProps={{
              iconName: 'Contact',
            }}
          />
        </Stack.Item>
      </Stack>
    </nav>
  );
};

const MainHeaderCommandBar: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  const theme = useTheme();
  const { spacing, palette } = theme;
  const styles: IMainCommandBarStyles = {
    commandBar: {
      root: {
        width: '100%',
        background: 'transparent',
        paddingLeft: 0,
      },

      primarySet: {
        background: 'transparent',
      },
    },
    button: {
      root: {
        background: 'transparent',
        margin: `0 ${rem(spacing.s1)} 0 0`,
        paddingLeft: 0,
        marginLeft: 0,
      },
      label: {
        fontSize: rem(15),
        letterSpacing: rem(0.38),
        color: palette.black,
        marginLeft: 0,
        fontWeight: 500,
      },
      menuIcon: {
        color: palette.black,
        marginBottom: `-${rem(spacing.s1)}`,
      },
      menuIconHovered: {
        color: palette.accent,
      },
      labelHovered: {
        color: palette.accent,
      },

      rootHovered: {
        background: 'transparent',
      },
      rootPressed: {
        background: 'transparent',
      },
      rootExpanded: {
        background: 'transparent',
      },
      rootExpandedHovered: {
        background: 'transparent',
      },
    },
  };

  return (
    <CommandBar
      styles={styles.commandBar}
      items={getMainCommandBarItems(items, () => console.log('to implement'), theme, styles.button, null)}
    />
  );
};
