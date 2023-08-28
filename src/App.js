import React from 'react';

import { About, Footer, Header, Skills, Employment, Interests } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<Header />
			<About />
			<Employment />
			<Skills />
			<Interests />
		</div>
	);
};

export default App;
