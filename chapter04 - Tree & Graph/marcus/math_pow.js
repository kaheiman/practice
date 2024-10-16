const power = (x, y) => {
  // base case
  if (y === 1) return x

  // odd
  if (y % 2 === 1) {
    return x * power(x, (y - 1) / 2) * power(x, (y - 1) / 2);
  }

  // even
  if (y % 2 === 0) {
    return power(x, y / 2) * power(x, y / 2)
  }

}

console.log("output: ", power(2,3))