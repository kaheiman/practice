// Maze Problem (https://alrightchiu.github.io/SecondRound/graph-depth-first-searchdfsshen-du-you-xian-sou-xun.html)

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

// directed graph eg : dependency
const constructDirectedAdjancencyList = (edges) => {
  const graph = new Map();
  for (let [v, e] of edges) {
    if (graph.get(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
  }
  return graph;
}

const dfsGraphTraversal = (edges) => {
  const visited = new Set();
  const graph = constructGraph(edges);
  const dfs = (v) => {
    if (visited.has(v)) {
      return;
    }
    visited.add(v);
    console.log('v:', v);
    for (const e of graph.get(v)) {
      dfs(e);
    }
  }
  for (const [v] of graph) {
    dfs(v);
  }
}

const dfsDetectCyclic = (edges) => {
  const visited = new Set();
  const visiting = new Set();
  const path = [];
  // const graph = constructGraph(edges);
  const graph = constructDirectedAdjancencyList(edges);

  const dfs = (node) => {
    visiting.add(node);
    if (graph.has(node)) {
      for (const ee of graph.get(node)) {
        if (visited.has(ee)) {
          continue;
        }
        if (visiting.has(ee)) {
          path.unshift(ee);
          return true;
        }
        if (dfs(ee)) {
          path.unshift(ee);
          return true;
        }
      }
    }
    visited.add(node);
    visiting.delete(node);

    return false;
  }
  for (const [v] of graph) {
    if (dfs(v)) {
      console.log("cyclic path: ", path);
      return true
    };
  }
  return false;
}

const edges = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [4, 5],
  [3, 6],
  [5, 2],
  [6, 7],
  [6, 8]
]

dfsGraphTraversal(edges)
console.log("has cyclic graph: ", dfsDetectCyclic(edges))



///////// Revision 11-01-2022
const constructDirectedGraph = (edges) => {
  const graph = new Map();
  for (const [v, e] of edges) {
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
  }
  return graph
}

const dfsDirectedGraphTraversal = (inputEdges) => {
  const graph = constructDirectedGraph(inputEdges);

  const visited = new Set();
  const visiting = new Set();
  const path = [];

  // return has cyclic
  const dfsHasCyclic = (v) => {
    visiting.add(v);
    // base case
    const relativeEdges = graph.get(v);
    if (relativeEdges) {
      for (const edge of relativeEdges) {
        if (visited.has(edge)) {
          continue;
        }
        if (visiting.has(edge)) {
          path.unshift(edge);
          return true;
        }
        if (dfsHasCyclic(edge)) {
          path.unshift(edge);
          return true;
        }
      }
    }
    visiting.delete(v);
    visited.add(v);
    return false;
  }

  for (const [v, e] of graph) {
    if (dfsHasCyclic(v)) {
      console.log('path: ', path)
      return true
    }
  }

  return false
}

console.log("undirected graph detection @@@: ", dfsDirectedGraphTraversal(edges));

console.log()