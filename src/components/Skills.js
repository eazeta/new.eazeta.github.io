import { DiHtml5, DiCss3, DiReact, DiJavascript1, DiPython, DiGit } from 'react-icons/di';
import { IconContext } from 'react-icons';

const Skills = () => {
	return (
		<div>
			<IconContext.Provider
				value={{
					size: '5rem',
					color: 'black',
				}}
			>
				<h2>Programming Languages and Tools </h2>
				<DiReact />
				<DiHtml5 />
				<DiCss3 />
				<DiJavascript1 />
				<DiGit />
				<DiPython />
			</IconContext.Provider>
		</div>
	);
};

export default Skills;
