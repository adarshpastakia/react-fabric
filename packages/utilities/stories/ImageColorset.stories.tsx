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

import type { Meta, StoryObj } from "@storybook/react";
import classnames from "classnames";
import { SyntheticEvent, useCallback, useState } from "react";
import { getImageColorset } from "../src";

const meta: Meta = {
  title: "@utility/ImageColorset",
  parameters: {
    layout: "padded",
  },
};

export default meta;

const ImageTest = ({ src }: { src: string }) => {
  const [colorset, setColorset] = useState("loading");
  const checkColor = useCallback((e: SyntheticEvent<HTMLImageElement>) => {
    setColorset(getImageColorset(e.target as HTMLImageElement, true));
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <img
        src={src}
        onLoad={checkColor}
        crossOrigin="anonymous"
        className={classnames(
          "size-24",
          colorset === "light" && "bg-black",
          colorset === "dark" && "bg-white",
        )}
      />
      <span>{colorset}</span>
    </div>
  );
};

export const ImageColorset: StoryObj = {
  render: () => {
    return (
      <div className="flex flex-wrap gap-4">
        <ImageTest src="/samples/sample.jpg" />
        <ImageTest src="/samples/sample_large.jpg" />
        <ImageTest src="/colorset/img1.png" />
        <ImageTest src="/colorset/img2.png" />
        <ImageTest src="/colorset/img3.png" />
        <ImageTest src="/colorset/img4.png" />
        <ImageTest src="/colorset/img5.png" />
        <ImageTest src="/colorset/img6.png" />
        <ImageTest src="/colorset/img7.png" />
        <ImageTest src="/colorset/white1.png" />
        <ImageTest src="/colorset/white2.png" />
        <ImageTest src="/colorset/white3.png" />
        <ImageTest src="/colorset/black1.png" />
        <ImageTest src="/colorset/black2.png" />
        <ImageTest src="/colorset/black3.png" />
      </div>
    );
  },
};
