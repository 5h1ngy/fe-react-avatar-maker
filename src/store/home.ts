import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAll } from '@/services/all';
import { Item } from "@/services/all.types";

export enum STATUS { IDLE, LOADING, SUCCESS, FAILED }

export interface State {
    occurrences: Array<Item>,
    status: STATUS,
    error: any,
}

export interface Actions {
    doGetAll: typeof doGetAll,
}

// Definisci la chiamata asincrona per ottenere i dati dal server
const doGetAll = createAsyncThunk('home/doGetAll', async () => await getAll());

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        occurrences: [],
        status: STATUS.IDLE,
        error: null,
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
    extraReducers: (builder) => {
        builder
            .addCase(doGetAll.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(doGetAll.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.occurrences = action.payload.data;
            })
            .addCase(doGetAll.rejected, (state, action) => {
                state.status = STATUS.FAILED;
                state.error = action.error.message;
            });
    },
});

export const actions = {
    ...homeSlice.actions,
    doGetNewest: doGetAll,
};

export default homeSlice.reducer;
