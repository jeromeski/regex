import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BackReferences from './alternates-groups/BackReferences';
import CapturingGroups from './alternates-groups/CapturingGroups';
import LookAhead from './alternates-groups/LookAhead';
import QuizChapter7 from './alternates-groups/QuizChapter7';
import SpecifyingOptions from './alternates-groups/SpecifyingOptions';
import UsingGrouping from './alternates-groups/UsingGrouping';
import UsingGroupingInJs from './alternates-groups/UsingGroupingInJs';
import Home from './Home';
import EmailAddress from './real-world/EmailAddress';
import MatchedTexts from './real-world/MatchedTexts';
import TestingPasswords from './real-world/TestingPasswords';
import TwitterHandle from './real-world/TwitterHandle';
import UsingReplace from './real-world/UsingReplace';
import ValidatingDates from './real-world/ValidatingDates';
import WordNextToAWord from './real-world/WordNextToAWord';

const App = () => {
	return (
		<div className='container'>
			<BrowserRouter>
				<Route exact path='/' component={Home} />
				<Route exact path='/specifying-options' component={SpecifyingOptions} />
				<Route exact path='/using-grouping-1' component={UsingGrouping} />
				<Route exact path='/using-grouping-js' component={UsingGroupingInJs} />
				<Route exact path='/capturing-groups' component={CapturingGroups} />
				<Route exact path='/back-references' component={BackReferences} />
				<Route exact path='/look-ahead' component={LookAhead} />
				<Route exact path='/quiz-7' component={QuizChapter7} />
				<Route exact path='/email-address' component={EmailAddress} />
				<Route exact path='/twitter-handle' component={TwitterHandle} />
				<Route exact path='/testing-passwords' component={TestingPasswords} />
				<Route exact path='/using-replace' component={UsingReplace} />
				<Route exact path='/word-next-word' component={WordNextToAWord} />
				<Route exact path='/validating-dates' component={ValidatingDates} />
				<Route exact path='/captured-texts' component={MatchedTexts} />
			</BrowserRouter>
		</div>
	);
};

export default App;
