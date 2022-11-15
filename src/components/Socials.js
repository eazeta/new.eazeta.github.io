import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Socials = () => {
	return (
		<div>
			<IconContext.Provider
				value={{
					color: 'orange',
					size: '5rem',
				}}
			>
				<FaGithub />
				<AiFillLinkedin />
				<AiFillTwitterCircle />
			</IconContext.Provider>
		</div>
	);
};

export default Socials;
