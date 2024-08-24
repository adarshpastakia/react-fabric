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

import { CoreIcons, Icon } from "@react-fabric/core";
import classNames from "classnames";
import { Fragment, memo, useMemo } from "react";

export interface PaginationProps {
  /**
   * currrent page number
   */
  page: number;
  /**
   * total page count
   */
  totalPages: number;
  /**
   * pagination sections [start, mid, end]
   */
  ranges: number[][];
  /**
   * minimal view
   */
  minimal?: boolean;
  /**
   * page change handler
   */
  onPageChange: (page: number) => void;
}

export const Pagination = memo(
  ({ page, ranges, totalPages, minimal, onPageChange }: PaginationProps) => {
    const [start, mid, last] = ranges;

    const pageBody = useMemo(
      () => (
        <Fragment>
          {start?.map((pg) => (
            <button
              key={pg}
              onClick={() => onPageChange(pg)}
              className={classNames(
                "leading-none text-sm hover:bg-primary-200 w-8 h-6 rounded-full",
                page === pg && "bg-primary-500 text-white pointer-events-none",
              )}
            >
              {pg + 1}
            </button>
          ))}
          {mid && (
            <span className="leading-none inline-block w-8 text-center text-dimmed">
              ...
            </span>
          )}
          {mid?.map((pg) => (
            <button
              key={pg}
              onClick={() => onPageChange(pg)}
              className={classNames(
                "leading-none text-sm hover:bg-primary-200 w-8 h-6 rounded-full",
                page === pg && "bg-primary-500 text-white pointer-events-none",
              )}
            >
              {pg + 1}
            </button>
          ))}
          {last && (
            <span className="leading-none inline-block w-8 text-center text-dimmed">
              ...
            </span>
          )}
          {last?.map((pg) => (
            <button
              key={pg}
              onClick={() => onPageChange(pg)}
              className={classNames(
                "leading-none text-sm hover:bg-primary-200 w-8 h-6 rounded-full",
                page === pg && "bg-primary-500 text-white pointer-events-none",
              )}
            >
              {pg + 1}
            </button>
          ))}
        </Fragment>
      ),
      [start, mid, last, page],
    );

    return (
      <div className="inline-flex items-center">
        <button
          onClick={() => onPageChange(0)}
          className={classNames(
            "leading-none text-sm hover:bg-primary-200 w-8 h-6 rounded-full",
            page === 0 && "pointer-events-none text-tint-300",
          )}
        >
          <Icon icon={CoreIcons.chevronsLeft} rtlFlip />
        </button>
        <button
          onClick={() => onPageChange(page - 1)}
          className={classNames(
            "leading-none text-sm hover:bg-primary-200 w-8 h-6 rounded-full",
            page === 0 && "pointer-events-none text-tint-300",
          )}
        >
          <Icon icon={CoreIcons.chevronLeft} rtlFlip />
        </button>
        {!minimal && pageBody}
        {minimal && (
          <label className="leading-none inline-block px-1 text-center text-sm select-none fixed-numbers">
            {page + 1}/{totalPages}
          </label>
        )}
        <button
          onClick={() => onPageChange(page + 1)}
          className={classNames(
            "leading-none text-sm hover:bg-primary-200 w-8 h-6 rounded-full",
            page + 1 >= totalPages && "pointer-events-none text-tint-300",
          )}
        >
          <Icon icon={CoreIcons.chevronRight} rtlFlip />
        </button>
        <button
          onClick={() => onPageChange(totalPages - 1)}
          className={classNames(
            "leading-none text-sm hover:bg-primary-200 w-8 h-6 rounded-full",
            page + 1 >= totalPages && "pointer-events-none text-tint-300",
          )}
        >
          <Icon icon={CoreIcons.chevronsRight} rtlFlip />
        </button>
      </div>
    );
  },
);
Pagination.displayName = "Pagination";
