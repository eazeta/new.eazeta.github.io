import React from 'react';
import './Footer.scss';
import { useState } from 'react';
import { AppWrap } from '../../Wrapper';

const Footer = () => {
	return (
		<>
			<h2 className='head-text'>Contact me!</h2>
			<div className='app__footer-cards'>
				<div className='app__footer-card'>
					<p>email</p>
					<a href='mailto:emmanuel.2000z@gmail.com'></a>
				</div>
				<div className='app__footer-form app__flex'>
					<div className='app__flex'></div>
				</div>
			</div>
		</>
	);
};

export default AppWrap(Footer, 'footer', 'app__whitebg');
