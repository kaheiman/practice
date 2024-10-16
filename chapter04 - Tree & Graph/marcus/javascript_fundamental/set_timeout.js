const pr = new Promise((r, re) => {
	setTimeout(() => {
		r("ppp");
	}, 1000);

	setTimeout(() => {
		re("pppsss");
	}, 3000);
});

pr.then((arg) => {
	console.log(arg);
	return new Promise((r, re) => {
		re("ccc");
	}).catch((err) => {
		console.log("sss", err);
	});
}).catch((err) => {
	console.log(err);
});

let a = 500;
setTimeout(() => {
	console.log(a);
}, 0);
a = 300;
