// https://github.com/s0md3v/Quark/blob/master/libs/plugins/sigma.plugins.lasso/sigma.plugins.lasso.js

import { useEffect, useRef, useState } from "react";
import type Sigma from "sigma";
import { type EdgeAttributes, type NodeAttributes } from "../types";

interface Point {
  x: number;
  y: number;
}

export const useDragSelection = (
  renderer?: Sigma<NodeAttributes<any>, EdgeAttributes<any>>,
) => {
  const isDrawing = useRef(false);
  const drawPoints = useRef<Point[]>([]);
  const drawingCanvas = useRef<HTMLCanvasElement>(undefined);
  const drawingContext = useRef<CanvasRenderingContext2D | null>(null);
  const [mode, setMode] = useState<"rectangle" | "lasso" | false>(false);

  const selectionMode = useRef<"rectangle" | "lasso" | false>(false);

  useEffect(() => {
    selectionMode.current = mode;
  }, [mode]);

  const startDrawing = (evt: MouseEvent) => {
    isDrawing.current = true;
    if (drawingCanvas.current) {
      drawingContext.current = drawingCanvas.current.getContext("2d");
      if (drawingContext.current) {
        drawingContext.current.setLineDash([2, 4]);
        drawingContext.current.lineWidth = 2;
        drawingContext.current.strokeStyle = "#3a766c40";
        drawingContext.current.fillStyle = "#3a766c10";
        drawingContext.current.lineJoin = "round";
        drawingContext.current.lineCap = "round";
      }
      const drawingRectangle = drawingCanvas.current.getBoundingClientRect();
      drawPoints.current = [
        {
          x: evt.clientX - drawingRectangle.left,
          y: evt.clientY - drawingRectangle.top,
        },
      ];
    }
    evt.stopImmediatePropagation();
    evt.stopPropagation();
    evt.preventDefault();
  };

  const drawPath = (evt: MouseEvent) => {
    if (!isDrawing) return;

    if (drawingCanvas.current) {
      const drawingRectangle = drawingCanvas.current.getBoundingClientRect();

      if (drawingContext.current) {
        if (selectionMode.current === "rectangle") {
          drawingContext.current.clearRect(
            0,
            0,
            drawingCanvas.current.width,
            drawingCanvas.current.height,
          );
          const { x, y } = drawPoints.current[0];
          drawingContext.current.beginPath();
          drawingContext.current.rect(
            Math.min(x, evt.clientX),
            Math.min(y, evt.clientY),
            Math.abs(evt.clientX - drawingRectangle.left - x),
            Math.abs(evt.clientY - drawingRectangle.top - y),
          );
          drawingContext.current.stroke();
          drawingContext.current.fill();
        }
        if (selectionMode.current === "lasso") {
          drawPoints.current.push({
            x: evt.clientX - drawingRectangle.left,
            y: evt.clientY - drawingRectangle.top,
          });

          // Clear the canvas
          drawingContext.current.clearRect(
            0,
            0,
            drawingContext.current.canvas.width,
            drawingContext.current.canvas.height,
          );

          // Redraw the complete path for a smoother effect
          // Even smoother with quadratic curves
          let sourcePoint = drawPoints.current[0];
          let destinationPoint = drawPoints.current[1];
          const pointsLength = drawPoints.current.length;
          const getMiddlePointCoordinates = function (
            firstPoint: Point,
            secondPoint: Point,
          ) {
            return {
              x: firstPoint.x + (secondPoint.x - firstPoint.x) / 2,
              y: firstPoint.y + (secondPoint.y - firstPoint.y) / 2,
            };
          };

          drawingContext.current.beginPath();
          drawingContext.current.moveTo(sourcePoint.x, sourcePoint.y);

          for (let i = 1; i < pointsLength; i++) {
            const middlePoint = getMiddlePointCoordinates(
              sourcePoint,
              destinationPoint,
            );
            // drawingContext.current.lineTo(drawPoints[i].x, drawPoints[i].y);
            drawingContext.current.quadraticCurveTo(
              sourcePoint.x,
              sourcePoint.y,
              middlePoint.x,
              middlePoint.y,
            );
            sourcePoint = drawPoints.current[i];
            destinationPoint = drawPoints.current[i + 1];
          }

          drawingContext.current.lineTo(sourcePoint.x, sourcePoint.y);
          drawingContext.current.stroke();
          drawingContext.current.fill();
        }
      }
    }
  };

  const stopDrawing = (evt: MouseEvent) => {
    if (!renderer) return;
    if (!isDrawing) return;

    const nodes = Array.from(renderer.getGraph().nodes());

    nodes.forEach((node) => {
      if (!renderer) return;
      const {
        x: nx = 0,
        y: ny = 0,
        hidden,
      } = renderer.getNodeDisplayData(node) as AnyObject;
      const { x, y } = renderer.framedGraphToViewport({ x: nx, y: ny });
      if (evt.shiftKey) {
        drawingContext.current?.isPointInPath(x, y) &&
          !hidden &&
          renderer.getGraph().setNodeAttribute(node, "selected", true);
      } else {
        !hidden &&
          renderer
            .getGraph()
            .setNodeAttribute(
              node,
              "selected",
              drawingContext.current?.isPointInPath(x, y),
            );
      }
    });
    dettachListeners();
  };

  const attachListeners = () => {
    if (!renderer) return;
    drawingCanvas.current = document.createElement("canvas");
    const rect = renderer.getContainer().getBoundingClientRect();
    drawingCanvas.current.width = rect.width;
    drawingCanvas.current.height = rect.height;
    drawingCanvas.current.style.setProperty("inset", "0");
    drawingCanvas.current.style.setProperty("position", "absolute");
    renderer.getContainer().appendChild(drawingCanvas.current);
    drawingCanvas.current.style.cursor = "crosshair";
    drawingCanvas.current.addEventListener("mousedown", startDrawing, {
      capture: true,
    });
    document.addEventListener("mousemove", drawPath);
    document.addEventListener("mouseup", stopDrawing);
  };
  const dettachListeners = () => {
    if (drawingContext.current) {
      drawingContext.current.clearRect(
        0,
        0,
        drawingContext.current.canvas.width,
        drawingContext.current.canvas.height,
      );
      drawingContext.current = null;
    }
    if (drawingCanvas.current) {
      drawingCanvas.current?.remove();
    }
    document.removeEventListener("mousemove", drawPath);
    document.removeEventListener("mouseup", stopDrawing);
    isDrawing.current = false;
    setMode(false);
  };

  const startRectangleSelection = () => {
    setMode("rectangle");
    attachListeners();
  };
  const startLassoSelection = () => {
    setMode("lasso");
    attachListeners();
  };

  const cancelSelection = () => {
    dettachListeners();
  };

  return {
    selectionMode: mode,
    startRectangleSelection,
    startLassoSelection,
    cancelSelection,
  };
};
