// Time Complexity (# of coins ^ amount)
// Space Complexity (amount)
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
  let map = new Map();
  const dfs = (a) => {
      // base case
      if (a <= 0) {
          return 0;
      }
      if (map.has(a)) return map.get(a)
      let min = Number.MAX_VALUE;
      for (let coin of coins) {
          if (a - coin >= 0) {
            min = Math.min(dfs(a - coin) + 1, min);
          }
      }
      console.log("set amount a: ", a)
      map.set(a, min);
      return min
  }
  const min = dfs(amount, 0);
  if (min === Number.MAX_VALUE) return -1;
  return min;
};