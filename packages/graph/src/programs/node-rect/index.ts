import { createNodeCompoundProgram } from "sigma/rendering";
import { NodeAttributes } from "../../types";
import { NodeBadgeProgram } from "../node-badge";
import { NodeImageProgram } from "../node-image";
import { NodeRectBase } from "./base";
import { drawNodeHover } from "./base/drawHover";
import { drawNodeLabel } from "./base/drawLabel";
import { NodeRectBorder } from "./border";
import { NodeRectPie } from "./pie";

/* istanbul ignore file */

export const NodeRectProgram = createNodeCompoundProgram<NodeAttributes<any>>(
  [
    NodeRectBorder,
    NodeRectPie,
    NodeRectBase,
    NodeImageProgram(false),
    ...NodeBadgeProgram(false),
  ] as AnyObject,
  drawNodeLabel as AnyObject,
  drawNodeHover as AnyObject,
);
