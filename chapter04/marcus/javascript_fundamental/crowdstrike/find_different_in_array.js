const mySet1 = new Set()
mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
const o = {a: 1, b: 2}
mySet1.add(o)
mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay
mySet1.has(1)
mySet1.delete(o)
console.log(mySet1)
for (let item of mySet1) console.log(item);
let mySet2 = new Set([1,2,3,4])
const intersection = new Set([...mySet1].filter(x => mySet2.has(x)))
console.log(intersection)

const arr1 = [1,2,3,4]
const arr2 = [4,5,6,7]
const diff = new Set([...arr1, ...arr2])
console.log([...diff]) // set to array

let g = Array.from({ length: 10 }, () => new Array(10).fill(0));