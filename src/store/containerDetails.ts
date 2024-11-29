import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDetails } from '@/services/details';
import { Item } from "@/services/details.types";

export enum STATUS { IDLE, LOADING, SUCCESS, FAILED }

export interface State {
    occurrence: Item | null,
    status: STATUS,
    error: any,
}

// Definisci la chiamata asincrona per ottenere i dati dal server
const doGetDetails = createAsyncThunk(
    'container/details/doGetDetails',
    async (payload: { id: string }) => {
        return await getDetails(payload);
    }
);

const detailsSlice = createSlice({
    name: 'container/details',
    initialState: {
        occurrence: null,
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
            .addCase(doGetDetails.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(doGetDetails.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.occurrence = action.payload.occurrence;
            })
            .addCase(doGetDetails.rejected, (state, action) => {
                state.status = STATUS.FAILED;
                state.error = action.error.message;
            });
    },
});

export const actions = {
    ...detailsSlice.actions,
    doGetDetails,
};

export default detailsSlice.reducer;
