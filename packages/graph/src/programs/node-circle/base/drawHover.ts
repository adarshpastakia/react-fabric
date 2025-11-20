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

  //   const angleRadian = Math.asin(boxHeight / 2 / radius);
  //   const xDeltaCoord = Math.sqrt(
  //     Math.abs(Math.pow(radius, 2) - Math.pow(boxHeight / 2, 2)),
  //   );

  //   context.beginPath();
  //   context.moveTo(data.x + xDeltaCoord, data.y + boxHeight / 2);
  //   context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
  //   context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
  //   context.lineTo(data.x + xDeltaCoord, data.y - boxHeight / 2);
  //   context.arc(data.x, data.y, radius, angleRadian, -angleRadian);
  //   context.closePath();
  //   context.fill();

  //   if (data.selected) {
  //     context.strokeStyle = "#F00";
  //     context.lineWidth = 2;
  //   }
  //   context.stroke();
  // } else {
  context.beginPath();
  context.arc(data.x, data.y, nodeSize + PADDING, 0, Math.PI * 2);
  context.closePath();
  context.lineWidth = 1;
  context.strokeStyle = "#F00";
  if (data.selected) {
    context.lineWidth = 3;
  }
  // context.fill();
  context.stroke();
  // }

  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0;
  context.lineWidth = 0;
  context.strokeStyle = "";

  drawNodeLabel(context, data, settings);
}
