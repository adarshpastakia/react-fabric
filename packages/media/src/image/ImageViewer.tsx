/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { Section, ThemeProvider } from "@react-fabric/core";
import { NsfwOverlay } from "../nsfw/NsfwOverlay";
import { ImageProvider } from "./Context";
import { Image } from "./Image";
import { Tools } from "./Tools";
import { type ImageProps } from "./types";

/**
 * ImageViewer component for displaying and interacting with images.
 * It provides features like zooming, cropping, and NSFW overlay.
 *
 * @param {ImageProps} props - The properties for the ImageViewer component.
 * @returns {JSX.Element} The rendered ImageViewer component.
 *
 * @example
 * ```jsx
 * <ImageViewer
 *   src="https://example.com/image.jpg"
 *   fallback="https://example.com/convert?image=image.jpg"
 *   nsfw={true}
 *   enableZoom={true}
 *   onCrop={(box) => console.log("Cropped box:", box)}
 *   onLoad={() => console.log("Image loaded")}
 *   onError={() => console.log("Image failed to load")}
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/media-imageviewer--image-viewer} for more details on the properties.
 */
export const ImageViewer = <T extends KeyValue = KeyValue>({
  nsfw,
  enableZoom,
  onCrop,
  onExport,
  nsfwMessage,
  nsfwTimeout,
  nsfwTrigger,
  ...props
}: ImageProps<T>) => {
  return (
    <ThemeProvider colorScheme="dark">
      <Section dir="ltr">
        <ImageProvider {...props}>
          <Image onCrop={onCrop} />
          <Tools
            enableCrop={!!onCrop}
            onExport={onExport}
            enableZoom={enableZoom}
          />
          {nsfw && (
            <NsfwOverlay
              timeout={nsfwTimeout}
              trigger={nsfwTrigger}
              message={nsfwMessage}
            />
          )}
        </ImageProvider>
      </Section>
    </ThemeProvider>
  );
};
