import { UserPickProps } from '../interfaces';

export const UserPick = ({ img, value }: UserPickProps) => {
	return (
		<div className='flex flex-col items-center space-y-4'>
			<img src={img} alt={value} className={`imgPick ring-${value}Ring`} />
			<p>You picked</p>
		</div>
	);
};
