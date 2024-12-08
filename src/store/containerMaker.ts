import { createSlice } from '@reduxjs/toolkit';

export interface State {
    item: any | null,
}

const slice = createSlice({
    name: 'container/make',
    initialState: {
        item: null,
    } as State,
    reducers: {
        // addItem: (state, action) => {
        //     state.occurrences.push(action.payload);
        // },
        // removeItem: (state, action) => {
        //     state.occurrences = state.occurrences.filter(item => item.id !== action.payload.id);
        // },
        // updateItem: (state, action) => {
        //     const index = state.occurrences.findIndex(item => item.id === action.payload.id);
        //     if (index !== -1) {
        //         state.occurrences[index] = action.payload;
        //     }
        // },
        // clearItems: (state) => {
        //     state.occurrences = [];
        // },
    },
});

export const actions = {
    ...slice.actions,
};

export default slice.reducer;
