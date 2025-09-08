import { Button, ButtonGroup } from "@react-fabric/core";
import { ICONS } from "../constants";
import { useGraph } from "./Context";

export const Tools = () => {
  const { dragSelector, graph, selected, resetViewport, zoomIn, zoomOut } =
    useGraph();

  return (
    <div className="flex flex-nowrap outline absolute top-0 start-0 p-0 z-1 bg-base">
      <ButtonGroup variant="link">
        <Button aria-label="Home" icon={ICONS.focus} onClick={resetViewport} />
        <Button aria-label="Zoomin" icon={ICONS.zoomIn} onClick={zoomIn} />
        <Button aria-label="Zoomout" icon={ICONS.zoomOut} onClick={zoomOut} />
      </ButtonGroup>
      <ButtonGroup variant="link">
        {dragSelector.selectionMode !== "lasso" && (
          <Button
            aria-label="lasso"
            icon={ICONS.lasso}
            disabled={!!dragSelector.selectionMode}
            onClick={() => dragSelector.startLassoSelection()}
          />
        )}
        {dragSelector.selectionMode && (
          <Button
            color="danger"
            aria-label="cancel"
            icon={ICONS.cancel}
            onClick={() => dragSelector.cancelSelection()}
          />
        )}
        {dragSelector.selectionMode !== "rectangle" && (
          <Button
            aria-label="rectselect"
            icon={ICONS.select}
            disabled={!!dragSelector.selectionMode}
            onClick={() => dragSelector.startRectangleSelection()}
          />
        )}
      </ButtonGroup>
      <ButtonGroup variant="link">
        <Button
          aria-label="circular"
          icon={
            "M20.8 8.8c-0.43 0-0.84 0.086-1.216 0.241l-4.742-4.377c0.227-0.439 0.358-0.936 0.358-1.464 0-1.764-1.436-3.2-3.2-3.2s-3.2 1.436-3.2 3.2c0 0.528 0.13 1.025 0.358 1.464l-4.742 4.377c-0.375-0.155-0.785-0.241-1.216-0.241-1.764 0-3.2 1.436-3.2 3.2s1.436 3.2 3.2 3.2c0.43 0 0.84-0.087 1.216-0.242l4.742 4.378c-0.227 0.439-0.358 0.936-0.358 1.464-0 1.764 1.436 3.2 3.2 3.2s3.2-1.436 3.2-3.2c0-0.528-0.131-1.025-0.358-1.464l4.742-4.378c0.375 0.155 0.785 0.242 1.216 0.242 1.764 0 3.2-1.436 3.2-3.2s-1.436-3.2-3.2-3.2zM18.86 14.539l-4.477 4.133c-0.586-0.656-1.436-1.072-2.383-1.072s-1.796 0.416-2.383 1.072l-4.477-4.133c0.764-0.585 1.26-1.504 1.26-2.539s-0.496-1.954-1.26-2.539l4.477-4.133c0.586 0.656 1.436 1.072 2.383 1.072s1.796-0.416 2.383-1.072l4.477 4.133c-0.764 0.585-1.26 1.504-1.26 2.539s0.496 1.954 1.26 2.539z"
          }
          onClick={() => graph.circularLayout()}
        />
        <Button
          aria-label="force"
          icon={
            "M21.763 15.051c-0.434 0-0.835 0.139-1.165 0.372l-3.733-2.24c0.006-0.055 0.017-0.109 0.017-0.166 0-0.756-0.52-1.388-1.22-1.569v-3.76c0.927-0.189 1.627-1.011 1.627-1.993 0-0.293-0.065-0.571-0.178-0.823l2.175-1.864c0.248 0.153 0.538 0.247 0.851 0.247 0.897 0 1.627-0.73 1.627-1.627s-0.73-1.627-1.627-1.627-1.627 0.73-1.627 1.627c0 0.289 0.082 0.556 0.214 0.792l-2.089 1.791c-0.363-0.337-0.846-0.548-1.379-0.548-0.629 0-1.185 0.293-1.559 0.744l-2.317-1.986c0.133-0.235 0.214-0.503 0.214-0.792 0-0.897-0.73-1.627-1.627-1.627s-1.627 0.73-1.627 1.627c0 0.897 0.73 1.627 1.627 1.627 0.313 0 0.602-0.093 0.851-0.247l2.49 2.134c-0.050 0.177-0.086 0.36-0.086 0.553 0 0.982 0.7 1.804 1.627 1.993v3.76c-0.365 0.095-0.68 0.312-0.898 0.607l-3.609-0.984c-0.155-0.969-0.99-1.715-2.002-1.715-0.408 0-0.788 0.124-1.107 0.332l-3.307-3.674c0.218-0.324 0.346-0.713 0.346-1.132 0-1.121-0.912-2.034-2.034-2.034s-2.034 0.912-2.034 2.034 0.912 2.034 2.034 2.034c0.408 0 0.788-0.124 1.107-0.332l3.307 3.674c-0.218 0.324-0.346 0.713-0.346 1.132 0 0.051 0.011 0.098 0.015 0.148l-2.996 1.497c-0.289-0.261-0.668-0.425-1.087-0.425-0.897 0-1.627 0.73-1.627 1.627s0.73 1.627 1.627 1.627 1.627-0.73 1.627-1.627c0-0.181-0.037-0.353-0.092-0.516l2.775-1.388c0.281 0.53 0.78 0.926 1.384 1.049v3.353c-0.7 0.182-1.22 0.813-1.22 1.569 0 0.191 0.039 0.371 0.1 0.541l-2.503 2.146c-0.248-0.153-0.538-0.247-0.851-0.247-0.897 0-1.627 0.73-1.627 1.627s0.73 1.627 1.627 1.627c0.897 0 1.627-0.73 1.627-1.627 0-0.289-0.082-0.556-0.214-0.792l2.401-2.058c0.287 0.251 0.657 0.409 1.068 0.409s0.781-0.157 1.068-0.409l2.401 2.058c-0.133 0.235-0.214 0.503-0.214 0.792 0 0.897 0.73 1.627 1.627 1.627s1.627-0.73 1.627-1.627c0-0.897-0.73-1.627-1.627-1.627-0.313 0-0.602 0.093-0.851 0.247l-2.503-2.146c0.061-0.17 0.1-0.351 0.1-0.541 0-0.756-0.52-1.388-1.22-1.569v-3.353c0.759-0.155 1.359-0.737 1.553-1.48l3.348 0.913c-0.008 0.067-0.020 0.132-0.020 0.201 0 0.897 0.73 1.627 1.627 1.627 0.545 0 1.026-0.272 1.322-0.685l3.455 2.073c-0.188 0.308-0.302 0.666-0.302 1.053 0 1.121 0.912 2.034 2.034 2.034s2.034-0.912 2.034-2.034-0.912-2.034-2.034-2.034z"
          }
          onClick={() => graph.forceLayout()}
        />
      </ButtonGroup>
      <ButtonGroup variant="link">
        <Button
          aria-label="delete"
          color="danger"
          icon={ICONS.delete}
          disabled={!selected.length}
          onClick={() => graph.dropNodes(selected)}
        />
        <Button
          aria-label="clear"
          color="danger"
          icon={ICONS.clear}
          onClick={() => graph.clear()}
        />
      </ButtonGroup>
    </div>
  );
};
