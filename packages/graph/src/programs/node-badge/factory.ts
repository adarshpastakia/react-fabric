/* eslint-disable @typescript-eslint/naming-convention */

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

const ICON_MAP: KeyValue = {
  star: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",
  exclaim:
    "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
  thumbUp:
    "M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z",
  thumbDown:
    "M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z",
};

const POSITION: KeyValue = {
  "top-left": 0,
  "top-right": 1,
  "bottom-left": 2,
  "bottom-right": 3,
  top: 4,
  left: 5,
  right: 6,
  bottom: 7,
};

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
  > & { badgePosition: string },
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
    badgePosition,
    ...textureManagerOptions
  }: CreateNodeImageProgramOptions<
    NodeAttributes & { bg: string; opacity: number },
    EdgeAttributes,
    Attributes
  > & { badgePosition: string } = {
    badgePosition: "top-right",
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
          { name: "a_circle", size: 1, type: FLOAT },
          { name: "a_placement", size: 1, type: FLOAT },
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
        NodeAttributes & { opacity: number; labelColor: string },
    ): void {
      const array = this.array;

      const badge = data.badge?.find((b) => b.position === badgePosition);

      let fill = floatColor(badge?.color ?? "#00000000");
      let color = floatColor(
        badge?.iconColor ??
          this.renderer.getSetting("labelColor").color ??
          "#000",
      );

      let imageSource = badge
        ? ICON_MAP[badge.type as any] ?? badge.path
        : undefined;

      const imagePosition = imageSource ? this.atlas[imageSource] : undefined;

      if (typeof imageSource === "string" && !imagePosition)
        void textureManager.registerImage(imageSource);

      array[startIndex++] = data.x;
      array[startIndex++] = data.y;
      array[startIndex++] = data.size;
      array[startIndex++] = !imageSource ? 0 : data.opacity ?? 1;
      array[startIndex++] = keepWithinCircle ? 1 : 0;
      array[startIndex++] = POSITION[badgePosition] ?? 0;
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
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniform1f(u_cameraAngle, params.cameraAngle);
      gl.uniform1f(u_percentagePadding, padding);
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
      gl.uniform1i(u_atlas, 0);
      gl.uniform1i(u_keepWithinCircle, keepWithinCircle ? 1 : 0);
    }
  };
}
