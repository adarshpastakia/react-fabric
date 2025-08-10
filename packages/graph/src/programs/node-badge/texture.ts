import { EventEmitter } from "events";
import { type Coordinates } from "sigma/types";

/* istanbul ignore file */

/**
 * Useful types:
 * *************
 */
export interface ImageLoading {
  status: "loading";
}
export interface ImageError {
  status: "error";
}
export interface ImageReady {
  status: "ready";
  image: HTMLImageElement;
  sourceX: number;
  sourceY: number;
  sourceSize: number;
  destinationSize: number;
}
export type ImageType = ImageLoading | ImageError | ImageReady;

export type Atlas = Record<string, Coordinates & { size: number }>;

export interface TextureManagerOptions {
  // - If mode "auto", will always display images with their given size.
  // - If mode "force", will always scale images to the given value.
  // - If mode "max", will downscale images larger than the given value.
  size:
    | { mode: "auto" }
    | { mode: "max"; value: number }
    | { mode: "force"; value: number };
  // Tries to mimic the related CSS property.
  objectFit: "contain" | "cover" | "fill";
  // If true, the image is centered on its alpha barycenter.
  correctCentering: boolean;
}

export const DEFAULT_TEXTURE_MANAGER_OPTIONS: TextureManagerOptions = {
  size: { mode: "max", value: 512 },
  objectFit: "cover",
  correctCentering: false,
};

export const DEBOUNCE_TIMEOUT = 100;

// This margin helps avoiding images collisions in the texture:
export const MARGIN_IN_TEXTURE = 1;

/**
 * Helpers:
 * ********
 */
/**
 * This helper loads an image at a given URL, and returns an HTMLImageElement
 * with it displayed once it's properly loaded, within a promise.
 */
export async function loadRasterImage(
  imageSource: string,
): Promise<HTMLImageElement> {
  return await new Promise((resolve, reject) => {
    const image = new Image();

    image.addEventListener(
      "load",
      () => {
        resolve(image);
      },
      { once: true },
    );
    image.addEventListener(
      "error",
      (e) => {
        reject(e.error);
      },
      { once: true },
    );

    // Load image:
    image.setAttribute("crossOrigin", "");
    image.src = imageSource;
  });
}

export const makeSvg = (path: string = "") => {
  return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 26 26" width="128px" height="128px"><path fill="#000" d="${path}"></path></svg>`;
};

/**
 * This helper loads an SVG image at a given URL, adjusts its size to a given
 * size, and returns an HTMLImageElement with it displayed once it's properly
 * loaded, within a promise.
 */
export async function loadSVGImage(
  imageSource: string,
  { size }: { size?: number } = {},
): Promise<HTMLImageElement> {
  const svg = new DOMParser().parseFromString(
    makeSvg(imageSource),
    "image/svg+xml",
  );
  const root = svg.documentElement;

  const originalWidth = root.getAttribute("width");
  const originalHeight = root.getAttribute("height");

  if (!originalWidth || !originalHeight)
    throw new Error(
      "loadSVGImage: cannot use `size` if target SVG has no definite dimensions.",
    );

  if (typeof size === "number") {
    root.setAttribute("width", "" + size);
    root.setAttribute("height", "" + size);
  }

  // NOTE: since Google Material last changes to their icon viewBox, this
  // code is no longer necessary (hopefully it does not break something else...)
  // root.setAttribute("viewBox", `0 0 ${originalWidth} ${originalHeight}`);

  const correctedSvgString = new XMLSerializer().serializeToString(svg);

  const blob = new Blob([correctedSvgString], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);

  const res = loadRasterImage(url);
  void res.finally(() => URL.revokeObjectURL(url));
  return await res;
}

/**
 * This helper loads an image using the proper function.
 */
export async function loadImage(
  imageSource: string,
  { size }: { size?: number } = {},
): Promise<HTMLImageElement> {
  return await loadSVGImage(imageSource, { size: 128 });
}

/**
 * This helper computes exact coordinates to draw an image onto a texture.
 */
export function refineImage(
  image: HTMLImageElement,
  corrector: PictogramCenteringCorrector,
  { objectFit, size, correctCentering }: TextureManagerOptions,
): Omit<ImageReady, "status" | "image"> {
  const sourceSize =
    objectFit === "contain"
      ? Math.max(image.width, image.height)
      : Math.min(image.width, image.height);
  const destinationSize =
    size.mode === "auto"
      ? sourceSize
      : size.mode === "force"
        ? size.value
        : Math.min(size.value, sourceSize);
  let sourceX = (image.width - sourceSize) / 2;
  let sourceY = (image.height - sourceSize) / 2;

  if (correctCentering) {
    const correction = corrector.getCorrectionOffset(image, sourceSize);
    sourceX = correction.x;
    sourceY = correction.y;
  }

  return {
    sourceX,
    sourceY,
    sourceSize,
    destinationSize,
  };
}

/**
 * This helper takes a collection of image states and a context, draw all the
 * images in the context, and returns an atlas to get where each image is drawn
 * on the texture.
 */
