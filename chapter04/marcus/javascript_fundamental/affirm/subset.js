function subset(arr) {
  const result = [[]]
  for (let item of arr) {
    const newSubset = []
    for (let subset of result) {
      newSubset.push([...subset, item])
    }
    result.push(...newSubset);
  }
  console.log(result)
}

const set = ["a", "b", "c"]
subset(set)