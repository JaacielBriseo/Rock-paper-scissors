import { GameContext } from './GameContext';

export interface UserSelection {
	isLoading:boolean;
	userChoose:string;
}
interface Props {
	children: JSX.Element | JSX.Element[];
}
export const GameProvider = ({ children }: Props) => {
	return <GameContext.Provider value={{ isLoading: false, userChoose: '' }}>{children}</GameContext.Provider>;
};
