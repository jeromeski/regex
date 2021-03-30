import React from 'react';

const UsingReplace = () => {
	const data1 = '<b>This is bold</b>';
	data1.replace(/b>/g, 'strong>');
	console.log(data1);

	const names = ['Smith, James', 'Peterson, Alyssa', 'Johnson, Lynette', 'Lopez, Tony'];

	const newNames = names.map((name) => {
		return name.replace(/(\w+), (\w+)/, '$2 $1');
	});

	console.log(newNames);

	return <h1>Using Replace</h1>;
};

export default UsingReplace;
