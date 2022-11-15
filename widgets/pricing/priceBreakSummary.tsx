import React, { useMemo } from 'react';

import { useIntl } from 'react-intl';

import {
  FontWeights,
  IStackItemStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { PriceBreak } from '@services/portal-api/base/types';

import { PriceLabel } from './price-label/priceLabel';

const messages = {
  title: 'Quantity Discount Info',
  quotedPrice: 'Quoted Price'
};
export const PriceBreaksSummary: React.FC<{
  priceBreaks: PriceBreak[] | undefined;
  quantity: number;
}> = ({ priceBreaks, quantity }) => {
  const { spacing } = useTheme();
  const { formatNumber } = useIntl();
  const activePriceBreakIndex: number | undefined = useMemo(() => {
    return priceBreaks?.findIndex(priceBreak => {
      return (
        priceBreak.minimumQuantity <= quantity &&
        priceBreak.maximumQuantity >= quantity
      );
    });
  }, [priceBreaks, quantity]);
  if (!priceBreaks || priceBreaks.length < 2) {
    return null;
  }
  return (
    <Stack>
      {/* <Stack.Item>
        <ProductSubsectionHeader title={messages.title} />
      </Stack.Item> */}
      <Stack.Item>
        <Stack
          horizontal
          verticalAlign="center"
          wrap
          styles={{
            inner: {
              '& span': {
                fontWeight: FontWeights.regular
              }
            }
          }}
          tokens={{ padding: `${spacing.s1} 0`, childrenGap: spacing.s1 }}
        >
          {priceBreaks.map((priceBreak, index) => (
            <PriceBreakChip
              isActive={activePriceBreakIndex === index}
              key={priceBreak.minimumQuantity}
              minimumQuantity={priceBreak.minimumQuantity}
            >
              <PriceLabel
                size="small"
                primaryText={
                  (priceBreak.price &&
                    formatNumber(priceBreak.price, {
                      currency: priceBreak.currencyCode,
                      currencyDisplay: 'narrowSymbol',
                      style: 'currency'
                    })) ||
                  messages.quotedPrice
                }
                status="success"
              />
            </PriceBreakChip>
          ))}
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

interface ChipProps {
  isActive?: boolean;
  minimumQuantity: number;
  children: React.ReactNode;
}

interface ChipStyles {
  root: IStackStyles;
  quantityContainer: IStackItemStyles;
  contentContainer: IStackItemStyles;
}
const PriceBreakChip: React.FC<ChipProps> = ({
  isActive,
  minimumQuantity,
  children
}) => {
  const { palette, spacing, effects } = useTheme();
  const { formatNumber } = useIntl();
  const styles: ChipStyles = {
    root: {
      root: {
        borderRadius: effects.roundedCorner4,
        background: isActive ? palette.themeLighter : palette.neutralLighterAlt,
        height: 32,
        paddingLeft: spacing.m,
        paddingRight: spacing.m
      }
    },
    quantityContainer: {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: spacing.s2,
        paddingBottom: spacing.s2,
        paddingRight: spacing.s2,
        color: palette.neutralSecondary
      }
    },
    contentContainer: {
      root: {
        paddingTop: spacing.s2,
        paddingBottom: spacing.s2,
        paddingLeft: spacing.s2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  };
  return (
    <Stack horizontal styles={styles.root}>
      <Stack.Item styles={styles.quantityContainer}>{`${formatNumber(
        minimumQuantity
      )}+`}</Stack.Item>

      {children && (
        <Stack.Item styles={styles.contentContainer}>{children}</Stack.Item>
      )}
    </Stack>
  );
};
