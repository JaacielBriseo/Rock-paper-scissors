import { gameOptions } from '../constants';
import { setComputerChoose, setUserChoose, useAppDispatch } from '../store';

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
		}, 1500);
	};

	return {
		startGame,
	};
};
