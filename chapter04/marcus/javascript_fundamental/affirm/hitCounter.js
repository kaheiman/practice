class Message {
  constructor(msg, timestamp) {
    this.msg = msg
    this.timestamp = timestamp
  }
}

class HitCounter {
	constructor(windowSize = -1) {
		this.hitList = [];
		this.windowSize = windowSize;
	}

	hit(message, timestamp) {
		const msg = new Message(message, timestamp);
		this.hitList.push(msg);
	}

	getHitsBinarySearch(keyword, timestamp) {
    let count = 0
    const startTimeStamp = this.windowSize > -1 ? timestamp - this.windowSize : 0
    const idx = this.binarySearch(startTimeStamp);
    for (let i = idx; i < this.hitList.length; i++) {
			if (this.hitList[i].timestamp > timestamp) {
				break;
			}
			if (this.hitList[i].msg.includes(keyword)) {
				count += 1;
			}
		}
    return count
  }

  // log(n)
  binarySearch(targetTimestamp) {
    let low = 0
    let high = this.hitList.length - 1
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (this.hitList[mid].timestamp >= targetTimestamp) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return low
  }

	getHits(keyword, timestamp) {
		this.hitList.sort((prev, next) => prev.timestamp - next.timestamp);
		let count = 0;
		for (let i = 0; i < this.hitList.length; i++) {
			if (this.hitList[i].timestamp > timestamp) {
				break;
			}
			if (this.windowSize > -1) {
				if (this.hitList[i].timestamp >= timestamp - this.windowSize) {
					if (this.hitList[i].msg.includes(keyword)) {
						count += 1;
					}
				}
			} else {
				if (this.hitList[i].msg.includes(keyword)) {
					count += 1;
				}
			}
		}
		return count;
	}
}

const c = new HitCounter(10)
c.hit("my world", 1)
c.hit("your world", 2);
c.hit("hit", 2);
c.hit("hit", 2);
c.hit("hit", 2);
c.hit("hit", 100);

console.log(c.getHits("hit", 100))
console.log(c.getHitsBinarySearch("hit", 100));