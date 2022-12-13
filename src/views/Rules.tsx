import { RulesImg } from '../assets';
import { RulesButton } from '../components';
export const Rules = () => {
	
	return (
		<div className='rulesModal'>
			<h1 className='text-3xl'>RULES</h1>
			<img src={RulesImg} alt='Rules' />
			<RulesButton/>
		</div>
	);
};
