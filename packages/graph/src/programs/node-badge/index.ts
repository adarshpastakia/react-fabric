/* istanbul ignore file */

import createNodeImageProgram from "./factory";

export { default as createNodeImageProgram } from "./factory";
export const NodeBadgeProgram = (isCircle: boolean) => [
  createNodeImageProgram({
    keepWithinCircle: isCircle,
    badgePosition: "top-right",
  }),
  createNodeImageProgram({
    keepWithinCircle: isCircle,
    badgePosition: "top-left",
  }),
  createNodeImageProgram({
    keepWithinCircle: isCircle,
    badgePosition: "bottom-right",
  }),
  createNodeImageProgram({
    keepWithinCircle: isCircle,
    badgePosition: "bottom-left",
  }),
  createNodeImageProgram({
    keepWithinCircle: isCircle,
    badgePosition: "top",
  }),
  createNodeImageProgram({
    keepWithinCircle: isCircle,
    badgePosition: "left",
  }),
  createNodeImageProgram({
    keepWithinCircle: isCircle,
    badgePosition: "right",
  }),
];
