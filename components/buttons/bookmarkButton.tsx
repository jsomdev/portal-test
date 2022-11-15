import React, { FC, useContext, useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { useIsAuthenticated } from '@azure/msal-react';
import {
  DefaultButton,
  IButtonStyles,
  IconButton,
  useTheme
} from '@fluentui/react';
import { ProductBookmark } from '@providers/product-bookmarks/models';
import { ProductBookmarksContext } from '@providers/product-bookmarks/productBookmarksContext';
import { messageIds } from '@services/i18n';

const messages = defineMessages({
  bookmark: {
    id: messageIds.bookmarks.actions.bookmark,
    defaultMessage: 'Bookmark',
    description: 'Button text for bookmarking a product'
  }
});

type ProductBookmarkButtonProps = {
  productId: string | undefined;
  displayAsDefaultButton?: boolean;
};

enum ProductBookmarkButtonIcons {
  SingleBookmark = 'SingleBookmark',
  SingleBookmarkSolid = 'SingleBookmarkSolid'
}
export const ProductBookmarkButton: FC<ProductBookmarkButtonProps> = ({
  productId,
  displayAsDefaultButton
}) => {
  const { palette } = useTheme();
  const { formatMessage } = useIntl();
  const {
    setting: bookmarkSetting,
    removeBookmark,
    addBookmark
  } = useContext(ProductBookmarksContext);
  const isAuthenticated = useIsAuthenticated();
  const isBookmarked = useMemo(() => {
    const bookmarks: ProductBookmark[] | undefined = bookmarkSetting?.value
      ?.productBookmarks as ProductBookmark[] | undefined;
    return bookmarks ? !!bookmarks.find(item => item.id === productId) : false;
  }, [bookmarkSetting, productId]);
  const styles: IButtonStyles = {
    root: {
      background: 'rgba(255, 255,255, 0.7)'
    }
  };

  if (!isAuthenticated || !productId) {
    return null;
  }
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
        checked={isBookmarked}
        iconProps={{
          iconName: isBookmarked
            ? ProductBookmarkButtonIcons.SingleBookmarkSolid
            : ProductBookmarkButtonIcons.SingleBookmark
        }}
        onClick={() =>
          isBookmarked && productId
            ? removeBookmark(productId)
            : addBookmark(productId || '')
        }
        text={formatMessage(messages.bookmark)}
      />
    );
  }
  return (
    <IconButton
      styles={styles}
      onClick={() =>
        isBookmarked
          ? removeBookmark(productId || '')
          : addBookmark(productId || '')
      }
      iconProps={{
        iconName: isBookmarked
          ? ProductBookmarkButtonIcons.SingleBookmarkSolid
          : ProductBookmarkButtonIcons.SingleBookmark
      }}
    />
  );
};
