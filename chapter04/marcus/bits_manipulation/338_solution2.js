// O(n) - dynamic programing (observe the pattern first)


// 0000 : 0 (even)
// 0001 : 1
// 0010 : 2 (even)
// 0011 : 3
// 0100 : 4 (even)
// 0101 : 5
// 0110 : 6 (even)
// 0111 : 7
// 1000 : 8 (even)

// pattern 係現數字 / 2 嘅 (number of 1) ， 如果 i 係單數就 + 1
// eg: (0100 : 8) even number= (0100: 4) 嘅 number of 1
// eg: (0110: 6) even number = (0011: 3) 嘅 number of 1
// eg: (0101: 5) odd number = (0010: 2) 嘅 number of 1 + 1

// be careful (i & 1) need to have ()

var countBits = function(n) {
  let arr = new Array(n + 1).fill(0);

  for (i=1; i<= n; i++) {
      arr[i] = arr[i >> 1] + (i & 1);
  }

  return arr;
}