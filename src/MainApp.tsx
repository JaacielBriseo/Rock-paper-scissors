import { useAppSelector } from './store';
import { Header, RulesButton } from './components';
import { Rules, GameStarted, GameTable } from './views';

export const MainApp = () => {
	const { isRulesOpen, userChoose } = useAppSelector((state) => state.game);
	return (
		<>
			{isRulesOpen ? (
				<Rules />
			) : (
				<>
					<Header />
					{userChoose.value !== '' ? <GameStarted /> : <GameTable />}
					<RulesButton />
				</>
			)}
		</>
	);
};
