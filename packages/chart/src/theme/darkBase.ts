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

export const DarkThemeBase = {
  backgroundColor: "#191a1b",
  textStyle: {},
  title: {
    textStyle: {
      color: "#ffffff",
    },
    subtextStyle: {
      color: "#dddddd",
    },
  },
  line: {
    itemStyle: {
      borderWidth: "2",
    },
    lineStyle: {
      width: "3",
    },
    symbolSize: "12",
    symbol: "circle",
    smooth: false,
  },
  radar: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#aaa",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#666",
      },
    },
    nameTextStyle: {
      color: "#eee",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#666"],
      },
    },
    splitArea: {
      show: true,
      areaStyle: {
        color: ["#1C293A", "#2C3E50"],
      },
    },
    itemStyle: {
      borderWidth: "2",
    },
    lineStyle: {
      width: "3",
    },
    symbol: "circle",
    smooth: true,
  },
  bar: {
    itemStyle: {
      barBorderWidth: 0,
      barBorderColor: "#ccc",
    },
  },
  pie: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  scatter: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  boxplot: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  parallel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  sankey: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  funnel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  gauge: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  graph: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
    lineStyle: {
      width: "1",
      color: "#ffffff",
    },
    symbolSize: "0",
    symbol: "circle",
    smooth: true,
    label: {
      color: "#293441",
    },
  },
  map: {
    itemStyle: {
      areaColor: "#2C3E50",
      borderColor: "#172130",
      borderWidth: 0.5,
    },
    emphasis: {
      itemStyle: {
        borderWidth: 1,
      },
      label: {
        color: "#fff",
      },
    },
  },
  geo: {
    itemStyle: {
      areaColor: "#2C3E50",
      borderColor: "#172130",
      borderWidth: 0.5,
    },
    emphasis: {
      itemStyle: {
        borderWidth: 1,
      },
    },
  },
  categoryAxis: {
    nameGap: 24,
    axisLine: {
      show: true,
      lineStyle: {
        color: "#666",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#666",
      },
    },
    axisLabel: {
      show: true,
      color: "#eee",
    },
    nameTextStyle: {
      color: "#eee",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#444"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  valueAxis: {
    nameGap: 24,
    axisLine: {
      show: true,
      lineStyle: {
        color: "#666",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#666",
      },
    },
    axisLabel: {
      show: true,
      color: "#eee",
    },
    nameTextStyle: {
      color: "#eee",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#444"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  logAxis: {
    nameGap: 24,
    axisLine: {
      show: true,
      lineStyle: {
        color: "#666",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#666",
      },
    },
    axisLabel: {
      show: true,
      color: "#eee",
    },
    nameTextStyle: {
      color: "#eee",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#444"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  timeAxis: {
    nameGap: 24,
    axisLine: {
      show: true,
      lineStyle: {
        color: "#666",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#666",
      },
    },
    axisLabel: {
      show: true,
      color: "#eee",
    },
    nameTextStyle: {
      color: "#eee",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#444"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  visualMap: {
    textStyle: {
      color: "#eee",
    },
  },
  toolbox: {
    iconStyle: {
      borderColor: "#999999",
    },
    emphasis: {
      iconStyle: {
        borderColor: "#666666",
      },
    },
  },
  legend: {
    inactiveColor: "rgb(192 192 192 / .75)",
    textStyle: {
      color: "#5d6d7d6",
    },
  },
  tooltip: {
    backgroundColor: "#0C141D",
    borderColor: "#2C3E50",
    textStyle: {
      color: "#FCFDFD",
    },
    axisPointer: {
      lineStyle: {
        color: "#cccccc",
        width: 1,
      },
      crossStyle: {
        color: "#cccccc",
        width: 1,
      },
    },
  },
  timeline: {
    lineStyle: {
      width: 1,
    },
    itemStyle: {
      borderWidth: 1,
    },
    controlStyle: {
      borderWidth: 0.5,
    },
    emphasis: {
      controlStyle: {
        borderWidth: 0.5,
      },
    },
  },
  dataZoom: {
    backgroundColor: "rgba(255,255,255,0)",
    borderColor: "#545454",
    fillerColor: "rgba(29, 209, 161,0.2)",
    dataBackground: {
      areaStyle: { color: "#A5B2AE" },
      lineStyle: { width: 0 },
    },
    selectedDataBackground: {
      areaStyle: { color: "#4FDAB4" },
      lineStyle: { color: "#568376" },
    },
    handleColor: "#69A394",
    moveHandleStyle: { color: "#69A394" },
    emphasis: {
      handleColor: { color: "#84B9AB" },
      moveHandleStyle: { color: "#84B9AB" },
    },
    handleSize: 32,
    textStyle: {
      fontSize: 14,
      padding: 4,
      color: "#fff",
      backgroundColor: "#0C141D",
    },
  },
  markPoint: {
    label: {
      color: "#293441",
    },
    emphasis: {
      label: {
        color: "#293441",
      },
    },
  },
};
