import {
  Button,
  ButtonGroup,
  Dropdown,
  Menu,
  MenuItem,
} from "@react-fabric/core";
import { ICONS } from "../constants";
import { useGraph } from "./Context";

export const Tools = () => {
  const {
    dragSelector,
    graph,
    selected,
    layoutRunning,
    resetViewport,
    zoomIn,
    zoomOut,
  } = useGraph();

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
        <Dropdown>
          <Button
            aria-label="force"
            variant="link"
            icon={
              "M19.5 17C19.37 17 19.24 17 19.11 17.04L17.5 13.79C17.95 13.34 18.25 12.71 18.25 12C18.25 10.62 17.13 9.5 15.75 9.5C15.62 9.5 15.5 9.5 15.36 9.54L13.73 6.29C14.21 5.84 14.5 5.21 14.5 4.5C14.5 3.12 13.38 2 12 2S9.5 3.12 9.5 4.5C9.5 5.21 9.79 5.84 10.26 6.29L8.64 9.54C8.5 9.5 8.38 9.5 8.25 9.5C6.87 9.5 5.75 10.62 5.75 12C5.75 12.71 6.05 13.34 6.5 13.79L4.89 17.04C4.76 17 4.63 17 4.5 17C3.12 17 2 18.12 2 19.5C2 20.88 3.12 22 4.5 22S7 20.88 7 19.5C7 18.8 6.71 18.16 6.24 17.71L7.86 14.46C8 14.5 8.12 14.5 8.25 14.5C8.38 14.5 8.5 14.5 8.64 14.46L10.27 17.71C9.8 18.16 9.5 18.8 9.5 19.5C9.5 20.88 10.62 22 12 22S14.5 20.88 14.5 19.5C14.5 18.12 13.38 17 12 17C11.87 17 11.74 17 11.61 17.04L10 13.79C10.46 13.34 10.75 12.71 10.75 12S10.46 10.66 10 10.21L11.61 6.96C11.74 7 11.87 7 12 7S12.26 7 12.39 6.96L14 10.21C13.55 10.66 13.25 11.3 13.25 12C13.25 13.38 14.37 14.5 15.75 14.5C15.88 14.5 16 14.5 16.14 14.46L17.77 17.71C17.3 18.16 17 18.8 17 19.5C17 20.88 18.12 22 19.5 22S22 20.88 22 19.5C22 18.12 20.88 17 19.5 17Z"
            }
          />
          <Menu className="text-sm">
            <MenuItem label="box" onClick={() => graph.elkLayout("box")} />
            <MenuItem label="force" onClick={() => graph.elkLayout("force")} />
            <MenuItem
              label="layered"
              onClick={() => graph.elkLayout("layered")}
            />
            <MenuItem
              label="stress"
              onClick={() => graph.elkLayout("stress")}
            />
            <MenuItem
              label="radial"
              onClick={() => graph.elkLayout("radial")}
            />
            <MenuItem
              label="sporeOverlap"
              onClick={() => graph.elkLayout("sporeOverlap")}
            />
            <MenuItem
              label="sporeCompaction"
              onClick={() => graph.elkLayout("sporeCompaction")}
            />
          </Menu>
        </Dropdown>
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
