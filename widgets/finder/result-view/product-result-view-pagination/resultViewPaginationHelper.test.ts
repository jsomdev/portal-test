import { getPagination, getTotalPages } from './resultViewPaginationHelper';

describe('List View Pagination', () => {
  test('Total pages are retrieved correctly', () => {
    let expectedPages: number = 100;
    let totalPages = getTotalPages(1000, 10);

    // First section
    expect(totalPages).toEqual(expectedPages);
    totalPages = getTotalPages(995, 10);
    expect(totalPages).toEqual(expectedPages);

    // Second section
    totalPages = getTotalPages(0, 10);
    expectedPages = 0;
    expect(totalPages).toEqual(expectedPages);

    //Third section
    totalPages = getTotalPages(222, 2);
    expectedPages = 111;
    expect(totalPages).toEqual(expectedPages);
  });

  test('Visible Pages are calculated correctly', () => {
    let currentPage = 1;
    let totalItems = 1000;
    const pageSize = 10;
    let maxLength = 4;

    let totalPages: number[] = getPagination(
      currentPage,
      totalItems,
      pageSize,
      maxLength
    );

    // Trailing seperator
    expect(totalPages).toEqual([1, 2, 3, 4, 5, 6, -1, 100]);

    totalItems = 11;
    totalPages = getPagination(currentPage, totalItems, pageSize, maxLength);
    // No seperators
    expect(totalPages).toEqual([1, 2]);

    (totalItems = 1000), (maxLength = 1), (currentPage = 3);
    totalPages = getPagination(currentPage, totalItems, pageSize, maxLength);
    // Double seperators
    expect(totalPages).toEqual([1, -1, 3, -1, 100]);

    currentPage = 1;
    totalPages = getPagination(currentPage, totalItems, pageSize, maxLength);
    // Trailing and extra visual number
    expect(totalPages).toEqual([1, 2, 3, -1, 100]);
    console.log(totalPages);
  });
});
