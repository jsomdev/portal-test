import React, { FC, useContext, useMemo } from 'react';

import { defineMessages } from 'react-intl';

import { useIsAuthenticated } from '@azure/msal-react';
import {
  DefaultButton,
  IButtonStyles,
  IconButton,
  useTheme
} from '@fluentui/react';
import { ProductBookmark } from '@providers/product-bookmarks/models';
import { ProductBookmarksContext } from '@providers/product-bookmarks/productBookmarksContext';

import {
  ProductBookmarkButtonIcons,
  ProductBookmarkButtonProps
} from './productBookmarkButton.types';

const messages = defineMessages({
  button: {
    id: 'productBookmarkButton.button',
    description: 'Button text for product bookmark button',
    defaultMessage: 'Bookmark'
  }
});

export const ProductBookmarkButton: FC<ProductBookmarkButtonProps> = ({
  product,
  displayAsDefaultButton
}) => {
  const { palette } = useTheme();
  const {
    setting: bookmarkSetting,
    removeBookmark,
    addBookmark
  } = useContext(ProductBookmarksContext);
  const isAuthenticated = useIsAuthenticated();
  const isBookmarked = useMemo(() => {
    const bookmarks: ProductBookmark[] | undefined = bookmarkSetting?.value
      ?.productBookmarks as ProductBookmark[] | undefined;
    return bookmarks ? !!bookmarks.find(item => item.id === product.id) : false;
  }, [bookmarkSetting, product]);
  const styles: IButtonStyles = {
    root: {
      background: 'rgba(255, 255,255, 0.7)'
    }
  };

  if (!isAuthenticated) {
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
          isBookmarked && product.id
            ? removeBookmark(product.id)
            : addBookmark(product.id || '')
        }
        text={messages.button}
      />
    );
  }
  return (
    <IconButton
      styles={styles}
      onClick={() =>
        isBookmarked
          ? removeBookmark(product.id || '')
          : addBookmark(product.id || '')
      }
      iconProps={{
        iconName: isBookmarked
          ? ProductBookmarkButtonIcons.SingleBookmarkSolid
          : ProductBookmarkButtonIcons.SingleBookmark
      }}
    />
  );
};
