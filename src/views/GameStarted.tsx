import { ComputerPick, UserPick } from '../components';
import { useAppSelector } from '../store';

export const GameStarted = () => {
	const { userChoose, computerChoose } = useAppSelector((state) => state.game);
	const { img, value } = userChoose;
	return (
		<div className='gameStarted'>
			<UserPick img={img} value={value} />
			<ComputerPick computerChoose={computerChoose} />
		</div>
	);
};
