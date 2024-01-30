const JSpromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise is Working")
	}, 5000);
});

JSpromise.then((value) => {console.log(value)});
