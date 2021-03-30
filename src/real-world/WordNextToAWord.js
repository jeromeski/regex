import React from 'react';

const WordNextToAWord = () => {
	const str1 = 'Lets put several different words together and see what we can match';

	const regex1 = /\b(?:words\W+together)\b/g;
	console.log(str1.match(regex1));

	const str2 = 'Lets put several different words more text together and see what we can match';

	const regex2 = /\b(?:words\W+(?:\w+\W+){0,5}together)\b/g;
	console.log(str2.match(regex2));

	const str3 = 'Lets put several different together text more words and see what we can match';

	const regex3 = /\b(?:words\W+(?:\w+\W+){0,5}together)|(?:together\W+(?:\w+\W+){0,5}words)\b/g;
	console.log(str3.match(regex3));

	return (
		<div>
			<h1>Matching Word Next To Another Word</h1>
		</div>
	);
};

export default WordNextToAWord;
