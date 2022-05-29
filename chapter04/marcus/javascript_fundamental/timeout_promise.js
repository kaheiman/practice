
// // Nodejs is the runtime, composed of heap, stack, event-loop, and callback queue
// // event loop simply keep on checking whether a finished job in the task queue
// // event loop has to wait until the stack is cleared then pull the job inside the stack again
// // stack is a data structure which records bascically where the program we are, if we step into a function, we push something onto the stack
// // if we return from a function, we popoff from top of the stack

const a = (p1, p2) => {
  return p1 * p2
}

const b = (arg) => {
  return a(arg, arg + 1)
}

const c  = (arg) => {
  var square = b(arg)
  console.log('square: ', square)
}

c(4)

// // main() -> c(4) -> b(4) -> a(4, 5) -> console.log("square") ->
// // Maximum call stack err if recursively calling themselves
// // Blocking means when things get slow

console.log("1")
setTimeout(() => {
  console.log("2")
}, 0)

setTimeout(() => {
	console.log("3");
}, 1000);

const callback = (body) => {
    console.log("callback body: ", body)
}

const prom = new Promise((req, rej) => {
  console.log("new pro") // this line will immediately run
  req("halo world")
})

prom.then(callback).catch((err) => {
  console.log("err: ", err)
}).finally(() => {
  console.log("halo")
})

console.log("4")


setTimeout(() => {
	console.log("1");
}, 1000);

setTimeout(() => {
	console.log("2");
}, 1000);

setTimeout(() => {
	console.log("3");
}, 1000);

setTimeout(() => {
	console.log("4");
}, 1000);