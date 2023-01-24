import React from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { StickyThumbContainer } from '@components/sticky/stickyThumbContainer';
import { IButtonStyles, PrimaryButton } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import pagePaths from '@utilities/pagePaths';
import { mediaQueryFrom } from '@widgets/media-queries';

const messages = defineMessages({
  proceed: {
    id: messageIds.pages.cart.summary.actions.proceed,
    defaultMessage: 'Proceed to checkout',
    description: 'Proceed to checkout text on cart sticky ui for mobile'
  }
});

interface CartStickyThumbStyles {
  proceedButton: Partial<IButtonStyles>;
}
export const CartStickyThumb: React.FC = () => {
  const { formatMessage } = useIntl();
  const { push } = useRouter();
  const styles: CartStickyThumbStyles = {
    proceedButton: {
      root: {
        height: 48,
        width: '100%',
        ...mediaQueryFrom('tablet', {
          height: 42
        })
      }
    }
  };
  return (
    <StickyThumbContainer>
      <PrimaryButton
        onClick={() => push(pagePaths.checkout)}
        styles={styles.proceedButton}
        text={formatMessage(messages.proceed)}
      />
    </StickyThumbContainer>
  );
};
