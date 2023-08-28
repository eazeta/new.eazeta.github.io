import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrap } from '../../Wrapper';
import './Employment.scss';
import jobList from './jobList';

const Employment = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const handleClick = index => {
		setCurrentIndex(index);
	};
	const currentJob = jobList[currentIndex];
	return (
		<>
			<h2 className='head-text' style={{ paddingBottom: '2.5rem' }}>
				Employment
			</h2>
			<div className='app__testimonial-item app__flex'>
				<img
					src='https://img.freepik.com/premium-vector/smiling-face-sticker-yellow-symbol-with-black-outline-cute-smile-sticker-pink-background-groovy-aesthetic-vector-design-element_642540-797.jpg?w=2000'
					alt={`Logo for ${currentJob.title}`}
				/>
				<div className='app__testimonial-content'>
					<div>
						<h4 className='bold-text'>{currentJob.title}</h4>
						<h5 className='p-text'>{currentJob.date}</h5>
					</div>
					{currentJob.description.split('\n').map((line, lineIndex) => (
						<p className='p-text' key={lineIndex}>
							{line}
						</p>
					))}
				</div>
			</div>
			<div className='app__testimonial-counter app__flex'>
				<p>
					{currentIndex + 1}/{jobList.length}
				</p>
			</div>
			<div className='app__testimonial-btns app__flex'>
				<div
					className='app__flex'
					onClick={() => handleClick(currentIndex === 0 ? jobList.length - 1 : currentIndex - 1)}
				>
					<HiChevronLeft />
				</div>
				<div
					className='app__flex'
					onClick={() => handleClick(currentIndex === jobList.length - 1 ? 0 : currentIndex + 1)}
				>
					<HiChevronRight />
				</div>
			</div>
		</>
	);
};

export default AppWrap(Employment, 'employment');
