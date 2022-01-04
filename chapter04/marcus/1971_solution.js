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
var validPath = function (n, edges, start, end) {
  let hasPath = false;
};



var validPath = function(n, edges, start, end) {
    // Create a hashmap to be used as our adjacency list
    const graph = new Map();

    // Create a set to store our visited nodes
    const visited = new Set();

    // Build adjacency list (undirected)
    for (const [v, e] of edges) {
      if (graph.has(v)) {
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

    // Define a recursive DFS helper
    function dfs(v) {
        // Add to visited set
        visited.add(v);

        // Get adjacent vertices
        const edges = graph.get(v);

        // For all adjacent vertices, run DFS
        if (edges && edges.length > 0) {
            for (const e of edges) {
                if (!visited.has(e)) dfs(e);
            }
        }
    }

    // DFS from starting input node
    dfs(start);

    // Return true/false if our visited set has our end node
    return visited.has(end);
};
