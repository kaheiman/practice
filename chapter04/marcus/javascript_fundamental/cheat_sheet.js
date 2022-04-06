// Scoping
let z = "zzz"; // block scope local variable
var z = "aaa"  // global scope

// Object related
// Object is not iterable, cannot (for ... of), return undefined when access obj['abc'] where abc is not a key of obj
// enumerable property
JSON.stringify();
JSON.parse();
for (let key in myObj) {
	console.log(key);
}

// Class related


// String and Char related
// In JavaScript, strings are immutable, to reassign  vale abc[2] = 's' is incorrect, the best you can do is to create a new string
var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line
var len = abc.length;           // string length
abc.indexOf("lmno");            // find substring, -1 if doesn't contain
abc.slice(3, 6);                // cuts out "def", negative values count from behind
abc.slice(abc.length - 1)       // cuts out last character
abc.slice(1)                    // cuts out from first character to the end
abc.substring(3, 6)             // same as slice
abc.replace("abc","123");       // find and replace, takes regular expressions
abc.toUpperCase();              // convert to upper case
abc.toLowerCase();              // convert to lower case
abc.concat(" ", str2);          // abc + " " + str2
abc.charAt(2);                  // character at index: "c"
abc[2];                         // unsafe, abc[2] = "C" doesn't work
abc.charCodeAt(2);              // character code at index: "c" -> 99
abc.split(",");                 // splitting a string on commas gives an array
abc.split("");                  // splitting on characters





// Array related
// Array is passed by reference, so need to deep copy an array [...arr] or arr.slice(0)
// Array sort
var dogs = ["Bulldog", "Beagle", "Labrador"];
var cats = new Array(10).fill(0);
var cats = new Array(10).fill([]).map((_, idx) => idx); // 0 to 9
dogs.toString(); // convert to string: results "Bulldog,Beagle,Labrador"
dogs.join(" * "); // join: "Bulldog * Beagle * Labrador"
dogs.pop(); // remove last element
dogs.push("Chihuahua"); // add new element to the end
dogs.shift(); // remove first element
dogs.unshift("Chihuahua"); // add new element to the beginning
dogs.splice(2, 0, "Pug", "Boxer"); // add elements (where, how many to remove, element list) // must 0 to add
dogs.slice(1, 4); // elements from [1] to [4-1] // deep copy, but not for array of object
dogs.sort(); // sort string alphabetically
dogs.reverse(); // sort string in descending order
// 1.If compare (a,b) is less than zero, the sort( ) method sorts a to a lower index than b. In other words, a will come first.
// 2.If compare (a,b) is greater than zero, the sort( ) method sort b to a lower index than a, i.e., b will come first.
// 3.If compare (a,b) returns zero, the sort ( ) method considers a equals b and leaves their positions unchanged.
x.sort(function (a, b) {
	return a - b;
}); // numeric sort
x.sort(function (a, b) {
	return b - a;
}); // numeric descending sort
["cat", "dog", "elephant", "bee", "ant"].sort((a, b) => {
  // charCode a > charCode b
  if (a > b) { return -1 } // don't change
  else if (b > a) {return 1 }
  else return 0
});

const arr = [{ id: "a" }, { id: "b" }, { id: "c" }];
const index = arr.map((object) => object.id).indexOf("c"); // return first index
const index = arr.findIndex((object) => { // return first index
	return object.id === "b";
});

let c = [{a: 1, b: 2}, {a: 2, b:3}];
let d = [...c]; // not deep copy
let a = {a: 2, b: 3};
let b = {...a} // deep copy

// Map related - key-value pairs
// key can be any type
const map1 = new Map();
map1.set("a", 1);
map1.set("b", 2);
map1.get("a"); // return undefined if not get the key
map1.has("a"); // return true / false
map1.delete("a"); // return true / false (when no key 'a' has found)
map1.size;
map1.clear() // clear whole map1
for (let [key, val] of map1) {
	console.log(key, val);
}

// Set related
const mySet1 = new Set()
mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
const o = {a: 1, b: 2}
mySet1.add(o)
mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay
mySet1.has(1)              // true
mySet1.has(3)              // false, since 3 has not been added to the set
mySet1.has(5)              // true
mySet1.has(Math.sqrt(25))  // true
mySet1.has('Some Text'.toLowerCase()) // true
mySet1.has(o)       // true
mySet1.size         // 5
mySet1.delete(5)    // removes 5 from the set
mySet1.has(5)       // false, 5 has been removed
mySet1.size         // 4, since we just removed one value
for (let item of mySet1) console.log(item);
// intersect can be simulated via
const intersection = new Set([...mySet1].filter(x => mySet2.has(x)))
// difference can be simulated via
const difference = new Set([...mySet1].filter(x => !mySet2.has(x)))
let mySet2 = new Set([1,2,3,4]) // size 4
let newArr = [...mySet2] // [1,2,3,4]

// Heap related

// Check is Number
const parsed = parseInt('100');
if (isNaN(parsed)) {
  return 0;
}

// Math related
Math.round(4.4); // = 4 - rounded
Math.round(4.5); // = 5
Math.pow(2, 8); // = 256 - 2 to the power of 8
Math.sqrt(49); // = 7 - square root
Math.floor();
Math.max(10, 12); // 12
Math.max(...[10, 12, 13]); // 13

// Priority Queue related

// Number
Number.MAX_VALUE        // largest possible JS number
Number.MIN_VALUE        // smallest possible JS number
Number.NEGATIVE_INFINITY// -Infinity
Number.POSITIVE_INFINITY// Infinity
