import React, { FC, useContext, useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  Checkbox,
  DefaultButton,
  IButtonStyles,
  ICheckboxStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { Product } from '@services/portal-api';
import { TabletAndDesktop } from '@widgets/media-queries';

import { ProductCompareContext } from '../productCompareContext';

type ProductCompareButtonProps = {
  product: Product;
  displayAsDefaultButton?: boolean;
};

type ProductCompareButtonStyles = {
  checkbox: ICheckboxStyles;
  seeComparison: ITextStyles;
};

const messages = defineMessages({
  compare: {
    id: messageIds.finder.compare,
    defaultMessage: 'Compare',
    description: 'Text for the compare button'
  },
  seeComparison: {
    id: messageIds.finder.seeComparison,
    defaultMessage: 'See Comparison',
    description: 'Text for the see comparison link'
  }
});
export const ProductCompareButton: FC<ProductCompareButtonProps> = ({
  product,
  displayAsDefaultButton
}) => {
  const { palette, spacing, fonts } = useTheme();
  const { formatMessage } = useIntl();

  const { addProduct, removeProduct, getUrl, products } = useContext(
    ProductCompareContext
  );

  const checked = useMemo(() => {
    const index = products.findIndex(x => x.number === product.number);
    return index !== -1;
  }, [product, products]);
  const styles: ProductCompareButtonStyles = {
    seeComparison: {
      root: {
        height: 20,
        lineHeight: 20,
        color: palette.accent,
        '&:hover': {
          cursor: 'pointer',
          borderBottom: `1px solid ${palette.accent}`
        }
      }
    },
    checkbox: {
      label: {
        alignItems: 'center',
        height: 20
      },
      checkbox: {
        height: 14,
        width: 14
      },
      checkmark: {
        fontSize: fonts.medium.fontSize
      }
    }
  };

  if (displayAsDefaultButton) {
    const defaultButtonStyles: IButtonStyles = {
      iconChecked: {
        color: palette.themePrimary
      },
      rootChecked: {
        background: palette.white
      },
      labelChecked: {
        color: palette.themePrimary
      }
    };
    return (
      <DefaultButton
        styles={defaultButtonStyles}
        checked={checked}
        iconProps={{
          iconName: 'BuildQueueNew'
        }}
        onClick={() => (checked ? removeProduct(product) : addProduct(product))}
        text={formatMessage(messages.compare)}
      />
    );
  }

  return (
    <Stack
      horizontal
      verticalAlign="center"
      tokens={{ childrenGap: spacing.s1 }}
    >
      <Checkbox
        label={formatMessage(messages.compare)}
        checked={checked}
        styles={styles.checkbox}
        onChange={(ev, checked) => {
          if (!checked) {
            removeProduct(product);
          } else {
            addProduct(product);
          }
        }}
      />
      <TabletAndDesktop>
        {products.length > 1 && checked && (
          <NextLink href={getUrl()} passHref>
            <Text styles={styles.seeComparison}>
              {formatMessage(messages.seeComparison)}
            </Text>
          </NextLink>
        )}
      </TabletAndDesktop>
    </Stack>
  );
};
