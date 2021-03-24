/*jslint browser:true */
/*global console*/

/*
  Arrow Function Syntax
  Identifier => Expression
*/

//////////////////////// #01 - Regular Function With No Param /////////////////////////
let regularOne = function () {
    return 2;
};
console.log(regularOne());

/////////////////////// #01 - Arrow Function With No Param  ///////////////////////////
//let arrowOne = () => 2;
let arrowOne = _ => 2;
console.log(arrowOne());

/////////////////////// #02 - Regular Function With One Param /////////////////////////
let regularTwo = function (param) {
    return param * 2;
};
console.log(regularTwo(16));

/////////////////////// #02 - Arrow Function With One Param //////////////////////////
//let arrowTwo = (param) => param * 2;
let arrowTwo = param => param * 2;
console.log(arrowTwo(16));

/////////////////// #03 - Regular Function With Multiple Param ///////////////////////
let regularThree = function (param1, param2) {
    return param1 * param2;
};
console.log(regularThree(10, 2));

/////////////////// #03 - Arrow Function With Multiple Param ////////////////////////
let arrowThree = (param1, param2) => param1 * param2;
console.log(arrowThree(10, 2));
