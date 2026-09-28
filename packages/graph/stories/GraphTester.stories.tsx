import { Layout } from "@/core/src";
import { Graph, GraphViewer } from "@/graph/src";
import type { Meta, StoryObj } from "@storybook/react";
import { useMemo } from "react";
import colors from "./colors.json";

const meta: Meta = {
  title: "@graph/Graph",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Graph>;

export const _Graph: Story = {
  render() {
    const graph = useMemo(() => {
      const graph = new Graph();

      graph.importGraph(colors);

      return graph;
    }, []);

    return (
      <Layout className="w-screen h-screen">
        <GraphViewer data={graph} />
      </Layout>
    );
  },
};

export const Nodes: Story = {
  render() {
    const graph = useMemo(() => {
      const graph = new Graph();

      graph.importGraph(
        {
          nodes: [
            { id: "circle1", label: "Circle", x: 0, y: 0, color: "#2846bd" },
            { id: "circle2", label: "Circle Border", x: 0, y: -10, borderColor: "#2846bd", border: 0.2 },
            { id: "circle3", label: "Circle Pie", x: 0, y: -20, color: "#2846bd", segments: [0.2, 0.3, 0.4] },
            { id: "square1", shape: "square", label: "Square", x: 10, y: 0, color: "#2846bd" },
            { id: "square2", shape: "square", label: "Square Border", x: 10, y: -10, borderColor: "#2846bd", border: 0.2 },
            { id: "square3", shape: "square", label: "Square Pie", x: 10, y: -20, color: "#2846bd", segments: [0.2, 0.3, 0.4] },
            { id: "diamond1", shape: "diamond", label: "Diamond", x: 20, y: 0, color: "#2846bd" },
            { id: "diamond2", shape: "diamond", label: "Diamond Border", x: 20, y: -10, borderColor: "#2846bd", border: 0.2 },
            { id: "diamond3", shape: "diamond", label: "Diamond Pie", x: 20, y: -20, color: "#2846bd", segments: [0.2, 0.3, 0.4] },
            { id: "triangle1", shape: "triangle", label: "Triangle", x: 30, y: 0, color: "#2846bd" },
            { id: "triangle2", shape: "triangle", label: "Triangle Border", x: 30, y: -10, borderColor: "#2846bd", border: 0.2 },
            { id: "triangle3", shape: "triangle", label: "Triangle Pie", x: 30, y: -20, color: "#2846bd", segments: [0.2, 0.3, 0.4] },
            { id: "folder1", group: true, label: "Folder", x: 40, y: 0, color: "#2846bd" },
            { id: "folder2", group: true, label: "Folder Border", x: 40, y: -10, borderColor: "#2846bd", border: 0.2 },
            { id: "folder3", group: true, label: "Folder Pie", x: 40, y: -20, color: "#2846bd", segments: [0.2, 0.3, 0.4] },
          ],
          edges: [],
        },
        false,
      );

      return graph;
    }, []);

    return (
      <Layout className="w-screen h-screen">
        <GraphViewer data={graph} />
      </Layout>
    );
  },
};

export const Edges: Story = {
  render() {
    const graph = useMemo(() => {
      const graph = new Graph();

      graph.importGraph(
        {
          nodes: [
            { id: "node-1-1", label: "Node 1", x: 0, y: 0, borderColor: "#28bd57", border: 0.2 },
            { id: "node-1-2", label: "Node 2", x: 40, y: 0, borderColor: "#2846bd", border: 0.2 },
            { id: "node-1-3", label: "Node 1", x: 80, y: 0, borderColor: "#28bd57", border: 0.2 },
            { id: "node-1-4", label: "Node 2", x: 120, y: 0, borderColor: "#2846bd", border: 0.2 },
            { id: "node-2-1", label: "Node 1", x: 0, y: -40, borderColor: "#28bd57", border: 0.2 },
            { id: "node-2-2", label: "Node 2", x: 40, y: -20, borderColor: "#2846bd", border: 0.2 },
            { id: "node-2-3", label: "Node 1", x: 80, y: -40, borderColor: "#28bd57", border: 0.2 },
            { id: "node-2-4", label: "Node 2", x: 120, y: -40, borderColor: "#2846bd", border: 0.2 },
            { id: "node-3-1", label: "Node 1", x: 0, y: -80, borderColor: "#28bd57", border: 0.2 },
            { id: "node-3-2", label: "Node 2", x: 40, y: -60, borderColor: "#2846bd", border: 0.2 },
            { id: "node-3-3", label: "Node 1", x: 80, y: -80, borderColor: "#28bd57", border: 0.2 },
            { id: "node-3-4", label: "Node 2", x: 120, y: -80, borderColor: "#2846bd", border: 0.2 },
          ],
          edges: [
            { id: "edge-1-0", source: "node-1-1", target: "node-1-2", label: "Straight edge", head: "arrow" },
            { id: "edge-1-1", source: "node-1-3", target: "node-1-4", label: "Multi edge", head: "arrow" },
            { id: "edge-1-2", source: "node-1-3", target: "node-1-4", label: "Multi edge", tail: "arrow" },
            { id: "edge-2-0", source: "node-2-1", target: "node-2-2", style: "dotted", path: "stepCurved", color: "#b956a5", label: "Step curve edge" },
            { id: "edge-2-1", source: "node-2-3", target: "node-2-4", style: "dotted", color: "#b956a5", label: "Multi edge" },
            { id: "edge-2-2", source: "node-2-3", target: "node-2-4", style: "dotted", label: "Multi edge" },
            { id: "edge-2-3", source: "node-2-3", target: "node-2-4", style: "dotted", color: "#db7f2a", label: "Multi edge" },
            { id: "edge-3-0", source: "node-3-1", target: "node-3-2", style: "dashed", path: "curvedS", color: "#b956a5", label: "S Curve edge" },
            { id: "edge-3-1", source: "node-3-3", target: "node-3-4", style: "dashed", color: "#b956a5", label: "Multi edge" },
            { id: "edge-3-2", source: "node-3-3", target: "node-3-4", style: "dashed", label: "Multi edge" },
            { id: "edge-3-3", source: "node-3-3", target: "node-3-4", style: "dashed", color: "#db7f2a", label: "Multi edge" },
          ],
        },
        false,
      );

      return graph;
    }, []);

    return (
      <Layout className="w-screen h-screen">
        <GraphViewer data={graph} />
      </Layout>
    );
  },
};
