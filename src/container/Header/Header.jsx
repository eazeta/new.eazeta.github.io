import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { ImTwitter, ImLinkedin2, ImGithub } from 'react-icons/im';

import { AppWrap } from '../../Wrapper';

import { images } from '../../constants';
import './Header.scss';

const Header = () => {
	return (
		<div className='app__header'>
			<div className='app__flex app__header-mini'>
				<motion.div
					whileInView={{ x: [-100, 0], opacity: [0, 1] }}
					transition={{ duration: 1 }}
					className='app__header-info'
				>
					<div className='app__header-badge'>
						<div className='badge-cmp app__flex'>
							<div style={{ marginLeft: 20 }}>
								<p className='p-text'>Hello, my name is</p>
								<h1 className='head-text'>Emmanuel</h1>
							</div>
						</div>
						<div className='tag-cmp app__flex'>
							<p className='p-text'>Technical Business Analyst</p>
							<p className='p-text'>Web Development</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 1, delayChildren: 1 }}
					className='app__header-img'
				>
					<img src={images.profile} alt='profile_photo' />
				</motion.div>
			</div>
			<div className='app__flex'>
				<motion.div
					whileInView={{ opacity: [0, 1] }}
					whileHover={{ scale: 1.2 }}
					transition={{ duration: 0.5, type: 'tween' }}
					className='app__header-social'
				>
					<a href='https://www.linkedin.com/in/eazeta/' target='_blank' rel='noreferrer'>
						{' '}
						<ImLinkedin2 />{' '}
					</a>
				</motion.div>
				<motion.div
					whileInView={{ opacity: [0, 1] }}
					whileHover={{ scale: 1.2 }}
					transition={{ duration: 0.5, type: 'tween' }}
					className='app__header-social'
				>
					<a href='https://github.com/eazeta' target='_blank' rel='noreferrer'>
						{' '}
						<ImGithub />{' '}
					</a>
				</motion.div>
				<motion.div
					whileInView={{ opacity: [0, 1] }}
					whileHover={{ scale: 1.2 }}
					transition={{ duration: 0.5, type: 'tween' }}
					className='app__header-social'
				>
					<a href='https://twitter.com/emanzyy' target='_blank' rel='noreferrer'>
						{' '}
						<ImTwitter />{' '}
					</a>
				</motion.div>
			</div>
		</div>
	);
};

export default AppWrap(Header, 'home');
