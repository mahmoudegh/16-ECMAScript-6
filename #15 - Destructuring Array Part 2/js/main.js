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
const food = ['Burger', 'Pizza', 'Chicken', ['Apple', 'Banana', 'Mango', ['Egy Orange', 'Hindi Orange']]];

// const [one, two, three, four] = food;

// console.log(`The Food I Love Is: ${one}, ${two}, ${three}. The Fruits I Love Is: ${four}`);

const [one, two, three, [fr1, fr2, , [o1, o2]]] = food;

console.log(`The Food I Love Is: ${one}, ${two}, ${three}. The Fruits I Love Is: ${fr1}, ${fr2}. The Orange I Love Is: ${o1}, ${o2}`);
*/

// EX

const food = ['Burger', 'Pizza', 'Chicken', 'Apple', 'Banana', 'Mango'];

const [one, two, three, ...otherFoods] = food;

console.log(`The Food I Love Is: ${one}, ${two}, ${three}, ${otherFoods}`);