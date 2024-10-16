// tiME COMPLEXITY o(n ^ 2)
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {

  let dp = new Array(s.length + 1).fill(false);
  dp[s.length] = true;
  for (i= dp.length - 1; i >= 0; i--) {
      for (let word of wordDict) {
          if (s.slice(i).length >= word.length && s.slice(i, i + word.length) === word) {
              dp[i] = dp[i+ word.length];
          }
          if (dp[i]) {
              break;
          }
      }
  }
  return dp[0];
};