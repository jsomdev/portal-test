import React, { useMemo } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {
  FormattedDate,
  FormattedNumber,
  defineMessages,
  useIntl
} from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  ActionButton,
  FontWeights,
  IButtonStyles,
  IPalette,
  IStackStyles,
  ITextStyles,
  IconButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { messageIds } from '@services/i18n';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { Order, OrderLine, OrderStatus } from '@services/portal-api';
import { mediaQueryFrom, useMobile, useTablet } from '@widgets/media-queries';

/**
 * MESSAGES FOR ORDER CARD
 */

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
  },
  orderStatusNew: {
    id: messageIds.data.orders.status.new,
    description: 'new order status',
    defaultMessage: 'New default'
  },
  orderStatusCanceled: {
    id: messageIds.data.orders.status.canceled,
    description: 'canceled order status',
    defaultMessage: 'Canceled default'
  },
  orderStatusInProcess: {
    id: messageIds.data.orders.status.inProcess,
    description: 'in process order status',
    defaultMessage: 'In process default'
  },
  orderStatusShipped: {
    id: messageIds.data.orders.status.shipped,
    description: 'shipped order status',
    defaultMessage: 'Shipped default'
  }
});

/**
 * ORDER OVERVIEW CARD
 */

interface OrderCardStyles {
  contentContainer: IStackStyles;
  actionsContainer: IStackStyles;
  button: IButtonStyles;
  container: IStackStyles;
}

interface OrderCardProps {
  order: Order;
  compactView: boolean;
}

export const OrderCard: React.FC<OrderCardProps> = ({ order, compactView }) => {
  const { effects, semanticColors, spacing } = useTheme();
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
      }
    },
    container: {
      root: {
        flex: '1 1 100%',
        ...mediaQueryFrom('tablet', {
          flex: !compactView ? '1 1 100%' : `0 1 calc(50% - ${spacing.m})`
        })
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
            <Text variant="smallPlus">
              {formatMessage(messages.dateHeader)}
            </Text>
          </Stack.Item>
          <Stack.Item>
            <FormattedDate
              dateStyle="medium"
              value={new Date(order.submittedOn)}
            />
          </Stack.Item>
        </Stack>
      )}

      <Stack
        styles={styles.contentContainer}
        grow
        tokens={{ childrenGap: spacing.m }}
      >
        <OrderCardTopSection order={order} />
        {order.lines?.length && (
          <OrderCardLines compactView={compactView} lines={order.lines} />
        )}
        <Stack
          horizontal
          horizontalAlign="end"
          tokens={{ childrenGap: spacing.l2 }}
          styles={styles.actionsContainer}
        >
          <NextLink href={`/account/orders/${order.id}`} passHref>
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

/**
 * ORDER OVERVIEW CARD LINES
 */

interface OrderCardLinesProps {
  lines: OrderLine[];
  compactView: boolean;
}

interface OrderCardLinesStyles {
  container: IStackStyles;
  viewMoreButton: IButtonStyles;
  moreButtonText: ITextStyles;
  viewMoreContainer: IStackStyles;
}

