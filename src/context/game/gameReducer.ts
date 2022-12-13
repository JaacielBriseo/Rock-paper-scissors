import { UserSelection } from './GameProvider';

type GameAction = { type: 'setUserChoose'; payload: string };

export const gameReducer = (state: UserSelection, action: GameAction) => {
	switch (action.type) {
		case 'setUserChoose':
			return {
				...state,
				isLoading: false,
				userChoose: action.payload,
			};

		default:
			return state;
	}
};
