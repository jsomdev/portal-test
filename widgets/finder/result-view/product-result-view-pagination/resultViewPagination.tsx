import React, { useCallback, useMemo } from 'react';

import { useIntl } from 'react-intl';

import {
  ActionButton,
  FontWeights,
  IButtonProps,
  IButtonStyles,
  ITheme,
  Icon,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { defineMessages } from '@formatjs/intl';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';
import { TabletAndDesktop } from '@widgets/media-queries';

import {
  getTotalPages,
  getVisiblePaginationPages
} from './resultViewPaginationHelper';

export interface ResultViewPaginationProps {
  currentPage: number;
  onPageChange: (newPage: number) => void;
  pageSize: number;
  totalItems: number;
}

/**
 * (Controlled) Pagination component intended to be used by the ProductListView and GridView,
 * but could be used for other views.
 *
 */

const VISIBLE_BUTTONS: number = 4;

const messages = defineMessages({
  next: {
    id: messageIds.finder.pagination.next,
    description: 'Button text to next page',
    defaultMessage: 'Next'
  },
  previous: {
    id: messageIds.finder.pagination.previous,
    description: 'Button text to previous page',
    defaultMessage: 'Previous'
  }
});

export const ResultViewPagination: React.FC<
  ResultViewPaginationProps
> = props => {
  const { totalItems, onPageChange, currentPage, pageSize } = props;
  const theme = useTheme();
  const { formatMessage } = useIntl();

  const buttonStyles = useCallback(
    (isPageActive: boolean, theme: ITheme): IButtonStyles => ({
      root: {
        borderRadius: theme.effects.roundedCorner2,
        padding: theme.spacing.m,
        border: `1px solid ${
          isPageActive ? theme.palette.accent : theme.palette.neutralLight
        }`,
        color: isPageActive ? theme.palette.themeDarker : theme.palette.accent,
        background: isPageActive
          ? theme.palette.themeLighter
          : theme.palette.white,
        fontWeight: isPageActive ? FontWeights.bold : FontWeights.semibold,
        selectors: {
          '& span, icon': {
            fontWeight: isPageActive ? FontWeights.bold : FontWeights.semibold,
            color: isPageActive
              ? theme.palette.themeDarker
              : theme.palette.accent
          }
        }
      }
    }),
    []
  );
  // Memoized buttons for the page buttons (e.g: 1, 2, 3 ,4)
  const pageButtons: IButtonProps[] = useMemo(() => {
    const pages: number[] = getVisiblePaginationPages(
      currentPage,
      totalItems,
      pageSize,
      VISIBLE_BUTTONS
    );
    return pages.map((page): IButtonProps => {
      return {
        onClick: () => onPageChange(page),
        styles: buttonStyles(page === currentPage, theme),
        text: page.toString()
      };
    });
  }, [totalItems, currentPage, theme, pageSize, buttonStyles, onPageChange]);
  return (
    <Stack
      horizontal
      wrap
      tokens={{
        padding: `${rem(theme.spacing.m)} 0`,
        childrenGap: rem(theme.spacing.s1)
      }}
      verticalAlign="center"
    >
      {currentPage > 1 && (
        <ActionButton
          onClick={() => onPageChange(currentPage - 1)}
          styles={buttonStyles(false, theme)}
        >
          <Stack
            horizontal
            tokens={{ childrenGap: `0 ${rem(theme.spacing.s1)}` }}
            verticalAlign="center"
          >
            <Icon iconName="ChevronLeftSmall" />
            <Text>{formatMessage(messages.previous)}</Text>
          </Stack>
        </ActionButton>
      )}
      {getTotalPages(totalItems, pageSize) > 1 &&
        pageButtons.map((buttonProps, index) => {
          return currentPage === index + 1 ? (
            <ActionButton key={index} {...buttonProps} />
          ) : (
            <TabletAndDesktop key={index}>
              <ActionButton {...buttonProps} />
            </TabletAndDesktop>
          );
        })}
      {currentPage < getTotalPages(totalItems, pageSize) && (
        <ActionButton
          onClick={() => onPageChange(currentPage + 1)}
          styles={buttonStyles(false, theme)}
        >
          <Stack
            horizontal
            tokens={{ childrenGap: `0 ${theme.spacing.s1}` }}
            verticalAlign="center"
          >
            <Text>{formatMessage(messages.next)}</Text>
            <Icon iconName="ChevronRightSmall" />
          </Stack>
        </ActionButton>
      )}
    </Stack>
  );
};
