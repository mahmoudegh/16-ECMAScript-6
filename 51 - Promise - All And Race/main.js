/* 
  Promise
*/

//////////////////////////////  Promise.all() /////////////////////////////////
/*
const myFirstPromise = new Promise((resolve, reject) => {
  let connect = true;

  if (connect) {
    resolve("First promise resolved");
  } else {
    reject("First promise rejected");
  }
});

const mySecondPromise = new Promise((resolve, reject) => {
  let settings = true;

  if (settings) {
    resolve("Second promise resolved");
  } else {
    reject("Second promise rejected");
  }
});

Promise.all([myFirstPromise, mySecondPromise]).then((result) => {
  console.log(result);
});
*/

//////////////////////////////  Promise.race() /////////////////////////////////
const myFirstPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve("First promise resolved");
  }, 500);
});

const mySecondPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve("Second promise resolved");
  }, 100);
});

// myFirstPromise.then((result) => console.log(result));
// mySecondPromise.then((result) => console.log(result));

Promise.race([myFirstPromise, mySecondPromise]).then((result) => console.log(result));
