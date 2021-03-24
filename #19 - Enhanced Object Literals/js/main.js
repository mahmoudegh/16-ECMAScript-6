/*jslint browser:true */
/*global console*/

/* 
  Enhanced Object Litreals:
  =========================
  1- Property Value Shorthand.
  2- Methods Shorthand.
  3- Computed Object Property Name.
*/

// 1- Property Value Shorthand.
/*
const username = 'Mahmoud',
      website = 'Elzero.org';

const user = {
  username, // The Same As username: username,
  website // The Same As website: website
}

console.log(user);
*/


// 2- Methods Shorthand.
/*
const user = {
  //myMethod: function myMethod(param1) // Old Way
  myMethod (param1) { // New Way
    return param1;
  }
};

console.log(user.myMethod('Hello From Parameter'));
*/


// 3- Computed Object Property Name.

// Normal Variable (Will Be Used As Dynamic Property)
const myVariable = 'Key';

// Creat New Object
const myObject = {
  myProperty: 'MyValue',
  [myVariable]: 'Value' // New Way
};

// Add Dynamic Property and Assign A Value (Old Way)
//myObject[myVariable] = 'Value';

console.log(myObject);