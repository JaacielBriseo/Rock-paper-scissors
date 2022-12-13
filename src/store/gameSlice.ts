import { createSlice } from '@reduxjs/toolkit';
import { InitialValues } from '../interfaces';

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
	reducers: {
		toggleIsRulesOpen: (state) => {
			state.isRulesOpen = !state.isRulesOpen;
		},
		setUserChoose: (state,{payload}) => {
			state.userChoose = payload
		}
	},
});

// Action creators are generated for each case reducer function
export const { toggleIsRulesOpen,setUserChoose } = gameSlice.actions;
