import React, { useContext, useEffect, useMemo, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  DirectionalHint,
  FontWeights,
  IIconStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  Icon,
  Link,
  Stack,
  Text,
  TooltipHost,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { DisplayValueType } from '@services/i18n/formatters/entity-formatters/displayFormatter';
import { rem } from '@utilities/rem';
import { mediaQueryFrom } from '@widgets/media-queries';

import { ProductCompareContext } from '../productCompareContext';
import { CompareAttributeValue } from './detailedCompare.types';

export interface DetailedCompareListItemProps {
  index: number;
  name: string;
  compareValues: CompareAttributeValue[];
  onClick: () => void;
  hideInfoIcon?: boolean;
}

export interface ProductCompareListItemStyles {
  infoIcon: IIconStyles;
  root: (index: number) => IStackStyles;
  title: ITextStyles;
  textWrapper: (showHighlighted: boolean) => IStackItemStyles;
  booleanTypeIcon: (value: boolean) => IIconStyles;
}

const messages = defineMessages({
  openLink: {
    id: messageIds.pages.product.sections.specifications.actions.openLink,
    defaultMessage: 'Open Link'
  }
});

export const DetailedCompareListItem: React.FC<
  DetailedCompareListItemProps
> = ({ compareValues, index, onClick, name, hideInfoIcon }) => {
  const { spacing, palette, effects } = useTheme();
  const { formatMessage } = useIntl();
  const { baseProductNumber, visibleProducts, visibleIndex, products } =
    useContext(ProductCompareContext);

  const [visibleIndexOpacity, setVisibleIndexOpacity] = useState<number>(1);
  useEffect(() => {
    setVisibleIndexOpacity(0);
    const handler: NodeJS.Timeout | undefined = setTimeout(() => {
      setVisibleIndexOpacity(1);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [visibleIndex]);

  const baseProductIndex = useMemo(() => {
    if (!baseProductNumber) {
      return 0;
    }
    const index = compareValues
      .map(value => value.productNumber)
      .indexOf(baseProductNumber);

    return index === -1 ? 0 : index;
  }, [baseProductNumber, compareValues]);

  const styles: ProductCompareListItemStyles = {
    booleanTypeIcon: (value: boolean) => ({
      root: {
        color: !value ? palette.neutralPrimary : palette.green
      }
    }),
    infoIcon: {
      root: {
        color: palette.accent,
        visibility: hideInfoIcon ? 'hidden' : 'visible',
        fontSize: 17
      }
    },
    title: {
      root: {
        paddingTop: spacing.s2,
        paddingBottom: spacing.s2,
        flex: 1,
        minWidth: rem(240),
        maxWidth: rem(240),
        paddingRight: spacing.m
      }
    },
    textWrapper: (showHighlighted: boolean) => ({
      root: {
        flex: 1,
        minWidth: rem(180),
        opacity: visibleIndexOpacity,
        transition:
          (visibleIndexOpacity === 1 && 'opacity 0.2s ease-in') || undefined,
        ' span': {
          fontWeight: FontWeights.semibold,
          color: showHighlighted ? palette.themePrimary : palette.neutralPrimary
        },
        ...mediaQueryFrom('tablet', {
          ' span': {
            fontWeight: showHighlighted
              ? FontWeights.semibold
              : FontWeights.regular
          }
        })
      }
    }),

    root: (index: number) => ({
      root: {
        cursor: 'pointer',
        borderRadius: effects.roundedCorner4,
        flexWrap: 'wrap',
        padding: spacing.s2,
        backgroundColor:
          index % 2 === 0 ? palette.white : palette.neutralLighterAlt,
        ...mediaQueryFrom('tablet', { flexWrap: 'nowrap' })
      }
    })
  };

  const renderLink = (linksString: string, seperator: string): JSX.Element => {
    const splitLinks = linksString.split(seperator);
    return (
      <Stack horizontal grow wrap tokens={{ childrenGap: spacing.s1 }}>
        {splitLinks.map((link, index) => {
          return (
            <a
              target="#blank"
              className="ms-Link"
              onClick={ev => ev.stopPropagation()}
              key={link}
              href={link}
            >
              {formatMessage(messages.openLink, { index: index + 1 })}
            </a>
          );
        })}
      </Stack>
    );
  };

  const renderValues = (
    items: CompareAttributeValue[],
    baseIndex: number,
    startIndex: number,
    endIndex: number
  ) => {
    const rows: JSX.Element[] = [];
    if (endIndex > products.length) {
      endIndex = products.length;
    }
    for (let index = startIndex; index < endIndex; index++) {
      const item = items.find(x => x.columnIndex === index);
      const highlight: boolean = item?.text !== items[baseIndex]?.text;
      rows.push(
        <Stack.Item
          tokens={{
            padding: `0 ${spacing.m}`
          }}
          styles={styles.textWrapper(highlight)}
          key={`${item?.productNumber} ${index}`}
        >
          <TooltipHost
            content={item?.alternativeValue}
            hidden={item?.alternativeValue.localeCompare(item?.text) === 0}
            calloutProps={{ gapSpace: 0 }}
            directionalHint={DirectionalHint.topCenter}
          >
            {item?.type === DisplayValueType.Url ? (
              renderLink(item?.text || '', ', ')
            ) : item?.type === DisplayValueType.Boolean ? (
              <Icon
                styles={styles.booleanTypeIcon(!!item?.value)}
                iconName={!item?.value ? 'SkypeMinus' : 'SkypeCheck'}
              />
            ) : (
              <Text>{item?.text || '-'}</Text>
            )}
          </TooltipHost>
        </Stack.Item>
      );
    }
    return rows;
  };

  return (
    <Stack
      horizontal
      verticalAlign="stretch"
      onClick={onClick}
      tokens={{
        padding: spacing.s2
      }}
      styles={styles.root(index)}
    >
      <Stack
        styles={styles.title}
        horizontal
        verticalAlign="center"
        tokens={{ childrenGap: spacing.s2 }}
      >
        <Icon iconName="Info" styles={styles.infoIcon} />
        <Text>{name}</Text>
      </Stack>
      <Stack
        grow
        horizontal
        verticalAlign="center"
        styles={{
          root: {
            ...mediaQueryFrom('tablet', {
              padding: `0 56px 0 56px`
            })
          }
        }}
        tokens={{ childrenGap: spacing.m }}
      >
        {renderValues(
          compareValues,
          baseProductIndex,
          visibleIndex,
          visibleIndex + visibleProducts
        ).map(row => row)}
      </Stack>
    </Stack>
  );
};
