/* 
  Set: new Set(Iterable) // Iterable Is An Element Can Be Looped
  Set Has No Accesable Index
*/

// Type Of Set Is Object
/*
let mySet = new Set();

console.log(typeof mySet); // object

console.log(mySet);*/



// Function To Know If An Element Is Iterable Or Not
/*
let x = 16;

for (let i = 0; i < x.length; i++) {
  console.log(x[i]);
}*/




// Cant Repeat In Set
/*
let mySet = new Set([1, 2, 3, 3]);

let myArray = [1, 2, 3, 3];

console.log(mySet); // cant Repeat

console.log(myArray);*/



//Convert Array To set
/*
let myArray = [1, 2, 3, 3];

let mySet = new Set(myArray);

console.log(mySet);


//Convert Set To Array (Remove Repeat From Array)

console.log([...mySet]);*/