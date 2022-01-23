// O(n) - dynamic programing (observe the pattern first)
var countBits = function(n) {
  let arr = new Array(n + 1).fill(0);
  let offset = 1;

  for (i=1; i<= n; i++) {
      if (offset * 2 === i) {
          offset *= 2;
      }
      arr[i] = arr[i - offset] + 1
  }

  return arr;
}