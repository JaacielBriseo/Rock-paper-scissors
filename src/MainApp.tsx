import { GameTable, Header, RulesButton } from './components';
import { Rules } from './views';
import { useAppSelector } from './store/hookTypes';

export const MainApp = () => {
	const {isRulesOpen} = useAppSelector(state=> state.game)
	return (
		<>
			{isRulesOpen ? (
				<Rules />
			) : (
				<>
					<Header />
					<GameTable />
					<RulesButton/>
				</>
			)}
		</>
	);
};
