/*
  Ney array methods
  Array.of
  Array.from
  Array.fill
*/

// Array.of(Elements to create the array)

let oldArray = Array(100);
console.log(oldArray);
console.log(oldArray.length);

console.log(`${"#".repeat(26)}`); ////////////////////////////////////////////

let newArray = Array.of(100);
console.log(newArray);
console.log(newArray.length);

console.log(`${"#".repeat(26)}`); // Array.from(Iterable, Mapfn, This) /////////

let myName = "Mahmoud";
console.log(myName);

let arrayOfLetters = Array.from(myName);
console.log(arrayOfLetters);

console.log(`${"#".repeat(26)}`); /////// Use function with array from() ////////

let myNumbers = [10, 20, 30, 15, 18, 100, 60];

let numbersMinusTen = Array.from(myNumbers, (number) => number - 10);

console.log(numbersMinusTen);

console.log(`${"#".repeat(26)}`); // Array.fill(Value to fill, Start Default 0, End Default array.length) /////////

let theNumbers = [1, 10, 30, 70, 90];
console.log(theNumbers);

// theNumbers.fill(100); // All will be 100
// theNumbers.fill(100, 2) // From 10
theNumbers.fill(100, 1, 3); // Will fill 10 & 30
console.log(theNumbers);
