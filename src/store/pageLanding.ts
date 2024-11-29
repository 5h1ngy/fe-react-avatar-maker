import { createSlice } from '@reduxjs/toolkit';

export type History = { label: string, id: string, current: boolean }

export interface State {
    history: History[],
}

const landingSlice = createSlice({
    name: 'page/landing',
    initialState: {
        history: [],
    } as State,
    reducers: {
        setHistory: (state, action) => {
            state.history = action.payload;
        },
        clearHistory: (state) => {
            state.history = [];
        },
    }
});

export const actions = {
    ...landingSlice.actions
};

export default landingSlice.reducer;
