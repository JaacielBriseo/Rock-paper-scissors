import { RulesImg, Close } from '../assets';
interface Props {
	isRulesOpen: boolean;
	setIsRulesOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Rules = ({ setIsRulesOpen, isRulesOpen }: Props) => {
	const toggleRulesModal = () => {
		setIsRulesOpen(!isRulesOpen);
	};
	return (
		<div className='bg-white mx-auto h-screen flex flex-col items-center p-16 justify-between space-y-10'>
			<h1 className='text-3xl'>RULES</h1>
			<img src={RulesImg} alt='Rules' />
			<button onClick={toggleRulesModal}>
				<img src={Close} alt='Close' />
			</button>
		</div>
	);
};
