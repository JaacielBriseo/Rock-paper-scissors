import { RulesImg, Close } from '../assets';
export const Rules = () => {
	
	return (
		<div className='rulesModal'>
			<h1 className='text-3xl'>RULES</h1>
			<img src={RulesImg} alt='Rules' />
			<button>
				<img src={Close} alt='Close' />
			</button>
		</div>
	);
};
