import { Paper, Rock, Scissors } from '../assets';

export const GameTable = () => {
	return (
		<div className='gameTable'>
			<div className='absolute -top-5 rounded-full bg-white ring-8 ring-PaperRing'>
				<button name='paper'>
					<img src={Paper} alt='Paper' className='w-20 h-20 p-4' />
				</button>
			</div>
			<div className='absolute -top-5 right-0 rounded-full bg-white ring-8 ring-ScissorRing'>
				<button name='scissors'>
					<img src={Scissors} alt='Scissors' className='w-20 h-20 p-4' />
				</button>
			</div>
			<div className='absolute bottom-4 left-[85px] rounded-full bg-white ring-8 ring-RockRing'>
				<button name='rock'>
					<img src={Rock} alt='Rock' className='w-20 h-20 p-4' />
				</button>
			</div>
		</div>
	);
};
