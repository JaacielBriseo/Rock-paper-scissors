import { useState } from 'react';
import { GameTable, Header, RulesButton } from './components';
import { Rules } from './views';

export const MainApp = () => {
	const [isRulesOpen, setIsRulesOpen] = useState(false);

	return (
		<>
			{isRulesOpen ? (
				<Rules isRulesOpen={isRulesOpen} setIsRulesOpen={setIsRulesOpen} />
			) : (
				<>
					<Header />
					<GameTable />
					<RulesButton setIsRulesOpen={setIsRulesOpen} isRulesOpen={isRulesOpen} />
				</>
			)}
		</>
	);
};
