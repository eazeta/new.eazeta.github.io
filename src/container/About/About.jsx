import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { images } from '../../constants';
import { AppWrap } from '../../Wrapper';

const abouts = [
	{
		title: 'Physics',
		description:
			'I graduated from the University of Nottingham with a first class honours in Physics. My passion for tech grew during my time at Nottingham as I was exposed to technologies such as MATLAB and Python. Additionally, studing modules like Thermal and Statistical Phyiscs, aswell as Computing for Physical Science equipped me with the computational and statistical tools. Another thing that helped was that my best friends were in a CS course so I picked up a lot from them.',
		imgURL: images.quantum,
	},
	{
		title: 'Web Development',
		description:
			'When I finished university, I decided that tech was the route I wanted to go down so I bought the Codecademy Full Stack Engineering course. This taught me the basics of making websites using HTML5, CSS and Javascript. I then went on to learn about the React framework through Youtube and created this site. Even in my current job as a Technical Business Analyst, I still use the concepts I learned in that course in my day to day job.',
		imgURL: images.webdev,
	},
	{
		title: 'Data Science',
		description:
			'One of my friends from university really inspires me and she works in Data Engineering. She constantly talks about how exciting AI is and how it can shape the future of Humanity. Naturally my curiosity led me to buying the Supervised Machine Learning: Regression and Classification course by DeepLearning.AI & Standford University. Here I learned an incredible amount about schkit-learn, numpy and matplotlib.',
		imgURL: images.AI,
	},
];

const About = () => {
	return (
		<div className='app__profiles-container'>
			<h2 className='head-text'>About</h2>
			<div className='app__profiles'>
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className='app__profile-item'
						key={about.title + index}
					>
						<img src={about.imgURL} alt={about.title} />
						<h2 className='bold-text' style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className='p-text' style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default AppWrap(About, 'about');
