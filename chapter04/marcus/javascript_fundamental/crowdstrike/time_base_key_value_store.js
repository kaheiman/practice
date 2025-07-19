class TimeBaseItem {
    constructor() {
        this.value = [];
        this.timestamp = [];
    }
}
class TimeMap {
    constructor() {
        this.store = new Map();
    }

    set(key, value, timestamp) {
        if (!this.store.has(key)) {
            const item = new TimeBaseItem();
            item.value.push(value);
            item.timestamp.push(timestamp);
            this.store.set(key, item);
        } else {
            const item = this.store.get(key);
            item.value.push(value);
            item.timestamp.push(timestamp);
        }
    }

    get(key, timestamp) {
        if (!this.store.has(key)) {
            return '';
        }
        const item = this.store.get(key);
        let left  = 0;
        let right = item.timestamp.length - 1;
        // after the loop right must smaller than left
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (item.timestamp[mid] === timestamp) {
                return item.value[mid];
            } else {
                if (item.timestamp[mid] < timestamp) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        if (right < 0) {
            return '';
        }
        return item.value[right];
    }
}

const t = new TimeMap();
t.set('a', 'bar', 2);
t.set('a', 'fool', 5);
t.get('a',  1);  // ''
t.get('a',  3);  // 'bar'
t.get('a',  7);  // 'fool'
t.get('a',  5); // 'fool'
t.get('g', 1); // ''