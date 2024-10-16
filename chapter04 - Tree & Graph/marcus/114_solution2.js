var flatten = function(root) {
  // right, left, root -> postorder dfs
  // set left child to null & set right child to the previous node
  let prev = null;
  const traverse = node => {
      if (node === null) {
          return;
      }

      traverse(node.right);
      traverse(node.left);
      // task
      node.left = null;
      node.right = prev;
      prev = node;
  }

  traverse(root);

};