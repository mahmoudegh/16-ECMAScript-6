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
  ==================================================

  Asynchronous vs Synchronous Programming
*/

// console.log("One");
// window.alert("Bad");
// console.log("Two");

/////////////////////////////////////////////////////////////////

// console.log("Function to do something");
// window.alert("Delay");
// console.log("Do important things, waiting is a big problem");

////////////////////////////////////////////////////////////////

console.log("Function to do something");
window.setTimeout(() => console.log("Get Friends List"), 1000);
window.setTimeout(() => console.log("Get Latest News"), 2000);
console.log("Do important things, waiting is a big problem");
