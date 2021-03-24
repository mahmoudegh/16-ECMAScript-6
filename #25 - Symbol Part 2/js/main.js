/* 
  Symbols
*/

// Symbol.for('Description');
/*
const mySymboleOne = Symbol(); // Creat Symbol
const mySymboleTwo = Symbol(); // Creat Another Symbol
console.log(mySymboleOne === mySymboleTwo); // false
*/

const mySymboleOne = Symbol.for('Testing'); // Symbol Not Exist, Creat It.
const mySymboleTwo = Symbol.for('Testing'); // Symbol Is Exist, Return It.
console.log(mySymboleOne === mySymboleTwo); // true

// Symbol.keyFor();
console.log(Symbol.keyFor(mySymboleOne));

// Symbol Is Not Auot Convert To String
const mySymbol = Symbol('One');
// alert(mySymbol); // Erorr => Cannot convert a Symbol value to a string (auto)
alert(mySymbol.toString());

// Get Symbol Description
console.log(mySymbol.description);