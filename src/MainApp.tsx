import { useAppSelector } from './store';
import { Header, Result, RulesButton } from './components';
import { Rules, GameStarted, GameTable } from './views';

export const MainApp = () => {
	const { isRulesOpen, userChoose, result } = useAppSelector((state) => state.game);
	return (
		<>
			{isRulesOpen && <Rules />}
			<div className={`overflow-hidden ${isRulesOpen && 'brightness-50'}`}>
				<Header />
				{userChoose.value !== '' ? <GameStarted /> : <GameTable />}
				{result && <Result />}
			</div>
			<RulesButton />
		</>
	);
};
