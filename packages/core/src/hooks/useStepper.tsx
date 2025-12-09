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

import { useMemo, useState } from "react";
import { Icon } from "../components";

export const useStepper = ({
  steps,
  activeStep: _initialActiveStep = 0,
}: {
  steps: Array<{ label?: React.ReactNode; icon?: React.ReactNode }>;
  activeStep?: number;
}) => {
  const [activeStep, setActiveStep] = useState(_initialActiveStep);
  const maxSteps = useMemo(() => steps.length - 1, [steps]);

  const stepper = useMemo(() => {
    return (
      <div className="fabric-stepper bg-base flex-1 flex justify-center py-1 px-2 overflow-x-auto">
        {steps.map((child: any, index) => (
          <div
            className="fabric-stepper--pill"
            key={index}
            data-state={
              index === activeStep
                ? "active"
                : index < activeStep
                  ? "completed"
                  : undefined
            }
          >
            {child.icon && <Icon icon={child.icon} />}
            {child.label && <label>{child.label}</label>}
          </div>
        ))}
      </div>
    );
  }, [steps]);

  return {
    stepper,
    activeStep,
    firstStep: activeStep === 0,
    lastStep: activeStep === maxSteps,
    next: () => setActiveStep((s) => Math.min(s + 1, maxSteps)),
    prev: () => setActiveStep((s) => Math.max(s - 1, 0)),
  };
};
