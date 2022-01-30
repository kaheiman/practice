/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
  // setp 1: find current carry
  nextCarry = a & b ;

  // step 2: find xor = (add)
  currentSum = a ^ b;

  while(nextCarry !== 0) {
     const prevSum = currentSum;
     currentSum = (nextCarry << 1) ^ currentSum;
     nextCarry = (nextCarry << 1) & prevSum;
  }

  return currentSum;
};