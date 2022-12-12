export const Header = () => {
	return (
		<div className='headerLayout'>
			<div className='flex flex-col -space-y-2 text-white uppercase -mt-1'>
				<p>Rock</p>
				<p>Paper</p>
				<p>Scissors</p>
			</div>
			<div className='flex flex-col items-center w-16 -space-y-1 bg-white rounded-md'>
				<p className='text-xs'>Score</p>
				<p className='text-3xl font-bold'>12</p>
			</div>
		</div>
	);
};
