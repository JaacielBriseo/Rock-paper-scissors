import { Paper, Rock, Scissors } from '../assets';

export const GameTable = () => {
	return (
		<div className='gameTable'>
			<div className='absolute -top-5 rounded-full bg-white ring-8 ring-PaperRing'>
				<img src={Paper} alt='Paper' className='w-20 h-20 p-4' />
			</div>
			<div className='absolute -top-5 right-0 rounded-full bg-white ring-8 ring-ScissorRing'>
				<img src={Scissors} alt='Scissors' className='w-20 h-20 p-4' />
			</div>
			<div className='absolute bottom-4 left-[85px] rounded-full bg-white ring-8 ring-RockRing'>
				<img src={Rock} alt='Rock' className='w-20 h-20 p-4' />
			</div>
			
		</div>
	);
};
