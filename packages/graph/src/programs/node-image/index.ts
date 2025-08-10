/* istanbul ignore file */

import createNodeImageProgram from "./factory";

export { default as createNodeImageProgram } from "./factory";
export const NodeImageProgram = (isCircle: boolean) =>
  createNodeImageProgram({ keepWithinCircle: isCircle });
