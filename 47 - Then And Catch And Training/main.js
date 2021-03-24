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
  // Only one state allowed
  // resolve("Resolved");
  // reject("Rejected");

  if (Math.random() * 100 < 50) {
    resolve("Good");
  } else {
    reject("Bad");
  }
});

////////////////////////  Then handel resolve and reject ///////////////////////////
// myPromise.then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(rejected)
// );

////////////////////////  Catch handel reject only ///////////////////////////
// myPromise.catch((rejected) => console.log(rejected));

////////////////////////  We can combine then & catch ///////////////////////////
// myPromise.then((resolved) => console.log(resolved)).catch((rejected) => console.log(rejected));

////////////////////////  Then can handel reject only ///////////////////////////
myPromise.then(null, (rejected) => console.log(rejected));

//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////  Example about Callback hell  ///////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// Here callback pathed through the previous function
/*
firstRequest(function (response) {
  secondRequest(
    response,
    function (nextResponse) {
      thirdRequest(
        nextResponse,
        function (finalResponse) {
          console.log("Final respons : " + finalResponse);
        },
        failureCallback
      );
    },
    failureCallback
  );
}, failureCallback);
*/

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////  The same Example by using then & catch  //////////////////////
////////////////////////////////////////////////////////////////////////////////////
// Here callback attached to the previous function
/*
firstRequest()
  .then(function (response) {
    return secondRequest(response);
  })
  .then(function (nextResponse) {
    return thirdRequest(nextResponse);
  })
  .then(function (finalResponse) {
    console.log("Final response: " + finalResponse);
  })
  .catch(failureCallback);
  */

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////  The same Example by using es6  ///////////////////////////
////////////////////////////////////////////////////////////////////////////////////
/*
firstRequest()
  .then((response) => secondRquest(response))
  .then((nextResponse) => thirdRequest(nextResponse))
  .then((finalResponse) => console.log("Final response: " + finalResponse))
  .catch(failureCallback);
  */
