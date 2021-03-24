/*
  Modules part 3 named export vs default export
*/

// by Microsoft edge

import sayH, { a, b } from "./app.js";
// import sayH from "./app.js"; // We can change name because it default

console.log(a);
console.log(b);
console.log(sayH());
