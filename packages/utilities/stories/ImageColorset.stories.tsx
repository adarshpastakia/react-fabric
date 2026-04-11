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
import black1 from "/assets/colorset/black1.png";
import black2 from "/assets/colorset/black2.png";
import black3 from "/assets/colorset/black3.png";
import img1 from "/assets/colorset/img1.png";
import img2 from "/assets/colorset/img2.png";
import img3 from "/assets/colorset/img3.png";
import img4 from "/assets/colorset/img4.png";
import img5 from "/assets/colorset/img5.png";
import img6 from "/assets/colorset/img6.png";
import img7 from "/assets/colorset/img7.png";
import white1 from "/assets/colorset/white1.png";
import white2 from "/assets/colorset/white2.png";
import white3 from "/assets/colorset/white3.png";
import sample from "/assets/samples/sample.jpg";
import sample_large from "/assets/samples/sample_large.jpg";

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
        className={classnames("size-24", colorset === "light" && "bg-black", colorset === "dark" && "bg-white")}
      />
      <span>{colorset}</span>
    </div>
  );
};

export const ImageColorset: StoryObj = {
  render: () => {
    return (
      <div className="flex flex-wrap gap-4">
        <ImageTest src={sample} />
        <ImageTest src={sample_large} />
        <ImageTest src={img1} />
        <ImageTest src={img2} />
        <ImageTest src={img3} />
        <ImageTest src={img4} />
        <ImageTest src={img5} />
        <ImageTest src={img6} />
        <ImageTest src={img7} />
        <ImageTest src={white1} />
        <ImageTest src={white2} />
        <ImageTest src={white3} />
        <ImageTest src={black1} />
        <ImageTest src={black2} />
        <ImageTest src={black3} />
      </div>
    );
  },
};
