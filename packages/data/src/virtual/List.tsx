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
import { type TestProps } from "@react-fabric/core/dist/types/types";
import { cn, debounce } from "@react-fabric/utilities";
import { useVirtualizer } from "@tanstack/react-virtual";
import memoize from "memoize-one";
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

export interface VirtualListProps<T> extends TestProps {
  children: (props: { item: T; index: number; isLast: boolean }) => ReactElement;
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
  maxWidth?: string | number;
  minWidth?: string | number;
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
  total?: number;
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
  onLoadMore?: (lastIndex?: number) => void;
  /**
   * scroll handler
   */
  onScroll?: (top: number) => void;
}

const createItemList = memoize((items) => items as never);

const VirtualListComponent = <T extends AnyObject>({
  items,
  total = 0,
  children,
  fullWidth,
  maxWidth,
  minWidth,
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
  ...aria
}: VirtualListProps<T>) => {
  const count = useDeferredValue(items.length);
  const extraSize = useMemo(() => (onLoadMore ? 8 : 0), [onLoadMore]);
  const itemList: Array<{
    index: number;
    item: T;
    isLast: boolean;
    isSticky: boolean;
  }> = createItemList(
    items.map((item: T, index) => {
      return {
        index,
        item,
        isLast: index + 1 === items.length,
      };
    }),
  );

  const scrollerRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count,
    overscan: 0,
    horizontal: orientation === "horizontal",
    getScrollElement: () => scrollerRef.current,
    estimateSize: () => (orientation === "horizontal" ? width : height),
  });

  const virtualItems = virtualizer.getVirtualItems();

  const currentIndexRef = useRef(0);
  useEffect(() => {
    currentIndexRef.current = virtualItems[0]?.index ?? 0;
    if (scrollerRef.current && virtualItems[0] && scrollerRef.current.scrollTop < virtualItems[0].size)
      currentIndexRef.current = 0;
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
      if (Math.abs(scrollLeft) >= scrollWidth - offsetWidth - extraSize * 2) return 2;
    }
    return 3;
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [orientation]);

  const [scrollActive, setScrollActive] = useState(0);
  const fireScrollEvent = useDebounce(() => onScroll?.(currentIndexRef.current), [onScroll]);
  const handleScroll = useCallback(() => {
    setScrollActive(calculateActiveScroll());
    fireScrollEvent();
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [orientation, onLoadMore]);

  useEffect(() => {
    // eslint-disable-next-line @eslint-react/set-state-in-effect
    setScrollActive(calculateActiveScroll());
  }, [itemList, calculateActiveScroll]);

  useEffect(() => {
    if (onLoadMore) {
      const firstItem = virtualItems[0]?.index;
      const lastItem = virtualItems?.slice(-1).pop()?.index;
      const canLoadPrevPage = firstItem !== undefined && items[firstItem] === null;
      const canLoadNextPage = lastItem !== undefined && lastItem === count - 1 && count < total;
      const db = debounce(onLoadMore);
      if (canLoadPrevPage) {
        db(firstItem);
      } else if (!loading && canLoadNextPage) {
        db(lastItem + 1);
      }
      return () => db.cancel();
    }
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [onLoadMore, virtualItems]);

  const isRenderedRef = useRef(false);
  useLayoutEffect(() => {
    if (!isRenderedRef.current && itemList.length > 0) {
      isRenderedRef.current = true;
      if (initialScroll) {
        const tmr = setTimeout(() => {
          virtualizer.scrollToIndex(Math.floor(initialScroll), {
            align: "start",
          });
        }, 200);

        return () => {
          clearTimeout(tmr);
        };
      }
    }
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [itemList, initialScroll]);

  useImperativeHandle(
    listRef,
    () => ({
      scrollToItem(index) {
        virtualizer.scrollToIndex(index, { align: "auto" });
      },
      hilight(index) {
        const el = scrollerRef.current?.querySelector("[data-selected='true']") as HTMLElement;
        if (el) el.dataset.selected = "false";
        virtualizer.scrollToIndex(Math.floor(index), {
          align: "auto",
        });
        setTimeout(() => {
          const el = scrollerRef.current?.querySelector(`[data-index="${index}"]`) as HTMLElement;
          if (el) el.dataset.selected = "true";
        }, 100);
      },
      unhilight() {
        const el = scrollerRef.current?.querySelector("[data-selected='true']") as HTMLElement;
        if (el) el.dataset.selected = "false";
      },
    }),
    [virtualizer],
  );

  return (
    <div ref={scrollerRef} onScroll={handleScroll} className={cn("area-content bg-default overflow-auto")} {...aria}>
      <div
        className={cn(
          "flex flex-nowrap gap-2 justify-center min-h-full min-w-full",
          orientation === "horizontal" && "flex-col",
        )}
      >
        <div
          className={cn(
            "box-content inline-flex flex-nowrap",
            orientation === "vertical" && "flex-col",
            orientation === "horizontal" && "flex-row",
            fullWidth && "flex-1",
            padding === "sm" && "p-1",
            padding === "md" && "p-2",
            padding === "lg" && "p-4",
          )}
          style={{
            minWidth,
            maxWidth,
          }}
        >
          <div
            style={
              orientation === "vertical"
                ? { height: virtualizer.getTotalSize() + extraSize }
                : { width: virtualizer.getTotalSize() + extraSize }
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
                className={cn("rounded-capped", orientation === "horizontal" ? "inline-grid" : "grid")}
                style={{
                  minWidth: width,
                  minHeight: height,
                }}
              >
                {itemList[index]?.item
                  ? children(itemList[index])
                  : itemList[index]?.item === null && <Skeleton className="p-2" />}
              </div>
            ))}
          </div>
          {loading && (
            <div className={orientation === "horizontal" ? "min-w-16" : ""}>
              <Skeleton />
            </div>
          )}
        </div>
        {!hideScroller && (
          <div
            className={cn(
              orientation === "vertical" && "self-end sticky bottom-2",
              orientation === "horizontal" && "self-end sticky inset-e-2",
            )}
          >
            <Scroller
              vertical={orientation === "vertical"}
              scrollActive={scrollActive}
              onStart={() => virtualizer.scrollToIndex(0)}
              onPrevious={() =>
                scrollerRef.current &&
                virtualizer.scrollBy(
                  -(orientation === "vertical" ? scrollerRef.current.offsetHeight : scrollerRef.current.offsetWidth),
                )
              }
              onNext={() =>
                scrollerRef.current &&
                virtualizer.scrollBy(
                  orientation === "vertical" ? scrollerRef.current.offsetHeight : scrollerRef.current.offsetWidth,
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

const GenericMemo: <T>(c: T) => T = memo;

/**
 * VirtualList component for rendering large lists efficiently using virtualization.
 * It supports horizontal and vertical orientations, custom item heights and widths,
 * and provides a scroller for navigating through the list.
 * It also supports loading more items on scroll and provides a way to hilight items.
 * It can be used with a ref to control scrolling and hilighting of items.
 *
 * @example
 * ```jsx
 * <VirtualList
 *   items={items}
 *   children={({ item, index, isLast }) => (
 *     <div key={index} className="item">
 *       {item.label}
 *     </div>
 *   )}
 *   fullWidth={true}
 *   orientation="vertical"
 *   defaultHeight={50}
 *   onLoadMore={(lastIndex) => console.log("Load more items from index:", lastIndex)}
 *   onScroll={(top) => console.log("Scrolled to top:", top)}
 *   listRef={virtualListRef}
 * >
 *   {({ item, index, isLast }) => (
 *     <div className="gallery-item" key={item.id}>
 *       <img src={item.image} alt={item.label} />
 *       <p>{item.label}</p>
 *     </div>
 *   )}
 * </VirtualList>
 * ```
 */
export const VirtualList = GenericMemo(VirtualListComponent);
