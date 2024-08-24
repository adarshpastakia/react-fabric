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

import { Button, ButtonGroup, CoreIcons } from "@react-fabric/core";

export const Scroller = ({
  vertical = true,
  scrollActive,
  onStart,
  onEnd,
  onPrevious,
  onNext,
}: {
  scrollActive: number;
  vertical: boolean;
  onStart: () => void;
  onEnd: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) => {
  return (
    <ButtonGroup vertical={vertical} variant="link" className="outline">
      <Button
        rtlFlip
        size="sm"
        variant="link"
        aria-label="scroll to top"
        icon={vertical ? CoreIcons.chevronsUp : CoreIcons.chevronsLeft}
        disabled={(scrollActive & 2) === 0}
        onClick={onStart}
      />
      <Button
        rtlFlip
        size="sm"
        variant="link"
        aria-label="scroll up"
        icon={vertical ? CoreIcons.chevronUp : CoreIcons.chevronLeft}
        disabled={(scrollActive & 2) === 0}
        onClick={onPrevious}
      />
      <Button
        rtlFlip
        size="sm"
        variant="link"
        aria-label="scroll down"
        icon={vertical ? CoreIcons.chevronDown : CoreIcons.chevronRight}
        disabled={scrollActive % 2 === 0}
        onClick={onNext}
      />
      <Button
        rtlFlip
        size="sm"
        variant="link"
        aria-label="scroll to bottom"
        icon={vertical ? CoreIcons.chevronsDown : CoreIcons.chevronsRight}
        disabled={scrollActive % 2 === 0}
        onClick={onEnd}
      />
    </ButtonGroup>
  );
};
