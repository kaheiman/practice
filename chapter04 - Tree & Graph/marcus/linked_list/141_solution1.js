var hasCycle = function(head) {
  const seen = new Set();

  function traverse(node) {
      if(seen.has(node)) return true;
      if(!node) return false;
      seen.add(node);
      return traverse(node.next);
  }
  return traverse(head);
};