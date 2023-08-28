import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../Wrapper';
import {
	DiJavascript1,
	DiHtml5,
	DiCss3,
	DiNodejsSmall,
	DiPython,
	DiReact,
	DiGit,
} from 'react-icons/di';
import { SiNumpy, SiPandas } from 'react-icons/si';
import './Skills.scss';

const skillSet = [
	{
		name: 'Javascript',
		color: '#f0db4f',
		icon: <DiJavascript1 />,
	},
	{
		name: 'HTML5',
		color: '#E34F26',
		icon: <DiHtml5 />,
	},
	{
		name: 'CSS3',
		color: '#1572B6',
		icon: <DiCss3 />,
	},
	{
		name: 'NodeJS',
		color: '#68a063',
		icon: <DiNodejsSmall />,
	},
	{
		name: 'Python',
		color: '#306998',
		icon: <DiPython />,
	},
	{
		name: 'React',
		color: '#61DAFB',
		icon: <DiReact />,
	},
	{
		name: 'Pandas',
		color: '#150458',
		icon: <SiPandas />,
	},
	{
		name: 'Git',
		color: '#F05032',
		icon: <DiGit />,
	},
	{
		name: 'NumPy',
		color: '#4B8BBE',
		icon: <SiNumpy />,
	},
	{
		name: 'Matlab',
		color: 'orange',
		icon: 'Matlab',
	},
];

const Skills = () => {
	return (
		<div className='app__skills'>
			<h2 className='head-text'>Skills</h2>
			<div className='app__skills-container'>
				<motion.div className='app__skills-list'>
					{skillSet.map(skill => (
						<motion.div
							whileHover={{ scale: 1.2 }}
							whileInView={{ opacity: [0, 1] }}
							className='app__skills-item app__flex'
							key={skill.name}
						>
							<div className='app__flex' style={{ color: 'white', backgroundColor: skill.color }}>
								{skill.icon}
							</div>
							<p className='p-text'>{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default AppWrap(Skills, 'skills');
