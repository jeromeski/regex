import React from 'react';

const SpecifyingOptions = () => {
	let text1 =
		'Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Wednesday. Just be aware that somedays this Monday meeting might not occur. When that happens, we will make an announcement.';
	// Alternates         ↓      ↓       ↓
	// const regex1 = /monday|tuesday|wednesday|thursday|friday/gi;
	const regex1 = /\b[a-z]{3}day\b|\b[a-z]{4}day\b|\b[a-z]{6}day\b/gi;

	// pipes → |
	//  pipes splits regex to multiple alternatives
	//  "or "equivalent of javascript
	//  use pipes to propose alternate expressions

	console.log(text1.match(regex1));

	return <h1>Specifying Options</h1>;
};

export default SpecifyingOptions;
