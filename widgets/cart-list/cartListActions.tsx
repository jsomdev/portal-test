import React from 'react';

import { useRouter } from 'next/dist/client/router';
import { defineMessages, useIntl } from 'react-intl';

import { DefaultButton, IIconStyles, Stack, useTheme } from '@fluentui/react';
import { CartContext, useCart } from '@providers/cart/cartContext';
import { messageIds } from '@services/i18n';
import pagePaths from '@utilities/pagePaths';
import { scrollToTop } from '@utilities/scrollToTop';

export interface CartListActionStyles {
  icon: IIconStyles;
}

const messages = defineMessages({
  continueButton: {
    id: messageIds.pages.cart.actions.continue,
    description: 'Button to continue shopping on cart page',
    defaultMessage: 'Continue shopping'
  },
  clearButton: {
    id: messageIds.pages.cart.actions.clear,
    description: 'Button to clear cart on cart page',
    defaultMessage: 'Clear cart'
  }
});
export const CartListActions: React.FC = () => {
  const { formatMessage } = useIntl();
  const { spacing, fonts } = useTheme();
  const { baseItems } = useCart();
  const { push } = useRouter();
  const { clear } = React.useContext(CartContext);

  const styles: CartListActionStyles = {
    icon: { root: { fontSize: fonts.small.fontSize } }
  };

  return (
    <Stack
      tokens={{ padding: `${spacing.l2} 0 0 0` }}
      horizontal
      horizontalAlign="space-between"
    >
      <Stack.Item>
        <DefaultButton
          iconProps={{
            iconName: 'ChevronLeft',
            styles: styles.icon
          }}
          text={formatMessage(messages.continueButton)}
          onClick={event => {
            event.preventDefault();
            push(pagePaths.home);
          }}
        />
      </Stack.Item>
      <Stack.Item>
        <Stack horizontal tokens={{ childrenGap: spacing.s1 }}>
          <DefaultButton
            text={formatMessage(messages.clearButton)}
            disabled={baseItems.length === 0}
            onClick={() => {
              if (baseItems.length > 0) {
                clear();
                scrollToTop();
              }
            }}
          />
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
