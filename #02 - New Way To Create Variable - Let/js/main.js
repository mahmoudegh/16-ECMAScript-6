/*jslint browser:true */
/*global console*/

/*
  let, const, var
  ===============
  var
  ===
  #01 - Function Scope
  #02 - Can ReDeclare
  #03 - Undefined When Accessing a Variable Before It Is Declared
  #04 - Create Properties in the Window Object

  let
  ===
  #01 - Block Scope
  #02 - Can't ReDeclare
  #03 - ReferenceError When Accessing a Variable Before It Is Declared
  #04 - Doesn't Create Properties in the Window Object

  const
  =====
  #01 - Block Scope
  #02 - Can't ReDeclare
  #03 - ReferenceError When Accessing a Variable Before It Is Declared
  #04 - Doesn't Create Properties in the Window Object

*/
////////////////////// #01 - var Function Scope //////////////////////////
function varTest() {

    'use strict';

    var x = 1;

    if (true) {

        var x = 2;

        console.log('Inside If Condition ' + x);
    }

    console.log('Outside If Condition ' + x); // function scope

    return 'Done';
}

console.log(varTest());

////////////////////////// #01 - let Block Scope /////////////////////////
function letTest() {

    'use strict';

    let y = 1;

    if (true) {

        let y = 2;

        console.log('Inside If Condition ' + y);
    }

    console.log('Outside If Condition ' + y); // Block scope

    return 'Done';
}

console.log(letTest());


////////////////////////// #02 - var ReDeclare ///////////////////////////
var a = 1;
var a = 2; // can redeclare
console.log(a);

////////////////////////// #02 - let ReDeclare ///////////////////////////
let b = 1;
//let b = 2; // can't redeclare
console.log(b);

//////////////// #03 - Accessing Variable Before Declaring ///////////////
console.log(c);
var c = 1; // Undefined

//////////////// #03 - Accessing Variable Before Declaring ///////////////
//console.log(d);
//let d = 1; // ReferenceError


///////////// #04 - Creating Properties in the Window Object /////////////
var osama = 1;
let ahmed = 2;
console.log(window.osama);
console.log(window.ahmed);
console.log(window);















////////////////////////////////////////////////////////Height
