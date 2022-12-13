export interface InitialValues {
	computerChoose: string;
	userChoose: string;
	isRulesOpen: boolean;
	score: number;
	result: undefined | 'win' | 'loose';
}
export interface GameOptionProps {
	customClassname: string;
	img: string;
	name: string;
}
