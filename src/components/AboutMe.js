import Socials from './Socials';
import MyProfile from '../resources/images/profile.png';
const AboutMe = () => {
	return (
		<div>
			<h2>Emmanuel Zeta</h2>
			<img src={MyProfile} />
			<h3>
				(+44)7468905860 | <a href='mailto:emmanuel.2000z@gmail.com'>Email Me!</a>
			</h3>
			<p>London - United Kingdom</p>
			<p>Physics Graduate | Techincal Business Analyst (Web Dev)</p>
			<Socials />
		</div>
	);
};

export default AboutMe;
