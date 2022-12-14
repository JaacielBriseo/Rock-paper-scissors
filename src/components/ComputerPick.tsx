import { ComputerPickProps } from '../interfaces';

export const ComputerPick = ({ computerChoose }: ComputerPickProps) => {
	return (
		<div className='flex flex-col items-center space-y-4'>
			{computerChoose.img !== '' ? (
				<img
					src={computerChoose.img}
					alt={computerChoose.name}
					className={`imgPick ${computerChoose.customClassname}`}
				/>
			) : (
				<span className='w-20 h-20 rounded-full bg-gray-800'></span>
			)}

			<p>The house picked</p>
		</div>
	);
};
