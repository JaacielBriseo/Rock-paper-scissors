import { createSlice } from '@reduxjs/toolkit';
import { InitialValues } from '../interfaces';

const initialValues: InitialValues = {
	computerChoose: {
		img: '',
		name: '',
		customClassname: '',
	},
	isRulesOpen: false,
	result: undefined,
	score: 0,
	userChoose: {
		img: '',
		value: '',
	},
};
export const gameSlice = createSlice({
	name: 'game',
	initialState: initialValues,
	reducers: {
		toggleIsRulesOpen: (state: InitialValues) => {
			state.isRulesOpen = !state.isRulesOpen;
		},
		setUserChoose: (state: InitialValues, { payload }: { payload: InitialValues['userChoose'] }) => {
			state.userChoose = payload;
		},
		setComputerChoose: (state: InitialValues, { payload }: { payload: InitialValues['computerChoose'] }) => {
			state.computerChoose = payload;
		},
		setResult: (state: InitialValues) => {
			if (state.computerChoose.name === state.userChoose.value) {
				state.result = 'it"s a tie';
			} else if (state.userChoose.value === 'Rock' && state.computerChoose.name === 'Scissor') {
				state.result = 'you win';
			} else if (state.userChoose.value === 'Rock' && state.computerChoose.name === 'Paper') {
				state.result = 'you lose';
			} else if (state.userChoose.value === 'Paper' && state.computerChoose.name === 'Scissor') {
				state.result = 'you lose';
			} else if (state.userChoose.value === 'Paper' && state.computerChoose.name === 'Rock') {
				state.result = 'you win';
			} else if (state.userChoose.value === 'Scissor' && state.computerChoose.name === 'Rock') {
				state.result = 'you lose';
			} else if (state.userChoose.value === 'Scissor' && state.computerChoose.name === 'Paper') {
				state.result = 'you win';
			}
		},
		setScore: (state: InitialValues) => {
			if (state.result === 'you win') {
				state.score += 1;
			} else if (state.result === 'you lose') {
				state.score = state.score - 1;
			} else {
				state.score = state.score;
			}
		},
		playAgain: (state: InitialValues) => {
			state = initialValues
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggleIsRulesOpen, setUserChoose, setComputerChoose, setResult, setScore, playAgain } =
	gameSlice.actions;
