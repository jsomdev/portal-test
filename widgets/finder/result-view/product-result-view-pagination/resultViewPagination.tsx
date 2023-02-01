import React, { useCallback, useMemo } from 'react';

import { useIntl } from 'react-intl';

import {
  ActionButton,
  FontWeights,
  IButtonProps,
  IButtonStyles,
  IIconProps,
  ITheme,
  Icon,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { defineMessages } from '@formatjs/intl';
import { messageIds } from '@services/i18n';
import { TabletAndDesktop, useTabletAndDesktop } from '@widgets/media-queries';

import { getPagination, getTotalPages } from './resultViewPaginationHelper';

export interface ResultViewPaginationProps {
  currentPage: number;
  onPageChange: (newPage: number) => void;
  pageSize: number;
  totalItems: number;
}

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
  const isTabletAndDesktop = useTabletAndDesktop();

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
  const pageButtons: Array<{
    type: 'button' | 'seperator';
    props: IButtonProps | IIconProps;
  }> = useMemo(() => {
    const pages: number[] = getPagination(
      currentPage,
      totalItems,
      pageSize,
      isTabletAndDesktop ? 5 : 1
    );
    return pages.map(
      (
        page
      ): {
        type: 'button' | 'seperator';
        props: IButtonProps | IIconProps;
      } => {
        if (page === -1) {
          return {
            type: 'seperator',
            props: {
              iconName: 'More'
            }
          };
        }
        return {
          type: 'button',
          props: {
            onClick: () => onPageChange(page),
            styles: buttonStyles(page === currentPage, theme),
            text: page.toString()
          }
        };
      }
    );
  }, [
    currentPage,
    totalItems,
    pageSize,
    isTabletAndDesktop,
    buttonStyles,
    theme,
    onPageChange
  ]);
  return (
    <Stack
      horizontal
      wrap
      tokens={{
        padding: `${theme.spacing.m} 0`,
        childrenGap: theme.spacing.s1
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
            tokens={{ childrenGap: `0 ${theme.spacing.s1}` }}
            verticalAlign="center"
          >
            <Icon iconName="ChevronLeftSmall" />
            <TabletAndDesktop>
              <Text>{formatMessage(messages.previous)}</Text>
            </TabletAndDesktop>
          </Stack>
        </ActionButton>
      )}
      {pageButtons.map((element, index) => {
        if (element.type === 'button') {
          return (
            <ActionButton key={index} {...(element.props as IButtonProps)} />
          );
        }
        return <Icon key={index} {...(element.props as IIconProps)} />;
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
            <TabletAndDesktop>
              <Text>{formatMessage(messages.next)}</Text>
            </TabletAndDesktop>
            <Icon iconName="ChevronRightSmall" />
          </Stack>
        </ActionButton>
      )}
    </Stack>
  );
};
