import { UserPickProps } from '../interfaces';
import { useAppSelector } from '../store';

export const UserPick = ({ img, value }: UserPickProps) => {
	const { result } = useAppSelector((state) => state.game);

	return (
		<div className='flex flex-col items-center space-y-4 animate__animated animate__rollIn'>
			<img
				src={img}
				alt={value}
				className={`imgPick ring-${value}Ring 
				${result === 'you win' && 'animate-bounce'}
				${result === 'you lose' || result === 'it"s a tie' ? 'animate__animated animate__hinge animate__slower' : ''}
			`}
			/>
			<p>You picked</p>
		</div>
	);
};
