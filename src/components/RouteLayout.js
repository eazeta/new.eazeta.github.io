import { NavLink, Outlet } from 'react-router-dom';

function RouteLayout() {
	return (
		<header>
			<nav>
				<h1>Emmanuel Zeta</h1>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='education'>Education</NavLink>
				<NavLink to='employment'>Employment</NavLink>
				<NavLink to='interests'>Interests</NavLink>
			</nav>

			<main>
				<Outlet />
			</main>
		</header>
	);
}

export default RouteLayout;
