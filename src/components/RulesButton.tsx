import { Close } from '../assets';
import { useAppSelector, useAppDispatch, toggleIsRulesOpen } from '../store';

export const RulesButton = () => {
	const { isRulesOpen } = useAppSelector((state) => state.game);
	const dispatch = useAppDispatch();
	return (
		<div className='flex justify-center mt-12'>
			<button onClick={() => dispatch(toggleIsRulesOpen())} className='rulesButton'>
				{isRulesOpen ? <img src={Close} alt='' /> : 'Rules'}
			</button>
		</div>
	);
};
