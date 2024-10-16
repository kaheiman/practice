// Space complexity = O(1)
// Time complexity = O(n)
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  // top-down approach
  let [one, two] = [0, 1];
  for (i = 0; i < n - 1; i++) {
      let tempt = two;
      two = one + two;
      one = tempt;
  }
  if (n === 0) return one;
  return two;
};