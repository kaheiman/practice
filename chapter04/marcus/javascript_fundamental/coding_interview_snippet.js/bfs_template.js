const bfs = (root) => {
  let result = [];
  if (root === null) return result;
  let queue = [root];

  while (queue.length > 0) {
    let nextLevelNodes = [];
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift();
      if (node.left !== null) {
        nextLevelNodes.push(node.left);
      }
      if (node.right !== null) {
        nextLevelNodes.push(node.right);
			}
      // any conditions
      let condition = true
      if (condition) {
        result.push()
      }
    }
  }

  return result;
}