/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2025 Adarsh Pastakia
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

import { Section } from "@react-fabric/core";
import { type AnnotatorProps, AnnotatorProvider } from "./Context";

/**
 * Annotator component provides a user interface for annotating images.
 * It allows users to draw shapes, add text, and highlight areas on the image.
 * It is designed to be used within a section of the application,
 * providing a grid layout for the content area.
 *
 * @param {AnnotatorProps<T>} props - The properties for the Annotator component.
 * @returns {JSX.Element} The rendered Annotator component.
 *
 * @example
 * ```jsx
 * <Annotator
 *   imageUrl="https://example.com/image.jpg"
 *   annotations={[]}
 *   onSave={(annotations) => console.log(annotations)}
 *   onCancel={() => console.log("Cancelled")}
 * />
 * ```
 *
 * @see {@link https://adarshpastakia.github.io/react-fabric/?path=/story/media-annotator--annotator} for more details on the properties.
 */
export const Annotator = <T extends KeyValue = KeyValue>(
  props: AnnotatorProps<T>,
) => {
  return (
    <Section dir="ltr">
      <div className="area-content grid place-items-center overflow-auto p-2">
        <AnnotatorProvider {...props} />
      </div>
    </Section>
  );
};
