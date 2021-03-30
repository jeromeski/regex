import React from 'react';

const UsingGroupingInJs = () => {
	let data = '2018-3-9';

	const regex1 = /^([\d]{4})[./-]([0-9]{1,2})[./-]([0-9]{1,2})$/g;

	const arr = regex1.exec(data);
	console.log(arr);
	// prints
	// Array(4)
	// 0: "2018-3-9"
	// 1: "2018"
	// 2: "3"
	// 3: "9"
	console.log(regex1.test(data));
	const getNewArr = (res) => {
		if (res) {
			return {
				year: arr[1],
				month: arr[2],
				day: arr[3]
			};
		} else {
			console.log('Wrong date format');
		}
	};

	console.log(getNewArr(regex1.test(data)));

	return (
		<div>
			<h1>Using Grouping In JS</h1>
		</div>
	);
};

export default UsingGroupingInJs;
