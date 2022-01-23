/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

 var canFinish = function (numCourses, prerequisites) {
  if (prerequisites.length === 0) {
      return true;
  }
  const directedGraph = new Map();
  const topologicalSortOrder = [];
  const inDegreeList = new Array(numCourses).fill(0);
  const visited = new Set();
  let queue = [];
  const constructDirectedGraph = (prerequisites) => {
      for (const [v, e] of prerequisites) {
          if (directedGraph.has(e)) {
              directedGraph.get(e).push(v);
          } else {
              directedGraph.set(e, [v]);
          }
          inDegreeList[v]++;
      }
  }
  const getZeroInDegreeNodes = () => {
      for (i=0; i<numCourses; i++) {
          if (inDegreeList[i] === 0) {
              queue.push(i);
          }
      }
  }

  const updateInDegreeList = (dependencies) => {
      for (const d of dependencies) {
          inDegreeList[d]--;
          if (inDegreeList[d] === 0) {
              queue.push(d);
          }
      }
  }

  constructDirectedGraph(prerequisites);
  getZeroInDegreeNodes();
  console.log('queue: ', queue)
  while (queue.length !== 0) {
      const currNode = queue.shift();
      if (!visited.has(currNode)) {
          topologicalSortOrder.push(currNode);
          const dependencies = directedGraph.get(currNode);
          if (dependencies && dependencies.length > 0) {
           updateInDegreeList(dependencies);
          }
      }
      visited.add(currNode);
  }
  return numCourses === topologicalSortOrder.length;
}
