interface Props {
	isRulesOpen: boolean;
	setIsRulesOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RulesButton = ({ setIsRulesOpen, isRulesOpen }: Props) => {
	const toggleRulesModal = () => {
		setIsRulesOpen(!isRulesOpen);
	};
	return (
		<div className='flex justify-center mt-20'>
			<button onClick={toggleRulesModal} className='rulesButton'>
				Rules
			</button>
		</div>
	);
};
