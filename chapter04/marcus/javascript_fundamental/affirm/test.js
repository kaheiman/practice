class shortestSubstring {
	constructor(s, t) {
		this.s = s;
		this.t = t;
		this.freqCountMap = this.createSubStringFreqCountMap(t);
    this.uniqueChar = (new Set(t.split(""))).size
    this.windowCountMap = new Map();
    this.matched = 0
	}

	createSubStringFreqCountMap(t) {
    const m = new Map()
    for (let char of t) {
      m.set(char, ((m.get(char) || 0) + 1))
    }
    return m
  }

  getValidAnagram() {
    let left = 0
    let right = 0
    let result = []
    let pointerIdx = []

    while (right < this.s.length) {
      const currChar = this.s[right];
			this.windowCountMap.set(
				currChar,
				(this.windowCountMap.get(currChar) || 0) + 1
			);

      if (
				this.freqCountMap.has(currChar) &&
				this.freqCountMap.get(currChar) === this.windowCountMap.get(currChar)
			) {
				this.matched += 1;
			}

      while (left <= right && this.matched === this.uniqueChar) {
        const leftChar = this.s[left]
        const currSlice = this.s.slice(left, right + 1);
        if (this.t.length === currSlice.length) {
          result.push(currSlice)
          pointerIdx.push(left)
        }


        this.windowCountMap.set(
					leftChar,
					this.windowCountMap.get(leftChar) - 1
				);
				if (
					this.freqCountMap.has(leftChar) &&
					this.windowCountMap.get(leftChar) < this.freqCountMap.get(leftChar)
				) {
					this.matched--;
				}

				left++;
      }

      right++
    }

    return pointerIdx
  }

	getShortest() {
    let left = 0;
    let right = 0;
    let minSize = Number.POSITIVE_INFINITY;
    let result = null
    while (right < this.s.length) {
      const currChar = this.s[right]
      this.windowCountMap.set(currChar, ((this.windowCountMap.get(currChar) || 0) + 1))

      if (this.freqCountMap.has(currChar) && this.freqCountMap.get(currChar) === this.windowCountMap.get(currChar)) {
        this.matched += 1
      }

      while (left <= right && this.matched === this.uniqueChar) {
        const leftChar = this.s[left]

        const currSlice = this.s.slice(left, right + 1);
        if (currSlice.length < minSize) {
          minSize = currSlice.length;
          result = currSlice;
        }

        this.windowCountMap.set(leftChar, this.windowCountMap.get(leftChar) - 1)
        if (this.freqCountMap.has(leftChar) && this.windowCountMap.get(leftChar) < this.freqCountMap.get(leftChar)) {
          this.matched--
        }

        left++
      }
      right++
    }

    return result
  }
}


const s = "cbaeeeebaebabdacbbd";
const t = "abc";
const p = new shortestSubstring(s, t)

// console.log(p.getShortest()) // "ed"

console.log(p.getValidAnagram());




