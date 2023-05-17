import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Employment from './components/Employment';
import Interests from './components/Interests';
import RouteLayout from './components/RouteLayout';
import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RouteLayout />}>
			<Route path='/' element={<AboutMe />} />
			<Route path='education' element={<Education />} />
			<Route path='employment' element={<Employment />} />
			<Route path='interests' element={<Interests />} />
		</Route>
	)
);

function App() {
	return (
		<div className='App'>
			<div className='info'>
				<RouterProvider router={router} />
				{/* <NavBar /> */}
				{/* <Header /> */}
				{/* <AboutMe /> */}
				{/* <Skills /> */}
				{/* <Relevant Experience /> */}
				{/* <Education /> */}
				{/* <Employment /> */}
				{/* <UniProject /> */}
				{/* <Interests /> */}
			</div>
		</div>
	);
}

export default App;
