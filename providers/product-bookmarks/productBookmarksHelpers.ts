import { ProductBookmark } from './models';

/**
 * Function that filters out the productId from the bookmarksArray and returns the filtered array.
 * @param productId identifies the product that needs to be removed from the bookmarks
 * @param bookmarks the current bookmarks
 */
export const removeProductFromBookmarksArray = (
  productId: string,
  bookmarks: ProductBookmark[]
): ProductBookmark[] => {
  return bookmarks.filter(bookmark => bookmark.id !== productId);
};

/**
 * Function that creates a productBookmark from the productId and adds it to the array if it's not yet
 * @param productId identifies the product that needs to be added to the bookmarks
 * @param bookmarks the current bookmarks
 */
export const addProductToBookmarksArray = (
  productId: string,
  bookmarks: ProductBookmark[]
): ProductBookmark[] => {
  const MAXITEMS = 50;
  if (!bookmarks.find(bookmark => bookmark.id === productId)) {
    return [{ id: productId }, ...bookmarks].slice(0, MAXITEMS);
  }
  return bookmarks;
};

/**
 * Function that checks whether a product is bookmarked
 * @param productId identifies the product
 * @param bookmarks array of bookmarked products
 */
export const isProductBookmarked = (
  productId: string,
  bookmarks: ProductBookmark[] | undefined
): boolean => {
  const isBookmarked = !!bookmarks?.find(bookmark => bookmark.id === productId);
  return isBookmarked;
};
