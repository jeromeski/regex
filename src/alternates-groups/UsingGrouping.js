import React from 'react';

const UsingGrouping = () => {
	// Grouping Example 1
	const array1 = ['a5c3a2b1d1', 'a1e3a2b1a4', 'd5c3a2b1d1', 'a5c3a2b1d6', 'a6c312b1d1'];

	const regex1 = /([a-d][1-5]){5}/g;

	const newArr1 = [];

	array1.forEach((arr) => {
		if (arr.match(regex1)) newArr1.push(arr);
		return;
	});

	// prints → ["a5c3a2b1d1", "d5c3a2b1d1"]
	console.log(newArr1);

	//  Grouping Example 2
	const str = 'Today is monday and tomorrow is tuesdays and then we have wednesday.';

	let newStr = '';

	const regex2 = /\b(monday|tuesday|wednesday)\b/g;

	newStr = str.match(regex2);

	// prints → ["monday", "wednesday"]
	console.log(newStr);

	return (
		<div>
			<h1>UsingGrouping</h1>
		</div>
	);
};

export default UsingGrouping;
