let a = ['a','b','c', 'a']
a.sort((a, b) => b.charCodeAt() - a.charCodeAt())


console.log(a.unshift(1,2,3,4,5))
console.log(a)
console.log(a.shift());
console.log(a);

console.log(a.filter((item) => item === 'a'))
console.log(a);
console.log(a.findIndex((item) => item === 'eee'))
console.log("asdasddddd".replaceAll('a', 'dddd'))
console.log(a);
