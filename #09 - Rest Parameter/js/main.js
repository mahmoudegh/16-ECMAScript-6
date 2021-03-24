/*jslint browser:true */
/*global console*/

/* 
  Rest Parameter  ==> vs Spread Parameter
*/

function showInfo(a, b, c, ...MyParams) {
	
	console.log('Param a', a);
	console.log('Param b', b);
	console.log('Param c', c);
	console.log('Param MyParams', MyParams);

	return 'Console Output Done';
}

console.log(showInfo('One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'));



// Another Example
function addAll(...myParams) {

	let myNumber = 0;

	for (let myParam of myParams) myNumber += myParam;	

	return myNumber;
}

console.log(addAll(1));
console.log(addAll(1, 2, 3));
console.log(addAll(1, 2, 15, 20, 100));