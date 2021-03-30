import React from 'react';

const ValidatingDates = () => {
	const date = '4/06/1966';
	const regex = /^(3[01]|[12][0-9]|0?[1-9])[/](1[0-2]|0?[1-9])[/]([0-9]{2})?[0-9]{2}$/g;

	console.log(regex.test(date));
	return <div>Validating Dates</div>;
};

export default ValidatingDates;
