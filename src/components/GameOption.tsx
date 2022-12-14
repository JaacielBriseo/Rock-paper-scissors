import { GameOptionProps } from '../interfaces';
import { useGameOption } from '../hooks';

export const GameOption = ({ customClassname, img, name }: GameOptionProps) => {
	const { startGame } = useGameOption(img);

	return (
		<div className={`optionsBaseClass ${customClassname}`}>
			<button onClick={startGame} name={name}>
				<img src={img} alt={name} className='w-20 h-20 p-4' />
			</button>
		</div>
	);
};
