
// since each iteration we have 2 choice '(' or ')', if we don't consider the ordering, so 2 ^ N, 
// time complexity should be 2 ^ n
// space complexity (2n) * (2 ^ n)
class ParenthesesString {
    constructor(openCount, closeCount, str) {
        this.openCount = openCount;
        this.closeCount = closeCount;
        this.str = str
    }
}


const combination = (n) => {
    let result = []
    if (n === 0) return result
    let queue = [new ParenthesesString(0, 0 , '')]
    while (queue.length > 0) {
        const current = queue.shift()
        if (current.openCount === n && current.closeCount === n) {
            result.push(current.str)
        }
        if (current.openCount < n) {
            queue.push(new ParenthesesString(current.openCount + 1, current.closeCount, `${current.str}(`))
        }   
        if (current.openCount > current.closeCount) {
            queue.push(new ParenthesesString(current.openCount, current.closeCount + 1, `${current.str})`))
        }
    }
    return result
}


console.log(combination(3))