const topological_sort = (vertices, edges) => {
  console.log('vertices:', vertices);
  console.log("edges:", edges);
  let graph = new Map();
  let inDegree = new Map();
  let hasVisted = new Set();

  // For directed graph
  for (let edge of edges) {
    let [p, c] = edge;
    if (graph.has(p)) {
      graph.get(p).push(c)
    } else {
      graph.set(p, [c]);
    }

    if (inDegree.has(c)) {
      inDegree.set(c, inDegree.get(c) + 1);
    } else {
      inDegree.set(c, 1);
    }
    if (!inDegree.has(p)) {
      inDegree.set(p, 0)
    }
  }

  // get source with inDegree with 1
  let sources = [];
  for (let [key, val] of inDegree) {
    if (val === 0) {
      sources.push(key);
    }
  }

  let sequence = [];
  //
  while (sources.length > 0) {
    let vertex = sources.shift();
    if (!hasVisted.has(vertex)) {
      sequence.push(vertex);
      hasVisted.add(vertex);
    }
    let children = graph.get(vertex);
    if (children !== undefined) {
      for (let v of children) {
        let degree = inDegree.get(v);
        inDegree.set(v, inDegree.get(v) - 1);
        if (degree - 1 === 0) {
          if (!hasVisted.has(v)) {
            sources.push(v);
          }
        }
      }
    }
  }

  console.log(graph)
  console.log(inDegree);
  console.log(sequence);

  if (sequence.length !== vertices) {
		console.log("has cycle in graph");
	}
}

topological_sort(5, [['A', 'B'], ['A', 'C'], ['B', 'E'], ['B', 'D'], ['C', 'D'], ['D', 'A']])