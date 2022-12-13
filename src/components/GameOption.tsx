import { GameOptionProps } from '../interfaces';
import { setUserChoose, useAppDispatch } from '../store';

export const GameOption = ({ customClassname, img, name }: GameOptionProps) => {
	const dispatch = useAppDispatch();

	const startGame = ({ currentTarget }: any) => {
		dispatch(setUserChoose(currentTarget.name));
	};

	return (
		<div className={`optionsBaseClass ${customClassname}`}>
			<button onClick={startGame} name={name}>
				<img src={img} alt={name} className='w-20 h-20 p-4' />
			</button>
		</div>
	);
};
