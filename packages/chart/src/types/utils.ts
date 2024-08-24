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

import { Format } from "@react-fabric/utilities";

interface Series {
  id: string;
  name: string;
  value: number;
  data: Array<{ value: number }>;
}
interface SubSeries {
  data: number[];
}
interface ListSeries {
  data: Array<{ value: number[] }>;
}
interface MultiSeries {
  data: Array<[string, number, number]>;
}

export const countRenderer = (opt: KeyValue) => {
  const axis =
    opt.xAxis?.[0].type !== "value" ? opt.xAxis?.[0] : opt.yAxis?.[0];
  const series = opt.series;
  const table = [
    '<div class="grid gap-2 p-2" style="grid-template-columns: repeat(auto-fill, minmax(8rem, max-content));grid-auto-flow: row;">',
  ];
  if (axis) {
    table.push(
      ...series.map(
        (s: Series) =>
          `<div class="py-1 px-2 rounded ring-1"><label class="font-medium text-sm text-muted block">${s.name ?? s.id}</label><div class="text-end text-lg">${Format.number(
            s.data[0]?.value,
          )}</div></div>`,
      ),
    );
  } else {
    table.push(
      ...series[0].data.map(
        (s: Series) =>
          `<div class="py-1 px-2 rounded ring-1"><label class="font-medium text-sm text-muted block">${s.name ?? s.id}</label><div class="text-end text-lg">${Format.number(s.value)}</div></div>`,
      ),
    );
  }
  table.push("</div>");
  return table.join("");
};

export const seriesRenderer = (opt: KeyValue) => {
  const radar = opt.radar?.[0];
  const axis =
    opt.xAxis?.[0].type !== "value" ? opt.xAxis?.[0] : opt.yAxis?.[0];
  const series = opt.series;
  const table = [
    '<table class="border-separate border-spacing-1 mx-auto table-fixed min-w-full"><thead><tr class="sticky top-0 bg-base"><th></th>',
  ];
  table.push(
    ...series.map((s: Series) => `<th class="truncate">${s.name ?? s.id}</th>`),
  );
  table.push("</tr></thead><tbody class='bg-alternate'>");
  if (axis?.data) {
    axis.data.forEach((ax: string, i: number) => {
      table.push(`<tr><th class="truncate">${ax}</th>`);
      table.push(
        ...series.map(
          (s: SubSeries) =>
            `<td class="text-end">${Format.number(s.data[i])}</td>`,
        ),
      );
      table.push("</tr>");
    });
  }
  if (radar) {
    radar.indicator.forEach((ax: Series, i: number) => {
      table.push(`<tr><th>${ax.name}</th>`);
      table.push(
        ...series.map(
          (s: ListSeries) =>
            `<td class="text-end">${Format.number((s.data[0] ?? { value: [] }).value[i] ?? 0)}</td>`,
        ),
      );
      table.push("</tr>");
    });
  }
  table.push("</tbody></table>");
  return table.join("");
};

export const timeSeriesRenderer = (opt: KeyValue) => {
  const series = opt.series;
  const table = [
    '<table class="border-separate border-spacing-1 mx-auto table-fixed min-w-full"><thead><tr class="sticky top-0 bg-base"><th></th>',
  ];
  table.push(...series.map((s: Series) => `<th>${s.name ?? s.id}</th>`));
  table.push("</tr></thead><tbody class='bg-alternate'>");
  series[0].data.forEach((ax: AnyObject, i: number) => {
    table.push(`<tr><th>${Format.date(ax[0])}</th>`);
    series.forEach((s: MultiSeries) =>
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      table.push(
        `<td class="text-end">${Format.number(s.data?.[i]?.[1] ?? 0)}</td>`,
      ),
    );
    table.push("</tr>");
  });
  table.push("</tbody></table>");
  return table.join("");
};

export const activityRenderer = (opt: KeyValue) => {
  const axis = opt.xAxis[0];
  const series = opt.series;
  const table = [
    '<table class="border-separate border-spacing-1 mx-auto table-fixed min-w-full"><thead><tr><th class="sticky top-0 bg-base"></th>',
  ];
  table.push(...series.map((s: Series) => `<th>${s.name ?? s.id}</th>`));
  table.push("</tr></thead><tbody class='bg-alternate'>");
  table.push(
    ...axis.data.map((s: string, i: number) => [
      `<tr><th>${s}</th>`,
      ...series.map(
        (s: MultiSeries) =>
          `<td class="text-end">${Format.number((s.data[i] ?? [])[2] ?? 0)}</td>`,
      ),
      "</tr>",
    ]),
  );
  table.push("</tbody></table>");
  return table.flat(2).join("");
};
