var KthLargest = function (k, nums) {
  this.stream = nums.sort((a, b) => a - b);
  this.k = k;
};

KthLargest.prototype.add = function (val) {
  if (this.stream.length === 0 || val >= this.stream[this.stream.length - 1])
    this.stream.push(val);
  else
    for (let i = 0; i < this.stream.length; i++)
      if (val <= this.stream[i]) {
        this.stream.splice(i, 0, val);
        break;
      }

  return this.stream[this.stream.length - this.k];
};

// KthLargest.prototype.add = function (val) {
//   for (i=0; i< this.data.length; i++) {
//     if (data[i] > val) {
//       this.data.splice(i, 0, val);
//       break;
//     }
//   }
//   return this.data[this.data.length - this.k];
// }