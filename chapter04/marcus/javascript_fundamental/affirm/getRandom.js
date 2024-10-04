class Randomized {
	constructor() {
		this.uniqueMap = new Map();
		this.keys = [];
	}

	insert(key) {
		if (this.uniqueMap.get(key)) return false;
		const idxValue = this.uniqueMap.size - 1;
		this.uniqueMap.set(key, idxValue);
		this.keys.push(key);
		return true;
	}

	// getByKey(key) {
	//   this.uniqueMap.get(key)
	// }

	remove(key) {
		if (!this.uniqueMap.has(key)) return false;
		const v = this.uniqueMap.get(key);
		this.uniqueMap.delete(key);
		this.keys.splice(v, 1);
		return true;
	}

	// Math.random() 0 to less than 1
	randomDelete() {
    if (this.keys.length === 0) return
		const randIdx = Math.floor(Math.random() * this.keys.length);
    const key = this.keys[randIdx]
    this.keys.splice(randIdx, 1)
    this.uniqueMap.delete(key)
    console.log('delete key: ', key)
    console.log('keys: ', this.keys)
    console.log('uniqueMap: ', this.uniqueMap);
	}
}


const r = new Randomized()
console.log(r.insert(2))
console.log(r.insert(2));
console.log(r.remove(3));
console.log(r.remove(2));
console.log(r.insert(2));
console.log(r.insert(3));
console.log(r.insert(4));
console.log(r.insert(5));
r.randomDelete();