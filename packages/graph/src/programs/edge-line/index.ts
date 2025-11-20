/* eslint-disable @typescript-eslint/naming-convention */

import { type Attributes } from "graphology-types";
import {
  createEdgeCompoundProgram,
  EdgeProgram,
  type ProgramInfo,
} from "sigma/rendering";
import {
  type EdgeDisplayData,
  type NodeDisplayData,
  type RenderParams,
} from "sigma/types";
import { floatColor } from "sigma/utils";
import { type InternalEdgeAttributes } from "../../types";
import { createEdgeArrowHeadProgram } from "../arrow-head";
import { drawLineLabel } from "./drawLabel";
import FRAGMENT_SHADER_SOURCE from "./frag.glsl";
import VERTEX_SHADER_SOURCE from "./vert.glsl";

/* istanbul ignore file */

const { UNSIGNED_BYTE, FLOAT } = WebGLRenderingContext;

const UNIFORMS = [
  "u_matrix",
  "u_zoomRatio",
  "u_sizeRatio",
  "u_correctionRatio",
  "u_pixelRatio",
  "u_feather",
  "u_minEdgeThickness",
  "u_lengthToThicknessRatio",
] as const;

class EdgeLineProgramBase<
  N extends Attributes = Attributes,
  E extends Attributes = Attributes,
  G extends Attributes = Attributes,
> extends EdgeProgram<(typeof UNIFORMS)[number], N, E, G> {
  getDefinition() {
    return {
      VERTICES: 6,
      VERTEX_SHADER_SOURCE,
      FRAGMENT_SHADER_SOURCE,
      METHOD: WebGLRenderingContext.TRIANGLES,
      UNIFORMS,
      ATTRIBUTES: [
        { name: "a_positionStart", size: 2, type: FLOAT },
        { name: "a_positionEnd", size: 2, type: FLOAT },
        { name: "a_normal", size: 2, type: FLOAT },
        { name: "a_color", size: 4, type: UNSIGNED_BYTE, normalized: true },
        { name: "a_opacity", size: 1, type: FLOAT },
        { name: "a_id", size: 4, type: UNSIGNED_BYTE, normalized: true },
        { name: "a_sourceRadius", size: 1, type: FLOAT },
        { name: "a_targetRadius", size: 1, type: FLOAT },
      ],
      CONSTANT_ATTRIBUTES: [
        // If 0, then position will be a_positionStart
        // If 2, then position will be a_positionEnd
        { name: "a_positionCoef", size: 1, type: FLOAT },
        { name: "a_normalCoef", size: 1, type: FLOAT },
        { name: "a_sourceRadiusCoef", size: 1, type: FLOAT },
        { name: "a_targetRadiusCoef", size: 1, type: FLOAT },
      ],
      CONSTANT_DATA: [
        [0, 1, -1, 0],
        [0, -1, 1, 0],
        [1, 1, 0, 1],
        [1, 1, 0, 1],
        [0, -1, 1, 0],
        [1, -1, 0, -1],
      ],
    };
  }

  processVisibleItem(
    edgeIndex: number,
    startIndex: number,
    sourceData: NodeDisplayData,
    targetData: NodeDisplayData,
    data: EdgeDisplayData & InternalEdgeAttributes,
  ) {
    let color = data.color ?? this.renderer.getSetting("defaultEdgeColor");
    if (data.selected) color = "#f00";
    if (data.highlight) color = "#F54A4A";

    const thickness =
      Math.min(data.size || 1, 0.5) * (data.selected ?? data.highlight ? 8 : 4);
    const x1 = sourceData.x;
    const y1 = sourceData.y;
    const x2 = targetData.x;
    const y2 = targetData.y;

    // Computing normals
    const dx = x2 - x1;
    const dy = y2 - y1;

    const sourceRadius = sourceData.size || 1;
    const targetRadius = targetData.size || 1;

    let len = dx * dx + dy * dy;
    let n1 = 0;
    let n2 = 0;

    if (len) {
      len = 1 / Math.sqrt(len);

      n1 = -dy * len * thickness;
      n2 = dx * len * thickness;
    }

    const array = this.array;

    array[startIndex++] = x1;
    array[startIndex++] = y1;
    array[startIndex++] = x2;
    array[startIndex++] = y2;
    array[startIndex++] = n1;
    array[startIndex++] = n2;
    array[startIndex++] = floatColor(color);
    array[startIndex++] = data.opacity ?? 1;
    array[startIndex++] = edgeIndex;
    array[startIndex++] = ["both", "source"].includes(data.arrow ?? "")
      ? sourceRadius
      : 0;
    array[startIndex++] = ["both", "target"].includes(data.arrow ?? "")
      ? targetRadius
      : 0;
  }

  setUniforms(
    params: RenderParams,
    { gl, uniformLocations }: ProgramInfo,
  ): void {
    const {
      u_matrix,
      u_zoomRatio,
      u_feather,
      u_pixelRatio,
      u_correctionRatio,
      u_sizeRatio,
      u_minEdgeThickness,
      u_lengthToThicknessRatio,
    } = uniformLocations;

    gl.uniformMatrix3fv(u_matrix, false, params.matrix);
    gl.uniform1f(u_zoomRatio, params.zoomRatio);
    gl.uniform1f(u_sizeRatio, params.sizeRatio);
    gl.uniform1f(u_correctionRatio, params.correctionRatio);
    gl.uniform1f(u_pixelRatio, params.pixelRatio);
    gl.uniform1f(u_feather, params.antiAliasingFeather);
    gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
    gl.uniform1f(u_lengthToThicknessRatio, 2.5);
  }
}

export const EdgeLineProgram = createEdgeCompoundProgram(
  [
    EdgeLineProgramBase,
    createEdgeArrowHeadProgram({ extremity: "source" }),
    createEdgeArrowHeadProgram({ extremity: "target" }),
  ],
  drawLineLabel as any,
);
