import Acturis from './EmploymentHistory/Acturis';
import PoW from './EmploymentHistory/PoW';
import Informa from './EmploymentHistory/Informa';

const Employment = () => {
	return (
		<div>
			<h2>Employment History</h2>
			<Acturis />
			<PoW />
			<Informa />
		</div>
	);
};

export default Employment;
