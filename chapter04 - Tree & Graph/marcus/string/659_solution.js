// a special character # is needed to detect length greater than 9 like 100

let input = ["lint#555","codecodeodeodeodedadaasd", "lo###ve", "you"];

const encode = (val) => {
  res = '';
  for (i=0; i < val.length; i++) {
    let charLength = val[i].length;
    res += charLength + "#" + val[i];
  }
  return res;
}


const decode = (val) => {
  let res = [];
  let num = "";
  let pointer = 0;
  while (pointer < val.length) {
    num += val[pointer];
    if (val[pointer] === "#") {
      let len = parseInt(num, 10);
      let word = val.slice(pointer + 1, pointer + 1 + len);
      res.push(word);
      pointer = pointer + 1 + len;
      num = "";
    } else {
      pointer++;
    }
  }
  return res;
}

let encodedVal = encode(input);
console.log(encodedVal);
let decodedVal = decode(encodedVal);
console.log(decodedVal);