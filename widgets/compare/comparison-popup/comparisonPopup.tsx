import React, { useContext, useEffect, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import { PillCount } from '@components/pill-count/pillCount';
import {
  DefaultButton,
  FontWeights,
  List,
  PrimaryButton,
  Stack,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';

import { useProductCompare } from '../productCompareContext';
import { ComparisonPopupStyles } from './comparisonPopup.types';
import { QuickAccessProduct } from './quickAccessProduct';

const popupButtonHeight = 40;
const popupMaxHeight = rem(340);
const boxShadowHidden =
  'rgba(0, 0, 0, 0) 0px 25.6px 57.6px 0px, rgba(0, 0, 0, 0) 0px 4.8px 14.4px 0px';
const boxShadowVisible =
  'rgba(0, 0, 0, 0.22) 0px 25.6px 57.6px 0px, rgba(0, 0, 0, 0.18) 0px 4.8px 14.4px 0px';

const messages = defineMessages({
  title: {
    id: messageIds.comparisonPopup.title,
    defaultMessage: 'Compare Products',
    description: 'Title text for the comparison popup'
  },
  compare: {
    id: messageIds.comparisonPopup.compare,
    defaultMessage: 'Compare',
    description: 'Button text to go to the compare page'
  },
  clearAll: {
    id: messageIds.comparisonPopup.clearAll,
    defaultMessage: 'Clear all',
    description: 'Button text to remove all products from the  compare'
  }
});

export const ComparisonPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { palette, spacing, effects } = useTheme();
  const { formatMessage } = useIntl();
  const { products, removeProduct, getUrl, clearProducts } =
    useProductCompare();

  useEffect(() => {
    if (products.length === 0) {
      setShowPopup(false);
    }
  }, [products]);

  const calculatedMaxHeight = React.useMemo(() => {
    if (products.length === 0) {
      return 0;
    } else if (products.length > 0 && !showPopup) {
      return popupButtonHeight;
    }
    return showPopup ? popupMaxHeight : popupButtonHeight;
  }, [showPopup, products]);

  const styles: ComparisonPopupStyles = {
    popupWrapper: {
      root: {
        position: 'fixed',
        bottom: 0,
        right: spacing.m,
        borderRadius: `${effects.roundedCorner4} ${effects.roundedCorner4} 0 0`,
        overflow: 'hidden',
        maxHeight: calculatedMaxHeight,
        transition: 'max-height 0.25s ease-in',
        backgroundColor: palette.white,
        border: `1px solid ${palette.neutralLight}`,
        boxShadow: showPopup ? boxShadowVisible : boxShadowHidden,
        zIndex: 5,
        '@media(max-width: 425px)': {
          right: 0,
          width: '100vw'
        }
      }
    },
    toggleButton: {
      root: {
        height: popupButtonHeight,
        borderRadius: `${effects.roundedCorner2} ${effects.roundedCorner2} 0 0`,
        backgroundColor: palette.neutralLighterAlt,
        color: palette.themePrimary,
        border: 'none',
        borderBottom: `1px solid ${palette.neutralLight}`,
        width: '100%'
      },
      rootHovered: {
        backgroundColor: palette.neutralLighterAlt,
        borderColor: palette.neutralLight,
        color: palette.neutralLighterAlt
      },
      rootPressed: {
        backgroundColor: palette.neutralLighterAlt,
        borderColor: palette.neutralLight,
        color: palette.neutralLighterAlt
      },
      rootFocused: {
        backgroundColor: palette.neutralLighterAlt,
        borderColor: palette.neutralLight,
        color: palette.neutralLighterAlt
      },
      labelHovered: {
        color: palette.themePrimary
      },
      iconHovered: {
        color: palette.themePrimary
      },
      label: {
        color: palette.black
      },
      icon: {
        color: palette.black,
        transform: showPopup ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.25s ease-in'
      }
    },
    listWrapper: {
      root: {
        width: 312,
        maxWidth: '100vw',
        overflow: products.length > 4 ? 'auto' : 'hidden',
        height: 3 * 79,
        '@media(max-width: 425px)': {
          right: 0,
          width: '100vw'
        }
      }
    },
    compareButton: {
      root: {
        width: '100%'
      }
    },
    compareWrapper: {
      root: {
        padding: spacing.m
      }
    }
  };

  if (products.length < 1) {
    return null;
  }

  return (
    <Stack styles={styles.popupWrapper}>
      <Stack.Item>
        <DefaultButton
          styles={styles.toggleButton}
          onClick={() => setShowPopup(!showPopup)}
          text={formatMessage(messages.title)}
          iconProps={{
            iconName: 'ChevronUp'
          }}
        >
          <PillCount value={products.length} />
        </DefaultButton>
      </Stack.Item>
      <Stack.Item>
        <Stack verticalFill>
          <Stack.Item>
            <Stack
              grow
              tokens={{ padding: `0 ${spacing.m} 0 ${spacing.s1}` }}
              className="list-scroll"
              styles={styles.listWrapper}
            >
              <Stack.Item>
                <List
                  items={products}
                  onRenderCell={item => {
                    return item ? (
                      <QuickAccessProduct
                        product={item}
                        onRemoveItem={() => removeProduct(item)}
                      />
                    ) : null;
                  }}
                />
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack
              horizontalAlign="center"
              horizontal
              tokens={{ childrenGap: spacing.s1 }}
              styles={styles.compareWrapper}
            >
              <NextLink href={getUrl()} passHref>
                <PrimaryButton
                  disabled={products.length <= 1}
                  text={formatMessage(messages.compare)}
                  styles={styles.compareButton}
                />
              </NextLink>
              <DefaultButton
                text={formatMessage(messages.clearAll)}
                onClick={() => {
                  clearProducts();
                }}
                styles={styles.compareButton}
              />
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
