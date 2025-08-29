/* eslint-disable @typescript-eslint/naming-convention */

import { isSvgPath } from "@react-fabric/utilities";
import { type Attributes } from "graphology-types";
import type Sigma from "sigma";
import {
  type NodeHoverDrawingFunction,
  type NodeLabelDrawingFunction,
  NodeProgram,
  type NodeProgramType,
  type ProgramInfo,
} from "sigma/rendering";
import { type NodeDisplayData, type RenderParams } from "sigma/types";
import { floatColor } from "sigma/utils";
import { type EdgeAttributes, type NodeAttributes } from "../../types";
import FRAGMENT_SHADER_SOURCE from "./frag.glsl";
import {
  type Atlas,
  DEFAULT_TEXTURE_MANAGER_OPTIONS,
  TextureManager,
  type TextureManagerOptions,
} from "./texture";
import VERTEX_SHADER_SOURCE from "./vert.glsl";

/* istanbul ignore file */

const { UNSIGNED_BYTE, FLOAT } = WebGLRenderingContext;

interface CreateNodeImageProgramOptions<
  N extends Attributes,
  E extends Attributes,
  G extends Attributes,
> extends TextureManagerOptions {
  // - If "background", color will be used to color full node behind the image.
  // - If "color", color will be used to color image pixels (for pictograms)
  drawingMode: "background" | "color";
  // If true, the images are always cropped to the circle
  keepWithinCircle: boolean;
  // Allows overriding drawLabel and drawHover returned class static methods.
  drawLabel: NodeLabelDrawingFunction<N, E, G> | undefined;
  drawHover: NodeHoverDrawingFunction<N, E, G> | undefined;
  // The padding should be expressed as a [0, 1] percentage.
  // A padding of 0.05 will always be 5% of the diameter of a node.
  padding: number;
  // Allows using a different color attribute name.
  colorAttribute: string;
}

const DEFAULT_CREATE_NODE_IMAGE_OPTIONS: CreateNodeImageProgramOptions<
  Attributes,
  Attributes,
  Attributes
> = {
  ...DEFAULT_TEXTURE_MANAGER_OPTIONS,
  drawingMode: "background",
  keepWithinCircle: true,
  drawLabel: undefined,
  drawHover: undefined,
  padding: 0,
  colorAttribute: "color",
};

const UNIFORMS = [
  "u_sizeRatio",
  "u_correctionRatio",
  "u_cameraAngle",
  "u_percentagePadding",
  "u_matrix",
  "u_colorizeImages",
  "u_keepWithinCircle",
  "u_atlas",
] as const;

/**
 * To share the texture between the program instances of the graph and the
 * hovered nodes (to prevent some flickering, mostly), this program must be
 * "built" for each sigma instance:
 */
export default function getNodeImageProgram(
  options?: Partial<
    CreateNodeImageProgramOptions<
      NodeAttributes & { bg: string; opacity: number },
      EdgeAttributes,
      Attributes
    >
  >,
): NodeProgramType<
  NodeAttributes & { bg: string; opacity: number },
  EdgeAttributes
