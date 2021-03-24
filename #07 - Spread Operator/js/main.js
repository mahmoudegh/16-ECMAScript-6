/*jslint browser:true */
/*global console*/

/* 
  Spread Operator ...
*/

/*
// Regular Way
let arrayOne = [1, 2, 3],
	arrayTwo = [4, 5],
	customArray = [1, 2, 3, ...arrayTwo, 6, 7];
console.log(customArray);
console.log(arrayOne.concat(arrayTwo));

// By Using Spread Operator
let arrayAll = [...arrayOne, ...arrayTwo];
console.log(arrayAll);

// Another Example
function sum(x, y, z) {
	return x + y + z;
}
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(...myNumbers);
console.log(sum(...myNumbers));
*/


let arrayOne = [1, 2, 3],
	//arrayTwo = arrayOne; // Regular Way Cant Do Right
	arrayTwo = [...arrayOne]; // Spread Operator Way Do Right
arrayTwo.push(4);

console.log(arrayOne);
console.log(arrayTwo);

// Another Example
let arrayLast = [1, 2, 3, 100, -20, -10, 500];
console.log(Math.min(arrayLast)); // Regular Way Cant Do Right
console.log(Math.min(...arrayLast));