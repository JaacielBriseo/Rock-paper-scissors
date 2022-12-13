import { createSlice } from '@reduxjs/toolkit';
import { InitialValues } from '../interfaces/interfaces';

const initialValues: InitialValues = {
	computerChoose: '',
	isRulesOpen: false,
	result: undefined,
	score: 0,
	userChoose: '',
};
export const gameSlice = createSlice({
	name: 'game',
	initialState: initialValues,
	reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = gameSlice.actions;
