/*jslint browser:true */
/*global console*/

/* Arrow Function */

////////////////////////// Regular Function ////////////////////////////
/*
let test = function () {
    document.getElementById('show').innerHTML = this;
}

// Window Object Called The Function
window.onload = test;

// Button Element Called The Function
document.getElementById('button').addEventListener('click', test);
*/

////////////////////////// Arrow Function ////////////////////////////
let test = () => document.getElementById('show').innerHTML = this;

// Window Object Called The Function
window.onload = test;

// Window Object Called The Function
document.getElementById('button').addEventListener('click', test);

////////////////////////// Regular Function ////////////////////////////
/*
function Person() {
    that = this;
    this.age = 0;
    setInterval(function() {
        that.age++;
        console.log(that.age);
        
    }, 1000);
}
let user = new Person();
*/
////////////////////////// Arrow Function ////////////////////////////
function Person() {
    this.age = 0;
    setInterval(() => {
        this.age++;
        console.log(this.age);
        
    }, 1000);
}
let user = new Person();