const find_union = (setOne, setTwo) => {
	const union = [];
	const intersection = [];
	const universalSet = new Set();
	// iterate through setOne and setTwo
	// check if gloabl set contains the element from setOne and setTwo
	// if true -> push into intersection
	// if false -> push into universalSet and union
  // Time complexity will be O(N + M), where N is length of setOne and M is length of setTwo
  // Space complexitu will be O(M + N)
  for (let item of setOne) {
    union.push(item);
    universalSet.add(item);
  }
  for (let item of setTwo) {
    if (universalSet.has(item)) {
      intersection.push(item);
		} else {
      union.push(item);
      universalSet.add(item);
    }
	}

  return [union, intersection]
}

// answer [[1,2,3,4,5,6], []]
console.log(
  "union and intersection equals to :",
  find_union([1,2,3], [4,5,6])
  );

// answer [[1,2,3], []]
console.log(
  "union and intersection equals to :",
  find_union([], [1, 2, 3])
  );

// answer [[1,2,3,4,5,6], [3,4]]
console.log(
  "union and intersection equals to :",
  find_union([1,3,4], [2,3,4,5,6])
  );

// answer [[1, 3, 4], [1, 3, 4]]
console.log(
	"union and intersection equals to :",
	find_union([1, 3, 4], [1, 3, 4])
);