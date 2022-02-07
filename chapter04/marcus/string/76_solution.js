/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t === "") return "";
  let countT = {};
  let window = {};
  for (i = 0; i < t.length; i++) {
    if (countT[t[i]]) {
      countT[t[i]]++;
    } else {
      countT[t[i]] = 1;
    }
  }

  let have = 0;
  let need = Object.keys(countT).length;
  let slidingWindowStart = 0;
  let result = [0, 0];
  let resultLength = null;

  for (slidingWindowEnd = 0; slidingWindowEnd < s.length; slidingWindowEnd++) {
    let char = s[slidingWindowEnd];
    if (window[char]) {
      window[char]++;
    } else {
      window[char] = 1;
    }

    // update have when it is correct
    if (countT[char] && countT[char] === window[char]) {
      have++;
    }

    // check condition is valid
    while (have === need) {
      console.log("need", slidingWindowEnd);
      // update result
      if (
        resultLength === null ||
        slidingWindowEnd - slidingWindowStart + 1 < resultLength
      ) {
        result = [slidingWindowStart, slidingWindowEnd];
        resultLength = slidingWindowEnd - slidingWindowStart + 1;
      }
      // pop from the left of our window
      window[s[slidingWindowStart]]--;
      if (
        countT[s[slidingWindowStart]] &&
        window[s[slidingWindowStart]] < countT[s[slidingWindowStart]]
      ) {
        have--;
      }
      slidingWindowStart++;
    }
  }

  if (resultLength === null) return "";
  console.log(result);
  return s.slice(result[0], result[1] + 1);
};