import { useEffect } from 'react';
import { useAppSelector } from '../store';

export const useScoreStorage = () => {
	const { score } = useAppSelector((state) => state.game);

	useEffect(() => {
		localStorage.setItem('score', score.toString());
	}, [score]);
};
