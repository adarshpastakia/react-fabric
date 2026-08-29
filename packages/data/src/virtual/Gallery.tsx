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

import { Skeleton, useDebounce, useEffectDebugger } from "@react-fabric/core";
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

export interface VirtualGalleryRef {
  scrollToItem: (index: number) => void;
  hilight: (index: number) => void;
  unhilight: () => void;
}

export interface VirtualGalleryProps<T> extends TestProps {
  children: (props: { item: T; index: number; isLast: boolean }) => ReactElement;
  galleryRef?: Ref<VirtualGalleryRef | undefined>;
  /**
   * fixed columns
   */
  columns?: number;
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
   * data list
   */
  items: T[];
  total?: number;
  /**
   * loading state
   */
  loading?: boolean;
  initialScroll?: number;
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

const VirtualGalleryComponent = <T extends AnyObject>({
  items,
  children,
  columns,
  fullWidth,
  maxWidth,
  minWidth,
  total = 0,
  padding = "md",
  defaultHeight: height = 48,
  defaultWidth: width = 48,
  hideScroller,
  initialScroll,
  loading,
  onLoadMore,
  onScroll,
  galleryRef,
  ...aria
}: VirtualGalleryProps<T>) => {
  const count = useDeferredValue(items.length);
  const extraSize = useMemo(() => (onLoadMore ? 8 : 0), [onLoadMore]);
  const itemList: Array<{
    index: number;
    item: T;
    isLast: boolean;
    isSticky: boolean;
  }> = createItemList(
    items.map((item, index) => {
      return {
        index,
        item,
        isLast: index + 1 === items.length,
      };
    }),
  );

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [columnCount, setColumnCount] = useState(1);
  const columnMap = useMemo(() => new Array(columnCount).fill(0).map((_, idx) => idx), [columnCount]);
  useEffectDebugger(
    () => {
      if (scrollerRef.current) {
        const el = scrollerRef.current;
        const handler = () => {
          const pad = parseInt(getComputedStyle(el.firstElementChild?.firstElementChild as HTMLElement).padding ?? 8);
          setColumnCount(
            columns ?? Math.max(1, Math.floor(((el?.offsetWidth ?? 800) - 32 - (isNaN(pad) ? 8 : pad) * 2) / width)),
          );
        };
        const ob = new ResizeObserver(handler);
        handler();
        ob.observe(el);

        return () => {
          ob.unobserve(el);
          ob.disconnect();
        };
      }
    },
    [scrollerRef.current, columns, width],
    "virtualGallery recalculate view count",
  );
  const virtualizer = useVirtualizer({
    count: Math.ceil(count / columnCount),
    getScrollElement: () => scrollerRef.current,
    estimateSize: () => height,
    overscan: 0,
  });

  const virtualItems = virtualizer.getVirtualItems();

  const currentIndexRef = useRef(0);
  useEffect(() => {
    currentIndexRef.current = virtualItems[0]?.index ?? 0;
    if (scrollerRef.current && virtualItems[0] && scrollerRef.current.scrollTop < virtualItems[0].size)
      currentIndexRef.current = 0;
  }, [virtualItems]);

  const calculateActiveScroll = useCallback(() => {
    const { scrollTop = 0, scrollHeight = 0, offsetHeight = 0 } = (scrollerRef.current ?? {}) as HTMLElement;
    if (scrollHeight === offsetHeight) return 0;

    if (scrollTop === 0) return 1;
    if (scrollTop >= scrollHeight - offsetHeight - extraSize * 2) return 2;

    return 3;
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, []);

  const [scrollActive, setScrollActive] = useState(0);
  const fireScrollEvent = useDebounce((idx: number) => onScroll?.(currentIndexRef.current * idx), [onScroll]);
  const handleScroll = useCallback(() => {
    setScrollActive(calculateActiveScroll());
    fireScrollEvent(columnCount);
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [columnCount, onLoadMore]);

  useEffect(() => {
    // eslint-disable-next-line @eslint-react/set-state-in-effect
    setScrollActive(calculateActiveScroll());
  }, [count, calculateActiveScroll]);

  useEffect(() => {
    if (onLoadMore) {
      const firstItem = virtualItems[0]?.index;
      const lastItem = virtualItems?.slice(-1).pop()?.index;
      const firstIndex = firstItem * columnCount;
      const lastIndex = (lastItem ?? 0) * columnCount + columnCount;
      const canLoadPrevPage = firstItem !== undefined && items[firstIndex] === null;
      const canLoadNextPage = lastItem !== undefined && lastIndex >= count - 1 && count < total;
      const db = debounce(onLoadMore);
      if (canLoadPrevPage) {
        db(firstIndex);
      } else if (!loading && canLoadNextPage) {
        db(lastIndex + 1);
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
          virtualizer.scrollToIndex(Math.floor(initialScroll / columnCount), {
            align: "start",
          });
        }, 200);
        return () => {
          clearTimeout(tmr);
        };
      }
    }
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [columnCount, initialScroll, itemList]);

  useImperativeHandle(
    galleryRef,
    () => ({
      scrollToItem(index) {
        virtualizer.scrollToIndex(Math.floor(index / columnCount), {
          align: "auto",
        });
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
    [virtualizer, columnCount],
  );

  return (
    <div ref={scrollerRef} onScroll={handleScroll} className={cn("area-content bg-default overflow-auto")} {...aria}>
      <div className={cn("flex flex-nowrap justify-center gap-2 min-h-full")}>
        <div
          className={cn(
            "box-content",
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
            style={{
              height: virtualizer.getTotalSize() + extraSize,
            }}
          >
            <div style={{ height: virtualItems[0]?.start }} />
            {virtualItems.map(({ key, index }) => (
              <div className="flex" key={key} data-index={index} ref={virtualizer.measureElement}>
                {columnMap.map((col) => (
                  <div
                    key={`${key}:${col}`}
                    data-index={index * columnCount + col}
                    className={cn("grid rounded-capped")}
                    style={{
                      minWidth: width,
                      minHeight: height,
                    }}
                  >
                    {itemList[index * columnCount + col]?.item
                      ? children(itemList[index * columnCount + col])
                      : itemList[index * columnCount + col]?.item === null && <Skeleton className="p-2" />}
                  </div>
                ))}
              </div>
            ))}
            {loading && (
              <div>
                <Skeleton />
              </div>
            )}
          </div>
        </div>
        {!hideScroller && (
          <div className={cn("self-end sticky bottom-2")}>
            <Scroller
              vertical
              scrollActive={scrollActive}
              onStart={() => virtualizer.scrollToIndex(0)}
              onPrevious={() => scrollerRef.current && virtualizer.scrollBy(-scrollerRef.current.offsetHeight)}
              onNext={() => scrollerRef.current && virtualizer.scrollBy(scrollerRef.current.offsetHeight)}
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
 * VirtualGallery component provides a virtualized gallery view for displaying a large list of items efficiently.
 * It supports features like fixed columns, loading states, and customizable item rendering.
 * The component uses virtualization to render only the visible items, improving performance for large datasets.
 * It also provides a scroller for easy navigation through the items.
 *
 * @example
 * ```jsx
 * <VirtualGallery
 *   items={items}
 *   columns={3}
 *   defaultHeight={100}
 *   defaultWidth={100}
 *   fullWidth={true}
 *   onLoadMore={(lastIndex) => console.log("Load more items from index:", lastIndex)}
 *   onScroll={(top) => console.log("Scrolled to top:", top)}
 * >
 *   {({ item, index, isLast }) => (
 *     <div className="gallery-item" key={item.id}>
 *       <img src={item.image} alt={item.label} />
 *       <p>{item.label}</p>
 *     </div>
 *   )}
 * </VirtualGallery>
 * ```
 * @see {@link https://tanstack.com/docs/react-virtual/latest/overview}
 */
export const VirtualGallery = GenericMemo(VirtualGalleryComponent);
