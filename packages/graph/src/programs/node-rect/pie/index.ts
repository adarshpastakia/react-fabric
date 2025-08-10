/* eslint-disable @typescript-eslint/naming-convention */

import { NodeProgram, type ProgramInfo } from "sigma/rendering";
import { type NodeDisplayData, type RenderParams } from "sigma/types";

import { floatColor } from "sigma/utils";
import { type NodeAttributes } from "../../../types";
import FRAGMENT_SHADER_SOURCE from "./frag.glsl";
import VERTEX_SHADER_SOURCE from "./vert.glsl";

/* istanbul ignore file */

const { UNSIGNED_BYTE, FLOAT } = WebGLRenderingContext;

const UNIFORMS = [
  "u_sizeRatio",
  "u_correctionRatio",
  "u_cameraAngle",
  "u_matrix",
] as const;

const PI = Math.PI;

export class NodeRectPie extends NodeProgram<
  (typeof UNIFORMS)[number],
  NodeAttributes
> {
  getDefinition() {
    return {
      VERTICES: 6,
      VERTEX_SHADER_SOURCE,
      FRAGMENT_SHADER_SOURCE,
      METHOD: WebGLRenderingContext.TRIANGLES,
      UNIFORMS,
      ATTRIBUTES: [
        { name: "a_position", size: 2, type: FLOAT },
        { name: "a_size", size: 1, type: FLOAT },
        { name: "a_opacity", size: 1, type: FLOAT },
        { name: "a_segments", size: 1, type: FLOAT },
        ...Array(10)
          .fill(0)
          .map((_, idx) => ({
            name: "a_colors_" + idx,
            size: 4,
            type: UNSIGNED_BYTE,
            normalized: true,
          })),
        { name: "a_id", size: 4, type: UNSIGNED_BYTE, normalized: true },
      ],
      CONSTANT_ATTRIBUTES: [{ name: "a_angle", size: 1, type: FLOAT }],
      CONSTANT_DATA: [
        [PI / 4],
        [(3 * PI) / 4],
        [-PI / 4],
        [(3 * PI) / 4],
        [-PI / 4],
        [(-3 * PI) / 4],
      ],
    };
  }

  processVisibleItem(
    nodeIndex: number,
    startIndex: number,
    data: NodeDisplayData & NodeAttributes & { opacity: number },
  ) {
    const array = this.array;

    array[startIndex++] = data.x;
    array[startIndex++] = data.y;
    array[startIndex++] = data.size - (data.stroke ?? 0.5);
    array[startIndex++] = !data.pie?.length ? 0 : data.opacity ?? 1;
    array[startIndex++] = Math.min(10, data.pie?.length ?? 0);
    Array(10)
      .fill(0)
      .forEach((_, idx) => {
        array[startIndex++] = floatColor(data.pie?.[idx] ?? "#0000");
      });
    array[startIndex++] = nodeIndex;
  }

  setUniforms(
    params: RenderParams,
    { gl, uniformLocations }: ProgramInfo,
  ): void {
    const { u_sizeRatio, u_correctionRatio, u_cameraAngle, u_matrix } =
      uniformLocations;

    gl.uniform1f(u_sizeRatio, params.sizeRatio);
    gl.uniform1f(u_cameraAngle, params.cameraAngle);
    gl.uniform1f(u_correctionRatio, params.correctionRatio);
    gl.uniformMatrix3fv(u_matrix, false, params.matrix);
  }
}
