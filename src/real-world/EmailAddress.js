import React from 'react';

const EmailAddress = () => {
	const data = 'something@domain.com';
	const regex = /^[^\s@]+@[^\s@.]+\.[^\s@]+$/g;
	// [] character set
	// [^\s@]+  doesn't include spaces and @sign and do this for all characters to the left side
	// match the literal @sign
	// [^\s@.]+  doesn't include spaces, @sign and period and do this for all characters to the left side
	// match the literal period

	console.log(regex.test(data));

	return (
		<div>
			<h1>Email Address</h1>
		</div>
	);
};

export default EmailAddress;
