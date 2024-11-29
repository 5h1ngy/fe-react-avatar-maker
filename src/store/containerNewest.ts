import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getNewest } from '@/services/anime';
import { Item } from "@/services/anime.types";

export enum STATUS { IDLE, LOADING, SUCCESS, FAILED }

export interface State {
    occurrences: Array<Item>,
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    status: STATUS;
    error: any;
}

// Definisci la chiamata asincrona per ottenere i dati dal server
const doGetNewest = createAsyncThunk(
    'container/newest/doGetNewest',
    async (payload: { page: number, limit: number, type?: string }) => {
        return await getNewest(payload);
    }
);

const newestSlice = createSlice({
    name: 'container/newest',
    initialState: {
        status: STATUS.IDLE,
        error: null,
        occurrences: [],
        page: 1,
        limit: 20,
        total: 10,
        totalPages: 1,
    } as State,
    reducers: {
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
            .addCase(doGetNewest.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(doGetNewest.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;

                state.occurrences = action.payload.occurrences;
                state.page = action.payload.page;
                state.limit = action.payload.limit;
                state.total = action.payload.total;
                state.totalPages = action.payload.totalPages;
            })
            .addCase(doGetNewest.rejected, (state, action) => {
                state.status = STATUS.FAILED;
                state.error = action.error.message;
            });
    },
});

export const actions = {
    ...newestSlice.actions,
    doGetNewest,
};

export default newestSlice.reducer;
