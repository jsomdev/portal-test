import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { StickyThumbContainer } from '@components/sticky/stickyThumbContainer';
import { PrimaryButton } from '@fluentui/react';
import { messageIds } from '@services/i18n';

const messages = defineMessages({
  proceed: {
    id: messageIds.pages.cart.summary.actions.proceed,
    defaultMessage: 'Proceed to checkout',
    description: 'Proceed to checkout text on cart sticky ui for mobile'
  }
});
export const CartStickyThumb: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <StickyThumbContainer>
      <PrimaryButton text={formatMessage(messages.proceed)} />
    </StickyThumbContainer>
  );
};
