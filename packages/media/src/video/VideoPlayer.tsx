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

/**
 * Video player component that provides a video player with tools for annotations, markers, and zoom functionality.
 * It also supports NSFW overlays and video poster images.
 *
 * It includes features such as:
 * - Video playback with support for subtitles (VTT)
 * - Annotation tools for adding text to specific timestamps in the video
 * - Marker support for displaying marker bars on timebar at specific timestamps in the video
 * - NSFW overlay for content that may not be suitable for all audiences
 * - Zoom functionality to enhance video viewing experience
 *
 * @param {VideoProps} props - The properties for the video player.
 * @returns {JSX.Element} The rendered video player component.
 *
 * @example
 * ```jsx
 * <VideoPlayer
 *   src="https://example.com/video.mp4"
 *   poster="https://example.com/poster.jpg"
 *   vttText="https://example.com/subtitles.vtt"
 *   nsfw={true}
 *   markers={[{ time: 10, label: "Marker 1" }, { time: 20, label: "Marker 2" }]}
 *   annotations={[{ start: 5, end: 15, text: "Annotation 1" }]}
 *   onAnnotationChange={(annotations) => console.log(annotations)}
 *   onCut={(start, end) => console.log(`Cut from ${start} to ${end}`)}
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/media-videoplayer--video-player} for more details on the properties.
 */
export const VideoPlayer = <T extends KeyValue = KeyValue>({
  nsfw,
  poster,
  vttText,
  markers,
  comments,
  onCommentChange,
  onCut,
  onCrop,
  onExport,
  ...props
}: VideoProps<T>) => {
  return (
    <ThemeProvider colorScheme="dark">
      <VideoProvider {...props}>
        <Section dir="ltr">
          <Video poster={poster} vttText={vttText} onCrop={onCrop} />
          <Tools
            hasVtt={!!vttText}
            markers={markers}
            comments={comments}
            onCommentChange={onCommentChange}
            onCut={onCut}
            onCrop={onCrop}
            onExport={onExport}
          />
          {nsfw && <NsfwOverlay />}
        </Section>
      </VideoProvider>
    </ThemeProvider>
  );
};
