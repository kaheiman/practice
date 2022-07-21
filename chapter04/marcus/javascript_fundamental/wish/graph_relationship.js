// https://leetcode.com/discuss/interview-question/334781/Wish-or-Phone-screen-or-Relationships

class Relation {
	constructor(relation, name) {
		this.name = name;
		this.relation = relation;
	}
}

class Graph {
  constructor(list) {
    this.relationList = list
    this.adjList = {} // eg: { Bart: [Relation{brother, Lisa}, Relation{son, Homer}]}
    this.inDirectRelations = []
  }

  // O(n), where n is the number of item in the list
  createAdjList() {
    if (this.relationList.length === 0) return
    for (const item of this.relationList) {
      const [name1, relation, name2] = item
      const newRelation = new Relation(relation, name2)
      if (this.adjList[name1] === undefined) {
        this.adjList[name1] = [newRelation]
      } else {
        this.adjList[name1].push(newRelation)
      }
    }
  }

  getRelation(name1, name2) {
    let relations = []
    if (this.adjList[name1] === undefined) return relations
    for (const relation of this.adjList[name1]) {
      if (relation.name === name2) {
        relations.push(`${name1} ${relation.relation} ${name2}`)
      } else {
        this.traverse(relation.name, name2, {[name1]: true}, `${name1} ${relation.relation} `)
      }
    }
    return [...relations, ...this.inDirectRelations]
  }

  traverse(name1, name2, vistedHashMap, relationString) {
    if (name1 === name2) {
      this.inDirectRelations.push(relationString + name2);
      return;
    }
    if (this.adjList[name1] === undefined) return
    if (vistedHashMap[name1] !== undefined) return
    vistedHashMap[name1] = true
    const newRelationString = relationString + name1
    for (const relation of this.adjList[name1]) {
      this.traverse(relation.name, name2, vistedHashMap, `${newRelationString} ${relation.relation} `)
    }
  }

}


const relationships = (relationList, name1, name2) => {
  const graph = new Graph(relationList)
  graph.createAdjList(relationList)
  // O(v + e)
  return graph.getRelation(name1, name2)
}


const relationList = [
	["Bart", "brother", "Lisa"],
	["Bart", "son", "Homer"],
	["Bart", "son", "Marcus"],
	["Marcus", "dad", "Merge"],
	["Merge", "wife", "Homer"],
	["Lisa", "daughter", "Homer"],
	["Lisa", "sister", "Bart"],
];

console.log(relationships(relationList, "Bart", "Homer"))