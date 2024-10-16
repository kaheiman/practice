/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
  let res = 0;
  for (i=0; i < 32; i++) {
      const bit = n & 1;
      res = res | (bit << (31 - i));
      n = n >> 1;
  }
  return res >>> 0;
};