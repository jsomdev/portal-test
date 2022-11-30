import React from 'react';

import NextLink from 'next/link';
import {
  FormattedDate,
  FormattedNumber,
  defineMessages,
  useIntl
} from 'react-intl';

import {
  ActionButton,
  FontWeights,
  IButtonStyles,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { Order, OrderStatus } from '@services/portal-api';
import pagePaths from '@utilities/pagePaths';
import { mediaQueryFrom } from '@widgets/media-queries';

import { AccountCardProductLines } from '../shared/accountCardProductLines';
import { getOrderStatusColor, getOrderStatusText } from './orderHelper';

const messages = defineMessages({
  dateHeader: {
    id: messageIds.pages.account.orders.orderDateHeader,
    description: 'order card date header',
    defaultMessage: 'Ordered on default'
  },
  statusHeader: {
    id: messageIds.pages.account.orders.statusHeader,
    description: 'order card status header',
    defaultMessage: 'Status default'
  },
  priceHeader: {
    id: messageIds.pages.account.orders.totalHeader,
    defaultMessage: 'Price default',
    description: 'order card price header'
  },
  viewOrder: {
    id: messageIds.pages.account.orders.viewOrder,
    description: 'View order link text',
    defaultMessage: 'View order default'
  },
  numberHeader: {
    id: messageIds.pages.account.orders.numberHeader,
    description: 'order number header',
    defaultMessage: 'Order number default'
  }
});

interface OrderCardStyles {
  contentContainer: IStackStyles;
  actionsContainer: IStackStyles;
  button: IButtonStyles;
  container: IStackStyles;
  datePrefix: ITextStyles;
  date: ITextStyles;
}

interface OrderCardProps {
  order: Order;
  compactView: boolean;
}

export const OrderCard: React.FC<OrderCardProps> = ({ order, compactView }) => {
  const { effects, semanticColors, spacing, palette } = useTheme();
  const { formatMessage } = useIntl();

  const styles: OrderCardStyles = {
    contentContainer: {
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner4,
        height: '100%'
      }
    },
    actionsContainer: {
      root: {
        borderTop: `1px solid ${semanticColors.variantBorder}`,
        padding: `${spacing.m}`
      }
    },
    button: {
      root: {
        padding: 0,
        height: 'auto'
      },
      menuIcon: {
        marginRight: 0
      },
      rootHovered: {
        '.ms-Icon': {
          color: palette.themePrimary
        }
      }
    },
    container: {
      root: {
        flex: '1 1 100%',
        ...mediaQueryFrom('tablet', {
          flex: !compactView ? '1 1 100%' : `0 1 calc(50% - ${spacing.m})`
        })
      }
    },
    datePrefix: {
      root: {
        color: palette.neutralDark
      }
    },
    date: {
      root: {
        fontWeight: FontWeights.semibold
      }
    }
  };

  return (
    <Stack styles={styles.container} tokens={{ childrenGap: spacing.m }}>
      {order.submittedOn && (
        <Stack
          tokens={{ childrenGap: spacing.s2 }}
          horizontal
          verticalAlign="center"
        >
          <Stack.Item>
            <Text styles={styles.datePrefix}>
              {formatMessage(messages.dateHeader)}
            </Text>
          </Stack.Item>
          <Stack.Item>
            <Text styles={styles.date}>
              <FormattedDate
                dateStyle="medium"
                value={new Date(order.submittedOn)}
              />
            </Text>
          </Stack.Item>
        </Stack>
      )}
      <Stack
        styles={styles.contentContainer}
        grow
        tokens={{ childrenGap: spacing.m }}
      >
        <OrderCardTopSection order={order} />
        {order.id && order.lines?.length && (
          <AccountCardProductLines
            compactView={compactView}
            lines={order.lines}
            href={pagePaths.orders(order.id)}
          />
        )}

        <Stack
          horizontal
          tokens={{ childrenGap: spacing.l2 }}
          styles={styles.actionsContainer}
        >
          <NextLink href={pagePaths.orders(order.id)} passHref>
            <a>
              <ActionButton
                text={formatMessage(messages.viewOrder)}
                menuIconProps={{ iconName: 'chevronRight' }}
                styles={styles.button}
              />
            </a>
          </NextLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

interface OrderCardTopSectionStyles {
  alignRight: IStackStyles;
  statusText: ITextStyles;
}

const OrderCardTopSection: React.FC<{ order: Order }> = ({ order }) => {
  const { spacing, palette } = useTheme();
  const intl = useIntl();
  const { formatMessage } = intl;

  const styles: OrderCardTopSectionStyles = {
    alignRight: {
      root: {
        textAlign: 'right'
      }
    },
    statusText: {
      root: {
        color: getOrderStatusColor(order.status || OrderStatus.NEW, palette)
      }
    }
  };

  return (
    <Stack
      horizontal
      horizontalAlign="space-between"
      tokens={{
        childrenGap: spacing.l2,
        padding: `${spacing.m} ${spacing.m} 0`
      }}
    >
      <Stack
        id="order-card-top-section"
        horizontal
        tokens={{ childrenGap: spacing.l2 }}
      >
        <Stack tokens={{ childrenGap: spacing.s2 }}>
          <Stack.Item>
            <Text variant="smallPlus">
              {formatMessage(messages.statusHeader)}
            </Text>
          </Stack.Item>
          <Stack.Item>
            <Text styles={styles.statusText}>
              {order.status && getOrderStatusText(order.status, intl)}
            </Text>
          </Stack.Item>
        </Stack>
        <Stack tokens={{ childrenGap: spacing.s2 }}>
          <Stack.Item>
            <Text variant="smallPlus">
              {formatMessage(messages.priceHeader)}
            </Text>
          </Stack.Item>
          <Stack.Item>
            <FormattedNumber
              currency={order.currencyCode || 'USD'}
              currencyDisplay="narrowSymbol"
              style={'currency'}
              value={order.totalAmount || 0}
            />
          </Stack.Item>
        </Stack>
      </Stack>
      {order.number && (
        <Stack>
          <Stack
            tokens={{ childrenGap: spacing.s2 }}
            styles={styles.alignRight}
          >
            <Stack.Item>
              <Text variant="smallPlus">
                {formatMessage(messages.numberHeader)}
              </Text>
            </Stack.Item>
            <Stack.Item>
              <Text>{order.number}</Text>
            </Stack.Item>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
