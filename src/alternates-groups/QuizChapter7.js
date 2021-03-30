import React from 'react';

const QuizChapter7 = () => {
	let data = [
		'Jensen, Dale',
		'Smith, Andrea',
		'Jorgensen, Michael',
		'Vasefi, Annika',
		'Lopez, Monica',
		'Crockett, Steven'
	];

	// exec will recognize a group as an item in an array

	const regex = /(\w+), (\w+)/;
	const newName = data.map((name) => {
		const arr = regex.exec(name);
		if (arr !== null) {
			return arr[2] + ' ' + arr[1];
		} else {
			return null;
		}
	});

	console.log(newName);

	return (
		<div>
			<h1>Quiz Chapter 7</h1>
		</div>
	);
};

export default QuizChapter7;
