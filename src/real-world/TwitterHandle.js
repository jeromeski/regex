import React from 'react';

const TwitterHandle = () => {
	const data1 = '@somehandle';
	const regex1 = /^@\w+$/g;

	console.log(regex1.test(data1));

	const data2 = '@somehandle';
	const regex2 = /^@?(\w+)$/g;

	console.log(regex2.exec(data2));

	return (
		<div>
			<h1>Twitter Handle</h1>
		</div>
	);
};

export default TwitterHandle;
