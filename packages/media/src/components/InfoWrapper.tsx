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

import { Button } from "@react-fabric/core";

export const InfoWrapper = ({
  children,
  title,
  version,
  onClose,
}: {
  children: React.ReactNode;
  title: string;
  version?: string;
  onClose: () => void;
}) => (
  <div className="bg-black/60 absolute inset-y-8 inset-e-4 shadow z-5 backdrop-blur-2xl">
    <div className="px-2 py-1 sticky flex justify-between items-center border-b">
      <div>
        <span className="text-sm font-medium">{title}</span>
        <span className="text-xs text-muted ps-2">{version}</span>
      </div>
      <Button size="sm" variant="link" color="muted" icon="icon-[mdi--close]" aria-label="Close" onClick={onClose} />
    </div>
    <div className="p-4 text-sm flex flex-col gap-1">{children}</div>
  </div>
);
