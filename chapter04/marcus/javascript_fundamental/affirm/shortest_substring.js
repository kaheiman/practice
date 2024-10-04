class ShortestSubString{
  constructor(arr) {
    this.words = arr
    this.subStrUniqueMap = new Map()
  }

  generateSubStringUniqueSet() {
    for (let word of this.words) {
      const uniqueSet = new Set()
      for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j <= word.length; j++) {
          const subString = word.slice(i, j)
          if (subString.length > 1) {
            uniqueSet.add(subString)
          }
        }
      }
      this.subStrUniqueMap.set(word, uniqueSet)
    }
  }

  isUniqueSubstring(substring, word) {
    let result = true
    for (let [key, set] of this.subStrUniqueMap) {
			if (word !== key) {
				if (set.has(substring)) {
					result = false;
					break;
				}
			}
		}
    return result
  }


  findShortest() {
    let result = []
    for (let word of this.words) {
      // console.log(this.subStrUniqueMap[word], word);
      const subStringList = [...this.subStrUniqueMap.get(word)].sort()
      let minSizeSub = ""
      let minSizeCount = Number.POSITIVE_INFINITY
      for (let sub of subStringList) {
        const isUnique = this.isUniqueSubstring(sub, word)
        if (isUnique && sub.length < minSizeCount) {
					minSizeCount = sub.length;
					minSizeSub = sub;
				}
      }
      result.push(minSizeSub);
    }
    return result
  }
}

const s = new ShortestSubString(["abc","bcd","abcd"]);
s.generateSubStringUniqueSet()
console.log(s.findShortest())