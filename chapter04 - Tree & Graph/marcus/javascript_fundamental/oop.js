class Guitar {
  constructor (color, stringNumber) {
    this.color = color
    this.stringNumber = stringNumber
    this.play = () => console.log(`play guitar: ${this.color} ${this.stringNumber}`)
  }
}

class Bar extends Guitar {
	constructor(color, stringNumber) {
    super(color, stringNumber)
    this.color = "hahaha"
		this.play = () =>
			console.log(`play bar: ${this.color} ${this.stringNumber}`);
	}
}

class Electric extends Guitar {
	constructor(color, stringNumber) {
		super(color, stringNumber)
  }
}

Electric.prototype.play = () => {
  console.log(`play electic: ${this.color} ${this.stringNumber}`);
}


const guitars = []
guitars[0] = new Guitar("green", 1234)
guitars[1] = new Bar("yello");
guitars[2] = new Electric("orange");

for (let guitar of guitars) {
  guitar.play()
}

console.log("=======================")


// call and apply are the same will bind and execute the code
// call (param1, params)
// apply (array)
// bind will return a binded function and call the function
const A = {
  elem: 5
}

const B = {
  elem: 10,
  getElem(num) {
    return this.elem * num
  }
}

console.log(B.getElem(10))
const getElem = B.getElem
console.log("getElem: ", getElem);
const boundGetElem = getElem.bind(B)
console.log(boundGetElem(10))

console.log("=======================1");

class Pair {
  constructor(first, second) {
    this.first = first
    this.second = second
  }
}

Pair.prototype.setFirst = (newFirst) => {
  this.first = newFirst
  return this
}

Pair.prototype.setSecond = (newSecond) => {
  this.second = newSecond
  return this
}

const arr = []
arr[0] = new Pair("first", "second") // first second
console.log("@@@: ", arr[0].setFirst(100))
arr[1] = arr[0].setFirst("second") // second second
arr[2] = arr[1].setFirst("first") // first second
console.log(arr)
if (arr[0] === arr[1] || arr[0] === arr[2] || arr[1] === arr[2]) {
  arr[0].setSecond("second").setFirst("first")
} else {
  arr[1].setFirst("third").setSecond("third")
}

console.log(arr[0].first)
console.log(arr[2].second);
