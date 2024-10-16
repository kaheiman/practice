var numDecodings = function(s) {
  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] === "0" ? 0 : 1 ;
  for (let i = 2; i <= s.length; i++) {
      let oneDight = parseInt(s.slice(i - 1, i));
      let twoDight = parseInt(s.slice(i - 2, i));
      if (oneDight >= 1) {
          dp[i] += dp[i - 1];
      }
      if (twoDight >= 10 && twoDight <= 26) {
          dp[i] += dp[i - 2];
      }
  }
  return dp[s.length];
};
console.log(numDecodings("120"))