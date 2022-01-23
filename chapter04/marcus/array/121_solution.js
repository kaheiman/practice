/**
 * @param {number[]} prices
 * @return {number}
 */

// find min
// if next number is larger than min => compare profit
// if next number is smaller than min => set min
var maxProfit = function(prices) {
  let profit = 0;
  let min = prices[0];
  for(let i = 1; i < prices.length; ++i) {
      if (prices[i] < min) {
          min = prices[i];
      }
      if (prices[i] > min) {
          const d = prices[i] - min;
          if(d > profit) profit = d;
      }
  }
  return profit;
};