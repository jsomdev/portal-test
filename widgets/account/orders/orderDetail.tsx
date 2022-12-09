import React, { useMemo, useState } from 'react';

import Image from 'next/image';
import { defineMessages, useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import { LoadingSpinner } from '@components/spinners/loadingSpinner';
import {
  DefaultButton,
  FontWeights,
  IButtonStyles,
  IMessageBarStyles,
  IStackStyles,
  ITextStyles,
  MessageBar,
  MessageBarType,
  PrimaryButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { CartItem } from '@providers/cart/cartContext';
import { messageIds } from '@services/i18n';
import widenImageLoader from '@utilities/image-loaders/widenImageLoader';
import { rem } from '@utilities/rem';
import CartItemAddedDialog from '@widgets/cart-item-added-dialog/cartItemAddedDialog';
import { mediaQueryFrom, useTabletAndDesktop } from '@widgets/media-queries';

import { OrderDetailInfoSection } from './orderDetailInfoSection';
import { mapOrderLinesToCartItems } from './orderHelper';
import { OrderLineViewModel } from './orders.types';
import { useOrder } from './useOrder';

// NOTE: email addresses doesn't work, is this still applicable (shipping contact vs billing contact vs order email addresses)

const messages = defineMessages({
  dateHeader: {
    id: messageIds.pages.account.orders.orderDateHeader,
    description: 'order card date header',
    defaultMessage: 'Ordered on default'
  },
  numberHeader: {
    id: messageIds.pages.account.orders.numberHeader,
    description: 'order number header',
    defaultMessage: 'Order number default'
  },
  reorderAll: {
    id: messageIds.pages.account.orders.reorderAll,
    description: 'Reorder all products button',
    defaultMessage: 'Reorder default'
  },
  viewAllLines: {
    id: messageIds.pages.account.orders.viewAllLines,
    description: 'Button text to show all order lines',
    defaultMessage: 'Show all default'
  },

  reorderSingle: {
    id: messageIds.pages.account.orders.reorderSingle,
    description: 'Reorder button text',
    defaultMessage: 'Reorder default'
  },
  statusHeader: {
    id: messageIds.pages.account.orders.statusHeader,
    description: 'order card status header',
    defaultMessage: 'Status default'
  },
  confirmationTitle: {
    id: messageIds.pages.account.orders.confirmationTitle,
    description: 'order card confirmation title',
    defaultMessage: 'Order confirmation default'
  },
  confirmationText: {
    id: messageIds.pages.account.orders.confirmationText,
    description: 'order card confirmation text',
    defaultMessage: 'Your order has been placed default'
  }
});

interface OrderDetailProps {
  id: string;
  showConfirmation?: boolean;
}

interface OrderDetailStyles {
  prefixText: ITextStyles;
  detailText: ITextStyles;
  lineContainer: IStackStyles;
  accountProductLineImageContainer: IStackStyles;
  orderLineButton: IButtonStyles;
  orderDetailHeader: IStackStyles;
  lineAmount: IStackStyles;
  lineTotal: ITextStyles;
  statusDetailText: (color: string) => ITextStyles;
}

export const OrderDetail: React.FC<OrderDetailProps> = ({
  id,
  showConfirmation
}) => {
  const { spacing, palette, semanticColors, effects, fonts } = useTheme();
  const MAX_ITEMS = 3;
  const {
    orderViewModel: order,
    orderDataStatus,
    reorder,
    orderData
  } = useOrder(id);
  const [lastAddedItems, setLastAddedItems] = React.useState<
    CartItem[] | undefined
  >(undefined);
  const isTabletOrDesktop = useTabletAndDesktop();

  const intl = useIntl();
  const { formatMessage } = intl;

  const [displayAllLines, setDisplayAllLines] = useState(false);

  const visibleOrderLines: OrderLineViewModel[] | undefined = useMemo(() => {
    if (
      order?.lines?.length &&
      order.lines.length > MAX_ITEMS &&
      !displayAllLines
    ) {
      return order.lines?.slice(0, MAX_ITEMS);
    }
    return order?.lines;
  }, [order, displayAllLines]);

  const shouldDisplayButton: boolean = useMemo(() => {
    if (order?.lines?.length && order.lines.length <= MAX_ITEMS) {
      return false;
    }
    if (displayAllLines) {
      return false;
    }
    if (!order.lines.length) {
      return false;
    }
    return true;
  }, [displayAllLines, order]);

  const orderCartItems: CartItem[] = useMemo(() => {
    return mapOrderLinesToCartItems(orderData?.lines);
  }, [orderData]);

  function handleReorder(items: CartItem[]) {
    reorder(items);
    setLastAddedItems(items);
  }

  const styles: OrderDetailStyles = {
    prefixText: {
      root: {
        color: palette.neutralDark
      }
    },
    detailText: {
      root: {
        fontWeight: FontWeights.semibold
      }
    },
    lineContainer: {
      root: {
        borderRadius: effects.roundedCorner4,
        border: `1px solid ${semanticColors.variantBorder}`,
        padding: spacing.m
      }
    },
    accountProductLineImageContainer: {
      root: {
        width: 70,
        minWidth: 70,
        height: 90,
        maxHeight: 90,
        position: 'relative',
        ...mediaQueryFrom('tablet', {
          width: 120,
          height: 90,
          position: 'relative'
        })
      }
    },
    orderLineButton: {
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
    orderDetailHeader: {
      root: {
        minHeight: 32
      }
    },
    statusDetailText: (color: string) => ({
      root: {
        color: color,
        fontWeight: FontWeights.semibold
      }
    }),
    lineAmount: {
      root: {
        height: '100%',
        textAlign: 'right'
      }
    },
    lineTotal: {
      root: {
        ...fonts.mediumPlus
      }
    }
  };

  if (orderDataStatus === 'loading') {
    return <LoadingSpinner />;
  }

  //TODO Add error handling and error page
  if (orderDataStatus === 'error') {
    return <Stack>Error loading order</Stack>;
  }

  return (
    <Stack id="order-detail-container" tokens={{ childrenGap: spacing.m }}>
      {showConfirmation && <OrderConfirmationCard />}
      <Stack
        id="order-detail-header"
        horizontal
        tokens={{ childrenGap: spacing.l1 }}
        verticalAlign="center"
        horizontalAlign="space-between"
        styles={styles.orderDetailHeader}
        wrap
      >
        <Stack
          horizontal
          tokens={{ childrenGap: spacing.l1 }}
          verticalAlign="center"
          wrap
        >
          <Stack
            tokens={{ childrenGap: spacing.s2 }}
            horizontal
            verticalAlign="center"
          >
            <Stack.Item>
              <Text styles={styles.prefixText}>
                {formatMessage(messages.statusHeader)}
              </Text>
            </Stack.Item>
            <Stack.Item>
              <Text styles={styles.statusDetailText(order.status.color)}>
                {order.status.text}
              </Text>
            </Stack.Item>
          </Stack>
          {order.date && (
            <Stack
              tokens={{ childrenGap: spacing.s2 }}
              horizontal
              verticalAlign="center"
            >
              <Stack.Item>
                <Text styles={styles.prefixText}>
                  {formatMessage(messages.dateHeader)}
                </Text>
              </Stack.Item>
              <Stack.Item>
                <Text styles={styles.detailText}>{order.date}</Text>
              </Stack.Item>
            </Stack>
          )}
          {order.number && (
            <Stack
              tokens={{ childrenGap: spacing.s2 }}
              horizontal
              verticalAlign="center"
            >
              <Stack.Item>
                <Text styles={styles.prefixText}>
                  {formatMessage(messages.numberHeader)}
                </Text>
              </Stack.Item>
              <Stack.Item>
                <Text styles={styles.detailText}>{order.number}</Text>
              </Stack.Item>
            </Stack>
          )}
        </Stack>
        {order.canReorder && (
          <Stack>
            <PrimaryButton
              text={formatMessage(messages.reorderAll)}
              onClick={() => {
                return handleReorder(orderCartItems);
              }}
            />
          </Stack>
        )}
        {!!lastAddedItems?.length && (
          <CartItemAddedDialog
            lastAddedItems={orderCartItems}
            setLastAddedItems={setLastAddedItems}
          />
        )}
      </Stack>
      <Stack id="order-detail-list-items" tokens={{ childrenGap: spacing.m }}>
        {visibleOrderLines?.map(line => {
          return (
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="center"
              tokens={{ childrenGap: spacing.m }}
              key={line.name}
              styles={styles.lineContainer}
            >
              <Stack
                horizontal
                verticalAlign="center"
                tokens={{ childrenGap: spacing.m }}
              >
                <Stack
                  styles={styles.accountProductLineImageContainer}
                  verticalAlign="center"
                >
                  <NextLink href={line.url} passHref>
                    <a>
                      <Image
                        priority
                        src={line.imageUrl}
                        layout="fixed"
                        objectPosition={'center'}
                        alt={line.imageAlt}
                        width={isTabletOrDesktop ? 120 : 70}
                        height={isTabletOrDesktop ? 90 : 70}
                        objectFit="contain"
                        loader={widenImageLoader}
                      />
                    </a>
                  </NextLink>
                </Stack>
                <NextLink href={line.url} passHref>
                  <a>
                    <Stack tokens={{ childrenGap: spacing.s1 }}>
                      <Text variant="mediumPlus">{line.number}</Text>
                      <Text>{line.name}</Text>
                      <Text>{line.quantity}</Text>
                    </Stack>
                  </a>
                </NextLink>
              </Stack>
              <Stack
                tokens={{ childrenGap: spacing.s1 }}
                verticalFill
                styles={styles.lineAmount}
              >
                {line.unitAmount !== line.totalAmount && (
                  <Stack>
                    <Text styles={styles.prefixText}>{line.unitAmount}</Text>
                  </Stack>
                )}
                {order.totalAmount && (
                  <Stack>
                    <Text styles={styles.lineTotal}>{line.totalAmount}</Text>
                  </Stack>
                )}
              </Stack>
            </Stack>
          );
        })}
      </Stack>
      {shouldDisplayButton && (
        <Stack
          horizontal
          horizontalAlign="center"
          styles={{ root: { marginTop: '-10px !important' } }}
        >
          <DefaultButton
            onClick={() => {
              setDisplayAllLines(true);
            }}
            iconProps={{ iconName: 'chevronDown' }}
            text={formatMessage(messages.viewAllLines, {
              number: order.lines.length - MAX_ITEMS
            })}
          />
        </Stack>
      )}
      <OrderDetailInfoSection
        order={order}
        reorder={
          order.canReorder
            ? () => {
                return handleReorder(orderCartItems);
              }
            : undefined
        }
      />
    </Stack>
  );
};

interface OrderConfirmationCardStyles {
  title: ITextStyles;
  root: IStackStyles;
  messageBar: Partial<IMessageBarStyles>;
}

const OrderConfirmationCard: React.FC = () => {
  const { formatMessage } = useIntl();
  const { palette, spacing } = useTheme();

  const styles: OrderConfirmationCardStyles = {
    messageBar: {
      root: {
        marginBottom: rem(20),
        padding: spacing.m
      }
    },
    title: {
      root: {
        fontWeight: FontWeights.semibold
      }
    },
    root: {
      root: {
        border: `1px solid ${palette.greenDark}`,
        backgroundColor: palette.greenLight
      }
    }
  };
  return (
    <MessageBar
      styles={styles.messageBar}
      messageBarType={MessageBarType.success}
    >
      <Stack tokens={{ childrenGap: spacing.s1 }}>
        <Stack.Item>
          <Text styles={styles.title} variant="mediumPlus">
            {formatMessage(messages.confirmationTitle)}
          </Text>
        </Stack.Item>
        <Stack.Item>
          <Text>{formatMessage(messages.confirmationText)}</Text>
        </Stack.Item>
      </Stack>
    </MessageBar>
  );
};
