// Be careful this questions require after you are done modifying the input array, return the new length of the array.
// You must write an algorithm that uses only constant extra space.

// O (1)  space
// O (N)  time
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    console.log("chars: ", chars)
  let result = ''
  let curChar = null
  let curCharSize = 0
  // travese the chars arr,
  // update the currChar if curChar is not the same is prevChar
  // update the the curCharSize if same as prevChar
  // append curCharSize into result if curCharSize > 1 and curChar is not the same is prevChar
  // append curChar to result when curChar is not the same as prevChar


  for (const char of chars) {
    if (char !== curChar) 
    {
        if (curCharSize > 1) {
            result += `${curCharSize}`
        }
        curChar = char
        result += curChar
        curCharSize = 1
    } else {
        curCharSize += 1
    }
  }

  if (curCharSize > 1) {
    result += `${curCharSize}`
  }

  // to update chars array in place, you cannot assign in this way chars = [], otherwise it will assign the new reference into it
  chars.splice(0, chars.length)
  for (let j = 0; j < result.length; j++) {
    chars[j] = result[j]
  }
  return chars.length
};