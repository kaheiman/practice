const constructGraph = (edges) => {
  const graph = new Map();
  for (const [v, e] of edges) {
    if (graph.get(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
    if (graph.get(e)) {
      graph.get(e).push(v);
    } else {
      graph.set(e, [v]);
    }
  }
  return graph
}

// // directed graph eg : dependency
const constructDirectedGraphWithTopologicalSort = (edges) => {
  const graph = new Map();
  const indegree = Array(numberOfNodes).fill(0);
  for (const [v, e] of edges) {
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
    indegree[e]++;
  }
  console.log('indegree: ', indegree)
  return [graph, indegree];
}

const constructDirectedGraph = (edges) => {
  const graph = new Map();
  for (const [v, e] of edges) {
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
  }
  return graph;
}


const bfsGraphTraversal = (edges) => {
  const visited = new Set();
  const queue = [];
  const graph = constructGraph(edges);

  const bfs = (v) => {
    queue.push(v);
    while (queue.length > 0) {
      const node = queue.shift();
      if (visited.has(node)) {
        return;
      }
      console.log('node: ',  node)
      visited.add(node);
      for (const e of graph.get(node)) {
        if (!graph.has(e)) {
          queue.push(e);
        }
      }
    }
  }
  for (const [v] of graph) {
    bfs(v);
  }
}

const edges = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [4, 5],
  [3, 6],
  [6, 7],
  [6, 8]
]

bfsGraphTraversal(edges)

const bfsDirectedGraphDetectCycle = (edges) => {
  const graph = constructDirectedGraph(edges);
  const queue = [];
  const visited = new Set();
  const path = [];

  const bfsHasCycle = (v) => {
    if (!visited.has(v)) {
      queue.push(v);
    }

    while (queue.length !== 0) {
      const currentNode = queue.shift();
      if (!visited.has(currentNode)) {
        path.push(currentNode);
      }
      visited.add(currentNode);
      const relativeEdges = graph.get(currentNode);
      if (relativeEdges) {
        for (const edges of relativeEdges) {
          if (!visited.has(edges)) {
            queue.push(edges);
          }
        }
      }
    }
  }

  for (const [v] of graph) {
    bfsHasCycle(v)
    // if (bfsHasCycle(v)) {
    //   return true
    // }
  }
  console.log('path: ', path);
  return false;
}
console.log("bfs has cycle", bfsDirectedGraphDetectCycle(edges));