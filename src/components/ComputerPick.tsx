import { ComputerPickProps } from '../interfaces';
import { useAppSelector } from '../store';

export const ComputerPick = ({ computerChoose }: ComputerPickProps) => {
	const { result } = useAppSelector((state) => state.game);
	return (
		<div className={`flex flex-col items-center space-y-4 ${computerChoose.name === '' ? 'animate-pulse' : ''}`}>
			{computerChoose.img !== '' ? (
				<img
					src={computerChoose.img}
					alt={computerChoose.name}
					className={`imgPick ${computerChoose.customClassname} ${
						result === 'you lose' ? 'animate-bounce' : 'animate__animated animate__hinge'
					} ${result === 'it"s a tie' && 'animate__animated animate__hinge'}`}
				/>
			) : (
				<span className='w-20 h-20 rounded-full bg-gray-800'></span>
			)}

			<p>The house picked</p>
		</div>
	);
};
