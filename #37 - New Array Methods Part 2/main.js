/*
  Ney array methods
  Array.find()
  Array.findIndex()
  Array.copyWithin()
*/

// Array.find() Not returning all values

let myNumbers1 = [1, 10, 20, 30, 40];
let found1 = myNumbers1.find((el) => el > 10);
console.log(found1);

console.log(`${"#".repeat(26)}`); //////////// Array.findIndex() ////////////

let myNumbers2 = [1, 10, 20, 30, 40];
let found2 = myNumbers2.findIndex((el) => el > 10);
console.log(found2);

console.log(`${"#".repeat(26)}`); /////////// Array.copyWithin() ////////////
// Array.copyWithin(target[the place], start, end)

let myLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
myLetters.copyWithin(1, 5, 7);
console.log(myLetters);
