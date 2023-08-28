import React from 'react';
import { AppWrap } from '../../Wrapper';
import ReactPlayer from 'react-player';
import './Interests.scss';

const Interests = () => {
	return (
		<div className='app__interests'>
			<h2 className='head-text'>Interests (WIP)</h2>
			<h3 className='subhead-text'>Music Production</h3>
			<p className='p-text'>I like music</p>
			{/*<div className='app__flex'>
				<span>
					<ReactPlayer url='https://soundcloud.com/project_emanzyy/one-call-remix-prodby-project-emanzyy' />
				</span>
				<span>
					<ReactPlayer url='https://soundcloud.com/project_emanzyy/cliffside-sorrows-prod-by-project-emanzyy' />
				</span>
  </div>*/}
			<h3 className='subhead-text'>Gym</h3>
			<p>I like gym</p>
			<h3 className='subhead-text'>Memes</h3>
			<p>I like memes</p>
		</div>
	);
};

export default AppWrap(Interests, 'interests');
