import { createNodeCompoundProgram } from "sigma/rendering";
import { NodeAttributes } from "../../types";
import { NodeBadgeProgram } from "../node-badge";
import { NodeImageProgram } from "../node-image";
import { NodeCircleBase } from "./base";
import { drawNodeHover } from "./base/drawHover";
import { drawNodeLabel } from "./base/drawLabel";
import { NodeCircleBorder } from "./border";
import { NodeCirclePie } from "./pie";

/* istanbul ignore file */

export const NodeCircleProgram = createNodeCompoundProgram<NodeAttributes<any>>(
  [
    NodeCircleBorder,
    NodeCirclePie,
    NodeCircleBase,
    NodeImageProgram(true),
    ...NodeBadgeProgram(true),
  ] as AnyObject,
  drawNodeLabel as AnyObject,
  drawNodeHover as AnyObject,
);
