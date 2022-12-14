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
	},
});

// Action creators are generated for each case reducer function
export const { toggleIsRulesOpen, setUserChoose, setComputerChoose, setResult } = gameSlice.actions;
