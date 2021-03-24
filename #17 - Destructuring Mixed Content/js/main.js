/*jslint browser:true */
/*global console*/

/* 
  Destructuring:
  - Object
  - Array
  - Parameter
*/

const user = {
	username: 'Mahmoud',
	city: 'Assiut',
	skills: {
		html: '80%',
		css: '85%',
		js: {
			frameone: 'Vuejs',
			frametwo: 'Reactjs',
			framethree: 'Angularjs'
		}
	}
};

const {username, city, skills: {html, css, js: {frameone: one, frametwo: two, framethree: three}}} = user;

console.log(`My Name Is ${username}, and I Live In ${city}.`);
console.log(`My Html Skills Progress Is ${html}, and Css is ${css}.`);
console.log(`I Have Knowledge in Js Frameworks Like ${one}, ${two}, ${three}.`);