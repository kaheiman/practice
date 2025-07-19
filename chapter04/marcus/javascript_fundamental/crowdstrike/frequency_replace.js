// Given a string, do in place replacement of every character with it's immediate count
// In Js string is immutable, so we need to convert it to array first and then do the replacement.
// Rmb is this.store.set(s[i], count) not this.store.set(chars[i], count)
/**
Input:  "ababc"
Output: "11221"

Explanation:
'a' occurs 1st time → "1"  
'b' occurs 1st time → "1"  
'a' occurs 2nd time → "2"  
'b' occurs 2nd time → "2"  
'c' occurs 1st time → "1"
 */

class FreqCount {
    constructor() {
        this.store = new Map();
    }

    replace(s) {
        const chars = s.split("")
        // console.log(chars);
        for (let i = 0; i < s.length; i++) {
            if (this.store.has(s[i])) {
                const count = this.store.get(chars[i]) + 1
                chars[i] = count
                this.store.set(s[i], count)
            } else {
                chars[i]  = 1
                this.store.set(s[i], 1)
            }
        }
        // console.log(this.store)
        console.log(chars.join(""))
        this.store = new Map();
    }
}

const f = new FreqCount()
f.replace('aabbc') // '12121'
f.replace('ababc') // '11221'
f.replace('ababcc') // '112212'
f.replace('ababccc') // '1122123'