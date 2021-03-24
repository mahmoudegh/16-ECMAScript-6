/*
  Generators Part 3
  Create Infinite Numbers
*/

function* createInfinite() {
  // Don't Loop on this
  let i = 0;

  while (true) {
    yield i++;
  }
}

let infiniteIterator = createInfinite();

console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());
console.log(infiniteIterator.next());

for (let number of infiniteIterator) {
  if (number > 20) {
    break;
  }
  console.log(number);
}
