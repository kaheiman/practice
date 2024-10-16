

const getPossibleSequence = (n) => {
  let maxPower = Math.floor(Math.log(n - 1) / Math.log(2))
  let diffEles = new Array(maxPower + 1).fill(1).map((_, idx) => Math.pow(2, idx))
  let diffSet = new Set()
  diffEles.forEach((item) => diffSet.add(item))

  console.log(diffSet);
  const seed = new Array(n).fill(1).map((_, idx) => idx + 1)
  let combinations = [[]]
  for (let i = 0; i < seed.length; i++) {
    let subsets = []
    let numberOfCombination = combinations.length
    for (let j = 0; j < numberOfCombination; j++) {
      let newSubset = combinations[j].slice()
      if (
				newSubset.length > 0 &&
				!diffSet.has(seed[i] - newSubset[newSubset.length - 1])
			) continue
			newSubset.push(seed[i]);
      subsets.push(newSubset)
    }
    combinations = [...combinations, ...subsets]
  }
  console.log(combinations.length)
  console.log(combinations)
}

const ans = []
const seq = [1,2,3,4,5]
const dfsGetAllCombination = (cur, idx) => {
  // base case
  console.log(idx)
  if (idx === seq.length) {
    ans.push(cur)
    return
  }
  dfsGetAllCombination([...cur, seq[idx]], idx + 1)
  dfsGetAllCombination(cur, idx + 1);
}

console.log(getPossibleSequence(5));
dfsGetAllCombination([], 0)
console.log(ans)