import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTypes } from '@/services/anime';

export enum STATUS { IDLE, LOADING, SUCCESS, FAILED }

export interface State {
    types: Array<string>,
    currentType: string,
    status: STATUS;
    error: any;
}

// Definisci la chiamata asincrona per ottenere i dati dal server
const doGetTypes = createAsyncThunk('container/search-form/doGetTypes', async () => await getTypes());

const newestSlice = createSlice({
    name: 'container/search-form',
    initialState: {
        types: [],
        currentType: '',
        status: STATUS.IDLE,
        error: null,
    } as State,
    reducers: {
        setCurrentType: (state, action) => {
            state.currentType = action.payload;
        },
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
            .addCase(doGetTypes.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(doGetTypes.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.types = action.payload;
            })
            .addCase(doGetTypes.rejected, (state, action) => {
                state.status = STATUS.FAILED;
                state.error = action.error.message;
            });
    },
});

export const actions = {
    ...newestSlice.actions,
    doGetTypes,
};

export default newestSlice.reducer;
