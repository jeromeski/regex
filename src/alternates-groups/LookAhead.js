import React from 'react';

const LookAhead = () => {
	// ?: ← non capturing
	// ?= ← look ahead

	const data1 = 'hellojavascript.com';

	const regex1 = /\w+(?=\.com)/g;
	console.log(regex1.exec(data1));
	// 0: "hellojavascript"
	// groups: undefined;
	// index: 0;
	// input: 'hellojavascript.com';

	const data2 = 'allthingsjavascript.com google.com youtube.com';

	const regex2 = /\w+(?=\.com)/g;

	console.log(data2.match(regex2));

	const data3 = 'http://allthingsjavascript.com http://google.com youtube.com';

	console.log(data3.match(regex2));

	const password = 'aH9kdfjN';

	const regex3 = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g;
	// We dont get a match if the lookahead groups dont have a match

	console.log(`Is there a match? ${regex3.test(password)}`);
	// 0: "aH9kdfjN"
	// groups: undefined
	// index: 0
	// input: "aH9kdfjN"

	//  NEGATIVE LOOK AHEAD  ------------------------ ↓
	const regex4 = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?!.*[0-9]).*$/g;
	// We dont get a match if the lookahead groups dont have a match

	console.log(`Is there a match? ${regex4.test(password)}`);
	return (
		<div>
			<h1>Look Ahead Groups</h1>
		</div>
	);
};

export default LookAhead;
