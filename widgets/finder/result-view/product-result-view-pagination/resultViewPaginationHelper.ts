/**
 * Function that returns an array with the visible pages (for buttons) inside the pagination.
 * @param currentPage page that is currently active
 * @param totalItems total items used to get the totalpages
 * @param pageSize amount of items displayed per page
 * @param maxLength max amount of pages to be displayed in the pagination
 */
export function getVisiblePaginationPages(
  currentPage: number,
  totalItems: number,
  pageSize: number,
  maxLength: number
): number[] {
  const totalPages = getTotalPages(totalItems, pageSize);
  if (totalPages === 0) {
    return [];
  }
  let visiblePages: number[] = [];

  while (
    visiblePages.length !== totalPages &&
    visiblePages.length < maxLength
  ) {
    if (visiblePages.length === 0) {
      visiblePages.unshift(currentPage);
    } else if (visiblePages[0] > 1) {
      visiblePages.push(visiblePages[0] - 1);
    } else {
      visiblePages.push(visiblePages[visiblePages.length - 1] + 1);
    }
    visiblePages = visiblePages.sort((a, b) => a - b);
  }
  return visiblePages;
}
/**
 * Function that calculates the amount of pages inside the pagination
 * @param totalItems count of the data
 * @param pageSize amount of items displayed per page
 */
export function getTotalPages(totalItems: number, pageSize: number): number {
  const totalPages = totalItems ? Math.ceil(totalItems / pageSize) : 0;
  return totalPages;
}
