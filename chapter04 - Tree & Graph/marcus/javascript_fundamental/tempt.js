const tp = (verticles, edges) => {
  const graph = new Map()
  const inDegree = new Map()
  const visted = new Set()

  // E
  for (const [source, destination] of edges) {
    if (graph.has(source)) {
      graph.get(source).push(destination)
    } else {
      graph.set(source, [destination])
    }

    if (inDegree.has(destination)) {
      inDegree.set(destination, inDegree.get(destination) + 1)
    } else {
      inDegree.set(destination, 1)
    }

    if (!inDegree.has(source)) {
      inDegree.set(source, 0)
    }
  }

  console.log(inDegree);
  console.log(graph);


  // V
  const nodesWithoutIncomingEdges = []
  for (const [key, val] of inDegree) {
    if (val === 0) {
      nodesWithoutIncomingEdges.push(key)
    }
  }

  console.log(nodesWithoutIncomingEdges);

  const result = []

  const dfs = (orderSequence) => {
    if (!visted.has(vertex)) {
      sequence.push(vertex);
      visted.add(vertex);
    }
    const children = graph.get(vertex);
    if (children !== undefined) {
      for (const node of children) {
        if (inDegree.has(node)) {
          let d = inDegree.get(node) - 1;
          inDegree.set(node, d);
          if (d === 0 && !visted.has(node)) {
            nodesWithoutIncomingEdges.push(node);
          }
        }
      }
    }
  }

  for (const n of nodesWithoutIncomingEdges) {
    dfs([n])
  }




  const sequence = []

  // V + E
  // while (nodesWithoutIncomingEdges.length > 0) {
  // 	const vertex = nodesWithoutIncomingEdges.shift();
  //   if (!visted.has(vertex)) {
  //     sequence.push(vertex)
  //     visted.add(vertex)
  //   }
  //   const children = graph.get(vertex);
  //   if (children !== undefined) {
  // 		for (const node of children) {
  // 			if (inDegree.has(node)) {
  //         let d = inDegree.get(node) - 1;
  // 				inDegree.set(node, d);
  //         if (d === 0 && !visted.has(node)) {
  //           nodesWithoutIncomingEdges.push(node)
  //         }
  // 			}
  // 		}
  // 	}
  // }

  return sequence

}


const find_trees = (vertex, edges) => {
  if (vertex === 0) {
    return []
  }
  if (vertex.length === 1) {
    return [0]
  }

  const undirectedGraph = {}
  const inDegreeCount = {}

  for (const [s, d] of edges) {
    undirectedGraph[s] === undefined ?
      (undirectedGraph[s] = [d]) :
      undirectedGraph[s].push(d)

    undirectedGraph[d] === undefined ?
      (undirectedGraph[d] = [s]) :
      undirectedGraph[d].push(s);

    inDegreeCount[d] === undefined ?
      (inDegreeCount[d] = 1) :
      (inDegreeCount[d]++)

    inDegreeCount[s] === undefined
			? (inDegreeCount[s] = 1)
			: (inDegreeCount[s]++);
  }

  console.log(undirectedGraph);
  console.log(inDegreeCount);

  let leafNodes = []
  for (const key in inDegreeCount) {
    if (inDegreeCount[key] === 1) {
      leafNodes.push(key)
    }
  }

  let totalNodes = vertex;

  while (totalNodes > 2) {
    const size = leafNodes.length;
    totalNodes -= size;
    for (let i = 0; i < size; i++) {
      const key = leafNodes.shift();
      const children = undirectedGraph[key]
      if (children !== undefined) {
        for (const child of children) {
          inDegreeCount[child] -= 1;
          if (inDegreeCount[child] === 1) {
						leafNodes.push(child);
					}
        }
      }
    }
  }

  console.log('leaf: ', leafNodes)

}

console.log(
  `Roots of MHTs: ${find_trees(5, [
		[0, 1],
		[1, 2],
		[1, 3],
		[2, 4],
	])}`
);
console.log(
  `Roots of MHTs: ${find_trees(4, [
		[0, 1],
		[0, 2],
		[2, 3],
	])}`
);
console.log(
  `Roots of MHTs: ${find_trees(4, [
		[1, 2],
		[1, 3],
	])}`
);
