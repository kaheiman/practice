/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // To maximize profits, keep track the minimun price and calculate on each day
    // formula: Math.max(maxProfit, currentPrice - minimumPrice)
    let maxProfit = 0
    let minimumPrice = Number.POSITIVE_INFINITY
    for (let currentPrice of prices) {
      if (currentPrice < minimumPrice) {
          minimumPrice = currentPrice
      } else {
          maxProfit = Math.max(maxProfit, currentPrice - minimumPrice)
      }
    }
    return maxProfit
  };