// the whole point of arrow functions is that they use the this of their parent scope
// cannot bind this to arrow function https://stackoverflow.com/questions/33308121/can-you-bind-this-in-an-arrow-function
// https://stackoverflow.com/questions/38613150/scope-within-es6-classes
// have 2 work arounds
// - myReceiver.ping.bind(myReceiver)
// - creating ping within the constructor as an arrow function, instead of on the prototype
const solution = (messages) => {
	class Emitter {
		constructor(messages = []) {
			this.messages = messages;
			this.event = () => {};
		}

		setEvent(fn) {
			this.event = fn;
		}

		trigger() {
			this.messages.forEach((message) => this.event(message));
		}
	}

	class Receiver {
		constructor() {
			this.messages = [];
			// this.pingping = (message) => {
			// 	this.messages.push(message);
			// };
		}

		ping(message) {
			this.messages.push(message);
		}
	}

	const myEmitter = new Emitter(messages);
	const myReceiver = new Receiver();

	// let a = myReceiver.ping.bind(myReceiver);
	// let b = myReceiver.pingping;
	// b("halo");

	// myReceiver.ping("aaaa");
	// console.log(myReceiver.message);

	// no intrinsic connection between a method class and the instance
	// myReceiver.ping just returns a raw method reference
	myEmitter.setEvent(myReceiver.ping.bind(myReceiver));
	myEmitter.trigger();

	return myReceiver.messages;
};

console.log(solution(["a", "b", "c"]));
