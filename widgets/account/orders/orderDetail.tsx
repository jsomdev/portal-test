import React, { useMemo, useState } from 'react';

import Image from 'next/image';
import { defineMessages, useIntl } from 'react-intl';

import { ErrorMessage } from '@components/errors/errorMessage';
import { NextLink } from '@components/link/nextLink';
import { PortalMessageBar } from '@components/messages/portalMessageBar';
import { LoadingSpinner } from '@components/spinners/loadingSpinner';
import {
  DefaultButton,
  FontWeights,
  IButtonStyles,
  IMessageBarStyles,
  IStackStyles,
  ITextStyles,
  MessageBarType,
  PrimaryButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { CartItem } from '@providers/cart/cartContext';
import { messageIds } from '@services/i18n';
import { getImageLoader } from '@utilities/image-loaders/getImageLoader';
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
    defaultMessage: 'Ordered on'
  },
  numberHeader: {
    id: messageIds.pages.account.orders.numberHeader,
    description: 'order number header',
    defaultMessage: 'Order number'
  },
  reorderAll: {
    id: messageIds.pages.account.orders.reorderAll,
    description: 'Reorder all products button',
    defaultMessage: 'Reorder'
  },
  viewAllLines: {
    id: messageIds.pages.account.orders.viewAllLines,
    description: 'Button text to show all order lines',
    defaultMessage: 'Show all'
  },
  error: {
    id: messageIds.pages.account.orders.detailPageError,
    description: 'Error message when order cannot be loaded',
    defaultMessage: 'Something went wrong while loading the order'
  },
  reorderSingle: {
    id: messageIds.pages.account.orders.reorderSingle,
    description: 'Reorder button text',
    defaultMessage: 'Reorder'
  },
  statusHeader: {
    id: messageIds.pages.account.orders.statusHeader,
    description: 'order card status header',
    defaultMessage: 'Status'
  },
  confirmationTitle: {
    id: messageIds.pages.account.orders.confirmationTitle,
    description: 'order card confirmation title',
    defaultMessage: 'Order confirmation'
  },
  confirmationText: {
    id: messageIds.pages.account.orders.confirmationText,
    description: 'order card confirmation text',
    defaultMessage: 'Your order has been placed'
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
    order: order,
    orderDataStatus,
    orderDataError,
    reorder,
    orderData
  } = useOrder(id);
  const [lastAddedItems, setLastAddedItems] = React.useState<
    CartItem[] | undefined
  >();
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
    if (!order?.lines.length) {
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

  if (orderDataStatus === 'error' || order === undefined) {
    return (
      <ErrorMessage
        error={orderDataError}
        logError
        message={formatMessage(messages.error)}
      />
    );
  }

  return (
    <Stack tokens={{ childrenGap: spacing.m }}>
      {showConfirmation && <OrderConfirmationCard />}
      <Stack
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
      <Stack tokens={{ childrenGap: spacing.m }}>
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
                        loader={getImageLoader(line.imageUrl)}
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
                {line.totalAmount && (
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
    <PortalMessageBar
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
    </PortalMessageBar>
  );
};
