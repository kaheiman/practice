// Input: n = 3, edges = [[0,1],[1,2],[2,0]], start = 0, end = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2

// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], start = 0, end = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.


// Thought Process
// Questions

// Is our graph directed/undirected?
// Insights

// We can simply exhaust all valid paths from start to end.
// Approach

// Create an adjacency list representation for our connected nodes.
// Create a set to store visited nodes.
// Run DFS (using our adjacency list) from starting node (start):
// At each stage, add to visited set.
// Retrieve edges from adjacency list, run DFS.
// Return true/false if our visited set has the end input node.


// Time: O(v + e)
// Space: O(v + e)

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
 var validPath = function(n, edges, start, end) {
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
  const dfs = (node) => {

      if (!visit.has(node)) {
          visit.add(node)
          const edges = graph.get(node);
          if (edges && edges.length > 0) {
              for (const e of edges) {
                  dfs(e);
              }
          }
      }

  }
  dfs(start);

  if (visit.has(end)) {
      return true;
  }

  return false;
};