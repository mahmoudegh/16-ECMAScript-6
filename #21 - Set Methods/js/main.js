/* 
  Set: Methods
*/


// Add Value To Set
/*
let mySet = new Set().add('One').add('Two').add('Three');
console.log(mySet);*/



// Another Way To Add Value
/*
let mySet = new Set();
mySet.add('One');
mySet.add('Two');
mySet.add('Three');
console.log(mySet);*/


// Different Between new Set('mahmoud') & new Set().add('mahmoud)
/*
let mySet = new Set('mahmoud'); // Here We Add Iterable
mySet.add('mahmoud'); // Here We Add Value
console.log(mySet);*/


// Delet Value
/*
let mySet = new Set('mahmoud');
mySet.add('mahmoud');
mySet.delete('h');
console.log(mySet);*/


// Check If A Value Is Found
/*
let mySet = new Set('mahmoud');
mySet.add('mahmoud');
mySet.delete('h');
console.log(mySet.has('Mahmoud'.toLocaleLowerCase()));*/


// Number Of Elements
/*
let mySet = new Set('mahmoud');
mySet.add('mahmoud');
mySet.delete('h');
console.log(mySet.size);*/


// Clear Elements
/*
let mySet = new Set('mahmoud');
mySet.add('mahmoud');
mySet.delete('h');
mySet.clear();
console.log(mySet.size);*/