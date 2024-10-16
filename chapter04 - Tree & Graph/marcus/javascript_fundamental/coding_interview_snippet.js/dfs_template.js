const dfs = (node, path) => {
  if (node !== null) return
  path.push(node.value)
  if (node.left !== null) {
    dfs(node.left, path)
  }
  if (node.right !== null) {
    dfs(node.right, path);
	}
  path.pop()
}