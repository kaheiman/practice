class OccurrencyProcessor {
	constructor(lists) {
		this.lists = lists;
		this.frequentCoOcurrenceMap = new Map();
	}

	// Lists row  = m
	// Item inside each row = n
	// Time complexity = m * n^2
	generateFrequentCoOccurrencyMap() {
		this.lists.forEach((list, _) => {
			list.forEach((element, idx) => {
				if (!this.frequentCoOcurrenceMap.has(element)) {
					this.frequentCoOcurrenceMap.set(element, new Map());
				}
				list.forEach((term, termIdx) => {
					if (termIdx !== idx) {
						const eleMap = this.frequentCoOcurrenceMap.get(element);
						if (eleMap.has(term)) {
							eleMap.set(term, eleMap.get(term) + 1);
						} else {
							eleMap.set(term, 1);
						}
					}
				});
			});
		});

		console.log("this.frequentCoOcurrenceMap:", this.frequentCoOcurrenceMap);
	}

	// unique term = n * m * n = n^2 * m
	getMostFrequentOccurencyTermMap() {
		const resultTermMap = new Map();
		const resultTermCountMap = new Map();
		for (const [key, value] of this.frequentCoOcurrenceMap) {
			let maxTerm = null;
			let maxCount = -1;
			for (const [termKey, termCount] of value) {
				if (termCount > maxCount) {
					maxTerm = termKey;
					maxCount = termCount;
				}
			}
			resultTermMap.set(key, maxTerm);
			resultTermCountMap.set(key, maxCount);
		}
		console.log("resultTermCountMap: ", resultTermCountMap);
		console.log("resultTermMap: ", resultTermMap);
	}
}

// Example usage
const lists = [
	["apple", "banana", "cherry"],
	["banana", "apple", "date"],
	["cherry", "banana", "date"],
	["apple", "banana"],
	["date", "apple"],
];

const processor = new OccurrencyProcessor(lists);
processor.generateFrequentCoOccurrencyMap();
processor.getMostFrequentOccurencyTermMap();

// Time complexity n^2 * m + m * n^2
// Space complexity is the same
