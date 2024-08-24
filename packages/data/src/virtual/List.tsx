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

/**
 * Pass list of items with `null` filled array to intialize list at a page > 0
 *
 * `initialScroll`: last item scroll iindex from state
 * `items`: [...Array(last page * page count).fill(null), ...last page items from state]
 */

import { Skeleton, useDebounce } from "@react-fabric/core";
import { debounce } from "@react-fabric/utilities";
import { useVirtualizer } from "@tanstack/react-virtual";
import classNames from "classnames";
import memoizeOne from "memoize-one";
import {
  memo,
  useCallback,
  useDeferredValue,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement,
  type Ref,
} from "react";
import { Scroller } from "./Scroller";

export interface VirtualListRef {
  scrollToItem: (index: number) => void;
  hilight: (index: number) => void;
  unhilight: () => void;
}

export interface VirtualListProps<T> {
  children: (props: {
    data: T;
    index: number;
    isLast: boolean;
  }) => ReactElement;
  listRef?: Ref<VirtualListRef | undefined>;
  /**
   * default item height
   */
  defaultHeight?: number;
  /**
   * default item width
   */
  defaultWidth?: number;
  /**
   * full width list
   */
  fullWidth?: boolean;
  /**
   * padding
   */
  padding?: "sm" | "md" | "lg" | "none";
  /**
   * list orientation
   */
  orientation?: "vertical" | "horizontal";
  /**
   * data list
   */
  items: T[];
  initialScroll?: number;
  /**
   * loading state
   */
  loading?: boolean;
  /**
   * hide scroll buttons
   */
  hideScroller?: boolean;
  /**
   * load more callback
   */
  onLoadMore?: (page?: number) => void;
  /**
   * scroll handler
   */
  onScroll?: (top: number) => void;
}

const createItemList = memoizeOne((items) => items);

