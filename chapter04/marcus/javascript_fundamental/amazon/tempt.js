const combination = (list) => {
  let result = [[]]
  let start = 0

  for (let j = 0; j < list.length; j++) {
    // console.log("start = ", start, result)
    const numOfExistingSet = result.length
    for (let i = 0; i < numOfExistingSet; i++) {
      if (i < start) continue
      const newSet = result[i].slice() // O(N)
      newSet.push(list[j])
      result.push(newSet)
    }
    if (list[j] === list[j + 1]) {
			start = numOfExistingSet;
		} else start = 0;
  }
  return result
}

const permutation = (list) => {
  let result = [[]]
  for (let j = 0; j < list.length; j++) {
    // let numberOfSubsets = result.length
    let tempt = []
    for (const subset of result) {
      for (let i = 0; i <= subset.length; i++) {
        let newSubset = subset.slice()
        newSubset.splice(i, 0, list[j])
        tempt.push(newSubset);
      }
    }
    result = tempt;
  }
  return result
}


// console.log(combination([1,3,5,5,6]))

console.log(permutation([1,3,5]));

// [] [1] [3] [1,3] [5] [1,5] [3,5] [1,3, 5]
// if nextElement equals to currentElement
// start = length of existing sets
//