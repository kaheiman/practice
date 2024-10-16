class Solution {
    constructor(edges) {
        this.unionFindGraph = {};
        this.edges = edges;
    }

    // { vertexName: parent }
    // Time complexity O(n) where n is number of edges
    constructGraph() {
        for (const [v1, v2] of this.edges) {
            this.unionFindGraph[v1] === undefined && (this.unionFindGraph[v1] = v1)
            this.unionFindGraph[v2] === undefined && (this.unionFindGraph[v2] = v2)
        }
    }

    // Time complexity O(n * log(n)) where n is number of edges
    union() {
        for (const [v1, v2] of this.edges) {
            const parentOfV1 = this.find(v1)
            const parentOfV2 = this.find(v2)
            this.unionFindGraph[parentOfV1] = parentOfV2
        }
        console.log('graph: ', this.unionFindGraph)
    }

    // max log (n) where n is the number of vertex, the max height of the tree is log(n) when merging two tree
    find(v) {
        if (this.unionFindGraph[v] !== v) {
            this.unionFindGraph[v] = this.find(this.unionFindGraph[v])
        }
        return this.unionFindGraph[v]
    }

    getNumberOfComponents() {
        const uniqueParents = new Set();
        for (const key in this.unionFindGraph) {            
            const v = this.find(this.unionFindGraph[key])
            uniqueParents.add(v)
        }
        return uniqueParents.size
    }
}

const solutionOne = new Solution([[0, 1], [3, 4], [4, 5], [7, 8]])
solutionOne.constructGraph()
solutionOne.union()
console.log(solutionOne.getNumberOfComponents())
// console.log(solutionOne.getNumberOfComponents())

// const caseEdgesTwo = [[0, 1], [3, 4], [4, 5], [7, 8]]
// const expectedComponents = 3

// const edges = [[0,1], [1,2], [2,3], [4,5], [5,6], [7,8]]
// const vertexs =  9
// const expectedComponent = 3

// const undirectedGraph = {}

// // { vertexName: parent }
// // point all nodes to themselves
// for (const [child, parent] of edges) {
//     undirectedGraph[child] === undefined && (undirectedGraph[child] = child)
//     undirectedGraph[parent] === undefined && (undirectedGraph[parent] = parent)
// }

// const union = (vertex1, vertex2, undirectedGraph) => {
//     const parent1 = find(vertex1, undirectedGraph)
//     const parent2 = find(vertex2, undirectedGraph)
//     undirectedGraph[parent1] = parent2
// }

// // find parent
// const find = (vertex, undirectedGraph) => {
//     if (undirectedGraph[vertex] !== vertex) {
//         // path compression
//         undirectedGraph[vertex] = find(undirectedGraph[vertex], undirectedGraph)
//     }
//     return undirectedGraph[vertex]
// }

// for (const edge of edges) {
//     union(edge[0], edge[1], undirectedGraph)
// }

// console.log(undirectedGraph)

// const set = new Set()
// for (const key in undirectedGraph) {
//     set.add(find(undirectedGraph[key], undirectedGraph))
// }

// console.log(set.size)
// With path compression
// O(n + m * log(n)) 
// Without path compression
// O(n + m * log(n)) 
// j