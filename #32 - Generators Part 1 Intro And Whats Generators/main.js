/*
  Generators Part 1
  Intro and what's generator
*/

function* generateTickets() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let iterator = generateTickets();

console.log(typeof iterator);
console.log(iterator.next().value);

console.log(`${"#".repeat(26)}`);

console.log(`We will do somthing before yielding the next ticket`);
console.log(iterator.next().value);

console.log(`${"#".repeat(26)}`);

console.log(`Function stop execuation after each yield`);
console.log(iterator.next().value);

console.log(`${"#".repeat(26)}`);

console.log(`Function give you the control to yield`);
console.log(iterator.next().value);

console.log(`${"#".repeat(26)}`);

///////////////////////////////////////////////////////////////////////////

let myNumbers = [10, 20, 30, 40, 50];

function* generateNumbers(nums) {
  for (let i = 0; i < nums.length; i++) {
    yield nums[i];
  }
}

let generator = generateNumbers(myNumbers);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

console.log(`${"#".repeat(26)}`); /////////////////////////////////////////////

function* generateNums() {
  yield* [1, 2, 3, 4, 5, 6];
  yield 7;
}

let theGenerator = generateNums();

console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
