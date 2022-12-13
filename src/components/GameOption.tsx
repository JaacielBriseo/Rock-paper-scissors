import { GameOptionProps } from '../interfaces';

export const GameOption = ({ customClassname, img, name }: GameOptionProps) => {
	return (
		<div className={`optionsBaseClass ${customClassname}`}>
			<button name={name}>
				<img src={img} alt={name} className='w-20 h-20 p-4' />
			</button>
		</div>
	);
};
