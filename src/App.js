import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Employment from './components/Employment';
import Interests from './components/Interests';
import NavBar from './components/NavBar';

function App() {
	return (
		<div className='App'>
			<div className='info'>
				<NavBar />
				<Header />
				<AboutMe />
				<Skills />
				{/* <Relevant Experience /> */}
				<Education />
				<Employment />
				{/* <UniProject /> */}
				<Interests />
			</div>
		</div>
	);
}

export default App;
