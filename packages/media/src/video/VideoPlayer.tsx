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
import { VideoProvider } from "./Context";
import { Tools } from "./Tools";
import { Video } from "./Video";
import { type VideoProps } from "./types";

export const VideoPlayer = ({
  nsfw,
  poster,
  vttText,
  markers,
  annotations,
  enableZoom = true,
  onAnnotationChange,
  onCut,
  ...props
}: VideoProps) => {
  return (
    <ThemeProvider colorScheme="dark">
      <VideoProvider {...props}>
        <Section dir="ltr">
          <Video poster={poster} vttText={vttText} />
          <Tools
            enableZoom={enableZoom}
            hasVtt={!!vttText}
            markers={markers}
            annotations={annotations}
            onAnnotationChange={onAnnotationChange}
            onCut={onCut}
          />
          {nsfw && <NsfwOverlay />}
        </Section>
      </VideoProvider>
    </ThemeProvider>
  );
};
