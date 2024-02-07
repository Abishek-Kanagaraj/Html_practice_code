// Synchronous
console.log("First");
console.log("Second");
console.log("Third");
// Asynchronous
console.log("First");
setTimeout(() => console.log("Second"), 3000);//which executes after executing the third, which doesn't wait for second to be executed
console.log("Third");

// Promises
// 3 states: Pending, fulfilled, rejected
const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("resolve the promise");
    }
    else {
        reject("reject the promise");
    }
})
console.log(myPromise);
myPromise.then(value => {
    return value
}).then(newValue => { console.log(newValue) })