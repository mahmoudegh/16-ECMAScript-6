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
		js: ['Vuejs', 'Reactjs', 'Angular']
	}
};

// const {username, city, skills: {html, css, js: [one, two, three]}} = user;

// Without Destructuring
/*
function showMyInfo(user) {
	console.log(`My Name Is ${user.username}, and I Live In ${user.city}.`);
  console.log(`My Html Skills Progress Is ${user.skills.html}, and Css is ${user.skills.css}.`);
  console.log(`I Have Knowledge in Js Frameworks Like ${user.skills.js[0]}, ${user.skills.js[1]}, ${user.skills.js[2]}.`);
}
*/

// By Destructuring
function showMyInfo({username, city, skills: {html, css, js: [one, two, three]}}) {
	console.log(`My Name Is ${username}, and I Live In ${city}.`);
  console.log(`My Html Skills Progress Is ${html}, and Css is ${css}.`);
  console.log(`I Have Knowledge in Js Frameworks Like ${one}, ${two}, ${three}.`);
}

showMyInfo(user);

