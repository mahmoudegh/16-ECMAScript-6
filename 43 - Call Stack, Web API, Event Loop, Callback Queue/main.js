/*
  Important knowledge for promisies
    - Call Stack
        -- Mechanism to make interpreter track your calls
        -- When you call a function its added to the stack
        -- When function is executed its remover from the stack
        -- The interpreter continue calling from the last point reached
        -- Call stack detect web api and leave it to browser to handel it
    - Web API
        -- It means methods available from environment (Browser)
        -- When these method complete it add callback to the callback queue 
    - Event Loop
        -- Wait the call stack to finish
        -- get callback from callback queue
        -- Add callback to call stack
    - Callback Queue
*/

/////////////////////////////////////////////////////////////////

// let i = 10;
// let j = 20;

// console.log(i + j);

// function first() {
//   console.log("Hello First");
// }

// function second() {
//   first();
//   console.log("Hello second");
// }
// second();

///////////////////////////////////////////////////////////////////

// console.log("One");
// window.setTimeout(() => console.log("Two"), 0);
// console.log("Three");

//////////////////////////////////////////////////////////////////

// window.setTimeout(() => console.log(myVariable), 0);
// let myVariable = 100;
// myVariable += 200;

///////////////////////////////////////////////////////////////////

window.setTimeout(() => console.log("Last"), 1000);
console.log("One");
window.setTimeout(() => console.log("Two"), 0);
console.log("Three");
