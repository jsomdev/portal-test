import React from 'react';

import {
  ActionButton,
  FontWeights,
  IButtonStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';
import {
  MultiMenuConfiguration,
  MultiMenuResult
} from '@widgets/headers/site-header/multi-menu/multiMenu.types';

interface BreadCrumbsProps {
  multiMenu: MultiMenuResult<MultiMenuConfiguration>;
}

type BreadCrumbsStyles = {
  returnButton: IButtonStyles;
  subItemHeader: ITextStyles;
};

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ multiMenu }) => {
  const { semanticColors, spacing } = useTheme();

  if (!multiMenu.activeMenuId) {
    return null;
  }

  const styles: BreadCrumbsStyles = {
    returnButton: {
      root: {
        padding: `${rem(spacing.l1)} ${rem(spacing.m)}`,
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      },
      icon: {
        fontSize: rem(12)
      }
    },
    subItemHeader: {
      root: {
        fontWeight: FontWeights.semibold,
        padding: `${rem(spacing.m)} ${rem(spacing.l1)}`
      }
    }
  };

  return (
    <Stack>
      <Stack>
        <ActionButton
          text={multiMenu.menus[multiMenu.activeMenuId].backButtonText}
          styles={styles.returnButton}
          iconProps={{ iconName: 'chevronLeft' }}
          onClick={() => multiMenu.setActiveMenuItemId(undefined)}
        />
        {multiMenu.breadcrumbs.length > 0 &&
          multiMenu.breadcrumbs.map(breadcrumbItem => (
            <ActionButton
              key={breadcrumbItem.id}
              text={breadcrumbItem.text}
              styles={styles.returnButton}
              iconProps={{ iconName: 'chevronLeft' }}
              onClick={() => multiMenu.setActiveMenuItemId(breadcrumbItem.id)}
            />
          ))}
      </Stack>
      <Stack>
        <Text styles={styles.subItemHeader}>
          {multiMenu.activeMenuItem?.text}
        </Text>
      </Stack>
    </Stack>
  );
};

export default BreadCrumbs;
