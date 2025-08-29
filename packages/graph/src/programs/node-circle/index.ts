import { createNodeCompoundProgram } from "sigma/rendering";
import { NodeAttributes } from "../../types";
import { NodeBadgeProgram } from "../node-badge";
import { NodeImageProgram } from "../node-image";
import { NodeCircleBase } from "./base";
import { drawNodeHover } from "./base/drawHover";
import { drawNodeLabel } from "./base/drawLabel";

/* istanbul ignore file */

export const NodeCircleProgram = createNodeCompoundProgram<NodeAttributes<any>>(
  [
    NodeCircleBase,
    NodeImageProgram(true),
    ...NodeBadgeProgram(true),
  ] as AnyObject,
  drawNodeLabel as AnyObject,
  drawNodeHover as AnyObject,
);
