/*jslint browser:true */
/*global console*/

/* 
  Default Parameter
*/
					// By ES6
function showMyInfo(username = 'Default User', role = 'Default Role', theme = 'Default Theme') {
	// By If Condition
	/*
	username = username === undefined ? 'Default User' : username;
	role = role === undefined ? 'Default Role' : role;
	theme = theme === undefined ? 'Default Theme' : theme;
	*/

	// By True || False Pattern
	/*
	username = username || 'Default User';
	role = role || 'Default Role';
	theme = theme || 'Default Theme';
	*/

	return `Hello ${username}, Your Role Is: ${role}, Website Theme Is: ${theme}`;
}

console.log(showMyInfo());