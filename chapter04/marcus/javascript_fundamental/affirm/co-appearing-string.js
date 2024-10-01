class CoAppearingString {
  constructor() {
    this.coAppearingStrings = new Map();
  }

  // deduplication
  processList(list) {
    for (let i = 0; i < list.length; i++) {
      const deduplicateSet = new Set(list[i]);
      const subList = [...deduplicateSet.values()];
      subList.sort()
      for (let j = 0; j < subList.length - 1; j++) {
        for (let k = j + 1; k < subList.length; k++) {
          let firstElement = subList[j]
          let secondElement = subList[k];
          const uniqueIdentifier = `${firstElement},${secondElement}`
          if (this.coAppearingStrings.has(uniqueIdentifier)) {
            this.coAppearingStrings.set(
              uniqueIdentifier,
              this.coAppearingStrings.get(uniqueIdentifier) + 1
            );
          } else {
            this.coAppearingStrings.set(uniqueIdentifier, 1);
          }
        }
      }
    }
  }

  getCoappearingList() {
    return this.coAppearingStrings
  }
}


// Example usage:
const lists = [
	["apple", "banana", "orange"],
	["banana", "grape", "apple"],
	["orange", "apple", "apple", "grape"], // Notice duplicate 'apple'
	["banana", "apple"],
];

const c = new CoAppearingString(lists);
c.processList(lists);
console.log(c.getCoappearingList());


/**
 Final Complexity Summary
 Time Complexity: O(L * N²), where L is the number of sublists and N is the average number of strings in a sublist.
 Space Complexity: O(L * N²), for storing co-appearing pairs and the unique strings in each sublist.
 *
 */

