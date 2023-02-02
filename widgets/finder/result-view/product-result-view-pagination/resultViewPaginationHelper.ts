/**
 * This function returns an array of numbers that represent the pagination.
 *
 * @param currentPage - The current page number.
 * @param totalItems - The total number of items.
 * @param pageSize - The number of items per page.
 * @param maximumExtraPages - The maximum number of pages other than the first,current and last.
 *
 * @returns An array of numbers that represents the pagination.
 */
export function getPagination(
  currentPage: number,
  totalItems: number,
  pageSize: number,
  maximumExtraPages: number
): number[] {
  // Calculate the total number of pages
  let totalPages = getTotalPages(totalItems, pageSize);

  // If there's no pages (no items), return an empty array
  if (totalPages === 0) {
    return [];
  }
  // If there's only one page, return an array with only one page
  if (totalPages === 1) {
    return [1];
  }

  // $skip is limite
  if (totalPages * pageSize > 100000) {
    totalPages = 10000;
  }

  // Initialize the visible pages array
  let visiblePages: number[] = [1, totalPages];

  // Calculate the range of pages to display based on the current page
  let start = currentPage - Math.floor(maximumExtraPages / 2);
  let end = currentPage + Math.floor(maximumExtraPages / 2);

  // If the start of the range is less than 2, move it to 2
  if (start < 2) {
    start = 2;
    end = start + maximumExtraPages;
  }
  // If the end of the range is greater than the second to last page, move it to the second to last page
  if (end > totalPages - 1) {
    end = totalPages - 1;
    start = end - maximumExtraPages < 2 ? 2 : end - maximumExtraPages;
  }

  // Add the pages in the range to the visible pages array
  for (let i = start; i <= end; i++) {
    visiblePages.push(i);
  }

  // Sort the visible pages array
  visiblePages = visiblePages.sort((a, b) => a - b);

  // Insert -1 between the first and second pages if there are more pages than the maximum visible pages
  if (visiblePages[1] > 2) {
    visiblePages.splice(1, 0, -1);
  }

  // Insert -1 between the second to last and last pages if there are more pages than the maximum visible pages
  if (visiblePages[visiblePages.length - 2] < totalPages - 1) {
    visiblePages.splice(visiblePages.length - 1, 0, -1);
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
