var cats = new Array(10).fill([]).map((_, idx) => idx);

console.log(cats);
console.log(cats.slice(5, 10));
console.log(cats.splice(5, 10));
console.log(cats.splice(5, 2, 9, 8));
console.log(cats.shift());
console.log(cats);

let c = [{a: 1, b: 2}, {a: 2, b:3}];
let d = [...c]; // not deep copy
let e = [];
c.forEach((item) => {
  e.push({...item});
}); // deep copy
d[0].a = 3;
console.log(d);
console.log(c);
console.log(e);
console.log(Math.ceil(3.3));
console.log(Math.floor(3.9));


const find_missing_number = (nums) => {
	let i = 0;
	let n = nums.length;
	while (i < n) {
		let j = nums[i];
		if (j !== i && j < n) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
		} else {
			i++;
		}
	}

	for (let k = 0; k < n; k++) {
		if (nums[k] !== k) {
			return k;
		}
	}
};

console.log("find_missing_number:", find_missing_number([4, 0, 3, 1]));

console.log("find_missing_number", find_missing_number([9, 0, 3, 1]));
