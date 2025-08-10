/* eslint-disable @typescript-eslint/naming-convention */

import { DEFAULT_EDGE_CURVATURE } from "@sigma/edge-curve";
import { type Attributes } from "graphology-types";
import { EdgeProgram, type ProgramInfo } from "sigma/rendering";
import {
  type EdgeDisplayData,
  type NodeDisplayData,
  type RenderParams,
} from "sigma/types";
import { floatColor } from "sigma/utils";
import { createDrawCurvedEdgeLabel } from "./drawLabel";
import FRAGMENT_SHADER_SOURCE from "./frag.glsl";
import VERTEX_SHADER_SOURCE from "./vert.glsl";

/* istanbul ignore file */

const { UNSIGNED_BYTE, FLOAT } = WebGLRenderingContext;

const UNIFORMS = [
  "u_matrix",
  "u_sizeRatio",
  "u_dimensions",
  "u_pixelRatio",
] as const;

export class EdgeCurveProgram<
  N extends Attributes = Attributes,
  E extends Attributes = Attributes,
  G extends Attributes = Attributes,
> extends EdgeProgram<(typeof UNIFORMS)[number], N, E, G> {
  drawLabel = createDrawCurvedEdgeLabel<N, E, G>({
    curvatureAttribute: "curvature",
    defaultCurvature: DEFAULT_EDGE_CURVATURE,
    arrowHead: null,
  });

  getDefinition() {
    return {
      VERTICES: 6,
      VERTEX_SHADER_SOURCE,
      FRAGMENT_SHADER_SOURCE,
      METHOD: WebGLRenderingContext.TRIANGLES,
      UNIFORMS,
      ATTRIBUTES: [
        { name: "a_source", size: 2, type: FLOAT },
        { name: "a_target", size: 2, type: FLOAT },
        { name: "a_thickness", size: 1, type: FLOAT },
        { name: "a_curvature", size: 1, type: FLOAT },
        { name: "a_color", size: 4, type: UNSIGNED_BYTE, normalized: true },
        { name: "a_opacity", size: 1, type: FLOAT },
        { name: "a_id", size: 4, type: UNSIGNED_BYTE, normalized: true },
      ],
      CONSTANT_ATTRIBUTES: [
        { name: "a_current", size: 1, type: FLOAT }, // TODO: could optimize to bool
        { name: "a_direction", size: 1, type: FLOAT }, // TODO: could optimize to byte
      ],
      CONSTANT_DATA: [
        [0, 1],
        [0, -1],
        [1, 1],
        [0, -1],
        [1, 1],
        [1, -1],
      ],
    };
  }

  processVisibleItem(
    edgeIndex: number,
    startIndex: number,
    sourceData: NodeDisplayData,
    targetData: NodeDisplayData,
    data: EdgeDisplayData & {
      curvature: number;
      opacity: number;
      selected?: boolean;
      highlight?: boolean;
    },
  ) {
    let color = data.color ?? this.renderer.getSetting("defaultEdgeColor");
    if (data.selected) color = "#f00";
    if (data.highlight) color = "#F54A4A";

    const thickness =
      (data.size || 1) * (data.selected || data.highlight ? 6 : 2.5);
    const x1 = sourceData.x;
    const y1 = sourceData.y;
    const x2 = targetData.x;
    const y2 = targetData.y;
    const curvature = data.curvature ?? DEFAULT_EDGE_CURVATURE;

    const array = this.array;

    // First point
    array[startIndex++] = x1;
    array[startIndex++] = y1;
    array[startIndex++] = x2;
    array[startIndex++] = y2;
    array[startIndex++] = thickness;
    array[startIndex++] = curvature;
    array[startIndex++] = floatColor(color);
    array[startIndex++] = data.opacity ?? 1;
    array[startIndex++] = edgeIndex;
  }

  setUniforms(
    params: RenderParams,
    { gl, uniformLocations }: ProgramInfo,
  ): void {
    const { u_matrix, u_pixelRatio, u_sizeRatio, u_dimensions } =
      uniformLocations;

    gl.uniformMatrix3fv(u_matrix, false, params.matrix);
    gl.uniform1f(u_pixelRatio, params.pixelRatio);
    gl.uniform1f(u_sizeRatio, params.sizeRatio);
    gl.uniform2f(
      u_dimensions,
      params.width * params.pixelRatio,
      params.height * params.pixelRatio,
    );
  }
}
