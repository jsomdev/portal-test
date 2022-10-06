import React from 'react';

import { useRouter } from 'next/dist/client/router';

import { DefaultButton, FontSizes, Stack, useTheme } from '@fluentui/react';
import { CartContext, useCart } from '@providers/cart/cartContext';
import { scrollToTop } from '@utilities/scrollToTop';

import { CartListActionStyles } from './cartList.types';

//TODO ward translations
const messages = {
  continueButton: 'Continue shopping',
  clearButton: 'Clear cart'
};
export const CartListActions: React.FC = () => {
  const { spacing } = useTheme();
  const { baseItems } = useCart();
  const { push } = useRouter();
  const { clear } = React.useContext(CartContext);
  //TODO ward const { toPath } = useNavigate();

  const styles: CartListActionStyles = {
    icon: { root: { fontSize: FontSizes.small } }
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
          text={messages.continueButton}
          onClick={event => {
            event.preventDefault();
            push('/');
          }}
        />
      </Stack.Item>
      <Stack.Item>
        <Stack horizontal tokens={{ childrenGap: spacing.s1 }}>
          <DefaultButton
            text={messages.clearButton}
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
