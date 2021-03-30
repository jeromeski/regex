import React from 'react';

const TestingPasswords = () => {
	const data1 = 'Belowsubzero123!';
	const pwordLength = /^.{8,32}$/;
	const hasUpper = /[A-Z]/;
	const hasLower = /[a-z]/;
	const hasNums = /[0-9]/;
	const special = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

	const pwordTest = () => {
		if (
			pwordLength.test(data1) &&
			hasUpper.test(data1) &&
			hasLower.test(data1) &&
			hasNums.test(data1) &&
			special.test(data1)
		) {
			console.log('Password Passed');
		} else {
			console.log('Password Failed');
		}
	};

	pwordTest();

	return (
		<div>
			<h1>Testing Passwords</h1>
		</div>
	);
};

export default TestingPasswords;
