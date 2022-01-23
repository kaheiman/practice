// Nlog(n)
/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  let arr = [];
  for (i=0; i<=n; i++) {
      let a = i;
      let count = 0;
      while(a !== 0) {
          if (a & 1) { count++; }
          a >>= 1
      }
      arr.push(count);
  }
  return arr;
};

const missingNumber = numbers => numbers.reduce((result, number, index) => result ^ number ^ index) ^ numbers.length;