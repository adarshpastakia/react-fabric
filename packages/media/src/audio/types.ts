/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2026 Adarsh Pastakia
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

import { RefProp } from "@react-fabric/core/dist/types/types";

export interface AudioPlayerRef {
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
  seekAndPlay: (time: number) => void;

  playRegion: (id: string) => void;
}

export interface AudioRegion {
  id: string;
  start: number;
  end: number;
  color?: string;
  channel?: number;
}

export interface AudioProps extends RefProp<AudioPlayerRef> {
  /**
   * Audio source, can be a string or an array of strings for fallback sources (e.g. for responsive audio)
   */
  src: string | string[];
  /**
   * Whether to show the video element along with the audio wave
   */
  showVideo?: boolean;
  /**
   * Auto play the audio when it is loaded
   */
  autoPlay?: boolean;
  /**
   * icon image for missing media
   */
  missingIcon?: string;
  /**
   * Colors for the audio wave, where the first color is for the unplayed portion and the second color is for the played portion. The colors can be specified as an array of tuples, where each tuple contains the unplayed and played colors for a specific channel. If only one tuple is provided, it will be used for all channels.
   */
  colors?: [unplayed: string, played: string][];
  /**
   * Ranges to be highlighted on the audio wave, useful for range selection functionality. Each range should have a unique id, start and end time in seconds, and a color for the highlighted portion of the wave.
   */
  regions?: AudioRegion[];
  /**
   * Enable editable regions, allowing users to create, modify, and delete regions on the audio wave. When enabled, users can click and drag on the wave to create new regions, drag existing regions to adjust their start and end times, and click on a region to select it for editing or deletion. The onRegionEnter and onRegionExit callbacks can be used in conjunction with this prop to handle region interactions.
   * Note: Enabling editable regions may impact performance, especially for long audio files or a large number of regions, as it requires additional event listeners and state management to handle user interactions with the regions.
   */
  editable?: boolean;
  /**
   * Callback when audio is successfully loaded
   */
  onLoad?: () => void;
  /**
   * Callback when audio fails to load
   */
  onError?: () => void;
  /**
   * Callback when the regions on the audio wave change, useful for range selection functionality. The callback receives an array of regions with their id, start and end time in seconds, color, and channel as parameters.
   */
  onRegionsChange?: (regions: AudioRegion[]) => void;
  /**
   * Callback when a region of the audio is entered, useful for range selection functionality. The callback receives the start and end time of the region in seconds as parameters.
   */
  onRegionEnter?: (range: AudioRegion) => void;
  /**
   * Callback when a region of the audio is exited, useful for range selection functionality. The callback receives the start and end time of the region in seconds as parameters.
   */
  onRegionExit?: (range: AudioRegion) => void;
  /**
   * Callback when the current video time changes, useful for synchronizing external components with the video playback. The callback receives the current time in seconds as a parameter.
   */
  onTimeChange?: (time: number) => void;
}
