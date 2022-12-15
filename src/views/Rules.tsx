import { Close, RulesImg } from '../assets';
import { toggleIsRulesOpen } from '../store';
import { useAppDispatch } from '../store/hookTypes';
export const Rules = () => {
	const dispatch = useAppDispatch();
	return (
		<div className='rulesModal'>
			<div className='flex justify-between w-full'>
				<h1 className='text-3xl'>RULES</h1>
				<button onClick={() => dispatch(toggleIsRulesOpen())}>
					<img src={Close} alt='' />
				</button>
			</div>
			<img src={RulesImg} alt='Rules' />
		</div>
	);
};
