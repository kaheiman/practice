// Time complexity - O(amount * number of coins)
// Space complexity - O(amount)
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
  // max coin should be amount if all 1 coin
  // now set default to be amount + 1 to check if the has updated
  let memo = new Array(amount + 1).fill(amount + 1)
  memo[0] = 0;
  for (a=1; a < amount + 1; a++) {
      for (let coin of coins) {
          if (a - coin >= 0) {
              memo[a] = Math.min(memo[a], 1 + memo[a - coin]);
          }
      }
  }
  if (memo[amount] === (amount + 1)) return -1
  return memo[amount];
};