// Time Complexity (# of coins ^ amount)
// Space Complexity (amount)
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
  let min = amount + 1;
  const dfs = (amount, count) => {
      // base case
      if (amount <= 0) {
          if (amount === 0) min = Math.min(min, count);
          return;
      }

      for (let coin of coins) {
          dfs(amount - coin, count + 1)
      }
  }
  dfs(amount, 0);
  if (min === amount + 1) return -1;
  return min;
};