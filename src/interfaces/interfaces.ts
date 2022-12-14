export interface InitialValues {
	userChoose: {
		value: string;
		img: string;
	};
	computerChoose: {
		name: string;
		img: string;
		customClassname: string;
	};
	isRulesOpen: boolean;
	score: number;
	result: undefined | 'you win' | 'you lose' | 'it"s a tie';
}
export interface GameOptionProps {
	customClassname: string;
	img: string;
	name: string;
}

export interface UserPickProps {
	img: string;
	value: string;
}

export interface ComputerPickProps {
	computerChoose: GameOptionProps;
}
