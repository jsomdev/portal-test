import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  FontWeights,
  IStackStyles,
  ITextStyles,
  List,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { PriceBreak } from '@services/portal-api/base/types';
import { rem } from '@utilities/rem';

interface PriceBreakListProps {
  priceBreaks: PriceBreak[];
  quantity: number;
  cartQuantity: number;
}

interface PriceBreakListStyles {
  listHeader: ITextStyles;
  row: IStackStyles;
  rowText: (value: boolean) => ITextStyles;
  wrapper: IStackStyles;
}

const messages = defineMessages({
  quantityHeader: {
    id: messageIds.pricing.quantityLabel,
    defaultMessage: 'Quantity',
    description: 'Text for Quantity'
  },
  priceHeader: {
    id: messageIds.pricing.priceLabel,
    defaultMessage: 'Price',
    description: 'Text for Price'
  },
  quotedPrice: {
    id: messageIds.pricing.quotedPrice,
    defaultMessage: 'Quoted Price',
    description: 'Quoted Price text'
  }
});
/**
 * A component that renders a visual list of all price breaks belonging to a product.
 * The active price break, based on the quanitty and cartQuantity params, will be highlighted
 * @param priceBreaks A list of price breaks that will be rendered in a list view
 * @param quantity The quantity of the item that will be added to the cart
 * @param cartQuantity The quantity of the item already stored in the cart
 */
export const PriceBreakList: React.FC<PriceBreakListProps> = ({
  priceBreaks,
  quantity,
  cartQuantity
}) => {
  const { spacing, palette } = useTheme();
  const { formatNumber, formatMessage } = useIntl();

  const activePriceBreakIndex: number = React.useMemo(() => {
    const totalQuantity = quantity + cartQuantity;
    return priceBreaks.findIndex(priceBreak => {
      return (
        totalQuantity >= priceBreak.minimumQuantity &&
        totalQuantity <= priceBreak.maximumQuantity
      );
    });
  }, [priceBreaks, quantity, cartQuantity]);

  const highestPriceBreak: PriceBreak | undefined = React.useMemo(() => {
    if (!priceBreaks?.length) {
      return undefined;
    }
    return priceBreaks.reduce((prev, current) =>
      prev.minimumQuantity > current.minimumQuantity ? prev : current
    );
  }, [priceBreaks]);

  const styles: PriceBreakListStyles = {
    wrapper: {
      root: {
        selectors: {
          '.ms-List-cell:nth-child(odd)': {
            background: palette.neutralLighter
          }
        }
      }
    },
    listHeader: {
      root: {
        fontWeight: FontWeights.semibold
      }
    },
    row: {
      root: {
        padding: spacing.s1,
        position: 'relative',
        boxSizing: 'border-box',
        width: 150,
        whiteSpace: 'nowrap'
      }
    },
    rowText: (isAccent: boolean) => ({
      root: {
        color: isAccent ? palette.themePrimary : palette.neutralPrimary,
        fontWeight: isAccent ? FontWeights.semibold : FontWeights.regular
      }
    })
  };

  const onRenderCell = (
    item?: PriceBreak | undefined,
    index?: number
  ): JSX.Element => {
    if (!item) {
      return <div />;
    }
    const isAccentRow: boolean = index === activePriceBreakIndex;
    const quantityText: string =
      item.minimumQuantity === highestPriceBreak?.minimumQuantity
        ? `${item?.minimumQuantity}+`
        : `${item?.minimumQuantity} - ${item?.maximumQuantity}`;
    const priceText: string =
      item.price === 0
        ? formatMessage(messages.quotedPrice)
        : formatNumber(item.price, {
            currency: item.currencyCode,
            currencyDisplay: 'narrowSymbol',
            style: 'currency'
          });
    return (
      <Stack horizontal wrap={false}>
        <Stack.Item styles={styles.row}>
          <Text styles={styles.rowText(isAccentRow)}>{quantityText}</Text>
        </Stack.Item>
        <Stack.Item styles={styles.row}>
          <Text styles={styles.rowText(isAccentRow)}>{priceText}</Text>
        </Stack.Item>
      </Stack>
    );
  };

  return (
    <Stack styles={styles.wrapper}>
      <Stack horizontal>
        <Stack.Item styles={styles.row}>
          <Text styles={styles.listHeader}>
            {formatMessage(messages.quantityHeader)}
          </Text>
        </Stack.Item>
        <Stack.Item styles={styles.row}>
          <Text styles={styles.listHeader}>
            {formatMessage(messages.priceHeader)}
          </Text>
        </Stack.Item>
      </Stack>
      <List items={priceBreaks} onRenderCell={onRenderCell} />
    </Stack>
  );
};
