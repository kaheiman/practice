const numberOfConnectedComponents = (n, edges) => {
  let uf= {};
  let graph = new Map();
  const cyclePath = [];

  const constructGraph = () => {
    for (const [v,e] of edges) {
      console.log(v, e)
      if(graph.has(v)) {
        graph.get(v).push(e);
      } else {
        graph.set(v, [e]);
      }
      if (graph.has(e)) {
        graph.get(e).push(v);
      } else {
        graph.set(e, [v]);
      }
    }
  }

  const find = (node) => {
    if (!uf[node]) {
      uf[node] = node;
      return node;
    }
    if (uf[node] === node) {
      return node;
    }
    return find(uf[node]);
  }

  const union = (x, y) => {
    const parentYNode = find(y);
    const parentXNode = find(x);
    uf[parentYNode] = parentXNode;
    // !!! Cannot do parent compression in this stage, cuz it will change the behaviour of parent find(v) === find(e) in future
    // const childrenNodeList = graph.get(parentYNode);
    // if (childrenNodeList) {
    //   for (const node of childrenNodeList) {
    //     uf[node] = parentXNode;
    //   }
    // }
  }
  // 1-2-3
  // | | |
  // 4-5 6
  constructGraph();

  console.log('g: ', graph);

  for (const [v,e] of edges) {
    if (find(v) === find(e)) {
      cyclePath.push([v,e]);
    } else {
      union(v,e)
    }
  }

  const connectedComponets = new Set();

  for (const key in uf) {
    uf[key] = find(key);
    connectedComponets.add(uf[key]);
  }

  console.log("size: ", connectedComponets.size);
  console.log('uf: ', uf);
  console.log('cycle path: ', cyclePath);
}

numberOfConnectedComponents(10, [[1,2], [2,3], [4,1], [5,2], [4,5], [6,3]])
numberOfConnectedComponents(10, [
	[0, 1],
	[1, 2],
	[3, 4],
]);