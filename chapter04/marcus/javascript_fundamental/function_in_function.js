const math = (op, x) => {
  const OPERATIONS = {
    "*" : (a,b) => a * b,
    "/" : (a,b) => a / b,
    "+" : (a,b) => a + b,
    "-" : (a,b) => a - b,
  }

  return function(y) {
    return OPERATIONS[op](x, y);
  }
}

const mul = math("*", 5)

console.log("mul: ", mul)

const add = math("+", mul(2));

console.log(typeof add)
console.log(add(math("-", 25)(20)))