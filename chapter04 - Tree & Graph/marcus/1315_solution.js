var sumEvenGrandparent = function(root) {
    let sum = 0;

    // Traverse tree recursively and store the values for
    // each path of the tree inside arr.
    const traverse = (node, level, arr) => {
        // Base Case
        if(!node) return;

        // Grandparents don't exist for trees with less than 2 levels
        if(level > 1) {
            // If the grandparent (2 levels above current) is even
            if(arr[level-2] % 2 === 0) {
                sum += node.val;
            }
        }

        // Memorize current state
        arr.push(node.val);
        // Backtracking next state
        traverse(node.left, level + 1, arr)
        traverse(node.right, level + 1, arr);

        // Restore current state
        arr.pop();
    }

    traverse(root, 0, []);
    return sum;
};


var sumEvenGrandparent = function(root) {
  // know the level
  let sum = 0;
  const traverse = (node, level, state) => {
      // base case
          if (!node) return;
          if (level > 1) {
              if (state[level - 2] % 2 === 0) {
                  sum += node.val;
              }
          }
      // backtrack
          // memorize state
          state.push(node.val);
          traverse(node.left, level + 1, state);
          traverse(node.right, level + 1, state);
      // restore state
          state.pop();
  }
  traverse(root, 0, []);
  return sum;
};