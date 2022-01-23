/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
  let sumOne = 0;
  for (i=0; i < 32; i++){
      if (n & 1) {
          sumOne ++;
      }
      n >>= 1;
  }
  return sumOne
};