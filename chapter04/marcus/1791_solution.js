// There is an undirected star graph consisting of n nodes labeled from 1 to n.
// A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi.
// Return the center of the given star graph.

// Input: edges = [[1,2],[2,3],[4,2]]
// Output: 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

// Input: edges = [[1,2],[5,1],[1,3],[1,4]]
// Output: 1

// Space complexity = O(n) , where n is edges
// Time complexity = O(n)

/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
  const graph = new Map();
  for (const [v,e] of edges) {
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

  for (const [v, e] of graph) {
      if (e.length === (graph.size -1)) {
          return v;
      }
  }
};