var funcs = [];
// let's create 3 functions
// if we update var -> let everything get fine
for (var i = 0; i < 3; i++) {
	// and store them in funcs
	funcs[i] = function () {
		// each should log its value.
		console.log("My value: " + i);
	};
}
for (var j = 0; j < 3; j++) {
	// and now let's run each one to see
	funcs[j]();
}

console.log("=======================")

function run() {
	console.log(foo); // undefined
	var foo = "Foo"; // if let will prompt ReferenceError
	console.log(foo); // Foo
}

run();


// i IS NOT known here
// j IS NOT known here
// k IS known here, but undefined
// l IS NOT known here

function loop(arr) {
    // i IS known here, but undefined
    // j IS NOT known here
    // k IS known here, but has a value only the second time loop is called
    // l IS NOT known here

    for( var i = 0; i < arr.length; i++ ) {
        // i IS known here, and has a value
        // j IS NOT known here
        // k IS known here, but has a value only the second time loop is called
        // l IS NOT known here
    };

    // i IS known here, and has a value
    // j IS NOT known here
    // k IS known here, but has a value only the second time loop is called
    // l IS NOT known here

    for( let j = 0; j < arr.length; j++ ) {
        // i IS known here, and has a value
        // j IS known here, and has a value
        // k IS known here, but has a value only the second time loop is called
        // l IS NOT known here
    };

    // i IS known here, and has a value
    // j IS NOT known here
    // k IS known here, but has a value only the second time loop is called
    // l IS NOT known here
}

loop([1,2,3,4]);

for( var k = 0; k < arr.length; k++ ) {
    // i IS NOT known here
    // j IS NOT known here
    // k IS known here, and has a value
    // l IS NOT known here
};

for( let l = 0; l < arr.length; l++ ) {
    // i IS NOT known here
    // j IS NOT known here
    // k IS known here, and has a value
    // l IS known here, and has a value
};

loop([1,2,3,4]);

// i IS NOT known here
// j IS NOT known here
// k IS known here, and has a value
// l IS NOT known here

// Creating global object property
// var foo = "Foo";  // globally scoped
// let bar = "Bar"; // not allowed to be globally scoped

// console.log(window.foo); // Foo
// console.log(window.bar); // undefined

// Redeclaration
// In strict mode, var will let you re-declare the same variable in the same scope while let raises a SyntaxError.

// 'use strict';
// var foo = "foo1";
// var foo = "foo2"; // No problem, 'foo1' is replaced with 'foo2'.

// let bar = "bar1";
// let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared