/* 
  Promise Intro
  - Promise is one of the best features in es6
  - Promise make it easy to support asynchronous programming
  - Promise in javaScript is like promise in real life
  - Promise is something that will happen in the future
  - Promise is a placeholder for a future value
  - You booked a cinema ticket, you have a promise from cinema owner to have a seat
  - You got task to do, you promised your boss to do the task
  - You ordered food from restaurant
  --- [ Promise ] Is the order record
  --- [ the future value ] Is the food you will receive
  - You ordered Iphone from Souq shop
  --- [ Promise ] Is the order record
  --- [ the future value ] Is the Iphone you will receive
  - Promise is an object
  - Promise is the event completion or failure of async operation & its resulting value
  - JavaScript use callbacks for asynchronous programming
  --- [1] Function called and do the task
  --- [2] Action complete
  --- [3] Another function called
  --- [4] Action complete
  --- [5] Another function called
  - In complex cases => Every call add nesting level
  - http://callbackhell.com/
  - Promise avoiding callback hell or pyramid of doom
  - Promise is one of this states
  [1] Pending => Not fulfilled or rejected
  [2] Fulfilled => Operation succeeded
  [3] Rejected => Operation failed
*/
////////////////////////  My first promise ///////////////////////////

const myPromise = new Promise((resolve, reject) => {
  // console.log("Welcome to my first promise");

  let connect = false;

  if (connect) {
    resolve("Connection established");
  } else {
    reject(Error("Connection is failed"));
  }
}).then(
  (resolved) => console.log(resolved),
  (rejected) => console.log(rejected)
);

/////////////////////////// Another way ///////////////////////////////
// myPromise.then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(rejected)
// );

/////////////////////////// Another way ///////////////////////////////
// const theResolved = (resolved) => console.log(resolved);
// const theRejected = (rejected) => console.log(rejected);
// myPromise.then(theResolved, theRejected);
