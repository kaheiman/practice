// Time complexity O(1)
// Space complexity O(N)
// https://leetcode.com/problems/min-stack/

var MinStack = function() {
    this.smallest = [];
    this.list = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    const lastMin = this.smallest[this.smallest.length - 1];
    if (lastMin === undefined || val < lastMin) {
        this.smallest.push(val)
    } else {
        this.smallest.push(lastMin)
    }
    
    this.list.push(val)
    return null
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.smallest.pop()
    if (this.list.length > 0) {
        return this.list.pop()   
    }
    return null
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.list[this.list.length - 1] || null
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.smallest[this.smallest.length - 1] || null
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */