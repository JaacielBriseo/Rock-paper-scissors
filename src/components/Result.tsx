import { playAgain, useAppSelector, useAppDispatch } from '../store';

export const Result = () => {
	const { result } = useAppSelector((state) => state.game);
	const dispatch = useAppDispatch();

	return (
		<div className='flex flex-col mx-auto -mt-20 w-1/2 space-y-5 uppercase'>
			<h1 className='text-5xl text-white w-full text-center'>{result}</h1>
			<button
				onClick={() => dispatch(playAgain())}
				className='bg-white text-DarkText mx-auto w-full p-2 rounded-lg tracking-widest md:w-3/12 hover:text-red-600'
			>
				Play again
			</button>
		</div>
	);
};
