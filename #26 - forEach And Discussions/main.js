/*
  forEach(currentValue, index, array)
*/

const arr = ["a", "b", "c", "d", , "f"];

for (let i = 0; i < arr.length; i++) {
  console.log(`${i} - ${arr[i]}`);
}

console.log(`${"#".repeat(30)}`);

arr.forEach((el, i) => {
  console.log(`${i} - ${el}`);
});

console.log(`${"#".repeat(30)}`);

let callbacks = 0;

arr.forEach((el, i) => {
  console.log(`${i} - ${el}`);
  callbacks++;
});

console.log(callbacks);

console.log(`${"#".repeat(30)}`);

function makeTheLoop(element, index) {
  console.log(`${index} - ${element}`);
}

arr.forEach(makeTheLoop);
