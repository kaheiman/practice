// Top Down Dynamic Programming with memoization

// Without DP
// Time Complexity 2^N
// Space Complexity N This space will be used to store the recursion stack.

// With DP
// Time Complexity N * C (Capacity)
// Space Complexity N * C
let solveKnapsack = function (profits, weights, capacity) {

  const dp = [];
  // c, cIdx are changing variables
  // p, w are fixed
  const dfs = (p, w, c, cIdx) => {
    // base case
    if (c < 0 || cIdx >= w.length) return 0
    dp[cIdx] = dp[cIdx] || []
    if (dp[cIdx][c] !== undefined) return dp[cIdx][c]
    let lP = 0
    // with current idx (left sub problem)
    if (w[cIdx] <= c) {
      lP = p[cIdx] + dfs(p, w, c - w[cIdx], cIdx + 1);
    }
    // without current idx (right sub problem)
    let rP = dfs(p, w, c, cIdx + 1);
    dp[cIdx][c] = Math.max(lP, rP)
    return dp[cIdx][c]
  }

  return dfs(profits, weights, capacity, 0)
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);