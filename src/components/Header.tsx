import { Logo } from '../assets';
import { useAppSelector } from '../store/hookTypes';

export const Header = () => {
	const { score } = useAppSelector((state) => state.game);
	return (
		<header className='headerLayout'>
			<img src={Logo} alt='Logo' />
			<div className='flex flex-col items-center w-16 -space-y-1 bg-white rounded-md'>
				<p className='text-xs'>Score</p>
				<p className='text-3xl font-bold'>{score}</p>
			</div>
		</header>
	);
};
