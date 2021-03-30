import React from 'react';

const CapturingGroups = () => {
	// Capturing groups - not only capture parts of the pattern but can capture that portion for use later on if needed.

	const data1 = 'yoyo';

	const regex1 = /(yo)\1/g;
	// 1 refers to the first group 'yo'
	// captured not refers to the pattern, but the actual text
	console.log(data1.match(regex1));

	const data2 = '2018-9-8';

	const regex2 = /^(\d\d\d\d)[-./](\d{1,2})[-./]\2$/gi;
	console.log(data2.match(regex2));
	// No match, because regex captures the actual 9 instead of using the pattern.

	const regex3 = /^(\d\d\d\d)([-./])(\d{1,2})\2(\d{1,2})$/gi;
	console.log(data2.match(regex3));

	// tweak to non-capturing group
	const regex4 = /^(?:\d\d\d\d)([-./])(\d{1,2})\1(\d{1,2})$/gi;
	console.log(regex4.exec(data2));

	//  last capturing group modified to non capturing group
	const regex5 = /^(?:\d\d\d\d)([-./])(\d{1,2})\1(?:\d{1,2})$/gi;
	// last part is recognized by exec not to be captured
	console.log(regex5.exec(data2));

	return <h1>Capturing Groups</h1>;
};

export default CapturingGroups;
