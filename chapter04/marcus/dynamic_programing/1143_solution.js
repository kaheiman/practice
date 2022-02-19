// Time complexity O(N * M) where n is length of text1 , m is length of text2
// Space complexity O(N * M)
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
  let dp = [];
  for (i = 0; i <= text1.length; i++) {
      let tempt = [];
      for (j = 0; j <= text2.length; j++) {
          tempt[j] = 0;
      }
      dp.push(tempt);
  }
  for (i = text1.length -1; i >= 0; i--) {
      for (j = text2.length - 1; j >= 0; j--) {
          if (text1[i] === text2[j]) {
              dp[i][j] = 1 + dp[i+1][j+1]
          } else {
              dp[i][j] = Math.max(dp[i+1][j], dp[i][j+1])
          }
      }
  }
  return dp[0][0];
};