/*

  Symbol Iterator & For Loop

  Iterable => Object Has Symbol.Iterator
  Iterator
    - Object with interface designed for iteration
    - All iterators has Next() Method that return result object
    - The result object has two props
    --- [1] Value => the next value
    --- [2] Done => Boolean value to tell if the next value is exists or no

  For ... Of Loop

  [1] Call Symbol.Iterator with next method
  [2] Save value inside variable
  [3] Check for done if it's true => exit the loop
  
*/

let myArray = [1, 2, 3];
let myName = "Mahmoud";
let myNumber = 1000;
let myObject = {};

console.log(typeof myArray[Symbol.iterator]); // Belt in Iterable
console.log(typeof myName[Symbol.iterator]); // Belt in Iterable
console.log(typeof myNumber[Symbol.iterator]);
console.log(typeof myObject[Symbol.iterator]);

let theIterator = myName[Symbol.iterator]();

console.log(theIterator);
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());

for (let char of myName) {
  console.log(char);
}

for (let num of myNumber) {
  console.log(num);
}
