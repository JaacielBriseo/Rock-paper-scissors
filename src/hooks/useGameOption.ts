import { gameOptions } from '../constants';
import { setComputerChoose, setResult, setUserChoose, useAppDispatch, useAppSelector } from '../store';

export const useGameOption = (img: string) => {
	const dispatch = useAppDispatch();
	const values = Object.values(gameOptions);
	const randomValue = values[Math.floor(Math.random() * values.length)];
	const startGame = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(
			setUserChoose({
				img,
				value: currentTarget.name,
			})
		);
		setTimeout(() => {
			dispatch(setComputerChoose(randomValue));
			dispatch(setResult());
		}, 1500);
	};

	return {
		startGame,
	};
};
