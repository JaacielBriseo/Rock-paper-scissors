import { createSlice } from '@reduxjs/toolkit';
import { determineResult } from '../helpers';
import { InitialValues } from '../interfaces';

const initialValues: InitialValues = {
	computerChoose: {
		img: '',
		name: '',
		customClassname: '',
	},
	isRulesOpen: false,
	result: undefined,
	score: 0 | Number(localStorage.getItem('score')),
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
			state.result = determineResult(state.userChoose.value, state.computerChoose.name);
		},
		setScore: (state: InitialValues) => {
			if (state.result === 'it"s a tie') return;
			state.result === 'you win' ? (state.score += 1) : (state.score = Math.max(state.score - 1, 0));
		},
		playAgain: (state: InitialValues) => {
			state.computerChoose = initialValues.computerChoose;
			state.userChoose = initialValues.userChoose;
			state.result = initialValues.result;
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggleIsRulesOpen, setUserChoose, setComputerChoose, setResult, setScore, playAgain } =
	gameSlice.actions;
