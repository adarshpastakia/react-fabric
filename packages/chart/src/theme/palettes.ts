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

const Default = [
  "#0b755a",
  "#10ac84",
  "#16e9b4",
  "#ea2e2e",
  "#ee5253",
  "#f48b8b",
  "#1f74ad",
  "#3498db",
  "#67b2e4",
  "#6b4884",
  "#82589f",
  "#9e7bb7",
  "#ff7b00",
  "#ff9f43",
  "#ffbd80",
  "#0c5f73",
  "#1289a7",
  "#18bde7",
  "#892a56",
  "#b33771",
  "#cf6395",
];
const Activity = [
  "#2ad4ac",
  "#ea5353",
  "#39a1e6",
  "#f8a850",
  "#B64E84",
  "#92c652",
  "#ac7dc4",
  "#2c91bd",
  "#f8d653",
  "#D16082",
  "#52c8d7",
  "#475065",
];
const Heatmap = [
  "#079992",
  "#23a595",
  "#3eb197",
  "#5abd9a",
  "#76c89d",
  "#92d4a0",
  "#aee0a2",
  "#c0e8a4",
];

const CloudLight = [
  "#00b894",
  "#fdcb6e",
  "#0984e3",
  "#e17055",
  "#27ae60",
  "#e84393",
  "#574b90",
  "#e66767",
  "#82589F",
  "#3dc1d3",
  "#cc8e35",
  "#227093",
  "#8395a7",
  "#22a6b3",
  "#535c68",
];
const CloudDark = [
  "#55efc4",
  "#ffeaa7",
  "#74b9ff",
  "#fab1a0",
  "#2ecc71",
  "#fd79a8",
  "#786fa6",
  "#ea8685",
  "#D6A2E8",
  "#63cdda",
  "#ffb142",
  "#34ace0",
  "#c8d6e5",
  "#7ed6df",
  "#95afc0",
];

const Qualitative = [
  "#12939A",
  "#DDB27C",
  "#88572C",
  "#FF991F",
  "#F15C17",
  "#223F9A",
  "#DA70BF",
  "#125C77",
  "#4DC19C",
  "#776E57",
  "#17B8BE",
  "#F6D18A",
  "#B7885E",
  "#FFCB99",
  "#F89570",
  "#829AE3",
  "#E79FD5",
  "#1E96BE",
  "#89DAC1",
  "#B3AD9E",
];
const Sequential = [
  "#0E7077",
  "#108188",
  "#00939C",
  "#4BA7AF",
  "#75BBC1",
  "#9DD0D4",
  "#C1E5E6",
  "#E6FAFA",
];

const Diverging = [
  "#C22E00",
  "#D55A2B",
  "#E68059",
  "#F2A587",
  "#F8C0AA",
  "#FEEEE8",
  "#BAE1E2",
  "#97CED1",
  "#71BABF",
  "#49A6AE",
  "#00939C",
];

const UberPool = [
  "#223F9A",
  "#2C51BE",
  "#482BBD",
  "#7A0DA6",
  "#AE0E7F",
  "#CF1750",
  "#E31A1A",
  "#FD7900",
  "#FAC200",
  "#FAE300",
];

const FireIce = [
  "#007A99",
  "#0198BD",
  "#49E3CE",
  "#E8FEB5",
  "#FEEDB1",
  "#FEAD54",
  "#D50255",
  "#7F1941",
];
const GlobalWarming = [
  "#FFC300",
  "#E57F00",
  "#CB4600",
  "#B21800",
  "#98000A",
  "#7F0023",
  "#650031",
  "#4C0035",
];
const Sunrise = [
  "#194266",
  "#355C7D",
  "#63617F",
  "#916681",
  "#C06C84",
  "#D28389",
  "#E59A8F",
  "#F8B195",
];
const Ocean = [
  "#37535E",
  "#3A748A",
  "#4B9A95",
  "#5EAB8B",
  "#73BC84",
  "#92CC8B",
  "#BEDDA5",
  "#E5EEc1",
];
const Wine = [
  "#2C1E3D",
  "#50315E",
  "#764476",
  "#9A5B88",
  "#B77495",
  "#CF91A3",
  "#E0B1B3",
  "#EDD1CA",
];
const Spectral = [
  "#9e0142",
  "#d53e4f",
  "#f46d43",
  "#fdae61",
  "#fee08b",
  "#ffffbf",
  "#e6f598",
  "#abdda4",
  "#66c2a5",
  "#3288bd",
  "#134F74",
];

