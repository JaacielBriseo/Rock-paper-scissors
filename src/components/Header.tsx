import { Logo } from '../assets';

export const Header = () => {
	return (
		<header className='headerLayout'>
			<img src={Logo} alt='Logo' />
			<div className='flex flex-col items-center w-16 -space-y-1 bg-white rounded-md'>
				<p className='text-xs'>Score</p>
				<p className='text-3xl font-bold'>12</p>
			</div>
		</header>
	);
};