const _VirtualList = <T extends KeyValue>({
  items,
  children,
  fullWidth,
  padding = "md",
  orientation = "vertical",
  defaultHeight: height = 48,
  defaultWidth: width = 48,
  hideScroller,
  initialScroll,
  loading,
  onLoadMore,
  onScroll,
  listRef,
}: VirtualListProps<T>) => {
  const count = useDeferredValue(items.length);
  const extraSize = useMemo(() => (onLoadMore ? 64 : 0), [onLoadMore]);
  const itemList: Array<{
    index: number;
    data: T;
    isLast: boolean;
    isSticky: boolean;
  }> = createItemList(
    items.map((item: AnyObject, idx) => {
      return {
        index: idx,
        data: item,
        isLast: idx + 1 === items.length,
      };
    }),
  );

  const scrollerRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count,
    horizontal: orientation === "horizontal",
    getScrollElement: () => scrollerRef.current,
    estimateSize: () => (orientation === "horizontal" ? width : height),
  });

  const virtualItems = virtualizer.getVirtualItems();

  const currentIndex = useRef(0);
  useEffect(() => {
    currentIndex.current = virtualItems[1]?.index ?? 0;
    if (
      scrollerRef.current &&
      virtualItems[0] &&
      scrollerRef.current.scrollTop < virtualItems[0].size
    )
      currentIndex.current = 0;
  }, [virtualItems]);

  const calculateActiveScroll = useCallback(() => {
    const {
      scrollTop = 0,
      scrollLeft = 0,
      scrollWidth = 0,
      scrollHeight = 0,
      offsetWidth = 0,
      offsetHeight = 0,
    } = (scrollerRef.current ?? {}) as HTMLElement;
    if (orientation === "vertical") {
      if (scrollHeight === offsetHeight) return 0;

      if (scrollTop === 0) return 1;
      if (scrollTop >= scrollHeight - offsetHeight - extraSize * 2) return 2;
    }
    if (orientation === "horizontal") {
      if (scrollWidth === offsetWidth) return 0;

      if (Math.abs(scrollLeft) === 0) return 1;
      if (Math.abs(scrollLeft) >= scrollWidth - offsetWidth - extraSize * 2)
        return 2;
    }
    return 3;
  }, [orientation]);

  const [scrollActive, setScrollActive] = useState(0);
  const fireScrollEvent = useDebounce(
    () => onScroll?.(currentIndex.current),
    [onScroll],
  );
  const handleScroll = useCallback(() => {
    setScrollActive(calculateActiveScroll());
    fireScrollEvent();
  }, [orientation, onLoadMore]);

  useEffect(() => {
    setScrollActive(calculateActiveScroll());
  }, [itemList, calculateActiveScroll]);

  useEffect(() => {
    const db = debounce(() => {
      const lastItem = virtualItems?.slice(-1).pop();
      if (lastItem && !loading && lastItem.index === count - 1) onLoadMore?.();
    });
    db();
    return () => db.cancel();
  }, [onLoadMore, loading, itemList, virtualItems, count]);

  useEffect(() => {
    const firstItem = virtualItems[0]?.index;
    if (onLoadMore && firstItem !== undefined && items[firstItem] === null) {
      const db = debounce(onLoadMore);
      db(firstItem);
      return () => db.cancel();
    }
  }, [onLoadMore, items, virtualItems, count]);

  useLayoutEffect(() => {
    setTimeout(() => {
      initialScroll &&
        virtualizer.scrollToIndex(initialScroll, { align: "start" });
    }, 100);
  }, []);

  useImperativeHandle(
    listRef,
    () => ({
      scrollToItem(index) {
        virtualizer.scrollToIndex(index, { align: "start" });
      },
      hilight(index) {
        scrollerRef.current
          ?.querySelector(".hilight")
          ?.classList.remove("hilight", "ring-1");
        virtualizer.scrollToIndex(Math.floor(index), {
          align: "start",
        });
        setTimeout(() => {
          scrollerRef.current
            ?.querySelector(`[data-index="${index}"]`)
            ?.classList.add("hilight", "ring-1");
        }, 100);
      },
      unhilight() {
        scrollerRef.current
          ?.querySelector(".hilight")
          ?.classList.remove("hilight", "ring-1");
      },
    }),
    [virtualizer],
  );

  return (
    <div
      ref={scrollerRef}
      onScroll={handleScroll}
      className={classNames(
        "area-content bg-base overflow-auto contain-strict",
      )}
    >
      <div
        className={classNames(
          "inline-flex flex-nowrap gap-2 justify-center min-h-full min-w-full",
          orientation === "horizontal" && "flex-col",
        )}
      >
        <div
          className={classNames(
            "box-content inline-flex flex-nowrap",
            orientation === "vertical" && "flex-col",
            orientation === "horizontal" && "flex-row",
            fullWidth && "flex-1",
            padding === "sm" && "p-1",
            padding === "md" && "p-2",
            padding === "lg" && "p-4",
          )}
        >
          <div
            style={
              orientation === "vertical"
                ? { height: virtualizer.getTotalSize() }
                : { width: virtualizer.getTotalSize() }
            }
          >
            <div
              style={
                orientation === "vertical"
                  ? { height: virtualItems[0]?.start }
                  : { width: virtualItems[0]?.start, display: "inline-block" }
              }
            />
            {virtualItems.map(({ key, index }) => (
              <div
                key={key}
                data-index={index}
                ref={virtualizer.measureElement}
                className={classNames(
                  "rounded-capped",
                  orientation === "horizontal" ? "inline-grid" : "grid",
                )}
              >
                {children(itemList[index] as AnyObject)}
              </div>
            ))}
          </div>
          {onLoadMore && (
            <div className={orientation === "horizontal" ? "min-w-16" : "h-16"}>
              {loading && <Skeleton />}
            </div>
          )}
        </div>
        {!hideScroller && (
          <div
            className={classNames(
              orientation === "vertical" && "self-end sticky bottom-2",
              orientation === "horizontal" && "self-end sticky end-2",
            )}
          >
            <Scroller
              vertical={orientation === "vertical"}
              scrollActive={scrollActive}
              onStart={() => virtualizer.scrollToIndex(0)}
              onPrevious={() =>
                scrollerRef.current &&
                virtualizer.scrollBy(
                  -(orientation === "vertical"
                    ? scrollerRef.current.offsetHeight
                    : scrollerRef.current.offsetWidth),
                )
              }
              onNext={() =>
                scrollerRef.current &&
                virtualizer.scrollBy(
                  orientation === "vertical"
                    ? scrollerRef.current.offsetHeight
                    : scrollerRef.current.offsetWidth,
                )
              }
              onEnd={() => virtualizer.scrollToIndex(count - 1)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
_VirtualList.displayName = "VirtualList";

const GenericMemo: <T>(c: T) => T = memo;
export const VirtualList = GenericMemo(_VirtualList);
