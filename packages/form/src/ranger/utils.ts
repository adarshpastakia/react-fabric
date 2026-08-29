/**
 * react-ranger
 * https://github.com/TanStack/ranger
 */

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export function getBoundingClientRect(element: AnyObject) {
  const rect = element.getBoundingClientRect();
  return {
    top: Math.ceil(rect.top),
    left: Math.ceil(rect.left),
    right: Math.ceil(rect.right),
    width: Math.ceil(rect.width),
    bottom: Math.ceil(rect.bottom),
    height: Math.ceil(rect.height),
  };
}

export function sortNumList(arr: ReadonlyArray<number | string>) {
  return [...arr].map(Number).sort((a, b) => a - b);
}

export const linearInterpolator = {
  getPercentageForValue: (val: number, min: number, max: number) => {
    return Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
  },
  getValueForClientX: (
    clientX: number,
    trackDims: { width: number; left: number; right: number },
    min: number,
    max: number,
    isRtl: boolean,
  ) => {
    const { left, right, width } = trackDims;
    const percentageValue = (isRtl ? right - clientX : clientX - left) / width;
    const value = (max - min) * percentageValue;
    return value + min;
  },
  getValueForClientY: (clientY: number, trackDims: { height: number; bottom: number }, min: number, max: number) => {
    const { height, bottom } = trackDims;
    const percentageValue = (bottom - clientY) / height;
    const value = (max - min) * percentageValue;
    return value + min;
  },
};
