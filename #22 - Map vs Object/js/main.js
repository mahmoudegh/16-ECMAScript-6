/* 
  Map
*/

// Old Method
var user = {}; // Empty Object
user['username'] = 'Mahmoud';
user.website = 'Elzero.org';
user['10'] = 'String';
user[10] = 'Number'; // Object Convert All Kyes To String
console.log(user);
console.log(user.username);
console.log(user['website']);


// New Method
let myMap = new Map();
myMap.set('10', 'String').set(10, 'Number').set(false, 'Boolean');

// OR
myMap.set('10', 'String')
     .set(10, 'Number')
     .set(false, 'Boolean');

// OR     
myMap.set('10', 'String');
myMap.set(10, 'Number');// Map Dont Convert Kyes (Leave It As It)
myMap.set(10, 'Number2'); // This Override The Above Because It Has The Same Kye
myMap.set(false, 'Boolean');
myMap.set({a: 1, b: 2}, 'Object'); // We Can Add Different Data Types
myMap.set(function doSomething() {}, 'Function'); // We Can Add Different Data Types

console.log(myMap);

// OR
let setMyMap = new Map([
  ['10', 'String'],
  [10, 'Number'],
  [false, 'Boolean'],
  [{a: 1, b: 2}, 'Object'],
  [function doSomething() {}, 'Function']
]);

console.log(setMyMap);