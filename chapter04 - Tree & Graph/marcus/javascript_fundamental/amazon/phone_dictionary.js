
class TriesNode {
  constructor (val = null) {
    this.val = val;
    this.children = new Map();
  }
}

class PhoneDictionary {
  constructor () {
    this.root = new TriesNode('root');
  }

  insert (word) {
    let curr = this.root.children;
    for (let char of word) {
      if (curr.has(char)) {
        curr = curr.get(char).children;
      } else {
        let nextNode = new TriesNode(char)
        curr.set(char, nextNode);
        curr = nextNode.children;
      }
    }
  }

  search (prefix) {
    let output = [];
    let currMap = this.root.children;
    for (let char of prefix) {
      if (currMap.has(char)) {
        currMap = currMap.get(char).children;
        continue
      }
      return output;
    }

    const dfs = (char, result, node) => {
      let concatResult = `${result}${char}`;
      if (node.children.size === 0) {
        output.push(concatResult);
      }
      for (let [char, child] of node.children) {
        dfs(char, concatResult, child);
      }
    }

    for (let [char, node] of currMap) {
      dfs(char, prefix, node);
    }

    return output;
  }

  delete () {

  }

  printDictionary () {
    console.log("printDictionary: ", this.root);
  }
}

let dict = new PhoneDictionary();
dict.insert("edward");
dict.insert("edwina");
// dict.insert("eddie");
console.log(dict.search("a"));
dict.printDictionary();