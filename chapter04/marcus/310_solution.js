
// Space and Time Complexity O(V)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) {
    return [0]
  };
  const graph = new Map();
  const visit = new Set();
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
  let leaves = [];

  graph.forEach((pts, i) => pts.length === 1 && leaves.push(i));

  while (n > 2) {
    n = n - leaves.length;
    let temptLeaves = [];
    for (const leave of leaves) {
      const tempt = graph.get(leave).pop();
      graph.get(tempt).splice(graph.get(tempt).indexOf(leave), 1);
      if (graph.get(tempt).length === 1) temptLeaves.push(tempt);
    }
    leaves = temptLeaves;
  }

  return leaves;
};