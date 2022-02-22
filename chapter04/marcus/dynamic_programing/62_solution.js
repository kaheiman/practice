/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
  let dp = [];
  if (m === 1 || n === 1) return 1;
  for (row = 0; row < m; row++) {
      let list = new Array(n).fill(0);
      dp.push(list);
  }
  dp[m - 1][n - 1] = 1;
  for (row = m - 1; row >= 0; row--) {
      for (col = n -1; col >= 0; col--) {
          if (row + 1 <= m - 1) {
              dp[row][col] += dp[row + 1][col];
          }
          if (col + 1 <= n - 1) {
              dp[row][col] += dp[row][col + 1];
          }
      }
  }
  return dp[0][0];
};