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
    queue = nextLevelNodes ;
  }

  return result;
}

const bfs_version_2 = (root) => {
	let result = [];
	if (root === null) return result; // Early exit if the tree is empty
	let queue = [root]; // Start with the root in the queue

	while (queue.length > 0) {
		let node = queue.shift(); // Dequeue the first node from the queue
		result.push(node.value); // Assuming you want to collect node values

		// Enqueue left child if it exists
		if (node.left !== null) {
			queue.push(node.left);
		}

		// Enqueue right child if it exists
		if (node.right !== null) {
			queue.push(node.right);
		}
	}

	return result;
};
