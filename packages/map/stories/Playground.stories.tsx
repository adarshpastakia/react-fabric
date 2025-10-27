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

import { Viewport } from "@react-fabric/core";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import {
  MapLayers,
  MapMarkers,
  MapRenderers,
  MapTools,
  MapViewer,
} from "../src";

const meta: Meta = {
  component: MapViewer,
  title: "@map/_Playground_",
  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
  },
};

export default meta;
type Story = StoryObj<typeof MapViewer>;

export const Playground: Story = {
  render: (args) => {
    const simple = MapRenderers.useSimple({
      color: "#E74C3CAA",
      size: 8,
      colorField: "mag",
      colorStops: [
        { value: 0, color: "#2ECC71AA" },
        { value: 3, color: "#E59920AA" },
        { value: 6, color: "#E74C3CAA" },
      ],
    });

    const heatmap = MapRenderers.useHeatmap({
      field: "mag",
      colors: ["#ff0", "#0f0", "#f00"],
    });

    return (
      <div className="min-h-[600px]">
        <Viewport>
          <MapViewer {...args}>
            <MapTools.Home />
            <MapTools.Zoom />
            <MapTools.BasemapGallery />
            <MapTools.ScaleBar />
            <MapTools.LayerList />
            <MapLayers.Json
              title="Json layer"
              url="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
              renderer={simple}
              featureReduction={{
                type: "cluster",
                clusterRadius: 99,
                clusterMinSize: 18,
                clusterMaxSize: 54,
                labelingInfo: [
                  {
                    deconflictionStrategy: "none",
                    labelExpression: "[cluster_count]",
                    symbol: {
                      type: "text",
                      color: "#fff",
                      font: {
                        weight: "bold",
                        family: "Noto Sans",
                        size: "12px",
                      },
                    },
                    labelPlacement: "center-center",
                  },
                ],
              }}
            />
            <MapLayers.Markers title="Marker layer" visible={false}>
              <MapMarkers.Pin
                coords={[54.529321, 24.449448]}
                size={8}
                animate
                style="circle"
                color="#ED7F3A33"
                borderColor="#398F56FF"
                borderWidth="2px"
                popupTemplate={{
                  content: "This is a sample marker",
                  title: "Sample Marker",
                }}
              />
              <MapMarkers.Pin
                coords={[54.509321, 24.409448]}
                size={18}
                animate
                style="pin-radius"
                color="#2980D1FF"
                borderColor="#fff"
                borderWidth="1px"
                popupTemplate={{
                  content: "This is a sample pin",
                  title: "Sample Pin",
                }}
              />
              <MapMarkers.Fill
                color="#f003"
                coords={[
                  [54.54447548093414, 24.426909216561576],
                  [54.55495889486884, 24.397347515798316],
                  [54.61239705981824, 24.408133997273918],
                  [54.601005718131994, 24.44152569835478],
                  [54.54447548093414, 24.426909216561576],
                ]}
                borderColor="#398F56FF"
                borderWidth="2px"
                popupTemplate={{
                  content: "This is a sample area",
                  title: "Sample Area",
                }}
              />
            </MapLayers.Markers>
          </MapViewer>
        </Viewport>
      </div>
    );
  },
  args: {
    onClick: fn(),
  },
};
