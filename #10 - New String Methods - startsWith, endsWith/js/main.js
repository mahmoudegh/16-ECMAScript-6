/*jslint browser:true */
/*global console*/

/* 
  New String Methods
  startsWith => string.startsWith('Search String', Position = Index)
  endsWith => string.endsWith('Search String', End Position = string.length)
*/

let x = 'Elzero Web School';
console.log(x.startsWith('Elzero')); // true
console.log(x.startsWith('Web', 7)); // true

let y = 'Elzero Web School';
console.log(y.endsWith('School')); // true
console.log(y.endsWith('Web', 10)); // true