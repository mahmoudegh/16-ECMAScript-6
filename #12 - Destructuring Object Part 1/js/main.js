/*jslint browser:true */
/*global console*/

/* 
  Destructuring:
  - Object
  - Array
  - Parameter
*/

// By Regular Way
/*
var user = {
  name: 'Mahmoud',
  gender: 'Male',
  age: 35,
  city: 'Assiut',
  website: 'Elzero'
};

var u = user.name,
    g = user.gender,
    a = user.age;

console.log(`My Name Is: ${u}, I am ${g}, My Age Is: ${a}`);
*/

// By ES6
/*
const user = {
  name: 'Mahmoud',
  gender: 'Male',
  age: 35,
  city: 'Assiut',
  website: 'Elzero'
};

const {name, gender, age} = user;

console.log(`My Name Is: ${name}, I am ${gender}, My Age Is: ${age}`);
*/

// Another Ex
/*
let name = 'Default',
    gender = 'Default',
    age = 'Default';
    
const user = {
  name: 'Mahmoud',
  gender: 'Male',
  age: 35,
  city: 'Assiut',
  website: 'Elzero'
};
// Notes: The parentheses ( ... ) around the assignment statement are required when using object 
// literal destructuring assignment without a declaration.

// {a, b} = {a: 1, b: 2} is not valid stand-alone syntax
// as the {a, b} on the left-hand side is considered a block and not an object literal.

// However, ({a, b} = {a: 1, b: 2}) is valid, as is const {a, b} = {a: 1, b: 2}

// Your ( ... ) expression needs to be preceded by a semicolon 
// or it may be used to execute a function on the previous line.
({name, gender, age} = user);

console.log(`My Name Is: ${name}, I am ${gender}, My Age Is: ${age}`);
*/

// Another Ex

const user = {
  name: 'Mahmoud',
  gender: 'Male',
  age: 35,
  city: 'Assiut',
  website: 'Elzero',
  theme: 'Red'
};

const {name, gender, age, theme = 'Default'} = user; // We Can Declare Here

console.log(`My Name Is: ${name}, I am ${gender}, My Age Is: ${age}, My Theme Color Is: ${theme}`);
