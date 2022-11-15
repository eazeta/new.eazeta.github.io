import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Employment from './components/Employment';
import Interests from './components/Interests';

function App() {
	return (
		<div className='App'>
			<Header />
			<AboutMe />
			<Skills />
			{/* <Relevant Experience /> */}
			<Education />
			<Employment />
			{/* <UniProject /> */}
			<Interests />
		</div>
	);
}

export default App;
