import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
	return <button style={{ backgroundColor: color }}>{text}</button>;
};

Button.defaultProps = {
	color: 'orange',
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};

export default Button;
