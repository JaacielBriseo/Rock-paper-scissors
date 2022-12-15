import { Paper, Rock, Scissors } from '../assets';

export const gameOptions = {
	paper: {
		customClassname: '-top-5 ring-PaperRing',
		name: 'Paper',
		img: Paper,
	},
	scissors: {
		customClassname: '-top-5 right-0 ring-ScissorRing',
		name: 'Scissor',
		img: Scissors,
	},
	rock: {
		customClassname: 'bottom-4 left-[85px] ring-RockRing md:left-[105px]',
		name: 'Rock',
		img: Rock,
	},
};
