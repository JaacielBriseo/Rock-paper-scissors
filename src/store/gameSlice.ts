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
	},
});

// Action creators are generated for each case reducer function
export const { toggleIsRulesOpen, setUserChoose, setComputerChoose } = gameSlice.actions;
