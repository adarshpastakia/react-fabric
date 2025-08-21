/* eslint-disable @typescript-eslint/naming-convention */

import { NodeProgram, type ProgramInfo } from "sigma/rendering";
import { type NodeDisplayData, type RenderParams } from "sigma/types";
import { floatColor } from "sigma/utils";

import { type EdgeAttributes, type NodeAttributes } from "../../../types";
import FRAGMENT_SHADER_SOURCE from "./frag.glsl";
import VERTEX_SHADER_SOURCE from "./vert.glsl";

/* istanbul ignore file */

const { UNSIGNED_BYTE, FLOAT } = WebGLRenderingContext;

const UNIFORMS = ["u_sizeRatio", "u_correctionRatio", "u_matrix"] as const;

export class NodeCircleBorder extends NodeProgram<
  (typeof UNIFORMS)[number],
  NodeAttributes,
  EdgeAttributes
> {
  static readonly ANGLE_1 = 0;
  static readonly ANGLE_2 = (2 * Math.PI) / 3;
  static readonly ANGLE_3 = (4 * Math.PI) / 3;

  getDefinition() {
    return {
      VERTICES: 3,
      VERTEX_SHADER_SOURCE,
      FRAGMENT_SHADER_SOURCE,
      METHOD: WebGLRenderingContext.TRIANGLES,
      UNIFORMS,
      ATTRIBUTES: [
        { name: "a_position", size: 2, type: FLOAT },
        { name: "a_size", size: 1, type: FLOAT },
        { name: "a_opacity", size: 1, type: FLOAT },
        { name: "a_color", size: 4, type: UNSIGNED_BYTE, normalized: true },
        { name: "a_id", size: 4, type: UNSIGNED_BYTE, normalized: true },
      ],
      CONSTANT_ATTRIBUTES: [{ name: "a_angle", size: 1, type: FLOAT }],
      CONSTANT_DATA: [
        [NodeCircleBorder.ANGLE_1],
        [NodeCircleBorder.ANGLE_2],
        [NodeCircleBorder.ANGLE_3],
      ],
    };
  }

  processVisibleItem(
    nodeIndex: number,
    startIndex: number,
    data: NodeDisplayData & NodeAttributes & { opacity: number },
  ) {
    const array = this.array;
    const color = floatColor(
      data.borderColor ?? this.renderer.getSetting("defaultEdgeColor"),
    );

    array[startIndex++] = data.x;
    array[startIndex++] = data.y;
    array[startIndex++] = data.size;
    array[startIndex++] = data.opacity ?? 1;
    array[startIndex++] = color;
    array[startIndex++] = nodeIndex;
  }

  setUniforms(
    params: RenderParams,
    { gl, uniformLocations }: ProgramInfo,
  ): void {
    const { u_sizeRatio, u_correctionRatio, u_matrix } = uniformLocations;

    gl.uniform1f(u_correctionRatio, params.correctionRatio);
    gl.uniform1f(u_sizeRatio, params.sizeRatio);
    gl.uniformMatrix3fv(u_matrix, false, params.matrix);
  }
}
