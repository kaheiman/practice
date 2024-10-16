var returnValue = "aaa"
const foo = (a) => {

  try {
    if (a === "bar") {
      throw new Error("qux")
    }
  } catch (err) {
    returnValue = "catch"
  } finally {
    returnValue = "finally"
  }

  return returnValue

}

console.log("returnValue: ", returnValue)
console.log(foo("bar"))
console.log("returnValue: ", returnValue);
console.log(foo("zzz"));

console.log("returnValue: ", returnValue);


console.log("=======================")

const prefix = (str) => {
  try {
    return str.subStr(0,3)
  } catch (err) {
    throw err;
    return "catch"
  }
}

try {
  console.log(prefix(5))
} catch (err) {
  console.log("error")
}