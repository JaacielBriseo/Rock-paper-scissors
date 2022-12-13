import { GameTable, Header, RulesButton } from './components';
import { Rules, UserPick } from './views';
import { useAppSelector } from './store/hookTypes';

export const MainApp = () => {
	const { isRulesOpen, userChoose } = useAppSelector((state) => state.game);
	return (
		<>
			{isRulesOpen ? (
				<Rules />
			) : (
				<>
					<Header />
					{userChoose !== '' ? <UserPick /> : <GameTable />}

					<RulesButton />
				</>
			)}
		</>
	);
};
