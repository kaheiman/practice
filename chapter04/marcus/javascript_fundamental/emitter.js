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
		}

		ping(message) {
			this.messages.push(message);
		}
	}

	const myEmitter = new Emitter(messages);
	const myReceiver = new Receiver();

	// myEmitter.setEvent(myReceiver.ping); not work
	// myReceiver.ping just returns a raw method reference without any intrinsic connection between a method class and the instance
	myEmitter.setEvent(myReceiver.ping.bind(myReceiver));
	myEmitter.trigger();

	return myReceiver.messages;
};

console.log(solution(["a", "b", "c"]));



