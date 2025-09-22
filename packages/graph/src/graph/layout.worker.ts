import ElkConstructor from "elkjs/lib/elk-api";
// @ts-ignore
import ElkWorker from "elkjs/lib/elk-worker?worker";

function layoutRunner({ type, nodes, edges }: KeyValue) {
  const elk = new ElkConstructor({
    workerFactory(url) {
      return new ElkWorker();
    },
  });
  elk
    .layout(
      {
        id: "root",
        width: 1600,
        height: 900,
        children: nodes,
        edges,
      },
      {
        logging: true,
        measureExecutionTime: true,
        layoutOptions: { "elk.algorithm": type },
      },
    )
    .then((graph) => {
      const positions = Object.fromEntries(
        graph.children?.map((node) => [
          node.id,
          { x: node.x ?? 0, y: node.y ?? 0 },
        ]) ?? [],
      );
      self.postMessage(positions);
    })
    .catch((e) => {
      throw e;
    });
}

self.onmessage = (event: KeyValue) => {
  layoutRunner(event.data);
};
