import { useAppSelector, useAppDispatch, toggleIsRulesOpen } from '../store';

export const RulesButton = () => {
	const { isRulesOpen } = useAppSelector((state) => state.game);
	const dispatch = useAppDispatch();
	return (
		<div className={`flex justify-center mt-12 md:fixed md:bottom-8 md:right-8 ${isRulesOpen && 'hidden'}`}>
			<button onClick={() => dispatch(toggleIsRulesOpen())} className='rulesButton'>
				Rules
			</button>
		</div>
	);
};
