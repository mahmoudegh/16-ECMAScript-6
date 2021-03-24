/*
  Set vs WeakSet
  ===============

  Set
  - Contain any type of values
  - Get elements count with size
  - forEach available for iterate
  - You can get its keys

  WeakSet
  - Contains only objects
  - you can't use size to get elelments count
  - forEach not available to iterate
  - you can't get keys
*/

// let mainObject = { A: 1 };

// let mySet = new Set([mainObject]);

// let objectOne = { B: 2 };
// let objectTwo = { C: 3 };

// mySet.add(objectOne);
// mySet.add(objectTwo);

// console.log(mySet);

// console.log(mySet.has(objectOne));
// console.log(mySet.has(objectTwo));

// console.log(mySet.size);
// console.log(mySet.keys());

// mySet.delete(objectOne);
// console.log(mySet.has(objectOne));

// objectTwo = null;
// console.log(mySet.has(objectTwo));

// console.log(mySet);

// mySet.add("String");
// mySet.add(12);
// console.log(mySet);

// mySet.forEach((v) => {
//   console.log(v);
// });

let mainObject = { A: 1 };

let myWeakSet = new WeakSet([mainObject]);

let objectOne = { B: 2 };
let objectTwo = { C: 3 };

myWeakSet.add(objectOne);
myWeakSet.add(objectTwo);

console.log(myWeakSet);

console.log(myWeakSet.has(objectOne));
console.log(myWeakSet.has(objectTwo));

// console.log(myWeakSet.size);
// console.log(myWeakSet.keys());

myWeakSet.delete(objectOne);
console.log(myWeakSet.has(objectOne));

objectTwo = null;
console.log(myWeakSet.has(objectTwo));

console.log(myWeakSet);

// myWeakSet.add("String");
// mySet.add(12);

// myWeakSet.forEach((v) => {
//   console.log(v);
// });
