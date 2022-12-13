import { createContext } from 'react';

export interface GameContextProps {
	isLoading: boolean;
	userChoose: string;
}

export const GameContext = createContext<GameContextProps>({} as GameContextProps);
