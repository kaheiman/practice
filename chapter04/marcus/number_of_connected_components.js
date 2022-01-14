const numberOfConnectedComponents = (n, edges) => {
  let uf= {};
  let graph = new Map();
  let singleNode = 0;
  let connectedComponets = 0;
  const cyclePath = [];

  const constructGraph = () => {
    console.log(graph);
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

  for (const [v,e] of edges) {
    if (find(v) === find(e)) {
      cyclePath.push([v,e]);
    } else {
      union(v,e)
    }
  }

  for (const key in uf) {
    uf[key] = find(key);
  }

  console.log('uf: ', uf);
  console.log('cycle path: ', cyclePath);
}

numberOfConnectedComponents(10, [[1,2], [2,3], [4,1], [5,2], [4,5], [6,3]])