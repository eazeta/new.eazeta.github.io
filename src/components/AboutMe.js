import Socials from './Socials';
import Skills from './Skills';
import MyProfile from '../resources/images/profile.png';
const AboutMe = () => {
	return (
		<div className='profile'>
			<img src={MyProfile} alt='Emmanuel Zeta' />
			<h3>
				(+44)7468905860 | <a href='mailto:emmanuel.2000z@gmail.com'>Email Me!</a>
			</h3>
			<p>London - United Kingdom</p>
			<p>Physics Graduate | Techincal Business Analyst (Web Dev)</p>
			<Socials />
			<Skills />
		</div>
	);
};

export default AboutMe;