> {
  const {
    drawHover,
    drawLabel,
    drawingMode,
    keepWithinCircle,
    padding,
    colorAttribute,
    ...textureManagerOptions
  }: CreateNodeImageProgramOptions<
    NodeAttributes & { bg: string; opacity: number },
    EdgeAttributes,
    Attributes
  > = {
    ...DEFAULT_CREATE_NODE_IMAGE_OPTIONS,
    ...(options ?? {}),
    drawLabel: undefined,
    drawHover: undefined,
  };

  /**
   * This texture manager is shared between all instances of this exact class,
   * returned by this call to getNodeProgramImage. This means that remounting
   * the sigma instance will not reload the images and regenerate the texture.
   */
  const textureManager = new TextureManager(textureManagerOptions);

  return class NodeImageProgram extends NodeProgram<
    (typeof UNIFORMS)[number],
    NodeAttributes & { bg: string; opacity: number },
    EdgeAttributes,
    Attributes
  > {
    static readonly ANGLE_1 = (1 * Math.PI) / 4;
    static readonly ANGLE_2 = (3 * Math.PI) / 4;
    static readonly ANGLE_3 = (5 * Math.PI) / 4;
    static readonly ANGLE_4 = (7 * Math.PI) / 4;

    static drawLabel = drawLabel;
    static drawHover = drawHover;

    getDefinition() {
      return {
        VERTICES: 4,
        VERTEX_SHADER_SOURCE,
        FRAGMENT_SHADER_SOURCE,
        METHOD: WebGLRenderingContext.TRIANGLE_FAN,
        UNIFORMS,
        ATTRIBUTES: [
          { name: "a_position", size: 2, type: FLOAT },
          { name: "a_size", size: 1, type: FLOAT },
          { name: "a_opacity", size: 1, type: FLOAT },
          { name: "a_colorMode", size: 1, type: FLOAT },
          { name: "a_fill", size: 4, type: UNSIGNED_BYTE, normalized: true },
          { name: "a_color", size: 4, type: UNSIGNED_BYTE, normalized: true },
          { name: "a_id", size: 4, type: UNSIGNED_BYTE, normalized: true },
          { name: "a_texture", size: 4, type: FLOAT },
        ],
        CONSTANT_ATTRIBUTES: [{ name: "a_angle", size: 1, type: FLOAT }],
        CONSTANT_DATA: [
          [NodeImageProgram.ANGLE_1],
          [NodeImageProgram.ANGLE_2],
          [NodeImageProgram.ANGLE_3],
          [NodeImageProgram.ANGLE_4],
        ],
      };
    }

    atlas: Atlas;
    texture: WebGLTexture;
    textureImage: ImageData;
    latestRenderParams?: RenderParams;
    textureManagerCallback: () => void;

    constructor(
      gl: WebGLRenderingContext,
      pickingBuffer: WebGLFramebuffer | null,
      renderer: Sigma<
        NodeAttributes & { bg: string; opacity: number },
        EdgeAttributes,
        Attributes
      >,
    ) {
      super(gl, pickingBuffer, renderer);

      this.textureManagerCallback = () => {
        if (!this) return;

        if (this.bindTexture) {
          this.atlas = textureManager.getAtlas();
          this.textureImage = textureManager.getTexture();
          this.bindTexture();
          if (this.latestRenderParams) this.render(this.latestRenderParams);
        }

        if (renderer?.refresh) renderer.refresh();
      };
      textureManager.on(
        TextureManager.NEW_TEXTURE_EVENT,
        this.textureManagerCallback,
      );

      this.atlas = textureManager.getAtlas();
      this.textureImage = textureManager.getTexture();
      this.texture = gl.createTexture() as AnyObject;
      this.bindTexture();
    }

    kill() {
      textureManager.off(
        TextureManager.NEW_TEXTURE_EVENT,
        this.textureManagerCallback,
      );
    }

    bindTexture() {
      const gl = this.normalProgram.gl;

      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        this.textureImage,
      );
      gl.generateMipmap(gl.TEXTURE_2D);
    }

    protected renderProgram(params: RenderParams, programInfo: ProgramInfo) {
      if (!programInfo.isPicking) {
        // Rebind texture (since it's been just unbound by picking):
        const gl = programInfo.gl;
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
      }
      super.renderProgram(params, programInfo);
    }

    processVisibleItem(
      nodeIndex: number,
      startIndex: number,
      data: NodeDisplayData &
        NodeAttributes & { opacity: number; iconColor: string },
    ): void {
      const array = this.array;
      const fill = floatColor(
        data.color ?? this.renderer.getSetting("defaultNodeColor"),
      );
      const color = floatColor(
        data.iconColor ?? this.renderer.getSetting("labelColor").color,
      );

      const imageSource = data.image ?? data.path;
      const imagePosition = imageSource ? this.atlas[imageSource] : undefined;

      if (typeof imageSource === "string" && !imagePosition)
        void textureManager.registerImage(imageSource);

      array[startIndex++] = data.x;
      array[startIndex++] = data.y;
      array[startIndex++] =
        data.size - (data.border ?? 0) - (data.pie?.length ? 4 : 2);
      array[startIndex++] = data.opacity ?? 1;
      array[startIndex++] = isSvgPath(imageSource) ? 1 : 0;
      array[startIndex++] = fill;
      array[startIndex++] = color;
      array[startIndex++] = nodeIndex;

      // Reference texture:
      if (imagePosition) {
        const { width, height } = this.textureImage;
        array[startIndex++] = imagePosition.x / width;
        array[startIndex++] = imagePosition.y / height;
        array[startIndex++] = imagePosition.size / width;
        array[startIndex++] = imagePosition.size / height;
      } else {
        array[startIndex++] = 0;
        array[startIndex++] = 0;
        array[startIndex++] = 0;
        array[startIndex++] = 0;
      }
    }

    setUniforms(
      params: RenderParams,
      { gl, uniformLocations }: ProgramInfo,
    ): void {
      const {
        u_sizeRatio,
        u_correctionRatio,
        u_matrix,
        u_atlas,
        u_keepWithinCircle,
        u_cameraAngle,
        u_percentagePadding,
      } = uniformLocations;
      this.latestRenderParams = params;

      gl.uniform1f(u_correctionRatio, params.correctionRatio);
      gl.uniform1f(
        u_sizeRatio,
        keepWithinCircle ? params.sizeRatio : params.sizeRatio / Math.SQRT2,
      );
      gl.uniform1f(u_cameraAngle, params.cameraAngle);
      gl.uniform1f(u_percentagePadding, padding);
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
      gl.uniform1i(u_atlas, 0);
      gl.uniform1i(u_keepWithinCircle, keepWithinCircle ? 1 : 0);
    }
  };
}
