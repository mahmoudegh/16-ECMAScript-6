/*jslint browser:true */
/*global console*/

/* 
  Template Literals [Template String]
*/

const theKind = 'Male';

/////////////////////////////// Regular Method /////////////////////////////////
let x = 'Hello Its Me ' + (theKind === 'Male' ? 'Mr' : 'Mrs') + ' Mahmoud \n' +
'Iam ' + theKind + ' \n' +
'Iam From Elzero Web School \n' +
'I Love All My Followers';

console.log(x);

////////////////////////////// Template Literals //////////////////////////////
let y = `Hello Its Me ${theKind === 'Male' ? 'Mr' : 'Mrs'} Mahmoud
Iam ${theKind}
Iam From Elzero Web School
I Love All My Followers`;

console.log(y);

/////////////////////////////////////////////////////////////////////////////////

let username = 'Mahmoud',
    age = 34;
const  myHtmlMarkup = `
	<div class='card'>
		<h2 class='name'>${username}</h2>
		<span class='age'>${age}</span>
	</div>
	<a href="https://www.youtube.com/watch?v=zYMdEIPIf7c&list=PLDoPjvoNmBAy3siU1b04xY24ZlstofO9M&index=6"
       target="blank">Video Of The Course</a>
`;

document.body.innerHTML = myHtmlMarkup;