const OrderCardLines: React.FC<OrderCardLinesProps> = ({
  lines,
  compactView
}) => {
  const { spacing, semanticColors, palette, effects } = useTheme();
  const isMobile = useMobile();
  const isTablet = useTablet();

  const visibleItems: number = React.useMemo(() => {
    if (isMobile || compactView) {
      return 1;
    }
    if (isTablet) {
      return 1;
    }
    return 3;
  }, [isMobile, isTablet, compactView]);

  const viewMoreText: string = useMemo(() => {
    if (lines?.length) {
      return `+${lines.length - visibleItems}`;
    }
    return '';
  }, [lines, visibleItems]);

  const styles: OrderCardLinesStyles = {
    container: {
      root: {
        borderTop: `1px solid ${semanticColors.variantBorder}`,
        padding: `${spacing.m} ${spacing.m} 0`,
        display: 'flex'
      }
    },
    viewMoreButton: {
      root: {
        height: 65,
        width: 65,
        minWidth: 65,
        minHeight: 65,
        padding: `${spacing.s2}`,
        position: 'relative',
        backgroundImage: `url('${
          lines?.[visibleItems]?.product?.image?.url ||
          STATIC_IMAGES.cart.defaultItem
        }')`,
        backgroundSize: 'auto 57px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'block'
      },
      rootHovered: {
        backgroundColor: 'transparent'
      },
      rootPressed: {
        backgroundColor: 'transparent',
        height: 65,
        width: 65
      }
    },
    moreButtonText: {
      root: {
        fontWeight: FontWeights.bold,
        color: palette.white,
        textShadow: `${palette.themeDarker} 1px 1px 2px`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: effects.elevation4,
        borderRadius: effects.roundedCorner4
      }
    },
    viewMoreContainer: {
      root: {
        margin: 'auto !important',
        paddingLeft: spacing.m
      }
    }
  };

  return (
    <Stack
      className="list-scroll"
      verticalFill
      verticalAlign="center"
      tokens={{ childrenGap: spacing.l2 }}
      horizontal
      styles={styles.container}
    >
      {lines?.slice(0, visibleItems).map((orderLine: OrderLine) => {
        return <OrderCardLine key={orderLine.id} orderLine={orderLine} />;
      })}
      {lines?.length && !!(lines.length - visibleItems > 0) && (
        <Stack styles={styles.viewMoreContainer}>
          <IconButton styles={styles.viewMoreButton}>
            <Text variant="xLarge" styles={styles.moreButtonText}>
              {viewMoreText}
            </Text>
          </IconButton>
        </Stack>
      )}
    </Stack>
  );
};

interface OrderCardLineStyles {
  orderLineContainer: IStackStyles;
  orderLineImageContainer: IStackStyles;
}

const OrderCardLine: React.FC<{ orderLine: OrderLine }> = ({ orderLine }) => {
  const { spacing, effects } = useTheme();
  const productFormatter = new ProductFormatter(
    orderLine?.product || undefined
  );

  const styles: OrderCardLineStyles = {
    orderLineContainer: {
      root: {
        width: 250,
        borderRadius: effects.roundedCorner4
      }
    },
    orderLineImageContainer: {
      root: {
        width: 120,
        height: 90,
        position: 'relative'
      }
    }
  };
  return (
    <Stack
      key={orderLine.id}
      horizontal
      horizontalAlign="space-between"
      verticalAlign="center"
      tokens={{ childrenGap: spacing.m }}
      styles={styles.orderLineContainer}
    >
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{ childrenGap: spacing.m }}
      >
        <Stack tokens={{ childrenGap: spacing.s1 }}>
          <Text variant="mediumPlus">{orderLine.productNumber}</Text>
          <Text>{productFormatter.formatName()}</Text>
          <Text>x{orderLine.quantity}</Text>
        </Stack>
        <Stack styles={styles.orderLineImageContainer}>
          <Image
            priority
            src={
              orderLine?.product?.image?.url ||
              STATIC_IMAGES.app.noImageAvailable
            }
            layout="fill"
            objectFit="contain"
            objectPosition={'center'}
            alt={productFormatter.formatImageCaption()}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

/**
 * ORDER OVERVIEW CARD TOP SECTION / HEADER
 */

interface OrderCardTopSectionStyles {
  alignRight: IStackStyles;
  statusText: ITextStyles;
}

const OrderCardTopSection: React.FC<{ order: Order }> = ({ order }) => {
  const { spacing, palette } = useTheme();
  const { formatMessage } = useIntl();

  function getOrderStatusColor(status: OrderStatus, palette: IPalette): string {
    switch (status) {
      case OrderStatus.NEW:
        return palette.themePrimary;
      case OrderStatus.IN_PROCESS:
        return palette.neutralDark;
      case OrderStatus.SHIPPED:
        return palette.green;
      case OrderStatus.CANCELLED:
        return palette.red;
      default:
        return palette.neutralDark;
    }
  }

  function getOrderStatusText(status: OrderStatus): string {
    switch (status) {
      case OrderStatus.NEW:
        return formatMessage(messages.orderStatusNew);
      case OrderStatus.IN_PROCESS:
        return formatMessage(messages.orderStatusInProcess);
      case OrderStatus.SHIPPED:
        return formatMessage(messages.orderStatusShipped);
      case OrderStatus.CANCELLED:
        return formatMessage(messages.orderStatusCanceled);
      default:
        return '';
    }
  }

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
              {order.status && getOrderStatusText(order.status)}
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
