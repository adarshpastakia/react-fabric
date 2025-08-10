import { type Settings } from "sigma/settings";
import { EdgeAttributes, NodeAttributes } from "../../../types";

/* istanbul ignore file */

export function drawNodeLabel(
  context: CanvasRenderingContext2D,
  data: NodeAttributes<any> & {
    opacity: number;
    x: number;
    y: number;
    size: number;
  },
  settings: Settings<NodeAttributes<any>, EdgeAttributes<any>>,
): void {
  const nodeSize = data.size;
  const size = settings.labelSize;
  const font = settings.labelFont;
  const weight = settings.labelWeight;
  // use node color or default node color
  const bg = settings.defaultNodeColor || "#fff";
  // use label color or default label color
  const color = data.labelColor || settings.labelColor.color || "#000";

  if (data.highlight) {
    // Then we draw the label background
    context.strokeStyle = data.highlightColor ?? "#44BD87";
    context.lineWidth = 1;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 48;
    context.shadowColor = data.color ?? "#44BD87";

    const PADDING = 2;

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
    //   context.stroke();
    // } else {
    const radius = nodeSize + PADDING;
    context.strokeRect(
      data.x - radius,
      data.y - radius,
      radius * 2,
      radius * 2,
    );
    // }
  }

  context.shadowColor = "transparent";
  context.shadowBlur = 0;

  if (data.selected) {
    // Then we draw the label background
    context.strokeStyle = "#f00";
    context.lineWidth = 2;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 0;

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
    //   context.stroke();
    // } else {
    const radius = nodeSize + PADDING;
    context.strokeRect(
      data.x - radius,
      data.y - radius,
      radius * 2,
      radius * 2,
    );
    // }
  }

  if (data.isGroup) {
    const container =
      context.canvas.parentElement?.parentElement?.querySelector(
        ".sigma-groupHandles",
      ) as HTMLDivElement;
    let handle = container.querySelector(
      `[data-id="${data.id}"]`,
    ) as HTMLDivElement;
    if (!handle) {
      handle = document.createElement("div");
      handle.className = "sigma-groupHandle";
      handle.dataset.id = data.id;
      container.appendChild(handle);
    }
    handle.innerText = data.expanded ? "−" : "+";
    handle.style.transform = `translate(-50%, -50%)`;
    handle.style.left = `${data.x}px`;
    handle.style.top = `${data.y + nodeSize}px`;
  }

  if (!data.label || data.opacity < 1) return;
  const textWidth = context.measureText(data.label).width;

  context.fillStyle = bg;
  context.fillRect(
    data.x - textWidth / 2,
    data.y + nodeSize * 1.25,
    textWidth,
    size + 2,
  );

  context.fillStyle = color;
  context.font = `${weight} ${size}px ${font}`;
  context.fillText(
    data.label,
    data.x - textWidth / 2,
    data.y + size + nodeSize * 1.25,
  );
}