const PurpleBlueYellow = [
  "#2B1E3E",
  "#383C65",
  "#3E5F7E",
  "#49838A",
  "#5EA28D",
  "#82BB92",
  "#AECEA1",
];
const YellowGreen = [
  "#d9f0a3",
  "#addd8e",
  "#78c679",
  "#41ab5d",
  "#238443",
  "#006837",
  "#004529",
];
const YellowGreenBlue = [
  "#c7e9b4",
  "#7fcdbb",
  "#41b6c4",
  "#1d91c0",
  "#225ea8",
  "#253494",
  "#081d58",
];
const GreenBlue = [
  "#ccebc5",
  "#a8ddb5",
  "#7bccc4",
  "#4eb3d3",
  "#2b8cbe",
  "#0868ac",
  "#084081",
];
const BlueGreen = [
  "#ccece6",
  "#99d8c9",
  "#66c2a4",
  "#41ae76",
  "#238b45",
  "#006d2c",
  "#00441b",
];
const PurpleBlueGreen = [
  "#d0d1e6",
  "#a6bddb",
  "#67a9cf",
  "#3690c0",
  "#02818a",
  "#016c59",
  "#014636",
];
const PurpleBlue = [
  "#d0d1e6",
  "#a6bddb",
  "#74a9cf",
  "#3690c0",
  "#0570b0",
  "#045a8d",
  "#023858",
];
const BluePurple = [
  "#bfd3e6",
  "#9ebcda",
  "#8c96c6",
  "#8c6bb1",
  "#88419d",
  "#810f7c",
  "#4d004b",
];
const RedPurple = [
  "#fcc5c0",
  "#fa9fb5",
  "#f768a1",
  "#dd3497",
  "#ae017e",
  "#7a0177",
  "#49006a",
];
const PurpleRed = [
  "#d4b9da",
  "#c994c7",
  "#df65b0",
  "#e7298a",
  "#ce1256",
  "#980043",
  "#67001f",
];
const OrangeRed = [
  "#fdd49e",
  "#fdbb84",
  "#fc8d59",
  "#ef6548",
  "#d7301f",
  "#b30000",
  "#7f0000",
];
const YellowOrangeRed = [
  "#fed976",
  "#feb24c",
  "#fd8d3c",
  "#fc4e2a",
  "#e31a1c",
  "#bd0026",
  "#800026",
];
const YellowOrangeBrown = [
  "#fee391",
  "#fec44f",
  "#fe9929",
  "#ec7014",
  "#cc4c02",
  "#993404",
  "#662506",
];
const Purple = [
  "#dadaeb",
  "#bcbddc",
  "#9e9ac8",
  "#807dba",
  "#6a51a3",
  "#54278f",
  "#3f007d",
];
const Blue = [
  "#c6dbef",
  "#9ecae1",
  "#6baed6",
  "#4292c6",
  "#2171b5",
  "#08519c",
  "#08306b",
];
const Green = [
  "#c7e9c0",
  "#a1d99b",
  "#74c476",
  "#41ab5d",
  "#238b45",
  "#006d2c",
  "#00441b",
];
const Orange = [
  "#fdd0a2",
  "#fdae6b",
  "#fd8d3c",
  "#f16913",
  "#d94801",
  "#a63603",
  "#7f2704",
];
const Red = [
  "#fcbba1",
  "#fc9272",
  "#fb6a4a",
  "#ef3b2c",
  "#cb181d",
  "#a50f15",
  "#67000d",
];
const Grey = [
  "#d9d9d9",
  "#bdbdbd",
  "#969696",
  "#737373",
  "#525252",
  "#252525",
  "#000000",
];
const OrangePurple = [
  "#7f3b08",
  "#b35806",
  "#e08214",
  "#fdb863",
  "#fee0b6",
  "#b2abd2",
  "#8073ac",
  "#542788",
  "#2d004b",
];
const BrownGreen = [
  "#543005",
  "#8c510a",
  "#bf812d",
  "#dfc27d",
  "#f6e8c3",
  "#80cdc1",
  "#35978f",
  "#01665e",
  "#003c30",
];
const PurpleGreen = [
  "#40004b",
  "#762a83",
  "#9970ab",
  "#c2a5cf",
  "#d9f0d3",
  "#a6dba0",
  "#5aae61",
  "#1b7837",
  "#00441b",
];
const PinkGreen = [
  "#8e0152",
  "#c51b7d",
  "#de77ae",
  "#f1b6da",
  "#e6f5d0",
  "#b8e186",
  "#7fbc41",
  "#4d9221",
  "#276419",
];
const RedBlue = [
  "#67001f",
  "#b2182b",
  "#d6604d",
  "#f4a582",
  "#fddbc7",
  "#92c5de",
  "#4393c3",
  "#2166ac",
  "#053061",
];
const RedGray = [
  "#67001f",
  "#b2182b",
  "#d6604d",
  "#f4a582",
  "#fddbc7",
  "#bababa",
  "#878787",
  "#4d4d4d",
  "#1a1a1a",
];
const RedYellowBlue = [
  "#a50026",
  "#d73027",
  "#f46d43",
  "#fdae61",
  "#fee090",
  "#abd9e9",
  "#74add1",
  "#4575b4",
  "#313695",
];
const RedYellowGreen = [
  "#a50026",
  "#d73027",
  "#f46d43",
  "#fdae61",
  "#fee08b",
  "#ffffbf",
  "#d9ef8b",
  "#a6d96a",
  "#66bd63",
  "#1a9850",
  "#006837",
];

export const ChartPalette = {
  Default,
  Activity,
  Heatmap,
  CloudDark,
  CloudLight,
  Qualitative,
  Sequential,
  Diverging,
  UberPool,
  FireIce,
  GlobalWarming,
  Sunrise,
  Ocean,
  Wine,
  Spectral,
  Blue,
  Green,
  Orange,
  Purple,
  Red,
  Grey,
  BrownGreen,
  GreenBlue,
  BlueGreen,
  BluePurple,
  OrangeRed,
  PurpleBlue,
  OrangePurple,
  PurpleRed,
  PurpleBlueGreen,
  PurpleBlueYellow,
  PurpleGreen,
  PinkGreen,
  RedPurple,
  RedBlue,
  RedGray,
  RedYellowBlue,
  RedYellowGreen,
  YellowGreen,
  YellowGreenBlue,
  YellowOrangeBrown,
  YellowOrangeRed,
};

export type PALETTE = keyof typeof ChartPalette;
