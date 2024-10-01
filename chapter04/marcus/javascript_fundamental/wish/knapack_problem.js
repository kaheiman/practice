// Items: { Apple, Orange, Banana, Melon }
// Weights: { 2, 3, 1, 4 }
// Profits: { 4, 5, 3, 7 }
// Knapsack capacity: 5
class Fruit {
  constructor(weight, profit, name) {
    this.weight = weight;
    this.profit = profit;
    this.name = name;
  }
}

const subset = (nums) => {
  let combinations = []
  if (nums.length === 0) return combinations
  combinations = [[]]
  for (const item of nums) {
    const combinationLength = combinations.length;
    for (let i = 0; i < combinationLength; i++) {
			let newCombination = combinations[i].slice(0);
			newCombination.push(item);
			combinations.push(newCombination);
		}
  }
  return combinations
}

const cal = (combination, capacity) => {
  let currentCapacity = 0
  let currentProfit = 0
  for (let item of combination) {
    currentCapacity += item.weight
    currentProfit += item.profit;
    if (currentCapacity > capacity) {
      currentProfit = -1;
      break
    }
  }
  return currentProfit;
}

const knapsack = (weights, profits, names, capacity) => {
  const itemList = []
  for (let i = 0; i < weights.length; i++) {
    itemList.push(new Fruit(weights[i], profits[i], names[i]));
  }

	let combinations = [];
	if (itemList.length === 0) return combinations;
	combinations = [[]];
	for (const item of itemList) {
		const combinationLength = combinations.length;
		for (let i = 0; i < combinationLength; i++) {
			let newCombination = combinations[i].slice(0);
			newCombination.push(item);
			combinations.push(newCombination);
		}
	}

  let maxProfit = 0;
  for (const combination of combinations) {
    const profit = cal(combination, capacity)
    maxProfit = Math.max(maxProfit, profit)
  }

	return maxProfit
};
// 1,2,3

// Time complexity is N * C subproblems
const dp = (weights, profits, names, capacity) => {
  const itemList = [];
	for (let i = 0; i < weights.length; i++) {
		itemList.push(new Fruit(weights[i], profits[i], names[i]));
	}
  const cache = []
  const dfs = (itemList, capacity, currentIndex) => {
    if (capacity < 0 || currentIndex >= itemList.length) return 0
    cache[currentIndex] = cache[currentIndex] || []
    console.log('cache: ', cache)
    if (typeof cache[currentIndex][capacity] !== "undefined") {
			return cache[currentIndex][capacity];
		}
    let profit1 = 0
    if (itemList[currentIndex].weight <= capacity) {
      profit1 = itemList[currentIndex].profit + dfs(
				itemList,
				capacity - itemList[currentIndex].weight,
				currentIndex + 1
			);
    }
    const profit2 = dfs(itemList, capacity, currentIndex + 1)
    cache[currentIndex][capacity] = Math.max(profit1, profit2)
    return cache[currentIndex][capacity];
  }

  return dfs(itemList, capacity, 0)
};


// it means the subset is equal to half of the sum, Time complexity is N * C subproblems, where N is length of nums and C is sum
const twoEqualSet = (nums) => {
  let totalSum = 0
  nums.forEach(element => {
    totalSum += element;
  });

  if (totalSum % 2 !== 0) return false;

  const halfSum = totalSum / 2

  console.log("halfSum : ", halfSum);

  let dp = []

  const result = []

  const dfs = (sum, currIdx, nums, subset) => {
    if (sum === 0) {
      result.push(subset)
      return true
    }
    if (sum < 0 || currIdx >= nums.length) return false;

    dp[currIdx] = dp[currIdx] || []

    if (dp[currIdx][sum] !== undefined) {
      return dp[currIdx][sum];
    }

    const curNum = nums[currIdx]

    const leftSide = dfs(sum - curNum, currIdx + 1, nums, [...subset, curNum]);
    const rightSide = dfs(sum, currIdx + 1, nums, [...subset]);

    dp[currIdx][sum] = (leftSide || rightSide);
    return dp[currIdx][sum]
  }

  const ans = dfs(halfSum, 0, nums, []);

  console.log("subset result: ", result);

  return ans
}

const setForSpecificNumber = (nums, specificSum) => {
  const result = []

  let dp = []

  const dfs = (sum, items, subset, currentIndex) => {
    if (sum === 0) {
      result.push(subset)
      return true
    }

    if (sum < 0 || currentIndex >= items.length) return false

    dp[currentIndex] = dp[currentIndex] || []

    if (dp[currentIndex][sum] !== undefined) {
      return dp[currentIndex][sum];
    }

    const current = items[currentIndex]

    const leftSide = dfs(sum - current, items, [...subset, current], currentIndex + 1)
    const rightSide = dfs(
			sum,
			items,
			[...subset],
			currentIndex + 1
		);

    dp[currentIndex][sum] = (leftSide || rightSide)

    return dp[currentIndex][sum]
  }

  const ans = dfs(specificSum, nums, [], 0);
  console.log("setForSpecificNumber result length:", result.length);
  return ans
}


const minSet = (nums) => {
  let totalSum = 0
  nums.forEach(element => {
    totalSum += element
  });

  let minDiff = Number.MAX_VALUE
  const dfs = (sum, nums, currentIdx, subset) => {
    if (currentIdx >= nums.length) return
    const current = nums[currentIdx]
    const newSum = sum - current;
    const newSubset = [...subset, current]

    if (
			Math.abs(totalSum - newSum - newSum) < minDiff &&
			newSubset.length !== nums.length
		) {
			result = newSubset;
			minDiff = Math.abs(totalSum - newSum - newSum);
		}
    dfs(newSum, nums, currentIdx + 1, newSubset)
    dfs(sum, nums, currentIdx + 1, [...subset]);
  }

  dfs(totalSum, nums, 0, []);

  return minDiff
}


// []
// [], [1]
// [], [1], [2], [1,2]
// [], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]

// Step 1: Find all subsets
// console.log('subset: \n', subset([1,2,3,7]))
var profits = [1, 6, 10, 16];
var weights = [
	1, 2, 3, 5
];

// Problem One
var names = ['Apple', 'Orange', 'Banana', 'Melon'];
console.log("knapsack: \n", dp(weights, profits, names, 3));
console.log("knapsack: \n", dp(weights, profits, names, 6));



// Problem Two
console.log("two equal sets: \n", twoEqualSet([1, 2, 3, 4]));
console.log("two equal sets: \n", twoEqualSet([1, 2, 3, 4, 5]));
console.log("two equal sets: \n", twoEqualSet([1, 1, 3, 4, 7]));
console.log("two equal sets: \n", twoEqualSet([2, 3, 4, 6]));

// Problem Three

console.log(
	"sum is equal to a given number: \n",
	setForSpecificNumber([1, 2, 3, 4], 6)
);
console.log(
	"sum is equal to a given number: \n",
	setForSpecificNumber([1, 2, 7, 1, 5], 10)
);
console.log(
	"sum is equal to a given number: \n",
	setForSpecificNumber([1, 3, 4, 8], 6)
);

console.log(
	"sum is equal to a given number: \n",
	setForSpecificNumber([1, 1, 2, 3], 4)
);



console.log("minSet: ", minSet([1, 2, 3, 9]));
console.log("minSet: ", minSet([1, 2, 7, 1, 5]));
console.log("minSet: ", minSet([1, 3, 100, 4]));

