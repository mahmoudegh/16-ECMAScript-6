/*
  Map vs WeakMap
  ===============

  Map
  - Contain any type of values
  - Get elements count with size
  - forEach available to iterate
  - You can get it's keys

  WeakMap
  - Contains only objects
  - You can't use size to get elelement count
  - forEaach not available to iterate
  - You can't get keys
*/

// let myMap = new Map();
// let objectOne = { a: 1 };
// myMap.set(objectOne, "Test");
// myMap.set("b", 2);
// myMap.set("c", 3);
// myMap.set(1, 15);

// console.log(myMap);
// console.log(myMap.get("c"));
// console.log(myMap.get(objectOne));

// console.log(myMap.has("b"));
// myMap.delete("b");
// console.log(myMap.has("b"));

// objectOne = null;
// console.log(myMap.get(objectOne));
// console.log(myMap.size);

let myWeakMap = new WeakMap();
let objectOne = { a: 1 };
let objectTwo = { b: 2 };
myWeakMap.set(objectOne, "Test1"); // WeakMap accept only object
myWeakMap.set(objectTwo, "Test2");
// myWeakMap.set("b", 2);
// myWeakMap.set("c", 3);
// myWeakMap.set(1, 15);

console.log(myWeakMap);

console.log(myWeakMap.get(objectOne));

console.log(myWeakMap.has(objectTwo));
myWeakMap.delete(objectTwo);
console.log(myWeakMap.has(objectTwo));

objectOne = null;
console.log(myWeakMap.get(objectOne));
console.log(myWeakMap);
// console.log(myWeakMap.size);
