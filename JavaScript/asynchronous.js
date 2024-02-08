/*// Synchronous
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
myPromise.then(value => {
    return value
})
    .then(newValue => { console.log(newValue) })
    .catch(err => {
        console.log(`Error occured:${err}`);
    })
// setTimeout
const nextPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("nextPromise Resolved!");
    }, 3000)
})
nextPromise.then(value=>{
    console.log(value);
})*/
const promise1 = fetch("https://json-placeholder.mock.beeceptor.com/users");
const promise2 = fetch("https://json-placeholder.mock.beeceptor.com/posts");
const promise3 = fetch("https://json-placeholder.mock.beeceptor.com/comments")

// const users = fetch("https://json-placeholder.mock.beeceptor.com/users");
Promise.all([promise1, promise2, promise3])
    .then((responses) => {
        for (const response of responses) {
            console.log(response);
        }
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });

/* users.then(response => {
    return response.json();
}).then(users => {
    console.log(users);
})
console.log(users);*/

// Async /Await
const users = async () => {
    const response = await fetch("https://json-placeholder.mock.beeceptor.com/users");
    const userData = await response.json();
    console.log(userData); 
    return userData;
}
users()