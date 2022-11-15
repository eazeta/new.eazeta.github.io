import Button from '../components/Button';

const NavBar = () => {
	return (
		<div>
			<div className='Buttons'>
				<Button text='Skills' />
				<Button text='Relevant Experience' />
				<Button text='Education' />
				<Button text='Employment' />
				<Button text='Uni Projects' />
				<Button text='Interests' />
			</div>
		</div>
	);
};

export default NavBar;
