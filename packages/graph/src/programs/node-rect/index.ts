import { createNodeCompoundProgram } from "sigma/rendering";
import { type NodeAttributes } from "../../types";
import { NodeBadgeProgram } from "../node-badge";
import { NodeImageProgram } from "../node-image";
import { NodeRectBase } from "./base";
import { drawNodeHover } from "./base/drawHover";
import { drawNodeLabel } from "./base/drawLabel";

/* istanbul ignore file */

export const NodeRectProgram = createNodeCompoundProgram<NodeAttributes<any>>(
  [
    NodeRectBase,
    NodeImageProgram(false),
    ...NodeBadgeProgram(false),
  ] as AnyObject,
  drawNodeLabel as AnyObject,
  drawNodeHover as AnyObject,
);
