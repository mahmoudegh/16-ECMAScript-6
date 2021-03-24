/*
  Generators Part 2
  Functionality & Return
*/

// function orderBook() {
//   window.alert("you clicked on button to order a book");
//   console.log("you clicked on button to order a book");

//   window.alert("you added the book to cart");
//   console.log("you added the book to cart");

//   window.alert("Payment is done");
//   console.log("Payment is done");
// }

// let ordering = orderBook();

/////////////////////////////////////////////////////////////////////////////

// function* orderBook() {
//   window.alert("you clicked on button to order a book");
//   console.log("you clicked on button to order a book");

//   window.alert("you added the book to cart");
//   console.log("you added the book to cart");

//   window.alert("Payment is done");
//   console.log("Payment is done");
// }

// let ordering = orderBook();

// ordering.next();

/////////////////////////////////////////////////////////////////////////////

function* mySkills() {
  yield "HTML";
  yield "CSS";
  yield "PHP";
  yield "Python";
  yield "JavaScript";
}

let theSkills = mySkills();

for (let skill of theSkills) {
  // Loop on iterator
  console.log(skill);
}

console.log(`${"#".repeat(26)}`);

for (let s of mySkills()) {
  // Loop on generator
  console.log(s);
}

console.log(`${"#".repeat(26)}`); //////////////////////////////////////////

// Test Return
function* sayNames() {
  yield "Mahmoud";
  yield "Osama";
  return "Sayed"; // Can't use return with yield
  yield "Eman";
}

let theNames = sayNames();
console.log(theNames.next());
console.log(theNames.next());
console.log(theNames.next());
console.log(theNames.next());
