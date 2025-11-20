/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2025 Adarsh Pastakia
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
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useInteractions,
} from "@floating-ui/react";
import { Divider, Menu, MenuItem } from "@react-fabric/core";
import { cloneElement, useEffect, useRef, useState } from "react";
import {
  type SigmaEdgeEventPayload,
  type SigmaNodeEventPayload,
  type SigmaStageEventPayload,
} from "sigma/types";
import { ICONS } from "../constants";
import { useGraph } from "./Context";

export const GraphContextMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeId = useFloatingNodeId();
  const { sigma } = useGraph();
  const [menu, setMenu] = useState<Array<React.ReactElement<typeof MenuItem>>>(
    [],
  );

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    nodeId,
    onOpenChange: (open, evt, reason) => {
      const target = evt?.target as HTMLElement;
      if (!target?.closest(".menu-list")) setIsOpen(open);
    },
    strategy: "absolute",
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), flip()],
  });

  const click = useClick(context, {
    toggle: true,
    ignoreMouse: true,
  });
  const dismiss = useDismiss(context, { bubbles: true });

  const { getFloatingProps } = useInteractions([dismiss, click]);

  const tryClosing = useRef((e: React.MouseEvent) => {
    if ((e.target as HTMLElement)?.closest("[data-dropdown-dismiss='true']"))
      setTimeout(() => setIsOpen(false), 50);
  });

  useEffect(() => {
    const handleContextMenu = (
      e: SigmaNodeEventPayload | SigmaEdgeEventPayload | SigmaStageEventPayload,
    ) => {
      if ("node" in e) {
        setMenu([
          <MenuItem key="0.0" label="Select neighbors" />,
          <Divider key="0.1" />,
          <MenuItem
            key="0.2"
            label="Delete node(s)"
            color="danger"
            icon={ICONS.delete}
          />,
          <MenuItem
            key="0.3"
            label="Clear graph"
            color="danger"
            icon={ICONS.clear}
          />,
        ]);
      } else if ("edge" in e) {
        setMenu([
          <MenuItem key="1.0" label="Select neighbors" />,
          <Divider key="1.1" />,
          <MenuItem
            key="1.2"
            label="Clear graph"
            color="danger"
            icon={ICONS.clear}
          />,
        ]);
      } else {
        setMenu([
          <MenuItem
            key="2.0"
            label="Clear graph"
            color="danger"
            icon={ICONS.clear}
          />,
        ]);
      }
      const virtual = {
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: e.event.x,
            y: e.event.y,
            top: e.event.y,
            left: e.event.x,
            right: e.event.x,
            bottom: e.event.y,
          };
        },
      };
      setIsOpen(true);
      refs.setReference(virtual);
      e.event.original.preventDefault();
      return false;
    };
    sigma.instance?.on("rightClickNode", handleContextMenu);
    sigma.instance?.on("rightClickEdge", handleContextMenu);
    sigma.instance?.on("rightClickStage", handleContextMenu);

    return () => {
      sigma.instance?.off("rightClickNode", handleContextMenu);
      sigma.instance?.off("rightClickEdge", handleContextMenu);
      sigma.instance?.off("rightClickStage", handleContextMenu);
    };
  }, [sigma]);

  return (
    isOpen && (
      <FloatingPortal
        root={
          refs.domReference.current?.closest<HTMLElement>(".theme-base") ??
          undefined
        }
      >
        {cloneElement((<Menu>{menu}</Menu>) as AnyObject, {
          ...getFloatingProps(),
          style: {
            ...floatingStyles,
            borderRadius: "var(--rounding)",
            zIndex: "var(--z-popover)",
            fontSize: "0.75rem",
          },
          className: "bg-base outline rounded-capped shadow-lg",
          ref: refs.setFloating,
          onMouseUp: tryClosing.current,
        })}
      </FloatingPortal>
    )
  );
};
