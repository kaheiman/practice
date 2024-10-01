/**
const strings = ['apple', 'banana', 'grape', 'orange', 'mango'];
For the letter 'a', it appears in several words:

In 'apple', it appears with 'p', 'l', 'e'.
In 'banana', it appears with 'b', 'n'.
In 'grape', it appears with 'g', 'r', 'p', 'e'.
In 'orange', it appears with 'o', 'r', 'n', 'g', 'e'.
In 'mango', it appears with 'm', 'n', 'g', 'o'.
Across all words, 'a' co-appears with 'n' the most times.

For the letter 'p', it appears in 'apple' and 'grape', co-appearing with other letters like 'a', 'l', 'e', 'g', 'r'. The most frequent co-appearance could be with 'l'.

Similarly, for each other letter (e.g., 'n', 'g', 'm', etc.), you want to find the letter it appears with the most across all strings.
 */


class CoAppearingLetter {
	constructor(words) {
		this.words = words;
		this.coAppearingLetterMap = new Map();
	}

	createcoAppearingLetterMap() {
    for (let word of this.words) {

      const uniqueCharWord = [...new Set(word)].sort();
      for (let i = 0; i < uniqueCharWord.length - 1; i++) {
        for (let j = i + 1; j < uniqueCharWord.length; j++) {
          let firstLetter = uniqueCharWord[i]
          let secondLetter = uniqueCharWord[j];
          let uniqueIdentifier = `${firstLetter},${secondLetter}`;
          if (this.coAppearingLetterMap.has(uniqueIdentifier)) {
            this.coAppearingLetterMap.set(uniqueIdentifier, this.coAppearingLetterMap.get(uniqueIdentifier) + 1)
          } else {
            this.coAppearingLetterMap.set(uniqueIdentifier, 1)
          }

          // let uniqueIdentifierReverse = `${secondLetter},${firstLetter}`;
          // if (this.coAppearingLetterMap.has(uniqueIdentifierReverse)) {
					// 	this.coAppearingLetterMap.set(
					// 		uniqueIdentifierReverse,
					// 		this.coAppearingLetterMap.get(uniqueIdentifierReverse) + 1
					// 	);
					// } else {
					// 	this.coAppearingLetterMap.set(uniqueIdentifierReverse, 1);
					// }
        }
			}
    }
  }

  /**
   * {a: b, c: d}
   */
  getMostCoAppearingLetterList() {
    console.log(this.coAppearingLetterMap);
    const letterMapper = new Map();
    const letterCountMapper = new Map();
    for (const [key, value] of this.coAppearingLetterMap) {
      const [first, second] = key.split(',')
      if (letterCountMapper.has(first)) {
        if (letterCountMapper.get(first) < value) {
          letterCountMapper.set(first, value)
          letterMapper.set(first, second)
        }
      } else {
        letterCountMapper.set(first, value)
        letterMapper.set(first, second);
      }
    }
		console.log(letterMapper);
  }
}


let testCase = ["apple", "banana", "grape", "orange", "mango"];
let testCase2 = ["apple"];
const c = new CoAppearingLetter(testCase);
c.createcoAppearingLetterMap();
c.getMostCoAppearingLetterList();


