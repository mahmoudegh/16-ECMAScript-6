/*jslint browser:true */
/*global console*/

/* 
  Destructuring:
  - Object
  - Array
  - Parameter
*/

// EX
/*
const food = ['Burger', 'Pizza', 'Chicken'];

const [one, two, three] = food;

console.log(`The Food I Love Is: ${one}, ${two}, ${three}`);
*/

// EX
/*
let one = 'Default',
    two = 'Default',
    three = 'Default';

const food = ['Burger', 'Pizza', 'Chicken'];

[one, two, three] = food;

console.log(`The Food I Love Is: ${one}, ${two}, ${three}`);
*/

// EX
/*
const food = ['Burger', 'Pizza', 'Chicken', 'Meat'];

[one, two, three, four = 'Default'] = food;

console.log(`The Food I Love Is: ${one}, ${two}, ${three}, ${four}`);
*/

// EX

const food = ['Burger', 'Pizza', 'Chicken', 'Meat', 'Rice'];

[one, , three, four] = food; // Skip

console.log(`The Food I Love Is: ${one}, ${three}, ${four}`); //Skip
