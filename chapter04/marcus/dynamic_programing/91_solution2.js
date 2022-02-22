var numDecodings = function(s) {
  let dp = new Array(s.length + 1).fill(0);
  dp[s.length] = 1;
  for (let i = s.length - 1; i >= 0; i--) {
      let firstDight = parseInt(s[i])
      if (firstDight > 0){
          dp[i] += dp[i + 1];
      }
      if (
          i + 1 < s.length && (parseInt(s.slice(i, i + 2)) <= 26 && parseInt(s.slice(i, i + 2)) >= 10)) {
          dp[i] += dp[i + 2];
      }
  }
  return dp[0];
};