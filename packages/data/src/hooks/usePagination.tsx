/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";

export interface PaginationOptions {
  /**
   * total record count
   */
  totalRecords: number;
  /**
   * current page (default 0)
   */
  currentPage?: number;
  /**
   * records per page
   */
  perPage?: number;
  /**
   * pagination change handler
   */
  onChange?: (page: number) => void;
}

const TOTAL_PILLS = 12;
const TOTAL_SIBLINGS = 2;
const TOTAL_MID_SIBLINGS = 3;

const makeRange = (start: number, end: number) => {
  const length = end - start;
  return Array.from({ length }, (_: AnyObject, idx: number) => idx + start);
};

/**
 * Custom hook to manage pagination state and logic.
 * It calculates the total number of pages, generates page ranges,
 * and provides a way to change the current page.
 * It also handles the transition of page changes to optimize performance.
 *
 * @param options - The pagination options including total records, current page, records per page, and change handler.
 * @returns An object containing the current page, total pages, head label, ranges for pagination pills, and a function to change the page.
 *
 * @example
 * ```jsx
 * const { page, totalPages, headLabel, ranges, onPageChange } = usePagination({
 *   totalRecords: 100,
 *   currentPage: 0,
 *   perPage: 10,
 *   onChange: (newPage) => console.log("Page changed to:", newPage),
 * });
 * ```
 */
export const usePagination = ({
  totalRecords,
  currentPage = 0,
  perPage = 25,
  onChange,
}: PaginationOptions) => {
  const [page, setPage] = useState(0);
  const [, startTransition] = useTransition();

  /** ***************** calculate total pages *******************/
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(totalRecords / perPage)),
    [totalRecords, perPage],
  );

  /** ***************** calculate ranges *******************/
  const ranges = useMemo(() => {
    if (totalPages <= TOTAL_PILLS) {
      return [makeRange(0, totalPages)];
    }

    const leftSiblingIndex = Math.max(page - TOTAL_MID_SIBLINGS, 0);
    const rightSiblingIndex = Math.min(
      page + TOTAL_MID_SIBLINGS,
      totalPages - 1,
    );
    const shouldShowLeftDots = leftSiblingIndex >= TOTAL_SIBLINGS;
    const shouldShowRightDots = rightSiblingIndex < totalPages - TOTAL_SIBLINGS;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      return [
        makeRange(0, TOTAL_SIBLINGS * 3),
        makeRange(totalPages - TOTAL_SIBLINGS, totalPages),
      ];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      return [
        makeRange(0, TOTAL_SIBLINGS),
        makeRange(totalPages - TOTAL_SIBLINGS * 3, totalPages),
      ];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      return [
        makeRange(0, TOTAL_SIBLINGS),
        makeRange(leftSiblingIndex + 1, rightSiblingIndex),
        makeRange(totalPages - TOTAL_SIBLINGS, totalPages),
      ];
    }

    return [];
  }, [page, totalPages]);

  /** ***************** set page *******************/
  useEffect(() => {
    if (totalRecords > -1) {
      const actual = Math.min(currentPage, totalPages - 1);
      setPage(actual);
      actual !== currentPage && onChange?.(actual);
    }
  }, [currentPage, totalRecords, totalPages]);

  const headLabel = useMemo(
    () => (
      <span className="text-muted">
        {page * perPage + 1}
        &nbsp;-&nbsp;
        {Math.min(page * perPage + perPage, totalRecords)}
      </span>
    ),
    [page, perPage, totalRecords],
  );

  const onPageChange = useCallback(
    (page: number) => {
      setPage(page);
      startTransition(() => onChange?.(page));
    },
    [onChange],
  );

  return { page, totalPages, headLabel, ranges, onPageChange };
};
