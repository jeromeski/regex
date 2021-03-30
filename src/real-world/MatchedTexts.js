import React from 'react';

const MatchedTexts = () => {
	const phrase = 'First number: 32, and a second number 100. Here is the last number 15.';

	const regex = /\d{2}/g;

	const nums = phrase.match(regex);

	const sum = nums.reduce((acc, num) => parseInt(acc) + parseInt(num));

	console.log(nums, sum);

	return (
		<div>
			<h1>Capturing Matched Text</h1>
		</div>
	);
};

export default MatchedTexts;
