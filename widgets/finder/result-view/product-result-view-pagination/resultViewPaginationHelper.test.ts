import {
  getTotalPages,
  getVisiblePaginationPages
} from './resultViewPaginationHelper';

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
    const currentPage = 1;
    let totalItems = 1000;
    const pageSize = 10;
    const maxLength = 4;

    let totalPages: number[] = getVisiblePaginationPages(
      currentPage,
      totalItems,
      pageSize,
      maxLength
    );

    expect(totalPages.length).toEqual(maxLength);
    expect(totalPages[2]).toEqual(3);

    totalItems = 11;
    totalPages = getVisiblePaginationPages(
      currentPage,
      totalItems,
      pageSize,
      maxLength
    );
    expect(totalPages.length).toEqual(2);
  });
});
