import { GameTable, Header, RulesButton } from './components';
import { Rules } from './views';

export const MainApp = () => {

	return (
		<>
			{'' ? (
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
