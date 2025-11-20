import { type Settings } from "sigma/settings";
import { type EdgeAttributes, type NodeAttributes } from "../../../types";
import { drawNodeLabel } from "./drawLabel";

/* istanbul ignore file */

export function drawNodeHover(
  context: CanvasRenderingContext2D,
  data: NodeAttributes & {
    opacity: number;
    x: number;
    y: number;
    size: number;
  },
  settings: Settings<NodeAttributes, EdgeAttributes>,
): void {
  const nodeSize = data.size;
  const size = settings.labelSize;
  const font = settings.labelFont;
  const weight = settings.labelWeight;
  // use node color or default node color
  const bg = settings.defaultNodeColor || "#fff";
  // use label color or default label color
  const color = data.labelColor ?? settings.labelColor.color ?? "#000";

  context.font = `${weight} ${size}px ${font}`;

  // Then we draw the label background
  context.fillStyle = bg;
  context.strokeStyle = color;
  context.lineWidth = 0.25;

  const PADDING = data.selected ? 4 : 2;

  // if (typeof data.label === "string") {
  //   const textWidth = context.measureText(data.label).width;
  //   const boxWidth = Math.round(textWidth + 5);
  //   const boxHeight = Math.round(size + 2 * PADDING);
  //   const radius = Math.max(nodeSize, size / 2) + PADDING;

  //   context.beginPath();
  //   context.moveTo(data.x + radius, data.y + boxHeight / 2);
  //   context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
  //   context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
  //   context.lineTo(data.x + radius, data.y - boxHeight / 2);
  //   context.lineTo(data.x + radius, data.y - radius);
  //   context.lineTo(data.x - radius, data.y - radius);
  //   context.lineTo(data.x - radius, data.y + radius);
  //   context.lineTo(data.x + radius, data.y + radius);
  //   context.lineTo(data.x + radius, data.y + boxHeight / 2);
  //   context.closePath();
  //   context.fill();

  //   if (data.selected) {
  //     context.strokeStyle = "#F00";
  //     context.lineWidth = 2;
  //   }
  //   context.stroke();
  // } else {
  const radius = nodeSize + PADDING;
  // context.fillRect(data.x - radius, data.y - radius, radius * 2, radius * 2);
  context.lineWidth = 1;
  context.strokeStyle = "#F00";
  if (data.selected) {
    context.lineWidth = 3;
  }
  context.strokeRect(data.x - radius, data.y - radius, radius * 2, radius * 2);
  // }

  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0;
  context.lineWidth = 0;
  context.strokeStyle = "";

  drawNodeLabel(context, data, settings);
}
