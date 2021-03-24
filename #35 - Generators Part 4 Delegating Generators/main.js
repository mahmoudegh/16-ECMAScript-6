/*
  Generators Part 3
  Delegating Generators
*/

function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateNames() {
  yield "Mahmoud";
  yield "Osama";
  yield "Sayed";
}

function* generateAll() {
  yield* generateNumbers();
  yield* generateNames();
}

let genAll = generateAll();

console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
