import { Paper, Rock, Scissors } from '../assets';

export const gameOptions = {
	paper: {
		customClassname: '-top-5 ring-PaperRing',
		name: 'paper',
		img: Paper,
	},
	scissors: {
		customClassname: '-top-5 right-0 ring-ScissorRing',
		name: 'scissors',
		img: Scissors,
	},
	rock: {
		customClassname: 'bottom-4 left-[85px] ring-RockRing',
		name: 'rock',
		img: Rock,
	},
};
