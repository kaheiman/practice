/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
  // setp 1: find current carry
  nextCurry = a & b ;

  // step 2: find xor = (add)
  currentSum = a ^ b;

  while(nextCurry !== 0) {
     const prevSum = currentSum;
     currentSum = (nextCurry << 1) ^ currentSum;
     nextCurry = (nextCurry << 1) & prevSum;
  }

  return currentSum;
};