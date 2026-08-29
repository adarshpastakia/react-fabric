/**
 * React Fabric
 * @version 1.0.0
 * @license MIT
 * @copyright 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export const MEDIA_PACKAGE = "@react-fabric/media";
export const MEDIA_VERSION = "1.0.0";

export { Annotator } from "./annotator";
export { AnnotatorFieldType } from "./annotator/types";

import type { ImageProps } from "./image/types";
import type { VideoProps } from "./video/types";

export { ImageViewer } from "./image";
export type { ImageViewerRef } from "./image/types";

export { AudioPlayer } from "./audio";
export type { AudioPlayerRef, AudioRegion } from "./audio/types";

export { VideoPlayer } from "./video";
export type { VideoPlayerRef } from "./video/types";

export type { ImageAnnotationShape, VideoAnnotationShape } from "./typedefs";
export type ImageAnnotations = ImageProps["annotations"];
export type VideoAnnotations = VideoProps["annotations"];

export { Dictation } from "./dictation";
export { Thumbnail } from "./thumbnail";
