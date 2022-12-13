import { Rock } from '../assets';

export const UserPick = () => {
	return (
		<div className='userPick flex justify-between text-white'>
			<div className='flex flex-col items-center space-y-4'>
				<img src={Rock} alt='' className='w-20 h-20' />
				<p>You picked</p>
			</div>
			<div className='flex flex-col items-center space-y-4'>
				<span className='w-20 h-20 rounded-full bg-gray-800'></span>
				<p>The house picked</p>
			</div>
		</div>
	);
};