export function drawTexture(
  ctx: CanvasRenderingContext2D,
  images: Record<string, ImageType>,
): Atlas {
  const MAX_CANVAS_WIDTH = 3072;
  const TARGET_FILL_PERCENTAGE = 0.6;

  // 1. Sort images by height, decreasingly:
  const imagesArray: Array<{
    key: string;
    image: HTMLImageElement;
    sourceX: number;
    sourceY: number;
    sourceSize: number;
    destinationSize: number;
  }> = [];
  let totalArea = 0;
  let maxItemWidth = 0;
  for (const key in images) {
    const imageState = images[key];
    if (imageState.status !== "ready") continue;

    maxItemWidth = Math.max(maxItemWidth, imageState.destinationSize);
    totalArea += imageState.destinationSize ** 2;
    imagesArray.push({
      key,
      ...imageState,
    });
  }
  imagesArray.sort((a, b) => (a.destinationSize > b.destinationSize ? -1 : 1));

  // 2. Predict canvas width:
  const predictedTotalArea = totalArea / TARGET_FILL_PERCENTAGE;
  const predictedWidth = Math.min(
    Math.max(Math.sqrt(predictedTotalArea), maxItemWidth),
    MAX_CANVAS_WIDTH,
  );

  // 3. Refine images coordinates:
  const refinedImagesArray: Array<
    (typeof imagesArray)[number] & {
      destinationX: number;
      destinationY: number;
    }
  > = [];
  let x = 0;
  let y = 0;
  let currentRowHeight = 0;
  let maxRowWidth = 0;
  const atlas: Atlas = {};
  for (let i = 0, l = imagesArray.length; i < l; i++) {
    const { key, image, sourceSize, sourceX, sourceY, destinationSize } =
      imagesArray[i];
    const destinationSizeWithMargin = destinationSize + MARGIN_IN_TEXTURE;
    if (x + destinationSizeWithMargin > predictedWidth) {
      maxRowWidth = Math.max(maxRowWidth, x);
      x = 0;
      y += currentRowHeight;
      currentRowHeight = destinationSizeWithMargin;
    }
    refinedImagesArray.push({
      key,
      image,
      sourceX,
      sourceY,
      sourceSize,
      destinationX: x,
      destinationY: y,
      destinationSize,
    });
    atlas[key] = {
      x,
      y,
      size: destinationSize,
    };
    x += destinationSizeWithMargin;
    currentRowHeight = Math.max(currentRowHeight, destinationSizeWithMargin);
  }

  // 4. Crop texture to final best dimensions:
  maxRowWidth = Math.max(maxRowWidth, x);
  const canvas = ctx.canvas;
  canvas.width = maxRowWidth;
  canvas.height = y + currentRowHeight;

  // 5. Fill texture:
  for (let i = 0, l = refinedImagesArray.length; i < l; i++) {
    const {
      image,
      sourceSize,
      sourceX,
      sourceY,
      destinationSize,
      destinationX,
      destinationY,
    } = refinedImagesArray[i];

    ctx.drawImage(
      image,
      sourceX,
      sourceY,
      sourceSize,
      sourceSize,
      destinationX,
      destinationY,
      destinationSize,
      destinationSize,
    );
  }

  return atlas;
}

/**
 * This class helps to "correct" the centering of an SVG pictogram by finding
 * the "true" visually correct center through the barycenter of the pictogram's
 * alpha layer in x and y dimension.
 */
export class PictogramCenteringCorrector {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d", {
      willReadFrequently: true,
    }) as AnyObject;
  }

  getCorrectionOffset(image: HTMLImageElement, size: number): Coordinates {
    this.canvas.width = size;
    this.canvas.height = size;
    this.context.clearRect(0, 0, size, size);
    this.context.drawImage(image, 0, 0, size, size);
    const data = this.context.getImageData(0, 0, size, size).data;

    const alpha = new Uint8ClampedArray(data.length / 4);

    for (let i = 0; i < data.length; i++) {
      alpha[i] = data[i * 4 + 3];
    }

    let sumX = 0;
    let sumY = 0;
    let total = 0;

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const a = alpha[y * size + x];

        total += a;
        sumX += a * x;
        sumY += a * y;
      }
    }

    const barycenterX = sumX / total;
    const barycenterY = sumY / total;

    return {
      x: barycenterX - size / 2,
      y: barycenterY - size / 2,
    };
  }
}

export class TextureManager extends EventEmitter {
  static NEW_TEXTURE_EVENT = "newTexture";

  private readonly options: TextureManagerOptions;
  private readonly canvas: HTMLCanvasElement = document.createElement("canvas");
  private readonly ctx = this.canvas.getContext("2d", {
    willReadFrequently: true,
  }) as AnyObject;

  private frameId?: number;
  private readonly corrector = new PictogramCenteringCorrector();

  private imageStates: Record<string, ImageType> = {};
  private texture: ImageData = this.ctx.getImageData(0, 0, 1, 1);
  private atlas: Atlas = {};

  constructor(options: Partial<TextureManagerOptions> = {}) {
    super();
    this.options = { ...DEFAULT_TEXTURE_MANAGER_OPTIONS, ...options };
  }

  private scheduleGenerateTexture() {
    if (typeof this.frameId === "number") return;

    this.frameId = window.setTimeout(() => {
      this.generateTexture();
      this.frameId = undefined;
    }, DEBOUNCE_TIMEOUT);
  }

  private generateTexture() {
    this.atlas = drawTexture(this.ctx, this.imageStates);
    this.texture = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height,
    );
    this.emit(TextureManager.NEW_TEXTURE_EVENT, {
      atlas: this.atlas,
      texture: this.texture,
    });
  }

  // PUBLIC API:
  async registerImage(source: string) {
    if (this.imageStates[source]) return;

    this.imageStates[source] = { status: "loading" };

    try {
      const { size } = this.options;
      const image = await loadImage(source, {
        size: size.mode === "force" ? size.value : undefined,
      });
      this.imageStates[source] = {
        status: "ready",
        image,
        ...refineImage(image, this.corrector, this.options),
      };
      this.scheduleGenerateTexture();
    } catch (e) {
      this.imageStates[source] = {
        status: "error",
      };
    }
  }

  getAtlas(): Atlas {
    return this.atlas;
  }

  getTexture(): ImageData {
    return this.texture;
  }
}
