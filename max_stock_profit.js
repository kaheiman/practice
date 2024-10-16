function maxProfit(prices) {
	let minPrice = Infinity; // A large initial value
	let maxProfit = 0; // No profit initially

	for (let price of prices) {
		if (price < minPrice) {
			minPrice = price; // Update the minimum price encountered
		} else if (price - minPrice > maxProfit) {
			maxProfit = price - minPrice; // Update the maximum profit
		}
	}

	return maxProfit; // Return the maximum profit found
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output should be 5 (buy on day 2 at $1 and sell on day 5 at $6)
