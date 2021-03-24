/*jslint browser:true */
/*global console*/

/* 
  Destructuring:
  - Object
  - Array
  - Parameter
*/

// How To Rename The Object Key 
/*
const user = {
  name: 'Mahmoud',
  gender: 'Male',
  age: 35,
  city: 'Assiut',
  website: 'Elzero',
  theme: 'Default'
};

const {name: theName, gender: theGender, age: theAge, theme: theTheme = 'Default'} = user;

console.log(`My Name Is: ${theName}, I am ${theGender}, My Age Is: ${theAge}, My Theme Color Is: ${theTheme}`);
*/

// Another Ex
/*
const user = {
  name: 'Mahmoud',
  gender: 'Male',
  age: 35,
  city: 'Assiut',
  website: 'Elzero',
  theme: 'Default',
  langs: {
    html: '70%',
    css: '80%',
    js: '10%',
    python: '20%'
  }
};

const {name, gender, langs: {html: theHtml, css, python = '10%'}} = user;

console.log(`My Name Is: ${name}, I am ${gender}, My Html Progress Is: ${theHtml}, My Css Progress Is: ${css}, My Python Progress Is: ${python}`);
*/

// Another Ex
const user = {
  name: 'Mahmoud',
  gender: 'Male',
  age: 35,
  city: 'Assiut',
  website: 'Elzero',
  theme: 'Default',
  langs: {
    html: '70%',
    css: '80%',
    js: '10%'
  }
};

const {html, css, js} = user.langs;

console.log(`My Html Progress Is: ${html}, My Css Progress Is: ${css}, My JS Progress Is: ${js}`);