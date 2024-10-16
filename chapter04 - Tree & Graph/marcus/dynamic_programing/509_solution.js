// Time Complexity - O(2^N) https://stackoverflow.com/a/23095023
// Space Complexity - O(N) given the function call stack size
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  if (n === 1) return 1
  if (n === 0) return 0
  return fib(n - 1) + fib(n - 2)
};