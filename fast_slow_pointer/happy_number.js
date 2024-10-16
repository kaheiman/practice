function isHappy(n) {
	function getNext(number) {
		let totalSum = 0;
		while (number > 0) {
			let digit = number % 10;
			totalSum += digit * digit;
			number = Math.floor(number / 10);
		}
		return totalSum;
	}

	let slow = n;
	let fast = getNext(n);

	while (fast !== 1 && slow !== fast) {
		slow = getNext(slow);
		fast = getNext(getNext(fast));
	}

	return fast === 1;
}

// Example usage
console.log(isHappy(19)); // Output: true
console.log(isHappy(2)); // Output: false
