/**
 * 
 * 
 ✅ Time Complexity: O(n + e)
Building graph: O(n + e)

Topological sort: O(n + e) (every node and edge processed once)

✅ Space Complexity: O(n + e)
Graph and in-degree map: O(n + e)

Queue and result list: O(n)
 */

/**
You are given a list of libraries and their dependencies. Each dependency is represented as a pair [A, B] where:

Library A depends on library B.
A depends on B =  
B -> A
indegree = {
    B: 0
    A: 1
    }

// source has how many neighbour
graph = {
 B: [A]

}

You need to return a list of libraries sorted such that each library appears after all its dependencies (i.e., least dependent comes first).

Return an empty array if there is a circular dependency.

Example 1:
Input:
libraries = ["A", "B", "C", "D"]
dependencies = [["B", "A"], ["C", "B"], ["D", "C"]]

Output:
["A", "B", "C", "D"]


Example 2:
Input:
libraries = ["A", "B", "C"]
dependencies = [["A", "B"], ["B", "C"], ["C", "A"]]

Output:
[]
(Cycle: A → B → C → A)
**/

function sortLibraries(libraries, dependencies) {
    const graph = new Map()
    const inDegree = new Map()

    for (let [inbound, outbound] of dependencies) {
        if (!graph.get(outbound)) {
            graph.set(outbound, [inbound])
        } else {
            graph.get(outbound).push(inbound)
        }
        if (!inDegree.get(inbound)) {
            inDegree.set(inbound, 1)
        } else {
            inDegree.set(inbound, inDegree.get(inbound) + 1)
        }
        if (!inDegree.get(outbound)) {
            inDegree.set(outbound, 0)
        }
    }

    console.log(graph)
    console.log(inDegree)
    let queue = []
    let result = []
    for (let [key, val] of inDegree) {
        if (val === 0) {
            queue.push(key)
        }
    }

    while (queue.length > 0) {
        const current = queue.shift()
        result.push(current)
        const neighbours = graph.get(current) || []
        for (let node of neighbours) {
            const newDegree = inDegree.get(node) - 1
            inDegree.set(node, newDegree)
            if (newDegree === 0) {
                queue.push(node)
            }
        }
    }

    if (libraries.length === result.length) {
        console.log('no cycle')
        return result
    } else {
        console.log('contains cycle')
        return []        
    }
}

console.log(sortLibraries(
    ["A", "B", "C", "D"],
    [["B", "A"], ["C", "B"], ["D", "C"]]
  )); // ["A", "B", "C", "D"]
  
  console.log(sortLibraries(
    ["A", "B", "C"],
    [["A", "B"], ["B", "C"], ["C", "A"]]
  )); // [] (cycle)
  
  console.log(sortLibraries(
    ["React", "Redux", "Lodash", "Axios"],
    [["Redux", "React"], ["React", "Lodash"], ["Axios", "Lodash"]]
  )); // ["Lodash", "React", "Redux", "Axios"]
  


//   const graph = new Map();
//   const inDegree = new Map();

//   // Initialize graph and in-degree
//   for (let lib of libraries) {
//       graph.set(lib, []);
//       inDegree.set(lib, 0);
//   }

//   // Build graph
//   for (let [lib, dep] of dependencies) {
//       graph.get(dep).push(lib);
//       inDegree.set(lib, inDegree.get(lib) + 1);
//   }

//   // Queue for libraries with no dependencies
//   const queue = [];
//   for (let [lib, degree] of inDegree) {
//       if (degree === 0) queue.push(lib);
//   }

//   const sorted = [];

//   while (queue.length) {
//       const lib = queue.shift();
//       sorted.push(lib);

//       for (let neighbor of graph.get(lib)) {
//           inDegree.set(neighbor, inDegree.get(neighbor) - 1);
//           if (inDegree.get(neighbor) === 0) {
//               queue.push(neighbor);
//           }
//       }
//   }

//   // Check for cycle
//   return sorted.length === libraries.length ? sorted : [];