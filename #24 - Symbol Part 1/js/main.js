/* 
  Symbols
*/

// Data Type Is Symbol
const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol


// Symbol Is Unique
const mySymbolOne = Symbol('Testing'); // Testing Is The Discription For Buging(Usally Not Used)
const mySymbolTwo = Symbol('Testing');
console.log(mySymbolOne === mySymbolTwo); // false


// Symbol Is Private Inside Loop But Not 100%
const myNewSymbol = Symbol();
const myObject = {
  username: 'Mahmoud Galal',
  website: 'Mahmoud.org',
  [myNewSymbol]: 'This Is Hidden From Iteration'
}

console.log(myObject); // Can View Symbol Otside Loop

for (let val of Object.entries(myObject)) {
  console.log(val); // Cant View myNewSymbol
}

console.log(Object.getOwnPropertyNames(myObject)); // Cant View myNewSymbol
console.log(Object.keys(myObject)); // Cant View myNewSymbol
console.log(JSON.stringify(myObject)); // Cant View myNewSymbol
console.log(Object.getOwnPropertySymbols(myObject)); // This Can View Symbol