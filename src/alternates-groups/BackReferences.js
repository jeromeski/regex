import React from 'react';

const BackReferences = () => {
	// Backreference doesnt refer to the pattern but it refers to the actual text.
	// Groups capture text
	const data1 = 'a1c1d5c1d5b2b3d4';

	const regex1 = /([a-d][1-5])\1/g;

	console.log(regex1.exec(data1));
	// null - no match

	const data2 = 'a1a1c1d5c1d5b2b3d4';

	console.log(regex1.exec(data2));
	// match
	// ["a1a1", "a1", index: 0, input: "a1a1c1d5c1d5b2b3d4", groups: undefined]

	const data3 = '<strong>This is a strong tag</strong><i>this is italic</i>';

	const regex2 = /<(\w+>)[\w\s]+<\/\1/g;
	console.log(regex2.exec(data3));
	// ["<strong>This is a strong tag</strong>", "strong>", index: 0, input: "<strong>This is a strong tag</strong><i>this is italic</i>", groups: undefined]
	return (
		<div>
			<h1>Group Back References</h1>
		</div>
	);
};

export default BackReferences;
