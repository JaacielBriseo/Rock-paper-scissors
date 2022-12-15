import { Logo } from '../assets';
import { useAppSelector } from '../store';
import { useScoreStorage } from '../hooks';

export const Header = () => {
	const { score } = useAppSelector((state) => state.game);
	useScoreStorage();
	return (
		<header className='headerLayout'>
			<img src={Logo} alt='Logo' className='w-1/3 md:w-3/12' />
			<div className='flex flex-col justify-center items-center w-16 -space-y-1 bg-white rounded-md md:w-24'>
				<p className='text-xs text-blue-800 uppercase md:text-sm'>Score</p>
				<p className='text-3xl font-bold text-DarkText md:text-5xl'>{score}</p>
			</div>
		</header>
	);
};
