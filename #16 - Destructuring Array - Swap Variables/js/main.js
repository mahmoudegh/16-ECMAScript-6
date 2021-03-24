/*jslint browser:true */
/*global console*/

/* 
  Destructuring:
  - Object
  - Array
  - Parameter
*/

// Old Way
/*
 var book = 'Video',
     video = 'Book';

// Copy First Variable Into Stash
var stash = book;

// Swapping Variables
book = video;

// Get Book Value From Stash
video = stash;

console.log(`Book Is ${book} and Video is ${video}`);
*/

// New Way
var book = 'Video',
     video = 'Book';

[book, video] = [video, book];

//[video, book] = [book, video]; // The Same

console.log(`Book Is ${book} and Video is ${video}`);