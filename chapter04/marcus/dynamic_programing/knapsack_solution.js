// n! The worst solution
let solveKnapsack = function (profits, weights, capacity) {
  let max = 0;
  const dfs = (profit, remainingProfits, remainingWeights, remainingCapacity) => {
    for (let i = 0; i < remainingWeights.length; i++) {
      let temptWeight = [...remainingWeights];
      let temptProfit = [...remainingProfits];
      let w = temptWeight[i];
      if (w <= remainingCapacity) {
        temptWeight.splice(i, 1);
        let p = temptProfit.splice(i, 1);
        dfs(profit + p[0], temptProfit, temptWeight, remainingCapacity - w);
      }
    }
    max = Math.max(profit, max);
  }
  dfs(0, profits, weights, capacity);
  return max
};

var profits = [16, 10, 6, 1];
var weights = [5, 3, 2, 1];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);